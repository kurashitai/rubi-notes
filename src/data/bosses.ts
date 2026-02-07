// Bosses Database - Rubi-Notes
// Database completa de bosses do Rubinot

export interface BossLoot {
  item: string;
  chance: "Comum" | "Raro" | "Muito Raro";
  value: string;
  dropRate?: string; // percentual estimado
}

export interface BossData {
  slug: string;
  name: string;
  image?: string;
  tier: "S" | "A" | "B" | "C"; // S = Essencial, C = Opcional
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
  maxPlayers: number; // 1 = soloable
  difficulty: "Fácil" | "Médio" | "Difícil" | "Muito Difícil" | "Extremo";
  weaknesses: Record<string, number>;
  immunities: string[];
  mechanics: string[];
  tips: string[];
  loot: BossLoot[];
  rewards?: string[]; // outros rewards além de loot (achievement, outfit, etc)
  videoGuide?: string;
}

export const bossesDatabase: Record<string, BossData> = {
  // === TIER S - ESSENCIAIS ===
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
  "yielothax": {
    slug: "yielothax",
    name: "Yielothax",
    tier: "S",
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
  "oberon": {
    slug: "oberon",
    name: "Grand Master Oberon",
    tier: "S",
    category: "Quest Boss",
    hp: 280000,
    exp: 40000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Falcon Bastion",
    coordinates: "33.520, 31.400, +2",
    accessQuest: "The Secret Library (Falcon Bastion)",
    accessQuestSlug: "secret-library",
    recommendedLevel: 300,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: { "Physical": 10, "Death": 5 },
    immunities: ["Paralysis", "Invisibility"],
    mechanics: [
      "1. Entre na sala e ignore os summons inicialmente.",
      "2. Bata no Oberon até ele gritar frases específicas.",
      "3. Quando ele gritar 'THE END IS COMING!', responda com 'DEATH TO THE TRAITOR!'",
      "4. Quando gritar 'I WILL BE THE GRAND MASTER!', responda 'YOU WERE NEVER A REAL KNIGHT!'",
      "5. Quando gritar 'ARE YOU EVER GOING TO FIGHT?', responda 'THEN LET US PROVE IT, OBERON!'",
      "6. Repita 3 vezes as respostas corretas para quebrar a imunidade."
    ],
    tips: [
      "Decore as frases antes de entrar (ou deixe em um bloco de notas)",
      "Morra todas as criaturas antes de focar o boss é opcional",
      "O boss pode ser feito solo com level 350+"
    ],
    loot: [
      { item: "Falcon Longsword", chance: "Muito Raro", value: "50kk+" },
      { item: "Falcon Mace", chance: "Muito Raro", value: "50kk+" },
      { item: "Falcon Battleaxe", chance: "Muito Raro", value: "50kk+" },
      { item: "Falcon Bow", chance: "Muito Raro", value: "40kk+" },
      { item: "Falcon Wand", chance: "Muito Raro", value: "40kk+" },
      { item: "Falcon Rod", chance: "Muito Raro", value: "40kk+" },
      { item: "Falcon Escutcheon", chance: "Muito Raro", value: "30kk+" },
      { item: "Grant of Arms", chance: "Raro", value: "2kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Oberon Slayer"]
  },
  "scarlett": {
    slug: "scarlett",
    name: "Scarlett Etzel",
    tier: "S",
    category: "Quest Boss",
    hp: 350000,
    exp: 45000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Cobra Bastion",
    coordinates: "33.390, 32.670, +3",
    accessQuest: "Grave Danger",
    accessQuestSlug: "grave-danger",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: {},
    immunities: ["Physical", "Death", "Fire", "Ice", "Energy", "Earth", "Holy"],
    mechanics: [
      "1. A Scarlett é IMUNE a dano direto!",
      "2. Observe os espelhos no chão - eles brilham periodicamente.",
      "3. Faça ela andar sobre os espelhos quando estiverem brilhando.",
      "4. Quando a armadura quebrar (ela muda de sprite), ataque com tudo.",
      "5. A janela de dano dura ~5 segundos, depois ela fica imune de novo.",
      "6. Repita 4-5 vezes até matar."
    ],
    tips: [
      "Leve muita paciência - é um boss de mecânica, não de DPS",
      "Use exeta res para controlar posicionamento",
      "O boss pode levar 10-20 minutos dependendo da sua precisão"
    ],
    loot: [
      { item: "Cobra Sword", chance: "Muito Raro", value: "80kk+" },
      { item: "Cobra Axe", chance: "Muito Raro", value: "80kk+" },
      { item: "Cobra Club", chance: "Muito Raro", value: "80kk+" },
      { item: "Cobra Crossbow", chance: "Muito Raro", value: "60kk+" },
      { item: "Cobra Wand", chance: "Muito Raro", value: "50kk+" },
      { item: "Cobra Rod", chance: "Muito Raro", value: "50kk+" },
      { item: "Cobra Hood", chance: "Muito Raro", value: "40kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Cobra Slayer", "Outfit: Cobra"]
  },
  "drume": {
    slug: "drume",
    name: "Drume",
    tier: "S",
    category: "Quest Boss",
    hp: 300000,
    exp: 42000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Lion Sanctum (Bounac)",
    coordinates: "32.440, 31.890, +1",
    accessQuest: "The Order of the Lion",
    accessQuestSlug: "order-of-the-lion",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Physical": 15, "Death": 10 },
    immunities: [],
    mechanics: [
      "1. Mate os commanders (leões) primeiro se estiverem incomodando.",
      "2. Leve o Drume para o canto norte da sala.",
      "3. O boss é relativamente simples - tank and spank.",
      "4. Cuidado com o dano de Holy em área."
    ],
    tips: [
      "Boss mais fácil entre os tier S",
      "Pode ser feito solo com level 300+",
      "Lion Set é muito valioso - faça diariamente"
    ],
    loot: [
      { item: "Lion Hammer", chance: "Muito Raro", value: "100kk+" },
      { item: "Lion Longsword", chance: "Muito Raro", value: "80kk+" },
      { item: "Lion Axe", chance: "Muito Raro", value: "80kk+" },
      { item: "Lion Plate", chance: "Muito Raro", value: "60kk+" },
      { item: "Lion Spangenhelm", chance: "Muito Raro", value: "40kk+" },
      { item: "Lion Shield", chance: "Raro", value: "20kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Lion Slayer"]
  },
  "timira": {
    slug: "timira",
    name: "Timira the Many-Headed",
    tier: "S",
    category: "Quest Boss",
    hp: 400000,
    exp: 50000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Naga City (Ingol)",
    coordinates: "33.800, 32.100, -2",
    accessQuest: "The Primal Ordeal",
    recommendedLevel: 300,
    maxPlayers: 5,
    difficulty: "Difícil",
    weaknesses: { "Fire": 10, "Energy": 10 },
    immunities: ["Ice"],
    mechanics: [
      "1. Foque em matar a Timira rapidamente na primeira fase.",
      "2. Quando ela sumir e invocar cópias, identifique a verdadeira.",
      "3. A verdadeira causa mais dano quando atacada.",
      "4. Evite ficar na frente das waves de água.",
      "5. Mate as cópias se necessário, mas foque na original."
    ],
    tips: [
      "As waves de água causam muito dano - evite!",
      "Leve Magic Shield ativo durante toda a fight",
      "Boss exige atenção constante às mecânicas"
    ],
    loot: [
      { item: "Naga Sword", chance: "Muito Raro", value: "30kk+" },
      { item: "Naga Axe", chance: "Muito Raro", value: "30kk+" },
      { item: "Naga Club", chance: "Muito Raro", value: "30kk+" },
      { item: "Naga Crossbow", chance: "Muito Raro", value: "25kk+" },
      { item: "Naga Wand", chance: "Muito Raro", value: "20kk+" },
      { item: "Naga Rod", chance: "Muito Raro", value: "20kk+" },
      { item: "Timira's Egg", chance: "Raro", value: "1kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Hydra Slayer"]
  },

  // === TIER A - IMPORTANTES ===
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
    coordinates: "x:33800, y:32100, z:8",
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
      "Time coordenado recomendado"
    ],
    loot: [
      { item: "Shattered Helmet", chance: "Muito Raro", value: "70kk+" },
      { item: "Stone Shield", chance: "Raro", value: "50kk+" },
      { item: "Gold Token", chance: "Raro", value: "25k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Shatterer Slayer"]
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
  },
  "tentugly": {
    slug: "tentugly",
    name: "Tentugly's Head",
    tier: "A",
    category: "Daily Boss",
    hp: 180000,
    exp: 28000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Rathleton (Glooth Factory)",
    accessQuest: "Oramond Quest (Dark Trails)",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Fire": 10, "Energy": 5 },
    immunities: ["Earth"],
    mechanics: [
      "1. Boss simples de 'tank and spank'.",
      "2. Evite ficar na frente (wave de Earth forte).",
      "3. Mate os summons se necessário.",
      "4. Requer 300 votos em Oramond para acessar o atalho."
    ],
    tips: [
      "Boss fácil e rápido",
      "Glooth Set vale a pena fazer diariamente",
      "Pode ser feito solo com level 200+"
    ],
    loot: [
      { item: "Maxilla Maximus", chance: "Muito Raro", value: "5kk" },
      { item: "Glooth Backpack", chance: "Raro", value: "500k" },
      { item: "Glooth Blade", chance: "Muito Raro", value: "3kk" },
      { item: "Glooth Club", chance: "Muito Raro", value: "3kk" },
      { item: "Glooth Axe", chance: "Muito Raro", value: "3kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },
  "leiden": {
    slug: "leiden",
    name: "Count Vlarkorth",
    tier: "A",
    category: "Quest Boss",
    hp: 200000,
    exp: 32000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Leiden (Grave Danger)",
    accessQuest: "Grave Danger",
    accessQuestSlug: "grave-danger",
    recommendedLevel: 250,
    maxPlayers: 5,
    difficulty: "Médio",
    weaknesses: { "Holy": 15, "Fire": 10 },
    immunities: ["Death"],
    mechanics: [
      "1. Não deixe ele pisar nos sqms vermelhos (vida).",
      "2. Cada vez que ele pisa no vermelho, ele cura muito.",
      "3. Use exeta res para controlar posicionamento.",
      "4. Boss fácil se você não deixar ele curar."
    ],
    tips: [
      "Boss de mecânica simples mas irritante se curar muito",
      "Posicionamento é chave",
      "Pode ser feito solo com level 250+"
    ],
    loot: [
      { item: "Final Judgement", chance: "Muito Raro", value: "15kk" },
      { item: "Vampire Lord Token", chance: "Raro", value: "1kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Vampire Hunter"]
  },
  "doctor-perhaps": {
    slug: "doctor-perhaps",
    name: "Doctor Perhaps",
    tier: "A",
    category: "Quest Boss",
    hp: 150000,
    exp: 25000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Darashia (Grave Danger)",
    accessQuest: "Grave Danger",
    accessQuestSlug: "grave-danger",
    recommendedLevel: 200,
    maxPlayers: 5,
    difficulty: "Fácil",
    weaknesses: { "Holy": 10 },
    immunities: ["Death", "Earth"],
    mechanics: [
      "1. Boss simples de tank and spank.",
      "2. Mate os summons (zumbis) primeiro.",
      "3. Evite as pools de veneno no chão."
    ],
    tips: [
      "Boss mais fácil do Grave Danger",
      "Bom para começar a farm de Tokens",
      "Solo friendly"
    ],
    loot: [
      { item: "Soulful Legs", chance: "Muito Raro", value: "10kk" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: []
  },

  // === TIER B - OPCIONAIS ===
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
  "man-in-the-cave": {
    slug: "man-in-the-cave",
    name: "Man in the Cave",
    tier: "B",
    category: "Quest Boss",
    hp: 100000,
    exp: 30000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Cave of Faceless One",
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
  "gaz-haragoth": {
    slug: "gaz-haragoth",
    name: "Gaz'haragoth",
    tier: "B",
    category: "World Boss",
    hp: 500000,
    exp: 80000,
    cooldown: "2 semanas",
    cooldownHours: 336,
    location: "Warzone 6 (Feyrist)",
    accessQuest: "Feaster of Souls",
    accessQuestSlug: "feaster-of-souls",
    recommendedLevel: 400,
    maxPlayers: 20,
    difficulty: "Extremo",
    weaknesses: { "Holy": 20 },
    immunities: ["Death", "Paralysis", "Invisibility"],
    mechanics: [
      "1. Boss de grupo - requer coordenação.",
      "2. Várias fases com mecânicas diferentes.",
      "3. Cada fase requer eliminação de adds.",
      "4. Na fase final, todos devem atacar ao mesmo tempo."
    ],
    tips: [
      "Requer time organizado",
      "Melhor fazer com guilda",
      "Drops muito valiosos"
    ],
    loot: [
      { item: "Heavy Mace", chance: "Muito Raro", value: "200kk+" },
      { item: "Demonwing Axe", chance: "Muito Raro", value: "150kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Achievement: Demon Slayer"]
  },
  "the-baron": {
    slug: "the-baron",
    name: "The Baron from Below",
    tier: "B",
    category: "Quest Boss",
    hp: 120000,
    exp: 18000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Vengoth Castle",
    accessQuest: "Blood Brothers",
    recommendedLevel: 180,
    maxPlayers: 5,
    difficulty: "Fácil",
    weaknesses: { "Fire": 15, "Holy": 10 },
    immunities: ["Death"],
    mechanics: [
      "1. Boss simples de tank and spank.",
      "2. Cuidado com o Life Drain."
    ],
    tips: [
      "Boss fácil e rápido",
      "Bom para low levels",
      "Drop de outfit addon"
    ],
    loot: [
      { item: "Vampire Lord Token", chance: "Raro", value: "500k" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Outfit Addon: Vampire"]
  },

  // === MINI BOSSES ===
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
  "urmahlullu": {
    slug: "urmahlullu",
    name: "Urmahlullu the Weakened",
    tier: "A",
    category: "Mini Boss",
    hp: 50000,
    exp: 15000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Kilmaresh (Ivory Towers)",
    accessQuest: "Kilmaresh Quest",
    recommendedLevel: 200,
    maxPlayers: 1,
    difficulty: "Fácil",
    weaknesses: { "Death": 15, "Ice": 10 },
    immunities: ["Holy"],
    mechanics: [
      "1. Boss simples de tank and spank.",
      "2. Pode ser feito solo facilmente."
    ],
    tips: [
      "Fazer diariamente para Kilmaresh reputation",
      "Drop de Lion Set é possível"
    ],
    loot: [
      { item: "Lion Items (low tier)", chance: "Raro", value: "1kk+" },
      { item: "Silver Token", chance: "Comum", value: "10k" }
    ],
    rewards: ["Kilmaresh Reputation"]
  },
  "werelion-midnight": {
    slug: "werelion-midnight",
    name: "King Zelos",
    tier: "S",
    category: "Quest Boss",
    hp: 450000,
    exp: 55000,
    cooldown: "20h",
    cooldownHours: 20,
    location: "Cursed Forge (Soul War)",
    accessQuest: "Soul War Quest",
    recommendedLevel: 400,
    maxPlayers: 5,
    difficulty: "Muito Difícil",
    weaknesses: { "Holy": 10 },
    immunities: ["Death", "Paralysis"],
    mechanics: [
      "1. Boss com múltiplas fases e mecânicas complexas.",
      "2. Requer time coordenado.",
      "3. Na fase final, DPS máximo é necessário.",
      "4. Cuidado com as áreas de dano no chão."
    ],
    tips: [
      "Boss mais difícil do jogo",
      "Drops são os melhores do jogo",
      "Requer muita prática"
    ],
    loot: [
      { item: "Soulshredder", chance: "Muito Raro", value: "500kk+" },
      { item: "Soulcrusher", chance: "Muito Raro", value: "500kk+" },
      { item: "Soulpiercer", chance: "Muito Raro", value: "400kk+" },
      { item: "Soulbleeder", chance: "Muito Raro", value: "400kk+" },
      { item: "Souleater", chance: "Muito Raro", value: "400kk+" },
      { item: "Soul Token", chance: "Comum", value: "50k" }
    ],
    rewards: ["Achievement: Soul War Champion", "Outfit: Soul War"]
  },
  // === EXTRA BOSSES ===
  "infernatilextra": {
    slug: "infernatilextra",
    name: "Infernatil",
    tier: "A",
    category: "Raid Boss",
    hp: 45000,
    exp: 150000,
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
      { item: "Infernal Blade", chance: "Raro", value: "150k" },
      { item: "Infernal Shield", chance: "Raro", value: "120k" },
      { item: "Infernal Trophy", chance: "Muito Raro", value: "300k" },
      { item: "Platinum Coin", chance: "Comum", value: "35k" }
    ]
  },
  "gazharagoth": {
    slug: "gazharagoth",
    name: "Gaz'haragoth",
    tier: "S",
    category: "Raid Boss",
    hp: 85000,
    exp: 350000,
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
      { item: "Gaz'haragoth Armor", chance: "Muito Raro", value: "500k" },
      { item: "Gaz'haragoth Shield", chance: "Muito Raro", value: "400k" },
      { item: "Gaz'haragoth Sword", chance: "Raro", value: "350k" },
      { item: "Gaz'haragoth Trophy", chance: "Muito Raro", value: "600k" },
      { item: "Platinum Coin", chance: "Comum", value: "60k" }
    ]
  },
  "shardheadextra": {
    slug: "shardheadextra",
    name: "Shardhead",
    tier: "B",
    category: "Quest Boss",
    hp: 25000,
    exp: 80000,
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
      { item: "Frozen Helmet", chance: "Raro", value: "80k" },
      { item: "Ice Rapier", chance: "Raro", value: "70k" },
      { item: "Shardhead Trophy", chance: "Raro", value: "150k" },
      { item: "Platinum Coin", chance: "Comum", value: "12k" }
    ]
  },
  "morgaroth": {
    slug: "morgaroth",
    name: "Morgaroth",
    tier: "S",
    category: "World Boss",
    hp: 120000,
    exp: 500000,
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
      { item: "Morgaroth's Helmet", chance: "Muito Raro", value: "1000k" },
      { item: "Morgaroth's Shield", chance: "Muito Raro", value: "800k" },
      { item: "Morgaroth's Sword", chance: "Muito Raro", value: "900k" },
      { item: "Morgaroth Trophy", chance: "Muito Raro", value: "1200k" },
      { item: "Golden Amulet", chance: "Raro", value: "100k" },
      { item: "Platinum Coin", chance: "Comum", value: "150k" }
    ]
  },
  "the-abomination": {
    slug: "the-abomination",
    name: "The Abomination",
    tier: "B",
    category: "Quest Boss",
    hp: 18000,
    exp: 45000,
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
      { item: "Abomination Shield", chance: "Raro", value: "60k" },
      { item: "Abomination Trophy", chance: "Raro", value: "80k" },
      { item: "Platinum Coin", chance: "Comum", value: "8k" }
    ]
  },
  "ferumbras": {
    slug: "ferumbras",
    name: "Ferumbras",
    tier: "S",
    category: "Raid Boss",
    hp: 150000,
    exp: 700000,
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
      { item: "Ferumbras' Hat", chance: "Muito Raro", value: "3000k" },
      { item: "Ferumbras' Shield", chance: "Muito Raro", value: "2500k" },
      { item: "Ferumbras' Sword", chance: "Muito Raro", value: "2000k" },
      { item: "Ferumbras Trophy", chance: "Muito Raro", value: "5000k" },
      { item: "Golden Amulet", chance: "Raro", value: "200k" },
      { item: "Platinum Coin", chance: "Comum", value: "500k" }
    ],
    rewards: ["Achievement: Ferumbras' Bane", "Outfit: Ferumbras' Minion"]
  },
};

// Helper functions
export function getBossbySlug(slug: string): BossData | undefined {
  return bossesDatabase[slug];
}

export function getBossesByTier(tier: BossData["tier"]): BossData[] {
  return Object.values(bossesDatabase).filter(b => b.tier === tier);
}

export function getBossesByCategory(category: BossData["category"]): BossData[] {
  return Object.values(bossesDatabase).filter(b => b.category === category);
}

export function getSoloableBosses(): BossData[] {
  return Object.values(bossesDatabase).filter(b => b.maxPlayers === 1 || b.difficulty === "Fácil");
}

export function getAllBosses(): BossData[] {
  return Object.values(bossesDatabase);
}

export function searchBosses(query: string): BossData[] {
  const q = query.toLowerCase();
  return Object.values(bossesDatabase).filter(b =>
    b.name.toLowerCase().includes(q) ||
    b.location.toLowerCase().includes(q) ||
    (b.accessQuest && b.accessQuest.toLowerCase().includes(q))
  );
}

// Categories list
export const bossCategories = [
  "World Boss",
  "Raid Boss",
  "Quest Boss",
  "Mini Boss",
  "Daily Boss"
] as const;

export const bossTiers = ["S", "A", "B", "C"] as const;
