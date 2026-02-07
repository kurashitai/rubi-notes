// Spells - Todas as magias por vocação
// Fonte: TibiaWiki
// Data: 2026-02-05

export interface SpellRequirement {
  level: number;
  magicLevel: number;
  mana: number;
  soulPoints?: number;
  premium: boolean;
}

export interface Spell {
  id: string;
  name: string;
  words: string;
  vocation: string[];
  type: "Instant" | "Rune";
  cooldown: number; // seconds
  requirement: SpellRequirement;
  damage?: {
    min: number;
    max: number;
    element: string;
    formula?: string; // "0.5 * level + 10 * magicLevel"
  };
  healing?: {
    min: number;
    max: number;
    formula?: string;
  };
  buff?: string;
  description: string;
  pvp?: string; // PVP damage formula
  notes?: string;
}

export const spells: Spell[] = [
  // KNIGHT SPELLS
  {
    id: "exori",
    name: "Strike",
    words: "exori",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 4,
    requirement: { level: 5, magicLevel: 0, mana: 20, premium: false },
    damage: { min: 20, max: 40, element: "physical", formula: "0.5 * level + 10 * magicLevel" },
    description: "A physical strike that damages a nearby creature.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exori-hur",
    name: "Berserk",
    words: "exori hur",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 35, magicLevel: 0, mana: 40, premium: false },
    damage: { min: 60, max: 160, element: "physical", formula: "1.5 * level + 10 * magicLevel" },
    description: "A powerful physical strike that damages creatures in front of you.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "One of the best Knight spells for damage",
  },
  {
    id: "exori-gran",
    name: "Front Sweep",
    words: "exori gran",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 8,
    requirement: { level: 70, magicLevel: 0, mana: 115, premium: true },
    damage: { min: 90, max: 200, element: "physical", formula: "2 * level + 15 * magicLevel" },
    description: "Sweeping physical strike hitting all creatures in front.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Excellent for hunting multiple monsters",
  },
  {
    id: "exori-mas",
    name: "Whirlwind Throw",
    words: "exori mas",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 50, magicLevel: 0, mana: 60, premium: true },
    damage: { min: 80, max: 180, element: "physical", formula: "1.8 * level + 12 * magicLevel" },
    description: "Throws your weapon in a circle, hitting all adjacent creatures.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Best AOE spell for Knights",
  },
  {
    id: "utani-gran-hur",
    name: "Swift Foot",
    words: "utani gran hur",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 10,
    requirement: { level: 60, magicLevel: 0, mana: 200, premium: true },
    buff: "Speed +80%",
    description: "Grants you a great boost to your movement speed for 20 seconds.",
    notes: "Essential for escaping and kiting",
  },
  {
    id: "utito-tem",
    name: "Blood Rage",
    words: "utito tem",
    vocation: ["Knight", "Elite Knight"],
    type: "Instant",
    cooldown: 30,
    requirement: { level: 100, magicLevel: 0, mana: 290, premium: true },
    buff: "Skill +10, Defense -25%",
    description: "Increases your skills but reduces defense for 10 seconds.",
    notes: "Use for burst damage, careful with reduced defense",
  },

  // SORCERER SPELLS
  {
    id: "exevo-frigo-hur",
    name: "Great Energy Beam",
    words: "exevo frigo hur",
    vocation: ["Sorcerer", "Master Sorcerer"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 23, magicLevel: 4, mana: 30, premium: false },
    damage: { min: 50, max: 140, element: "energy", formula: "1.5 * level + 15 * magicLevel" },
    description: "Fires a beam of energy in a straight line.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exevo-gran-flam",
    name: "Great Fireball",
    words: "exevo gran flam",
    vocation: ["Sorcerer", "Master Sorcerer"],
    type: "Instant",
    cooldown: 12,
    requirement: { level: 30, magicLevel: 6, mana: 120, premium: false },
    damage: { min: 60, max: 250, element: "fire", formula: "3 * level + 20 * magicLevel" },
    description: "Creates an explosion of fire in a 5x5 area.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Most popular AOE spell for Sorcerers",
  },
  {
    id: "exevo-tera-hur",
    name: "Great Earthquake",
    words: "exevo tera hur",
    vocation: ["Sorcerer", "Master Sorcerer"],
    type: "Instant",
    cooldown: 12,
    requirement: { level: 55, magicLevel: 9, mana: 160, premium: true },
    damage: { min: 120, max: 400, element: "earth", formula: "4 * level + 30 * magicLevel" },
    description: "Creates a devastating earthquake in a 3x3 area.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Huge damage but small area",
  },
  {
    id: "exori-flam",
    name: "Fire Wave",
    words: "exori flam",
    vocation: ["Sorcerer", "Master Sorcerer"],
    type: "Instant",
    cooldown: 2,
    requirement: { level: 14, magicLevel: 2, mana: 25, premium: false },
    damage: { min: 25, max: 80, element: "fire", formula: "0.8 * level + 10 * magicLevel" },
    description: "Fires a wave of fire in a straight line.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exori-vis",
    name: "Energy Beam",
    words: "exori vis",
    vocation: ["Sorcerer", "Master Sorcerer"],
    type: "Instant",
    cooldown: 4,
    requirement: { level: 11, magicLevel: 1, mana: 20, premium: false },
    damage: { min: 18, max: 50, element: "energy", formula: "0.6 * level + 8 * magicLevel" },
    description: "Fires a concentrated beam of energy.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "utani-gran",
    name: "Haste",
    words: "utani gran",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 30,
    requirement: { level: 20, magicLevel: 0, mana: 60, premium: true },
    buff: "Speed +40%",
    description: "Grants you increased movement speed for 22 seconds.",
  },
  {
    id: "utani-tem",
    name: "Charge",
    words: "utani tem",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Instant",
    cooldown: 30,
    requirement: { level: 35, magicLevel: 0, mana: 50, premium: true },
    buff: "Speed +70% (single direction)",
    description: "Greatly increases your speed but only when moving in one direction.",
  },
  {
    id: "utevo-gran-vis-lux",
    name: "Great Light",
    words: "utevo gran vis lux",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 0,
    requirement: { level: 13, magicLevel: 0, mana: 60, premium: false },
    buff: "Light radius 10",
    description: "Illuminates a large area around you.",
  },

  // DRUID SPELLS
  {
    id: "exori-terram",
    name: "Groundshaker",
    words: "exori terram",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 14, magicLevel: 2, mana: 20, premium: false },
    damage: { min: 25, max: 80, element: "earth", formula: "0.8 * level + 10 * magicLevel" },
    description: "Shoots a concentrated beam of earth energy.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exori-frigo",
    name: "Ice Wave",
    words: "exori frigo",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 18, magicLevel: 2, mana: 20, premium: false },
    damage: { min: 30, max: 90, element: "ice", formula: "0.9 * level + 12 * magicLevel" },
    description: "Fires a wave of ice in a straight line.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exevo-tera-vis",
    name: "Stalagmite",
    words: "exevo tera vis",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 4,
    requirement: { level: 24, magicLevel: 4, mana: 30, premium: false },
    damage: { min: 45, max: 135, element: "earth", formula: "1.3 * level + 14 * magicLevel" },
    description: "Creates a stalagmite under your target.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exevo-mas-frigo",
    name: "Ice Strike",
    words: "exevo mas frigo",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 8,
    requirement: { level: 38, magicLevel: 6, mana: 60, premium: true },
    damage: { min: 80, max: 200, element: "ice", formula: "2.2 * level + 18 * magicLevel" },
    description: "Creates an explosion of ice in a 3x3 area.",
    pvp: "Damage reduced to 50% in PVP",
  },
  {
    id: "exori-mort",
    name: "Death Strike",
    words: "exori mort",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 3,
    requirement: { level: 45, magicLevel: 5, mana: 40, premium: true },
    damage: { min: 70, max: 180, element: "death", formula: "1.9 * level + 16 * magicLevel" },
    description: "Shoots a beam of death energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Excellent for undead and death-weak creatures",
  },
  {
    id: "utura-gran",
    name: "Salvation",
    words: "utura gran",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 60,
    requirement: { level: 60, magicLevel: 8, mana: 160, premium: true },
    healing: { min: 200, max: 400, formula: "5 * level + 25 * magicLevel" },
    description: "Heals you significantly over time.",
  },
  {
    id: "utura",
    name: "Wound Cleansing",
    words: "utura",
    vocation: ["Druid", "Master Druid"],
    type: "Instant",
    cooldown: 1,
    requirement: { level: 30, magicLevel: 5, mana: 50, premium: false },
    healing: { min: 50, max: 150, formula: "2 * level + 15 * magicLevel" },
    description: "Heals you moderately over time.",
    notes: "Main healing spell for Druids",
  },

  // PALADIN SPELLS
  {
    id: "exori-con",
    name: "Divine Missile",
    words: "exori con",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 2,
    requirement: { level: 16, magicLevel: 0, mana: 30, premium: false },
    damage: { min: 25, max: 70, element: "holy", formula: "0.7 * level + 8 * magicLevel" },
    description: "Shoots a missile of holy energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Main attack spell for Paladins",
  },
  {
    id: "exori-san",
    name: "Divine Caliber",
    words: "exori san",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 4,
    requirement: { level: 38, magicLevel: 0, mana: 60, premium: false },
    damage: { min: 60, max: 180, element: "holy", formula: "1.8 * level + 10 * magicLevel" },
    description: "Fires a powerful missile of holy energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Stronger version of Divine Missile",
  },
  {
    id: "exevo-con",
    name: "Divine Caldera",
    words: "exevo con",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 8,
    requirement: { level: 42, magicLevel: 0, mana: 120, premium: true },
    damage: { min: 70, max: 200, element: "holy", formula: "2 * level + 12 * magicLevel" },
    description: "Creates an explosion of holy energy in a 3x3 area.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "AOE version of Divine Caliber",
  },
  {
    id: "exori-holy",
    name: "Eternal Winter",
    words: "exori holy",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 8,
    requirement: { level: 70, magicLevel: 0, mana: 160, premium: true },
    damage: { min: 100, max: 280, element: "holy", formula: "2.5 * level + 15 * magicLevel" },
    description: "Fires a devastating missile of holy energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Strongest single-target spell for Paladins",
  },
  {
    id: "utana-vid",
    name: "Invisibility",
    words: "utana vid",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 60,
    requirement: { level: 35, magicLevel: 0, mana: 80, premium: true },
    buff: "Invisibility (20-200 seconds, varies)",
    description: "Makes you invisible for a random duration.",
    notes: "Duration is random, use carefully",
  },
  {
    id: "utamo-tempo",
    name: "Sharpshooter",
    words: "utamo tempo san",
    vocation: ["Paladin", "Royal Paladin"],
    type: "Instant",
    cooldown: 10,
    requirement: { level: 60, magicLevel: 0, mana: 200, premium: true },
    buff: "Distance +10, Defense -10",
    description: "Increases your distance skill but reduces defense for 10 seconds.",
    notes: "Excellent for burst damage",
  },

  // MONK SPELLS
  {
    id: "exori-kai",
    name: "Fist of Fury",
    words: "exori kai",
    vocation: ["Monk"],
    type: "Instant",
    cooldown: 3,
    requirement: { level: 20, magicLevel: 0, mana: 40, premium: false },
    damage: { min: 40, max: 100, element: "physical", formula: "1.2 * level + 12 * magicLevel" },
    description: "A powerful punch with magical energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Main attack spell for Monks",
  },
  {
    id: "exori-shen",
    name: "Iron Palm",
    words: "exori shen",
    vocation: ["Monk"],
    type: "Instant",
    cooldown: 6,
    requirement: { level: 40, magicLevel: 0, mana: 80, premium: false },
    damage: { min: 80, max: 200, element: "physical", formula: "2 * level + 18 * magicLevel" },
    description: "A devastating punch that can shatter armor.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Stronger version of Fist of Fury",
  },
  {
    id: "utana-kora",
    name: "Iron Skin",
    words: "utana kora",
    vocation: ["Monk"],
    type: "Instant",
    cooldown: 60,
    requirement: { level: 50, magicLevel: 0, mana: 150, premium: true },
    buff: "Defense +25, Armor +10",
    description: "Greatly increases your defense and armor for 30 seconds.",
    notes: "Essential for tanking bosses",
  },
  {
    id: "utito-vel",
    name: "Fury of the Dragon",
    words: "utito vel",
    vocation: ["Monk"],
    type: "Instant",
    cooldown: 45,
    requirement: { level: 80, magicLevel: 0, mana: 300, premium: true },
    buff: "Attack +20, Speed +50%",
    description: "Unleashes your inner dragon, greatly increasing attack and speed for 15 seconds.",
    notes: "Ultimate buff for burst damage",
  },

  // RUNES
  {
    id: "adori-flam",
    name: "Fireball Rune",
    words: "adori flam",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Rune",
    cooldown: 1,
    requirement: { level: 15, magicLevel: 3, mana: 15, soulPoints: 1, premium: false },
    damage: { min: 15, max: 45, element: "fire", formula: "0.4 * level + 8 * magicLevel" },
    description: "Creates a rune that shoots a fireball.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 1 rune, 10 charges",
  },
  {
    id: "adori-gran-flam",
    name: "Avalanche Rune",
    words: "adori gran flam",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Rune",
    cooldown: 2,
    requirement: { level: 28, magicLevel: 5, mana: 35, soulPoints: 2, premium: true },
    damage: { min: 40, max: 120, element: "ice", formula: "1 * level + 15 * magicLevel" },
    description: "Creates a rune that shoots an ice wave.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 2 rune, 5 charges",
  },
  {
    id: "adori-tera",
    name: "Stone Shower Rune",
    words: "adori tera",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Rune",
    cooldown: 2,
    requirement: { level: 28, magicLevel: 5, mana: 35, soulPoints: 2, premium: true },
    damage: { min: 40, max: 120, element: "earth", formula: "1 * level + 15 * magicLevel" },
    description: "Creates a rune that shoots a stone shower.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 2 rune, 5 charges",
  },
  {
    id: "adori-vis",
    name: "Energy Bomb Rune",
    words: "adori vis",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Rune",
    cooldown: 2,
    requirement: { level: 35, magicLevel: 6, mana: 45, soulPoints: 3, premium: true },
    damage: { min: 60, max: 180, element: "energy", formula: "1.5 * level + 20 * magicLevel" },
    description: "Creates a rune that explodes with energy.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 2 rune, 3 charges",
  },
  {
    id: "adori-mas-flam",
    name: "Great Fireball Rune",
    words: "adori mas flam",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid"],
    type: "Rune",
    cooldown: 3,
    requirement: { level: 30, magicLevel: 5, mana: 30, soulPoints: 2, premium: true },
    damage: { min: 50, max: 150, element: "fire", formula: "1.2 * level + 16 * magicLevel" },
    description: "Creates a rune that shoots a great fireball.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 2 rune, 4 charges",
  },
  {
    id: "adori-mort",
    name: "Sudden Death Rune",
    words: "adori mort",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Rune",
    cooldown: 3,
    requirement: { level: 45, magicLevel: 8, mana: 60, soulPoints: 3, premium: true },
    damage: { min: 100, max: 300, element: "death", formula: "2.5 * level + 25 * magicLevel" },
    description: "Creates a rune that shoots a death bolt.",
    pvp: "Damage reduced to 50% in PVP",
    notes: "Level 3 rune, 3 charges. Most powerful rune",
  },
  {
    id: "adura-vita",
    name: "Cure Poison Rune",
    words: "adura vita",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Rune",
    cooldown: 1,
    requirement: { level: 15, magicLevel: 2, mana: 10, soulPoints: 1, premium: false },
    description: "Creates a rune that cures poison.",
    notes: "Level 1 rune, 1 charge",
  },
  {
    id: "adura-gran",
    name: "Ultimate Healing Rune",
    words: "adura gran",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Rune",
    cooldown: 2,
    requirement: { level: 24, magicLevel: 5, mana: 40, soulPoints: 2, premium: true },
    healing: { min: 150, max: 350, formula: "4 * level + 30 * magicLevel" },
    description: "Creates a rune that heals significantly.",
    notes: "Level 1 rune, 1 charge",
  },
  {
    id: "adura-sio",
    name: "Intense Healing Rune",
    words: "adura sio",
    vocation: ["Sorcerer", "Master Sorcerer", "Druid", "Master Druid", "Paladin", "Royal Paladin"],
    type: "Rune",
    cooldown: 1,
    requirement: { level: 16, magicLevel: 3, mana: 20, soulPoints: 1, premium: false },
    healing: { min: 50, max: 120, formula: "1.5 * level + 18 * magicLevel" },
    description: "Creates a rune that heals moderately.",
    notes: "Level 1 rune, 1 charge",
  },
];

// Helper functions
export const getSpellById = (id: string) => {
  return spells.find(s => s.id === id);
};

export const getSpellsByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  return spells.filter(s =>
    s.vocation.some(v => v.toLowerCase().includes(vocationLower))
  );
};

export const getSpellsByType = (type: "Instant" | "Rune") => {
  return spells.filter(s => s.type === type);
};

export const getSpellsByLevel = (level: number) => {
  return spells.filter(s => s.requirement.level <= level);
};

export const getSpellsByMagicLevel = (magicLevel: number) => {
  return spells.filter(s => s.requirement.magicLevel <= magicLevel);
};

export const getDamageSpells = () => {
  return spells.filter(s => s.damage !== undefined);
};

export const getHealingSpells = () => {
  return spells.filter(s => s.healing !== undefined);
};

export const getBuffSpells = () => {
  return spells.filter(s => s.buff !== undefined);
};

export const getPremiumSpells = () => {
  return spells.filter(s => s.requirement.premium);
};

export const getFreeSpells = () => {
  return spells.filter(s => !s.requirement.premium);
};

export const getBestDamageSpellsForVocation = (vocation: string, limit?: number) => {
  const vocSpells = getSpellsByVocation(vocation).filter(s => s.damage !== undefined);
  const sorted = [...vocSpells].sort((a, b) => {
    const aAvg = (a.damage!.min + a.damage!.max) / 2;
    const bAvg = (b.damage!.min + b.damage!.max) / 2;
    return bAvg - aAvg;
  });
  return limit ? sorted.slice(0, limit) : sorted;
};

export const totalSpells = spells.length;
export const instantSpells = spells.filter(s => s.type === "Instant").length;
export const runeSpells = spells.filter(s => s.type === "Rune").length;
export const premiumSpells = spells.filter(s => s.requirement.premium).length;
