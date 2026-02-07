import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SEED_PATH = path.join(ROOT, "scripts", "seeds", "creatures_seed.json");
const CACHE_DIR = path.join(ROOT, ".cache", "creatures");
const OUTPUT_PATH = path.join(ROOT, "src", "data", "db", "creatures.ts");
const PUBLIC_CREATURES_DIR = path.join(ROOT, "public", "creatures");

const REFRESH = process.argv.includes("--refresh");
const DOWNLOAD_IMAGES = !process.argv.includes("--no-download-images");
const LIMIT_ARG = process.argv.find((arg) => arg.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split("=")[1]) : null;

const ELEMENTS = ["physical", "fire", "ice", "earth", "energy", "holy", "death"];

const ELEMENT_FIELD_CANDIDATES = {
  physical: ["physicalDmgMod", "physicaldmgmod", "physicalDamage", "physical"],
  fire: ["fireDmgMod", "firedmgmod", "fireDamage", "fire"],
  ice: ["iceDmgMod", "icedmgmod", "iceDamage", "ice"],
  earth: ["earthDmgMod", "earthdmgmod", "earthDamage", "earth"],
  energy: ["energyDmgMod", "energydmgmod", "energyDamage", "energy"],
  holy: ["holyDmgMod", "holydmgmod", "holyDamage", "holy"],
  death: ["deathDmgMod", "deathdmgmod", "deathDamage", "death"],
};

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

function toPercent(value) {
  const num = toNumber(value);
  if (num === null) return null;
  return num;
}

function normalizeDifficulty(value) {
  if (!value) return "Unknown";
  const normalized = String(value).trim().toLowerCase();
  const map = {
    trivial: "Trivial",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    challenging: "Challenging",
    archfoe: "Archfoe",
    nemesis: "Nemesis",
  };
  return map[normalized] || "Unknown";
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

function parseImmunities(raw) {
  const immunityValue = getField(raw, ["immunities", "immunity", "immune"]);
  if (!immunityValue) return [];
  if (Array.isArray(immunityValue)) {
    return immunityValue.map((item) => String(item).trim().toLowerCase()).filter(Boolean);
  }
  return String(immunityValue)
    .split(/,|;|\//)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function extractModifiers(raw) {
  const mods = {};
  for (const element of ELEMENTS) {
    const candidates = ELEMENT_FIELD_CANDIDATES[element] || [];
    const value = getField(raw, candidates);
    const mod = toPercent(value);
    if (mod !== null) {
      mods[element] = mod;
    }
  }
  return mods;
}

function toLoot(raw) {
  const lootValue = getField(raw, ["loot", "lootList", "lootlist"]);
  if (!lootValue) return null;
  if (Array.isArray(lootValue)) {
    return lootValue.map((entry) => {
      if (typeof entry === "string") return { name: entry };
      if (!entry || typeof entry !== "object") return null;
      return {
        name: entry.name || entry.itemName || entry.item || entry.loot || "Unknown",
        chance: entry.chance ? String(entry.chance) : undefined,
        amount: entry.amount ? String(entry.amount) : undefined,
        rarity: entry.rarity ? String(entry.rarity) : undefined,
      };
    }).filter(Boolean);
  }
  if (typeof lootValue === "string") {
    return lootValue
      .split(/,|;|\//)
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => ({ name: item }));
  }
  return null;
}

async function downloadImageToPublic(urlCandidates, slug) {
  const candidates = (Array.isArray(urlCandidates) ? urlCandidates : [urlCandidates])
    .map((u) => (u ? String(u) : ""))
    .filter(Boolean);

  if (candidates.length === 0) return null;
  if (!DOWNLOAD_IMAGES) return candidates[0];

  fs.mkdirSync(PUBLIC_CREATURES_DIR, { recursive: true });

  for (const url of candidates) {
    try {
      const u = new URL(url);
      const extFromPath = path.extname(u.pathname).toLowerCase();
      const ext = extFromPath && extFromPath.length <= 5 ? extFromPath : ".png";
      const filename = `${slug}${ext}`;
      const outPath = path.join(PUBLIC_CREATURES_DIR, filename);

      if (!REFRESH && fs.existsSync(outPath)) {
        return `/creatures/${filename}`;
      }

      const res = await fetch(url);
      if (!res.ok) continue;

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.startsWith("image/") && !url.includes("Special:FilePath")) {
        // If the endpoint doesn't advertise an image, skip.
        continue;
      }

      const arrayBuffer = await res.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength < 256) continue;

      fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
      return `/creatures/${filename}`;
    } catch {
      // try next
    }
  }

  return null;
}

async function normalizeCreature(raw, name) {
  const id = slugify(name);
  const slug = id;

  const hp = toNumber(getField(raw, ["hp", "health", "hitpoints"]));
  const exp = toNumber(getField(raw, ["exp", "experience"]));
  const armor = toNumber(getField(raw, ["armor", "armour"]));
  const speed = toNumber(getField(raw, ["speed"]));

  const bestiaryClass = getField(raw, ["bestiaryclass", "class", "classification", "creatureclass", "race", "primarytype"]);
  const bestiaryDifficulty = normalizeDifficulty(
    getField(raw, ["bestiarylevel", "bestiarydifficulty", "difficulty"])
  );
  const bestiaryKills = toNumber(getField(raw, ["bestiarykills", "bestiarypoints", "bestiarypoints" ]));
  const charmPoints = toNumber(getField(raw, ["charmpoints", "charmpoints"]));
  const occurrence = getField(raw, ["occurrence"]);
  const category = getField(raw, ["classification", "creatureclass", "race", "type", "primarytype"]);
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

  const modifiers = extractModifiers(raw);
  const weaknesses = {};
  const resistances = {};
  const immunities = new Set();

  for (const element of ELEMENTS) {
    const mod = modifiers[element];
    if (mod === undefined) continue;
    if (mod === 0) {
      immunities.add(element);
    } else if (mod > 100) {
      weaknesses[element] = Math.round((mod - 100) * 100) / 100;
    } else if (mod < 100) {
      resistances[element] = Math.round((100 - mod) * 100) / 100;
    }
  }

  const extraImmunities = parseImmunities(raw);
  for (const immune of extraImmunities) {
    if (ELEMENTS.includes(immune)) {
      immunities.add(immune);
    }
  }

  const loot = toLoot(raw) || undefined;

  return {
    id,
    slug,
    name,
    hp,
    exp,
    armor,
    speed,
    bestiaryClass: bestiaryClass ? String(bestiaryClass) : null,
    bestiaryDifficulty,
    bestiaryKills,
    charmPoints,
    occurrence: occurrence ? String(occurrence) : null,
    category: category ? String(category) : null,
    weaknesses,
    resistances,
    immunities: Array.from(immunities),
    loot,
    imageUrl: imageUrl ? String(imageUrl) : null,
    source: {
      provider: "tibiawiki.dev",
      url: `https://tibiawiki.dev/api/creatures/${encodeURIComponent(name)}`,
    },
  };
}

function renderTs(creatures) {
  const header = `// AUTO-GENERATED by scripts/sync-creatures.mjs. DO NOT EDIT.\n`;
  const types = `\nexport type DamageElement = \"physical\" | \"fire\" | \"ice\" | \"earth\" | \"energy\" | \"holy\" | \"death\";\n\nexport type BestiaryDifficulty =\n  | \"Trivial\"\n  | \"Easy\"\n  | \"Medium\"\n  | \"Hard\"\n  | \"Challenging\"\n  | \"Archfoe\"\n  | \"Nemesis\"\n  | \"Unknown\";\n\nexport interface CreatureLootEntry {\n  name: string;\n  chance?: string;\n  amount?: string;\n  rarity?: string;\n}\n\nexport interface CreatureRecord {\n  id: string;\n  slug: string;\n  name: string;\n  hp: number | null;\n  exp: number | null;\n  armor: number | null;\n  speed: number | null;\n  bestiaryClass: string | null;\n  bestiaryDifficulty: BestiaryDifficulty;\n  bestiaryKills: number | null;\n  charmPoints: number | null;\n  occurrence: string | null;\n  category: string | null;\n  weaknesses: Partial<Record<DamageElement, number>>;\n  resistances: Partial<Record<DamageElement, number>>;\n  immunities: DamageElement[];\n  loot?: CreatureLootEntry[];\n  imageUrl?: string | null;\n  source: {\n    provider: \"tibiawiki.dev\";\n    url: string;\n  };\n}\n`;
  const body = `\nexport const creaturesDb: CreatureRecord[] = ${JSON.stringify(creatures, null, 2)};\n\nexport const creaturesBySlug: Record<string, CreatureRecord> = Object.fromEntries(\n  creaturesDb.map((creature) => [creature.slug, creature])\n);\n`;
  return header + types + body;
}

async function fetchCreature(name, cachePath) {
  if (!REFRESH && fs.existsSync(cachePath)) {
    return readJson(cachePath);
  }

  const url = `https://tibiawiki.dev/api/creatures/${encodeURIComponent(name)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${name}: ${res.status}`);
  }
  const json = await res.json();
  fs.writeFileSync(cachePath, JSON.stringify(json, null, 2));
  return json;
}

async function main() {
  if (!fs.existsSync(SEED_PATH)) {
    console.error(`Seed file not found: ${SEED_PATH}`);
    process.exit(1);
  }

  const seed = readJson(SEED_PATH);
  const names = Array.isArray(seed) ? seed : seed.creatures || [];

  if (!Array.isArray(names) || names.length === 0) {
    console.error("Seed file is empty or invalid.");
    process.exit(1);
  }

  const selected = LIMIT ? names.slice(0, LIMIT) : names;

  fs.mkdirSync(CACHE_DIR, { recursive: true });

  const creatures = [];
  const errors = [];

  for (const name of selected) {
    const slug = slugify(name);
    const cachePath = path.join(CACHE_DIR, `${slug}.json`);

    try {
      const raw = await fetchCreature(name, cachePath);
      creatures.push(await normalizeCreature(raw, name));
    } catch (error) {
      errors.push({ name, error: String(error?.message || error) });
    }

    await new Promise((resolve) => setTimeout(resolve, 120));
  }

  const output = renderTs(creatures);
  const changed = writeIfChanged(OUTPUT_PATH, output);

  console.log(changed ? "Updated creatures database." : "Creatures database already up to date.");
  console.log(`Processed: ${creatures.length}/${selected.length}`);

  if (errors.length) {
    console.warn(`Warnings: ${errors.length} creatures failed.`);
    for (const issue of errors.slice(0, 10)) {
      console.warn(`- ${issue.name}: ${issue.error}`);
    }
    if (errors.length > 10) {
      console.warn(`- ... and ${errors.length - 10} more.`);
    }
  }

  if (creatures.length === 0) {
    process.exitCode = 1;
  }
}

await main();
