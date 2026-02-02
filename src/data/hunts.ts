export const RUBINOT_LOOT_RATE = 2.5;
export const RUBINOT_BESTIARY_RATE = 2; // 2x bestiary

export interface Monster {
  name: string;
  hp: number;
  exp: number;
  damage: string;
  weaknesses: Record<string, number>;
  immunities: string[];
  bestiaryKills: number; // kills base
  loot: { item: string; chance: string; value: string; discard?: boolean }[];
  ignore?: boolean;
  ignoreReason?: string;
}

export interface HuntData {
  slug: string;
  name: string;
  tier: string;
  levelRange: string;
  location: string;
  rawExp: string;
  baseProfit: number;
  weakness: string;
  access: {
    quest?: string;
    questLink?: string;
    requirements?: string[];
    howToGet: string[];
    coordinates?: string;
  };
  monsters: Monster[];
  recommendedSet: {
    weapon: string;
    weaponLevel: number;
    helmet: string;
    armor: string;
    legs: string;
    boots: string;
    shield: string;
    amulet: string;
    ring: string;
  };
  imbuements: {
    weapon: string[];
    armor: string[];
    helmet: string[];
  };
  charms: string[];
  rotation?: string[];
  dangers: string[];
  tips: string[];
  alternatives: string[];
  videoGuide?: string;
  groupVersion?: string;
}

export const huntsDatabase: Record<string, HuntData> = {
  "weretigers": {
    slug: "weretigers",
    name: "Weretigers",
    tier: "S",
    levelRange: "400-500+",
    location: "Oskayaat",
    rawExp: "5.1kk+",
    baseProfit: 360,
    weakness: "Death +25%",
    access: {
      quest: "Paradise Lost Quest",
      questLink: "/quests/paradise-lost",
      requirements: [
        "Level 250+ recomendado",
        "Completar mosaicos nas caves",
      ],
      howToGet: [
        "1. Vá para Issavi (barco de qualquer cidade costeira)",
        "2. Use o tapete mágico para Oskayaat (norte de Issavi)",
        "3. Entre na cave de Weretigers (coordenadas: 33.123, 32.456, 7)",
        "4. Desça para o -1 ou -2 conforme seu level",
      ],
      coordinates: "33.123, 32.456, 7",
    },
    monsters: [
      {
        name: "Weretiger",
        hp: 4200,
        exp: 3800,
        damage: "0-650 (Physical, Holy)",
        weaknesses: { "Death": 25, "Holy": 15, "Earth": 5, "Fire": -30, "Energy": -25, "Ice": -10 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-200 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-5 pc" },
          { item: "Weretiger Tooth", chance: "15%", value: "~500 gp", discard: false },
          { item: "Striped Fur", chance: "12%", value: "~1k gp", discard: false },
          { item: "Sabretooth", chance: "5%", value: "~3k gp", discard: false },
          { item: "Meat", chance: "20%", value: "5 gp", discard: true },
          { item: "Ham", chance: "15%", value: "10 gp", discard: true },
        ],
      },
      {
        name: "White Weretiger",
        hp: 5800,
        exp: 5200,
        damage: "0-800 (Physical, Holy, Ice)",
        weaknesses: { "Death": 20, "Holy": 15, "Earth": 5, "Fire": -60, "Energy": -40, "Ice": -25 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-250 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-8 pc" },
          { item: "White Piece of Cloth", chance: "10%", value: "~2k gp", discard: false },
          { item: "Weretiger Tooth", chance: "18%", value: "~500 gp", discard: false },
          { item: "Fur Armor", chance: "1%", value: "~5k gp", discard: false },
          { item: "Meat", chance: "20%", value: "5 gp", discard: true },
        ],
      },
      {
        name: "Cunning Werepanther",
        hp: 3800,
        exp: 3400,
        damage: "0-550 (Physical)",
        weaknesses: { "Death": 25, "Holy": 15, "Earth": 10, "Fire": -20, "Energy": -20, "Ice": -10 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-180 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-4 pc" },
          { item: "Panther Paw", chance: "12%", value: "~800 gp", discard: false },
          { item: "Black Fur", chance: "8%", value: "~1.5k gp", discard: false },
          { item: "Meat", chance: "25%", value: "5 gp", discard: true },
        ],
        ignore: false,
      },
    ],
    recommendedSet: {
      weapon: "Mortal Mace",
      weaponLevel: 220,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Pair of Dreamwalkers",
      shield: "Falcon Shield",
      amulet: "Collar of Red Plasma",
      ring: "Ring of Red Plasma",
    },
    imbuements: {
      weapon: ["Vampirism (Powerful)", "Void (Powerful)", "Strike (Powerful)"],
      armor: ["Dragon Hide (Fire Protection)", "Quara Scale (Ice Protection)"],
      helmet: ["Vampirism (Powerful)"],
    },
    charms: ["Dodge", "Wound", "Curse"],
    rotation: [
      "1. Entre pelo teleport norte",
      "2. Limpe o corredor leste (5-6 monstros)",
      "3. Siga para a sala grande ao sul",
      "4. Faça um círculo anti-horário",
      "5. Volte pelo corredor oeste",
      "6. Repita o ciclo (~3-4 min por volta)",
    ],
    dangers: [
      "⚠️ Evite boxes com 4+ White Weretigers",
      "⚠️ Cuidado com waves de Holy damage",
      "⚠️ Não fique encurralado nas esquinas",
      "⚠️ Fire/Ice damage são seus maiores inimigos aqui",
    ],
    tips: [
      "💡 Use Mortal Mace (Death +5) - maior fraqueza",
      "💡 Fire Protection é essencial (White Weretiger resiste Fire)",
      "💡 Prey de Exp no Weretiger (mais comum)",
      "💡 Charm Dodge é muito efetivo aqui",
      "💡 Lure 3-4 monstros por vez, não mais",
    ],
    alternatives: [
      "Summer Court (se Weretigers lotado)",
      "Burster Spectres (mais fácil, menos exp)",
      "Cobra Bastion (profit similar)",
    ],
    videoGuide: "https://www.youtube.com/watch?v=xVBT36cGy3c",
    groupVersion: "Com ED: Full box 8 monstros, exp 8kk+/h",
  },
  "draken-walls": {
    slug: "draken-walls",
    name: "Draken Walls",
    tier: "A",
    levelRange: "200-300",
    location: "Zao - Razachai",
    rawExp: "1.5kk",
    baseProfit: 120,
    weakness: "Earth +10%",
    access: {
      quest: "Wrath of the Emperor Quest",
      questLink: "/quests/wrath-emperor",
      requirements: [
        "Children of the Revolution Quest (completa)",
        "Wrath of the Emperor até missão 5",
      ],
      howToGet: [
        "1. Vá para Zao (barco de Venore ou Thais)",
        "2. Siga para o Dragonblaze Peaks",
        "3. Entre nas Draken Walls (norte do peaks)",
        "4. Escolha seu floor (-1 a -3 conforme level)",
      ],
      coordinates: "33.200, 31.100, 7",
    },
    monsters: [
      {
        name: "Draken Warmaster",
        hp: 4150,
        exp: 2400,
        damage: "0-450 (Physical, Fire)",
        weaknesses: { "Earth": 10, "Ice": 5, "Fire": -20 },
        immunities: ["Paralyze"],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-150 gp" },
          { item: "Platinum Coin", chance: "80%", value: "1-3 pc" },
          { item: "Draken Sulphur", chance: "15%", value: "~400 gp", discard: false },
          { item: "Warmaster's Wristguards", chance: "2%", value: "~10k gp", discard: false },
          { item: "Meat", chance: "30%", value: "5 gp", discard: true },
        ],
      },
      {
        name: "Draken Spellweaver",
        hp: 5000,
        exp: 3100,
        damage: "0-600 (Fire, Energy, Mana Drain)",
        weaknesses: { "Earth": 10, "Ice": 5, "Fire": -20, "Energy": -10 },
        immunities: ["Paralyze", "Invisibility"],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-180 gp" },
          { item: "Platinum Coin", chance: "85%", value: "1-4 pc" },
          { item: "Draken Sulphur", chance: "18%", value: "~400 gp", discard: false },
          { item: "Spellweaver's Robe", chance: "1%", value: "~15k gp", discard: false },
          { item: "Focus Cape", chance: "0.5%", value: "~50k gp", discard: false },
        ],
      },
      {
        name: "Draken Elite",
        hp: 5550,
        exp: 4200,
        damage: "0-700 (Physical, Fire, Life Drain)",
        weaknesses: { "Earth": 15, "Ice": 10, "Fire": -30 },
        immunities: ["Paralyze"],
        bestiaryKills: 1000,
        loot: [
          { item: "Platinum Coin", chance: "100%", value: "1-6 pc" },
          { item: "Draken Boots", chance: "3%", value: "~25k gp", discard: false },
          { item: "Elite Draken Mail", chance: "0.5%", value: "~80k gp", discard: false },
          { item: "Meat", chance: "25%", value: "5 gp", discard: true },
        ],
      },
    ],
    recommendedSet: {
      weapon: "Lion Hammer",
      weaponLevel: 270,
      helmet: "Zaoan Helmet",
      armor: "Ornate Chestplate",
      legs: "Ornate Legs",
      boots: "Depth Calcei",
      shield: "Ornate Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism (Powerful)", "Void (Intricate)", "Strike (Intricate)"],
      armor: ["Dragon Hide (Fire Protection)"],
      helmet: ["Void (Intricate)"],
    },
    charms: ["Dodge", "Wound", "Poison"],
    rotation: [
      "1. Entre pelo teleport do floor -1",
      "2. Limpe a sala inicial (4-5 Drakens)",
      "3. Siga pelo corredor norte",
      "4. Faça um loop pela sala grande",
      "5. Volte ao início e repita",
    ],
    dangers: [
      "⚠️ Draken Spellweavers drenam mana muito rápido",
      "⚠️ Cuidado com combos de múltiplos Elites",
      "⚠️ Fire damage é alto - use proteção",
    ],
    tips: [
      "💡 Lion Hammer (Earth +5) é ideal aqui",
      "💡 Fire Protection no armor é essencial",
      "💡 Lure 5-8 Drakens por vez",
      "💡 Foco em Draken Elite (melhor loot)",
    ],
    alternatives: [
      "Banuta Last Floor",
      "Asura Palace",
      "Glooth Bandits",
    ],
    videoGuide: "https://www.youtube.com/watch?v=VR3d4LN4rh0",
    groupVersion: "Com ED/RP: 2.5kk+/h exp",
  },
  "cobra-bastion": {
    slug: "cobra-bastion",
    name: "Cobra Bastion",
    tier: "S",
    levelRange: "300-500",
    location: "Issavi (North)",
    rawExp: "2kk",
    baseProfit: 200,
    weakness: "Physical",
    access: {
      quest: "Grave Danger Quest",
      questLink: "/quests/order-cobra",
      requirements: [
        "Level 250+",
        "Acesso liberado (sem missão específica obrigatória)",
      ],
      howToGet: [
        "1. Vá para Ankrahmun",
        "2. Saia pelo norte e siga para a direita (Grave Danger area)",
        "3. Entre no Cobra Bastion",
      ],
      coordinates: "33.xxx, 32.xxx, 7",
    },
    monsters: [
      {
        name: "Cobra Scout",
        hp: 4200,
        exp: 3800,
        damage: "0-500 (Physical, Poison)",
        weaknesses: { "Physical": 0, "Earth": 10 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-150 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-3 pc" },
          { item: "Cobra Tongue", chance: "15%", value: "~800 gp", discard: false },
          { item: "Cobra Boots", chance: "0.1%", value: "Valioso", discard: false },
        ],
      },
      {
        name: "Cobra Vizier",
        hp: 4800,
        exp: 4200,
        damage: "0-600 (Death, Earth)",
        weaknesses: { "Physical": 0, "Fire": 5 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Platinum Coin", chance: "100%", value: "1-5 pc" },
          { item: "Cobra Hood", chance: "0.05%", value: "Muito Valioso", discard: false },
        ],
      },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Cobra Boots",
      shield: "Falcon Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism (Powerful)", "Void (Powerful)", "Strike (Powerful)"],
      armor: ["Snake Skin (Earth Protection)"],
      helmet: ["Void (Powerful)"],
    },
    charms: ["Dodge", "Wound", "Zap"],
    rotation: [
      "1. Térreo: Circular as salas laterais",
      "2. Suba para +1: Limpe o salão principal",
      "3. Cuidado com o Boss Scarlett no topo",
    ],
    dangers: [
      "⚠️ Poison damage é constante e alto",
      "⚠️ Viziers drenam vida/mana",
      "⚠️ Não suba na Scarlett sem saber a mecânica",
    ],
    tips: [
      "💡 Use Earth Protection",
      "💡 Mace of Destruction é ótima aqui",
      "💡 Loot de Cobra items paga a hunt",
    ],
    alternatives: [
      "Weretigers",
      "Lion Sanctuary",
    ],
    videoGuide: "https://www.youtube.com/results?search_query=tibia+cobra+bastion+knight",
  },
  "lion-sanctuary": {
    slug: "lion-sanctuary",
    name: "Lion Sanctuary",
    tier: "S",
    levelRange: "300-500",
    location: "Issavi (West)",
    rawExp: "2kk",
    baseProfit: 200,
    weakness: "Physical",
    access: {
      quest: "The Order of the Lion",
      questLink: "/quests/order-lion",
      requirements: ["Level 250+"],
      howToGet: ["1. Vá para Bounac (barco de Issavi)", "2. Desça na Lion Rock"],
    },
    monsters: [
      {
        name: "Lion Knight",
        hp: 4500,
        exp: 4000,
        damage: "0-550 (Physical, Holy)",
        weaknesses: { "Physical": 0, "Death": 10 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [{ item: "Lion Hammer", chance: "0.1%", value: "Valioso", discard: false }],
      }
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Cobra Hood",
      armor: "Lion Plate",
      legs: "Fabulous Legs",
      boots: "Cobra Boots",
      shield: "Lion Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Demon Presence (Holy)"],
      helmet: ["Void"],
    },
    charms: ["Dodge", "Wound"],
    rotation: ["1. Cave principal: Círculo completo"],
    dangers: ["⚠️ Holy damage forte", "⚠️ Usurpers batem muito"],
    tips: ["💡 Holy Protection ajuda", "💡 Boss Drume a cada 20h"],
    alternatives: ["Cobra Bastion", "Weretigers"],
  },
  "asura-palace": {
    slug: "asura-palace",
    name: "Asura Palace",
    tier: "A",
    levelRange: "200-350",
    location: "Port Hope / Tiquanda",
    rawExp: "1.2kk",
    baseProfit: 160,
    weakness: "Physical",
    access: {
      quest: "The Asura Palace Quest",
      questLink: "/quests/asura-palace",
      requirements: ["Level 130+"],
      howToGet: [
        "1. Vá para Port Hope",
        "2. Caminhe para o leste na selva (perto da montanha)",
        "3. Entre no palácio das Asuras",
      ],
      coordinates: "32.950, 32.650, 7",
    },
    monsters: [
      {
        name: "Dawnfire Asura",
        hp: 4100,
        exp: 4100,
        damage: "0-600 (Fire, Death)",
        weaknesses: { "Physical": 10, "Ice": 0, "Death": 10, "Earth": 0, "Energy": 0 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-100 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-5 pc" },
          { item: "Ruby Necklace", chance: "5%", value: "2k gp", discard: false },
          { item: "Asura items", chance: "Variable", value: "High", discard: false },
        ],
      },
      {
        name: "Midnight Asura",
        hp: 3100,
        exp: 3100,
        damage: "0-500 (Energy, Death)",
        weaknesses: { "Physical": 10, "Earth": 0 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-100 gp" },
          { item: "Platinum Coin", chance: "100%", value: "1-5 pc" },
          { item: "Sapphire Hammer", chance: "1%", value: "5k gp", discard: false },
        ],
      },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Prismatic Legs",
      boots: "Depth Calcei",
      shield: "Prismatic Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Dragon Hide (Fire)"],
      helmet: ["Void"],
    },
    charms: ["Dodge", "Wound", "Freeze"],
    rotation: [
      "1. Térreo full box",
      "2. Suba para +1 e +2",
      "3. Desça e repita",
    ],
    dangers: [
      "⚠️ Combos de mana drain",
      "⚠️ True Asuras no espelho (não entre se não aguentar)",
    ],
    tips: [
      "💡 Dwarven Ring é essencial (drunk)",
      "💡 Ótimo profit com lootbag",
      "💡 Use Prey de XP se possível",
    ],
    alternatives: ["Draken Walls", "Banuta"],
  },
  "burster-spectres": {
    slug: "burster-spectres",
    name: "Burster Spectres",
    tier: "A",
    levelRange: "250-400",
    location: "Darashia (Haunted Nexus)",
    rawExp: "4.5kk",
    baseProfit: 200,
    weakness: "Physical",
    access: {
      quest: "Livre",
      requirements: ["Level 250+ recomendado"],
      howToGet: [
        "1. Vá para Darashia",
        "2. Siga para o norte (Haunted Nexus Tomb)",
        "3. Desça nos portais azuis",
      ],
      coordinates: "33.xxx, 32.xxx, 7",
    },
    monsters: [
      {
        name: "Burster Spectre",
        hp: 4500,
        exp: 4200,
        damage: "0-700 (Ice)",
        weaknesses: { "Physical": 0, "Fire": 5 },
        immunities: ["Ice", "Earth"],
        bestiaryKills: 2500,
        loot: [
          { item: "Platinum Coin", chance: "100%", value: "1-8 pc" },
          { item: "Hexagonal Ruby", chance: "15%", value: "30k gp", discard: false },
        ],
      },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Pair of Dreamwalkers",
      shield: "Falcon Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Quara Scale (Ice)"],
      helmet: ["Void"],
    },
    charms: ["Dodge", "Wound"],
    rotation: ["1. Sala principal em círculos"],
    dangers: [
      "⚠️ Explosion on death (Ice damage)",
      "⚠️ NUNCA use exori frigo/ice damage (eles curam/refletem!)",
    ],
    tips: [
      "💡 Ice Protection é obrigatório",
      "💡 Use CUBOS de gelo se precisar",
      "💡 Loot paga os imbuements",
    ],
    alternatives: ["Weretigers", "Draken Walls"],
  },
  "oramond-west": {
    slug: "oramond-west",
    name: "Oramond West",
    tier: "B",
    levelRange: "200-350",
    location: "Rathleton",
    rawExp: "2kk",
    baseProfit: -50,
    weakness: "Ice +10%",
    access: {
      quest: "Livre",
      requirements: ["Acesso a Oramond (via barco)"],
      howToGet: [
        "1. Pegue o barco para Oramond",
        "2. Saia da cidade pelo oeste (tubos de slime)",
      ],
    },
    monsters: [
      { name: "Glooth Blob", hp: 1000, exp: 1000, damage: "Earth", weaknesses: { "Ice": 10 }, immunities: [], bestiaryKills: 1000, loot: [] },
      { name: "Rot Elemental", hp: 1200, exp: 1200, damage: "Earth", weaknesses: { "Ice": 10 }, immunities: [], bestiaryKills: 1000, loot: [] },
      { name: "Blood Beast", hp: 1500, exp: 1500, damage: "Earth", weaknesses: { "Ice": 10 }, immunities: [], bestiaryKills: 1000, loot: [] },
    ],
    recommendedSet: {
      weapon: "Resizer",
      weaponLevel: 230,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Prismatic Legs",
      boots: "Depth Calcei",
      shield: "Prismatic Shield",
      amulet: "Werewolf Amulet",
      ring: "Prismatic Ring",
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Snake Skin (Earth)"],
      helmet: ["Void"],
    },
    charms: ["Wound", "Freeze"],
    rotation: ["Correr e bater em área. Não pare para loot."],
    dangers: [
      "⚠️ Combos altos se trapar",
      "⚠️ Quara Raid aumenta dificuldade (e xp)",
    ],
    tips: [
      "💡 Ignore loot para XP máxima",
      "💡 Use Gill Necklace se tiver Quaras",
    ],
    alternatives: ["Grim Reaper", "Banuta"],
  },
  "grim-reaper": {
    slug: "grim-reaper",
    name: "Grim Reaper",
    tier: "B",
    levelRange: "100-200",
    location: "Yalahar / Drefia",
    rawExp: "1kk",
    baseProfit: 80,
    weakness: "Holy +25%",
    access: {
      quest: "Livre",
      requirements: ["Acesso a Yalahar ou Drefia"],
      howToGet: ["1. Yalahar Cemetery Quarter (mais fácil)", "2. Drefia (mais respawn)"],
    },
    monsters: [
      {
        name: "Grim Reaper",
        hp: 3900,
        exp: 5500,
        damage: "0-600 (Physical, Death)",
        weaknesses: { "Holy": 25, "Fire": 10, "Energy": 5, "Ice": -10, "Death": -100 },
        immunities: [],
        bestiaryKills: 2500,
        loot: [{ item: "Nightmare Blade", chance: "1%", value: "35k", discard: false }, { item: "Demonic Essence", chance: "15%", value: "1k", discard: false }],
      }
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Dwarven Legs",
      boots: "Guardian Boots",
      shield: "Prismatic Shield",
      amulet: "Koshei's Ancient Amulet",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Lich Shroud (Death)"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Zap", "Divine Wrath"],
    rotation: ["Yalahar: Sala por sala com cuidado.", "Drefia: Círculos largos."],
    dangers: ["⚠️ COMBOS LETAIS! Grim Reaper bate muito.", "⚠️ Waves de Death damage."],
    tips: ["💡 Use Koshei's Amulet (Death protection)", "💡 Fire walls para segurança (se precisar)"],
    alternatives: ["Sea Serpents", "Nightmare Scion"],
  },
  "banuta-last-floor": {
    slug: "banuta-last-floor",
    name: "Banuta Last Floor",
    tier: "B",
    levelRange: "200-300",
    location: "Banuta (-4)",
    rawExp: "1.2kk",
    baseProfit: 60,
    weakness: "Variable",
    access: {
      quest: "The Ape City Quest",
      questLink: "/quests/ape-city",
      requirements: ["Missão 8 completa"],
      howToGet: ["1. Port Hope", "2. Banuta", "3. Desça até o último andar (teleport)"],
    },
    monsters: [
      { name: "Medusa", hp: 4500, exp: 4050, damage: "Earth, Life Drain", weaknesses: { "Energy": 5, "Fire": -10 }, immunities: ["Earth"], bestiaryKills: 2500, loot: [] },
      { name: "Serpent Spawn", hp: 3000, exp: 3050, damage: "Earth, Poison", weaknesses: { "Fire": 10, "Ice": -20 }, immunities: ["Earth", "Poison"], bestiaryKills: 2500, loot: [] },
      { name: "Hydra", hp: 2350, exp: 2100, damage: "Water, Earth", weaknesses: { "Energy": 10, "Physical": 5 }, immunities: ["Earth", "Paralyze"], bestiaryKills: 2500, loot: [] },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Prismatic Legs",
      boots: "Guardian Boots",
      shield: "Prismatic Shield",
      amulet: "Garlic Necklace",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Snake Skin (Earth)"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Freeze", "Zap"],
    rotation: ["Círculo completo da sala principal"],
    dangers: ["⚠️ Life drain forte (Medusas)", "⚠️ Paralyze constante"],
    tips: ["💡 Garlic Necklace contra Life Drain", "💡 Gill Necklace se tiver muitas Hydras"],
    alternatives: ["Draken Walls", "Grimvale"],
  },
  "grimvale": {
    slug: "grimvale",
    name: "Grimvale Werecreatures",
    tier: "A",
    levelRange: "100-200",
    location: "Edron (Grimvale)",
    rawExp: "700k",
    baseProfit: 150,
    weakness: "Fire/Physical",
    access: {
      quest: "Grimvale Quest (Início)",
      requirements: ["Acesso a Edron"],
      howToGet: ["1. Barco para Cormaya ou Edron", "2. Balsa para Grimvale"],
    },
    monsters: [
      { name: "Werebadger", hp: 1300, exp: 1300, damage: "Physical, Death", weaknesses: { "Death": 10, "Fire": 0 }, immunities: [], bestiaryKills: 1000, loot: [] },
      { name: "Wereboar", hp: 1600, exp: 1600, damage: "Physical", weaknesses: { "Fire": 10 }, immunities: [], bestiaryKills: 1000, loot: [] },
      { name: "Werefox", hp: 1400, exp: 1400, damage: "Physical", weaknesses: { "Physical": 10 }, immunities: ["Invisibility"], bestiaryKills: 1000, loot: [] },
    ],
    recommendedSet: {
      weapon: "Mycological Mace",
      weaponLevel: 120,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Zaoan Legs",
      boots: "Boots of Haste",
      shield: "Mastermind Shield",
      amulet: "Werewolf Amulet",
      ring: "Club Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void"],
      armor: ["Vampirism"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Enflame"],
    rotation: ["Andares -3 e -4 (com cuidado)"],
    dangers: ["⚠️ Muitos monstros juntos", "⚠️ Invisibility (Werefox)"],
    tips: ["💡 Stealth Ring funciona nos andares superiores", "💡 Loot de creature products paga a hunt"],
    alternatives: ["Hero Cave", "Lizard Chosen"],
  },
  "lizard-chosen": {
    slug: "lizard-chosen",
    name: "Lizard Chosen",
    tier: "A",
    levelRange: "150-250",
    location: "Zao (Corruption Hole)",
    rawExp: "800k",
    baseProfit: 150,
    weakness: "Ice/Physical",
    access: {
      quest: "Children of the Revolution",
      requirements: ["Missão 'Zzuppliezz' entregue"],
      howToGet: ["1. Zao Steppe", "2. Temple of Equilibrium"],
    },
    monsters: [
      { name: "Lizard Chosen", hp: 3050, exp: 2200, damage: "Physical, Earth", weaknesses: { "Ice": 10, "Physical": 0 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "Zaoan Armor", chance: "1%", value: "15k", discard: false }] },
    ],
    recommendedSet: {
      weapon: "Maimer",
      weaponLevel: 150,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Zaoan Legs",
      boots: "Guardian Boots",
      shield: "Mastermind Shield",
      amulet: "Platinum Amulet",
      ring: "Club Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void"],
      armor: ["Vampirism"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Freeze"],
    rotation: ["Sala principal com cuidado. Não lure mais que 3."],
    dangers: ["⚠️ Hit físico muito alto", "⚠️ Self-healing forte"],
    tips: ["💡 Ótimo para task", "💡 Zaoan items pagam bem"],
    alternatives: ["Grimvale", "Sea Serpents"],
  },
  "buried-cathedral": {
    slug: "buried-cathedral",
    name: "Buried Cathedral",
    tier: "S",
    levelRange: "400-600",
    location: "Roshmuul / Darashia (Portal)",
    rawExp: "5kk",
    baseProfit: 150,
    weakness: "Physical/Ice",
    access: {
      quest: "The Secret Library (Basics)",
      requirements: ["Level 250+", "Acesso via Darashia (Lion Sanctum area)"],
      howToGet: ["1. Vá para Darashia", "2. Siga para o sul (Falcon Bastion / Lion area)", "3. Entre no portal para a Cathedral"],
    },
    monsters: [
      { name: "Buried Arachnid", hp: 4800, exp: 4200, damage: "Physical, Earth", weaknesses: { "Fire": 10 }, immunities: ["Earth"], bestiaryKills: 2500, loot: [] },
      { name: "Gazer Spectre", hp: 4500, exp: 4200, damage: "Ice", weaknesses: { "Ice": 10 }, immunities: ["Fire"], bestiaryKills: 2500, loot: [] },
    ],
    recommendedSet: {
      weapon: "Resizer",
      weaponLevel: 250,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Pair of Dreamwalkers",
      shield: "Falcon Shield",
      amulet: "Collar of Red Plasma",
      ring: "Ring of Red Plasma"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Quara Scale (Ice)"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Zap"],
    rotation: ["-1 e -2 em party (4 voc). Solo só com muito cuidado no -1."],
    dangers: ["⚠️ Muito dano de Ice e Earth", "⚠️ Gazers refletem Fire"],
    tips: ["💡 Resizer é top tier aqui", "💡 Melhor em party"],
    alternatives: ["Nightmare Isle", "Prison"],
  },
  "nightmare-isle": {
    slug: "nightmare-isle",
    name: "Nightmare Isle",
    tier: "A",
    levelRange: "350-500",
    location: "Darashia / Roshamuul",
    rawExp: "4kk",
    baseProfit: 300,
    weakness: "Physical/Fire/Energy",
    access: {
      quest: "Dream Courts (opcional)",
      requirements: ["Level 200+"],
      howToGet: ["1. Darashia (tapete)", "2. Viaje para Roshamuul", "3. Portal para Nightmare Isle (Krailos/Darashia também tem acesso)"],
    },
    monsters: [
      { name: "Silencer", hp: 3200, exp: 2900, damage: "Physical, Mana Drain", weaknesses: { "Ice": 10, "Physical": 5 }, immunities: [], bestiaryKills: 2500, loot: [] },
      { name: "Shock Head", hp: 3800, exp: 3400, damage: "Energy", weaknesses: { "Earth": 10 }, immunities: ["Energy"], bestiaryKills: 2500, loot: [] },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 250,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Cobra Boots",
      shield: "Gnome Shield",
      amulet: "Collar of Red Plasma",
      ring: "Ring of Red Plasma"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Protection"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Freeze"],
    rotation: ["Círculo externo e depois interno"],
    dangers: ["⚠️ Silencers tiram MUITO magic level e mana", "⚠️ Combos físicos altos"],
    tips: ["💡 Use Might Ring se apertar", "💡 Bom loot de creature products"],
    alternatives: ["Roshamuul Prison", "Cathedral"],
  },
  "roshamuul-lower": {
    slug: "roshamuul-lower",
    name: "Roshamuul Lower",
    tier: "A",
    levelRange: "300-450",
    location: "Roshamuul",
    rawExp: "3.5kk",
    baseProfit: 400,
    weakness: "Physical/Holy",
    access: {
      quest: "Livre",
      requirements: ["Acesso a Roshamuul"],
      howToGet: ["1. Barco para Roshamuul", "2. Saia do depot e desça a rampa"],
    },
    monsters: [
      { name: "Frazzlemaw", hp: 4100, exp: 3500, damage: "Physical, Life Drain", weaknesses: { "Ice": 5, "Physical": 0 }, immunities: [], bestiaryKills: 2500, loot: [] },
      { name: "Silencer", hp: 3200, exp: 2900, damage: "Physical, Mana Drain", weaknesses: { "Ice": 10 }, immunities: [], bestiaryKills: 2500, loot: [] },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 250,
      helmet: "Zaoan Helmet",
      armor: "Prismatic Armor",
      legs: "Ornate Legs",
      boots: "Depth Calcei",
      shield: "Ornate Shield",
      amulet: "Garlic Necklace",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Vampirism"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Zap"],
    rotation: ["Entrada de Roshamuul até a ponte"],
    dangers: ["⚠️ Frazzlemaws batem muito forte no físico", "⚠️ Lures gigantes na entrada"],
    tips: ["💡 Garlic Necklace é OBRIGATÓRIO (Life Drain)", "💡 Loot de cluster of solace"],
    alternatives: ["Draken Walls", "Asuras"],
  },
  "gazzer-spectres": {
    slug: "gazzer-spectres",
    name: "Gazer Spectres",
    tier: "A",
    levelRange: "250-400",
    location: "Port Hope (Haunted Nexus)",
    rawExp: "4kk",
    baseProfit: 250,
    weakness: "Ice",
    access: {
      quest: "Dream Courts (acesso)",
      requirements: ["Level 250+"],
      howToGet: ["1. Port Hope", "2. Haunted Nexus (mesmo dos Burster)", "3. Portal Vermelho"],
    },
    monsters: [
      { name: "Gazer Spectre", hp: 4500, exp: 4200, damage: "Fire", weaknesses: { "Ice": 25 }, immunities: ["Fire", "Physical"], bestiaryKills: 2500, loot: [{ item: "Hexagonal Ruby", chance: "10%", value: "30k", discard: false }] },
    ],
    recommendedSet: {
      weapon: "Resizer",
      weaponLevel: 250,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Pair of Dreamwalkers",
      shield: "Falcon Shield",
      amulet: "Theurgic Amulet",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike"],
      armor: ["Dragon Hide (Fire)"],
      helmet: ["Void"]
    },
    charms: ["Freeze", "Wound"],
    rotation: ["Sala circular principal"],
    dangers: ["⚠️ Imune a Físico! Precisa de arma Elemental (Ice/Energy)", "⚠️ Dano de Fire alto"],
    tips: ["💡 Resizer ou Hammer of Destruction com Ice Imbue", "💡 Magma Amulet ajuda"],
    alternatives: ["Burster Spectres", "Ripper Spectres"],
  },
  "ripper-spectres": {
    slug: "ripper-spectres",
    name: "Ripper Spectres",
    tier: "A",
    levelRange: "250-400",
    location: "Port Hope (Haunted Nexus)",
    rawExp: "3.8kk",
    baseProfit: 200,
    weakness: "Fire",
    access: {
      quest: "Dream Courts (acesso)",
      requirements: ["Level 250+"],
      howToGet: ["1. Port Hope", "2. Haunted Nexus", "3. Portal Verde"],
    },
    monsters: [
      { name: "Ripper Spectre", hp: 3800, exp: 3500, damage: "Earth", weaknesses: { "Fire": 20 }, immunities: ["Earth", "Physical"], bestiaryKills: 2500, loot: [] },
      { name: "Arachnophobica", hp: 4500, exp: 4000, damage: "Physical", weaknesses: { "Fire": 10 }, immunities: [], bestiaryKills: 2500, loot: [] },
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 250,
      helmet: "Cobra Hood",
      armor: "Falcon Plate",
      legs: "Fabulous Legs",
      boots: "Cobra Boots",
      shield: "Falcon Shield",
      amulet: "Terra Amulet",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Strike (Fire)"],
      armor: ["Snake Skin (Earth)"],
      helmet: ["Void"]
    },
    charms: ["Wound", "Enflame"],
    rotation: ["Sala circular"],
    dangers: ["⚠️ Imune a Físico (Rippers)", "⚠️ Arachnophobicas batem muito no físico"],
    tips: ["💡 Use Fire weapon ou Imbue Fire", "💡 Earth Protection essencial"],
    alternatives: ["Gazer Spectres", "Burster Spectres"],
  },
};
