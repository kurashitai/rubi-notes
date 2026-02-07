import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SEED_PATH = path.join(ROOT, "scripts", "seeds", "creatures_seed.json");

async function main() {
  console.log("Fetching full creature list from tibiawiki.dev...");
  
  try {
    const res = await fetch("https://tibiawiki.dev/api/creatures");
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    
    const creatures = await res.json();
    
    if (!Array.isArray(creatures)) {
      throw new Error("Invalid response format: expected array");
    }

    // Filter out garbage if needed, but the API seems clean
    const cleanList = creatures.sort();

    console.log(`Found ${cleanList.length} creatures.`);
    
    // Save to seed
    fs.mkdirSync(path.dirname(SEED_PATH), { recursive: true });
    fs.writeFileSync(SEED_PATH, JSON.stringify(cleanList, null, 2));
    
    console.log(`Saved to ${SEED_PATH}`);
    
  } catch (error) {
    console.error("Error fetching creatures:", error);
    process.exit(1);
  }
}

await main();
