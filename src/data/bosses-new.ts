// Bosses Novos - Expansão do Database Rubi-Notes
// Adiciona 25+ bosses do Tibia/Rubinot
// Fonte: TibiaWiki Fandom, Wiki Rubinot
// Data: 2026-02-05

export interface BossLoot {
  item: string;
  chance: "Comum" | "Raro" | "Muito Raro";
  value: string;
  dropRate?: string;
}

export interface BossData {
  slug: string;
  name: string;
  image?: string;
  tier: "S" | "A" | "B" | "C";
  category: "World Boss" | "Raid Boss" | "Quest Boss" | "Mini Boss" | "Daily Boss";
  hp: number;
  exp: number;
  cooldown: string;
  cooldownHours: number;
  location: string;
  coordinates?: string;
  accessQuest?: string;
  accessQuestSlug?: string;
  recommendedLevel: number;
  maxPlayers: number;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Muito Difícil" | "Extremo";
  weaknesses: Record<string, number>;
  immunities: string[];
  mechanics: string[];
  tips: string[];
  loot: BossLoot[];
  rewards?: string[];
  videoGuide?: string;
}

export const newBossesDatabase: Record<string, BossData> = {
  // === WORLD BOSSES ===
  "mad-technomancer": {
    slug: "mad-technomancer",
    name: "Mad Technomancer",
    tier: "S",
    category: "World Boss",
    hp: 500000,
    exp: 100000,
    cooldown: "Event-based",
    cooldownHours: 168,
    location: "Roshamuul",
    coordinates: "x:33800, y:32100, z:7",
    accessQuest: "Roshamuul Quest",
    accessQuestSlug: "roshamuul-quest",
    recommendedLevel: 600,
    maxPlayers: 20,
    difficulty: "Extremo",
    weaknesses: { "Energy": 20, "Holy": 15 },
    immunities: ["Paralysis", "Invisibility", "Energy"],
    mechanics: [
      "Transforma jogadores em mutated rats aleatoriamente",
      "Usa Bomb Throw em área grande",
      "Summons Technomancer Apprentices constantemente",
      "Electric Discharge causa dano massivo em área"
    ],
    tips: [
      "Use Protection Amulet (Energy)",
      "Matar summons rapidamente - eles são muitos",
      "Kite o boss - não fique parado",
      "Coordenar time é essencial"
    ],
    loot: [
      { item: "Gnome Shield", chance: "Muito Raro", value: "200kk+" },
      { item: "Gnome Armor", chance: "Muito Raro", value: "150kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Technomancer Slayer"]
  },

  "white-pale": {
    slug: "white-pale",
    name: "White Pale",
    tier: "A",
    category: "World Boss",
    hp: 180000,
    exp: 45000,
    cooldown: "Event-based",
    cooldownHours: 168,
    location: "Roshamuul Lower Levels",
    accessQuest: "Roshamuul Quest",
    accessQuestSlug: "roshamuul-quest",
    recommendedLevel: 400,
    maxPlayers: 15,
    difficulty: "Muito Difícil",
    weaknesses: { "Holy": 25, "Fire": 15 },
    immunities: ["Paralysis", "Invisibility", "Death", "Earth"],
    mechanics: [
      "Cria clones de si mesmo durante a luta",
      "Clones causam dano real mas têm menos HP",
      "Life Drain Beam",
      "Summons Mutated Bats"
    ],
    tips: [
      "Use AoE para identificar o boss real",
      "Boss real causa mais dano ao ser atingido",
      "Ficar diagonal para evitar beams",
      "Holy attacks são muito efetivos"
    ],
    loot: [
      { item: "Pale Worm Carapace", chance: "Muito Raro", value: "80kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Pale Slayer"]
  },

  "glooth-bandit": {
    slug: "glooth-bandit",
    name: "Glooth Bandit",
    tier: "B",
    category: "World Boss",
    hp: 120000,
    exp: 35000,
    cooldown: "Event-based",
    cooldownHours: 72,
    location: "Rathleton",
    coordinates: "x:33500, y:31900, z:8",
    accessQuest: "Oramond Quest",
    accessQuestSlug: "oramond-quest",
    recommendedLevel: 300,
    maxPlayers: 10,
    difficulty: "Difícil",
    weaknesses: { "Fire": 20, "Energy": 15 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Stealth - pode ficar invisível",
      "Backstab causa dano massivo se atacar pelas costas",
      "Summons Glooth Bandits",
      "Glooth Throw em área"
    ],
    tips: [
      "Sempre fique de frente para o boss",
      "Use Exeta Res quando ele ficar invisível",
      "Fire attacks funcionam bem",
      "Pode ser feito com time pequeno"
    ],
    loot: [
      { item: "Glooth Amulet", chance: "Raro", value: "30kk+" },
      { item: "Maxilla Maximus", chance: "Muito Raro", value: "50kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "ravenous-nightmare": {
    slug: "ravenous-nightmare",
    name: "Ravenous Nightmare",
    tier: "S",
    category: "World Boss",
    hp: 350000,
    exp: 80000,
    cooldown: "Event-based",
    cooldownHours: 168,
    location: "Dream Courts",
    coordinates: "x:32400, y:32200, z:7",
    accessQuest: "Dream Courts Quest",
    accessQuestSlug: "dream-courts-quest",
    recommendedLevel: 500,
    maxPlayers: 15,
    difficulty: "Extremo",
    weaknesses: { "Fire": 20, "Holy": 15 },
    immunities: ["Paralysis", "Invisibility", "Death"],
    mechanics: [
      "Devour - consome jogadores próximos instantaneamente",
      "Nightmare Curse - transforma em nightmare",
      "Summons Dream Scorpions",
      "Paralyze muito forte"
    ],
    tips: [
      "MANTENHA DISTÂNCIA - Devour é instant kill",
      "Use Totem de Dream Catcher quando amaldiçoado",
      "Fire e Holy são os melhores elementos",
      "Team de pelo menos 10 players recomendado"
    ],
    loot: [
      { item: "Nightmare Shield", chance: "Muito Raro", value: "100kk+" },
      { item: "Nightmare Blade", chance: "Muito Raro", value: "120kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Nightmare Eater"]
  },

  "arachir-the-ancient-one": {
    slug: "arachir-the-ancient-one",
    name: "Arachir the Ancient One",
    tier: "A",
    category: "World Boss",
    hp: 200000,
    exp: 50000,
    cooldown: "Event-based",
    cooldownHours: 120,
    location: "Corym Catacombs",
    coordinates: "x:32800, y:32500, z:8",
    accessQuest: "Corym Charades",
    accessQuestSlug: "corym-charades",
    recommendedLevel: 350,
    maxPlayers: 12,
    difficulty: "Difícil",
    weaknesses: { "Fire": 30, "Energy": 20 },
    immunities: ["Paralysis", "Earth", "Poison"],
    mechanics: [
      "Web Trap - prende jogadores em teia",
      "Poison Bomb - área com poison muito forte",
      "Summons Spiders de vários tipos",
      "Venomous Bite - Life Drain + Poison"
    ],
    tips: [
      "Use fire attacks - spider weakness",
      "Não fique nas webs - você fica preso",
      "Matar summons se acumular",
      "Bring antidotes para poison"
    ],
    loot: [
      { item: "Arachir's Fang", chance: "Muito Raro", value: "60kk+" },
      { item: "Spider Silk", chance: "Raro", value: "20kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Spider Slayer"]
  },

  "yielothax": {
    slug: "yielothax",
    name: "Yielothax",
    tier: "A",
    category: "World Boss",
    hp: 250000,
    exp: 60000,
    cooldown: "Event-based",
    cooldownHours: 120,
    location: "Yalahar, Sunken Quarter",
    coordinates: "x:32200, y:32800, z:9",
    accessQuest: "Yalahar Quest",
    accessQuestSlug: "yalahar-quest",
    recommendedLevel: 400,
    maxPlayers: 12,
    difficulty: "Muito Difícil",
    weaknesses: { "Holy": 25, "Ice": 15 },
    immunities: ["Paralysis", "Invisibility", "Physical"],
    mechanics: [
      "Life Drain extremamente forte",
      "Self-healing - cura com o dano causado aos players",
      "Summons Energy Elementals",
      "Energy Wave"
    ],
    tips: [
      "DO NOT cause high damage - ele cura mais",
      "Use weak attacks constantes",
      "Holy attacks mais efetivos",
      "Coordinate DPS para não causar muito dano de uma vez"
    ],
    loot: [
      { item: "Yielock", chance: "Muito Raro", value: "80kk+" },
      { item: "Yielowth", chance: "Muito Raro", value: "80kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Yielothax Defeated"]
  },

  // === QUEST BOSSES ===
  "the-rage": {
    slug: "the-rage",
    name: "The Rage",
    tier: "A",
    category: "Quest Boss",
    hp: 280000,
    exp: 70000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Heart of Destruction",
    coordinates: "x:33000, y:32400, z:10",
    accessQuest: "Heart of Destruction Quest",
    accessQuestSlug: "heart-of-destruction",
    recommendedLevel: 450,
    maxPlayers: 5,
    difficulty: "Muito Difícil",
    weaknesses: { "Ice": 15, "Holy": 10 },
    immunities: ["Paralysis", "Fire"],
    mechanics: [
      "Firebomb - spawna bombs que causam dano em explosão",
      "Rage mode - aumenta dano drasticamente quando HP baixo",
      "Summons Rages of The Rage",
      "Teleports aleatoriamente"
    ],
    tips: [
      "Quando ele entrar em Rage mode, foque em surviving",
      "Use Ice attacks - fire immunity",
      "Ficar em movimento constante para evitar bombs",
      "Time coordenado recomendado"
    ],
    loot: [
      { item: "Raging Blade", chance: "Muito Raro", value: "50kk+" },
      { item: "Furious Helmet", chance: "Muito Raro", value: "40kk+" },
      { item: "Gold Token", chance: "Raro", value: "25k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: The Rage Defeated"]
  },

  "man-in-the-cave": {
    slug: "man-in-the-cave",
    name: "Man in the Cave",
    tier: "B",
    category: "Quest Boss",
    hp: 100000,
    exp: 30000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Cave of the Faceless One",
    coordinates: "x:32600, y:32600, z:9",
    accessQuest: "The Ape City",
    accessQuestSlug: "ape-city-quest",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Holy": 20 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Confuses players - troca controles",
      "Summons Faceless Banes",
      "Life Drain",
      "Energy Wave"
    ],
    tips: [
      "Confuse pode ser perigoso - fique longe",
      "Use Holy attacks",
      "Matar summons rapidamente",
      "Boss relativamente simples"
    ],
    loot: [
      { item: "Faceless Mask", chance: "Raro", value: "20kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "goric": {
    slug: "goric",
    name: "Goric",
    tier: "B",
    category: "Quest Boss",
    hp: 150000,
    exp: 40000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "The Library of Mystery",
    coordinates: "x:33400, y:32700, z:8",
    accessQuest: "The Library of Mystery",
    accessQuestSlug: "library-of-mystery",
    recommendedLevel: 300,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Energy": 20, "Ice": 15 },
    immunities: ["Paralysis"],
    mechanics: [
      "Fire Wave",
      "Summons Book Burners",
      "Mana Drain",
      "Retargets frequently"
    ],
    tips: [
      "Use Energy ou Ice attacks",
      "Ficar diagonal para evitar waves",
      "Matar summons quando necessário",
      "Soloável com equipamento bom"
    ],
    loot: [
      { item: "Goric's Tome", chance: "Raro", value: "30kk+" },
      { item: "Ancient Tome", chance: "Raro", value: "15kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "the-archfoe": {
    slug: "the-archfoe",
    name: "The Archfoe",
    tier: "A",
    category: "Quest Boss",
    hp: 320000,
    exp: 75000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Pirat Cave",
    coordinates: "x:32500, y:32400, z:10",
    accessQuest: "The Curse Spreads",
    accessQuestSlug: "curse-spreads",
    recommendedLevel: 400,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: { "Death": 20, "Physical": 15 },
    immunities: ["Paralysis", "Holy"],
    mechanics: [
      "Summons many pirates",
      "Cannonball - ranged attack em área",
      "Treasure Trap - causa damage quando pega loot",
      "Curse - reduz stats temporariamente"
    ],
    tips: [
      "Matar summons primeiro",
      "NÃO pegar loot durante luta - Treasure Trap",
      "Use Death attacks",
      "Time coordenado recomendado"
    ],
    loot: [
      { item: "Archfoe's Hat", chance: "Muito Raro", value: "60kk+" },
      { item: "Pirate Cutlass", chance: "Raro", value: "40kk+" },
      { item: "Gold Token", chance: "Raro", value: "25k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Outfit: Pirate"]
  },

  "the-collector": {
    slug: "the-collector",
    name: "The Collector",
    tier: "B",
    category: "Quest Boss",
    hp: 120000,
    exp: 35000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Hive Outpost",
    coordinates: "x:32300, y:32200, z:9",
    accessQuest: "The Inquisition Quest",
    accessQuestSlug: "inquisition-quest",
    recommendedLevel: 280,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Fire": 25, "Holy": 15 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Collects souls - ganha força com cada kill",
      "Summons Soul Stealers",
      "Death Wave",
      "Mana Drain"
    ],
    tips: [
      "Matar summons antes que ele ganhe força",
      "Fire attacks muito efetivos",
      "Não deixar ele matar muitos summons",
      "Relativamente fácil com time"
    ],
    loot: [
      { item: "Collector's Doll", chance: "Raro", value: "25kk+" },
      { item: "Soul Orb", chance: "Raro", value: "15kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "the-shatterer": {
    slug: "the-shatterer",
    name: "The Shatterer",
    tier: "A",
    category: "Quest Boss",
    hp: 350000,
    exp: 85000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Secret Library",
    coordinates: "x:33500, y:32300, z:11",
    accessQuest: "The Secret Library",
    accessQuestSlug: "secret-library",
    recommendedLevel: 450,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: { "Physical": 20, "Death": 15 },
    immunities: ["Paralysis", "Energy"],
    mechanics: [
      "Shatters items - chance de quebrar equipamento",
      "Earthquake - dano em área grande",
      "Summons Stone Golems",
      "Rock Throw - ranged attack"
    ],
    tips: [
      "Use equipment barato - pode quebrar!",
      "Physical attacks mais efetivos",
      "Ficar longe para evitar Earthquake",
      "Team coordenado recomendado"
    ],
    loot: [
      { item: "Shattered Helmet", chance: "Muito Raro", value: "70kk+" },
      { item: "Stone Shield", chance: "Raro", value: "50kk+" },
      { item: "Gold Token", chance: "Raro", value: "25k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Shatterer Slayer"]
  },

  "the-wretched-one": {
    slug: "the-wretched-one",
    name: "The Wretched One",
    tier: "B",
    category: "Quest Boss",
    hp: 140000,
    exp: 38000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Roshamuul Dungeons",
    coordinates: "x:33700, y:32000, z:9",
    accessQuest: "Roshamuul Quest",
    accessQuestSlug: "roshamuul-quest",
    recommendedLevel: 320,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Holy": 25, "Fire": 20 },
    immunities: ["Paralysis", "Death", "Earth"],
    mechanics: [
      "Corruption - transforma jogadores em mutated rats",
      "Poison Bomb",
      "Summons Wretched Creatures",
      "Life Drain"
    ],
    tips: [
      "Use Holy attacks - muito efetivos",
      "Ficar longe para evitar corruption",
      "Matar summons rapidamente",
      "Equipamento de Poison protection ajuda"
    ],
    loot: [
      { item: "Wretched Hood", chance: "Raro", value: "30kk+" },
      { item: "Mutated Tissue", chance: "Raro", value: "20kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "the-countess-sorrow": {
    slug: "the-countess-sorrow",
    name: "The Countess Sorrow",
    tier: "A",
    category: "Quest Boss",
    hp: 250000,
    exp: 60000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Vengoth",
    coordinates: "x:32900, y:32300, z:8",
    accessQuest: "Blood Brothers",
    accessQuestSlug: "blood-brothers",
    recommendedLevel: 380,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: { "Holy": 30, "Fire": 20 },
    immunities: ["Paralysis", "Death"],
    mechanics: [
      "Life Drain Beam",
      "Summons Vampires",
      "Sorrow - chance de paralyze + damage",
      "Teleporta para blood puddles"
    ],
    tips: [
      "Holy attacks muito efetivos",
      "Ficar diagonal para evitar beams",
      "Matar summons - eles curam ela",
      "Time coordenado recomendado"
    ],
    loot: [
      { item: "Countess Sorrow's Amulet", chance: "Muito Raro", value: "55kk+" },
      { item: "Vampire Silk", chance: "Raro", value: "35kk+" },
      { item: "Gold Token", chance: "Raro", value: "25k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Outfit: Vampire Addon"]
  },

  // === DAILY BOSSES ===
  "leshy": {
    slug: "leshy",
    name: "Leshy",
    tier: "A",
    category: "Daily Boss",
    hp: 160000,
    exp: 40000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Kilmaresh",
    coordinates: "x:33800, y:32400, z:7",
    accessQuest: "Kilmaresh Quest",
    accessQuestSlug: "kilmaresh-quest",
    recommendedLevel: 300,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Fire": 20, "Holy": 15 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Nature's Wrath - dano em área com nature",
      "Summons Dryads",
      "Root - prende players no chão",
      "Life Drain"
    ],
    tips: [
      "Use Fire attacks - nature weakness",
      "Matar summons - eles curam ele",
      "Não fique nas roots",
      "Pode ser feito solo com equipamento bom"
    ],
    loot: [
      { item: "Leshy's Branch", chance: "Raro", value: "25kk+" },
      { item: "Nature Essence", chance: "Raro", value: "15kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "glooth-golem": {
    slug: "glooth-golem",
    name: "Glooth Golem",
    tier: "B",
    category: "Daily Boss",
    hp: 90000,
    exp: 28000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Rathleton Factory",
    coordinates: "x:33400, y:31900, z:8",
    accessQuest: "Oramond Quest",
    accessQuestSlug: "oramond-quest",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Fácil",
    weaknesses: { "Energy": 25, "Fire": 20 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Glooth Throw - ranged attack com glooth",
      "Earthquake - dano em área",
      "Summons Glooth Elementals",
      "Explosion em morte"
    ],
    tips: [
      "Energy attacks muito efetivos",
      "Ficar longe para evitar Explosion na morte",
      "Matar summons se acumular",
      "Boss fácil e rápido"
    ],
    loot: [
      { item: "Glooth Gear", chance: "Raro", value: "20kk+" },
      { item: "Maxilla Maximus", chance: "Muito Raro", value: "50kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "burster": {
    slug: "burster",
    name: "Burster",
    tier: "B",
    category: "Daily Boss",
    hp: 85000,
    exp: 26000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Hive Outpost",
    coordinates: "x:32200, y:32100, z:8",
    accessQuest: "The Hive Quest",
    accessQuestSlug: "hive-quest",
    recommendedLevel: 240,
    maxPlayers: 5,
    difficulty: "Fácil",
    weaknesses: { "Fire": 30, "Holy": 20 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Poison Bomb",
      "Summons Hive Borns",
      "Life Drain",
      "Burster Explosion - dano em área quando HP baixo"
    ],
    tips: [
      "Use Fire attacks - muito efetivos",
      "Ficar longe quando HP baixo - explosion",
      "Matar summons rapidamente",
      "Pode ser feito solo facilmente"
    ],
    loot: [
      { item: "Burster's Shell", chance: "Raro", value: "18kk+" },
      { item: "Poison Sac", chance: "Raro", value: "12kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "magma-crawler": {
    slug: "magma-crawler",
    name: "Magma Crawler",
    tier: "A",
    category: "Daily Boss",
    hp: 130000,
    exp: 35000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Krailos",
    coordinates: "x:34000, y:31800, z:9",
    accessQuest: "Krailos Quest",
    accessQuestSlug: "krailos-quest",
    recommendedLevel: 280,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Ice": 30, "Earth": 20 },
    immunities: ["Paralysis", "Fire"],
    mechanics: [
      "Fire Wave - onda de fogo",
      "Lava Geyser - cria geysers de lava no chão",
      "Summons Lava Crawlers",
      "Fire Bomb"
    ],
    tips: [
      "Use Ice attacks - muito efetivos",
      "Não ficar nos geysers - dano forte",
      "Ficar em movimento constante",
      "Matar summons quando necessário"
    ],
    loot: [
      { item: "Magma Coat", chance: "Raro", value: "30kk+" },
      { item: "Fire Essence", chance: "Raro", value: "20kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "flimsy-forest-fungus": {
    slug: "flimsy-forest-fungus",
    name: "Flimsy Forest Fungus",
    tier: "C",
    category: "Daily Boss",
    hp: 45000,
    exp: 15000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Feyrist",
    coordinates: "x:32700, y:32300, z:6",
    accessQuest: "Feyrist Quest",
    accessQuestSlug: "feyrist-quest",
    recommendedLevel: 150,
    maxPlayers: 3,
    difficulty: "Fácil",
    weaknesses: { "Fire": 35, "Energy": 25 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Spore Cloud - reduz visibilidade",
      "Summons Mushrooms",
      "Poison",
      "Earth damage"
    ],
    tips: [
      "Use Fire attacks - muito efetivos",
      "Pode ser feito solo facilmente",
      "Spore Cloud é só inconveniente visual",
      "Boss bom para low levels"
    ],
    loot: [
      { item: "Fungal Rod", chance: "Raro", value: "10kk+" },
      { item: "Mushroom Cap", chance: "Raro", value: "8kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  // === RAID BOSSES ===
  "xenia": {
    slug: "xenia",
    name: "Xenia",
    tier: "A",
    category: "Raid Boss",
    hp: 220000,
    exp: 55000,
    cooldown: "Random Raid",
    cooldownHours: 168,
    location: "Venore, near dragon lair",
    coordinates: "x:32900, y:32200, z:7",
    accessQuest: "None",
    recommendedLevel: 350,
    maxPlayers: 12,
    difficulty: "Difícil",
    weaknesses: { "Holy": 25, "Ice": 20 },
    immunities: ["Paralysis", "Fire"],
    mechanics: [
      "Fire Wave",
      "Summons Dragons",
      "Fire Ball",
      "Corre em red HP"
    ],
    tips: [
      "Use Holy attacks",
      "Matar summons rapidamente",
      "Ficar diagonal para evitar waves",
      "Raid boss - muitos players ajudam"
    ],
    loot: [
      { item: "Dragon Scale Mail", chance: "Muito Raro", value: "80kk+" },
      { item: "Dragon Shield", chance: "Raro", value: "40kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Dragon Slayer"]
  },

  "undead-dragon": {
    slug: "undead-dragon",
    name: "Undead Dragon",
    tier: "A",
    category: "Raid Boss",
    hp: 180000,
    exp: 48000,
    cooldown: "Random Raid",
    cooldownHours: 168,
    location: "Drefia, underground",
    coordinates: "x:33000, y:32200, z:9",
    accessQuest: "None",
    recommendedLevel: 320,
    maxPlayers: 10,
    difficulty: "Difícil",
    weaknesses: { "Holy": 35, "Fire": 25 },
    immunities: ["Paralysis", "Death", "Ice"],
    mechanics: [
      "Death Wave",
      "Summons Ghosts",
      "Life Drain",
      "Paralyze"
    ],
    tips: [
      "Holy attacks muito efetivos",
      "Ficar diagonal para evitar waves",
      "Matar summons rapidamente",
      "Raid boss - mais players facilita"
    ],
    loot: [
      { item: "Undead Dragon Scale", chance: "Muito Raro", value: "60kk+" },
      { item: "Ghost Lantern", chance: "Raro", value: "35kk+" },
      { item: "Crystal Coin", chance: "Raro", value: "100k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Undead Slayer"]
  },

  "hydra": {
    slug: "hydra",
    name: "Hydra",
    tier: "B",
    category: "Raid Boss",
    hp: 140000,
    exp: 38000,
    cooldown: "Random Raid",
    cooldownHours: 72,
    location: "Phoenis, Hydra Cave",
    coordinates: "x:33100, y:32400, z:8",
    accessQuest: "None",
    recommendedLevel: 250,
    maxPlayers: 8,
    difficulty: "Médio",
    weaknesses: { "Fire": 40, "Energy": 25 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Water Wave - onda de água",
      "Energy Wave - onda de energy",
      "Summons Hydras",
      "Life Drain"
    ],
    tips: [
      "Fire attacks muito efetivos",
      "Ficar diagonal para evitar waves",
      "Matar summons se acumular",
      "Pode ser feito em time pequeno"
    ],
    loot: [
      { item: "Hydra Head", chance: "Raro", value: "25kk+" },
      { item: "Dragon Scale Mail", chance: "Muito Raro", value: "80kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "the-old-widow": {
    slug: "the-old-widow",
    name: "The Old Widow",
    tier: "B",
    category: "Raid Boss",
    hp: 120000,
    exp: 34000,
    cooldown: "Random Raid",
    cooldownHours: 72,
    location: "Corym Catacombs",
    coordinates: "x:32800, y:32500, z:9",
    accessQuest: "None",
    recommendedLevel: 230,
    maxPlayers: 8,
    difficulty: "Médio",
    weaknesses: { "Fire": 45, "Energy": 20 },
    immunities: ["Paralysis", "Earth", "Poison"],
    mechanics: [
      "Poison Bomb",
      "Summons Spiders",
      "Web Shot - prende players",
      "Life Drain"
    ],
    tips: [
      "Use Fire attacks - spider weakness",
      "Não fique preso nas webs",
      "Matar summons rapidamente",
      "Raid boss - mais players facilita"
    ],
    loot: [
      { item: "Widow's Fang", chance: "Raro", value: "22kk+" },
      { item: "Spider Silk", chance: "Raro", value: "18kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  // === MINI BOSSES ===
  "mysterious-hermit": {
    slug: "mysterious-hermit",
    name: "Mysterious Hermit",
    tier: "C",
    category: "Mini Boss",
    hp: 35000,
    exp: 12000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Isle of Mists",
    coordinates: "x:32300, y:32100, z:7",
    accessQuest: "The Inquisition",
    accessQuestSlug: "inquisition-quest",
    recommendedLevel: 120,
    maxPlayers: 3,
    difficulty: "Fácil",
    weaknesses: { "Holy": 30, "Fire": 20 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Mana Drain",
      "Summons Hermit Crabs",
      "Poison",
      "Life Drain"
    ],
    tips: [
      "Use Holy attacks",
      "Matar summons",
      "Boss fácil e rápido",
      "Bom para low levels"
    ],
    loot: [
      { item: "Hermit's Staff", chance: "Raro", value: "8kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "stone-devourer": {
    slug: "stone-devourer",
    name: "Stone Devourer",
    tier: "C",
    category: "Mini Boss",
    hp: 40000,
    exp: 14000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Hive",
    coordinates: "x:32200, y:32150, z:9",
    accessQuest: "The Hive",
    accessQuestSlug: "hive-quest",
    recommendedLevel: 140,
    maxPlayers: 3,
    difficulty: "Fácil",
    weaknesses: { "Fire": 35, "Holy": 25 },
    immunities: ["Paralysis", "Earth"],
    mechanics: [
      "Rock Throw",
      "Earthquake",
      "Summons Stone Golems",
      "Physical damage alto"
    ],
    tips: [
      "Use Fire attacks",
      "Ficar longe para evitar Earthquake",
      "Matar summons",
      "Pode ser feito solo"
    ],
    loot: [
      { item: "Stone Essence", chance: "Raro", value: "10kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "the-hunger": {
    slug: "the-hunger",
    name: "The Hunger",
    tier: "B",
    category: "Mini Boss",
    hp: 95000,
    exp: 28000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Roshamuul",
    coordinates: "x:33600, y:32000, z:8",
    accessQuest: "Roshamuul",
    accessQuestSlug: "roshamuul-quest",
    recommendedLevel: 280,
    maxPlayers: 3,
    difficulty: "Médio",
    weaknesses: { "Holy": 25, "Fire": 20 },
    immunities: ["Paralysis", "Death", "Earth"],
    mechanics: [
      "Life Drain",
      "Summons Fleshslicer",
      "Blood Wave",
      "Rage - aumenta dano"
    ],
    tips: [
      "Use Holy attacks",
      "Matar summons rapidamente",
      "Ficar diagonal para evitar Blood Wave",
      "Team pequeno recomendado"
    ],
    loot: [
      { item: "Hunger's Tooth", chance: "Raro", value: "20kk+" },
      { item: "Blood Vial", chance: "Raro", value: "15kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  "coldheart": {
    slug: "coldheart",
    name: "Coldheart",
    tier: "A",
    category: "Mini Boss",
    hp: 150000,
    exp: 38000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Ice Islands",
    coordinates: "x:32200, y:32300, z:9",
    accessQuest: "Ice Islands Quest",
    accessQuestSlug: "ice-islands-quest",
    recommendedLevel: 320,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Fire": 40, "Energy": 25 },
    immunities: ["Paralysis", "Ice"],
    mechanics: [
      "Ice Wave",
      "Frost Bomb - slows players",
      "Summons Frost Golems",
      "Life Drain"
    ],
    tips: [
      "Use Fire attacks - muito efetivos",
      "Ficar longe para evitar slow",
      "Matar summons",
      "Pode ser feito em time pequeno"
    ],
    loot: [
      { item: "Coldheart's Shield", chance: "Raro", value: "35kk+" },
      { item: "Frost Heart", chance: "Raro", value: "25kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  }
};

// Helper functions
export function getNewBossBySlug(slug: string): BossData | undefined {
  return newBossesDatabase[slug];
}

export function getNewBossesByTier(tier: BossData["tier"]): BossData[] {
  return Object.values(newBossesDatabase).filter(b => b.tier === tier);
}

export function getNewBossesByCategory(category: BossData["category"]): BossData[] {
  return Object.values(newBossesDatabase).filter(b => b.category === category);
}

export function getAllNewBosses(): BossData[] {
  return Object.values(newBossesDatabase);
}

export function totalNewBosses(): number {
  return Object.keys(newBossesDatabase).length;
}
