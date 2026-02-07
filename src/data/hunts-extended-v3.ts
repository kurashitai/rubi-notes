// Hunts Extendidas - Mais detalhes com profit/xp/hour
// Fonte: TibiaWiki, Rubinot Wiki
// Data: 2026-02-05

export interface HuntMonster {
  name: string;
  count: number;
  hp: number;
  exp: number;
  weakness: string[];
  lootPerKill: number; // valor médio
  notes?: string;
}

export interface HuntReward {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
}

export interface ExtendedHunt {
  id: string;
  name: string;
  slug: string;
  levelRange: {
    min: number;
    max: number;
    recommended: string;
  };
  location: string;
  monsters: HuntMonster[];
  stats: {
    avgHP: number;
    totalHP: number;
    avgExp: number;
    totalExp: number;
    avgLoot: number;
    totalLoot: number;
    profitPerHour: number; // adjusted for 2.5x loot rate
    expPerHour: number;
    dangerLevel: "Low" | "Medium" | "High" | "Very High";
  };
  recommendedVocations: string[];
  equipment: string[];
  supplies: {
    name: string;
    amount: string;
  }[];
  rewards: HuntReward[];
  tips: string[];
  tags: string[];
  lootRate: number; // 2.5x for Rubinot
}

export const extendedHunts: ExtendedHunt[] = [
  // LOW LEVEL HUNTS (1-50)
  {
    id: "hunt-rotworms",
    name: "Rotworm Cave",
    slug: "rotworms",
    levelRange: { min: 8, max: 30, recommended: "10-25" },
    location: "Edron Rotworm Cave, Thais Rotworms",
    monsters: [
      { name: "Rotworm", count: 5, hp: 65, exp: 35, weakness: ["fire", "earth"], lootPerKill: 15 },
      { name: "Carrion Worm", count: 2, hp: 110, exp: 55, weakness: ["fire", "earth"], lootPerKill: 20 },
    ],
    stats: {
      avgHP: 87.5,
      totalHP: 437.5,
      avgExp: 45,
      totalExp: 225,
      avgLoot: 17.5,
      totalLoot: 87.5,
      profitPerHour: 21875,
      expPerHour: 56250,
      dangerLevel: "Low",
    },
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    equipment: ["Brass Armor", "Steel Shield", "Sword", "Plate Legs"],
    supplies: [
      { name: "Health Potion", amount: "50/h" },
      { name: "Mana Potion", amount: "30/h" },
    ],
    rewards: [
      { item: "Worm Tooth", chance: "common", value: 5 },
      { item: "Earthworm", chance: "rare", value: 50 },
      { item: "Gold Coin", chance: "always", value: 30 },
    ],
    tips: [
      "Rotworms are weak to Fire and Earth attacks",
      "Great for low-level profit",
      "Knight: Use Exori Hur for easy kills",
      "Druid/Sorcerer: Use Fireball or Stalagmite",
      "Paladin: Use Ethereal Spear",
      "Carrion Worms drop Earthworms - worth money",
    ],
    tags: ["low-level", "profit", "easy", "rotworm", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-trolls",
    name: "Troll Cave",
    slug: "trolls",
    levelRange: { min: 5, max: 20, recommended: "8-15" },
    location: "Troll Cave near Thais, Carlin Trolls",
    monsters: [
      { name: "Troll", count: 8, hp: 50, exp: 15, weakness: ["fire", "earth", "energy"], lootPerKill: 8 },
      { name: "Troll Champion", count: 1, hp: 120, exp: 40, weakness: ["fire", "earth", "energy"], lootPerKill: 25 },
    ],
    stats: {
      avgHP: 65,
      totalHP: 455,
      avgExp: 20,
      totalExp: 140,
      avgLoot: 10.6,
      totalLoot: 74.2,
      profitPerHour: 18550,
      expPerHour: 35000,
      dangerLevel: "Low",
    },
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    equipment: ["Leather Armor", "Studded Shield", "Dagger"],
    supplies: [
      { name: "Health Potion", amount: "40/h" },
      { name: "Mana Potion", amount: "20/h" },
    ],
    rewards: [
      { item: "Troll Tooth", chance: "common", value: 3 },
      { item: "Gold Coin", chance: "always", value: 15 },
    ],
    tips: [
      "Great for very early levels",
      "Trolls are very weak - use any attacks",
      "Knight: Can kill with melee easily",
      "Druid/Sorcerer: Use Fireball or Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Troll Champions drop better loot",
    ],
    tags: ["very-low", "profit", "easy", "troll", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-goblins",
    name: "Goblin Cave",
    slug: "goblins",
    levelRange: { min: 8, max: 25, recommended: "10-20" },
    location: "Goblin Cave near Edron",
    monsters: [
      { name: "Goblin", count: 10, hp: 35, exp: 20, weakness: ["fire", "earth", "energy"], lootPerKill: 10 },
      { name: "Goblin Scavenger", count: 3, hp: 60, exp: 30, weakness: ["fire", "earth", "energy"], lootPerKill: 15 },
    ],
    stats: {
      avgHP: 41.25,
      totalHP: 453.75,
      avgExp: 22.5,
      totalExp: 247.5,
      avgLoot: 11.25,
      totalLoot: 123.75,
      profitPerHour: 30937,
      expPerHour: 61875,
      dangerLevel: "Low",
    },
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    equipment: ["Chain Armor", "Steel Shield", "Sword"],
    supplies: [
      { name: "Health Potion", amount: "45/h" },
      { name: "Mana Potion", amount: "25/h" },
    ],
    rewards: [
      { item: "Goblin Ear", chance: "common", value: 5 },
      { item: "Small Stone", chance: "common", value: 10 },
      { item: "Gold Coin", chance: "always", value: 20 },
    ],
    tips: [
      "Great profit for very low levels",
      "Goblins are very weak",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball or Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Goblin Scavengers drop better loot",
    ],
    tags: ["very-low", "profit", "easy", "goblin", "cave"],
    lootRate: 2.5,
  },

  // MID LEVEL HUNTS (50-150)
  {
    id: "hunt-cyclops",
    name: "Cyclopolis",
    slug: "cyclops",
    levelRange: { min: 40, max: 80, recommended: "50-70" },
    location: "Cyclopolis (Cyclops Mountain)",
    monsters: [
      { name: "Cyclops", count: 8, hp: 610, exp: 240, weakness: ["earth", "fire"], lootPerKill: 120 },
      { name: "Cyclops Drone", count: 4, hp: 400, exp: 160, weakness: ["earth", "fire"], lootPerKill: 80 },
      { name: "Cyclops Smith", count: 2, hp: 740, exp: 290, weakness: ["earth", "fire"], lootPerKill: 150 },
    ],
    stats: {
      avgHP: 583.3,
      totalHP: 7000,
      avgExp: 230,
      totalExp: 2760,
      avgLoot: 116.7,
      totalLoot: 1400,
      profitPerHour: 350000,
      expPerHour: 690000,
      dangerLevel: "Medium",
    },
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    equipment: ["Crown Armor", "Crown Shield", "Knight Legs", "Fireborn Giant Armor"],
    supplies: [
      { name: "Strong Health Potion", amount: "80/h" },
      { name: "Strong Mana Potion", amount: "50/h" },
      { name: "Ultimate Healing Rune", amount: "10/h" },
    ],
    rewards: [
      { item: "Cyclops Trophy", chance: "rare", value: 8000, isRare: true },
      { item: "Stonecutter Axe", chance: "very rare", value: 80000, isRare: true },
      { item: "Knight Axe", chance: "rare", value: 5000 },
      { item: "Gold Coin", chance: "always", value: 500 },
    ],
    tips: [
      "Use Earth or Fire attacks",
      "Knight: Use Exori Gran, bring potions",
      "Druid/Sorcerer: Use Great Fireball or Stalagmite",
      "Paladin: Use Divine Caliber Rune or Hailstorm Rod",
      "Cyclops Smith drops better loot",
      "Stonecutter Axe is valuable - watch for it",
      "Good profit for mid-level",
    ],
    tags: ["mid-level", "profit", "medium", "cyclops", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-orcs",
    name: "Orc Fortress",
    slug: "orcs",
    levelRange: { min: 40, max: 90, recommended: "50-75" },
    location: "Orc Fortress near Edron, Cormaya Orcs",
    monsters: [
      { name: "Orc Warrior", count: 10, hp: 270, exp: 90, weakness: ["fire", "earth"], lootPerKill: 45 },
      { name: "Orc Berserker", count: 5, hp: 560, exp: 190, weakness: ["fire", "earth"], lootPerKill: 100 },
      { name: "Orc Leader", count: 2, hp: 400, exp: 140, weakness: ["fire", "earth"], lootPerKill: 80 },
      { name: "Orc Shaman", count: 2, hp: 330, exp: 110, weakness: ["energy", "holy"], lootPerKill: 70 },
    ],
    stats: {
      avgHP: 390,
      totalHP: 5850,
      avgExp: 132.5,
      totalExp: 1987.5,
      avgLoot: 73.75,
      totalLoot: 1106.25,
      profitPerHour: 276562,
      expPerHour: 496875,
      dangerLevel: "Medium",
    },
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    equipment: ["Crown Armor", "Crown Helmet", "Crown Shield", "Knight Legs"],
    supplies: [
      { name: "Strong Health Potion", amount: "60/h" },
      { name: "Strong Mana Potion", amount: "40/h" },
      { name: "Ultimate Healing Rune", amount: "8/h" },
    ],
    rewards: [
      { item: "Orc Trophy", chance: "rare", value: 5000 },
      { item: "Obsidian Lance", chance: "rare", value: 3000 },
      { item: "Orcish Axe", chance: "common", value: 300 },
      { item: "Gold Coin", chance: "always", value: 300 },
    ],
    tips: [
      "Use Fire or Earth attacks on Orcs",
      "Use Energy or Holy on Shamans",
      "Knight: Use Exori Gran, bring potions",
      "Druid/Sorcerer: Use Great Fireball or Energy Strike",
      "Paladin: Use Divine Caliber Rune or Ethereal Spear",
      "Kill Shamans first - they heal others",
      "Good profit for mid-level",
    ],
    tags: ["mid-level", "profit", "medium", "orc", "fortress"],
    lootRate: 2.5,
  },
  {
    id: "hunt-dragons",
    name: "Dragon Lair",
    slug: "dragons",
    levelRange: { min: 60, max: 120, recommended: "80-100" },
    location: "Dragon Lair, Dragonblaze Peaks",
    monsters: [
      { name: "Dragon", count: 5, hp: 4000, exp: 1700, weakness: ["ice", "earth", "energy"], lootPerKill: 800 },
    ],
    stats: {
      avgHP: 4000,
      totalHP: 20000,
      avgExp: 1700,
      totalExp: 8500,
      avgLoot: 800,
      totalLoot: 4000,
      profitPerHour: 1000000,
      expPerHour: 2125000,
      dangerLevel: "High",
    },
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    equipment: ["Crown Armor", "Dragon Shield", "Knight Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "100/h" },
      { name: "Great Mana Potion", amount: "80/h" },
      { name: "Ultimate Healing Rune", amount: "20/h" },
    ],
    rewards: [
      { item: "Dragon Shield", chance: "rare", value: 50000, isRare: true },
      { item: "Dragon Scale", chance: "common", value: 500 },
      { item: "Dragon Slayer", chance: "very rare", value: 80000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 1000 },
    ],
    tips: [
      "DO NOT use Fire - Dragons are immune to fire",
      "Use Ice, Earth, or Energy attacks",
      "Knight: Bring Magic Shield, lots of potions",
      "Druid/Sorcerer: Use Ice Wave or Energy Strike",
      "Paladin: Use Divine Caliber Rune or Hailstorm Rod",
      "Great Fireball can hurt - bring healing",
      "Dragon Shield and Dragon Slayer are valuable",
    ],
    tags: ["mid-level", "high-profit", "dangerous", "dragon", "lair"],
    lootRate: 2.5,
  },

  // HIGH LEVEL HUNTS (150+)
  {
    id: "hunt-wasps",
    name: "Waspoid Hive",
    slug: "waspoids",
    levelRange: { min: 150, max: 250, recommended: "180-220" },
    location: "Waspoid Hive",
    monsters: [
      { name: "Waspoid", count: 6, hp: 5200, exp: 3100, weakness: ["fire", "earth"], lootPerKill: 1500 },
    ],
    stats: {
      avgHP: 5200,
      totalHP: 31200,
      avgExp: 3100,
      totalExp: 18600,
      avgLoot: 1500,
      totalLoot: 9000,
      profitPerHour: 2250000,
      expPerHour: 4650000,
      dangerLevel: "High",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Golden Armor", "Dragon Shield", "Golden Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "150/h" },
      { name: "Great Spirit Potion", amount: "100/h" },
      { name: "Ultimate Healing Rune", amount: "30/h" },
    ],
    rewards: [
      { item: "Waspoid Trophy", chance: "rare", value: 15000 },
      { item: "Butterfly Ring", chance: "very rare", value: 200000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 2500 },
    ],
    tips: [
      "Use Fire or Earth attacks",
      "Knight: Bring Magic Shield, lots of potions",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Caliber Rune",
      "Butterfly Ring is valuable - watch for it",
      "Good profit for high level",
    ],
    tags: ["high-level", "profit", "dangerous", "waspoid", "hive"],
    lootRate: 2.5,
  },
  {
    id: "hunt-stonerefiller",
    name: "Stonerefiller Caverns",
    slug: "stonerefiller",
    levelRange: { min: 180, max: 280, recommended: "200-250" },
    location: "Stonerefiller Caverns",
    monsters: [
      { name: "Stone Devourer", count: 4, hp: 6800, exp: 3800, weakness: ["fire", "energy"], lootPerKill: 2000 },
      { name: "Stonerefiner", count: 2, hp: 8200, exp: 4500, weakness: ["fire", "energy"], lootPerKill: 2500 },
    ],
    stats: {
      avgHP: 7400,
      totalHP: 29600,
      avgExp: 4066.7,
      totalExp: 16266.8,
      avgLoot: 2166.7,
      totalLoot: 8666.7,
      profitPerHour: 2166667,
      expPerHour: 4066667,
      dangerLevel: "High",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Golden Armor", "Dragon Shield", "Golden Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "180/h" },
      { name: "Great Spirit Potion", amount: "120/h" },
      { name: "Ultimate Healing Rune", amount: "40/h" },
    ],
    rewards: [
      { item: "Stone Plate Armor", chance: "very rare", value: 500000, isRare: true },
      { item: "Stone Trophy", chance: "rare", value: 20000 },
      { item: "Gold Coin", chance: "always", value: 3000 },
    ],
    tips: [
      "Use Fire or Energy attacks",
      "Knight: Bring Magic Shield, lots of potions",
      "Druid/Sorcerer: Use Great Fireball or Energy Strike",
      "Paladin: Use Divine Caliber Rune",
      "Stone Plate Armor is very valuable",
      "Stonerefiners are stronger - watch out",
    ],
    tags: ["high-level", "profit", "dangerous", "stonerefiller", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-giant-spiders",
    name: "Giant Spider Nest",
    slug: "giant-spiders",
    levelRange: { min: 150, max: 250, recommended: "180-230" },
    location: "Giant Spider Cave, Tiquanda",
    monsters: [
      { name: "Giant Spider", count: 5, hp: 1300, exp: 450, weakness: ["fire", "earth", "energy"], lootPerKill: 300 },
      { name: "Tarantula", count: 4, hp: 730, exp: 290, weakness: ["fire", "earth", "energy"], lootPerKill: 200 },
    ],
    stats: {
      avgHP: 1014,
      totalHP: 9126,
      avgExp: 371,
      totalExp: 3339,
      avgLoot: 255,
      totalLoot: 2295,
      profitPerHour: 573750,
      expPerHour: 834750,
      dangerLevel: "Medium",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Golden Armor", "Dragon Shield", "Golden Legs"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "80/h" },
      { name: "Great Spirit Potion", amount: "60/h" },
      { name: "Ultimate Healing Rune", amount: "15/h" },
    ],
    rewards: [
      { item: "Giant Spider Silk", chance: "common", value: 200 },
      { item: "Spider Silk", chance: "common", value: 50 },
      { item: "Tarantula Trophy", chance: "rare", value: 10000 },
      { item: "Gold Coin", chance: "always", value: 400 },
    ],
    tips: [
      "Use Fire, Earth, or Energy attacks",
      "Knight: Use Exori Gran",
      "Druid/Sorcerer: Use Great Fireball or Stalagmite",
      "Paladin: Use Divine Caliber Rune",
      "Web can be annoying - move quickly",
      "Tarantula Trophy is valuable",
    ],
    tags: ["mid-high", "profit", "medium", "spider", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-hydras",
    name: "Hydra Plains",
    slug: "hydras",
    levelRange: { min: 180, max: 300, recommended: "200-280" },
    location: "Edron Hydra Spawn, Darashia, Hydra Plains",
    monsters: [
      { name: "Hydra", count: 4, hp: 8300, exp: 4450, weakness: ["fire", "energy", "ice", "earth"], lootPerKill: 4000 },
    ],
    stats: {
      avgHP: 8300,
      totalHP: 33200,
      avgExp: 4450,
      totalExp: 17800,
      avgLoot: 4000,
      totalLoot: 16000,
      profitPerHour: 4000000,
      expPerHour: 4450000,
      dangerLevel: "High",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Golden Armor", "Dragon Shield", "Golden Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "200/h" },
      { name: "Great Spirit Potion", amount: "150/h" },
      { name: "Ultimate Healing Rune", amount: "50/h" },
    ],
    rewards: [
      { item: "Hydra Egg", chance: "always", value: 25000 },
      { item: "Hydra Head", chance: "always", value: 50000 },
      { item: "Piece of Royal Armor", chance: "rare", value: 80000, isRare: true },
      { item: "Boots of Haste", chance: "very rare", value: 150000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 5000 },
    ],
    tips: [
      "Use Fire attacks - Hydras are weak to fire",
      "Knight: Bring Magic Shield, use Challenge",
      "Druid/Sorcerer: Use Mass Ice/Energy Wave, Great Fireball",
      "Paladin: Use Divine Caliber Rune",
      "Avoid being in melee - Hydras spawn in pairs",
      "Hydra Egg and Head are valuable - always collect",
      "Piece of Royal Armor and Boots of Haste are rare drops",
    ],
    tags: ["high-level", "profit", "dangerous", "hydra", "plains"],
    lootRate: 2.5,
  },

  // VERY HIGH LEVEL HUNTS (300+)
  {
    id: "hunt-demon-trio",
    name: "Demon Trio",
    slug: "demon-trio",
    levelRange: { min: 350, max: 500, recommended: "400-450" },
    location: "Demon Cave, Ferumbras Tower (Demon Room)",
    monsters: [
      { name: "Demon", count: 3, hp: 8200, exp: 5100, weakness: ["holy", "ice"], lootPerKill: 5000 },
    ],
    stats: {
      avgHP: 8200,
      totalHP: 24600,
      avgExp: 5100,
      totalExp: 15300,
      avgLoot: 5000,
      totalLoot: 15000,
      profitPerHour: 3750000,
      expPerHour: 3825000,
      dangerLevel: "Very High",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Magic Plate Armor", "Demon Shield", "Golden Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "250/h" },
      { name: "Great Spirit Potion", amount: "200/h" },
      { name: "Ultimate Healing Rune", amount: "80/h" },
      { name: "Sudden Death Rune", amount: "50/h" },
    ],
    rewards: [
      { item: "Demon Shield", chance: "very rare", value: 300000, isRare: true },
      { item: "Demonbone", chance: "very rare", value: 250000, isRare: true },
      { item: "Giant Sword", chance: "rare", value: 90000 },
      { item: "Gold Coin", chance: "always", value: 8000 },
    ],
    tips: [
      "Use Holy or Ice attacks",
      "Knight: Bring Magic Shield, lots of potions, use Stone Skin",
      "Druid/Sorcerer: Use Avalanche Rune or Sudden Death Rune",
      "Paladin: Use Divine Caliber Rune or Sudden Death Rune",
      "Demons use Great Fireball - stay at diagonal",
      "Demon Shield is valuable - rare drop",
      "Very dangerous - don't try solo unless high level",
    ],
    tags: ["very-high", "profit", "very-dangerous", "demon", "cave"],
    lootRate: 2.5,
  },
  {
    id: "hunt-undead-dragon",
    name: "Undead Dragon Lair",
    slug: "undead-dragon",
    levelRange: { min: 300, max: 450, recommended: "350-400" },
    location: "Ghostlands, Undead Dragon Lair",
    monsters: [
      { name: "Undead Dragon", count: 3, hp: 8500, exp: 4800, weakness: ["fire", "energy", "holy"], lootPerKill: 5500 },
    ],
    stats: {
      avgHP: 8500,
      totalHP: 25500,
      avgExp: 4800,
      totalExp: 14400,
      avgLoot: 5500,
      totalLoot: 16500,
      profitPerHour: 4125000,
      expPerHour: 3600000,
      dangerLevel: "Very High",
    },
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    equipment: ["Magic Plate Armor", "Dragon Shield", "Golden Legs", "Boots of Haste"],
    supplies: [
      { name: "Ultimate Health Potion", amount: "220/h" },
      { name: "Great Spirit Potion", amount: "180/h" },
      { name: "Ultimate Healing Rune", amount: "60/h" },
    ],
    rewards: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Undead Dragon Trophy", chance: "very rare", value: 300000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 10000 },
    ],
    tips: [
      "Use Fire or Holy attacks",
      "Watch out for Death Wave - can be lethal",
      "Knight: Bring Magic Shield, Stone Skin",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Caliber Rune",
      "Life Drain is dangerous - heal quickly",
      "Dragon Scale Mail is very valuable - rare drop",
    ],
    tags: ["very-high", "profit", "very-dangerous", "undead-dragon", "lair"],
    lootRate: 2.5,
  },

  // SOLOABLE HUNTS
  {
    id: "hunt-crypt-shamblers",
    name: "Crypt Shambler Catacombs",
    slug: "crypt-shamblers",
    levelRange: { min: 80, max: 150, recommended: "100-130" },
    location: "Crypt Shambler Catacombs",
    monsters: [
      { name: "Crypt Shambler", count: 6, hp: 950, exp: 420, weakness: ["fire", "holy"], lootPerKill: 200 },
      { name: "Ghost", count: 3, hp: 450, exp: 180, weakness: ["fire", "holy"], lootPerKill: 80 },
    ],
    stats: {
      avgHP: 700,
      totalHP: 6300,
      avgExp: 300,
      totalExp: 2700,
      avgLoot: 152,
      totalLoot: 1368,
      profitPerHour: 342000,
      expPerHour: 675000,
      dangerLevel: "Medium",
    },
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    equipment: ["Crown Armor", "Crown Shield", "Knight Legs"],
    supplies: [
      { name: "Strong Health Potion", amount: "70/h" },
      { name: "Strong Mana Potion", amount: "50/h" },
      { name: "Ultimate Healing Rune", amount: "12/h" },
    ],
    rewards: [
      { item: "Ghostly Torch", chance: "rare", value: 3000 },
      { item: "Ghost Backpack", chance: "rare", value: 4000 },
      { item: "Gold Coin", chance: "always", value: 200 },
    ],
    tips: [
      "Use Fire or Holy attacks",
      "Good for solo hunting",
      "Knight: Use Exori Gran, bring potions",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Caliber Rune",
      "Good profit and XP",
    ],
    tags: ["mid-level", "solo", "profit", "crypt-shambler", "undead"],
    lootRate: 2.5,
  },
];

// Helper functions
export const getHuntById = (id: string) => {
  return extendedHunts.find(h => h.id === id);
};

export const getHuntsByLevelRange = (minLevel: number, maxLevel?: number) => {
  if (maxLevel) {
    return extendedHunts.filter(h => h.levelRange.min >= minLevel && h.levelRange.max <= maxLevel);
  }
  return extendedHunts.filter(h => h.levelRange.min >= minLevel);
};

export const getHuntsByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  return extendedHunts.filter(h =>
    h.recommendedVocations.some(v => v.toLowerCase().includes(vocationLower))
  );
};

export const getSoloableHunts = () => {
  return extendedHunts.filter(h => h.tags.includes("solo") || h.stats.dangerLevel !== "Very High");
};

export const getHuntsByTag = (tag: string) => {
  return extendedHunts.filter(h => h.tags.includes(tag));
};

export const getBestHuntsForProfit = (limit?: number) => {
  const sorted = [...extendedHunts].sort((a, b) => b.stats.profitPerHour - a.stats.profitPerHour);
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getBestHuntsForXP = (limit?: number) => {
  const sorted = [...extendedHunts].sort((a, b) => b.stats.expPerHour - a.stats.expPerHour);
  return limit ? sorted.slice(0, limit) : sorted;
};

export const totalHunts = extendedHunts.length;
