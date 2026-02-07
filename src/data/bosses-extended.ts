// Bosses Extendidos - Mais detalhes e drops
// Fonte: TibiaWiki, TibiaFandom, Rubinot Wiki
// Data: 2026-02-05

export interface BossLoot {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
  notes?: string;
}

export interface BossMechanic {
  name: string;
  description: string;
  counter: string;
}

export interface ExtendedBoss {
  id: string;
  name: string;
  tier: "S" | "A" | "B";
  category: string;
  hp: number;
  exp: number;
  armor: number;
  speed: number;
  cooldown: string;
  respawnTime: string;
  location: string;
  mechanics: BossMechanic[];
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
  loot: BossLoot[];
  soloable: boolean;
  recommendedLevel: number;
  recommendedVocations: string[];
  tips: string[];
  notes?: string;
}

export const extendedBosses: ExtendedBoss[] = [
  {
    id: "ferumbras",
    name: "Ferumbras",
    tier: "S",
    category: "Demonic",
    hp: 350000,
    exp: 95000,
    armor: 75,
    speed: 250,
    cooldown: "30 days",
    respawnTime: "~30 days",
    location: "Ferumbras' Tower",
    mechanics: [
      {
        name: "Teleportation",
        description: "Teleports randomly during the fight",
        counter: "Stay close and use challenge"
      },
      {
        name: "Summoning",
        description: "Summons Demons and Hellhounds",
        counter: "Kill summons first"
      },
      {
        name: "Mana Drain",
        description: "Drains mana from players",
        counter: "Bring mana fluids and potions"
      }
    ],
    weakness: { holy: 110, energy: 100, physical: 80 },
    immunities: ["energy", "poison", "paralyze", "drain", "invisible"],
    loot: [
      { item: "Golden Ferumbras' Hat", chance: "very rare", value: 5000000, isRare: true },
      { item: "Ferumbras' Hat", chance: "very rare", value: 2000000, isRare: true },
      { item: "Ferumbras' Staff", chance: "very rare", value: 1500000, isRare: true },
      { item: "Golden Armor", chance: "rare", value: 300000, isRare: true },
      { item: "Magic Plate Armor", chance: "rare", value: 800000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 50000 },
    ],
    soloable: false,
    recommendedLevel: 500,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "NEVER try solo - needs full team",
      "Knight: Use Mass Challenge, Stone Skin, bring lots of potions",
      "Druid/Sorcerer: Use Holy attacks, Avalanche Runes",
      "Paladin: Use Divine Caliber Rune, Ethereal Spear",
      "Ferumbras can heal - kill him as fast as possible",
      "Watch out for teleportation - don't lose track of him",
    ],
    notes: "One of the hardest bosses in Tibia. Requires well-coordinated team.",
  },
  {
    id: "mazadora",
    name: "Mazadora",
    tier: "S",
    category: "Demonic",
    hp: 280000,
    exp: 75000,
    armor: 70,
    speed: 240,
    cooldown: "20 days",
    respawnTime: "~20 days",
    location: "Mazadora's Sanctum",
    mechanics: [
      {
        name: "Fire Wave",
        description: "Massive fire wave covering most of the arena",
        counter: "Stay at distance, use Magic Shield"
      },
      {
        name: "Summoning",
        description: "Summons Dragons and Dragon Lords",
        counter: "Kill summons before focusing on boss"
      },
      {
        name: "Self-Healing",
        description: "Heals periodically",
        counter: "Max DPS, kill quickly"
      }
    ],
    weakness: { ice: 110, energy: 100, earth: 100 },
    immunities: ["fire", "poison", "paralyze", "drain", "invisible"],
    loot: [
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Dragon Shield", chance: "very rare", value: 120000, isRare: true },
      { item: "Mazadora Trophy", chance: "very rare", value: 400000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 40000 },
    ],
    soloable: false,
    recommendedLevel: 450,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "NEVER try solo - needs team",
      "Use Ice attacks - Mazadora is weak to ice",
      "Knight: Bring Magic Shield, Stone Skin, and lots of potions",
      "Druid/Sorcerer: Use Avalanche Runes and Ice Strike spells",
      "Paladin: Use Divine Caliber Rune or Hailstorm Rod",
      "Fire Wave is devastating - stay diagonal and at range",
      "Kill summons first or they will overwhelm you",
    ],
  },
  {
    id: "apocalypse",
    name: "Apocalypse",
    tier: "S",
    category: "Undead",
    hp: 220000,
    exp: 60000,
    armor: 68,
    speed: 230,
    cooldown: "14 days",
    respawnTime: "~14 days",
    location: "Apocalypse's Crypt",
    mechanics: [
      {
        name: "Death Wave",
        description: "Massive death wave",
        counter: "Magic Shield or stay diagonal"
      },
      {
        name: "Life Drain",
        description: "Drains life and heals itself",
        counter: "Kill fast, use Magic Shield"
      },
      {
        name: "Paralyze",
        description: "Paralyzes players",
        counter: "Bring Paralyze Runes"
      }
    ],
    weakness: { fire: 110, holy: 100, energy: 100, earth: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
    loot: [
      { item: "Apocalypse Trophy", chance: "very rare", value: 350000, isRare: true },
      { item: "Golden Amulet", chance: "rare", value: 50000, isRare: true },
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 35000 },
    ],
    soloable: false,
    recommendedLevel: 400,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks - Apocalypse is weak to fire",
      "Life Drain is dangerous - heal quickly",
      "Knight: Bring Magic Shield, lots of potions",
      "Druid/Sorcerer: Use Great Fireball and Avalanche Rune",
      "Paladin: Use Divine Missile or Divine Caliber Rune",
      "Death Wave has large area - stay at diagonal position",
      "Apocalypse can paralyze - have Paralyze Runes ready",
    ],
  },
  {
    id: "ghazbaran",
    name: "Ghazbaran",
    tier: "S",
    category: "Demonic",
    hp: 250000,
    exp: 70000,
    armor: 72,
    speed: 245,
    cooldown: "14 days",
    respawnTime: "~14 days",
    location: "Ghazbaran's Lair",
    mechanics: [
      {
        name: "Great Fireball",
        description: "Repeated Great Fireball attacks",
        counter: "Magic Shield, stay at range"
      },
      {
        name: "Fire Wave",
        description: "Fire wave attack",
        counter: "Stay diagonal"
      },
      {
        name: "Summoning",
        description: "Summons Demons",
        counter: "Kill summons first"
      }
    ],
    weakness: { ice: 110, earth: 100, energy: 100 },
    immunities: ["fire", "poison", "paralyze", "drain", "invisible"],
    loot: [
      { item: "Ghazbaran Trophy", chance: "very rare", value: 380000, isRare: true },
      { item: "Dragon Scale Mail", chance: "very rare", value: 300000, isRare: true },
      { item: "Demonbone", chance: "very rare", value: 250000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 38000 },
    ],
    soloable: false,
    recommendedLevel: 420,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Ice attacks - Ghazbaran is weak to ice",
      "Great Fireball spam is dangerous - stay at range",
      "Knight: Bring Magic Shield, Stone Skin, lots of potions",
      "Druid/Sorcerer: Use Avalanche Runes and Ice Wave",
      "Paladin: Use Divine Caliber Rune or Hailstorm Rod",
      "Kill Demons before they overwhelm the team",
      "Fire Wave - stay diagonal and be ready to dodge",
    ],
  },
  {
    id: "orshabaal",
    name: "Orshabaal",
    tier: "S",
    category: "Demonic",
    hp: 180000,
    exp: 55000,
    armor: 65,
    speed: 220,
    cooldown: "7 days",
    respawnTime: "~7 days",
    location: "Orshabaal's Fortress",
    mechanics: [
      {
        name: "Energy Wave",
        description: "Massive energy wave",
        counter: "Magic Shield or stay diagonal"
      },
      {
        name: "Great Energy Beam",
        description: "Targeted energy beam",
        counter: "Keep moving, don't stay still"
      },
      {
        name: "Mana Drain",
        description: "Drains mana",
        counter: "Bring mana fluids"
      }
    ],
    weakness: { ice: 110, earth: 100, physical: 90, holy: 80 },
    immunities: ["energy", "poison", "paralyze", "drain", "invisible"],
    loot: [
      { item: "Orshabaal Trophy", chance: "very rare", value: 300000, isRare: true },
      { item: "Demon Armor", chance: "very rare", value: 400000, isRare: true },
      { item: "Stone Skin Amulet", chance: "rare", value: 80000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 30000 },
    ],
    soloable: false,
    recommendedLevel: 350,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Ice or Earth attacks",
      "Energy Wave has large area - stay at diagonal",
      "Great Energy Beam targets players - keep moving",
      "Knight: Bring Magic Shield and potions",
      "Druid/Sorcerer: Use Avalanche Runes or Stalagmite",
      "Paladin: Use Divine Caliber Rune or Ethereal Spear",
      "Mana Drain can be problematic - have mana fluids ready",
    ],
  },
  {
    id: "morgaroth",
    name: "Morgaroth",
    tier: "A",
    category: "Demonic",
    hp: 150000,
    exp: 45000,
    armor: 60,
    speed: 210,
    cooldown: "7 days",
    respawnTime: "~7 days",
    location: "Morgaroth's Lair",
    mechanics: [
      {
        name: "Death Wave",
        description: "Death wave attack",
        counter: "Magic Shield"
      },
      {
        name: "Life Drain",
        description: "Drains life and heals",
        counter: "Kill fast, use Magic Shield"
      },
      {
        name: "Summoning",
        description: "Summons Hellhounds",
        counter: "Kill summons first"
      }
    ],
    weakness: { fire: 110, holy: 100, energy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain"],
    loot: [
      { item: "Morgaroth Trophy", chance: "very rare", value: 250000, isRare: true },
      { item: "Demonbone", chance: "very rare", value: 250000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 25000 },
    ],
    soloable: false,
    recommendedLevel: 300,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire or Holy attacks",
      "Life Drain is dangerous - kill fast",
      "Knight: Bring Magic Shield and potions",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Divine Caliber Rune",
      "Death Wave - use Magic Shield or stay diagonal",
    ],
  },
  {
    id: "gaz'haragoth",
    name: "Gaz'haragoth",
    tier: "S",
    category: "Undead",
    hp: 200000,
    exp: 58000,
    armor: 66,
    speed: 225,
    cooldown: "10 days",
    respawnTime: "~10 days",
    location: "Gaz'haragoth's Crypt",
    mechanics: [
      {
        name: "Earthquake",
        description: "Massive earthquake damage",
        counter: "Stay at range"
      },
      {
        name: "Life Drain",
        description: "Drains life",
        counter: "Magic Shield"
      },
      {
        name: "Summoning",
        description: "Summons Undead",
        counter: "Kill summons first"
      }
    ],
    weakness: { fire: 110, holy: 100, energy: 100 },
    immunities: ["earth", "ice", "poison", "paralyze", "drain", "life drain"],
    loot: [
      { item: "Gaz'haragoth Trophy", chance: "very rare", value: 320000, isRare: true },
      { item: "Golden Amulet", chance: "rare", value: 50000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 32000 },
    ],
    soloable: false,
    recommendedLevel: 380,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire or Holy attacks",
      "Earthquake can kill - stay at range",
      "Knight: Bring Magic Shield and potions",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Divine Caliber Rune",
    ],
  },
  {
    id: "the-nightmare",
    name: "The Nightmare",
    tier: "A",
    category: "Nightmare",
    hp: 120000,
    exp: 35000,
    armor: 58,
    speed: 215,
    cooldown: "5 days",
    respawnTime: "~5 days",
    location: "Nightmare Cathedral",
    mechanics: [
      {
        name: "Life Drain",
        description: "Drains life",
        counter: "Magic Shield"
      },
      {
        name: "Paralyze",
        description: "Paralyzes",
        counter: "Paralyze Runes"
      },
      {
        name: "Invisibility",
        description: "Can become invisible",
        counter: "Use Magic Walls or AOE attacks"
      }
    ],
    weakness: { fire: 110, holy: 100, energy: 100 },
    immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
    loot: [
      { item: "Nightmare Trophy", chance: "very rare", value: 200000, isRare: true },
      { item: "Ring of the Sky", chance: "very rare", value: 500000, isRare: true },
      { item: "Gold Coin", chance: "always", value: 20000 },
    ],
    soloable: false,
    recommendedLevel: 280,
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire or Holy attacks",
      "Life Drain is dangerous - use Magic Shield",
      "Bring Paralyze Runes",
      "Nightmare can become invisible - use Magic Walls or AOE",
      "Knight: Bring Magic Shield and potions",
      "Druid/Sorcerer: Use Great Fireball or Avalanche Rune",
      "Paladin: Use Divine Missile or Divine Caliber Rune",
    ],
  },
];

// Helper functions
export const getBossById = (id: string) => {
  return extendedBosses.find(b => b.id === id);
};

export const getBossesByTier = (tier: string) => {
  return extendedBosses.filter(b => b.tier === tier);
};

export const getBossesByLevel = (minLevel: number, maxLevel?: number) => {
  if (maxLevel) {
    return extendedBosses.filter(b => b.recommendedLevel >= minLevel && b.recommendedLevel <= maxLevel);
  }
  return extendedBosses.filter(b => b.recommendedLevel >= minLevel);
};

export const getSoloableBosses = () => {
  return extendedBosses.filter(b => b.soloable);
};

export const getBossesByCategory = (category: string) => {
  return extendedBosses.filter(b => b.category.toLowerCase().includes(category.toLowerCase()));
};

export const getBestBossesForProfit = () => {
  const sorted = [...extendedBosses].sort((a, b) => {
    const aValue = a.loot.reduce((sum, item) => sum + item.value, 0);
    const bValue = b.loot.reduce((sum, item) => sum + item.value, 0);
    return bValue - aValue;
  });
  return sorted;
};

export const getBossesByCooldown = (maxCooldownDays: number) => {
  return extendedBosses.filter(b => {
    const match = b.cooldown.match(/(\d+)/);
    return match ? parseInt(match[1]) <= maxCooldownDays : false;
  });
};

export const totalBosses = extendedBosses.length;
export const tierSBosses = extendedBosses.filter(b => b.tier === "S").length;
export const tierABosses = extendedBosses.filter(b => b.tier === "A").length;
export const tierBBosses = extendedBosses.filter(b => b.tier === "B").length;
