import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ITEMS_SEED_PATH = path.join(__dirname, 'seeds', 'items_seed.json');
const SPELLS_SEED_PATH = path.join(__dirname, 'seeds', 'spells_seed.json');
const NPCS_SEED_PATH = path.join(__dirname, 'seeds', 'npcs_seed.json');

// Helper
async function fetchAndSave(url, savePath, label) {
  console.log(`Fetching ${label} list from ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = await res.json();
    console.log(`Fetched ${data.length} ${label}.`);
    
    // Sort
    data.sort();
    
    // Ensure dir
    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    
    // Save
    fs.writeFileSync(savePath, JSON.stringify(data, null, 2));
    console.log(`Saved ${label} seed to ${savePath}`);
  } catch (err) {
    console.error(`Error fetching ${label}:`, err.message);
  }
}

async function main() {
  await fetchAndSave('https://tibiawiki.dev/api/items', ITEMS_SEED_PATH, 'items');
  await fetchAndSave('https://tibiawiki.dev/api/spells', SPELLS_SEED_PATH, 'spells');
  await fetchAndSave('https://tibiawiki.dev/api/npcs', NPCS_SEED_PATH, 'npcs');
}

main();
