// Wheel of Destiny - Todas as Classes
// Knight Club, Sorcerer, Druid, Paladin

export interface WheelPreset {
  slug: string;
  name: string;
  description: string;
  playstyle: "damage" | "tank" | "boss" | "pve" | "pvp";
  recommendedLevel: string;
  totalPoints: number;
  vocation: "knight" | "sorcerer" | "druid" | "paladin";
  branches: {
    domain: number[];
    mastery: number[];
  };
  keyPerks: string[];
  spells: string[];
  statsBonus: {
    hp: number;
    mana: number;
    magicLevel: number;
    distance: number;
    shielding: number;
  };
}

// === KNIGHT CLUB ===
export const knightPresetsData: Record<string, WheelPreset> = {
  "knight-damage": {
    slug: "knight-damage",
    name: "Dano Máximo",
    description: "Foco total em dano físico e habilidades ofensivas. Ideal para farm de XP rápido.",
    playstyle: "damage",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "knight",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Nimble Fighter",
      "Ballistic Mastery",
      "Deadly Precision",
      "Executioner's Style",
      "Heavy Handed Fighter",
      "Ferocious Combat",
      "Berserk Specialist",
      "Ultimate Strike",
      "Blood Rage"
    ],
    spells: [
      "Whirlwind Throw",
      "Groundshaker",
      "Charged Whipper",
      "Eternal Winter",
      "Brutal Swipe"
    ],
    statsBonus: {
      hp: 500,
      mana: 200,
      magicLevel: 0,
      distance: 0,
      shielding: 0
    }
  },
  "knight-tank": {
    slug: "knight-tank",
    name: "Tank Defensivo",
    description: "Maximizar HP e defesa para tankar mobs e bosses. Prioriza sobrevivência.",
    playstyle: "tank",
    recommendedLevel: "200+",
    totalPoints: 575,
    vocation: "knight",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Vitality",
      "Hardened Body",
      "Fortitude",
      "Spirit Resilience",
      "Blessed Shield",
      "Shield Mastery",
      "Expert Shielding",
      "Divine Fortitude",
      "Eternal Guard",
      "Last Stand"
    ],
    spells: [
      "Frontal Sweeping",
      "Frontal Wave",
      "Chivalrous Challenge",
      "Hate Spike",
      "Revenge"
    ],
    statsBonus: {
      hp: 3000,
      mana: 0,
      magicLevel: 0,
      distance: 0,
      shielding: 300
    }
  },
  "knight-boss": {
    slug: "knight-boss",
    name: "Boss Hunter",
    description: "Equilibrado para farmar bosses. Bom dano, defesa razoável e spells úteis.",
    playstyle: "boss",
    recommendedLevel: "400+",
    totalPoints: 575,
    vocation: "knight",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Vitality",
      "Nimble Fighter",
      "Hardened Body",
      "Deadly Precision",
      "Shield Mastery",
      "Divine Fortitude",
      "Fierce Berserker",
      "Expert Shielding",
      "Ultimate Strike",
      "Eternal Guard"
    ],
    spells: [
      "Whirlwind Throw",
      "Frontal Sweeping",
      "Chivalrous Challenge",
      "Hate Spike",
      "Revenge"
    ],
    statsBonus: {
      hp: 1500,
      mana: 100,
      magicLevel: 0,
      distance: 0,
      shielding: 100
    }
  }
};

// === SORCER (Energy Magic) ===
export const sorcererPresetsData: Record<string, WheelPreset> = {
  "sorcerer-burst": {
    slug: "sorcerer-burst",
    name: "Burst Damage",
    description: "Foco em dano mágico explosivo. Exori Vis + chain attacks.",
    playstyle: "damage",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "sorcerer",
    branches: {
      domain: [2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Elemental Mastery",
      "Strong Magic",
      "Magical Shielding",
      "Nimble Mage",
      "Deadly Precision",
      "Elemental Expert",
      "Strong Magic",
      "Heavy Magic",
      "Ultimate Strike"
    ],
    spells: [
      "Strong Energy Strike",
      "Energy Wave",
      "Strong Energy Beam",
      "Great Energy Beam",
      "Energy Bomb"
    ],
    statsBonus: {
      hp: 500,
      mana: 1500,
      magicLevel: 12,
      distance: 0,
      shielding: 0
    }
  },
  "sorcerer-sustain": {
    slug: "sorcerer-sustain",
    name: "Sustain & Mana",
    description: "Maximizar regeneração de mana e sustentação em hunts longas.",
    playstyle: "pve",
    recommendedLevel: "300+",
    totalPoints: 575,
    vocation: "sorcerer",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Focus Mastery",
      "Elemental Mastery",
      "Mana Regeneration",
      "Magic Capacity",
      "Strong Magic",
      "Magical Shielding",
      "Nimble Mage",
      "Spirit Resilience",
      "Energy Expert"
    ],
    spells: [
      "Strong Energy Strike",
      "Energy Wave",
      "Great Energy Beam",
      "Wand of Inferno"
    ],
    statsBonus: {
      hp: 1000,
      mana: 2500,
      magicLevel: 8,
      distance: 0,
      shielding: 0
    }
  },
  "sorcerer-boss": {
    slug: "sorcerer-boss",
    name: "Boss Hunter",
    description: "Equilibrado para matar bosses. Dano mágico alto + some defense.",
    playstyle: "boss",
    recommendedLevel: "400+",
    totalPoints: 575,
    vocation: "sorcerer",
    branches: {
      domain: [1, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Elemental Mastery",
      "Magical Shielding",
      "Deadly Precision",
      "Elemental Expert",
      "Strong Magic",
      "Heavy Magic",
      "Ultimate Strike"
    ],
    spells: [
      "Strong Energy Strike",
      "Great Energy Beam",
      "Energy Bomb",
      "Wand of Inferno"
    ],
    statsBonus: {
      hp: 1500,
      mana: 2000,
      magicLevel: 10,
      distance: 0,
      shielding: 100
    }
  },
  "sorcerer-pvp": {
    slug: "sorcerer-pvp",
    name: "PVP Mage",
    description: "Foco em PVP. Burst damage com mana shield.",
    playstyle: "pvp",
    recommendedLevel: "600+",
    totalPoints: 575,
    vocation: "sorcerer",
    branches: {
      domain: [3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Elemental Mastery",
      "Nimble Mage",
      "Deadly Precision",
      "Elemental Expert",
      "Strong Magic",
      "Heavy Magic",
      "Ultimate Strike"
    ],
    spells: [
      "Strong Energy Strike",
      "Energy Beam",
      "Energy Bomb",
      "Wand of Inferno"
    ],
    statsBonus: {
      hp: 500,
      mana: 2000,
      magicLevel: 12,
      distance: 0,
      shielding: 0
    }
  }
};

// === DRUID (Nature Magic) ===
export const druidPresetsData: Record<string, WheelPreset> = {
  "druid-healer": {
    slug: "druid-healer",
    name: "Support Healer",
    description: "Foco em healing e suporte. Perfect para parties e hunts.",
    playstyle: "pve",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "druid",
    branches: {
      domain: [2, 3],
      mastery: [4, 5]
    },
    keyPerks: [
      "Focus Mastery",
      "Spirit Resilience",
      "Blessed Shield",
      "Nature's Embrace",
      "Animal Kinship",
      "Elemental Mastery",
      "Strong Magic",
      "Healing Expert"
    ],
    spells: [
      "Heal Friend",
      "Heal Party",
      "Mass Healing",
      "Nature's Embrace",
      "Wand of Dragonbreath"
    ],
    statsBonus: {
      hp: 1500,
      mana: 2500,
      magicLevel: 12,
      distance: 0,
      shielding: 50
    }
  },
  "druid-summoner": {
    slug: "druid-summoner",
    name: "Summon Master",
    description: "Foco em summons. Powerful summons para farm e bosses.",
    playstyle: "damage",
    recommendedLevel: "300+",
    totalPoints: 575,
    vocation: "druid",
    branches: {
      domain: [2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Focus Mastery",
      "Animal Kinship",
      "Pack Leadership",
      "Primal Instinct",
      "Elemental Mastery",
      "Nature Magic",
      "Strong Magic",
      "Heavy Magic"
    ],
    spells: [
      "Horn of Fenris",
      "Fierce Berserk",
      "Eternal Thorns",
      "Charm of Feathered Snake"
    ],
    statsBonus: {
      hp: 2000,
      mana: 3000,
      magicLevel: 12,
      distance: 0,
      shielding: 0
    }
  },
  "druid-tank": {
    slug: "druid-tank",
    name: "Defensive Druid",
    description: "Tank druid com Physical + Magic defense. Suport e tank.",
    playstyle: "tank",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "druid",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Vitality",
      "Hardened Body",
      "Spirit Resilience",
      "Blessed Shield",
      "Nature's Embrace",
      "Elemental Mastery",
      "Strong Magic",
      "Healing Expert"
    ],
    spells: [
      "Heal Friend",
      "Eternal Thorns",
      "Wand of Dragonbreath",
      "Terra Wave"
    ],
    statsBonus: {
      hp: 2500,
      mana: 2000,
      magicLevel: 8,
      distance: 0,
      shielding: 150
    }
  },
  "druid-pve": {
    slug: "druid-pve",
    name: "PVE Druid",
    description: "Equilibrado para XP farm. Good summons + moderate defense.",
    playstyle: "pve",
    recommendedLevel: "300+",
    totalPoints: 575,
    vocation: "druid",
    branches: {
      domain: [2, 3],
      mastery: [4, 6]
    },
    keyPerks: [
      "Focus Mastery",
      "Animal Kinship",
      "Elemental Mastery",
      "Nature Magic",
      "Strong Magic",
      "Healing Expert"
    ],
    spells: [
      "Horn of Fenris",
      "Eternal Thorns",
      "Nature's Embrace",
      "Terra Wave"
    ],
    statsBonus: {
      hp: 2000,
      mana: 2500,
      magicLevel: 10,
      distance: 0,
      shielding: 50
    }
  }
};

// === PALADIN (Hybrid: Weapon + Magic) ===
export const paladinPresetsData: Record<string, WheelPreset> = {
  "paladin-melee": {
    slug: "paladin-melee",
    name: "Melee Paladin",
    description: "Foco em melee weapons + Exori. Dano físico + spells de suporte.",
    playstyle: "damage",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "paladin",
    branches: {
      domain: [2],
      mastery: [4, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Ballistic Mastery",
      "Vitality",
      "Shield Mastery",
      "Divine Fortitude",
      "Fierce Berserker",
      "Executioner's Style",
      "Ultimate Strike"
    ],
    spells: [
      "Exori",
      "Exori Gran",
      "Exori Min",
      "Inflict Wound",
      "Eternal Winter"
    ],
    statsBonus: {
      hp: 1500,
      mana: 1000,
      magicLevel: 4,
      distance: 500,
      shielding: 100
    }
  },
  "paladin-holy": {
    slug: "paladin-holy",
    name: "Holy Paladin",
    description: "Foco em holy damage + healing. Exori San + spells de cura.",
    playstyle: "pve",
    recommendedLevel: "250+",
    totalPoints: 575,
    vocation: "paladin",
    branches: {
      domain: [2, 3],
      mastery: [4, 5]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Spirit Resilience",
      "Divine Fortitude",
      "Blessed Shield",
      "Shield Mastery",
      "Magical Shielding",
      "Healing Expert"
    ],
    spells: [
      "Exori San",
      "Sanctuary",
      "Recovery",
      "Heal Friend",
      "Wand of Dragonbreath"
    ],
    statsBonus: {
      hp: 2000,
      mana: 2000,
      magicLevel: 12,
      distance: 500,
      shielding: 50
    }
  },
  "paladin-boss": {
    slug: "paladin-boss",
    name: "Boss Hunter Paladin",
    description: "Equilibrado para bosses. Holy damage + defense + healing.",
    playstyle: "boss",
    recommendedLevel: "400+",
    totalPoints: 575,
    vocation: "paladin",
    branches: {
      domain: [1, 2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Vitality",
      "Focus Mastery",
      "Ballistic Mastery",
      "Shield Mastery",
      "Divine Fortitude",
      "Magical Shielding",
      "Strong Magic",
      "Healing Expert"
    ],
    spells: [
      "Exori",
      "Exori San",
      "Inflict Wound",
      "Recovery",
      "Strong Strike"
    ],
    statsBonus: {
      hp: 1500,
      mana: 1500,
      magicLevel: 8,
      distance: 500,
      shielding: 100
    }
  },
  "paladin-tank": {
    slug: "paladin-tank",
    name: "Tank Paladin",
    description: "Full tank com shield e healing. Perfect para tankar bosses.",
    playstyle: "tank",
    recommendedLevel: "300+",
    totalPoints: 575,
    vocation: "paladin",
    branches: {
      domain: [1, 2, 3],
      mastery: [5, 6]
    },
    keyPerks: [
      "Vitality",
      "Hardened Body",
      "Spirit Resilience",
      "Divine Fortitude",
      "Blessed Shield",
      "Shield Mastery",
      "Expert Shielding",
      "Magical Shielding",
      "Divine Fortitude"
    ],
    spells: [
      "Exori San",
      "Sanctuary",
      "Recovery",
      "Heal Friend",
      "Strong Strike"
    ],
    statsBonus: {
      hp: 2500,
      mana: 2000,
      magicLevel: 6,
      distance: 200,
      shielding: 300
    }
  },
  "paladin-pvp": {
    slug: "paladin-pvp",
    name: "PVP Paladin",
    description: "Foco em PVP. Holy damage + shield + burst.",
    playstyle: "pvp",
    recommendedLevel: "600+",
    totalPoints: 575,
    vocation: "paladin",
    branches: {
      domain: [2, 3],
      mastery: [4, 5, 6]
    },
    keyPerks: [
      "Expert Combat Training",
      "Focus Mastery",
      "Ballistic Mastery",
      "Deadly Precision",
      "Executioner's Style",
      "Shield Mastery",
      "Magical Shielding",
      "Strong Magic",
      "Heavy Magic"
    ],
    spells: [
      "Exori",
      "Exori Gran",
      "Strong Strike",
      "Eternal Winter",
      "Wand of Dragonbreath"
    ],
    statsBonus: {
      hp: 1000,
      mana: 1500,
      magicLevel: 12,
      distance: 500,
      shielding: 150
    }
  }
};

// Helper functions
export function getPresetBySlug(slug: string): WheelPreset | undefined {
  return knightPresetsData[slug] || sorcererPresetsData[slug] || druidPresetsData[slug] || paladinPresetsData[slug];
}

export function getPresetsByVocation(vocation: WheelPreset["vocation"]): WheelPreset[] {
  switch (vocation) {
    case "knight": return Object.values(knightPresetsData);
    case "sorcerer": return Object.values(sorcererPresetsData);
    case "druid": return Object.values(druidPresetsData);
    case "paladin": return Object.values(paladinPresetsData);
    default: return [];
  }
}

export function getAllPresets(): WheelPreset[] {
  return [
    ...Object.values(knightPresetsData),
    ...Object.values(sorcererPresetsData),
    ...Object.values(druidPresetsData),
    ...Object.values(paladinPresetsData)
  ];
}

// Vocation icons
export const vocationIcons = {
  knight: "⚔️",
  sorcerer: "🔮",
  druid: "🍃",
  paladin: "✝️"
};
