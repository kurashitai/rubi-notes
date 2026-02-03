import { HuntData } from "./hunts";

// Adição das Hunts Low Level (Batch 1)

export const huntsDatabaseBatch1: Record<string, HuntData> = {
  "goblins-edron": {
    slug: "goblins-edron",
    name: "Goblins (Edron)",
    tier: "C",
    levelRange: "8-20",
    location: "Edron (Sul)",
    rawExp: "20k",
    baseProfit: 2,
    weakness: "Physical",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Saia de Edron pelo sul e siga para a direita."],
    },
    monsters: [
      { name: "Goblin", hp: 50, exp: 25, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [{ item: "Small Stone", chance: "20%", value: "20gp" }] }
    ],
    recommendedSet: {
      weapon: "Serpent Sword / Jagged Sword",
      weaponLevel: 10,
      helmet: "Soldier Helmet",
      armor: "Plate Armor",
      legs: "Plate Legs",
      boots: "Leather Boots",
      shield: "Dwarven Shield",
      amulet: "Scarf",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Nenhum"],
    tips: ["Pegue small stones para vender."],
    alternatives: ["Femor Hills"]
  },
  "trolls-edron": {
    slug: "trolls-edron",
    name: "Trolls (Edron)",
    tier: "C",
    levelRange: "8-20",
    location: "Edron (Norte)",
    rawExp: "25k",
    baseProfit: 1,
    weakness: "Physical",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Saia de Edron pelo norte, desça no bueiro."],
    },
    monsters: [
      { name: "Troll", hp: 50, exp: 20, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Troll Champion", hp: 75, exp: 40, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: {
      weapon: "Jagged Sword",
      weaponLevel: 10,
      helmet: "Soldier Helmet",
      armor: "Plate Armor",
      legs: "Plate Legs",
      boots: "Leather Boots",
      shield: "Dwarven Shield",
      amulet: "Scarf",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Nenhum"],
    tips: ["Leve pá (Shovel) e corda (Rope)."],
    alternatives: ["Thais Trolls"]
  },
  "rotworms-liberty-bay": {
    slug: "rotworms-liberty-bay",
    name: "Rotworms (Liberty Bay)",
    tier: "C",
    levelRange: "15-30",
    location: "Liberty Bay (Oeste)",
    rawExp: "40k",
    baseProfit: 3,
    weakness: "Physical",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Saia de Liberty Bay pelo oeste, desça na cave."],
    },
    monsters: [
      { name: "Rotworm", hp: 65, exp: 40, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Carrion Worm", hp: 145, exp: 70, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: {
      weapon: "Crimson Sword / Morning Star",
      weaponLevel: 20,
      helmet: "Dark Helmet",
      armor: "Plate Armor",
      legs: "Plate Legs",
      boots: "Leather Boots",
      shield: "Dwarven Shield",
      amulet: "Scarf",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Carrion Worms batem um pouco mais."],
    tips: ["Faça lootbag de maces e swords se precisar de dinheiro."],
    alternatives: ["Darashia Rotworms"]
  },
  "minotaurs-yalahar": {
    slug: "minotaurs-yalahar",
    name: "Minotaurs (Yalahar)",
    tier: "B",
    levelRange: "30-50",
    location: "Yalahar (Foreign Quarter)",
    rawExp: "80k",
    baseProfit: 10,
    weakness: "Ice",
    access: {
      quest: "In Service of Yalahar",
      requirements: ["Acesso a Yalahar"],
      howToGet: ["Foreign Quarter (Norte/Esquerda)."],
    },
    monsters: [
      { name: "Minotaur", hp: 100, exp: 50, damage: "Physical", weaknesses: { Ice: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Minotaur Guard", hp: 185, exp: 160, damage: "Physical", weaknesses: { Ice: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Minotaur Archer", hp: 100, exp: 65, damage: "Physical", weaknesses: { Ice: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Minotaur Mage", hp: 155, exp: 150, damage: "Energy", weaknesses: { Physical: 10 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: {
      weapon: "Epee / Bright Sword",
      weaponLevel: 30,
      helmet: "Crusader Helmet",
      armor: "Knight Armor",
      legs: "Knight Legs",
      boots: "Boots of Haste",
      shield: "Tower Shield",
      amulet: "Platinum Amulet",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Mages e Archers combam à distância."],
    tips: ["Use Stealth Ring se ficar perigoso.", "Faça a task de Minotaurs (5000 kills) aqui."],
    alternatives: ["Darashia Minotaurs"]
  },
  "dwarves-kazordoon": {
    slug: "dwarves-kazordoon",
    name: "Dwarves (Kazordoon)",
    tier: "C",
    levelRange: "20-40",
    location: "Kazordoon Mines",
    rawExp: "50k",
    baseProfit: 5,
    weakness: "Physical",
    access: {
      quest: "Livre",
      requirements: [],
      howToGet: ["Minas principais de Kazordoon."],
    },
    monsters: [
      { name: "Dwarf", hp: 90, exp: 45, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Dwarf Soldier", hp: 135, exp: 70, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Dwarf Guard", hp: 245, exp: 165, damage: "Physical", weaknesses: { Physical: 0 }, immunities: [], bestiaryKills: 500, loot: [] }
    ],
    recommendedSet: {
      weapon: "Bright Sword",
      weaponLevel: 30,
      helmet: "Crusader Helmet",
      armor: "Knight Armor",
      legs: "Knight Legs",
      boots: "Leather Boots",
      shield: "Tower Shield",
      amulet: "Platinum Amulet",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Dwarf Guards em grupo batem forte no level baixo."],
    tips: ["Iron Ores valem muito.", "Não desça nos Geomancers se for level baixo."],
    alternatives: ["Cormaya Dwarves"]
  },
  "elves-yalahar": {
    slug: "elves-yalahar",
    name: "Elves (Yalahar)",
    tier: "B",
    levelRange: "30-50",
    location: "Yalahar (Foreign Quarter)",
    rawExp: "70k",
    baseProfit: 15,
    weakness: "Death",
    access: {
      quest: "In Service of Yalahar",
      requirements: ["Acesso a Yalahar"],
      howToGet: ["Foreign Quarter (Direita)."],
    },
    monsters: [
      { name: "Elf", hp: 100, exp: 42, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Elf Scout", hp: 160, exp: 75, damage: "Physical", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [] },
      { name: "Elf Arcanist", hp: 220, exp: 175, damage: "Energy", weaknesses: { Death: 10 }, immunities: [], bestiaryKills: 500, loot: [{ item: "Holy Orchid", chance: "5%", value: "2k" }] }
    ],
    recommendedSet: {
      weapon: "Bright Sword",
      weaponLevel: 30,
      helmet: "Crusader Helmet",
      armor: "Knight Armor",
      legs: "Knight Legs",
      boots: "Boots of Haste",
      shield: "Tower Shield",
      amulet: "Platinum Amulet",
      ring: "-"
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: ["Arcanists e Scouts correm e batem de longe."],
    tips: ["Holy Orchids e Elvish Talismans garantem o profit."],
    alternatives: ["Shadowthorn (Venerore)"]
  }
};
