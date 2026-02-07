// Charms System - Guia completo
// Fonte: TibiaWiki BR e experiência de jogo

export interface CharmInfo {
  name: string;
  icon: string;
  description: string;
  bonus: string;
  bestFor: string[];
  weakAgainst: string[];
}

// Lista de Charms disponíveis
export const charms: Record<string, CharmInfo> = {
  "phantasm": {
    name: "Phantasm",
    icon: "👻",
    description: "Aumenta dano físico em criaturas com vida mais alta.",
    bonus: "+10% dano físico vs. criaturas com muito HP",
    bestFor: ["High HP mobs", "Bosses com muita vida", "Hydras", "Demons", "Dragons"],
    weakAgainst: []
  },
  "void": {
    name: "Void",
    icon: "🕳️",
    description: "Aumenta dano físico em criaturas sem corpo físico.",
    bonus: "+10% dano físico vs. criaturas incorpóreas",
    bestFor: ["Ghost", "Spectre", "Phantasm", "Souleaters", "Undead"],
    weakAgainst: []
  },
  "vampire": {
    name: "Vampire",
    icon: "🧛",
    description: "Aumenta dano físico em criaturas vivas.",
    bonus: "+10% dano físico vs. criaturas vivas",
    bestFor: ["Humanoids", "Monsters vivos", "Orcs", "Cyclops"],
    weakAgainst: ["Undead", "Construções"]
  },
  "lightning": {
    name: "Lightning",
    icon: "⚡",
    description: "Aumenta dano físico em criaturas de gelo.",
    bonus: "+10% dano físico vs. criaturas de gelo",
    bestFor: ["Frost Dragons", "Ice Golems", "Wyverns", "Yakchal"],
    weakAgainst: []
  },
  "fire": {
    name: "Fire",
    icon: "🔥",
    description: "Aumenta dano físico em criaturas de fogo.",
    bonus: "+10% dano físico vs. criaturas de fogo",
    bestFor: ["Fire Elementals", "Efreet", "Fire Devils", "Hellhounds"],
    weakAgainst: []
  },
  "earth": {
    name: "Earth",
    icon: "🌍",
    description: "Aumenta dano físico em criaturas de terra.",
    bonus: "+10% dano físico vs. criaturas de terra",
    bestFor: ["Stone Golems", "Earth Elementals", "Crystal Spiders", "Burden"],
    weakAgainst: []
  },
  "energy": {
    name: "Energy",
    icon: "⚡",
    description: "Aumenta dano físico em criaturas de energia.",
    bonus: "+10% dano físico vs. criaturas de energia",
    bestFor: ["Energy Elementals", "Massive Elements", "Nightstalkers"],
    weakAgainst: []
  },
  "ice": {
    name: "Ice",
    icon: "❄️",
    description: "Aumenta dano físico em criaturas de energia.",
    bonus: "+10% dano físico vs. criaturas de energia (também afeta alguns de gelo)",
    bestFor: ["Energy Elementals", "Massive Elements", "Electric Elementals"],
    weakAgainst: []
  },
  "holy": {
    name: "Holy",
    icon: "✨",
    description: "Aumenta dano físico em criaturas mortas-vivas e demoníacas.",
    bonus: "+10% dano físico vs. mortos-vivos e demoníacos",
    bestFor: ["Undead", "Demons", "Vampires", "Ghouls", "Liches"],
    weakAgainst: []
  },
  "death": {
    name: "Death",
    icon: "💀",
    description: "Aumenta dano físico em criaturas vivas e sagradas.",
    bonus: "+10% dano físico vs. criaturas vivas e sagradas",
    bestFor: ["Paladins", "Druids", "Sorcerers", "Monks", "Humanoids sagrados"],
    weakAgainst: ["Undead", "Construções"]
  },
  "physical": {
    name: "Physical",
    icon: "⚔️",
    description: "Aumenta dano físico em criaturas físicas.",
    bonus: "+10% dano físico vs. criaturas físicas (não-elementais, não-mortos)",
    bestFor: ["Humanoids", "Beasts", "Insects", "Monsters comuns"],
    weakAgainst: []
  },
  "nature": {
    name: "Nature",
    icon: "🌿",
    description: "Aumenta dano físico em criaturas artificiais e mágicas.",
    bonus: "+10% dano físico vs. criaturas artificiais e mágicas",
    bestFor: ["Golems", "Construções", "Elementais", "Magical Beasts"],
    weakAgainst: []
  }
};

// Charms por fraqueza do monstro
export const charmsByWeakness: Record<string, string[]> = {
  "ice": ["fire", "earth"],
  "fire": ["ice", "energy"],
  "earth": ["energy", "physical"],
  "energy": ["ice", "earth"],
  "death": ["holy", "nature"],
  "holy": ["death", "energy"],
  "physical": ["nature", "phantasm"],
  "void": ["physical", "holy"]
};

// Charms recomendados por hunt
export const charmsByHunt: Record<string, string[]> = {
  // Lycanthropes
  "weretiger": ["void", "death", "nature"],
  "werelion": ["void", "death", "nature"],
  "werehyaena": ["void", "death", "nature"],

  // Low Level Hunts
  "goblins": ["phantasm", "void", "physical"],
  "trolls": ["phantasm", "void", "physical"],
  "rotworms": ["phantasm", "void", "physical"],

  // Mid Level Hunts
  "cyclops": ["phantasm", "void", "physical"],
  "orcs": ["phantasm", "void", "physical"],
  "dragons": ["lightning", "ice", "energy"],

  // High Level Hunts
  "demons": ["holy", "nature", "void"],
  "giant-spiders": ["ice", "energy", "physical"],
  "hydras": ["lightning", "physical", "void"]
};

// Dicas gerais sobre Charms
export const charmTips = [
  "Use Phantasm para mobs com muito HP (Bosses, Hydras, Demons)",
  "Use Void em criaturas incorpóreas (Ghost, Spectre, Phantasm)",
  "Use Lightning em criaturas de gelo (Frost Dragons, Ice Golems)",
  "Use Fire em criaturas de fogo (Fire Elementals, Efreet)",
  "Use Holy em Undead e Demons (Ghouls, Vampires, Liches)",
  "Use Death em classes vivas (Paladins, Druids, Sorcerers, Monks)",
  "Physical é um charm versátil para mobs comuns e humanoids",
  "Troque os charms conforme a hunt para maximizar eficiência",
  "Verifique a fraqueza do monstro antes de escolher o charm",
  "Alguns mobs têm fraquezas múltiplas - experimente diferentes charms"
];
