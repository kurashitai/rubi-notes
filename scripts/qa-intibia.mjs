const path = require('path');
const huntsPath = path.join(__dirname, '../src/data/hunts-intibia.ts');

// Dynamic import (ESM workaround)
const mod = require(huntsPath);
const hunts = mod.huntsDatabaseIntibia ?? mod.default;

const entries = Object.entries(hunts);

const totals = {
  total: entries.length,
  hasLevelRange: 0,
  hasRawExp: 0,
  hasBaseProfit: 0,
  hasAccessQuest: 0,
  hasHowToGet: 0,
  hasCoordinates: 0,
  hasMonsters: 0,
  hasMonsterLootAny: 0,
  hasTips: 0,
  hasVideo: 0,
  hasGroupVersion: 0,
};

const missing = {
  accessHowToGet: [] as string[],
  monsters: [] as string[],
  monsterLoot: [] as string[],
  tips: [] as string[],
};

for (const [slug, hunt] of entries) {
  if (hunt.levelRange && hunt.levelRange.includes('-')) totals.hasLevelRange++;
  if (hunt.rawExp && hunt.rawExp !== '0') totals.hasRawExp++;
  if (typeof hunt.baseProfit === 'number') totals.hasBaseProfit++;
  if (hunt.access?.quest) totals.hasAccessQuest++;
  if (hunt.access?.howToGet?.length) totals.hasHowToGet++; else missing.accessHowToGet.push(slug);
  if (hunt.access?.coordinates) totals.hasCoordinates++;
  if (hunt.monsters?.length) totals.hasMonsters++; else missing.monsters.push(slug);
  const lootAny = (hunt.monsters ?? []).some((m) => (m.loot ?? []).length > 0);
  if (lootAny) totals.hasMonsterLootAny++; else missing.monsterLoot.push(slug);
  if (hunt.tips?.length) totals.hasTips++; else missing.tips.push(slug);
  if (hunt.videoGuide) totals.hasVideo++;
  if (hunt.groupVersion) totals.hasGroupVersion++;
}

const pct = (n, total) => `${n}/${total} (${((n / total) * 100).toFixed(1)}%)`;

console.log('Intibia HuntData QA');
console.log('-----------------');
console.log('total:', totals.total);
console.log('levelRange:', pct(totals.hasLevelRange));
console.log('rawExp:', pct(totals.hasRawExp));
console.log('baseProfit:', pct(totals.hasBaseProfit));
console.log('access.quest:', pct(totals.hasAccessQuest));
console.log('access.howToGet:', pct(totals.hasHowToGet));
console.log('access.coordinates:', pct(totals.hasCoordinates));
console.log('monsters:', pct(totals.hasMonsters));
console.log('any monster.loot:', pct(totals.hasMonsterLootAny));
console.log('tips:', pct(totals.hasTips));
console.log('videoGuide:', pct(totals.hasVideo));
console.log('groupVersion(teamTag):', pct(totals.hasGroupVersion));

const showSome = (label, arr) => {
  const sample = arr.slice(0, 10);
  console.log(`\nMissing ${label}: ${arr.length}`);
  if (sample.length) console.log('sample:', sample.join(', '));
};

showSome('access.howToGet', missing.accessHowToGet);
showSome('monsters', missing.monsters);
showSome('monster loot', missing.monsterLoot);
showSome('tips', missing.tips);
