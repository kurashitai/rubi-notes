// Keys - Chaves para quests
// Fonte: TibiaWiki, Rubinot Wiki
// Data: 2026-02-05

export interface Key {
  id: string;
  number: number; // key number like 3099
  name: string;
  quest: string;
  location: string;
  position: { x: number; y: number; z: number };
  use: string;
  description: string;
  notes?: string;
}

export const keys: Key[] = [
  {
    id: "key-3099",
    number: 3099,
    name: "Thais Temple Key",
    quest: "Thais Temple Quest",
    location: "Thais",
    position: { x: 32369, y: 32241, z: 7 },
    use: "Opens temple door in Thais",
    description: "A key that opens the door to the inner temple.",
    notes: "Found during the Thais Temple Quest."
  },
  {
    id: "key-3100",
    number: 3100,
    name: "Cyclopolis Key",
    quest: "Cyclopolis Quest",
    location: "Cormaya",
    position: { x: 33312, y: 31890, z: 7 },
    use: "Opens door in Cyclopolis",
    description: "A key that opens the door to the Cyclopolis treasure room.",
    notes: "Found in Cyclopolis."
  },
  {
    id: "key-3301",
    number: 3301,
    name: "Deep Dragon Key",
    quest: "Dragon Lair Quest",
    location: "Dragon Lair",
    position: { x: 32856, y: 32276, z: 7 },
    use: "Opens deep dragon room",
    description: "A key that opens the door to the deeper dragon rooms.",
    notes: "Drop from Dragons."
  },
  {
    id: "key-3302",
    number: 3302,
    name: "Hydra Cave Key",
    quest: "Hydra Quest",
    location: "Edron",
    position: { x: 33173, y: 31764, z: 7 },
    use: "Opens hydra cave door",
    description: "A key that opens the door to the hydra spawning grounds.",
    notes: "Found in Edron."
  },
  {
    id: "key-3303",
    number: 3303,
    name: "Pits of Insectoid Key",
    quest: "Pits of Insectoid Quest",
    location: "Cormaya",
    position: { x: 33310, y: 31888, z: 7 },
    use: "Opens insectoid pit door",
    description: "A key that opens the door to the Pits of Insectoid.",
    notes: "Complete the Pits of Insectoid quest."
  },
  {
    id: "key-3304",
    number: 3304,
    name: "Demon Helmet Key",
    quest: "Demon Helmet Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens demon helmet room",
    description: "A key that opens the door to the Demon Helmet.",
    notes: "Very rare reward from Demon Helmet Quest."
  },
  {
    id: "key-3305",
    number: 3305,
    name: "Magic Plate Armor Key",
    quest: "Magic Plate Armor Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens magic plate armor room",
    description: "A key that opens the door to the Magic Plate Armor.",
    notes: "Very rare reward from Magic Plate Armor Quest."
  },
  {
    id: "key-3306",
    number: 3306,
    name: "Fire Axe Key",
    quest: "Fire Axe Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens fire axe room",
    description: "A key that opens the door to the Fire Axe.",
    notes: "Reward from Fire Axe Quest."
  },
  {
    id: "key-3307",
    number: 3307,
    name: "Stone Skin Amulet Key",
    quest: "Stone Skin Amulet Quest",
    location: "Kazordoon",
    position: { x: 32649, y: 31923, z: 7 },
    use: "Opens stone skin amulet room",
    description: "A key that opens the door to the Stone Skin Amulet.",
    notes: "Reward from Stone Skin Amulet Quest."
  },
  {
    id: "key-3308",
    number: 3308,
    name: "Giant Sword Key",
    quest: "Giant Sword Quest",
    location: "Kazordoon",
    position: { x: 32649, y: 31923, z: 7 },
    use: "Opens giant sword room",
    description: "A key that opens the door to the Giant Sword.",
    notes: "Reward from Giant Sword Quest."
  },
  {
    id: "key-3309",
    number: 3309,
    name: "Shadow Sword Key",
    quest: "Shadow Sword Quest",
    location: "Kazordoon",
    position: { x: 32649, y: 31923, z: 7 },
    use: "Opens shadow sword room",
    description: "A key that opens the door to the Shadow Sword.",
    notes: "Reward from Shadow Sword Quest."
  },
  {
    id: "key-3310",
    number: 3310,
    name: "Bright Sword Key",
    quest: "Bright Sword Quest",
    location: "Thais",
    position: { x: 32369, y: 32241, z: 7 },
    use: "Opens bright sword room",
    description: "A key that opens the door to the Bright Sword.",
    notes: "Reward from Bright Sword Quest."
  },
  {
    id: "key-3311",
    number: 3311,
    name: "Thunder Hammer Key",
    quest: "Thunder Hammer Quest",
    location: "Svargrond",
    position: { x: 32326, y: 31107, z: 7 },
    use: "Opens thunder hammer room",
    description: "A key that opens the door to the Thunder Hammer.",
    notes: "Reward from Thunder Hammer Quest."
  },
  {
    id: "key-3312",
    number: 3312,
    name: "War Hammer Key",
    quest: "War Hammer Quest",
    location: "Svargrond",
    position: { x: 32326, y: 31107, z: 7 },
    use: "Opens war hammer room",
    description: "A key that opens the door to the War Hammer.",
    notes: "Reward from War Hammer Quest."
  },
  {
    id: "key-3313",
    number: 3313,
    name: "Dragon Lance Key",
    quest: "Dragon Lance Quest",
    location: "Edron",
    position: { x: 33173, y: 31764, z: 7 },
    use: "Opens dragon lance room",
    description: "A key that opens the door to the Dragon Lance.",
    notes: "Reward from Dragon Lance Quest."
  },
  {
    id: "key-3314",
    number: 3314,
    name: "Knight Armor Key",
    quest: "Knight Armor Quest",
    location: "Thais",
    position: { x: 32369, y: 32241, z: 7 },
    use: "Opens knight armor room",
    description: "A key that opens the door to the Knight Armor.",
    notes: "Reward from Knight Armor Quest."
  },
  {
    id: "key-3315",
    number: 3315,
    name: "Crown Armor Key",
    quest: "Crown Armor Quest",
    location: "Thais",
    position: { x: 32369, y: 32241, z: 7 },
    use: "Opens crown armor room",
    description: "A key that opens the door to the Crown Armor.",
    notes: "Reward from Crown Armor Quest."
  },
  {
    id: "key-3316",
    number: 3316,
    name: "Golden Armor Key",
    quest: "Golden Armor Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens golden armor room",
    description: "A key that opens the door to the Golden Armor.",
    notes: "Very rare reward from Golden Armor Quest."
  },
  {
    id: "key-3317",
    number: 3317,
    name: "Mysterious Key",
    quest: "Mysterious Quest",
    location: "Unknown",
    position: { x: 0, y: 0, z: 0 },
    use: "Opens mysterious door",
    description: "A mysterious key that opens a unknown door.",
    notes: "Found during mysterious quests."
  },
  {
    id: "key-3318",
    number: 3318,
    name: "Depot Key",
    quest: "Depot",
    location: "All Towns",
    position: { x: 0, y: 0, z: 0 },
    use: "Opens depot locker",
    description: "A key that opens your personal depot locker.",
    notes: "Free from depot NPCs."
  },
  {
    id: "key-3319",
    number: 3319,
    name: "House Key",
    quest: "House Purchase",
    location: "All Towns",
    position: { x: 0, y: 0, z: 0 },
    use: "Opens purchased house",
    description: "A key that opens a purchased house.",
    notes: "Obtained when buying a house."
  },
  {
    id: "key-3320",
    number: 3320,
    name: "Guildhall Key",
    quest: "Guildhall Purchase",
    location: "All Towns",
    position: { x: 0, y: 0, z: 0 },
    use: "Opens purchased guildhall",
    description: "A key that opens a purchased guildhall.",
    notes: "Obtained when buying a guildhall."
  },
  {
    id: "key-3321",
    number: 3321,
    name: "The Annihilator Key",
    quest: "The Annihilator Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens annihilator reward room",
    description: "A key that opens the door to the Annihilator rewards.",
    notes: "Reward from completing The Annihilator Quest."
  },
  {
    id: "key-3322",
    number: 3322,
    name: "The Pits of Inferno Key",
    quest: "The Pits of Inferno Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens pits of inferno room",
    description: "A key that opens the door to the Pits of Inferno rewards.",
    notes: "Reward from completing The Pits of Inferno Quest."
  },
  {
    id: "key-3323",
    number: 3323,
    name: "The Wrath of the Emperor Key",
    quest: "The Wrath of the Emperor Quest",
    location: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    use: "Opens wrath of emperor reward room",
    description: "A key that opens the door to the Wrath of the Emperor rewards.",
    notes: "Reward from completing The Wrath of the Emperor Quest."
  },
  {
    id: "key-3324",
    number: 3324,
    name: "The Demon Oak Key",
    quest: "The Demon Oak Quest",
    location: "Unknown",
    position: { x: 0, y: 0, z: 0 },
    use: "Opens demon oak area",
    description: "A key that opens the door to the Demon Oak.",
    notes: "Reward from completing The Demon Oak Quest."
  },
];

// Helper functions
export const getKeyById = (id: string) => {
  return keys.find(k => k.id === id);
};

export const getKeyByNumber = (number: number) => {
  return keys.find(k => k.number === number);
};

export const getKeysByQuest = (quest: string) => {
  return keys.filter(k =>
    k.quest.toLowerCase().includes(quest.toLowerCase())
  );
};

export const getKeysByLocation = (location: string) => {
  return keys.filter(k =>
    k.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getRareKeys = () => {
  return keys.filter(k => k.notes && k.notes.toLowerCase().includes("rare"));
};

export const getQuestRewardKeys = () => {
  return keys.filter(k => k.quest && !k.quest.includes("Depot") && !k.quest.includes("House"));
};

export const totalKeys = keys.length;
export const questKeys = keys.filter(k => k.quest && !k.quest.includes("Depot") && !k.quest.includes("House")).length;
export const houseKeys = keys.filter(k => k.quest && k.quest.includes("House")).length;
