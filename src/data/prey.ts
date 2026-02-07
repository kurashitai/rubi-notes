// Prey System Data - Rubi-Notes
// Based on Tibia official Prey System

export interface PreyBonus {
  type: "damage" | "defense" | "experience" | "loot";
  minValue: number;
  maxValue: number;
  step: number;
  description: string;
}

export interface PreyCreature {
  id: string;
  name: string;
  level: number; // Minimum level to get this creature in prey
  difficulty: "Easy" | "Medium" | "Hard";
  location: string;
  bestBonus: "damage" | "defense" | "experience" | "loot";
  reason: string; // Why this bonus is best
  huntingTips?: string;
}

export interface HuntingTaskReward {
  name: string;
  cost: number; // HTP cost
  icon: string;
  category: "trophy" | "furniture" | "outfit" | "mount" | "pet" | "doll";
}

// Prey Bonuses available
export const preyBonuses: PreyBonus[] = [
  {
    type: "damage",
    minValue: 7,
    maxValue: 25,
    step: 2,
    description: "Aumenta o dano que você causa à criatura selecionada"
  },
  {
    type: "defense",
    minValue: 12,
    maxValue: 30,
    step: 2,
    description: "Reduz o dano que a criatura causa a você"
  },
  {
    type: "experience",
    minValue: 13,
    maxValue: 40,
    step: 3,
    description: "Aumenta a experiência ganha ao matar a criatura"
  },
  {
    type: "loot",
    minValue: 13,
    maxValue: 40,
    step: 3,
    description: "Chance de gerar loot adicional (como se tivesse matado 2 criaturas)"
  }
];

// Recommended creatures for prey by level range
export const preyCreatures: PreyCreature[] = [
  // Low Level (50-100)
  {
    id: "amazon",
    name: "Amazon",
    level: 50,
    difficulty: "Easy",
    location: "Amazon Camp (Venore)",
    bestBonus: "loot",
    reason: "Protective Charm é valioso para Critical Hit Imbuement",
    huntingTips: "Excelente para farmear materiais de imbue"
  },
  {
    id: "dragon",
    name: "Dragon",
    level: 60,
    difficulty: "Easy",
    location: "Darashia, Thais, Port Hope",
    bestBonus: "experience",
    reason: "Bom XP para level, fácil de matar em grupo",
    huntingTips: "Use Fire Protection para reduzir dano"
  },
  {
    id: "dragon-lord",
    name: "Dragon Lord",
    level: 80,
    difficulty: "Medium",
    location: "Darashia Dragons, Goroma",
    bestBonus: "loot",
    reason: "Dragon Scale Legs e Red Dragon Leather são valiosos",
    huntingTips: "Cuidado com o Great Fireball"
  },
  {
    id: "giant-spider",
    name: "Giant Spider",
    level: 50,
    difficulty: "Easy",
    location: "Port Hope, Plains of Havoc",
    bestBonus: "experience",
    reason: "Muito XP para o level, respawn rápido",
    huntingTips: "Use Earth Protection ou Strong Health Potions"
  },
  
  // Mid Level (100-200)
  {
    id: "wyrm",
    name: "Wyrm",
    level: 100,
    difficulty: "Medium",
    location: "Drefia, Liberty Bay",
    bestBonus: "loot",
    reason: "Wyrm Scale para Energy Protection Imbuement",
    huntingTips: "Excelente balance entre XP e loot"
  },
  {
    id: "hydra",
    name: "Hydra",
    level: 100,
    difficulty: "Medium",
    location: "Forbidden Lands, Oramond",
    bestBonus: "loot",
    reason: "Hydra Egg é muito valioso no market",
    huntingTips: "Use Ice damage, evite Earth"
  },
  {
    id: "medusa",
    name: "Medusa",
    level: 120,
    difficulty: "Medium",
    location: "Deeper Banuta, Talahu",
    bestBonus: "loot",
    reason: "Strand of Medusa Hair para Earth Protection",
    huntingTips: "Use Ice/Energy damage"
  },
  {
    id: "silencer",
    name: "Silencer",
    level: 100,
    difficulty: "Medium",
    location: "Roshamuul",
    bestBonus: "loot",
    reason: "Silencer Claws para Mana Leech Imbuement (muito valioso)",
    huntingTips: "Cuidado com o silence effect"
  },
  {
    id: "ghastly-dragon",
    name: "Ghastly Dragon",
    level: 130,
    difficulty: "Medium",
    location: "Zao, Ghastly Dragon Lair",
    bestBonus: "loot",
    reason: "Mystical Hourglass para Death Protection",
    huntingTips: "Use Holy damage, Death Protection"
  },
  
  // High Level (200-400)
  {
    id: "weretiger",
    name: "Weretiger",
    level: 200,
    difficulty: "Hard",
    location: "Werecave (Edron, Cormaya)",
    bestBonus: "experience",
    reason: "Melhor XP/hora no game para Knights, respawn infinito",
    huntingTips: "Use Ice damage, Fire Protection"
  },
  {
    id: "werehyaena",
    name: "Werehyaena",
    level: 180,
    difficulty: "Hard",
    location: "Werecave (Grimvale)",
    bestBonus: "experience",
    reason: "Alternativa aos Weretigers, bom XP",
    huntingTips: "Use Ice damage"
  },
  {
    id: "demon",
    name: "Demon",
    level: 200,
    difficulty: "Hard",
    location: "Demon Forge, Goroma",
    bestBonus: "loot",
    reason: "Demon Horn e Fire Sword são muito valiosos",
    huntingTips: "Use Energy damage, Holy Protection"
  },
  {
    id: "grim-reaper",
    name: "Grim Reaper",
    level: 200,
    difficulty: "Hard",
    location: "Drefia, Dark Cathedral",
    bestBonus: "experience",
    reason: "Excelente XP, especialmente em respawn alto",
    huntingTips: "Use Holy/Physical damage"
  },
  {
    id: "hellspawn",
    name: "Hellspawn",
    level: 150,
    difficulty: "Medium",
    location: "Yalahar, Fury Gate",
    bestBonus: "loot",
    reason: "Hellspawn Tail e Hardened Bone para Imbues",
    huntingTips: "Use Ice damage"
  },
  
  // Endgame (400+)
  {
    id: "draken-warmaster",
    name: "Draken Warmaster",
    level: 250,
    difficulty: "Hard",
    location: "Razachai",
    bestBonus: "loot",
    reason: "Warmaster's Wristguards para Club Skill Imbuement",
    huntingTips: "Use Ice damage, Fire Protection"
  },
  {
    id: "fury",
    name: "Fury",
    level: 200,
    difficulty: "Hard",
    location: "Fury Gate",
    bestBonus: "experience",
    reason: "Muito XP, bom respawn",
    huntingTips: "Use Ice damage, Fire Protection"
  },
  {
    id: "serpent-spawn",
    name: "Serpent Spawn",
    level: 150,
    difficulty: "Hard",
    location: "Deeper Banuta, Ferumbras Ascension",
    bestBonus: "experience",
    reason: "Alto XP, mas perigoso",
    huntingTips: "Use Ice damage, cuidado com poison"
  },
  {
    id: "vexclaw",
    name: "Vexclaw",
    level: 250,
    difficulty: "Hard",
    location: "Roshamuul Prision",
    bestBonus: "loot",
    reason: "Vexclaw Talon para Critical Hit Imbuement (muito valioso)",
    huntingTips: "Use Energy damage, muito perigoso"
  },
  {
    id: "grimeleech",
    name: "Grimeleech",
    level: 250,
    difficulty: "Hard",
    location: "Roshamuul Prision",
    bestBonus: "loot",
    reason: "Grimeleech Wings para Mana Leech Imbuement",
    huntingTips: "Use Energy damage"
  },
  {
    id: "true-midnight-asura",
    name: "True Midnight Asura",
    level: 300,
    difficulty: "Hard",
    location: "Asura Palace",
    bestBonus: "experience",
    reason: "Altíssimo XP, meta hunt atual",
    huntingTips: "Use Energy damage, Death Protection"
  }
];

// Hunting Task Rewards
export const huntingTaskRewards: HuntingTaskReward[] = [
  { name: "Bronze Hunter Trophy", cost: 3000, icon: "🏆", category: "trophy" },
  { name: "Gozzler Trophy", cost: 3000, icon: "🏆", category: "trophy" },
  { name: "Sea Serpent Trophy", cost: 15000, icon: "🏆", category: "trophy" },
  { name: "Silver Hunter Trophy", cost: 15000, icon: "🏆", category: "trophy" },
  { name: "Bone Bed", cost: 35000, icon: "🛏️", category: "furniture" },
  { name: "Falconer Outfit (Addon 1)", cost: 35000, icon: "👔", category: "outfit" },
  { name: "Falconer Outfit (Addon 2)", cost: 35000, icon: "👔", category: "outfit" },
  { name: "Demon Doll", cost: 37500, icon: "🎎", category: "doll" },
  { name: "Vexclaw Doll", cost: 37500, icon: "🎎", category: "doll" },
  { name: "Many Faces Trophy", cost: 50000, icon: "🏆", category: "trophy" },
  { name: "Cerberus Champion Puppy", cost: 75000, icon: "🐕", category: "pet" },
  { name: "Brachiodemon Trophy", cost: 80000, icon: "🏆", category: "trophy" },
  { name: "Gold Hunter Trophy", cost: 80000, icon: "🥇", category: "trophy" },
  { name: "Hellflayer Trophy", cost: 80000, icon: "🏆", category: "trophy" },
  { name: "Falconer Outfit (Base)", cost: 100000, icon: "👔", category: "outfit" },
  { name: "Falcon Pet", cost: 135000, icon: "🦅", category: "pet" },
  { name: "Antelope Mount", cost: 145000, icon: "🦌", category: "mount" }
];

// HTP per kill by difficulty and reward level
export const htpTable = {
  Easy: {
    amount1: 25,
    amount2: 50,
    rewards: {
      1: { htp1: 10, htp2: 20 },
      2: { htp1: 12, htp2: 24 },
      3: { htp1: 14, htp2: 29 },
      4: { htp1: 17, htp2: 35 },
      5: { htp1: 21, htp2: 41 }
    }
  },
  Medium: {
    amount1: 100,
    amount2: 200,
    rewards: {
      1: { htp1: 40, htp2: 80 },
      2: { htp1: 50, htp2: 100 },
      3: { htp1: 63, htp2: 125 },
      4: { htp1: 78, htp2: 156 },
      5: { htp1: 98, htp2: 195 }
    }
  },
  Hard: {
    amount1: 400,
    amount2: 800,
    rewards: {
      1: { htp1: 160, htp2: 320 },
      2: { htp1: 208, htp2: 416 },
      3: { htp1: 270, htp2: 541 },
      4: { htp1: 352, htp2: 703 },
      5: { htp1: 457, htp2: 914 }
    }
  }
};

// Tips for Prey System
export const preyTips = [
  {
    icon: "💡",
    title: "Slots de Prey",
    content: "Free Account: 1 slot. Premium: 2 slots. O 3º slot pode ser comprado na Store."
  },
  {
    icon: "⏰",
    title: "Duração do Bônus",
    content: "O bônus dura 2 horas de hunt (tempo ativo, não real). O timer só conta quando você está caçando."
  },
  {
    icon: "🔄",
    title: "Reroll Grátis",
    content: "Você ganha um reroll grátis a cada 20 horas. Rerolls extras custam 150 gold por level."
  },
  {
    icon: "⭐",
    title: "Wildcards",
    content: "Use Wildcards para melhorar o nível do bônus. Cada uso melhora 1 step (máximo 10 steps)."
  },
  {
    icon: "🛡️",
    title: "Defense Prey",
    content: "O bônus de defesa só gasta quando você toma dano HP. Energy Ring ou Magic Shield não gastam prey."
  },
  {
    icon: "💰",
    title: "Loot Prey",
    content: "Com 40% de loot prey, você tem 40% de chance de gerar loot extra (como se matasse 2 monstros)."
  },
  {
    icon: "📊",
    title: "Melhor HTP",
    content: "Para maximizar HTP: faça tasks Hard de 800 kills no reward level 5 (914 HTP por task)."
  },
  {
    icon: "🎯",
    title: "Priorize Loot",
    content: "Para criaturas que dropam materiais de Imbuement caros, priorize Loot Prey."
  }
];

// Get creatures by level range
export function getCreaturesByLevelRange(minLevel: number, maxLevel: number): PreyCreature[] {
  return preyCreatures.filter(c => c.level >= minLevel && c.level <= maxLevel);
}

// Get creatures by bonus type
export function getCreaturesByBonus(bonusType: PreyBonus["type"]): PreyCreature[] {
  return preyCreatures.filter(c => c.bestBonus === bonusType);
}

// Get creatures by difficulty
export function getCreaturesByDifficulty(difficulty: PreyCreature["difficulty"]): PreyCreature[] {
  return preyCreatures.filter(c => c.difficulty === difficulty);
}
