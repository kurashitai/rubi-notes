import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SEED_PATH = path.join(__dirname, 'seeds', 'items_seed.json');

async function fetchSeed() {
  console.log('Fetching items list from https://tibiawiki.dev/api/items...');
  try {
    const res = await fetch('https://tibiawiki.dev/api/items');
    if (!res.ok) {
      throw new Error(`Failed to fetch items list: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    console.log(`Fetched ${data.length} items.`);

    // Sort alphabetically for consistency
    data.sort();

    // Ensure directory exists
    fs.mkdirSync(path.dirname(SEED_PATH), { recursive: true });

    // Save to seed file
    fs.writeFileSync(SEED_PATH, JSON.stringify(data, null, 2));
    console.log(`Saved items seed to ${SEED_PATH}`);
  } catch (error) {
    console.error('Error fetching items seed:', error);
    process.exit(1);
  }
}

fetchSeed();
