import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const SEED_PATH = path.join(__dirname, 'seeds', 'items_seed.json');
const CACHE_DIR = path.join(ROOT, '.cache', 'items');
const OUTPUT_PATH = path.join(ROOT, 'src', 'data', 'db', 'items.ts');
const PUBLIC_ITEMS_DIR = path.join(ROOT, 'public', 'items');

const REFRESH = process.argv.includes('--refresh');
const DOWNLOAD_IMAGES = !process.argv.includes('--no-download-images');
const LIMIT_ARG = process.argv.find((arg) => arg.startsWith('--limit='));
const LIMIT = LIMIT_ARG ? Number(LIMIT_ARG.split('=')[1]) : null;

// Ensure directories exist
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_ITEMS_DIR)) fs.mkdirSync(PUBLIC_ITEMS_DIR, { recursive: true });

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function downloadImage(name, slug) {
  if (!DOWNLOAD_IMAGES) return null;
  
  const extensions = ['.gif', '.png'];
  const nameUnderscore = name.trim().replace(/ /g, '_');
  
  // Try local first
  for (const ext of extensions) {
    const filename = `${slug}${ext}`;
    const localPath = path.join(PUBLIC_ITEMS_DIR, filename);
    if (fs.existsSync(localPath) && !REFRESH) {
      return `/items/${filename}`;
    }
  }

  // URLs to try
  const candidates = [
    `https://tibia.fandom.com/wiki/Special:FilePath/${nameUnderscore}.gif`,
    `https://tibia.fandom.com/wiki/Special:FilePath/${nameUnderscore}.png`,
    `https://www.tibiawiki.com.br/images/${nameUnderscore}.gif`,
    `https://www.tibiawiki.com.br/images/${nameUnderscore}.png`
  ];

  for (const url of candidates) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) continue;
      
      const buffer = await res.arrayBuffer();
      if (buffer.byteLength < 100) continue; // Skip tiny/invalid images

      const ext = url.endsWith('.png') ? '.png' : '.gif';
      const filename = `${slug}${ext}`;
      const savePath = path.join(PUBLIC_ITEMS_DIR, filename);
      
      fs.writeFileSync(savePath, Buffer.from(buffer));
      // console.log(`Downloaded image for ${name}: ${filename}`);
      return `/items/${filename}`;
    } catch (e) {
      // Ignore error and try next
    }
  }
  return null;
}

async function fetchItemData(name) {
  const slug = slugify(name);
  const cachePath = path.join(CACHE_DIR, `${slug}.json`);
  
  if (!REFRESH && fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
  }

  try {
    const url = `https://tibiawiki.dev/api/items/${encodeURIComponent(name)}`;
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 404) return null; // Item not found
      throw new Error(`Failed to fetch ${name}: ${res.status}`);
    }
    
    const data = await res.json();
    fs.writeFileSync(cachePath, JSON.stringify(data, null, 2));
    // console.log(`Cached ${name}`);
    return data;
  } catch (error) {
    console.error(`Error processing ${name}:`, error.message);
    return null;
  }
}

function parseItem(raw, name) {
  if (!raw) return null;
  const slug = slugify(name);
  
  return {
    id: slug,
    name: raw.name || name,
    slug,
    category: raw.primarytype || raw.objectclass || 'Unknown',
    type: raw.primarytype || raw.objectclass,
    flavorText: raw.flavortext,
    description: raw.notes, // Notes often contain description-like info
    
    // Attributes
    armor: raw.armor ? Number(raw.armor) : undefined,
    attack: raw.attack ? Number(raw.attack) : undefined,
    defense: raw.defense ? Number(raw.defense) : undefined,
    weight: raw.weight ? Number(raw.weight) : undefined,
    imbuementSlots: raw.imbueslots ? Number(raw.imbueslots) : undefined,
    levelRequired: raw.levelrequired ? Number(raw.levelrequired) : undefined,
    vocation: raw.vocrequired,

    // Market/NPC
    value: raw.value, // Text like "30,000 - 55,000"
    npcValue: raw.npcvalue ? Number(raw.npcvalue) : undefined,
    buyFrom: raw.buyfrom,
    sellTo: raw.sellto,
    
    // Drops
    droppedBy: Array.isArray(raw.droppedby) ? raw.droppedby : [],
    
    // Meta
    implemented: raw.implemented,
    image: null // Will be populated in main loop
  };
}

async function main() {
  console.log('Starting items sync...');
  
  if (!fs.existsSync(SEED_PATH)) {
    console.error('Seed file not found. Run fetch-item-seed.mjs first.');
    process.exit(1);
  }

  const seed = JSON.parse(fs.readFileSync(SEED_PATH, 'utf-8'));
  console.log(`Loaded ${seed.length} items from seed.`);

  const items = [];
  let count = 0;
  
  const toProcess = LIMIT ? seed.slice(0, LIMIT) : seed;
  console.log(`Processing ${toProcess.length} items...`);

  for (const name of toProcess) {
    const raw = await fetchItemData(name);
    if (raw) {
      const parsed = parseItem(raw, name);
      if (parsed) {
        // Fetch image
        parsed.image = await downloadImage(name, parsed.slug);
        items.push(parsed);
      }
    }
    
    count++;
    if (count % 50 === 0) {
      process.stdout.write(`\rProcessed ${count}/${toProcess.length}`);
    }
  }
  
  console.log('\nGenerating output file...');
  
  // Sort items by name
  items.sort((a, b) => a.name.localeCompare(b.name));

  const fileContent = `// Generated by scripts/sync-items.mjs
// Date: ${new Date().toISOString()}

export interface ItemRecord {
  id: string;
  name: string;
  slug: string;
  category: string;
  type?: string;
  flavorText?: string;
  description?: string;
  
  armor?: number;
  attack?: number;
  defense?: number;
  weight?: number;
  imbuementSlots?: number;
  levelRequired?: number;
  vocation?: string;
  
  value?: string;
  npcValue?: number;
  buyFrom?: string;
  sellTo?: string;
  
  droppedBy?: string[];

  implemented?: string;

  image?: string | null;
}

export const itemsDb: ItemRecord[] = ${JSON.stringify(items, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, fileContent);
  console.log(`Saved ${items.length} items to ${OUTPUT_PATH}`);
}

main().catch(console.error);
