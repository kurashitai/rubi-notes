// Outfits Database - Rubi-Notes
// Database completa de outfits do Tibia/Rubinot

export interface Outfit {
  id: string;
  name: string;
  type: "Premium" | "Free" | "Quest" | "Store" | "Event";
  gender: "Male" | "Female" | "Both";
  addons: number; // 0, 1, 2, or 3 (base + addons)
  requirements: string[];
  source: string;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Muito Difícil";
  rarity: "Comum" | "Raro" | "Muito Raro" | "Exclusivo";
  colors: string[];
  description: string;
  imageUrl?: string;
}

export const outfitsDatabase: Record<string, Outfit> = {
  "citizen": {
    id: "citizen",
    name: "Citizen",
    type: "Free",
    gender: "Both",
    addons: 3,
    requirements: ["Nenhum - Outfit inicial"],
    source: "Outfit inicial",
    difficulty: "Fácil",
    rarity: "Comum",
    colors: ["Azul", "Vermelho", "Verde", "Amarelo"],
    description: "A outfit básica de todo cidadão de Tibia.",
  },
  "hunter": {
    id: "hunter",
    name: "Hunter",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Lizard Leathers (Addon 1)",
      "100 Red Dragon Leather + 1 Royal Steel (Addon 2)",
    ],
    source: "NPC Eremo em Isle of Kings",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Verde", "Marrom", "Preto"],
    description: "Outfit clássica de caçadores experientes.",
  },
  "mage": {
    id: "mage",
    name: "Mage",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "Wand of Voodoo (Addon 1)",
      "Ferumbras' Hat (Addon 2)",
    ],
    source: "NPC Oldrak em Edron",
    difficulty: "Difícil",
    rarity: "Raro",
    colors: ["Roxo", "Azul", "Vermelho"],
    description: "Outfit de magos poderosos.",
  },
  "knight": {
    id: "knight",
    name: "Knight",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Iron Ore (Addon 1)",
      "Dragon Scale Mail + Piece of Royal Steel (Addon 2)",
    ],
    source: "NPC Sam em Thais",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Prata", "Dourado", "Vermelho"],
    description: "Outfit de cavaleiros nobres.",
  },
  "paladin": {
    id: "paladin",
    name: "Paladin",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Assassin Stars (Addon 1)",
      "Royal Crossbow (Addon 2)",
    ],
    source: "NPC Elane em Thais",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Verde", "Marrom", "Dourado"],
    description: "Outfit de paladinos sagrados.",
  },
  "druid": {
    id: "druid",
    name: "Druid",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Wolf Paws (Addon 1)",
      "Blessed Stake + Vampire Dust (Addon 2)",
    ],
    source: "NPC Ceiron em Ab'Dendriel",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Verde", "Marrom", "Branco"],
    description: "Outfit de druidas da natureza.",
  },
  "warrior": {
    id: "warrior",
    name: "Warrior",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Hardened Bones (Addon 1)",
      "Demon Trophy + 100 Demon Dust (Addon 2)",
    ],
    source: "NPC Rock in a Hard Place em Feyrist",
    difficulty: "Difícil",
    rarity: "Raro",
    colors: ["Vermelho", "Preto", "Prata"],
    description: "Outfit de guerreiros destemidos.",
  },
  "barbarian": {
    id: "barbarian",
    name: "Barbarian",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "50 Wolf Teeth + 50 Mammoth Tusks (Addon 1)",
      "Fighting Spirit (Addon 2)",
    ],
    source: "NPC Krarok em Svargrond",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Marrom", "Bege", "Cinza"],
    description: "Outfit de bárbaros do norte.",
  },
  "wizard": {
    id: "wizard",
    name: "Wizard",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "Magic Sulphur (Addon 1)",
      "Holy Orchid (Addon 2)",
    ],
    source: "NPC Elathriel em Ab'Dendriel",
    difficulty: "Difícil",
    rarity: "Raro",
    colors: ["Azul", "Branco", "Dourado"],
    description: "Outfit de feiticeiros poderosos.",
  },
  "oriental": {
    id: "oriental",
    name: "Oriental",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "Ape Fur + Spider Silk Yarn (Addon 1)",
      "Holy Scarab (Addon 2)",
    ],
    source: "NPC Razan em Darashia",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Vermelho", "Dourado", "Roxo"],
    description: "Outfit exótica do oriente.",
  },
  "pirate": {
    id: "pirate",
    name: "Pirate",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Eye Patches (Addon 1)",
      "Pirate King's Treasure (Addon 2)",
    ],
    source: "NPC Eleonore em Liberty Bay",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Vermelho", "Preto", "Dourado"],
    description: "Outfit de piratas dos mares.",
  },
  "assassin": {
    id: "assassin",
    name: "Assassin",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "Kill 10 Necromancers (Addon 1)",
      "Spider Silk + Broken Gladiator Shield (Addon 2)",
    ],
    source: "NPC Ereth em Ankrahmun",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Preto", "Vermelho", "Cinza"],
    description: "Outfit de assassinos silenciosos.",
  },
  "beggar": {
    id: "beggar",
    name: "Beggar",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Torn Books (Addon 1)",
      "Flask of Embalming Fluid (Addon 2)",
    ],
    source: "NPC Beggar em Thais",
    difficulty: "Fácil",
    rarity: "Comum",
    colors: ["Marrom", "Cinza", "Bege"],
    description: "Outfit de mendigos humildes.",
  },
  "shaman": {
    id: "shaman",
    name: "Shaman",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "5 Orc Tooth (Addon 1)",
      "Fish Bone + Yellow Piece of Cloth (Addon 2)",
    ],
    source: "NPC Hawkon em Svargrond",
    difficulty: "Fácil",
    rarity: "Comum",
    colors: ["Verde", "Vermelho", "Marrom"],
    description: "Outfit de xamãs tribais.",
  },
  "nobleman": {
    id: "nobleman",
    name: "Nobleman",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "150,000 gold (Addon 1)",
      "200 Power Bolts (Addon 2)",
    ],
    source: "NPC Rashid (rotativo)",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Vermelho", "Azul", "Dourado"],
    description: "Outfit de nobres ricos.",
  },
  "summoner": {
    id: "summoner",
    name: "Summoner",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "100 Demon Dust (Addon 1)",
      "Eye of Storm + Energy Vortex (Addon 2)",
    ],
    source: "NPC Oldrak em Edron",
    difficulty: "Difícil",
    rarity: "Raro",
    colors: ["Roxo", "Verde", "Preto"],
    description: "Outfit de invocadores de demônios.",
  },
  "norseman": {
    id: "norseman",
    name: "Norseman",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "50 Shaggy Tail (Addon 1)",
      "100 Mammoth Fur + Diremaw Brainpan (Addon 2)",
    ],
    source: "NPC Enar em Svargrond",
    difficulty: "Médio",
    rarity: "Comum",
    colors: ["Marrom", "Cinza", "Azul"],
    description: "Outfit de nórdicos vigorosos.",
  },
  "nightmare": {
    id: "nightmare",
    name: "Nightmare",
    type: "Premium",
    gender: "Both",
    addons: 3,
    requirements: [
      "Premium Account",
      "Demonic Essence (Addon 1)",
      "Necromancer Hood (Addon 2)",
    ],
    source: "NPC Rottin Wood em Darashia",
    difficulty: "Difícil",
    rarity: "Raro",
    colors: ["Preto", "Vermelho", "Roxo"],
    description: "Outfit de pesadelos sombrios.",
  },
  "brotherhood-of-bones": {
    id: "brotherhood-of-bones",
    name: "Brotherhood of Bones",
    type: "Quest",
    gender: "Both",
    addons: 3,
    requirements: [
      "Complete Inquisition Quest",
      "Complete Wrath of the Emperor",
    ],
    source: "Inquisition Quest",
    difficulty: "Muito Difícil",
    rarity: "Raro",
    colors: ["Preto", "Cinza", "Branco"],
    description: "Outfit da Irmandade dos Ossos.",
  },
  "demon-hunter": {
    id: "demon-hunter",
    name: "Demon Hunter",
    type: "Quest",
    gender: "Both",
    addons: 3,
    requirements: [
      "Complete Inquisition Quest",
      "Kill 6666 Demons",
    ],
    source: "Inquisition Quest + Demon Task",
    difficulty: "Muito Difícil",
    rarity: "Muito Raro",
    colors: ["Vermelho", "Preto", "Dourado"],
    description: "Outfit de caçadores de demônios.",
  },
  "soul-war": {
    id: "soul-war",
    name: "Soul War",
    type: "Quest",
    gender: "Both",
    addons: 3,
    requirements: [
      "Complete Soul War Quest",
      "Kill 5 Soul War Bosses",
    ],
    source: "Soul War Quest",
    difficulty: "Muito Difícil",
    rarity: "Exclusivo",
    colors: ["Roxo", "Azul", "Branco"],
    description: "Outfit da guerra das almas.",
  },
  "ferumbras": {
    id: "ferumbras",
    name: "Ferumbras' Ascension",
    type: "Quest",
    gender: "Both",
    addons: 3,
    requirements: [
      "Complete Ferumbras' Ascension Quest",
      "Kill Ferumbras 3 times",
    ],
    source: "Ferumbras' Ascension Quest",
    difficulty: "Muito Difícil",
    rarity: "Exclusivo",
    colors: ["Vermelho", "Preto", "Verde"],
    description: "Outfit da ascensão de Ferumbras.",
  },
};

// Helper functions
export function getOutfitById(id: string): Outfit | undefined {
  return outfitsDatabase[id];
}

export function getOutfitsByType(type: Outfit["type"]): Outfit[] {
  return Object.values(outfitsDatabase).filter(o => o.type === type);
}

export function getOutfitsByDifficulty(difficulty: Outfit["difficulty"]): Outfit[] {
  return Object.values(outfitsDatabase).filter(o => o.difficulty === difficulty);
}

export function getOutfitsByRarity(rarity: Outfit["rarity"]): Outfit[] {
  return Object.values(outfitsDatabase).filter(o => o.rarity === rarity);
}

export function getAllOutfits(): Outfit[] {
  return Object.values(outfitsDatabase);
}

export function searchOutfits(query: string): Outfit[] {
  const q = query.toLowerCase();
  return Object.values(outfitsDatabase).filter(o =>
    o.name.toLowerCase().includes(q) ||
    o.description.toLowerCase().includes(q)
  );
}

export const outfitTypes = ["Premium", "Free", "Quest", "Store", "Event"] as const;
export const outfitRarities = ["Comum", "Raro", "Muito Raro", "Exclusivo"] as const;
export const outfitDifficulties = ["Fácil", "Médio", "Difícil", "Muito Difícil"] as const;
