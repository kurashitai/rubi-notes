// Bosses Extras - Mais bosses do Tibia/Rubinot
// Fonte: TibiaWiki, TibiaFandom, Wiki Rubinot

interface BossLoot {
  item: string;
  chance: string;
  value: number;
  isRare?: boolean;
}

interface ExtraBoss {
  id: string;
  name: string;
  displayName: string;
  hp: number;
  exp: number;
  tier: "S" | "A" | "B" | "C";
  category: string;
  cooldown: string;
  cooldownHours: number;
  location: string;
  coordinates?: string;
  recommendedLevel: number;
  maxPlayers: number;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Muito Difícil" | "Extremo";
  weaknesses: Record<string, number>;
  immunities: string[];
  mechanics: string[];
  tips: string[];
  loot: BossLoot[];
}

export const extraBosses: ExtraBoss[] = [
  {
    id: "infernatil",
    name: "Infernatil",
    displayName: "Infernatil",
    hp: 45000,
    exp: 150000,
    tier: "A",
    category: "Raid Boss",
    cooldown: "7 dias",
    cooldownHours: 168,
    location: "Ferumbras' Citadel",
    coordinates: "x:320, y:328, z:13",
    recommendedLevel: 300,
    maxPlayers: 8,
    difficulty: "Difícil",
    weaknesses: { ice: 110, earth: 100, energy: 90 },
    immunities: ["fire", "energy", "paralyze"],
    mechanics: [
      "Fire Storm - Area damage com fire",
      "Summon Demons - Spawn 2-3 Demons",
      "Inferno Wave - Fire wave em linha",
      "Hellfire - Dano continuo ao redor"
    ],
    tips: [
      "Use Ice attacks - Infernatil é fraco a ice",
      "Knight: Use Magic Shield e charge constantemente",
      "Knight: Challenge para manter atenção",
      "Druid/Sorcerer: Cast Great Ice Beam",
      "Paladin: Use Ethereal Spear",
      "Matar summons primeiro para não ficar cercado",
      "Usar Magic Wall para bloquear Hellfire"
    ],
    loot: [
      { item: "Infernal Blade", chance: "rare", value: 150000, isRare: true },
      { item: "Infernal Shield", chance: "rare", value: 120000, isRare: true },
      { item: "Infernal Trophy", chance: "very rare", value: 300000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 20000 },
      { item: "Platinum Coin", chance: "rare", value: 35000 },
    ]
  },
  {
    id: "gaz'haragoth",
    name: "Gaz'haragoth",
    displayName: "Gaz'haragoth",
    hp: 85000,
    exp: 350000,
    tier: "S",
    category: "Raid Boss",
    cooldown: "7 dias",
    cooldownHours: 168,
    location: "Gaz'haragoth's Lair",
    coordinates: "x:420, y:500, z:8",
    recommendedLevel: 500,
    maxPlayers: 10,
    difficulty: "Muito Difícil",
    weaknesses: { earth: 110, energy: 100, ice: 90 },
    immunities: ["energy", "earth", "paralyze", "drain", "invisible"],
    mechanics: [
      "Earthquake - Dano massivo em área",
      "Life Drain - Drena vida dos players",
      "Summon Gaz'haragoth Slaves - 4-6 summons",
      "Gaze of Destruction - One-shot se não estiver shielded"
    ],
    tips: [
      "Use Earth ou Energy attacks",
      "Knight: Precisa de Magic Shield constante",
      "Knight: Use Exori Gran e charge",
      "Druid/Sorcerer: Cast Great Earth Beam",
      "Paladin: Use Divine Caliber Rune",
      "CRÍTICO: Desviar do Gaze of Destruction (correr diagonal)",
      "Usar Magic Walls para bloquear summons",
      "Ter Ultimate Healing Runes prontos"
    ],
    loot: [
      { item: "Gaz'haragoth Armor", chance: "very rare", value: 500000, isRare: true },
      { item: "Gaz'haragoth Shield", chance: "very rare", value: 400000, isRare: true },
      { item: "Gaz'haragoth Sword", chance: "rare", value: 350000, isRare: true },
      { item: "Gaz'haragoth Trophy", chance: "very rare", value: 600000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 50000 },
      { item: "Platinum Coin", chance: "rare", value: 60000 },
    ]
  },
  {
    id: "shardhead",
    name: "Shardhead",
    displayName: "Shardhead",
    hp: 25000,
    exp: 80000,
    tier: "B",
    category: "Quest Boss",
    cooldown: "20 horas",
    cooldownHours: 20,
    location: "The Hidden Tomb",
    coordinates: "x:550, y:600, z:10",
    recommendedLevel: 200,
    maxPlayers: 4,
    difficulty: "Médio",
    weaknesses: { fire: 110, energy: 100, ice: 90 },
    immunities: ["ice", "paralyze"],
    mechanics: [
      "Shard Storm - Projéteis de gelo",
      "Frozen Ground - Chão congelado (slow)",
      "Ice Wave - Wave de gelo",
      "Summon Frost Golems - 2-3 summons"
    ],
    tips: [
      "Use Fire attacks - Shardhead é fraco a fire",
      "Knight: Use Exori Hur com fire-enchanted weapon",
      "Druid/Sorcerer: Cast Great Fireball",
      "Paladin: Use Divine Missile",
      "Matar summons primeiro",
      "Evitar Frozen Ground (move constantemente)"
    ],
    loot: [
      { item: "Frozen Helmet", chance: "rare", value: 80000, isRare: true },
      { item: "Ice Rapier", chance: "rare", value: 70000, isRare: true },
      { item: "Shardhead Trophy", chance: "rare", value: 150000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 8000 },
      { item: "Platinum Coin", chance: "rare", value: 12000 },
    ]
  },
  {
    id: "morgaroth",
    name: "Morgaroth",
    displayName: "Morgaroth",
    hp: 120000,
    exp: 500000,
    tier: "S",
    category: "World Boss",
    cooldown: "24 horas",
    cooldownHours: 24,
    location: "Morgaroth's Lair",
    coordinates: "x:600, y:700, z:12",
    recommendedLevel: 600,
    maxPlayers: 12,
    difficulty: "Extremo",
    weaknesses: { holy: 120, ice: 100, earth: 80 },
    immunities: ["fire", "energy", "death", "paralyze", "drain", "invisible"],
    mechanics: [
      "Inferno Wave - Fire wave massiva",
      "Hellfire - Dano continuo ao redor",
      "Death Coil - Insta-kill se não tiver life leech protection",
      "Summon Demon Lords - 4-5 summons muito fortes",
      "Soul Drain - Drena mana e vida"
    ],
    tips: [
      "Use Holy attacks - Morgaroth é extremamente fraco a holy",
      "Knight: Precisa de Magic Shield PERMANENTE",
      "Knight: Use Exori Gran com holy-enchanted weapon",
      "Druid/Sorcerer: Cast Holy Missile e Hailstorm",
      "Paladin: Use Divine Missile e Exori Con",
      "CRÍTICO: Desviar de Death Coil (correr imediatamente)",
      "Matar summons assim que aparecerem",
      "Usar Magic Walls estrategicamente",
      "Ter muitos Ultimate Healing Runes",
      "Precisa de pelo menos 3 Knights tankando"
    ],
    loot: [
      { item: "Morgaroth's Helmet", chance: "very rare", value: 1000000, isRare: true },
      { item: "Morgaroth's Shield", chance: "very rare", value: 800000, isRare: true },
      { item: "Morgaroth's Sword", chance: "very rare", value: 900000, isRare: true },
      { item: "Morgaroth Trophy", chance: "very rare", value: 1200000, isRare: true },
      { item: "Golden Amulet", chance: "rare", value: 100000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 100000 },
      { item: "Platinum Coin", chance: "rare", value: 150000 },
    ]
  },
  {
    id: "the-abomination",
    name: "The Abomination",
    displayName: "The Abomination",
    hp: 18000,
    exp: 45000,
    tier: "B",
    category: "Quest Boss",
    cooldown: "12 horas",
    cooldownHours: 12,
    location: "The Abomination's Lair",
    coordinates: "x:480, y:520, z:9",
    recommendedLevel: 150,
    maxPlayers: 4,
    difficulty: "Médio",
    weaknesses: { fire: 100, earth: 100, energy: 100, ice: 100 },
    immunities: ["death", "paralyze", "drain"],
    mechanics: [
      "Vomit - Poison damage em cone",
      "Summon Abominations - 2-3 summons",
      "Rage - Aumenta dano quando HP < 50%"
    ],
    tips: [
      "Use qualquer element damage",
      "Knight: Use Exori Gran",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Divine Missile",
      "Matar summons primeiro",
      "Cuidado com Rage - usar mais healing quando HP < 50%"
    ],
    loot: [
      { item: "Abomination Shield", chance: "rare", value: 60000, isRare: true },
      { item: "Abomination Trophy", chance: "rare", value: 80000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 5000 },
      { item: "Platinum Coin", chance: "rare", value: 8000 },
    ]
  },
  {
    id: "ferumbras",
    name: "Ferumbras",
    displayName: "Ferumbras",
    hp: 150000,
    exp: 700000,
    tier: "S",
    category: "Raid Boss",
    cooldown: "7 dias",
    cooldownHours: 168,
    location: "Ferumbras' Castle",
    coordinates: "x:325, y:330, z:13",
    recommendedLevel: 800,
    maxPlayers: 20,
    difficulty: "Extremo",
    weaknesses: { holy: 130, energy: 100, ice: 80 },
    immunities: ["fire", "energy", "death", "paralyze", "drain", "invisible", "life drain"],
    mechanics: [
      "Ultimate Explosion - One-shot radius",
      "Death Strike - Insta-kill sem shield",
      "Summon Ferumbras' Minions - 8-10 summons",
      "Mana Drain - Drena 100% mana instantaneamente",
      "Curse - Reduz todos os stats em 50%",
      "Ferumbras' Curse - DOT de 10.000 damage por segundo"
    ],
    tips: [
      "Use Holy attacks - Ferumbras é extremamente fraco a holy",
      "Knight: PRECISA de Magic Shield PERMANENTE",
      "Knight: Use Exori Gran com holy-enchanted weapon",
      "Druid/Sorcerer: Cast Holy Missile e Hailstorm",
      "Paladin: Use Divine Missile e Exori Con",
      "CRÍTICO: Desviar de Ultimate Explosion (correr imediatamente)",
      "CRÍTICO: Usar Shield quando Death Strike vem",
      "Matar summons é IMPRESCINDÍVEL",
      "Usar Magic Walls estrategicamente",
      "Precisa de MINIMO 5 Knights tankando",
      "Ter MILHARES de Ultimate Healing Runes",
      "Team: Minimo 15 players experientes"
    ],
    loot: [
      { item: "Ferumbras' Hat", chance: "very rare", value: 3000000, isRare: true },
      { item: "Ferumbras' Shield", chance: "very rare", value: 2500000, isRare: true },
      { item: "Ferumbras' Sword", chance: "very rare", value: 2000000, isRare: true },
      { item: "Ferumbras Trophy", chance: "very rare", value: 5000000, isRare: true },
      { item: "Golden Amulet", chance: "rare", value: 200000, isRare: true },
      { item: "Gold Coin", chance: "common", value: 300000 },
      { item: "Platinum Coin", chance: "rare", value: 500000 },
    ]
  },
];

// Helper functions
export const getExtraBossById = (id: string) => {
  return extraBosses.find(b => b.id === id);
};

export const getExtraBossesByTier = (tier: "S" | "A" | "B" | "C") => {
  return extraBosses.filter(b => b.tier === tier);
};

export const getExtraBossesByCategory = (category: string) => {
  return extraBosses.filter(b => b.category === category);
};

export const getExtraBossesByLevel = (minLevel: number, maxLevel?: number) => {
  return extraBosses.filter(b => b.recommendedLevel >= minLevel && (maxLevel ? b.recommendedLevel <= maxLevel : true));
};

export const getExtraBossesByDifficulty = (difficulty: string) => {
  return extraBosses.filter(b => b.difficulty === difficulty);
};

export const totalExtraBosses = extraBosses.length;
