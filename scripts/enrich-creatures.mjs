import fs from "fs";
import path from "path";

const CREATURES_DB_PATH = path.join(process.cwd(), "src/data/db/creatures.ts");
const ITEMS_IMG_DIR = path.join(process.cwd(), "public/items");

const DOWNLOAD_ITEM_IMAGES = !process.argv.includes("--no-download-item-images");

// Bestiary Points & Kills Table (Ordinary Creatures)
const BESTIARY_TABLE = {
  "Harmless": { kills: 25, points: 1 },
  "Trivial": { kills: 250, points: 5 },
  "Easy": { kills: 500, points: 15 },
  "Medium": { kills: 1000, points: 25 },
  "Hard": { kills: 2500, points: 50 },
  "Challenging": { kills: 5000, points: 100 }
};

// Loot Chance Estimation based on Rarity
const LOOT_CHANCE_ESTIMATE = {
  "always": "100%",
  "common": "10-25%",
  "uncommon": "1-5%",
  "semi-rare": "0.5-1%",
  "rare": "0.1-0.5%",
  "very rare": "< 0.1%",
  "extremely rare": "< 0.01%"
};

async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath)) return true;
  
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log("Enriching creature data...");
  
  if (!fs.existsSync(CREATURES_DB_PATH)) {
    console.error(`File not found: ${CREATURES_DB_PATH}`);
    process.exit(1);
  }

  let content = fs.readFileSync(CREATURES_DB_PATH, "utf-8");
  
  // Robust extraction logic
  const startMarker = "export const creaturesDb: CreatureRecord[] = ";
  const endMarker = "export const creaturesBySlug";
  
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.lastIndexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end markers in creatures.ts");
    process.exit(1);
  }
  
  // Extract just the JSON array part
  let jsonString = content.substring(startIndex + startMarker.length, endIndex).trim();
  // Remove trailing semicolon if present
  if (jsonString.endsWith(";")) {
    jsonString = jsonString.slice(0, -1).trim();
  }
  
  let creatures;
  try {
    creatures = JSON.parse(jsonString);
  } catch (e) {
    console.error("Failed to parse JSON content:", e.message);
    // Print a snippet for debugging
    console.error("Snippet:", jsonString.slice(0, 100) + "..." + jsonString.slice(-100));
    process.exit(1);
  }
  
  let updatedCount = 0;
  
  if (!fs.existsSync(ITEMS_IMG_DIR)) {
    fs.mkdirSync(ITEMS_IMG_DIR, { recursive: true });
  }

  for (const creature of creatures) {
    let changed = false;

    // 1. Enrich Bestiary Kills & Charm Points
    if (creature.bestiaryDifficulty && BESTIARY_TABLE[creature.bestiaryDifficulty]) {
      const info = BESTIARY_TABLE[creature.bestiaryDifficulty];
      
      if (!creature.bestiaryKills) {
        creature.bestiaryKills = info.kills;
        changed = true;
      }
      
      if (!creature.charmPoints) {
        creature.charmPoints = info.points;
        changed = true;
      }
    }

    // 2. Enrich Loot with Chance & Image
    if (creature.loot && Array.isArray(creature.loot)) {
      for (const item of creature.loot) {
        // Estimate Chance
        if (!item.chance && item.rarity) {
          const rarityKey = item.rarity.toLowerCase();
          if (LOOT_CHANCE_ESTIMATE[rarityKey]) {
            item.chance = LOOT_CHANCE_ESTIMATE[rarityKey];
            changed = true;
          }
        }
        
        // Download Image
        const itemNameSlug = item.name.trim().replace(/ /g, "_");
        const imgName = `${itemNameSlug}.gif`;
        const localPath = path.join(ITEMS_IMG_DIR, imgName);
        const publicUrl = `/items/${imgName}`;
        
        if (DOWNLOAD_ITEM_IMAGES && !fs.existsSync(localPath) && !fs.existsSync(localPath.replace(".gif", ".png"))) {
          // We await here to not overwhelm connection
          const success = await downloadImage(`https://tibiawiki.dev/images/${itemNameSlug}.gif`, localPath);
          if (!success) {
            await downloadImage(`https://tibiawiki.dev/images/${itemNameSlug}.png`, localPath.replace(".gif", ".png"));
          }
        }
        
        // Add imageUrl to item record
        // Only if we confirm we have a local file or want to point to it assuming it exists
        if (!item.imageUrl) {
           if (fs.existsSync(localPath)) {
             item.imageUrl = publicUrl;
             changed = true;
           } else if (fs.existsSync(localPath.replace(".gif", ".png"))) {
             item.imageUrl = publicUrl.replace(".gif", ".png");
             changed = true;
           }
        }
      }
    }

    if (changed) updatedCount++;
    if (updatedCount % 50 === 0) process.stdout.write(".");
  }
  
  console.log(`\nUpdated ${updatedCount} creatures.`);

  // Update interface definition
  let newContent = content;
  if (!content.includes("imageUrl?: string;")) {
      newContent = newContent.replace(
        /export interface CreatureLootEntry {([\s\S]*?)}/,
        `export interface CreatureLootEntry {
  name: string;
  chance?: string;
  amount?: string;
  rarity?: string;
  imageUrl?: string;
}`
      );
  }
  
  // Replace array
  const newArrayStr = JSON.stringify(creatures, null, 2);
  newContent = newContent.replace(jsonString, newArrayStr);
  
  fs.writeFileSync(CREATURES_DB_PATH, newContent);
  console.log("Saved updated creatures.ts");
}

main().catch(console.error);
