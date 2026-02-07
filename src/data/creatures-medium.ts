// Creatures Médias - Nível 50-150
// Fonte: TibiaWiki, TibiaFandom

interface LootItem {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
}

interface MediumCreature {
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
  dangerLevel: "Very Low" | "Low" | "Medium" | "High";
  recommendedLevel: number;
  recommendedVocations: string[];
  tips: string[];
}

export const mediumCreatures: MediumCreature[] = [
  {
    id: "cyclops",
    name: "Cyclops",
    displayName: "Cyclops",
    hp: 870,
    exp: 290,
    armor: 35,
    speed: 150,
    bestiaryClass: "Giant",
    bestiaryKills: [1500, 3000, 6000, 12000],
    location: ["Cyclopolis", "Edron"],
    weakness: { earth: 100, energy: 80, ice: 70, physical: 50 },
    immunities: ["earth", "paralyze", "invisible"],
    abilities: ["Strong Earthquake", "Charge", "Throw Stones"],
    loot: [
      { item: "Cyclops Trophy", chance: "always", value: 5000, isRare: true },
      { item: "Cyclops Shield", chance: "rare", value: 35000, isRare: true },
      { item: "Giant Sword", chance: "rare", value: 90000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 500 },
      { item: "Platinum Coin", chance: "rare", value: 1000 },
    ],
    difficulty: 4,
    dangerLevel: "Medium",
    recommendedLevel: 70,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Earth ou Energy attacks",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Stalagmite ou Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Giant Sword é item muito valioso",
      "Cyclops Trophy é decente profit",
      "Strong Earthquake - fique a distancia se baixo HP"
    ],
  },
  {
    id: "orc",
    name: "Orc",
    displayName: "Orc",
    hp: 450,
    exp: 180,
    armor: 28,
    speed: 140,
    bestiaryClass: "Humanoid",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Orc Fort", "Cyclopolis", "Edron"],
    weakness: { fire: 110, energy: 100, ice: 90, earth: 90 },
    immunities: ["earth", "paralyze"],
    abilities: ["Fireball", "Charge", "Summon Orcs"],
    loot: [
      { item: "Orc Trophy", chance: "always", value: 3000, isRare: true },
      { item: "Orc Shield", chance: "rare", value: 20000, isRare: true },
      { item: "Orcish Axe", chance: "rare", value: 25000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 200 },
      { item: "Platinum Coin", chance: "uncommon", value: 400 },
    ],
    difficulty: 2,
    dangerLevel: "Low",
    recommendedLevel: 40,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire, Energy, Ice ou Earth attacks",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball ou Energy Strike",
      "Paladin: Use Ethereal Spear",
      "Orc Trophy é decente profit",
      "Orc Shield é decente para Knights low-level"
    ],
  },
  {
    id: "orc-shaman",
    name: "Orc Shaman",
    displayName: "Orc Shaman",
    hp: 530,
    exp: 240,
    armor: 30,
    speed: 150,
    bestiaryClass: "Humanoid",
    bestiaryKills: [1000, 2000, 4000, 8000, 16000],
    location: ["Orc Fort", "Cyclopolis"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "paralyze"],
    abilities: ["Fireball", "Heal", "Summon Orcs", "Curse"],
    loot: [
      { item: "Shaman Mask", chance: "rare", value: 15000, isRare: true },
      { item: "Orc Trophy", chance: "always", value: 3000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 250 },
      { item: "Platinum Coin", chance: "uncommon", value: 500 },
    ],
    difficulty: 3,
    dangerLevel: "Medium",
    recommendedLevel: 50,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Energy, Ice ou Earth attacks",
      "Orc Shamans podem heal - mate-os primeiro",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Shaman Mask é decente para Sorcerers"
    ],
  },
  {
    id: "orc-leader",
    name: "Orc Leader",
    displayName: "Orc Leader",
    hp: 830,
    exp: 450,
    armor: 36,
    speed: 160,
    bestiaryClass: "Humanoid",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Orc Fort", "Cyclopolis"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "paralyze"],
    abilities: ["Fireball", "Charge", "Summon Orcs", "Rage"],
    loot: [
      { item: "Orc Sword", chance: "rare", value: 40000, isRare: true },
      { item: "Orc Trophy", chance: "always", value: 3000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 400 },
      { item: "Platinum Coin", chance: "uncommon", value: 800 },
    ],
    difficulty: 4,
    dangerLevel: "Medium",
    recommendedLevel: 70,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Energy, Ice ou Earth attacks",
      "Orc Leaders são mais fortes que Orcs regulares",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Orc Sword é decente para Knights mid-level"
    ],
  },
  {
    id: "orc-warlord",
    name: "Orc Warlord",
    displayName: "Orc Warlord",
    hp: 1800,
    exp: 750,
    armor: 42,
    speed: 180,
    bestiaryClass: "Humanoid",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Orc Fort", "Cyclopolis"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "paralyze"],
    abilities: ["Fire Wave", "Charge", "Summon Orcs", "Rage", "Shield"],
    loot: [
      { item: "Orcish Maul", chance: "rare", value: 60000, isRare: true },
      { item: "Orc Trophy", chance: "always", value: 3000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 700 },
      { item: "Platinum Coin", chance: "uncommon", value: 1500 },
    ],
    difficulty: 6,
    dangerLevel: "High",
    recommendedLevel: 120,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire, Energy, Ice ou Earth attacks",
      "Orc Warlords podem usar Shield - bring Holy damage",
      "Knight: Use Exori Hur ou Exori Gran",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Orcish Maul é item muito valioso"
    ],
  },
  {
    id: "carniphila",
    name: "Carniphila",
    displayName: "Carniphila",
    hp: 1400,
    exp: 450,
    armor: 35,
    speed: 150,
    bestiaryClass: "Elemental",
    bestiaryKills: [1000, 2000, 4000, 8000, 16000],
    location: ["Tiquanda"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible"],
    abilities: ["Poison", "Paralyze", "Summon Carniphilas"],
    loot: [
      { item: "Carniphila Seed", chance: "rare", value: 20000, isRare: true },
      { item: "Carniphila Trophy", chance: "rare", value: 30000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 400 },
      { item: "Platinum Coin", chance: "uncommon", value: 800 },
    ],
    difficulty: 5,
    dangerLevel: "High",
    recommendedLevel: 90,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Carniphilas podem paralizar - traga Antidote",
      "Knight: Use Exori Hur com fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Carniphila Trophy é valioso"
    ],
  },
  {
    id: "spit-nettle",
    name: "Spit Nettle",
    displayName: "Spit Nettle",
    hp: 850,
    exp: 280,
    armor: 32,
    speed: 140,
    bestiaryClass: "Elemental",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Tiquanda"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible"],
    abilities: ["Poison", "Acid", "Summon Spit Nettles"],
    loot: [
      { item: "Nettle Spit", chance: "uncommon", value: 5000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 300 },
      { item: "Platinum Coin", chance: "uncommon", value: 600 },
    ],
    difficulty: 3,
    dangerLevel: "Medium",
    recommendedLevel: 60,
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Spit Nettles são mais fracos que Carniphilas",
      "Knight: Use Exori Hur",
      "Druid/Sorcerer: Use Fireball",
      "Paladin: Use Ethereal Spear",
      "Nettle Spit é decente profit"
    ],
  },
  {
    id: "bog-raider",
    name: "Bog Raider",
    displayName: "Bog Raider",
    hp: 1100,
    exp: 350,
    armor: 34,
    speed: 150,
    bestiaryClass: "Elemental",
    bestiaryKills: [1000, 2000, 4000, 8000, 16000],
    location: ["Tiquanda"],
    weakness: { fire: 100, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible"],
    abilities: ["Poison", "Paralyze", "Heal", "Summon Bog Raiders"],
    loot: [
      { item: "Bog Raider Dreads", chance: "rare", value: 18000, isRare: true },
      { item: "Bog Raider Trophy", chance: "rare", value: 25000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 350 },
      { item: "Platinum Coin", chance: "uncommon", value: 700 },
    ],
    difficulty: 4,
    dangerLevel: "Medium",
    recommendedLevel: 80,
    recommendedVocations: ["Knight", "Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Bog Raiders podem heal - mate-os primeiro",
      "Knight: Use Exori Hur com fire-enchanted weapon",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Bog Raider Trophy é valioso"
    ],
  },
  {
    id: "corruptor",
    name: "Corruptor",
    displayName: "Corruptor",
    hp: 1450,
    exp: 400,
    armor: 38,
    speed: 170,
    bestiaryClass: "Elemental",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Corruptor Cave"],
    weakness: { fire: 110, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible", "drain"],
    abilities: ["Life Drain", "Curse", "Summon Corruptors"],
    loot: [
      { item: "Corruptor Fang", chance: "rare", value: 22000, isRare: true },
      { item: "Corruptor Trophy", chance: "very rare", value: 40000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 400 },
      { item: "Platinum Coin", chance: "uncommon", value: 800 },
    ],
    difficulty: 6,
    dangerLevel: "High",
    recommendedLevel: 110,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Life Drain é perigoso - heal rápido",
      "Knight: Use Magic Shield e Exori Hur",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Corruptor Trophy é muito valioso"
    ],
  },
  {
    id: "defiler",
    name: "Defiler",
    displayName: "Defiler",
    hp: 1700,
    exp: 480,
    armor: 40,
    speed: 180,
    bestiaryClass: "Elemental",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Defiler Cave"],
    weakness: { fire: 110, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible", "drain"],
    abilities: ["Life Drain", "Curse", "Poison", "Summon Defilers"],
    loot: [
      { item: "Defiler Fang", chance: "rare", value: 25000, isRare: true },
      { item: "Defiler Trophy", chance: "very rare", value: 45000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 500 },
      { item: "Platinum Coin", chance: "uncommon", value: 1000 },
    ],
    difficulty: 7,
    dangerLevel: "High",
    recommendedLevel: 130,
    recommendedVocations: ["Elite Knight", "Sorcerer", "Druid", "Royal Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Defilers são mais fortes que Corruptors",
      "Life Drain é muito perigoso - heal MUITO rápido",
      "Knight: Use Magic Shield e Exori Hur",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Defiler Trophy é muito valioso"
    ],
  },
  {
    id: "dark-torturer",
    name: "Dark Torturer",
    displayName: "Dark Torturer",
    hp: 1900,
    exp: 550,
    armor: 42,
    speed: 190,
    bestiaryClass: "Elemental",
    bestiaryKills: [500, 1000, 2000, 4000, 8000, 16000],
    location: ["Torturer Cave"],
    weakness: { fire: 110, energy: 100, ice: 90, earth: 80 },
    immunities: ["earth", "poison", "paralyze", "invisible", "drain", "life drain"],
    abilities: ["Life Drain", "Curse", "Soul Drain", "Summon Dark Torturers"],
    loot: [
      { item: "Dark Shield", chance: "rare", value: 35000, isRare: true },
      { item: "Dark Torturer Trophy", chance: "very rare", value: 60000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 600 },
      { item: "Platinum Coin", chance: "uncommon", value: 1200 },
    ],
    difficulty: 8,
    dangerLevel: "High",
    recommendedLevel: 150,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire ou Energy attacks - não use Earth",
      "Dark Torturers são muito perigosos - Life Drain + Soul Drain",
      "Knight: Use Magic Shield PERMANENTE",
      "Druid/Sorcerer: Use Great Fireball",
      "Paladin: Use Ethereal Spear",
      "Dark Shield é item valioso",
      "Precisa de muitos Ultimate Healing Runes"
    ],
  },
];

// Helper functions
export const getMediumCreatureById = (id: string) => {
  return mediumCreatures.find(c => c.id === id);
};

export const getMediumCreaturesByLevel = (minLevel: number, maxLevel: number) => {
  return mediumCreatures.filter(c => c.recommendedLevel >= minLevel && c.recommendedLevel <= maxLevel);
};

export const getMediumCreaturesByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  if (vocationLower.includes('knight')) {
    return mediumCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Knight')));
  } else if (vocationLower.includes('sorcerer')) {
    return mediumCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Sorcerer')));
  } else if (vocationLower.includes('druid')) {
    return mediumCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Druid')));
  } else if (vocationLower.includes('paladin')) {
    return mediumCreatures.filter(c => c.recommendedVocations.some(v => v.includes('Paladin')));
  }
  return mediumCreatures;
};

export const totalMediumCreatures = mediumCreatures.length;
