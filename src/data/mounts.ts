// Mounts Database - Rubi-Notes
// Database completa de mounts do Tibia/Rubinot

export interface Mount {
  id: string;
  name: string;
  type: "Premium" | "Free" | "Quest" | "Store" | "Event" | "Achievement";
  speed: number; // bonus de speed
  requirements: string[];
  source: string;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Muito Difícil";
  rarity: "Comum" | "Raro" | "Muito Raro" | "Exclusivo";
  description: string;
  tamingItem?: string;
  creatureToTame?: string;
  price?: string;
  imageUrl?: string;
}

export const mountsDatabase: Record<string, Mount> = {
  // Mounts Básicas/Iniciais
  "widow-queen": {
    id: "widow-queen",
    name: "Widow Queen",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Scorpion Tail"],
    source: "Domar Giant Spider",
    difficulty: "Médio",
    rarity: "Comum",
    description: "Uma aranha gigante domesticada.",
    tamingItem: "Scorpion Tail",
    creatureToTame: "Giant Spider",
  },
  "racing-bird": {
    id: "racing-bird",
    name: "Racing Bird",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Feral Horse"],
    source: "Domar Terror Bird",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um pássaro veloz para corridas.",
    tamingItem: "Feral Horse",
    creatureToTame: "Terror Bird",
  },
  "war-bear": {
    id: "war-bear",
    name: "War Bear",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Honeycomb"],
    source: "Domar Bear",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um urso de guerra poderoso.",
    tamingItem: "Honeycomb",
    creatureToTame: "Bear",
  },
  "black-sheep": {
    id: "black-sheep",
    name: "Black Sheep",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Reins"],
    source: "Domar Black Sheep",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Uma ovelha negra peculiar.",
    tamingItem: "Reins",
    creatureToTame: "Black Sheep",
  },
  "midnight-panther": {
    id: "midnight-panther",
    name: "Midnight Panther",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Leather Whip"],
    source: "Domar Midnight Panther",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Uma pantera negra da meia-noite.",
    tamingItem: "Leather Whip",
    creatureToTame: "Midnight Panther",
  },
  "draptor": {
    id: "draptor",
    name: "Draptor",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Musicbox"],
    source: "Domar Draptor",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Um dragão raptor feroz.",
    tamingItem: "Musicbox",
    creatureToTame: "Draptor",
  },
  "titanica": {
    id: "titanica",
    name: "Titanica",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Glow Wine"],
    source: "Domar Crystal Spider",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Uma aranha de cristal brilhante.",
    tamingItem: "Glow Wine",
    creatureToTame: "Crystal Spider",
  },
  "tin-lizzard": {
    id: "tin-lizzard",
    name: "Tin Lizzard",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Orichalcum Pearl"],
    source: "Domar Wailing Widow",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Uma criatura metálica peculiar.",
    tamingItem: "Orichalcum Pearl",
    creatureToTame: "Wailing Widow",
  },
  "blazebringer": {
    id: "blazebringer",
    name: "Blazebringer",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Decorative Ribbon"],
    source: "Domar Magma Crawler",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Uma montaria de fogo.",
    tamingItem: "Decorative Ribbon",
    creatureToTame: "Magma Crawler",
  },
  "rapid-boar": {
    id: "rapid-boar",
    name: "Rapid Boar",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Hunting Horn"],
    source: "Domar Boar",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um javali veloz.",
    tamingItem: "Hunting Horn",
    creatureToTame: "Boar",
  },
  "stampor": {
    id: "stampor",
    name: "Stampor",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Stamp"],
    source: "Domar Stampor",
    difficulty: "Médio",
    rarity: "Comum",
    description: "Uma criatura estampada.",
    tamingItem: "Stamp",
    creatureToTame: "Stampor",
  },
  "undead-cavebear": {
    id: "undead-cavebear",
    name: "Undead Cavebear",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Skull Helmet"],
    source: "Domar Undead Cavebear",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Um urso das cavernas morto-vivo.",
    tamingItem: "Skull Helmet",
    creatureToTame: "Undead Cavebear",
  },
  "donkey": {
    id: "donkey",
    name: "Donkey",
    type: "Free",
    speed: 10,
    requirements: ["Nenhum"],
    source: "Evento ou compra",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um burro simples mas confiável.",
  },
  "dromedary": {
    id: "dromedary",
    name: "Dromedary",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account"],
    source: "NPC em Darashia",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um dromedário do deserto.",
    price: "1000 gold",
  },
  "crystal-wolf": {
    id: "crystal-wolf",
    name: "Crystal Wolf",
    type: "Quest",
    speed: 10,
    requirements: ["Complete Dream Courts Quest"],
    source: "Dream Courts Quest",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Um lobo de cristal mágico.",
  },
  "rift-runner": {
    id: "rift-runner",
    name: "Rift Runner",
    type: "Achievement",
    speed: 10,
    requirements: ["Complete Secret Library Quest"],
    source: "Secret Library Quest",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Uma montaria que viaja entre dimensões.",
  },
  "neon-sparkid": {
    id: "neon-sparkid",
    name: "Neon Sparkid",
    type: "Quest",
    speed: 10,
    requirements: ["Complete Soul War Quest"],
    source: "Soul War Quest",
    difficulty: "Muito Difícil",
    rarity: "Muito Raro",
    description: "Uma criatura de energia pura.",
  },
  "lacewing-moth": {
    id: "lacewing-moth",
    name: "Lacewing Moth",
    type: "Quest",
    speed: 10,
    requirements: ["Complete Feaster of Souls Quest"],
    source: "Feaster of Souls Quest",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Uma mariposa gigante elegante.",
  },
  "bright-percht-sleigh": {
    id: "bright-percht-sleigh",
    name: "Bright Percht Sleigh",
    type: "Event",
    speed: 10,
    requirements: ["Complete Winterlight Solstice Event"],
    source: "Winterlight Solstice (Evento de Natal)",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Um trenó festivo de natal.",
  },
  "festive-mammoth": {
    id: "festive-mammoth",
    name: "Festive Mammoth",
    type: "Event",
    speed: 10,
    requirements: ["Complete Summer Event"],
    source: "Evento de Verão",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Um mamute festivo.",
  },
  "ursagrodon": {
    id: "ursagrodon",
    name: "Ursagrodon",
    type: "Store",
    speed: 10,
    requirements: ["Comprar na Store"],
    source: "Tibia Store",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Uma montaria da loja.",
    price: "750 Tibia Coins",
  },
  "nethersteed": {
    id: "nethersteed",
    name: "Nethersteed",
    type: "Store",
    speed: 10,
    requirements: ["Comprar na Store"],
    source: "Tibia Store",
    difficulty: "Fácil",
    rarity: "Comum",
    description: "Um corcel das trevas.",
    price: "750 Tibia Coins",
  },
  "glooth-glider": {
    id: "glooth-glider",
    name: "Glooth Glider",
    type: "Quest",
    speed: 10,
    requirements: ["Complete Oramond Quest"],
    source: "Oramond Quest",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Um planador de Glooth.",
  },
  "mephit": {
    id: "mephit",
    name: "Mephit",
    type: "Premium",
    speed: 10,
    requirements: ["Premium Account", "Silver Token"],
    source: "Boss rewards",
    difficulty: "Médio",
    rarity: "Raro",
    description: "Uma criatura demoníaca pequena.",
    tamingItem: "Silver Token",
  },
  "gryphon": {
    id: "gryphon",
    name: "Gryphon",
    type: "Quest",
    speed: 10,
    requirements: ["Complete Kilmaresh Quest"],
    source: "Kilmaresh Quest",
    difficulty: "Difícil",
    rarity: "Raro",
    description: "Um grifo majestoso.",
  },
  "golden-dragonfly": {
    id: "golden-dragonfly",
    name: "Golden Dragonfly",
    type: "Event",
    speed: 10,
    requirements: ["Complete Anniversary Event"],
    source: "Tibia Anniversary Event",
    difficulty: "Médio",
    rarity: "Muito Raro",
    description: "Uma libélula dourada rara.",
  },
};

// Helper functions
export function getMountById(id: string): Mount | undefined {
  return mountsDatabase[id];
}

export function getMountsByType(type: Mount["type"]): Mount[] {
  return Object.values(mountsDatabase).filter(m => m.type === type);
}

export function getMountsByDifficulty(difficulty: Mount["difficulty"]): Mount[] {
  return Object.values(mountsDatabase).filter(m => m.difficulty === difficulty);
}

export function getMountsByRarity(rarity: Mount["rarity"]): Mount[] {
  return Object.values(mountsDatabase).filter(m => m.rarity === rarity);
}

export function getAllMounts(): Mount[] {
  return Object.values(mountsDatabase);
}

export function searchMounts(query: string): Mount[] {
  const q = query.toLowerCase();
  return Object.values(mountsDatabase).filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.description.toLowerCase().includes(q)
  );
}

export const mountTypes = ["Premium", "Free", "Quest", "Store", "Event", "Achievement"] as const;
export const mountRarities = ["Comum", "Raro", "Muito Raro", "Exclusivo"] as const;
export const mountDifficulties = ["Fácil", "Médio", "Difícil", "Muito Difícil"] as const;
