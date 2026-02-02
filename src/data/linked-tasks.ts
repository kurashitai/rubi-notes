// Linked Tasks Data extracted from raw HTML files (Updated with Best Hunts)

export interface LinkedTask {
  id: string;
  name: string;
  image: string;
  killsRequired: number;
  monsters: string[];
  rewards: {
    type: "first" | "repeatable";
    description: string;
  }[];
  room: "Lothlorien" | "Executioner" | "Morgul" | "Corrupted" | "N'Zoth";
  bestHuntSlug?: string; // Slug da melhor hunt
}

export const linkedTasksDatabase: LinkedTask[] = [
  // --- SALA 5: LOTHLORIEN'S ROOM (#1-#20) ---
  {
    id: "#1",
    name: "Goblin",
    image: "/monsters/global/goblin.gif",
    killsRequired: 100,
    monsters: ["Goblin"],
    rewards: [
      { type: "first", description: "5.000 EXP x Rate" },
      { type: "first", description: "10.000 Gold Coins" },
      { type: "repeatable", description: "4.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#2",
    name: "Troll",
    image: "/monsters/global/troll.gif",
    killsRequired: 100,
    monsters: ["Troll", "Swamp Troll", "Frost Troll", "Island Troll"],
    rewards: [
      { type: "first", description: "7.000 EXP x Rate" },
      { type: "first", description: "10.000 Gold Coins" },
      { type: "repeatable", description: "5.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#3",
    name: "Rotworm",
    image: "/monsters/global/rotworm.gif",
    killsRequired: 200,
    monsters: ["Rotworm", "Carrion Worm"],
    rewards: [
      { type: "first", description: "10.000 EXP x Rate" },
      { type: "first", description: "20.000 Gold Coins" },
      { type: "repeatable", description: "10.000 Gold Coins" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#4",
    name: "Minotaur",
    image: "/monsters/global/minotaur.gif",
    killsRequired: 200,
    monsters: ["Minotaur", "Minotaur Archer", "Minotaur Guard", "Minotaur Mage"],
    rewards: [
      { type: "first", description: "15.000 EXP x Rate" },
      { type: "repeatable", description: "11.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#5",
    name: "Dwarf",
    image: "/monsters/global/dwarf.gif",
    killsRequired: 300,
    monsters: ["Dwarf", "Dwarf Soldier", "Dwarf Guard", "Dwarf Geomancer"],
    rewards: [
      { type: "first", description: "1x Exercise Weapon (3.600 Charges)" },
      { type: "repeatable", description: "13.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#6",
    name: "Dworcs",
    image: "/monsters/global/dworc-voodoomaster.gif",
    killsRequired: 300,
    monsters: ["Dworc Venomsniper", "Dworc Voodoomaster", "Dworc Fleshhunter"],
    rewards: [
      { type: "first", description: "50.000 Gold Coins" },
      { type: "repeatable", description: "20.000 Gold Coins" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#7",
    name: "Elf",
    image: "/monsters/global/elf.gif",
    killsRequired: 400,
    monsters: ["Elf", "Elf Scout", "Elf Arcanist"],
    rewards: [
      { type: "first", description: "25.000 EXP x Rate" },
      { type: "first", description: "40.000 Gold Coins" },
      { type: "repeatable", description: "17.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#8",
    name: "Dark Cathedral",
    image: "/monsters/global/dark-monk.gif",
    killsRequired: 400,
    monsters: ["Dark Apprentice", "Dark Magician", "Dark Monk", "Assassin"],
    rewards: [
      { type: "first", description: "25.000 EXP x Rate" },
      { type: "first", description: "50.000 Gold Coins" },
      { type: "repeatable", description: "20.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#9",
    name: "Tombs",
    image: "/monsters/global/demon-skeleton.gif",
    killsRequired: 800,
    monsters: ["Ghost", "Mummy", "Ghoul", "Demon Skeleton", "Skeleton", "Crypt Shambler"],
    rewards: [
      { type: "first", description: "5x Prey Cards" },
      { type: "repeatable", description: "30.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#10",
    name: "Scarab",
    image: "/monsters/global/scarab.gif",
    killsRequired: 600,
    monsters: ["Scarab"],
    rewards: [
      { type: "first", description: "30.000 EXP x Rate" },
      { type: "first", description: "50.000 Gold Coins" },
      { type: "repeatable", description: "22.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#11",
    name: "Cyclops",
    image: "/monsters/global/cyclops.gif",
    killsRequired: 500,
    monsters: ["Cyclops", "Cyclops Smith", "Cyclops Drone"],
    rewards: [
      { type: "first", description: "35.000 EXP x Rate" },
      { type: "first", description: "60.000 Gold Coins" },
      { type: "repeatable", description: "25.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#12",
    name: "Mutated Humans",
    image: "/monsters/global/mutated-human.gif",
    killsRequired: 600,
    monsters: ["Mutated Human"],
    rewards: [
      { type: "first", description: "50.000 EXP x Rate" },
      { type: "repeatable", description: "40.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#13",
    name: "Coryms",
    image: "/monsters/global/corym-vanguard.gif",
    killsRequired: 400,
    monsters: ["Corym Charlatan", "Corym Skirmisher", "Corym Vanguard"],
    rewards: [
      { type: "first", description: "70.000 EXP x Rate" },
      { type: "first", description: "60.000 Gold Coins" },
      { type: "repeatable", description: "50.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#14",
    name: "Banuta Surface",
    image: "/monsters/global/kongra.gif",
    killsRequired: 500,
    monsters: ["Kongra", "Sibang", "Merlkin"],
    rewards: [
      { type: "first", description: "100.000 Gold Coins" },
      { type: "repeatable", description: "70.000 Gold Coins" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#15",
    name: "Pirates",
    image: "/monsters/global/pirate-cutthroat.gif",
    killsRequired: 700,
    monsters: ["Pirate Marauder", "Pirate Cutthroat", "Pirate Corsair", "Pirate Buccaneer"],
    rewards: [
      { type: "first", description: "1x Exercise Weapon (7.200 Charges)" },
      { type: "repeatable", description: "Random Item: Brutus Bloodbeard's Hat, The Lethal Lissy's Shirt, Ron The Ripper's Sabre, Deadeye Devious' Eye Patch" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#16",
    name: "Barbarians",
    image: "/monsters/global/barbarian-bloodwalker.gif",
    killsRequired: 700,
    monsters: ["Barbarian Bloodwalker", "Barbarian Brutetamer", "Barbarian Headsplitter", "Barbarian Skullhunter"],
    rewards: [
      { type: "first", description: "200.000 EXP x Rate" },
      { type: "first", description: "5x Shards" },
      { type: "repeatable", description: "100.000 EXP x Rate" },
      { type: "repeatable", description: "1x Shard" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#17",
    name: "Djinn",
    image: "/monsters/global/blue-djinn.gif",
    killsRequired: 700,
    monsters: ["Marid", "Efreet", "Green Djinn", "Blue Djinn"],
    rewards: [
      { type: "first", description: "250.000 EXP x Rate" },
      { type: "repeatable", description: "150.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#18",
    name: "Stonerefiner",
    image: "/monsters/global/stonerefiner.gif",
    killsRequired: 500,
    monsters: ["Stonerefiner"],
    rewards: [
      { type: "first", description: "300.000 EXP x Rate" },
      { type: "first", description: "150.000 Gold Coins" },
      { type: "repeatable", description: "200.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#19",
    name: "Dragon",
    image: "/monsters/global/dragon.gif",
    killsRequired: 800,
    monsters: ["Dragon", "Dragon Hatchling"],
    rewards: [
      { type: "first", description: "400.000 EXP x Rate" },
      { type: "repeatable", description: "300.000 EXP x Rate" }
    ],
    room: "Lothlorien"
  },
  {
    id: "#20",
    name: "Oramond",
    image: "/monsters/global/minotaur-hunter.gif",
    killsRequired: 1000,
    monsters: ["Minotaur Hunter", "Mooh'Tah Warrior", "Minotaur Amazon", "Worm Priestess", "Execowtioner", "Moohtant"],
    rewards: [
      { type: "first", description: "800.000 EXP x Rate" },
      { type: "first", description: "1x Exercise Weapon (10.800 Charges)" },
      { type: "repeatable", description: "1.000.000 EXP x Rate" }
    ],
    room: "Lothlorien",
    bestHuntSlug: "oramond-west"
  },

  // --- SALA 1: EXECUTIONER'S ROOM (#21-#40) ---
  {
    id: "#21",
    name: "Quara",
    image: "/monsters/global/quara-mantassin-scout.gif",
    killsRequired: 1000,
    monsters: ["Quara Mantassin Scout", "Quara Constrictor Scout", "Quara Pincher Scout", "Quara Predator Scout", "Quara Hydromancer Scout"],
    rewards: [
      { type: "first", description: "1.000.000 EXP x Rate" },
      { type: "first", description: "200.000 Gold Coins" },
      { type: "repeatable", description: "700.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#22",
    name: "Ancient Scarab",
    image: "/monsters/global/ancient-scarab.gif",
    killsRequired: 1000,
    monsters: ["Ancient Scarab"],
    rewards: [
      { type: "first", description: "5x Prey Cards" },
      { type: "repeatable", description: "200.000 Gold Coins" }
    ],
    room: "Executioner"
  },
  {
    id: "#23",
    name: "Giant Spider",
    image: "/monsters/global/giant-spider.gif",
    killsRequired: 2000,
    monsters: ["Wailing Widow", "Brimstone Bug", "Giant Spider"],
    rewards: [
      { type: "first", description: "1.300.000 EXP x Rate" },
      { type: "repeatable", description: "1.000.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#24",
    name: "Wyrm",
    image: "/monsters/global/wyrm.gif",
    killsRequired: 2000,
    monsters: ["Wyrm", "Elder Wyrm"],
    rewards: [
      { type: "first", description: "1.500.000 EXP x Rate" },
      { type: "first", description: "300.000 Gold Coins" },
      { type: "repeatable", description: "1.200.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#25",
    name: "Cult",
    image: "/monsters/global/cult-believer.gif",
    killsRequired: 3000,
    monsters: ["Cult Believer", "Vicious Squire", "Cult Enforcer", "Renegade Knight", "Vile Grandmaster", "Cult Scholar", "Hero"],
    rewards: [
      { type: "first", description: "2.000.000 EXP x Rate" },
      { type: "first", description: "500.000 Gold Coins" },
      { type: "repeatable", description: "1.500.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#26",
    name: "Deepling",
    image: "/monsters/global/deepling-scout.gif",
    killsRequired: 2500,
    monsters: ["Deepling Spellsinger", "Deepling Scout", "Deepling Warrior", "Deepling Guard"],
    rewards: [
      { type: "first", description: "1x Zaoan Chess Box" },
      { type: "repeatable", description: "300.000 Gold Coins" }
    ],
    room: "Executioner"
  },
  {
    id: "#27",
    name: "Wereboar",
    image: "/monsters/global/wereboar.gif",
    killsRequired: 2000,
    monsters: ["Werefox", "Werebadger", "Wereboar", "Werebear", "Werewolf"],
    rewards: [
      { type: "first", description: "2.500.000 EXP x Rate" },
      { type: "first", description: "500.000 Gold Coins" },
      { type: "repeatable", description: "2.000.000 EXP x Rate" }
    ],
    room: "Executioner",
    bestHuntSlug: "grimvale"
  },
  {
    id: "#28",
    name: "Minotaur Cult",
    image: "/monsters/global/minotaur-cult-zealot.gif",
    killsRequired: 3000,
    monsters: ["Minotaur Cult Follower", "Minotaur Cult Prophet", "Minotaur Cult Zealot"],
    rewards: [
      { type: "first", description: "1x Exercise Weapon (14.400 Charges)" },
      { type: "repeatable", description: "400.000 Gold Coins" }
    ],
    room: "Executioner"
  },
  {
    id: "#29",
    name: "Feyrist Nightmare",
    image: "/monsters/global/weakened-frazzlemaw.gif",
    killsRequired: 3000,
    monsters: ["Weakened Frazzlemaw", "Enfeebled Silencer"],
    rewards: [
      { type: "first", description: "3.000.000 EXP x Rate" },
      { type: "first", description: "500.000 Gold Coins" },
      { type: "repeatable", description: "2.500.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#30",
    name: "Glooth",
    image: "/monsters/global/glooth-bandit.gif",
    killsRequired: 4000,
    monsters: ["Glooth Bandit", "Glooth Brigand"],
    rewards: [
      { type: "first", description: "20x Gold Token" },
      { type: "first", description: "20x Silver Token" },
      { type: "repeatable", description: "7x Gold Token" },
      { type: "repeatable", description: "7x Silver Token" }
    ],
    room: "Executioner"
  },
  {
    id: "#31",
    name: "Exotic Cave",
    image: "/monsters/global/exotic-cave-spider.gif",
    killsRequired: 3000,
    monsters: ["Exotic Cave Spider", "Exotic Bat"],
    rewards: [
      { type: "first", description: "1x Roulette Coin" },
      { type: "repeatable", description: "500.000 Gold Coins" }
    ],
    room: "Executioner"
  },
  {
    id: "#32",
    name: "Pirat",
    image: "/monsters/global/pirat-bombardier.gif",
    killsRequired: 3000,
    monsters: ["Pirat Bombardier", "Pirat Cutthroat", "Pirat Mate", "Pirat Scoundrel"],
    rewards: [
      { type: "first", description: "3.500.000 EXP x Rate" },
      { type: "first", description: "500.000 Gold Coins" },
      { type: "repeatable", description: "3.000.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#33",
    name: "Werehyaena",
    image: "/monsters/global/werehyaena.gif",
    killsRequired: 2000,
    monsters: ["Werehyaena", "Werehyaena Shaman"],
    rewards: [
      { type: "first", description: "1x Mystic Bag" },
      { type: "repeatable", description: "3.500.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#34",
    name: "Dragon Lord",
    image: "/monsters/global/dragon-lord.gif",
    killsRequired: 2000,
    monsters: ["Dragon Lord", "Dragon Lord Hatchling"],
    rewards: [
      { type: "first", description: "1x Dragon Claw" },
      { type: "repeatable", description: "600.000 Gold Coins" }
    ],
    room: "Executioner"
  },
  {
    id: "#35",
    name: "Frost Dragon",
    image: "/monsters/global/frost-dragon.gif",
    killsRequired: 3000,
    monsters: ["Frost Dragon", "Frost Dragon Hatchling"],
    rewards: [
      { type: "first", description: "5.000.000 EXP x Rate" },
      { type: "repeatable", description: "4.000.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#36",
    name: "Banuta Deeper",
    image: "/monsters/global/medusa.gif",
    killsRequired: 4000,
    monsters: ["Medusa", "Serpent Spawn", "Hydra", "Eternal Guardian"],
    rewards: [
      { type: "first", description: "2x Common Mount Box" },
      { type: "repeatable", description: "800.000 Gold Coins" }
    ],
    room: "Executioner",
    bestHuntSlug: "banuta-last-floor"
  },
  {
    id: "#37",
    name: "Nightmare",
    image: "/monsters/global/nightmare.gif",
    killsRequired: 2000,
    monsters: ["Nightmare", "Nightmare Scion"],
    rewards: [
      { type: "first", description: "1x Exercise Weapon (18.000 Charges)" },
      { type: "repeatable", description: "1.000.000 Gold Coins" }
    ],
    room: "Executioner",
    bestHuntSlug: "grim-reaper"
  },
  {
    id: "#38",
    name: "Draken",
    image: "/monsters/global/draken-abomination.gif",
    killsRequired: 5000,
    monsters: ["Draken Abomination", "Draken Elite", "Draken Spellweaver", "Draken Warmaster", "Lizard Legionnaire", "Lizard Magistratus", "Lizard Noble", "Lizard Chosen", "Lizard Dragon Priest", "Lizard High Guard"],
    rewards: [
      { type: "first", description: "6.000.000 EXP x Rate" },
      { type: "first", description: "1.000.000 Gold Coins" },
      { type: "repeatable", description: "4.500.000 EXP x Rate" }
    ],
    room: "Executioner",
    bestHuntSlug: "draken-walls"
  },
  {
    id: "#39",
    name: "The Hive",
    image: "/monsters/global/waspoid.gif",
    killsRequired: 5000,
    monsters: ["Waspoid", "Crawler", "Spitter", "Kollos", "Spidris", "Spidris Elite", "Hive Overseer"],
    rewards: [
      { type: "first", description: "7.000.000 EXP x Rate" },
      { type: "first", description: "1.500.000 Gold Coins" },
      { type: "repeatable", description: "5.000.000 EXP x Rate" }
    ],
    room: "Executioner"
  },
  {
    id: "#40",
    name: "MOTA",
    image: "/monsters/global/fury.gif",
    killsRequired: 3000,
    monsters: ["Fury", "Floating Savant"],
    rewards: [
      { type: "first", description: "1x Mini Obelisk" },
      { type: "repeatable", description: "1.500.000 Gold Coins" }
    ],
    room: "Executioner"
  },

  // --- SALA 2: MORGUL'S ROOM (#41-#60) ---
  {
    id: "#41",
    name: "Iksupan",
    image: "/monsters/global/iks-yapunac.gif",
    killsRequired: 6000,
    monsters: ["Iks Yapunac", "Mitmah Scout", "Mitmah Seer"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Music Box" },
      { type: "repeatable", description: "15x Gold Tokens" }
    ],
    room: "Morgul"
  },
  {
    id: "#42",
    name: "Carnivor",
    image: "/monsters/global/lumbering-carnivor.gif",
    killsRequired: 10000,
    monsters: ["Lumbering Carnivor", "Spiky Carnivor", "Menacing Carnivor"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "10x Prey Cards" },
      { type: "repeatable", description: "20x Silver Tokens" }
    ],
    room: "Morgul"
  },
  {
    id: "#43",
    name: "Grim Reaper",
    image: "/monsters/global/grim-reaper.gif",
    killsRequired: 3000,
    monsters: ["Hellspawn", "Grim Reaper"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "8.000.000 EXP x Rate" },
      { type: "repeatable", description: "6.000.000 EXP x Rate" }
    ],
    room: "Morgul",
    bestHuntSlug: "grim-reaper"
  },
  {
    id: "#44",
    name: "Candia",
    image: "/monsters/global/candy-horror.gif",
    killsRequired: 5000,
    monsters: ["Candy Horror", "Nibblemaw", "Honey Elemental", "Angry Sugar Fairy", "Candy Floss Elemental", "Goggle Cake"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "3.000.000 Gold Coins" },
      { type: "repeatable", description: "2.000.000 Gold Coins" }
    ],
    room: "Morgul"
  },
  {
    id: "#45",
    name: "Lycanthrope",
    image: "/monsters/global/werelioness.gif",
    killsRequired: 6000,
    monsters: ["Werelion", "Werelioness"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "2x Mystic Bag" },
      { type: "repeatable", description: "2x Exalted Core" }
    ],
    room: "Morgul",
    bestHuntSlug: "lion-sanctuary"
  },
  {
    id: "#46",
    name: "The Void",
    image: "/monsters/global/breach-brood.gif",
    killsRequired: 10000,
    monsters: ["Breach Brood", "Dread Intruder", "Sparkion", "Reality Reaver"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "9.000.000 EXP x Rate" },
      { type: "first", description: "2.000.000 Gold Coins" },
      { type: "repeatable", description: "7.000.000 EXP x Rate" }
    ],
    room: "Morgul"
  },
  {
    id: "#47",
    name: "Asura",
    image: "/monsters/global/dawnfire-asura.gif",
    killsRequired: 7000,
    monsters: ["Dawnfire Asura", "Midnight Asura", "Frost Flower Asura"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Exercise Weapon (21.600 Charges)" },
      { type: "repeatable", description: "2.500.000 Gold Coins" }
    ],
    room: "Morgul",
    bestHuntSlug: "asura-palace"
  },
  {
    id: "#48",
    name: "Spectre",
    image: "/monsters/global/gazer-spectre.gif",
    killsRequired: 12000,
    monsters: ["Gazer Spectre", "Burster Spectre", "Ripper Spectre"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "10.000.000 EXP x Rate" },
      { type: "repeatable", description: "8.000.000 EXP x Rate" }
    ],
    room: "Morgul",
    bestHuntSlug: "burster-spectres"
  },
  {
    id: "#49",
    name: "Catacombs",
    image: "/monsters/global/demon.gif",
    killsRequired: 15000,
    monsters: ["Destroyer", "Dark Torturer", "Demon", "Grim Reaper", "Hellhound", "Hellspawn", "Juggernaut"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "10x Prey Cards" },
      { type: "repeatable", description: "15 Gold Tokens" },
      { type: "repeatable", description: "20 Silver Tokens" }
    ],
    room: "Morgul"
  },
  {
    id: "#50",
    name: "Roshamuul",
    image: "/monsters/global/retching-horror.gif",
    killsRequired: 8000,
    monsters: ["Guzzlemaw", "Frazzlemaw", "Silencer", "Choking Fear", "Retching Horror"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "300x Cluster Of Solace" },
      { type: "repeatable", description: "100x Cluster Of Solace" }
    ],
    room: "Morgul",
    bestHuntSlug: "roshamuul-lower"
  },
  {
    id: "#51",
    name: "Warzone 1 2 3",
    image: "/monsters/global/hideous-fungus.gif",
    killsRequired: 10000,
    monsters: ["Hideous Fungus", "Humongous Fungus", "Humorless Fungus", "Stone Devourer", "Weeper", "Magma Crawler", "Lost Berserker", "Lava Golem", "Cliff Strider", "Ironblight", "Orewalker"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "50x Major Crystalline Token" },
      { type: "repeatable", description: "20x Major Crystalline Token" }
    ],
    room: "Morgul"
  },
  {
    id: "#52",
    name: "Weretiger",
    image: "/monsters/global/weretiger.gif",
    killsRequired: 6000,
    monsters: ["Weretiger", "White Weretiger", "Cunning Werepanther"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "4.000.000 Gold Coins" },
      { type: "repeatable", description: "3.000.000 Gold Coins" }
    ],
    room: "Morgul",
    bestHuntSlug: "weretigers"
  },
  {
    id: "#53",
    name: "Werecrocodile",
    image: "/monsters/global/werecrocodile.gif",
    killsRequired: 6000,
    monsters: ["Werecrocodile", "Feral Werecrocodile", "Werepanther"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "2x Roulette Coin" },
      { type: "repeatable", description: "10.000.000 EXP x Rate" }
    ],
    room: "Morgul"
  },
  {
    id: "#54",
    name: "Winter & Summer",
    image: "/monsters/global/crazed-summer-rearguard.gif",
    killsRequired: 5000,
    monsters: ["Crazed Summer Rearguard", "Crazed Summer Vanguard", "Crazed Winter Rearguard", "Crazed Winter Vanguard", "Insane Siren", "Soul-broken Harbinger"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "12.000.000 EXP x Rate" },
      { type: "first", description: "5.000.000 Gold Coins" },
      { type: "repeatable", description: "10.000.000 EXP x Rate" },
      { type: "repeatable", description: "2.000.000 Gold Coins" }
    ],
    room: "Morgul"
  },
  {
    id: "#55",
    name: "Deathling",
    image: "/monsters/global/deathling-scout.gif",
    killsRequired: 4000,
    monsters: ["Deathling Scout", "Deathling Spellsinger"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Exercise Weapon (25.200 Charges)" },
      { type: "repeatable", description: "3.000.000 Gold Coins" }
    ],
    room: "Morgul"
  },
  {
    id: "#56",
    name: "Great Pearl",
    image: "/monsters/global/foam-stalker.gif",
    killsRequired: 8000,
    monsters: ["Foam Stalker", "Two-headed Turtle"],
    rewards: [
      { type: "first", description: "2x Task Coin" },
      { type: "first", description: "1x Fire Amplification" },
      { type: "first", description: "1x Ice Amplification" },
      { type: "first", description: "1x Energy Amplification" },
      { type: "first", description: "1x Earth Amplification" },
      { type: "repeatable", description: "Random Item: Bestiary Betterment, Strike Enhancement, Stamina Extension" }
    ],
    room: "Morgul"
  },
  {
    id: "#57",
    name: "Moon Goddess",
    image: "/monsters/global/naga-warrior.gif",
    killsRequired: 10000,
    monsters: ["Makara", "Naga Archer", "Naga Warrior"],
    rewards: [
      { type: "first", description: "2x Task Coin" },
      { type: "first", description: "Random Item: Red Tome, Purple Tome, Blue Tome, Green Tome, Grey Tome" },
      { type: "repeatable", description: "Random Item: Lemon Cupcake, Blueberry Cupcake, Strawberry Cupcake" }
    ],
    room: "Morgul"
  },
  {
    id: "#58",
    name: "Forest of Life",
    image: "/monsters/global/dark-carnisylvan.gif",
    killsRequired: 8000,
    monsters: ["Dark Carnisylvan", "Hulking Carnisylvan", "Poisonous Carnisylvan"],
    rewards: [
      { type: "first", description: "2x Task Coin" },
      { type: "first", description: "3x Mystic Bag" },
      { type: "repeatable", description: "4.000.000 Gold Coins" }
    ],
    room: "Morgul"
  },
  {
    id: "#59",
    name: "Kilmaresh Deeper",
    image: "/monsters/global/burning-gladiator.gif",
    killsRequired: 10000,
    monsters: ["Burning Gladiator", "Black Sphinx Acolyte", "Priestess Of The Wild Sun"],
    rewards: [
      { type: "first", description: "2x Task Coin" },
      { type: "first", description: "1x Stamina Extension" },
      { type: "first", description: "1x Strike Enhancement" },
      { type: "first", description: "1x Wealth Duplex" },
      { type: "first", description: "1x Bestiary Betterment" },
      { type: "repeatable", description: "3.000.000 Gold Coins" }
    ],
    room: "Morgul"
  },
  {
    id: "#60",
    name: "Issavi",
    image: "/monsters/global/lamassu.gif",
    killsRequired: 7000,
    monsters: ["Sphinx", "Manticore", "Lamassu", "Feral Sphinx", "Crypt Warden"],
    rewards: [
      { type: "first", description: "2x Task Coin" },
      { type: "first", description: "10.000.000 EXP x Rate" },
      { type: "repeatable", description: "8.000.000 EXP x Rate" }
    ],
    room: "Morgul"
  },

  // --- SALA 3: CORRUPTED ROOM (#61-#78) ---
  {
    id: "#61",
    name: "Warzone 4 5 6",
    image: "/monsters/global/chasm-spawn.gif",
    killsRequired: 14000,
    monsters: ["Chasm Spawn", "Drillworm", "Cave Devourer", "Tunnel Tyrant", "Deepworm", "Diremaw"],
    rewards: [
      { type: "first", description: "5x Task Coin" },
      { type: "first", description: "12.000.000 EXP x Rate" },
      { type: "repeatable", description: "12.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },
  {
    id: "#62",
    name: "Falcon Bastion",
    image: "/monsters/global/falcon-knight.gif",
    killsRequired: 16000,
    monsters: ["Falcon Knight", "Falcon Paladin"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Oberon Chest" },
      { type: "repeatable", description: "Random Item: Lemon Cupcake, Strawberry Cupcake, Blueberry Cupcake" }
    ],
    room: "Corrupted"
  },
  {
    id: "#63",
    name: "Kilmaresh Mountains",
    image: "/monsters/global/ogre-rowdy.gif",
    killsRequired: 14000,
    monsters: ["Ogre Rowdy", "Ogre Ruffian", "Ogre Sage"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "15.000.000 EXP x Rate" },
      { type: "repeatable", description: "13.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },
  {
    id: "#64",
    name: "Goanna",
    image: "/monsters/global/adult-goanna.gif",
    killsRequired: 15000,
    monsters: ["Young Goanna", "Adult Goanna"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "15x Prey Cards" },
      { type: "repeatable", description: "15.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },
  {
    id: "#65",
    name: "Prison",
    image: "/monsters/global/demon-outcast.gif",
    killsRequired: 17000,
    monsters: ["Demon Outcast", "Blightwalker", "Plaguesmith", "Dark Torturer", "Hellhound", "Juggernaut"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "8.000.000 Gold Coins" },
      { type: "repeatable", description: "6.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#66",
    name: "Cobra Bastion",
    image: "/monsters/global/cobra-assassin.gif",
    killsRequired: 18000,
    monsters: ["Cobra Assassin", "Cobra Scout", "Cobra Vizier"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Scarlett Chest" },
      { type: "repeatable", description: "15.000.000 EXP x Rate" }
    ],
    room: "Corrupted",
    bestHuntSlug: "cobra-bastion"
  },
  {
    id: "#67",
    name: "Bulltaur Lair",
    image: "/monsters/global/bulltaur-alchemist.gif",
    killsRequired: 20000,
    monsters: ["Bulltaur Alchemist", "Bulltaur Brute", "Bulltaur Forgepriest"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "15.000.000 EXP x Rate" },
      { type: "first", description: "6.000.000 Gold Coins" },
      { type: "repeatable", description: "12.000.000 EXP x Rate" },
      { type: "repeatable", description: "2.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#68",
    name: "Lost Soul",
    image: "/monsters/global/flimsy-lost-soul.gif",
    killsRequired: 18000,
    monsters: ["Flimsy Lost Soul", "Mean Lost Soul", "Freakish Lost Soul"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Exercise Weapon (32.400 Charges)" },
      { type: "repeatable", description: "7.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#69",
    name: "Deep Desert",
    image: "/monsters/global/skeleton-elite-warrior.gif",
    killsRequired: 20000,
    monsters: ["Skeleton Elite Warrior", "Undead Elite Gladiator"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "10.000.000 Gold Coins" },
      { type: "repeatable", description: "7.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#70",
    name: "Nimmersatt's",
    image: "/monsters/global/dragolisk.gif",
    killsRequired: 20000,
    monsters: ["Dragolisk", "Mega Dragon", "Wardragon"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "17.000.000 EXP x Rate" },
      { type: "first", description: "7.000.000 Gold Coins" },
      { type: "repeatable", description: "15.000.000 EXP x Rate" },
      { type: "repeatable", description: "3.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#71",
    name: "Salt Cave",
    image: "/monsters/global/bashmu.gif",
    killsRequired: 20000,
    monsters: ["Bashmu", "Juvenile Bashmu"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "2x Mini Obelisk" },
      { type: "repeatable", description: "1x Golden Prison Key" }
    ],
    room: "Corrupted"
  },
  {
    id: "#72",
    name: "Ruins of Nuur",
    image: "/monsters/global/girtablilu-warrior.gif",
    killsRequired: 22000,
    monsters: ["Girtablilu Warrior", "Venerable Girtablilu"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "3x Soul Core Bag" },
      { type: "first", description: "5.000.000 Gold Coins" },
      { type: "repeatable", description: "8.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#73",
    name: "Ingol",
    image: "/monsters/global/rhindeer.gif",
    killsRequired: 23000,
    monsters: ["Boar Man", "Carnivostrich", "Crape Man", "Harpy", "Liodile", "Rhindeer"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "3x Roulette Coin" },
      { type: "repeatable", description: "10.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#74",
    name: "Ferumbras Seal",
    image: "/monsters/global/grimeleech.gif",
    killsRequired: 20000,
    monsters: ["Vexclaw", "Grimeleech", "Hellflayer"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "20.000.000 EXP x Rate" },
      { type: "first", description: "1x Boots Of Homecoming" },
      { type: "repeatable", description: "17.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },
  {
    id: "#75",
    name: "Warzone 7 8 9",
    image: "/monsters/global/afflicted-strider.gif",
    killsRequired: 16000,
    monsters: ["Afflicted Strider", "Blemished Spawn", "Eyeless Devourer", "Lavafungus", "Lavaworm", "Streaked Devourer", "Cave Chimera", "Tremendous Tyrant", "Varnished Diremaw"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Fiery Horseshoe" },
      { type: "repeatable", description: "50x Gold Token" },
      { type: "repeatable", description: "50x Silver Token" }
    ],
    room: "Corrupted"
  },
  {
    id: "#76",
    name: "Podzilla Stalk",
    image: "/monsters/global/rootthing-amber-shaper.gif",
    killsRequired: 21000,
    monsters: ["Rootthing Amber Shaper", "Rootthing Nutshell", "Rootthing Bug Tracker"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "2x Stone Of Ascension" },
      { type: "repeatable", description: "18.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },
  {
    id: "#77",
    name: "True Asura",
    image: "/monsters/global/true-dawnfire-asura.gif",
    killsRequired: 23000,
    monsters: ["True Dawnfire Asura", "True Midnight Asura", "True Frost Flower Asura"],
    rewards: [
      { type: "first", description: "1x Task Coin" },
      { type: "first", description: "1x Exercise Weapon (43.200 Charges)" },
      { type: "repeatable", description: "10.000.000 Gold Coins" }
    ],
    room: "Corrupted"
  },
  {
    id: "#78",
    name: "Podzilla Bottom",
    image: "/monsters/global/quara-looter.gif",
    killsRequired: 21000,
    monsters: ["Quara Looter", "Quara Plunderer", "Quara Raider"],
    rewards: [
      { type: "first", description: "5x Task Coin" },
      { type: "repeatable", description: "20.000.000 EXP x Rate" }
    ],
    room: "Corrupted"
  },

  // --- SALA 4: N'ZOTH'S ROOM (#79-#94) ---
  {
    id: "#79",
    name: "Earth Library",
    image: "/monsters/global/cursed-book.gif",
    killsRequired: 10000,
    monsters: ["Cursed Book", "Ink Blob"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "25.000.000 EXP x Rate" },
      { type: "repeatable", description: "20.000.000 EXP x Rate" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#80",
    name: "Ice Library",
    image: "/monsters/global/icecold-book.gif",
    killsRequired: 25000,
    monsters: ["Icecold Book", "Squid Warden", "Animated Feather"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "25.000.000 EXP x Rate" },
      { type: "repeatable", description: "20.000.000 EXP x Rate" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#81",
    name: "Fire Library",
    image: "/monsters/global/burning-book.gif",
    killsRequired: 25000,
    monsters: ["Burning Book", "Rage Squid", "Guardian Of Tales"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "25.000.000 EXP x Rate" },
      { type: "repeatable", description: "20.000.000 EXP x Rate" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#82",
    name: "Energy Library",
    image: "/monsters/global/energetic-book.gif",
    killsRequired: 25000,
    monsters: ["Energetic Book", "Brain Squid", "Energuardian Of Tales"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Library Ticket" },
      { type: "repeatable", description: "20.000.000 EXP x Rate" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#83",
    name: "Furious Crater",
    image: "/monsters/global/cloak-of-terror.gif",
    killsRequired: 35000,
    monsters: ["Vibrant Phantom", "Courage Leech", "Cloak Of Terror"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Bag You Desire" },
      { type: "first", description: "1x Mini Obelisk" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#84",
    name: "Mirrored Nightmare",
    image: "/monsters/global/many-faces.gif",
    killsRequired: 35000,
    monsters: ["Many Faces", "Druid's Apparition", "Knight's Apparition", "Paladin's Apparition", "Sorcerer's Apparition", "Monk's Apparition", "Distorted Phantom"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Bag You Desire" },
      { type: "first", description: "1x Mini Obelisk" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#85",
    name: "Rotten Wasteland",
    image: "/monsters/global/rotten-golem.gif",
    killsRequired: 35000,
    monsters: ["Branchy Crawler", "Rotten Golem", "Mould Phantom"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Bag You Desire" },
      { type: "first", description: "1x Mini Obelisk" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#86",
    name: "Claustrophobic Inferno",
    image: "/monsters/global/infernal-demon.gif",
    killsRequired: 35000,
    monsters: ["Brachiodemon", "Infernal Demon", "Infernal Phantom"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Bag You Desire" },
      { type: "first", description: "1x Mini Obelisk" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#87",
    name: "Ebb and Flow",
    image: "/monsters/global/bony-sea-devil.gif",
    killsRequired: 35000,
    monsters: ["Bony Sea Devil", "Turbulent Elemental", "Capricious Phantom"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Bag You Desire" },
      { type: "first", description: "1x Mini Obelisk" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#88",
    name: "Crystal Enigma",
    image: "/monsters/global/gorerilla.gif",
    killsRequired: 50000,
    monsters: ["Emerald Tortoise", "Gore Horn", "Gorerilla", "Hulking Prehemoth", "Sabretooth"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Primal Bag" },
      { type: "first", description: "1x Stone Of Ascension" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#89",
    name: "Sparkling Pools",
    image: "/monsters/global/noxious-ripptor.gif",
    killsRequired: 50000,
    monsters: ["Headpecker", "Mantosaurus", "Mercurial Menace", "Noxious Ripptor", "Shrieking Cry-stal"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Primal Bag" },
      { type: "first", description: "1x Stone Of Ascension" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#90",
    name: "Monster Graveyard",
    image: "/monsters/global/nighthunter.gif",
    killsRequired: 50000,
    monsters: ["Sulphider", "Sulphur Spouter", "Nighthunter", "Stalking Stalk", "Undertaker"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Primal Bag" },
      { type: "first", description: "1x Stone Of Ascension" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#91",
    name: "Putrefactory",
    image: "/monsters/global/sopping-carcass.gif",
    killsRequired: 60000,
    monsters: ["Meandering Mushroom", "Oozing Carcass", "Rotten Man-maggot", "Sopping Carcass", "Bloodjaw"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "5x Tainted Heart" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#92",
    name: "Gloom Pillars",
    image: "/monsters/global/wandering-pillar.gif",
    killsRequired: 60000,
    monsters: ["Converter", "Darklight Construct", "Darklight Emitter", "Wandering Pillar", "Bloodjaw"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "1x Exercise Weapon (46.800 Charges)" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#93",
    name: "Jaded Roots",
    image: "/monsters/global/sopping-corpus.gif",
    killsRequired: 60000,
    monsters: ["Bloated Man-maggot", "Mycobiontic Beetle", "Oozing Corpus", "Sopping Corpus", "Bloodjaw"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "5x Roulette Coin" }
    ],
    room: "N'Zoth"
  },
  {
    id: "#94",
    name: "Darklight Core",
    image: "/monsters/global/darklight-source.gif",
    killsRequired: 60000,
    monsters: ["Darklight Matter", "Darklight Source", "Darklight Striker", "Walking Pillar", "Bloodjaw"],
    rewards: [
      { type: "first", description: "3x Task Coin" },
      { type: "first", description: "5x Darklight Heart" }
    ],
    room: "N'Zoth"
  }
];
