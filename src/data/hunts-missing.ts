import { HuntData } from "./hunts";

export const huntsDatabaseMissing: Record<string, HuntData> = {
  // --- BATCH FINAL: MISSING HUNTS ---
  "dark-cathedral": {
    slug: "dark-cathedral",
    name: "Dark Cathedral",
    tier: "C",
    levelRange: "30-50",
    location: "Poh (Outlaw Camp)",
    rawExp: "60k",
    baseProfit: 5,
    weakness: "Holy",
    access: {
      quest: "Livre",
      requirements: ["Rope"],
      howToGet: ["Venore -> South -> Outlaw Camp -> Dark Cathedral"],
    },
    monsters: [
      { name: "Dark Monk", hp: 190, exp: 145, damage: "Physical", weaknesses: { Holy: 10 }, immunities: ["Invisibility"], bestiaryKills: 500, loot: [] },
      { name: "Assassin", hp: 175, exp: 105, damage: "Physical", weaknesses: { Holy: 0 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Witch", hp: 300, exp: 120, damage: "Fire", weaknesses: { Physical: 5 }, immunities: ["Fire"], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: { weapon: "Bright Sword", weaponLevel: 30, helmet: "Crusader Helmet", armor: "Knight Armor", legs: "Knight Legs", boots: "Boots of Haste", shield: "Tower Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["GS lurada no caminho.", "Muitos bichos nos andares inferiores."],
    tips: ["Rope Belts dropam de Dark Monks (Profit)."],
    alternatives: ["Mount Sternum"]
  },
  "tombs-ankrahmun": {
    slug: "tombs-ankrahmun",
    name: "Tombs (Ankrahmun)",
    tier: "C",
    levelRange: "40-80",
    location: "Ankrahmun Desert",
    rawExp: "80k",
    baseProfit: 0,
    weakness: "Holy/Fire",
    access: {
      quest: "Livre (Acesso básico)",
      requirements: ["Shovel", "Scarab Coin (para passar da chama)"],
      howToGet: ["Deserto de Ankrahmun (Várias tumbas: Peninsula, Oasis, etc)."],
    },
    monsters: [
      { name: "Vampire", hp: 475, exp: 305, damage: "Life Drain", weaknesses: { Fire: 10, Holy: 10 }, immunities: ["Death"], bestiaryKills: 1000, loot: [{ item: "Vampire Teeth", chance: "10%", value: "2k" }] },
      { name: "Demon Skeleton", hp: 400, exp: 240, damage: "Physical", weaknesses: { Holy: 25 }, immunities: ["Fire", "Death"], bestiaryKills: 500, loot: [] },
      { name: "Crypt Shambler", hp: 330, exp: 195, damage: "Physical", weaknesses: { Holy: 10 }, immunities: ["Earth"], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: { weapon: "Fire Sword", weaponLevel: 40, helmet: "Crusader Helmet", armor: "Golden Armor", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "Vampire Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Stalkers invisíveis.", "Vampires drenam vida."],
    tips: ["Vampire Teeth valem muito.", "Cuidado após a chama (andares profundos)."],
    alternatives: ["Yalahar Cemetery"]
  },
  "cyclops-mistrock": {
    slug: "cyclops-mistrock",
    name: "Cyclops (Mistrock)",
    tier: "C",
    levelRange: "30-60",
    location: "Yalahar (Mistrock)",
    rawExp: "90k",
    baseProfit: 5,
    weakness: "Death",
    access: {
      quest: "Livre",
      requirements: ["Acesso a Yalahar"],
      howToGet: ["Barco de Yalahar -> Mistrock."],
    },
    monsters: [
      { name: "Cyclops", hp: 260, exp: 150, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Cyclops Smith", hp: 435, exp: 255, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Cyclops Drone", hp: 325, exp: 200, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: { weapon: "Bright Sword", weaponLevel: 30, helmet: "Crusader Helmet", armor: "Knight Armor", legs: "Knight Legs", boots: "Boots of Haste", shield: "Tower Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Smiths batem forte."],
    tips: ["Stealth Ring funciona.", "Enorme quantidade de monstros."],
    alternatives: ["Cyclopolis"]
  },
  "coryms-venore": {
    slug: "coryms-venore",
    name: "Coryms (Venore)",
    tier: "B",
    levelRange: "40-70",
    location: "Venore (Swamp)",
    rawExp: "110k",
    baseProfit: 10,
    weakness: "Fire",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Saída leste de Venore -> Caverna no pântano."],
    },
    monsters: [
      { name: "Corym Skirmisher", hp: 450, exp: 260, damage: "Physical", weaknesses: { Fire: 10 }, immunities: [], bestiaryKills: 1000, loot: [] },
      { name: "Corym Vanguard", hp: 700, exp: 450, damage: "Physical", weaknesses: { Fire: 10 }, immunities: [], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Fire Weapon", weaponLevel: 40, helmet: "Crusader Helmet", armor: "Golden Armor", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "Demon Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Vanguards batem forte.", "Invisibilidade não funciona."],
    tips: ["Creature products valem bem.", "Ótima XP para level baixo."],
    alternatives: ["Port Hope Coryms"]
  },
  "banuta-surface": {
    slug: "banuta-surface",
    name: "Banuta Surface",
    tier: "C",
    levelRange: "50-90",
    location: "Port Hope (Banuta)",
    rawExp: "120k",
    baseProfit: 15,
    weakness: "Fire",
    access: {
      quest: "The Ape City (Missão 1)",
      requirements: [],
      howToGet: ["Port Hope -> Banuta (Térreo e torres)."],
    },
    monsters: [
      { name: "Kongra", hp: 340, exp: 115, damage: "Physical", weaknesses: { Fire: 10 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Ape Fur", chance: "5%", value: "High" }] },
      { name: "Sibang", hp: 225, exp: 105, damage: "Physical", weaknesses: { Fire: 10 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Ape Fur", chance: "5%", value: "High" }] },
      { name: "Merlkin", hp: 235, exp: 145, damage: "Magic", weaknesses: { Fire: 10 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Ape Fur", chance: "5%", value: "High" }] }
    ],
    recommendedSet: { weapon: "Fire Weapon", weaponLevel: 50, helmet: "Zaoan Helmet", armor: "DSM", legs: "Zaoan Legs", boots: "BOH", shield: "Demon Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Merlkins combam magicamente.", "Muitos bichos correm."],
    tips: ["Ape Fur vale muito (Imbuement/Addon)."],
    alternatives: ["Laguna Islands"]
  }
};
