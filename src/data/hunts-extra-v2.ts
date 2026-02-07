// Hunts adicionais v2 - Low, Mid e High Level
// Adicionar este arquivo ao hunts.ts com import

import { HuntData } from "./hunts";

export const extraHuntsV2: Record<string, HuntData> = {
  // === LOW LEVEL (1-50) ===
  "goblins-edron": {
    slug: "goblins-edron",
    name: "Goblins (Edron)",
    tier: "C",
    levelRange: "1-20",
    location: "Edron (Goblin Cave)",
    rawExp: "120k",
    baseProfit: 20,
    weakness: "Energy",
    access: {
      howToGet: ["1. Edron", "2. Cave nordeste da cidade", "3. Desça para level -2"]
    },
    monsters: [
      {
        name: "Goblin",
        hp: 50,
        exp: 25,
        damage: "Physical",
        weaknesses: { "Energy": 10 } as Record<string, number>,
        immunities: [],
        bestiaryKills: 500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-15", discard: false },
          { item: "Small Stone", chance: "20%", value: "50gp", discard: false },
          { item: "Dagger", chance: "5%", value: "100gp", discard: false },
          { item: "Leather Helmet", chance: "2%", value: "200gp", discard: false }
        ]
      },
      {
        name: "Goblin Assassin",
        hp: 90,
        exp: 65,
        damage: "Physical, Poison",
        weaknesses: { "Energy": 10 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-25", discard: false },
          { item: "Studded Shield", chance: "3%", value: "300gp", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Steel Sword",
      weaponLevel: 8,
      helmet: "Leather Helmet",
      armor: "Chain Armor",
      legs: "Studded Legs",
      boots: "Boots of Haste",
      shield: "Dwarven Shield",
      amulet: "Garlic Necklace",
      ring: "Sword Ring"
    },
    imbuements: {
      weapon: ["Vampirism"],
      armor: [],
      helmet: []
    },
    charms: ["Freeze"],
    rotation: ["Percorra as salas em espiral"],
    dangers: ["⚠️ Goblins em grupo podem sobrecarregar", "⚠️ Goblin Assassin ataca de longe"],
    tips: ["💡 Ideal para levels 1-20", "💡 Use Energy weapon se possível"],
    alternatives: ["Trolls (Edron)", "Wolves (Thais)"]
  },
  "trolls-edron": {
    slug: "trolls-edron",
    name: "Trolls (Edron)",
    tier: "C",
    levelRange: "1-25",
    location: "Edron (Troll Cave)",
    rawExp: "150k",
    baseProfit: 25,
    weakness: "Fire",
    access: {
      howToGet: ["1. Edron", "2. Cave norte da cidade", "3. Entre na caverna"]
    },
    monsters: [
      {
        name: "Troll",
        hp: 40,
        exp: 20,
        damage: "Physical",
        weaknesses: { "Fire": 10 },
        immunities: ["Fire"],
        bestiaryKills: 500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-10", discard: false },
          { item: "Club", chance: "10%", value: "50gp", discard: false },
          { item: "Trollroot", chance: "8%", value: "150gp", discard: false }
        ]
      },
      {
        name: "Troll Champion",
        hp: 90,
        exp: 65,
        damage: "Physical",
        weaknesses: { "Fire": 10 },
        immunities: ["Fire"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-30", discard: false },
          { item: "Battle Shield", chance: "2%", value: "500gp", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Steel Axe",
      weaponLevel: 10,
      helmet: "Viking Helmet",
      armor: "Brass Armor",
      legs: "Studded Legs",
      boots: "Leather Boots",
      shield: "Dwarven Shield",
      amulet: "Bronze Amulet",
      ring: "Power Ring"
    },
    imbuements: {
      weapon: ["Vampirism"],
      armor: [],
      helmet: []
    },
    charms: ["Wound"],
    rotation: ["Cave linear - vá até o final e retorne"],
    dangers: ["⚠️ Trolls em grupo"],
    tips: ["💡 Use Fire weapon (trolls são imunes mas é melhor para os mobs ao redor)"],
    alternatives: ["Goblins (Edron)", "Rotworms (Liberty Bay)"]
  },
  "rotworms-liberty-bay": {
    slug: "rotworms-liberty-bay",
    name: "Rotworms (Liberty Bay)",
    tier: "C",
    levelRange: "8-50",
    location: "Liberty Bay (Rotworm Cave)",
    rawExp: "400k",
    baseProfit: 80,
    weakness: "Fire",
    access: {
      howToGet: ["1. Barco para Liberty Bay", "2. Cave sudeste da ilha", "3. Desça até -2 ou -3"]
    },
    monsters: [
      {
        name: "Rotworm",
        hp: 65,
        exp: 40,
        damage: "Physical, Earth",
        weaknesses: { "Fire": 10 },
        immunities: ["Earth"],
        bestiaryKills: 500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-17", discard: false },
          { item: "Meat", chance: "50%", value: "5gp", discard: true },
          { item: "Lump of Dirt", chance: "10%", value: "100gp", discard: false },
          { item: "Chain Armor", chance: "1%", value: "400gp", discard: false }
        ]
      },
      {
        name: "Carrion Worm",
        hp: 250,
        exp: 150,
        damage: "Physical, Poison, Earth",
        weaknesses: { "Fire": 10 },
        immunities: ["Earth"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-47", discard: false },
          { item: "Scarab Shield", chance: "2%", value: "3k", discard: false },
          { item: "Carrion Worm Fang", chance: "5%", value: "200gp", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Fire Sword",
      weaponLevel: 30,
      helmet: "Doublet",
      armor: "Scale Armor",
      legs: "Legion Helmet",
      boots: "Boots of Haste",
      shield: "Scarab Shield",
      amulet: "Garlic Necklace",
      ring: "Power Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Fire"],
      armor: [],
      helmet: []
    },
    charms: ["Wound"],
    rotation: ["Ficar no -2 ou -3 onde tem mais spawns"],
    dangers: ["⚠️ Poison dos Carrion Worms", "⚠️ Earth damage em área"],
    tips: ["💡 Use Fire weapon ou Imbue Fire", "💡 Ficar no level mais fundo é melhor XP"],
    alternatives: ["Dwarfs (Kazordoon)", "Wolves (Thais)"]
  },

  // === MID LEVEL (50-150) ===
  "cyclops-mount-sternum": {
    slug: "cyclops-mount-sternum",
    name: "Cyclops (Mount Sternum)",
    tier: "B",
    levelRange: "50-100",
    location: "Mount Sternum (Cyclops Camp)",
    rawExp: "1.2kk",
    baseProfit: 150,
    weakness: "Death",
    access: {
      howToGet: ["1. Port Hope", "2. Ir para Mount Sternum", "3. Entrar na caverna principal"]
    },
    monsters: [
      {
        name: "Cyclops",
        hp: 260,
        exp: 150,
        damage: "Physical",
        weaknesses: { "Death": 5, "Earth": 15 },
        immunities: [],
        bestiaryKills: 500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-47", discard: false },
          { item: "Meat", chance: "50%", value: "5gp", discard: true },
          { item: "Cyclops Toe", chance: "8%", value: "200gp", discard: false }
        ]
      },
      {
        name: "Cyclops Drone",
        hp: 600,
        exp: 450,
        damage: "Physical",
        weaknesses: { "Death": 5, "Earth": 15 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-120", discard: false },
          { item: "Cyclops Shield", chance: "1%", value: "5k", discard: false }
        ]
      },
      {
        name: "Cyclops Smith",
        hp: 700,
        exp: 570,
        damage: "Physical, Fire",
        weaknesses: { "Death": 5, "Earth": 15 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-150", discard: false },
          { item: "Knight Armor", chance: "1%", value: "10k", discard: false }
        ]
      },
      {
        name: "Behemoth",
        hp: 4000,
        exp: 2500,
        damage: "Physical",
        weaknesses: { "Death": 1, "Earth": 10 },
        immunities: ["Paralysis"],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-255", discard: false },
          { item: "Behemoth Claw", chance: "10%", value: "1k", discard: false },
          { item: "Titan Axe", chance: "0.5%", value: "15k", discard: false },
          { item: "Behemoth Trophy", chance: "0.1%", value: "50k", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Avenger",
      weaponLevel: 75,
      helmet: "Crusader Helmet",
      armor: "Knight Armor",
      legs: "Crown Legs",
      boots: "Boots of Haste",
      shield: "Cyclops Shield",
      amulet: "Glorious Amulet",
      ring: "Energy Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void"],
      armor: ["Dragon Hide (Fire)"],
      helmet: []
    },
    charms: ["Wound"],
    rotation: ["Percorrer o andar principal de forma linear"],
    dangers: ["⚠️ Behemoth é muito forte - evitar se não estiver preparado"],
    tips: ["💡 Use Earth weapon ou Imbue Earth", "💡 Kill o Behemoth por último se possível"],
    alternatives: ["Orcs (Orc Fortress)", "Dragons (Darashia)"]
  },
  "orcs-fortress": {
    slug: "orcs-fortress",
    name: "Orcs (Orc Fortress)",
    tier: "B",
    levelRange: "50-120",
    location: "Orc Fortress (Ulderek's Rock)",
    rawExp: "1.5kk",
    baseProfit: 180,
    weakness: "Death",
    access: {
      howToGet: ["1. Thais", "2. Ir para Orc Fortress", "3. Entrar na fortaleza principal"]
    },
    monsters: [
      {
        name: "Orc",
        hp: 100,
        exp: 50,
        damage: "Physical",
        weaknesses: { "Fire": 10, "Death": 10, "Energy": 5 },
        immunities: [],
        bestiaryKills: 500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-28", discard: false },
          { item: "Meat", chance: "50%", value: "5gp", discard: true },
          { item: "Minotaur Leather", chance: "10%", value: "100gp", discard: false }
        ]
      },
      {
        name: "Orc Warrior",
        hp: 200,
        exp: 115,
        damage: "Physical",
        weaknesses: { "Fire": 10, "Death": 10, "Energy": 5 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-90", discard: false },
          { item: "Fish", chance: "50%", value: "5gp", discard: true },
          { item: "Brass Armor", chance: "0.5%", value: "500gp", discard: false }
        ]
      },
      {
        name: "Orc Berserker",
        hp: 435,
        exp: 290,
        damage: "Physical",
        weaknesses: { "Fire": 10, "Death": 10, "Energy": 5 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-100", discard: false },
          { item: "Orcish Axe", chance: "2%", value: "1k", discard: false }
        ]
      },
      {
        name: "Orc Shaman",
        hp: 300,
        exp: 240,
        damage: "Physical, Earth, Fire",
        weaknesses: { "Fire": 10, "Death": 10, "Energy": 5 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-80", discard: false },
          { item: "Fire Mushroom", chance: "5%", value: "200gp", discard: false }
        ]
      },
      {
        name: "Orc Warlord",
        hp: 950,
        exp: 670,
        damage: "Physical",
        weaknesses: { "Death": 5, "Fire": 10, "Energy": 10 },
        immunities: [],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-90", discard: false },
          { item: "Crusader Helmet", chance: "0.8%", value: "6k", discard: false },
          { item: "Thunder Hammer", chance: "0.1%", value: "50k", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "War Hammer",
      weaponLevel: 70,
      helmet: "Crown Helmet",
      armor: "Knight Armor",
      legs: "Crown Legs",
      boots: "Boots of Haste",
      shield: "Vampire Shield",
      amulet: "Strange Talisman",
      ring: "Dwarven Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void"],
      armor: ["Dragon Hide (Fire)"],
      helmet: []
    },
    charms: ["Wound"],
    rotation: ["Percorrer cada andar de forma linear"],
    dangers: ["⚠️ Orc Warlord é forte - tenha cuidado", "⚠️ Orc Shamans usam magia"],
    tips: ["💡 Use Death weapon ou Imbue Death", "💡 Kill Shamans primeiro"],
    alternatives: ["Cyclops (Mount Sternum)", "Dragons (Darashia)"]
  },
  "dragons-darashia": {
    slug: "dragons-darashia",
    name: "Dragons (Darashia)",
    tier: "B",
    levelRange: "60-150",
    location: "Darashia (Dragon Lair)",
    rawExp: "2.5kk",
    baseProfit: 200,
    weakness: "Ice",
    access: {
      howToGet: ["1. Port Hope", "2. Darashia", "3. Dragon Lair norte da cidade"]
    },
    monsters: [
      {
        name: "Dragon",
        hp: 1000,
        exp: 700,
        damage: "Physical, Fire",
        weaknesses: { "Ice": 10 },
        immunities: ["Fire"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-110", discard: false },
          { item: "Dragon Ham", chance: "60%", value: "50gp", discard: true },
          { item: "Dragon Scale Mail", chance: "0.5%", value: "15k", discard: false },
          { item: "Dragon Shield", chance: "0.3%", value: "20k", discard: false }
        ]
      },
      {
        name: "Dragon Hatchling",
        hp: 1300,
        exp: 1300,
        damage: "Physical, Fire",
        weaknesses: { "Ice": 10 },
        immunities: ["Fire"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-150", discard: false },
          { item: "Dragon Scale Mail", chance: "1%", value: "15k", discard: false }
        ]
      },
      {
        name: "Dragon Lord",
        hp: 1900,
        exp: 2100,
        damage: "Physical, Fire",
        weaknesses: { "Ice": 10 },
        immunities: ["Fire", "Paralysis"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-195", discard: false },
          { item: "Dragon Lord Trophy", chance: "0.8%", value: "25k", discard: false },
          { item: "Royal Helmet", chance: "0.2%", value: "30k", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Crystal Sword",
      weaponLevel: 80,
      helmet: "Royal Helmet",
      armor: "Dragon Scale Mail",
      legs: "Golden Legs",
      boots: "Boots of Haste",
      shield: "Dragon Shield",
      amulet: "Stone Skin Amulet",
      ring: "Energy Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Ice"],
      armor: ["Dragon Hide (Fire)"],
      helmet: []
    },
    charms: ["Enflame"],
    rotation: ["Ficar no Dragon Lord Lair para melhor loot", "Ou percorrer salas de Dragons normais"],
    dangers: ["⚠️ Dragon Lords são muito fortes", "⚠️ Dano de Fire alto em área"],
    tips: ["💡 Use Ice weapon ou Imbue Ice", "💡 Magic Shield é essencial contra Dragon Lords"],
    alternatives: ["Frost Dragons (Formorgar)", "Hydras (Port Hope)"]
  },

  // === HIGH LEVEL (150+) ===
  "demon-edron": {
    slug: "demon-edron",
    name: "Demons (Edron Hero Cave)",
    tier: "A",
    levelRange: "150-300",
    location: "Edron (Hero Cave - Demons)",
    rawExp: "4.5kk",
    baseProfit: 300,
    weakness: "Holy",
    access: {
      quest: "Hero Quest",
      howToGet: ["1. Edron", "2. Hero Cave", "3. Portal para Demons"]
    },
    monsters: [
      {
        name: "Demon",
        hp: 8200,
        exp: 6000,
        damage: "Physical, Fire, Energy, Life Drain",
        weaknesses: { "Holy": 12, "Ice": 10 },
        immunities: ["Fire", "Paralysis", "Invisibility"],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-310", discard: false },
          { item: "Demonic Essence", chance: "10%", value: "2k", discard: false },
          { item: "Demon Horn", chance: "5%", value: "5k", discard: false },
          { item: "Demon Trophy", chance: "0.1%", value: "500k", discard: false },
          { item: "Demonrage Sword", chance: "0.05%", value: "1kk", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 150,
      helmet: "Golden Helmet",
      armor: "Golden Armor",
      legs: "Golden Legs",
      boots: "Golden Boots",
      shield: "Mastermind Shield",
      amulet: "Glowing Ruby",
      ring: "Ring of Healing"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Holy"],
      armor: ["Dragon Hide (Fire)"],
      helmet: ["Void"]
    },
    charms: ["Enflame", "Freeze"],
    rotation: ["Spawn único - mate o Demon"],
    dangers: ["⚠️ Demon é muito forte", "⚠️ Dano de Life Drain e Mana Drain"],
    tips: ["💡 Use Holy weapon ou Imbue Holy", "💡 Mana Shield é essencial", "💡 Exori San quando possível"],
    alternatives: ["Ferumbras Tower (Ferumbras)", "Demon Forge (Goroma)"]
  },
  "giant-spiders-port-hope": {
    slug: "giant-spiders-port-hope",
    name: "Giant Spiders (Port Hope)",
    tier: "A",
    levelRange: "180-400",
    location: "Port Hope (Spider Crypt)",
    rawExp: "5.2kk",
    baseProfit: 280,
    weakness: "Fire",
    access: {
      howToGet: ["1. Port Hope", "2. Spider Crypt", "3. Desça até Giant Spiders"]
    },
    monsters: [
      {
        name: "Giant Spider",
        hp: 1300,
        exp: 900,
        damage: "Physical, Earth",
        weaknesses: { "Fire": 15 },
        immunities: ["Earth", "Invisibility"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-115", discard: false },
          { item: "Poison Arrow", chance: "25%", value: "4gp", discard: true },
          { item: "Platinum Amulet", chance: "0.3%", value: "5k", discard: false }
        ]
      },
      {
        name: "Gloom Wraith",
        hp: 1550,
        exp: 1300,
        damage: "Physical, Death, Earth",
        weaknesses: { "Fire": 10 },
        immunities: ["Earth", "Invisibility", "Paralysis"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-150", discard: false },
          { item: "Mystic Turban", chance: "0.2%", value: "30k", discard: false }
        ]
      },
      {
        name: "Pale Count",
        hp: 8100,
        exp: 4800,
        damage: "Physical, Death, Life Drain, Mana Drain",
        weaknesses: { "Holy": 10, "Fire": 5 },
        immunities: ["Earth", "Invisibility", "Paralysis"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-310", discard: false },
          { item: "Vampire Shield", chance: "0.5%", value: "30k", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 180,
      helmet: "Mystic Turban",
      armor: "Golden Armor",
      legs: "Golden Legs",
      boots: "Golden Boots",
      shield: "Mystic Shield",
      amulet: "Terra Amulet",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Fire"],
      armor: ["Snake Skin (Earth)"],
      helmet: ["Void"]
    },
    charms: ["Enflame", "Freeze"],
    rotation: ["Percorrer as salas de Giant Spiders", "Pale Count é raro"],
    dangers: ["⚠️ Poison muito forte - bringa antidotes", "⚠️ Pale Count é muito forte", "⚠️ Death damage"],
    tips: ["💡 Use Fire weapon ou Imbue Fire", "💡 Terra Protection é essencial", "💡 Antidotes e Magic Shield obrigatórios"],
    alternatives: ["Hydras (Port Hope)", "Wyverns (Venore)"]
  },
  "hydras-port-hope": {
    slug: "hydras-port-hope",
    name: "Hydras (Port Hope)",
    tier: "A",
    levelRange: "200-400",
    location: "Port Hope (Hydra Stairs)",
    rawExp: "5.8kk",
    baseProfit: 350,
    weakness: "Energy",
    access: {
      howToGet: ["1. Port Hope", "2. Hydra Stairs", "3. Desça até Hydras"]
    },
    monsters: [
      {
        name: "Hydra",
        hp: 2300,
        exp: 2100,
        damage: "Physical, Fire, Earth",
        weaknesses: { "Energy": 10 },
        immunities: ["Ice", "Paralysis"],
        bestiaryKills: 1000,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-180", discard: false },
          { item: "Fire Mushroom", chance: "5%", value: "200gp", discard: false },
          { item: "Dragon Slayer", chance: "0.5%", value: "100k", discard: false }
        ]
      },
      {
        name: "Elder Hydra",
        hp: 8200,
        exp: 6600,
        damage: "Physical, Fire, Earth",
        weaknesses: { "Energy": 10 },
        immunities: ["Ice", "Paralysis"],
        bestiaryKills: 2500,
        loot: [
          { item: "Gold Coin", chance: "100%", value: "1-310", discard: false },
          { item: "Hydra Egg", chance: "2%", value: "3k", discard: false }
        ]
      }
    ],
    recommendedSet: {
      weapon: "Mace of Destruction",
      weaponLevel: 200,
      helmet: "Mystic Turban",
      armor: "Golden Armor",
      legs: "Golden Legs",
      boots: "Golden Boots",
      shield: "Mystic Shield",
      amulet: "Terra Amulet",
      ring: "Prismatic Ring"
    },
    imbuements: {
      weapon: ["Vampirism", "Void", "Energy"],
      armor: ["Dragon Hide (Fire)"],
      helmet: ["Void"]
    },
    charms: ["Enflame", "Freeze"],
    rotation: ["Percorrer as salas de Hydras", "Elder Hydra é raro"],
    dangers: ["⚠️ Hydras são muito fortes", "⚠️ Elder Hydra é extremamente forte", "⚠️ Dano de Fire e Earth"],
    tips: ["💡 Use Energy weapon ou Imbue Energy", "💡 Terra Protection é essencial", "💡 Magic Shield obrigatório"],
    alternatives: ["Frost Dragons (Formorgar)", "Giant Spiders (Port Hope)"]
  }
};
