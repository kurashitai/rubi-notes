import { HuntData } from "./hunts";

export const huntsDatabaseExtra: Record<string, HuntData> = {
  // --- BATCH 2: MID LEVEL (50-150) ---
  "ancient-scarabs": {
    slug: "ancient-scarabs",
    name: "Ancient Scarabs (Mother of Scarabs)",
    tier: "B",
    levelRange: "50-80",
    location: "Ankrahmun (Deserto)",
    rawExp: "300k",
    baseProfit: 10,
    weakness: "Fire",
    access: {
      quest: "Livre (Acesso)",
      requirements: ["Shovel", "Rope"],
      howToGet: ["Deserto de Ankrahmun, várias entradas (Larva caves)."],
    },
    monsters: [
      { name: "Ancient Scarab", hp: 1000, exp: 720, damage: "Physical/Poison", weaknesses: { Fire: 20, Ice: 10 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "Scarab Coin", chance: "10%", value: "100gp" }, { item: "Plate Armor", chance: "5%", value: "400gp" }] },
      { name: "Bonebeast", hp: 515, exp: 580, damage: "Physical/Poison", weaknesses: { Fire: 10, Holy: 10 }, immunities: ["Death", "Earth"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: {
      weapon: "Fire Sword / Fire Axe",
      weaponLevel: 40,
      helmet: "Crusader Helmet",
      armor: "Knight Armor",
      legs: "Knight Legs",
      boots: "Boots of Haste",
      shield: "Tower Shield",
      amulet: "Platinum Amulet",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: ["Wound"],
    dangers: ["Paralyze constante (Ancients).", "Dano de terra alto."],
    tips: ["Use 'exeta res' para evitar que corram.", "Ótimo para Tasks."],
    alternatives: ["Lion's Rock"]
  },
  "cyclopolis": {
    slug: "cyclopolis",
    name: "Cyclopolis (Edron)",
    tier: "C",
    levelRange: "30-60",
    location: "Edron (Norte)",
    rawExp: "100k",
    baseProfit: 5,
    weakness: "Death",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Norte de Edron."],
    },
    monsters: [
      { name: "Cyclops", hp: 260, exp: 150, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Cyclops Smith", hp: 435, exp: 255, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Cyclops Drone", hp: 325, exp: 200, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: { weapon: "Bright Sword", weaponLevel: 30, helmet: "Crusader Helmet", armor: "Knight Armor", legs: "Knight Legs", boots: "Boots of Haste", shield: "Tower Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Smiths batem forte (drunk)."],
    tips: ["Stealth Ring funciona.", "Halberds valem 400gp (faça lootbag)."],
    alternatives: ["Mistrock"]
  },
  "mutated-humans": {
    slug: "mutated-humans",
    name: "Mutated Humans (Yalahar)",
    tier: "A",
    levelRange: "40-70",
    location: "Yalahar (Alchemist Quarter)",
    rawExp: "150k",
    baseProfit: 20,
    weakness: "Holy/Death",
    access: {
      quest: "In Service of Yalahar",
      requirements: ["Acesso a Yalahar"],
      howToGet: ["Alchemist Quarter (Portão principal ou laterais)."],
    },
    monsters: [
      { name: "Mutated Human", hp: 240, exp: 150, damage: "Physical/Death", weaknesses: { Holy: 10 }, immunities: ["Earth"], bestiaryKills: 500, loot: [{ item: "Gold Coin", chance: "100%", value: "High" }] }
    ],
    recommendedSet: { weapon: "Assassin Dagger", weaponLevel: 40, helmet: "Crusader Helmet", armor: "Golden Armor", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "Demon Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Paralyze chata.", "Muitos bichos juntos."],
    tips: ["Muito gold direto (profit garantido).", "Cuidado com Mutated Rats nos telhados."],
    alternatives: ["Bog Raiders"]
  },
  "dragons-yalahar": {
    slug: "dragons-yalahar",
    name: "Dragons (Yalahar)",
    tier: "B",
    levelRange: "50-90",
    location: "Yalahar (Foreign Quarter - Elf side)",
    rawExp: "180k",
    baseProfit: 5,
    weakness: "Ice",
    access: {
      quest: "In Service of Yalahar",
      requirements: [],
      howToGet: ["Foreign Quarter -> Elf area -> Cave de Dragons"],
    },
    monsters: [
      { name: "Dragon", hp: 1000, exp: 700, damage: "Fire/Physical", weaknesses: { Ice: 10 }, immunities: ["Fire"], bestiaryKills: 1000, loot: [{ item: "Dragon Shield", chance: "2%", value: "4k" }] },
      { name: "Dragon Hatchling", hp: 380, exp: 185, damage: "Physical", weaknesses: { Ice: 10 }, immunities: ["Fire"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Icicle (Bow) / Ice Weapon", weaponLevel: 50, helmet: "Zaoan Helmet", armor: "Dragon Scale Mail", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "Demon Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: ["Freeze"],
    dangers: ["Wave de fogo (fique na diagonal)."],
    tips: ["Pegue Dragon Tails para imbuement (valor alto)."],
    alternatives: ["Darashia Dragon Lair"]
  },
  "giant-spiders-port-hope": {
    slug: "giant-spiders-port-hope",
    name: "Giant Spiders (Port Hope)",
    tier: "B",
    levelRange: "80-120",
    location: "Port Hope (Forbidden Lands)",
    rawExp: "250k",
    baseProfit: 15,
    weakness: "Fire",
    access: {
      quest: "The Ape City (Missão 8)",
      requirements: ["Acesso a Forbidden Lands"],
      howToGet: ["Port Hope -> Banuta -> Forbidden Lands surface"],
    },
    monsters: [
      { name: "Giant Spider", hp: 1300, exp: 900, damage: "Physical", weaknesses: { Fire: 20 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "Spider Silk", chance: "15%", value: "4k" }, { item: "Knight Legs", chance: "3%", value: "5k" }] }
    ],
    recommendedSet: { weapon: "Fire Axe / Fire Sword", weaponLevel: 60, helmet: "Zaoan Helmet", armor: "Dragon Scale Mail", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "Demon Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: ["Wound", "Zap"],
    dangers: ["Haste da GS é perigoso se trapar."],
    tips: ["Spider Silks garantem o profit."],
    alternatives: ["Yalahar Cemetery Quarter"]
  },
  "cults-yalahar": {
    slug: "cults-yalahar",
    name: "Cults (Yalahar)",
    tier: "A",
    levelRange: "60-100",
    location: "Yalahar (Magician Quarter)",
    rawExp: "150k",
    baseProfit: 40,
    weakness: "Physical",
    access: {
      quest: "In Service of Yalahar",
      requirements: [],
      howToGet: ["Magician Quarter -> Dark Magician tower -> desça."],
    },
    monsters: [
      { name: "Cult Believer", hp: 190, exp: 75, damage: "Physical", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Rope Belt", chance: "20%", value: "2k" }] },
      { name: "Cult Enforcer", hp: 450, exp: 285, damage: "Physical", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Rope Belt", chance: "15%", value: "2k" }] },
      { name: "Cult Scholar", hp: 360, exp: 240, damage: "Physical/Life Drain", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Cultish Robe", chance: "5%", value: "5k" }] }
    ],
    recommendedSet: { weapon: "Heroic Axe / Mystic Blade", weaponLevel: 60, helmet: "Zaoan Helmet", armor: "DSM", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "MMS", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Invisibilidade (leve vis ou magia de área).", "Combos de Life Drain."],
    tips: ["Rope Belts valem MUITO. Farm de dinheiro."],
    alternatives: ["Goroma Cults"]
  },
  "pirates-nargor": {
    slug: "pirates-nargor",
    name: "Pirates (Nargor)",
    tier: "C",
    levelRange: "50-90",
    location: "Nargor",
    rawExp: "120k",
    baseProfit: 10,
    weakness: "Physical",
    access: {
      quest: "The Shattered Isles (Acesso a Nargor)",
      requirements: ["Meriana Quest completa"],
      howToGet: ["Barco de Liberty Bay para Meriana -> Nargor."],
    },
    monsters: [
      { name: "Pirate Corsair", hp: 675, exp: 350, damage: "Physical", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Hook", chance: "10%", value: "1k" }, { item: "Pirate Hat", chance: "0.1%", value: "Raro" }] },
      { name: "Pirate Cutthroat", hp: 425, exp: 205, damage: "Physical", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Eye Patch", chance: "10%", value: "1k" }] },
      { name: "Pirate Buccaneer", hp: 335, exp: 175, damage: "Physical", weaknesses: { Physical: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Peg Leg", chance: "10%", value: "1k" }] }
    ],
    recommendedSet: { weapon: "Heroic Axe", weaponLevel: 60, helmet: "Zaoan Helmet", armor: "DSM", legs: "Zaoan Legs", boots: "BOH", shield: "MMS", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Muitos pirates juntos quebram a defesa."],
    tips: ["Itens de addon (Hook, Eye Patch, Peg Leg) valem muito."],
    alternatives: ["Yalahar Foreign Quarter"]
  },

  // --- BATCH 3: HIGH LEVEL (150-300) ---
  "dragon-lords-fenrock": {
    slug: "dragon-lords-fenrock",
    name: "Dragon Lords (Fenrock)",
    tier: "A",
    levelRange: "130-200",
    location: "Fenrock (Yalahar)",
    rawExp: "800k",
    baseProfit: -20,
    weakness: "Ice",
    access: {
      quest: "The Hidden City of Beregar (Acesso)",
      requirements: ["Golden Mug", "Pick"],
      howToGet: ["Yalahar -> Mistrock -> Fenrock -> Desça na neve."],
    },
    monsters: [
      { name: "Dragon Lord", hp: 1900, exp: 2100, damage: "Fire", weaknesses: { Ice: 10 }, immunities: ["Fire"], bestiaryKills: 1000, loot: [{ item: "DSM", chance: "1%", value: "40k" }, { item: "RH", chance: "1%", value: "30k" }] }
    ],
    recommendedSet: { weapon: "Shiny Blade (Ice Imbue)", weaponLevel: 100, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Zaoan Legs", boots: "Guardian Boots", shield: "MMS", amulet: "Magma Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Strike"], armor: [], helmet: ["Void"] },
    charms: ["Freeze"],
    dangers: ["Waves de fogo extremamente fortes."],
    tips: ["Use Magma Amulet/Sun Catcher.", "Melhor XP solo nessa faixa."],
    alternatives: ["POI DLs", "Darashia DLs"]
  },
  "frost-dragons-okolnir": {
    slug: "frost-dragons-okolnir",
    name: "Frost Dragons (Okolnir)",
    tier: "B",
    levelRange: "150-250",
    location: "Okolnir (Svargrond)",
    rawExp: "900k",
    baseProfit: -50,
    weakness: "Fire",
    access: {
      quest: "The Ice Islands Quest (Barbarian Test)",
      requirements: ["Buddel (barqueiro bêbado)"],
      howToGet: ["Barco de Svargrond com Buddel -> 'go okolnir'."],
    },
    monsters: [
      { name: "Frost Dragon", hp: 1800, exp: 2100, damage: "Ice/Physical", weaknesses: { Fire: 25, Energy: 10 }, immunities: ["Ice"], bestiaryKills: 1000, loot: [{ item: "DSM", chance: "1%", value: "40k" }] },
      { name: "Frost Dragon Hatchling", hp: 800, exp: 700, damage: "Ice", weaknesses: { Fire: 25 }, immunities: ["Ice"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Fire Weapon (Soulcutter/Phantasmal)", weaponLevel: 150, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Prismatic Legs", boots: "Guardian Boots", shield: "Prismatic Shield", amulet: "Glacier Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Strike"], armor: [], helmet: ["Void"] },
    charms: ["Wound", "Zap"],
    dangers: ["Paralyze constante.", "Combos de gelo."],
    tips: ["Waste quase garantido, mas boa XP.", "Cuidado para não lurar 3+."],
    alternatives: ["Chyllfroest"]
  },
  "sea-serpents": {
    slug: "sea-serpents",
    name: "Sea Serpents (Svargrond)",
    tier: "S",
    levelRange: "130-250",
    location: "Svargrond (Sea Serpent Area)",
    rawExp: "1.2kk",
    baseProfit: 40,
    weakness: "Physical/Energy",
    access: {
      quest: "The Hunt for the Sea Serpent",
      requirements: ["Level 60+", "5 Telescope Creatures entregues"],
      howToGet: ["Svargrond -> NPC Captain Haba -> Area Norte ou Sul."],
    },
    monsters: [
      { name: "Sea Serpent", hp: 1950, exp: 2300, damage: "Physical/Ice", weaknesses: { Physical: 5, Energy: 15 }, immunities: ["Fire", "Ice"], bestiaryKills: 1000, loot: [{ item: "Focus Cape", chance: "2%", value: "6k" }, { item: "Spirit Cloak", chance: "3%", value: "2k" }] },
      { name: "Young Sea Serpent", hp: 1050, exp: 1000, damage: "Physical", weaknesses: { Physical: 5, Energy: 15 }, immunities: ["Fire", "Ice"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Gnome Sword / Energy Weapon", weaponLevel: 200, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Prismatic Legs", boots: "Depth Calcei", shield: "Prismatic Shield", amulet: "Glacier Amulet", ring: "Sword Ring" },
    imbuements: { weapon: ["Void", "Strike"], armor: [], helmet: ["Void"] },
    charms: ["Zap", "Wound"],
    dangers: ["Muitos bichos, combos físicos altos."],
    tips: ["A melhor hunt de XP/h para knights nessa faixa.", "Use Helmet of the Deep (speed na água)."],
    alternatives: ["Seacrest Serpents"]
  },
  "wyrms-liberty-bay": {
    slug: "wyrms-liberty-bay",
    name: "Wyrms (Liberty Bay)",
    tier: "A",
    levelRange: "100-180",
    location: "Liberty Bay (Vandura Mountain)",
    rawExp: "600k",
    baseProfit: 20,
    weakness: "Ice/Physical",
    access: {
      quest: "Livre",
      requirements: ["Level 60+ (porta)"],
      howToGet: ["Montanha de Wyrms em Liberty Bay (Oeste)."],
    },
    monsters: [
      { name: "Wyrm", hp: 1825, exp: 1550, damage: "Energy/Physical", weaknesses: { Ice: 5, Physical: 0 }, immunities: ["Energy"], bestiaryKills: 1000, loot: [{ item: "Focus Cape", chance: "2%", value: "6k" }, { item: "Wand of Starstorm", chance: "2%", value: "3k" }] },
      { name: "Elder Wyrm", hp: 2700, exp: 2500, damage: "Energy", weaknesses: { Physical: 0 }, immunities: ["Energy"], bestiaryKills: 1000, loot: [{ item: "Composite Hornbow", chance: "1%", value: "25k" }] }
    ],
    recommendedSet: { weapon: "Physical Weapon / Ice", weaponLevel: 100, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "MMS", amulet: "Lightning Pendant", ring: "-" },
    imbuements: { weapon: ["Void", "Vampirism"], armor: [], helmet: ["Void"] },
    charms: ["Wound"],
    dangers: ["Energy waves e Beams.", "Elder Wyrms batem bem."],
    tips: ["Ótimo para lootbag (Wands, Focus Cape).", "Não lure muitos Elder Wyrms."],
    alternatives: ["Drefia Wyrms"]
  },
  "nightmares-krailos": {
    slug: "nightmares-krailos",
    name: "Nightmares (Krailos)",
    tier: "A",
    levelRange: "120-200",
    location: "Krailos (Nightmare Ruins)",
    rawExp: "900k",
    baseProfit: 10,
    weakness: "Holy/Ice",
    access: {
      quest: "Krailos Quest (acesso à ilha)",
      requirements: [],
      howToGet: ["Barco de Venore/Darashia para Krailos -> Norte."],
    },
    monsters: [
      { name: "Nightmare", hp: 2700, exp: 2150, damage: "Physical/Death", weaknesses: { Holy: 10, Ice: 5 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "BOH", chance: "1%", value: "30k" }] },
      { name: "Nightmare Scion", hp: 1450, exp: 1350, damage: "Physical/Death", weaknesses: { Holy: 15, Ice: 10 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Resizer / Ice Weapon", weaponLevel: 150, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Prismatic Legs", boots: "Boots of Haste", shield: "MMS", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Vampirism"], armor: [], helmet: ["Void"] },
    charms: ["Wound", "Zap"],
    dangers: ["Haste dos Nightmares.", "Fazem você fugir (fear)."],
    tips: ["Ótima XP, loot paga os supplies.", "Use exeta res para não correrem."],
    alternatives: ["Yalahar Cemetery"]
  },
  "brimstone-bugs-zao": {
    slug: "brimstone-bugs-zao",
    name: "Brimstone Bugs (Zao)",
    tier: "B",
    levelRange: "130-180",
    location: "Zao (Muggy Plains / Caves)",
    rawExp: "500k",
    baseProfit: 80,
    weakness: "Fire/Ice",
    access: {
      quest: "The New Frontier Quest",
      requirements: ["Missão 8 completa (acesso a Muggy Plains)"],
      howToGet: ["Farmine -> Tapete -> Muggy Plains -> Caves ou Superfície."],
    },
    monsters: [
      { name: "Brimstone Bug", hp: 1300, exp: 900, damage: "Earth/Physical", weaknesses: { Fire: 10, Ice: 10 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "Brimstone Fangs", chance: "15%", value: "8k" }, { item: "Magic Sulphur", chance: "5%", value: "8k" }] }
    ],
    recommendedSet: { weapon: "Fire Weapon", weaponLevel: 100, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Zaoan Legs", boots: "Boots of Haste", shield: "MMS", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Strike"], armor: [], helmet: [] },
    charms: ["Wound"],
    dangers: ["Mana Drain forte.", "Batem bastante físico."],
    tips: ["Profit absurdo com os creature products (Sabretooth, Fangs).", "Task de 500 bugs."],
    alternatives: ["Krailos Ruins"]
  },

  // --- BATCH 4: SPECIAL (300+) ---
  "the-hive": {
    slug: "the-hive",
    name: "The Hive (Gray Island)",
    tier: "B",
    levelRange: "250-400",
    location: "Gray Island (Hive)",
    rawExp: "1.5kk",
    baseProfit: 100,
    weakness: "Fire",
    access: {
      quest: "War Against The Hive",
      requirements: ["Estágios da Hive liberados"],
      howToGet: ["Barco de Venore para Gray Island -> Hive."],
    },
    monsters: [
      { name: "Kollos", hp: 3800, exp: 2700, damage: "Physical/Earth", weaknesses: { Fire: 10 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [{ item: "Dung Ball", chance: "10%", value: "5k" }] },
      { name: "Spidris", hp: 2800, exp: 2300, damage: "Physical", weaknesses: { Fire: 10 }, immunities: ["Earth"], bestiaryKills: 1000, loot: [] }
    ],
    recommendedSet: { weapon: "Fire Weapon", weaponLevel: 200, helmet: "Terra Helmet", armor: "Prismatic Armor", legs: "Ornate Legs", boots: "Depth Calcei", shield: "Gnome Shield", amulet: "Terra Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Strike"], armor: ["Earth Protection"], helmet: ["Void"] },
    charms: ["Wound", "Enflame"],
    dangers: ["Kollos batem muito físico.", "Muitos bichos na tela."],
    tips: ["Use Earth Protection.", "Faça task de Gooey Mass se o estágio permitir."],
    alternatives: ["Deeplings"]
  },
  "glooth-bandits": {
    slug: "glooth-bandits",
    name: "Glooth Bandits (Oramond)",
    tier: "S",
    levelRange: "200-400",
    location: "Rathleton (Glooth Factory)",
    rawExp: "2kk",
    baseProfit: 300,
    weakness: "Physical",
    access: {
      quest: "Oramond Quest",
      requirements: ["300 Votos em Oramond (Rank Glooth Engineer)"],
      howToGet: ["Oramond -> Slums -> Teleport dos Bandits."],
    },
    monsters: [
      { name: "Glooth Bandit", hp: 1400, exp: 1200, damage: "Physical", weaknesses: { Physical: 0, Death: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Glooth Bag", chance: "100%", value: "High" }] },
      { name: "Glooth Brigand", hp: 1600, exp: 1400, damage: "Physical", weaknesses: { Physical: 0, Death: 5 }, immunities: [], bestiaryKills: 1000, loot: [{ item: "Glooth Axe", chance: "2%", value: "5k" }] }
    ],
    recommendedSet: { weapon: "Physical Weapon", weaponLevel: 200, helmet: "Zaoan Helmet", armor: "Prismatic Armor", legs: "Ornate Legs", boots: "Depth Calcei", shield: "Ornate Shield", amulet: "Platinum Amulet", ring: "-" },
    imbuements: { weapon: ["Void", "Vampirism"], armor: [], helmet: ["Void"] },
    charms: ["Wound", "Zap"],
    dangers: ["Combos de muitos bichos.", "Dano físico acumulado."],
    tips: ["Profit garantido e alto.", "Não precisa de supply, loot paga e sobra."],
    alternatives: ["Oramond West"]
  }
};
