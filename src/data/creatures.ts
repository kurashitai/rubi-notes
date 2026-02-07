// Creatures Database - Rubi-Notes
// Criaturas do Rubinot com informações detalhadas

export interface Creature {
  slug: string;
  name: string;
  hp: number;
  exp: number;
  damage: string;
  armor: number;
  speed: number;
  weaknesses: Record<string, number>; // elemento: % de dano extra
  immunities: string[];
  resistances: Record<string, number>; // elemento: % de redução
  abilities: string[];
  bestiaryKills: number;
  bestiaryClass: "Trivial" | "Easy" | "Medium" | "Hard" | "Challenging" | "Archfoe" | "Nemesis";
  charmPoints: number;
  occurrence: "Common" | "Uncommon" | "Rare" | "Very Rare";
  locations: string[];
  loot: { item: string; chance: string; value: string; rarity: "Common" | "Uncommon" | "Semi-Rare" | "Rare" | "Very Rare" }[];
  category: "Amphibics" | "Aquatics" | "Birds" | "Constructs" | "Demons" | "Dragons" | "Elementals" | "Extra Dimensional" | "Fey" | "Giants" | "Humanoids" | "Humans" | "Lycanthropes" | "Magicals" | "Mammals" | "Plants" | "Reptiles" | "Slimes" | "The Undead" | "Vermin";
  imageUrl?: string;
}

// Criaturas organizadas por categoria
export const creaturesDatabase: Record<string, Creature> = {
  // === LYCANTHROPES (Werecreatures) ===
  "weretiger": {
    slug: "weretiger",
    name: "Weretiger",
    hp: 4200,
    exp: 3800,
    damage: "0-650 (Physical, Holy)",
    armor: 45,
    speed: 130,
    weaknesses: { "Death": 25, "Holy": 15, "Earth": 5 },
    immunities: [],
    resistances: { "Fire": 30, "Energy": 25, "Ice": 10 },
    abilities: [
      "Melee (0-350)",
      "Holy Strike (0-300)",
      "Self-Healing (100-200)",
      "Haste"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Hard",
    charmPoints: 50,
    occurrence: "Common",
    locations: ["Oskayaat", "Kilmaresh Mountains"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-150", rarity: "Common" },
      { item: "Weretiger Tooth", chance: "15.2%", value: "500gp", rarity: "Uncommon" },
      { item: "Striped Fur", chance: "10.5%", value: "800gp", rarity: "Semi-Rare" },
      { item: "Sabretooth", chance: "5.1%", value: "2.5k", rarity: "Rare" },
      { item: "Yellow Gem", chance: "0.8%", value: "15k", rarity: "Very Rare" }
    ],
    category: "Lycanthropes"
  },
  "werelion": {
    slug: "werelion",
    name: "Werelion",
    hp: 4500,
    exp: 4100,
    damage: "0-700 (Physical, Holy)",
    armor: 48,
    speed: 125,
    weaknesses: { "Death": 25, "Earth": 10 },
    immunities: ["Paralysis"],
    resistances: { "Fire": 35, "Energy": 20, "Ice": 15 },
    abilities: [
      "Melee (0-400)",
      "Holy Wave (0-300)",
      "Self-Healing (150-250)",
      "Strong Haste"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Hard",
    charmPoints: 50,
    occurrence: "Common",
    locations: ["Kilmaresh", "Werelion Cave"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-180", rarity: "Common" },
      { item: "Werelion Mane", chance: "18.5%", value: "600gp", rarity: "Uncommon" },
      { item: "Lion's Mane", chance: "8.2%", value: "1.2k", rarity: "Semi-Rare" },
      { item: "Golden Idol", chance: "2.5%", value: "5k", rarity: "Rare" }
    ],
    category: "Lycanthropes"
  },
  "werehyaena": {
    slug: "werehyaena",
    name: "Werehyaena",
    hp: 4800,
    exp: 4300,
    damage: "0-680 (Physical, Death)",
    armor: 50,
    speed: 120,
    weaknesses: { "Holy": 25, "Fire": 15 },
    immunities: [],
    resistances: { "Death": 40, "Earth": 15 },
    abilities: [
      "Melee (0-380)",
      "Death Strike (0-320)",
      "Paralyze",
      "Self-Healing"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Hard",
    charmPoints: 50,
    occurrence: "Common",
    locations: ["Kilmaresh Catacombs", "Hyaena Dens"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-200", rarity: "Common" },
      { item: "Werehyaena Talisman", chance: "12.8%", value: "700gp", rarity: "Uncommon" },
      { item: "Hyaena Tongue", chance: "9.1%", value: "900gp", rarity: "Semi-Rare" }
    ],
    category: "Lycanthropes"
  },

  // === DRAGONS ===
  "dragon": {
    slug: "dragon",
    name: "Dragon",
    hp: 1000,
    exp: 700,
    damage: "0-310 (Physical, Fire)",
    armor: 25,
    speed: 100,
    weaknesses: { "Ice": 10 },
    immunities: ["Fire"],
    resistances: { "Energy": 20, "Earth": 80 },
    abilities: [
      "Melee (0-120)",
      "Fire Wave (0-170)",
      "Great Fireball (0-100)",
      "Self-Healing (40-70)"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Common",
    locations: ["Darashia Dragon Lair", "Fenrock", "Thais Dragon Lair", "Venore Dragon Lair"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-110", rarity: "Common" },
      { item: "Dragon Ham", chance: "60%", value: "50gp", rarity: "Common" },
      { item: "Dragon Scale Mail", chance: "0.5%", value: "15k", rarity: "Very Rare" },
      { item: "Dragon Shield", chance: "0.3%", value: "20k", rarity: "Very Rare" }
    ],
    category: "Dragons"
  },
  "dragon-lord": {
    slug: "dragon-lord",
    name: "Dragon Lord",
    hp: 1900,
    exp: 2100,
    damage: "0-450 (Physical, Fire)",
    armor: 30,
    speed: 110,
    weaknesses: { "Ice": 10 },
    immunities: ["Fire", "Paralysis"],
    resistances: { "Energy": 30, "Earth": 100 },
    abilities: [
      "Melee (0-230)",
      "Great Fire Wave (0-250)",
      "Fire Bomb",
      "Self-Healing (50-90)"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Uncommon",
    locations: ["Darashia Dragon Lord Lair", "Goroma"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-195", rarity: "Common" },
      { item: "Dragon Lord Trophy", chance: "0.8%", value: "25k", rarity: "Very Rare" },
      { item: "Royal Helmet", chance: "0.2%", value: "30k", rarity: "Very Rare" }
    ],
    category: "Dragons"
  },
  "frost-dragon": {
    slug: "frost-dragon",
    name: "Frost Dragon",
    hp: 1800,
    exp: 2100,
    damage: "0-500 (Physical, Ice)",
    armor: 35,
    speed: 105,
    weaknesses: { "Fire": 10 },
    immunities: ["Ice", "Paralysis"],
    resistances: { "Energy": 20, "Death": 10 },
    abilities: [
      "Melee (0-250)",
      "Ice Wave (0-300)",
      "Icicle (0-150)",
      "Paralyze",
      "Self-Healing"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Uncommon",
    locations: ["Okolnir", "Nibelor Ice Mines", "Formorgar Glacier"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-230", rarity: "Common" },
      { item: "Ice Dragon Fin", chance: "15%", value: "1k", rarity: "Uncommon" },
      { item: "Dragon Slayer", chance: "0.5%", value: "100k", rarity: "Very Rare" }
    ],
    category: "Dragons"
  },

  // === DEMONS ===
  "demon": {
    slug: "demon",
    name: "Demon",
    hp: 8200,
    exp: 6000,
    damage: "0-620 (Physical, Fire, Energy, Life Drain)",
    armor: 37,
    speed: 128,
    weaknesses: { "Holy": 12, "Ice": 10 },
    immunities: ["Fire", "Paralysis", "Invisibility"],
    resistances: { "Death": 20, "Energy": 50, "Earth": 40 },
    abilities: [
      "Melee (0-520)",
      "Great Energy Beam (0-350)",
      "Fire Wave (0-250)",
      "Life Drain (0-300)",
      "Mana Drain (0-120)",
      "Distance Paralysis",
      "Self-Healing (80-250)"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Challenging",
    charmPoints: 50,
    occurrence: "Uncommon",
    locations: ["Edron Hero Cave", "Goroma", "Razachai", "Demon Forge"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-310", rarity: "Common" },
      { item: "Demonic Essence", chance: "10%", value: "2k", rarity: "Uncommon" },
      { item: "Demon Horn", chance: "5%", value: "5k", rarity: "Semi-Rare" },
      { item: "Demon Trophy", chance: "0.1%", value: "500k", rarity: "Very Rare" },
      { item: "Demonrage Sword", chance: "0.05%", value: "1kk", rarity: "Very Rare" },
      { item: "Magic Plate Armor", chance: "0.08%", value: "200k", rarity: "Very Rare" }
    ],
    category: "Demons"
  },
  "hellspawn": {
    slug: "hellspawn",
    name: "Hellspawn",
    hp: 3500,
    exp: 2550,
    damage: "0-450 (Physical, Fire)",
    armor: 33,
    speed: 115,
    weaknesses: { "Ice": 10, "Holy": 5 },
    immunities: ["Fire"],
    resistances: { "Death": 15, "Energy": 20 },
    abilities: [
      "Melee (0-260)",
      "Fire Wave (0-200)",
      "Fire Strike (0-150)",
      "Self-Healing"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Hard",
    charmPoints: 50,
    occurrence: "Common",
    locations: ["Yalahar Hellspawn Cave", "Goroma Volcano"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-240", rarity: "Common" },
      { item: "Hellspawn Tail", chance: "18%", value: "500gp", rarity: "Uncommon" },
      { item: "Demonic Essence", chance: "3%", value: "2k", rarity: "Rare" }
    ],
    category: "Demons"
  },

  // === GIANTS ===
  "cyclops": {
    slug: "cyclops",
    name: "Cyclops",
    hp: 260,
    exp: 150,
    damage: "0-105 (Physical)",
    armor: 18,
    speed: 85,
    weaknesses: { "Death": 5, "Earth": 15 },
    immunities: [],
    resistances: { "Holy": 20 },
    abilities: [
      "Melee (0-105)",
      "Boulder (0-65)"
    ],
    bestiaryKills: 500,
    bestiaryClass: "Easy",
    charmPoints: 15,
    occurrence: "Common",
    locations: ["Mount Sternum", "Edron Cyclops Camp", "Thais Cyclops Camp"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-47", rarity: "Common" },
      { item: "Meat", chance: "50%", value: "5gp", rarity: "Common" },
      { item: "Cyclops Toe", chance: "8%", value: "200gp", rarity: "Uncommon" }
    ],
    category: "Giants"
  },
  "behemoth": {
    slug: "behemoth",
    name: "Behemoth",
    hp: 4000,
    exp: 2500,
    damage: "0-500 (Physical)",
    armor: 50,
    speed: 95,
    weaknesses: { "Death": 1, "Earth": 10 },
    immunities: ["Paralysis"],
    resistances: { "Holy": 20, "Energy": 20, "Fire": 10, "Ice": 10 },
    abilities: [
      "Melee (0-450)",
      "Boulder Throwing (0-200)",
      "Stomp (0-150)"
    ],
    bestiaryKills: 2500,
    bestiaryClass: "Hard",
    charmPoints: 50,
    occurrence: "Uncommon",
    locations: ["Cyclopolis -3", "Edron Behemoth Cave", "Forbidden Lands"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-255", rarity: "Common" },
      { item: "Behemoth Claw", chance: "10%", value: "1k", rarity: "Uncommon" },
      { item: "Perfect Behemoth Fang", chance: "3%", value: "5k", rarity: "Semi-Rare" },
      { item: "Titan Axe", chance: "0.5%", value: "15k", rarity: "Rare" },
      { item: "Behemoth Trophy", chance: "0.1%", value: "50k", rarity: "Very Rare" }
    ],
    category: "Giants"
  },

  // === THE UNDEAD ===
  "vampire": {
    slug: "vampire",
    name: "Vampire",
    hp: 475,
    exp: 305,
    damage: "0-185 (Physical, Life Drain)",
    armor: 22,
    speed: 98,
    weaknesses: { "Fire": 20, "Holy": 25 },
    immunities: ["Death", "Paralysis", "Invisibility"],
    resistances: { "Ice": 20 },
    abilities: [
      "Melee (0-120)",
      "Life Drain (0-115)",
      "Summon Bat"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Common",
    locations: ["Drefia", "Edron Vampire Crypt", "Vengoth"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-60", rarity: "Common" },
      { item: "Vampire Teeth", chance: "15%", value: "275gp", rarity: "Uncommon" },
      { item: "Vampire Shield", chance: "0.3%", value: "15k", rarity: "Very Rare" }
    ],
    category: "The Undead"
  },
  "lich": {
    slug: "lich",
    name: "Lich",
    hp: 880,
    exp: 900,
    damage: "0-450 (Physical, Death, Life Drain, Mana Drain)",
    armor: 25,
    speed: 102,
    weaknesses: { "Holy": 10, "Fire": 5 },
    immunities: ["Death", "Ice", "Paralysis", "Invisibility"],
    resistances: { "Earth": 80 },
    abilities: [
      "Melee (0-75)",
      "Death Strike (0-130)",
      "Life Drain (0-180)",
      "Mana Drain (0-150)",
      "Paralyze",
      "Summon 2 Skeleton"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Uncommon",
    locations: ["Drefia", "Hellgate", "Demona"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-130", rarity: "Common" },
      { item: "Mind Stone", chance: "3%", value: "1.5k", rarity: "Semi-Rare" },
      { item: "Platinum Amulet", chance: "0.5%", value: "5k", rarity: "Rare" }
    ],
    category: "The Undead"
  },

  // === VERMIN ===
  "rotworm": {
    slug: "rotworm",
    name: "Rotworm",
    hp: 65,
    exp: 40,
    damage: "0-48 (Physical, Earth)",
    armor: 10,
    speed: 65,
    weaknesses: { "Fire": 10 },
    immunities: ["Earth"],
    resistances: {},
    abilities: [
      "Melee (0-40)",
      "Poison (3hp/turn)"
    ],
    bestiaryKills: 500,
    bestiaryClass: "Trivial",
    charmPoints: 5,
    occurrence: "Common",
    locations: ["Darashia Rotworm Cave", "Liberty Bay Rotworms", "Edron Rotworms"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-17", rarity: "Common" },
      { item: "Meat", chance: "50%", value: "5gp", rarity: "Common" },
      { item: "Lump of Dirt", chance: "10%", value: "100gp", rarity: "Uncommon" }
    ],
    category: "Vermin"
  },
  "giant-spider": {
    slug: "giant-spider",
    name: "Giant Spider",
    hp: 1300,
    exp: 900,
    damage: "0-300 (Physical, Earth)",
    armor: 26,
    speed: 120,
    weaknesses: { "Fire": 15 },
    immunities: ["Earth", "Invisibility"],
    resistances: {},
    abilities: [
      "Melee (0-200)",
      "Poison Ball (0-100)",
      "Strong Poison (starting 21hp/turn)",
      "Summon 2 Poison Spider",
      "Haste"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Common",
    locations: ["Spider Crypt (Port Hope)", "Tiquanda", "Rotworm Queen Lair"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-115", rarity: "Common" },
      { item: "Poison Arrow", chance: "25%", value: "4gp", rarity: "Common" },
      { item: "Platinum Amulet", chance: "0.3%", value: "5k", rarity: "Very Rare" }
    ],
    category: "Vermin"
  },

  // === HUMANOIDS ===
  "minotaur": {
    slug: "minotaur",
    name: "Minotaur",
    hp: 100,
    exp: 50,
    damage: "0-50 (Physical)",
    armor: 14,
    speed: 80,
    weaknesses: { "Fire": 10, "Death": 10, "Energy": 5 },
    immunities: [],
    resistances: { "Holy": 20, "Earth": 20 },
    abilities: [
      "Melee (0-50)"
    ],
    bestiaryKills: 500,
    bestiaryClass: "Trivial",
    charmPoints: 5,
    occurrence: "Common",
    locations: ["Mintwallin", "Rookgaard Minotaur Tower", "Folda"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-28", rarity: "Common" },
      { item: "Meat", chance: "50%", value: "5gp", rarity: "Common" },
      { item: "Minotaur Leather", chance: "10%", value: "100gp", rarity: "Uncommon" }
    ],
    category: "Humanoids"
  },
  "orc-warlord": {
    slug: "orc-warlord",
    name: "Orc Warlord",
    hp: 950,
    exp: 670,
    damage: "0-255 (Physical)",
    armor: 25,
    speed: 95,
    weaknesses: { "Death": 5, "Fire": 10, "Energy": 10 },
    immunities: [],
    resistances: { "Holy": 20, "Earth": 20 },
    abilities: [
      "Melee (0-200)",
      "Boulder Throwing (0-100)",
      "Summon 2 Orc",
      "Haste"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Uncommon",
    locations: ["Orc Fortress", "Ulderek's Rock", "Edron Orc Cave"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-90", rarity: "Common" },
      { item: "Fish", chance: "50%", value: "5gp", rarity: "Common" },
      { item: "Crusader Helmet", chance: "0.8%", value: "6k", rarity: "Rare" },
      { item: "Thunder Hammer", chance: "0.1%", value: "50k", rarity: "Very Rare" }
    ],
    category: "Humanoids"
  },

  // === ELEMENTALS ===
  "fire-elemental": {
    slug: "fire-elemental",
    name: "Fire Elemental",
    hp: 280,
    exp: 220,
    damage: "0-165 (Fire)",
    armor: 12,
    speed: 125,
    weaknesses: { "Ice": 10 },
    immunities: ["Fire"],
    resistances: { "Energy": 20, "Earth": 30 },
    abilities: [
      "Melee (0-65)",
      "Fire Wave (0-100)"
    ],
    bestiaryKills: 500,
    bestiaryClass: "Easy",
    charmPoints: 15,
    occurrence: "Common",
    locations: ["Kazordoon Volcano", "Hellgate", "Goroma Volcano"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-57", rarity: "Common" },
      { item: "Wand of Inferno", chance: "0.5%", value: "3k", rarity: "Rare" }
    ],
    category: "Elementals"
  },
  "massive-energy-elemental": {
    slug: "massive-energy-elemental",
    name: "Massive Energy Elemental",
    hp: 1100,
    exp: 950,
    damage: "0-360 (Energy)",
    armor: 20,
    speed: 135,
    weaknesses: { "Earth": 15 },
    immunities: ["Energy"],
    resistances: { "Fire": 15, "Ice": 15 },
    abilities: [
      "Melee (0-180)",
      "Energy Beam (0-200)",
      "Energy Strike (0-120)",
      "Electrify"
    ],
    bestiaryKills: 1000,
    bestiaryClass: "Medium",
    charmPoints: 25,
    occurrence: "Uncommon",
    locations: ["Energy Elemental Lair", "Formorgar Mines", "Roshamuul"],
    loot: [
      { item: "Gold Coin", chance: "100%", value: "1-180", rarity: "Common" },
      { item: "Strong Mana Potion", chance: "15%", value: "50gp", rarity: "Common" },
      { item: "Lightning Pendant", chance: "2%", value: "2k", rarity: "Semi-Rare" }
    ],
    category: "Elementals"
  }
};

// Helper functions
export function getCreatureBySlug(slug: string): Creature | undefined {
  return creaturesDatabase[slug];
}

export function getCreaturesByCategory(category: Creature["category"]): Creature[] {
  return Object.values(creaturesDatabase).filter(c => c.category === category);
}

export function getCreaturesByBestiaryClass(bestiaryClass: Creature["bestiaryClass"]): Creature[] {
  return Object.values(creaturesDatabase).filter(c => c.bestiaryClass === bestiaryClass);
}

export function searchCreatures(query: string): Creature[] {
  const q = query.toLowerCase();
  return Object.values(creaturesDatabase).filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.locations.some(loc => loc.toLowerCase().includes(q))
  );
}

export function getAllCreatures(): Creature[] {
  return Object.values(creaturesDatabase);
}

// Categories list
export const creatureCategories = [
  "Amphibics",
  "Aquatics", 
  "Birds",
  "Constructs",
  "Demons",
  "Dragons",
  "Elementals",
  "Extra Dimensional",
  "Fey",
  "Giants",
  "Humanoids",
  "Humans",
  "Lycanthropes",
  "Magicals",
  "Mammals",
  "Plants",
  "Reptiles",
  "Slimes",
  "The Undead",
  "Vermin"
] as const;
