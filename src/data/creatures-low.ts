// Creatures Baixo Nível - Nível 1-50
// Fonte: TibiaWiki, TibiaFandom

interface LootItem {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
}

interface LowLevelCreature {
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
  dangerLevel: "Very Low" | "Low";
  recommendedLevel: number;
  recommendedVocations: string[];
  tips: string[];
}

export const lowLevelCreatures: LowLevelCreature[] = [
  {
    id: "rat",
    name: "Rat",
    displayName: "Rat",
    hp: 50,
    exp: 10,
    armor: 4,
    speed: 120,
    bestiaryClass: "Vermin",
    bestiaryKills: [50, 100, 200, 400, 800, 1600],
    location: ["Rat Cave", "Caves"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["poison", "paralyze"],
    abilities: ["Bite"],
    loot: [
      { item: "Cheese", chance: "always", value: 5 },
      { item: "Gold Coin", chance: "always", value: 5 },
    ],
    difficulty: 1,
    dangerLevel: "Very Low",
    recommendedLevel: 1,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Criaturas mais fracas do jogo",
      "Good para tutorial e iniciantes",
      "Muito fácil para qualquer vocação"
    ],
  },
  {
    id: "cave-rat",
    name: "Cave Rat",
    displayName: "Cave Rat",
    hp: 120,
    exp: 30,
    armor: 12,
    speed: 130,
    bestiaryClass: "Vermin",
    bestiaryKills: [150, 300, 600, 1200, 2400, 4800],
    location: ["Cave", "Rookgaard"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["poison", "paralyze"],
    abilities: ["Bite", "Poison"],
    loot: [
      { item: "Cheese", chance: "always", value: 5 },
      { item: "Gold Coin", chance: "always", value: 10 },
    ],
    difficulty: 1,
    dangerLevel: "Very Low",
    recommendedLevel: 8,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Levemente mais forte que Rats",
      "Poison não é perigoso neste nível",
      "Good para iniciantes",
    ],
  },
  {
    id: "spider",
    name: "Spider",
    displayName: "Spider",
    hp: 26,
    exp: 8,
    armor: 4,
    speed: 130,
    bestiaryClass: "Vermin",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Spider Cave", "Tiquanda"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["poison", "paralyze"],
    abilities: ["Poison", "Bite"],
    loot: [
      { item: "Spider Silk", chance: "always", value: 50 },
      { item: "Gold Coin", chance: "always", value: 5 },
    ],
    difficulty: 1,
    dangerLevel: "Very Low",
    recommendedLevel: 5,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Muito fracas",
      "Poison não é perigoso neste nível",
      "Good para farming Spider Silk",
    ],
  },
  {
    id: "goblin",
    name: "Goblin",
    displayName: "Goblin",
    hp: 125,
    exp: 60,
    armor: 10,
    speed: 140,
    bestiaryClass: "Humanoid",
    bestiaryKills: [100, 200, 400, 800, 1600, 3200],
    location: ["Goblin Cave", "Cyclopolis"],
    weakness: { fire: 110, energy: 100, ice: 100, earth: 100 },
    immunities: ["earth", "paralyze"],
    abilities: ["Small Stone Throw"],
    loot: [
      { item: "Goblin Ear", chance: "always", value: 100, isRare: true },
      { item: "Goblin Skull", chance: "rare", value: 200, isRare: true },
      { item: "Gold Coin", chance: "always", value: 10 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 10,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire, Energy, Ice ou Earth",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball ou Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Goblin Ear é valioso para loot rate",
    ],
  },
  {
    id: "troll",
    name: "Troll",
    displayName: "Troll",
    hp: 400,
    exp: 140,
    armor: 16,
    speed: 130,
    bestiaryClass: "Humanoid",
    bestiaryKills: [100, 200, 400, 800, 1600, 3200],
    location: ["Troll Cave", "Cyclopolis"],
    weakness: { fire: 100, energy: 100, ice: 100, earth: 100 },
    immunities: ["earth", "paralyze"],
    abilities: ["Stone Throw", "Kick"],
    loot: [
      { item: "Troll Root", chance: "always", value: 100, isRare: true },
      { item: "Gold Coin", chance: "always", value: 20 },
      { item: "Platinum Coin", chance: "uncommon", value: 50 },
    ],
    difficulty: 3,
    dangerLevel: "Low",
    recommendedLevel: 20,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use qualquer element damage",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball ou Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Troll Root é decente profit",
    ],
  },
  {
    id: "orc-spearman",
    name: "Orc Spearman",
    displayName: "Orc Spearman",
    hp: 180,
    exp: 70,
    armor: 14,
    speed: 140,
    bestiaryClass: "Humanoid",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Orc Fort", "Cyclopolis"],
    weakness: { fire: 110, energy: 100, ice: 90, earth: 90 },
    immunities: ["earth", "paralyze"],
    abilities: ["Spear Throw"],
    loot: [
      { item: "Orc Tooth", chance: "always", value: 100, isRare: true },
      { item: "Gold Coin", chance: "always", value: 15 },
      { item: "Platinum Coin", chance: "uncommon", value: 100 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 15,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Levemente mais forte que Orcs regulares",
      "Use Fire, Energy, Ice ou Earth",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Orc Tooth é decente para loot rate",
    ],
  },
  {
    id: "minotaur",
    name: "Minotaur",
    displayName: "Minotaur",
    hp: 340,
    exp: 115,
    armor: 16,
    speed: 130,
    bestiaryClass: "Humanoid",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Minotaur Camp", "Cyclopolis"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["earth", "paralyze"],
    abilities: ["Charge", "Axe Throw"],
    loot: [
      { item: "Minotaur Leather", chance: "rare", value: 150, isRare: true },
      { item: "Minotaur Horn", chance: "rare", value: 200, isRare: true },
      { item: "Gold Coin", chance: "always", value: 20 },
      { item: "Platinum Coin", chance: "uncommon", value: 100 },
    ],
    difficulty: 3,
    dangerLevel: "Low",
    recommendedLevel: 25,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Earth, Energy ou Ice",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Minotaur Horn é decente para loot rate",
      "Charge pode ser perigoso para low HP",
    ],
  },
  {
    id: "rotworm",
    name: "Rotworm",
    displayName: "Rotworm",
    hp: 95,
    exp: 40,
    armor: 10,
    speed: 140,
    bestiaryClass: "Vermin",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Rotworm Cave", "Liberty Bay"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["earth", "poison", "paralyze"],
    abilities: ["Earth Wave", "Poison"],
    loot: [
      { item: "Earthworm", chance: "always", value: 50 },
      { item: "Gold Coin", chance: "always", value: 15 },
      { item: "Platinum Coin", chance: "uncommon", value: 50 },
    ],
    difficulty: 1,
    dangerLevel: "Very Low",
    recommendedLevel: 8,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "DO NOT use Earth - são imunes",
      "Use Fire, Energy ou Ice",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Earthworm pode ser vendido (não discard)",
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    displayName: "Skeleton",
    hp: 110,
    exp: 45,
    armor: 10,
    speed: 130,
    bestiaryClass: "Undead",
    bestiaryKills: [250, 500, 1000, 2000, 4000, 8000, 16000],
    location: ["Skeleton Cave", "Ghostlands"],
    weakness: { fire: 110, energy: 100, earth: 100, holy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
    abilities: ["Life Drain", "Summon Skeletons"],
    loot: [
      { item: "Bone", chance: "always", value: 30 },
      { item: "Skull", chance: "uncommon", value: 50 },
      { item: "Gold Coin", chance: "always", value: 10 },
      { item: "Platinum Coin", chance: "uncommon", value: 50 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 15,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "DO NOT use Ice - são imunes",
      "Use Fire, Energy, Earth ou Holy",
      "Knight: Use Magic Shield para Life Drain",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear ou Divine Missile",
      "Life Drain é perigoso - heal rápido",
      "Bone e Skull podem ser vendidos",
    ],
  },
  {
    id: "ghoul",
    name: "Ghoul",
    displayName: "Ghoul",
    hp: 350,
    exp: 115,
    armor: 20,
    speed: 140,
    bestiaryClass: "Undead",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Ghoul Cave", "Ghostlands"],
    weakness: { fire: 110, energy: 100, earth: 100, holy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
    abilities: ["Life Drain", "Paralyze", "Summon Ghouls"],
    loot: [
      { item: "Bone", chance: "always", value: 30 },
      { item: "Ghoul Snack", chance: "rare", value: 1000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 20 },
      { item: "Platinum Coin", chance: "uncommon", value: 100 },
    ],
    difficulty: 4,
    dangerLevel: "Low",
    recommendedLevel: 30,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "DO NOT use Ice - são imunes",
      "Use Fire, Energy, Earth ou Holy",
      "Knight: Use Magic Shield para Life Drain",
      "Sorcerer/Druid: Use Fireball ou Great Fireball",
      "Paladin: Use Ethereal Spear ou Divine Missile",
      "Ghouls podem paralizar - traga Antidote",
      "Life Drain é perigoso - heal rápido",
    ],
  },
  {
    id: "minotaur-archer",
    name: "Minotaur Archer",
    displayName: "Minotaur Archer",
    hp: 450,
    exp: 150,
    armor: 22,
    speed: 150,
    bestiaryClass: "Humanoid",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Minotaur Camp", "Cyclopolis"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["earth", "paralyze"],
    abilities: ["Arrow", "Charge"],
    loot: [
      { item: "Minotaur Leather", chance: "rare", value: 150, isRare: true },
      { item: "Minotaur Horn", chance: "rare", value: 200, isRare: true },
      { item: "Arrow", chance: "always", value: 5 },
      { item: "Gold Coin", chance: "always", value: 25 },
      { item: "Platinum Coin", chance: "uncommon", value: 150 },
    ],
    difficulty: 4,
    dangerLevel: "Low",
    recommendedLevel: 35,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Earth, Energy ou Ice",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Minotaur Archers têm ranged attack - fique perto",
    ],
  },
  {
    id: "minotaur-mage",
    name: "Minotaur Mage",
    displayName: "Minotaur Mage",
    hp: 500,
    exp: 185,
    armor: 25,
    speed: 150,
    bestiaryClass: "Humanoid",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Minotaur Camp", "Cyclopolis"],
    weakness: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["earth", "paralyze", "invisible"],
    abilities: ["Energy Strike", "Haste", "Fire Wave"],
    loot: [
      { item: "Minotaur Leather", chance: "rare", value: 150, isRare: true },
      { item: "Minotaur Horn", chance: "rare", value: 200, isRare: true },
      { item: "Magic Plate", chance: "very rare", value: 50000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 30 },
      { item: "Platinum Coin", chance: "uncommon", value: 200 },
    ],
    difficulty: 5,
    dangerLevel: "Low",
    recommendedLevel: 45,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Earth, Energy ou Ice",
      "Knight: Use Magic Shield para Fire Wave",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Minotaur Mages usam magic - fique perto",
      "Magic Plate é muito valioso",
    ],
  },
  {
    id: "wolf",
    name: "Wolf",
    displayName: "Wolf",
    hp: 150,
    exp: 40,
    armor: 12,
    speed: 140,
    bestiaryClass: "Beast",
    bestiaryKills: [100, 200, 400, 800, 1600, 3200],
    location: ["Wolf Cave", "Forest"],
    weakness: { fire: 100, energy: 100, ice: 100, earth: 100 },
    immunities: ["earth", "paralyze"],
    abilities: ["Bite", "Howl"],
    loot: [
      { item: "Wolf Paw", chance: "always", value: 50, isRare: true },
      { item: "Gold Coin", chance: "always", value: 10 },
      { item: "Platinum Coin", chance: "uncommon", value: 50 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 12,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use qualquer element damage",
      "Knight: Use Exori Hur",
      "Sorcerer/Druid: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Wolf Paw é decente para loot rate",
      "Howl pode atrair mais wolves",
    ],
  },
];

// Helper functions
export const getLowLevelCreatureById = (id: string) => {
  return lowLevelCreatures.find(c => c.id === id);
};

export const getLowLevelCreaturesByLevel = (minLevel: number, maxLevel: number) => {
  return lowLevelCreatures.filter(c => c.recommendedLevel >= minLevel && c.recommendedLevel <= maxLevel);
};

export const getLowLevelCreaturesByDifficulty = (difficulty: number) => {
  return lowLevelCreatures.filter(c => c.difficulty <= difficulty);
};

export const getLowLevelCreaturesByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  if (vocationLower.includes('knight')) {
    return lowLevelCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Knight')));
  } else if (vocationLower.includes('sorcerer')) {
    return lowLevelCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Sorcerer')));
  } else if (vocationLower.includes('druid')) {
    return lowLevelCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Druid')));
  } else if (vocationLower.includes('paladin')) {
    return lowLevelCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Paladin')));
  }
  return lowLevelCreatures;
};

export const totalLowLevelCreatures = lowLevelCreatures.length;
