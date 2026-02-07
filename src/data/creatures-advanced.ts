// Creatures Avançadas - Nível 150+
// Fonte: TibiaWiki, TibiaFandom
// Data: 2026-02-05

interface LootItem {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
}

interface AdvancedCreature {
  id: string;
  name: string;
  displayName: string;
  hp: number;
  exp: number;
  armor: number;
  speed: number;
  bestiaryClass: string;
  bestiaryKills: number[];
  location: string[];
  weakness: {
    physical?: number;
    fire?: number;
    energy?: number;
    ice?: number;
    earth?: number;
    holy?: number;
    death?: number;
  };
  immunities: string[];
  abilities: string[];
  loot: LootItem[];
  difficulty: number; // 1-10
  dangerLevel: "Low" | "Medium" | "High" | "Very High" | "Extreme";
  recommendedLevel: number;
  recommendedVocations: string[];
  tips: string[];
}

export const advancedCreatures: AdvancedCreature[] = [
  {
    id: "hydra",
    name: "Hydra",
    displayName: "Hydra",
    hp: 8300,
    exp: 4450,
    armor: 48,
    speed: 160,
    bestiaryClass: "Reptile",
    bestiaryKills: [3000, 6000, 10000, 20000],
    location: ["Edron Hydra Spawn", "Darashia", "Hydra Plains"],
    weakness: { fire: 100, energy: 100, ice: 100, earth: 100 },
    immunities: ["poison", "paralyze", "drain"],
    abilities: ["Hydra Wave", "Great Fireball", "Fire Wave", "Summon Hydras"],
    loot: [
      { item: "Hydra Egg", chance: "always", value: 25000, isRare: true },
      { item: "Hydra Head", chance: "always", value: 50000, isRare: true },
      { item: "Piece of Royal Armor", chance: "rare", value: 80000, isRare: true },
      { item: "Boots of Haste", chance: "very rare", value: 150000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 5000 },
      { item: "Platinum Coin", chance: "rare", value: 10000 },
    ],
    difficulty: 7,
    dangerLevel: "High",
    recommendedLevel: 180,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks if available - Hydra is weak to fire",
      "Knight: Use Challenge ability to keep Hydra focused on you",
      "Knight: Bring Magic Shield for Fire attacks",
      "Druid/Sorcerer: Cast Mass Ice/Energy Wave and Great Fireball",
      "Paladin: Use Assassin Stars (Avalanche Rune) or Divine Missile",
      "Avoid being in melee - Hydras spawn in pairs and can be dangerous",
      "Bring Ultimate Healing Runes for quick recovery",
    ],
  },
  {
    id: "dragon-lord",
    name: "Dragon Lord",
    displayName: "Dragon Lord",
    hp: 8100,
    exp: 3800,
    armor: 56,
    speed: 180,
    bestiaryClass: "Dragon",
    bestiaryKills: [2500, 5000, 10000, 20000],
    location: ["Dragon Lair", "Dragonblaze Peaks"],
    weakness: { ice: 100, earth: 100, energy: 100, holy: 100 },
    immunities: ["fire", "energy", "paralyze", "drain"],
    abilities: ["Great Fireball", "Fire Wave", "Fireball", "Summon Dragon Hatchlings"],
    loot: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Dragonbone Staff", chance: "rare", value: 80000, isRare: true },
      { item: "Dragon Slayer", chance: "rare", value: 100000, isRare: true },
      { item: "Dragon Ham", chance: "always", value: 200 },
      { item: "Gold Coin", chance: "common", value: 8000 },
      { item: "Platinum Coin", chance: "rare", value: 15000 },
    ],
    difficulty: 7,
    dangerLevel: "High",
    recommendedLevel: 200,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "DO NOT use Fire - Dragon Lords are immune to fire",
      "Use Ice or Energy attacks - they are weak to these",
      "Knight: Bring Magic Shield for Great Fireball",
      "Knight: Use Exori Gran and Exori Hur with high attack weapon",
      "Druid/Sorcerer: Cast Ice Wave or Great Energy Beam",
      "Paladin: Use Ethereal Spear or Divine Caliber Rune",
      "Watch out for Fire Wave - it can kill low HP players instantly",
      "Stand diagonally when possible - Great Fireball is ranged attack",
    ],
  },
  {
    id: "behemoth",
    name: "Behemoth",
    displayName: "Behemoth",
    hp: 13000,
    exp: 5000,
    armor: 62,
    speed: 160,
    bestiaryClass: "Giant",
    bestiaryKills: [1000, 2500, 5000, 10000],
    location: ["Behemoth's Cave", "Giant Basin"],
    weakness: { earth: 100, physical: 90, energy: 80, ice: 60 },
    immunities: ["energy", "paralyze", "invisible"],
    abilities: ["Strong Earthquake", "Great Stomp", "Charge", "Self-Healing"],
    loot: [
      { item: "Behemoth Fang", chance: "always", value: 30000, isRare: true },
      { item: "Giant Sword", chance: "rare", value: 90000, isRare: true },
      { item: "Behemoth Trophy", chance: "very rare", value: 250000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 12000 },
      { item: "Platinum Coin", chance: "rare", value: 20000 },
    ],
    difficulty: 9,
    dangerLevel: "Very High",
    recommendedLevel: 250,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Behemoth has a HUGE area attack - stay at range!",
      "Knight: Need very good armor and high HP",
      "Knight: Use Stone Skin or Mass Challenge if available",
      "Knight: Bring lots of Ultimate Healing Runes",
      "Druid/Sorcerer: Use Great Earth Beam or Avalanche Rune",
      "Paladin: Use Ethereal Spear or Divine Caliber Rune",
      "Behemoth can self-heal - kill him quickly",
      "Behemoth charges - keep distance and diagonal positioning",
      "Never fight Behemoth with low HP - Earthquake can kill instantly",
    ],
  },
  {
    id: "undead-dragon",
    name: "Undead Dragon",
    displayName: "Undead Dragon",
    hp: 8500,
    exp: 4800,
    armor: 58,
    speed: 200,
    bestiaryClass: "Undead",
    bestiaryKills: [2000, 5000, 10000, 20000],
    location: ["Ghostlands", "Catacombs", "Undead Dragon Lair"],
    weakness: { fire: 110, energy: 100, earth: 100, holy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain"],
    abilities: ["Death Wave", "Life Drain", "Summon Undead", "Curse"],
    loot: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Undead Dragon Trophy", chance: "very rare", value: 300000, isRare: true },
      { item: "Golden Amulet", chance: "rare", value: 50000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 10000 },
      { item: "Platinum Coin", chance: "rare", value: 18000 },
    ],
    difficulty: 8,
    dangerLevel: "Very High",
    recommendedLevel: 220,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks - Undead Dragons are weak to fire",
      "Watch out for Death Wave - it deals heavy death damage",
      "Knight: Bring Magic Shield for Death Wave and Life Drain",
      "Knight: Use Magic Walls to block Life Drain",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Exori Con",
      "Undead Dragons can paralyze - bring Antidote or Paralyze Rune",
      "Life Drain is dangerous - heal quickly or die",
      "Undead Dragons summon other undead creatures - kill summons first",
    ],
  },
  {
    id: "frost-dragon",
    name: "Frost Dragon",
    displayName: "Frost Dragon",
    hp: 6800,
    exp: 3200,
    armor: 54,
    speed: 190,
    bestiaryClass: "Dragon",
    bestiaryKills: [2000, 5000, 10000, 20000],
    location: ["Frost Dragon Caves", "Ice Islands"],
    weakness: { fire: 110, earth: 100, energy: 90, physical: 80 },
    immunities: ["ice", "energy", "paralyze", "drain", "invisible"],
    abilities: ["Ice Wave", "Great Ice Strike", "Freeze", "Summon Snow Golems"],
    loot: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Frost Dragon Trophy", chance: "very rare", value: 200000, isRare: true },
      { item: "Frostborn Helm", chance: "rare", value: 60000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 9000 },
      { item: "Platinum Coin", chance: "rare", value: 15000 },
    ],
    difficulty: 7,
    dangerLevel: "High",
    recommendedLevel: 190,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "DO NOT use Ice - Frost Dragons are immune to ice",
      "Use Fire attacks - they are weak to fire",
      "Knight: Bring Magic Shield for Great Ice Strike",
      "Knight: Use Exori Gran and Exori Hur with fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Divine Caliber Rune",
      "Frost Dragons can freeze - stay moving and don't get cornered",
      "Frost Wave has large area - stay at range",
      "Summon Snow Golems - kill them quickly or they'll overwhelm you",
    ],
  },
  {
    id: "ghastly-dragon",
    name: "Ghastly Dragon",
    displayName: "Ghastly Dragon",
    hp: 6800,
    exp: 3350,
    armor: 54,
    speed: 190,
    bestiaryClass: "Undead",
    bestiaryKills: [2000, 5000, 10000, 20000],
    location: ["Ghostlands", "Catacombs", "Ghastly Dragon Lair"],
    weakness: { fire: 110, energy: 100, earth: 100, holy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
    abilities: ["Life Drain", "Death Wave", "Curse", "Summon Undead", "Ghost Fire"],
    loot: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Ghastly Dragon Trophy", chance: "very rare", value: 250000, isRare: true },
      { item: "Ring of the Sky", chance: "very rare", value: 500000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 11000 },
      { item: "Platinum Coin", chance: "rare", value: 20000 },
    ],
    difficulty: 8,
    dangerLevel: "Very High",
    recommendedLevel: 210,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks - Ghastly Dragons are weak to fire",
      "Life Drain is dangerous - heal quickly or die",
      "Knight: Bring Magic Shield for Life Drain and Ghost Fire",
      "Knight: Use Magic Walls to block Life Drain",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Exori Con",
      "Ghastly Dragons can use Death Wave - keep diagonal position",
      "Ghost Fire is a ranged death attack - move constantly",
      "Ghastly Dragons are immune to ice - don't waste mana on ice spells",
    ],
  },
  {
    id: "wyvern",
    name: "Wyvern",
    displayName: "Wyvern",
    hp: 3900,
    exp: 1550,
    armor: 42,
    speed: 180,
    bestiaryClass: "Dragon",
    bestiaryKills: [2000, 4000, 8000, 16000],
    location: ["Wyvern Cave", "Dragonblaze Peaks"],
    weakness: { ice: 100, earth: 100, energy: 100, holy: 100 },
    immunities: ["fire", "poison"],
    abilities: ["Fire Wave", "Poison Ball", "Summon Dragon Hatchlings"],
    loot: [
      { item: "Wyvern Trophy", chance: "always", value: 8000, isRare: true },
      { item: "Wyvern Scale", chance: "rare", value: 15000, isRare: true },
      { item: "Wyvern Shield", chance: "very rare", value: 80000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 3000 },
      { item: "Platinum Coin", chance: "rare", value: 5000 },
    ],
    difficulty: 4,
    dangerLevel: "Medium",
    recommendedLevel: 120,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "DO NOT use Fire - Wyverns are immune to fire",
      "Use Ice or Energy attacks - they are weak to these",
      "Knight: Use Exori Hur or Exori Gran",
      "Druid/Sorcerer: Use Ice Wave or Energy Strike",
      "Paladin: Use Ethereal Spear or Hailstorm Rod",
      "Wyverns spawn in groups - be careful not to get surrounded",
      "Fire Wave is dangerous for low HP players - keep distance",
      "Wyvern Trophy is valuable - always collect when possible",
    ],
  },
  {
    id: "dragon",
    name: "Dragon",
    displayName: "Dragon",
    hp: 4000,
    exp: 1700,
    armor: 40,
    speed: 170,
    bestiaryClass: "Dragon",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Dragon Lair", "Dragonblaze Peaks", "Edron Dragon Spawn"],
    weakness: { ice: 100, earth: 100, energy: 100, holy: 100 },
    immunities: ["fire"],
    abilities: ["Fire Wave", "Fireball", "Great Fireball"],
    loot: [
      { item: "Dragon Scale", chance: "common", value: 500, isRare: true },
      { item: "Dragon Shield", chance: "rare", value: 50000, isRare: true },
      { item: "Dragon Slayer", chance: "very rare", value: 80000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 1000 },
      { item: "Platinum Coin", chance: "rare", value: 2000 },
    ],
    difficulty: 3,
    dangerLevel: "Medium",
    recommendedLevel: 80,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "DO NOT use Fire - Dragons are immune to fire",
      "Use Ice or Energy attacks - they are weak to these",
      "Knight: Use Exori Hur or Exori Gran",
      "Druid/Sorcerer: Use Ice Wave or Energy Strike",
      "Paladin: Use Ethereal Spear or Divine Missile",
      "Great Fireball can hurt - bring healing supplies",
      "Fire Wave has small area - step diagonally",
      "Dragons are good XP and drop valuable items",
    ],
  },
  {
    id: "elder-wyrm",
    name: "Elder Wyrm",
    displayName: "Elder Wyrm",
    hp: 5500,
    exp: 2900,
    armor: 45,
    speed: 190,
    bestiaryClass: "Dragon",
    bestiaryKills: [1500, 3000, 6000, 12000],
    location: ["Elder Wyrm Cave", "Dragonblaze Peaks"],
    weakness: { ice: 100, earth: 100, energy: 100, holy: 100 },
    immunities: ["fire", "poison"],
    abilities: ["Fire Wave", "Great Fireball", "Poison Ball", "Summon Dragon Hatchlings"],
    loot: [
      { item: "Wyrm Trophy", chance: "always", value: 15000, isRare: true },
      { item: "Wyrm Scale", chance: "rare", value: 25000, isRare: true },
      { item: "Elder Wyrm Trophy", chance: "very rare", value: 150000, isRare: true },
      { item: "Dragonbone Staff", chance: "rare", value: 60000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 4000 },
      { item: "Platinum Coin", chance: "rare", value: 8000 },
    ],
    difficulty: 5,
    dangerLevel: "Medium",
    recommendedLevel: 150,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "DO NOT use Fire - Elder Wyrms are immune to fire",
      "Use Ice or Energy attacks - they are weak to these",
      "Knight: Use Exori Gran or Exori Hur",
      "Druid/Sorcerer: Use Ice Wave or Energy Strike",
      "Paladin: Use Ethereal Spear or Hailstorm Rod",
      "Poison Ball can be annoying - bring Antidote",
      "Elder Wyrms are tougher than regular Dragons",
      "Elder Wyrm Trophy is very valuable - always collect when possible",
    ],
  },
  {
    id: "crystal-spider",
    name: "Crystal Spider",
    displayName: "Crystal Spider",
    hp: 3800,
    exp: 1500,
    armor: 44,
    speed: 170,
    bestiaryClass: "Vermin",
    bestiaryKills: [2000, 4000, 8000, 16000],
    location: ["Crystal Spider Cave", "Tiquanda"],
    weakness: { fire: 100, earth: 100, physical: 80 },
    immunities: ["energy", "poison", "paralyze", "invisible"],
    abilities: ["Web", "Energy Wave", "Crystal Barrage", "Summon Crystal Spiders"],
    loot: [
      { item: "Crystal Sword", chance: "rare", value: 30000, isRare: true },
      { item: "Crystal Shield", chance: "rare", value: 25000, isRare: true },
      { item: "Crystal Trophy", chance: "very rare", value: 80000, isRare: true },
      { item: "Crystal Ring", chance: "rare", value: 20000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 2500 },
      { item: "Platinum Coin", chance: "rare", value: 4000 },
    ],
    difficulty: 6,
    dangerLevel: "High",
    recommendedLevel: 140,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire or Earth attacks - Crystal Spiders are weak to these",
      "DO NOT use Energy - Crystal Spiders are immune to energy",
      "Knight: Bring Magic Shield for Energy Wave",
      "Knight: Use Exori Gran or Exori Hur with fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball or Stalagmite Rune",
      "Paladin: Use Divine Missile or Avalanche Rune",
      "Web can be dangerous - you can't move while webbed",
      "Crystal Barrage hits multiple times - stay at range",
      "Energy Wave has large area - move quickly",
      "Crystal Spiders spawn in groups - don't get surrounded",
    ],
  },
  {
    id: "giant-spider",
    name: "Giant Spider",
    displayName: "Giant Spider",
    hp: 1300,
    exp: 450,
    armor: 32,
    speed: 160,
    bestiaryClass: "Vermin",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Giant Spider Cave", "Tiquanda"],
    weakness: { fire: 100, earth: 100, energy: 100 },
    immunities: ["poison", "paralyze"],
    abilities: ["Web", "Poison", "Summon Spiders"],
    loot: [
      { item: "Giant Spider Silk", chance: "common", value: 200, isRare: true },
      { item: "Spider Silk", chance: "common", value: 50 },
      { item: "Gold Coin", chance: "common", value: 500 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 40,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire, Earth, or Energy attacks - Giant Spiders are weak to these",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball, Stalagmite, or Energy Strike",
      "Paladin: Use Ethereal Spear or Divine Missile",
      "Web can be annoying - move quickly or use melee to break web",
      "Giant Spiders summon regular Spiders - kill summons first",
      "Poison is not dangerous for higher levels",
      "Good for low-level hunting and profit",
    ],
  },
  {
    id: "tarantula",
    name: "Tarantula",
    displayName: "Tarantula",
    hp: 730,
    exp: 290,
    armor: 34,
    speed: 180,
    bestiaryClass: "Vermin",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Tarantula Cave", "Tiquanda"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 90 },
    immunities: ["poison", "paralyze"],
    abilities: ["Web", "Poison", "Summon Spiders"],
    loot: [
      { item: "Tarantula Silk", chance: "common", value: 150, isRare: true },
      { item: "Spider Silk", chance: "common", value: 50 },
      { item: "Gold Coin", chance: "common", value: 400 },
      { item: "Tarantula Trophy", chance: "rare", value: 10000, isRare: true },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 50,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire, Earth, or Energy attacks - Tarantulas are weak to these",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball, Stalagmite, or Energy Strike",
      "Paladin: Use Ethereal Spear or Divine Missile",
      "Tarantulas are similar to Giant Spiders but slightly tougher",
      "Web can be annoying - move quickly or use melee to break web",
      "Good for mid-level hunting",
    ],
  },
  {
    id: "stone-golem",
    name: "Stone Golem",
    displayName: "Stone Golem",
    hp: 610,
    exp: 240,
    armor: 40,
    speed: 140,
    bestiaryClass: "Construct",
    bestiaryKills: [1000, 2000, 4000, 8000, 16000],
    location: ["Stone Golem Cave", "Darashia"],
    weakness: { fire: 110, earth: 100, energy: 90, physical: 60 },
    immunities: ["earth", "poison", "paralyze", "invisible", "drain"],
    abilities: ["Strong Earthquake", "Self-Healing", "Rock Throw"],
    loot: [
      { item: "Stone Golem Shield", chance: "rare", value: 35000, isRare: true },
      { item: "Stone Golem Trophy", chance: "very rare", value: 60000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 300 },
      { item: "Platinum Coin", chance: "rare", value: 600 },
    ],
    difficulty: 3,
    dangerLevel: "Medium",
    recommendedLevel: 80,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks - Stone Golems are weak to fire",
      "DO NOT use Earth - Stone Golems are immune to earth",
      "Knight: Use Exori Hur or Exori Gran with fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Avalanche Rune",
      "Strong Earthquake is dangerous for low HP players - keep distance",
      "Stone Golems can self-heal - kill them quickly",
      "Stone Golem Shield is valuable for Knights",
    ],
  },
  {
    id: "gargoyle",
    name: "Gargoyle",
    displayName: "Gargoyle",
    hp: 740,
    exp: 300,
    armor: 36,
    speed: 170,
    bestiaryClass: "Construct",
    bestiaryKills: [1000, 2000, 4000, 8000, 16000],
    location: ["Gargoyle Cave", "Darashia"],
    weakness: { fire: 110, energy: 90, physical: 70 },
    immunities: ["earth", "poison", "paralyze", "invisible", "drain"],
    abilities: ["Great Energy Beam", "Self-Healing", "Summon Gargoyles"],
    loot: [
      { item: "Gargoyle Helmet", chance: "rare", value: 25000, isRare: true },
      { item: "Gargoyle Trophy", chance: "very rare", value: 50000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 400 },
      { item: "Platinum Coin", chance: "rare", value: 800 },
    ],
    difficulty: 3,
    dangerLevel: "Medium",
    recommendedLevel: 90,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire or Energy attacks - Gargoyles are weak to these",
      "DO NOT use Earth - Gargoyles are immune to earth",
      "Knight: Use Exori Hur or Exori Gran with fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball or Energy Strike",
      "Paladin: Use Divine Missile or Ethereal Spear",
      "Great Energy Beam is ranged - keep distance",
      "Gargoyles can self-heal - kill them quickly",
      "Gargoyle Helmet is valuable for Knights",
    ],
  },
  {
    id: "scorpion",
    name: "Scorpion",
    displayName: "Scorpion",
    hp: 75,
    exp: 22,
    armor: 12,
    speed: 200,
    bestiaryClass: "Vermin",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Scorpion Cave", "Yalahar"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 90 },
    immunities: ["poison", "paralyze"],
    abilities: ["Poison", "Summon Scorpions"],
    loot: [
      { item: "Scorpion Tail", chance: "common", value: 50 },
      { item: "Gold Coin", chance: "common", value: 20 },
    ],
    difficulty: 1,
    dangerLevel: "Low",
    recommendedLevel: 15,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire, Earth, Energy, or Ice attacks - Scorpions are weak to these",
      "Knight: Can kill with melee easily",
      "Druid/Sorcerer: Use Poison Field or Energy Strike",
      "Paladin: Use Ethereal Spear or Divine Missile",
      "Poison is not dangerous for higher levels",
      "Scorpions are very weak - good for very low-level hunting",
      "Good for early game profit",
    ],
  },
];

// Helper functions
export const getCreatureById = (id: string) => {
  return advancedCreatures.find(c => c.id === id);
};

export const getCreaturesByLevel = (minLevel: number, maxLevel: number) => {
  return advancedCreatures.filter(c => c.recommendedLevel >= minLevel && c.recommendedLevel <= maxLevel);
};

export const getCreaturesByDifficulty = (difficulty: number) => {
  return advancedCreatures.filter(c => c.difficulty <= difficulty);
};

export const getCreaturesByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  if (vocationLower.includes('knight')) {
    return advancedCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Knight')));
  } else if (vocationLower.includes('sorcerer')) {
    return advancedCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Sorcerer')));
  } else if (vocationLower.includes('druid')) {
    return advancedCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Druid')));
  } else if (vocationLower.includes('paladin')) {
    return advancedCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Paladin')));
  } else if (vocationLower.includes('monk')) {
    return advancedCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Monk')));
  }
  return advancedCreatures;
};

export const getCreaturesByWeakness = (element: string) => {
  return advancedCreatures.filter(c => {
    const value = c.weakness[element as keyof typeof c.weakness];
    return value !== undefined && value > 0;
  });
};

export const getBestCreaturesForProfit = (limit?: number) => {
  const sorted = [...advancedCreatures].sort((a, b) => {
    // Calculate total loot value
    const aValue = a.loot.reduce((sum, item) => sum + item.value, 0);
    const bValue = b.loot.reduce((sum, item) => sum + item.value, 0);
    // Adjust by difficulty
    const aProfit = aValue / a.difficulty;
    const bProfit = bValue / b.difficulty;
    return bProfit - aProfit;
  });
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getBestCreaturesForXP = (limit?: number) => {
  const sorted = [...advancedCreatures].sort((a, b) => {
    // Calculate XP per difficulty
    const aXP = a.exp / a.difficulty;
    const bXP = b.exp / b.difficulty;
    return bXP - aXP;
  });
  return limit ? sorted.slice(0, limit) : sorted;
};

export const totalCreatures = advancedCreatures.length;
