import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CACHE_DIR = path.join(ROOT, ".cache", "items");
const OUTPUT_PATH = path.join(ROOT, "src", "data", "db", "items.ts");
const PUBLIC_ITEMS_DIR = path.join(ROOT, "public", "items");

const REFRESH = process.argv.includes("--refresh");
const DOWNLOAD_IMAGES = !process.argv.includes("--no-download-images");
const LIMIT_ARG = process.argv.find((arg) => arg.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split("=")[1]) : null;

// Lista inicial de categorias de itens para buscar
const CATEGORIES = [
  "Swords", "Axes", "Clubs", "Distance Weapons", "Wands", "Rods",
  "Helmets", "Armors", "Legs", "Boots", "Shields", "Spellbooks",
  "Amulets", "Rings", "Valuables", "Creature Products"
];

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeIfChanged(filePath, content) {
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, "utf8");
    if (existing === content) {
      return false;
    }
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return true;
}

function toNumber(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const cleaned = String(value).replace(/[^0-9.-]/g, "");
  if (!cleaned) return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function getField(raw, keys) {
  if (!raw || typeof raw !== "object") return null;
  const lowerKeys = new Map(Object.keys(raw).map((key) => [key.toLowerCase(), key]));
  for (const key of keys) {
    const direct = raw[key];
    if (direct !== undefined && direct !== null && String(direct).trim() !== "") {
      return direct;
    }
    const foundKey = lowerKeys.get(key.toLowerCase());
    if (foundKey) {
      const val = raw[foundKey];
      if (val !== undefined && val !== null && String(val).trim() !== "") {
        return val;
      }
    }
  }
  return null;
}

async function downloadImageToPublic(urlCandidates, slug) {
  const candidates = (Array.isArray(urlCandidates) ? urlCandidates : [urlCandidates])
    .map((u) => (u ? String(u) : ""))
    .filter(Boolean);

  if (candidates.length === 0) return null;
  if (!DOWNLOAD_IMAGES) return candidates[0];

  fs.mkdirSync(PUBLIC_ITEMS_DIR, { recursive: true });

  for (const url of candidates) {
    try {
      const u = new URL(url);
      const extFromPath = path.extname(u.pathname).toLowerCase();
      const ext = extFromPath && extFromPath.length <= 5 ? extFromPath : ".gif";
      const filename = `${slug}${ext}`;
      const outPath = path.join(PUBLIC_ITEMS_DIR, filename);

      if (!REFRESH && fs.existsSync(outPath)) {
        return `/items/${filename}`;
      }

      const res = await fetch(url);
      if (!res.ok) continue;

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.startsWith("image/") && !url.includes("Special:FilePath")) {
        continue;
      }

      const arrayBuffer = await res.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength < 100) continue;

      fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
      return `/items/${filename}`;
    } catch {
      // try next
    }
  }

  return null;
}

async function fetchItem(name, cachePath) {
  if (!REFRESH && fs.existsSync(cachePath)) {
    return readJson(cachePath);
  }

  const url = `https://tibiawiki.dev/api/items/${encodeURIComponent(name)}`;
  const res = await fetch(url);
  if (!res.ok) {
    // Se falhar, tenta buscar na lista geral primeiro para pegar o nome correto se houver redirect
    throw new Error(`Failed to fetch ${name}: ${res.status}`);
  }
  const json = await res.json();
  fs.writeFileSync(cachePath, JSON.stringify(json, null, 2));
  return json;
}

async function normalizeItem(raw, name) {
  const id = slugify(name);
  const slug = id;

  const value = toNumber(getField(raw, ["value", "npcvalue", "sell", "price"]));
  const weight = toNumber(getField(raw, ["weight", "oz"]));
  const armor = toNumber(getField(raw, ["armor", "arm", "def"])); // Alguns itens usam def como armor
  const attack = toNumber(getField(raw, ["attack", "atk"]));
  const defense = toNumber(getField(raw, ["defense", "def"]));
  const category = getField(raw, ["category", "type", "itemclass"]);
  
  const droppedByRaw = getField(raw, ["droppedby", "lootfrom", "dropped_by"]);
  let droppedBy = [];
  if (Array.isArray(droppedByRaw)) {
    droppedBy = droppedByRaw.map(String);
  } else if (typeof droppedByRaw === "string") {
    droppedBy = droppedByRaw.split(/,|;/).map(s => s.trim()).filter(Boolean);
  }

  const imageUrlRaw = getField(raw, ["image", "imageurl", "imageUrl", "image_url"]);
  const nameUnderscore = String(name).trim().replace(/ /g, "_");
  const imageUrl = await downloadImageToPublic(
    [
      imageUrlRaw ? String(imageUrlRaw) : null,
      `https://tibia.fandom.com/wiki/Special:FilePath/${nameUnderscore}.gif`,
      `https://tibia.fandom.com/wiki/Special:FilePath/${nameUnderscore}.png`,
      `https://www.tibiawiki.com.br/images/${nameUnderscore}.gif`,
      `https://www.tibiawiki.com.br/images/${nameUnderscore}.png`,
    ],
    slug
  );

  return {
    id,
    slug,
    name,
    value,
    weight,
    armor,
    attack,
    defense,
    category: category ? String(category) : null,
    droppedBy,
    imageUrl: imageUrl ? String(imageUrl) : null,
    source: {
      provider: "tibiawiki.dev",
      url: `https://tibiawiki.dev/api/items/${encodeURIComponent(name)}`,
    },
  };
}

function renderTs(items) {
  const header = `// AUTO-GENERATED by scripts/sync-items.mjs. DO NOT EDIT.\n`;
  const types = `\nexport interface ItemRecord {\n  id: string;\n  slug: string;\n  name: string;\n  value: number | null;\n  weight: number | null;\n  armor: number | null;\n  attack: number | null;\n  defense: number | null;\n  category: string | null;\n  droppedBy: string[];\n  imageUrl: string | null;\n  source: {\n    provider: "tibiawiki.dev";\n    url: string;\n  };\n}\n`;
  const body = `\nexport const itemsDb: ItemRecord[] = ${JSON.stringify(items, null, 2)};\n\nexport const itemsBySlug: Record<string, ItemRecord> = Object.fromEntries(\n  itemsDb.map((item) => [item.slug, item])\n);\n\nexport const itemsByName: Record<string, ItemRecord> = Object.fromEntries(\n  itemsDb.map((item) => [item.name.toLowerCase(), item])\n);\n`;
  return header + types + body;
}

async function fetchItemList() {
  console.log("Fetching item list from tibiawiki.dev...");
  try {
    const res = await fetch("https://tibiawiki.dev/api/items");
    if (!res.ok) throw new Error(`Failed to fetch items list: ${res.status}`);
    const items = await res.json();
    return Array.isArray(items) ? items : [];
  } catch (error) {
    console.error("Error fetching items list:", error);
    return [];
  }
}

async function main() {
  const allItemNames = await fetchItemList();
  
  if (allItemNames.length === 0) {
    console.error("No items found to process.");
    process.exit(1);
  }

  // Se tiver limite, pega apenas os primeiros N itens
  const selected = LIMIT ? allItemNames.slice(0, LIMIT) : allItemNames;

  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const items = [];
  const errors = [];

  console.log(`Processing ${selected.length} items...`);

  for (const name of selected) {
    const slug = slugify(name);
    const cachePath = path.join(CACHE_DIR, `${slug}.json`);

    try {
      const raw = await fetchItem(name, cachePath);
      items.push(await normalizeItem(raw, name));
    } catch (error) {
      errors.push({ name, error: String(error?.message || error) });
    }

    // Rate limit
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const output = renderTs(items);
  const changed = writeIfChanged(OUTPUT_PATH, output);

  console.log(changed ? "Updated items database." : "Items database already up to date.");
  console.log(`Processed: ${items.length}/${selected.length}`);

  if (errors.length) {
    console.warn(`Warnings: ${errors.length} items failed.`);
    // Omit errors for brevity in production logs
  }
}

await main();
