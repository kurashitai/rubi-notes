export interface ImbuementData {
  id: string;
  name: string;
  type: "Attack" | "Defense" | "Utility";
  tier: 1 | 2 | 3; // Basic, Intricate, Powerful
  effect: string;
  slots: ("Helmet" | "Armor" | "Legs" | "Boots" | "Weapon" | "Shield" | "Backpack")[];
  materials: {
    item: string;
    amount: number;
    creatureSource: string; // Criatura principal que dropa
  }[];
  recommendation: "Essencial" | "Situacional" | "Opcional";
}

export const imbuementsDatabase: ImbuementData[] = [
  // --- ATTACK (CRIT, SKILL, MAGIC) ---
  {
    id: "crit",
    name: "Critical Hit (Strike)",
    type: "Attack",
    tier: 3,
    effect: "+50% Critical Damage, 10% Chance",
    slots: ["Weapon"],
    materials: [
      { item: "Protective Charm", amount: 20, creatureSource: "Amazon" },
      { item: "Sabretooth", amount: 25, creatureSource: "Mutated Tiger" },
      { item: "Vexclaw Talon", amount: 5, creatureSource: "Vexclaw" }
    ],
    recommendation: "Essencial"
  },
  {
    id: "life-leech",
    name: "Life Leech (Vampirism)",
    type: "Utility",
    tier: 3,
    effect: "25% Life Leech (x2 slots = 50%)",
    slots: ["Weapon", "Armor"],
    materials: [
      { item: "Vampire Teeth", amount: 25, creatureSource: "Vampire" },
      { item: "Bloody Pincers", amount: 15, creatureSource: "Blood Crab" },
      { item: "Piece of Dead Brain", amount: 5, creatureSource: "Blightwalker" } // ou Bonelord Eye antigo
    ],
    recommendation: "Essencial"
  },
  {
    id: "mana-leech",
    name: "Mana Leech (Void)",
    type: "Utility",
    tier: 3,
    effect: "8% Mana Leech (x2 slots = 16%)",
    slots: ["Weapon", "Helmet"],
    materials: [
      { item: "Rope Belt", amount: 25, creatureSource: "Nomad" },
      { item: "Silencer Claws", amount: 25, creatureSource: "Silencer" },
      { item: "Some Grimeleech Wings", amount: 5, creatureSource: "Grimeleech" }
    ],
    recommendation: "Essencial"
  },
  {
    id: "skill-sword",
    name: "Sword Skill (Slash)",
    type: "Attack",
    tier: 3,
    effect: "+4 Sword Fighting",
    slots: ["Weapon", "Helmet"],
    materials: [
      { item: "Lion's Mane", amount: 25, creatureSource: "Lion" },
      { item: "Mooh'tah Shell", amount: 25, creatureSource: "Mooh'tah Warrior" },
      { item: "War Crystal", amount: 5, creatureSource: "War Golem" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "skill-axe",
    name: "Axe Skill (Chop)",
    type: "Attack",
    tier: 3,
    effect: "+4 Axe Fighting",
    slots: ["Weapon", "Helmet"],
    materials: [
      { item: "Orc Tooth", amount: 25, creatureSource: "Orc" },
      { item: "Battle Stone", amount: 25, creatureSource: "War Golem" },
      { item: "Moohtant Horn", amount: 5, creatureSource: "Moohtant" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "skill-club",
    name: "Club Skill (Bash)",
    type: "Attack",
    tier: 3,
    effect: "+4 Club Fighting",
    slots: ["Weapon", "Helmet"],
    materials: [
      { item: "Cyclops Toe", amount: 25, creatureSource: "Cyclops" },
      { item: "Ogre Nose Ring", amount: 25, creatureSource: "Ogre Brute" },
      { item: "Warmaster's Wristguards", amount: 5, creatureSource: "Draken Warmaster" }
    ],
    recommendation: "Situacional"
  },

  // --- ELEMENTAL PROTECTION ---
  {
    id: "prot-fire",
    name: "Fire Protection (Dragon Hide)",
    type: "Defense",
    tier: 3,
    effect: "+15% Fire Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Green Dragon Leather", amount: 20, creatureSource: "Dragon" },
      { item: "Red Dragon Leather", amount: 10, creatureSource: "Dragon Lord" },
      { item: "Hardened Bone", amount: 5, creatureSource: "Hellspawn" } // ou Blightwalker
    ],
    recommendation: "Situacional"
  },
  {
    id: "prot-ice",
    name: "Ice Protection (Quara Scale)",
    type: "Defense",
    tier: 3,
    effect: "+15% Ice Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Winter Wolf Fur", amount: 25, creatureSource: "Winter Wolf" },
      { item: "Thick Fur", amount: 15, creatureSource: "Mammoth" },
      { item: "Deepling Warts", amount: 10, creatureSource: "Deepling" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "prot-earth",
    name: "Earth Protection (Snake Skin)",
    type: "Defense",
    tier: 3,
    effect: "+15% Earth Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Piece of Swamplurker Skin", amount: 25, creatureSource: "Swamplurker" },
      { item: "Broken Shamanic Staff", amount: 20, creatureSource: "Orc Shaman" },
      { item: "Strand of Medusa Hair", amount: 5, creatureSource: "Medusa" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "prot-energy",
    name: "Energy Protection (Cloud Fabric)",
    type: "Defense",
    tier: 3,
    effect: "+15% Energy Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Wool", amount: 20, creatureSource: "Sheep" },
      { item: "Crawler Head Plating", amount: 15, creatureSource: "Crawler" },
      { item: "Wyrm Scale", amount: 10, creatureSource: "Wyrm" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "prot-death",
    name: "Death Protection (Lich Shroud)",
    type: "Defense",
    tier: 3,
    effect: "+15% Death Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Flask of Embalming Fluid", amount: 25, creatureSource: "Mummy" },
      { item: "Gloom Wolf Fur", amount: 20, creatureSource: "Gloom Wolf" },
      { item: "Mystical Hourglass", amount: 5, creatureSource: "Ghastly Dragon" }
    ],
    recommendation: "Situacional"
  },
  {
    id: "prot-holy",
    name: "Holy Protection (Demon Presence)",
    type: "Defense",
    tier: 3,
    effect: "+15% Holy Protection",
    slots: ["Armor", "Shield"],
    materials: [
      { item: "Cultish Robe", amount: 25, creatureSource: "Cult" },
      { item: "Cultish Mask", amount: 25, creatureSource: "Cult" },
      { item: "Hellspawn Tail", amount: 20, creatureSource: "Hellspawn" }
    ],
    recommendation: "Situacional"
  },

  // --- UTILITY (SPEED, CAP) ---
  {
    id: "speed",
    name: "Speed (Swiftness)",
    type: "Utility",
    tier: 3,
    effect: "+30 Speed",
    slots: ["Boots"],
    materials: [
      { item: "Damselfly Wing", amount: 15, creatureSource: "Damselfly" },
      { item: "Compass", amount: 25, creatureSource: "Pirate" },
      { item: "Waspoid Wing", amount: 20, creatureSource: "Waspoid" }
    ],
    recommendation: "Opcional"
  },
  {
    id: "cap",
    name: "Capacity (Featherweight)",
    type: "Utility",
    tier: 3,
    effect: "+15% Capacity",
    slots: ["Backpack"],
    materials: [
      { item: "Fairy Wings", amount: 20, creatureSource: "Fairy" },
      { item: "Little Bowl of Myrrh", amount: 10, creatureSource: "Putrid Mummy" },
      { item: "Goosebump Leather", amount: 5, creatureSource: "Undead Elite Gladiator" }
    ],
    recommendation: "Opcional"
  }
];
