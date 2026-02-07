export interface IntibiaHunt {
  id: string;
  slug: string;
  title: string;
  vocation: string;
  levelRange: { min: number; max: number };
  xpPerHour: { min: string; max: string };
  xpPerHour150: { min: string; max: string };
  profitPerHour: { min: string; max: string };
  video?: string;
  creatures: Array<{ name: string; xp: number; points: number }>;
  bestLoots: Array<{ name: string; value: string; chance: string }>;
  strategy: string;
  location: string;
  howToGetThere: string;
  supplies: Array<{ name: string; quantity: string }>;
  requirements: string;
  images: string[];
  mapCoordinates?: string;
  url: string;
}

export const huntPheCH: IntibiaHunt = {
  id: 'PheCH',
  slug: 'paladin-asura-palace-asuras-thunderstorms',
  title: 'Asura Palace',
  vocation: 'Paladin',
  levelRange: { min: 300, max: 600 },
  xpPerHour: { min: '2.5kk', max: '3.5kk' },
  xpPerHour150: { min: '3.75kk', max: '5.25kk' },
  profitPerHour: { min: '100k', max: '200k' },
  video: 'https://www.youtube.com/watch?v=TrRa8Y3-l94',
  creatures: [
    { name: 'Hydra', xp: 2100, points: 25 },
    { name: 'Lich', xp: 900, points: 25 },
    { name: 'Frost Flower Asura', xp: 4200, points: 25 },
    { name: 'Dawnfire Asura', xp: 4100, points: 50 },
    { name: 'Midnight Asura', xp: 4100, points: 25 },
    { name: 'Hellspawn', xp: 2550, points: 25 },
    { name: 'Destroyer', xp: 2500, points: 25 },
    { name: 'Massive Fire Elemental', xp: 1400, points: 25 },
    { name: 'Massive Energy Elemental', xp: 950, points: 25 }
  ],
  bestLoots: [
    { name: 'Maxilla Maximus', value: '400k', chance: '0.05%' },
    { name: 'Skull Helmet', value: '40k', chance: '0.12%' },
    { name: 'Steel Boots', value: '30k', chance: '0.83%' }
  ],
  strategy: 'One of the best hunts for paladins level 300+. Great for experience and loot.\n\n🏹 You can attack from distance or close a box (in this case be ready to use prismatic rings). Use diamond arrows + exevo mas san + thunderstorm runes to kill the creatures.\n\n🛡️ Always bring Stone Skin Amulets and Might Rings to use in case of danger. Recommended equips:\n- Helmet: Zaoan Helmet + Powerful Mana Leech\n- Armor: Ghost Chestplate + Powerful Life Leech\n- Bow: Bow of Cataclysm + Powerful Critical, Mana Leech & Life Leech\n- Legs: Fabulous Legs\n- Boots: Guardian Boots\n- Amulet: Enchanted Werewolf Amulet or Sleep Shawl\n\n🐾 You will make the bestiaries for Dawnfire Asura, Midnight Asura and Hellspawn (100 charm points in total). It will take around 10 hours to finish all the bestiaries.\n\n⚡️ Charm runes:\n- Dodge or Zap on Midnight Asura\n- Freeze or Wound on Dawnfire Asura\n- Freeze on Hellspawn',
  location: 'Port Hope (premium)',
  howToGetThere: '',
  supplies: [
    { name: 'Diamond Arrow', quantity: '300x' },
    { name: 'Great Mana Potion', quantity: '550x' },
    { name: 'Ultimate Spirit Potion', quantity: '100x' },
    { name: 'Thunderstorm Rune', quantity: '150x' },
    { name: 'Dwarven Ring', quantity: '2x' }
  ],
  requirements: 'A hunt não tem requisitos.',
  images: [],
  mapCoordinates: '',
  url: 'https://intibia.com/pt/hunts/PheCH/paladin-asura-palace-asuras-thunderstorms'
};
