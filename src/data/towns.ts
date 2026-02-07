// Towns - Cidades de Tibia
// Fonte: TibiaWiki, Rubinot Wiki
// Data: 2026-02-05

export interface TravelRoute {
  destination: string;
  method: "ship" | "carpet" | "magic" | "walking";
  cost: number;
  npc?: string;
  levelRequired?: number;
  notes?: string;
}

export interface Town {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
  continent: string;
  type: "main" | "starter" | "special";
  premium: boolean;
  hasTemple: boolean;
  hasDepot: boolean;
  hasBoat: boolean;
  levelRequired?: number;
  recommendedLevel: string;
  description: string;
  huntingGrounds: string[];
  travelRoutes: TravelRoute[];
  notes?: string;
}

export const towns: Town[] = [
  {
    id: "town-thais",
    name: "Thais",
    position: { x: 32369, y: 32241, z: 7 },
    continent: "Mainland",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "1+",
    description: "The capital city of Tibia. Home to the King and the most important quests.",
    huntingGrounds: ["Rotworms", "Trolls", "Cyclops", "Orcs"],
    travelRoutes: [
      { destination: "Venore", method: "ship", cost: 0, npc: "Captain Seastorm" },
      { destination: "Carlin", method: "walking", cost: 0, notes: "Walk north" },
      { destination: "Ab'Dendriel", method: "ship", cost: 0, npc: "Captain Seahorse" },
      { destination: "Edron", method: "ship", cost: 0, npc: "Captain Bluebeard" },
    ],
    notes: "Most important city, start point for many quests."
  },
  {
    id: "town-carlin",
    name: "Carlin",
    position: { x: 32360, y: 31782, z: 7 },
    continent: "Mainland",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "1+",
    description: "A city ruled by women in the north of Tibia. Home of the fierce warriors.",
    huntingGrounds: ["Rotworms", "Trolls", "Cyclops", "Crypt Shamblers"],
    travelRoutes: [
      { destination: "Svargrond", method: "ship", cost: 0, npc: "Captain Fearless" },
      { destination: "Ab'Dendriel", method: "ship", cost: 0, npc: "Captain Seahorse" },
      { destination: "Thais", method: "walking", cost: 0, notes: "Walk south" },
    ],
    notes: "Good for mid-level hunts in the north."
  },
  {
    id: "town-venore",
    name: "Venore",
    position: { x: 32957, y: 32076, z: 7 },
    continent: "Mainland",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "20+",
    description: "A city surrounded by swamp and marshlands. Famous for the Green Djinn.",
    huntingGrounds: ["Goblins", "Rotworms", "Trolls", "Cyclops"],
    travelRoutes: [
      { destination: "Kazordoon", method: "ship", cost: 0, npc: "Captain Bluebird" },
      { destination: "Thais", method: "ship", cost: 0, npc: "Captain Seastorm" },
    ],
    notes: "Home to Green Djinn quest."
  },
  {
    id: "town-kazordoon",
    name: "Kazordoon",
    position: { x: 32649, y: 31923, z: 7 },
    continent: "Mainland",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "30+",
    description: "The city of dwarves. Famous for mining and the Blue Djinn.",
    huntingGrounds: ["Cyclops", "Goblins", "Orcs", "Dwarves"],
    travelRoutes: [
      { destination: "Venore", method: "ship", cost: 0, npc: "Captain Bluebird" },
      { destination: "Yalahar", method: "ship", cost: 0, npc: "Captain Bluebeard" },
    ],
    notes: "Home to Blue Djinn quest and many dwarf quests."
  },
  {
    id: "town-edron",
    name: "Edron",
    position: { x: 33173, y: 31764, z: 7 },
    continent: "Mainland",
    type: "starter",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "20+",
    description: "An island city famous for the Hero Cave and Hydra spawns.",
    huntingGrounds: ["Rotworms", "Goblins", "Hydras", "Cyclops"],
    travelRoutes: [
      { destination: "Thais", method: "ship", cost: 0, npc: "Captain Bluebeard" },
      { destination: "Darashia", method: "walking", cost: 0, notes: "Walk north" },
    ],
    notes: "Home to Hero Cave. Good for mid-level hunting."
  },
  {
    id: "town-darashia",
    name: "Darashia",
    position: { x: 33213, y: 32454, z: 7 },
    continent: "Darama",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: false,
    recommendedLevel: "40+",
    description: "A city in the desert of Darama. Famous for the Pharaoh quests.",
    huntingGrounds: ["Hydras", "Cyclops", "Goblins", "Scarabs"],
    travelRoutes: [
      { destination: "Ankrahmun", method: "carpet", cost: 0, npc: "Asha" },
      { destination: "Edron", method: "walking", cost: 0, notes: "Walk south" },
    ],
    notes: "Home to Pharaoh quest series."
  },
  {
    id: "town-ankrahmun",
    name: "Ankrahmun",
    position: { x: 33094, y: 32883, z: 7 },
    continent: "Darama",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: false,
    recommendedLevel: "50+",
    description: "A city in the deep desert. Home to the undead and pharaohs.",
    huntingGrounds: ["Undead", "Crypt Shamblers", "Scarabs", "Hydras"],
    travelRoutes: [
      { destination: "Darashia", method: "carpet", cost: 0, npc: "Asha" },
      { destination: "Darama", method: "carpet", cost: 0, npc: "Asha" },
    ],
    notes: "Home to many undead quests."
  },
  {
    id: "town-port-hope",
    name: "Port Hope",
    position: { x: 32595, y: 32744, z: 7 },
    continent: "Tiquanda",
    type: "starter",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "60+",
    description: "A city in the jungle of Tiquanda. Home to the apes and ancient creatures.",
    huntingGrounds: ["Apes", "Giant Spiders", "Crystal Spiders", "Tarantulas"],
    travelRoutes: [
      { destination: "Yalahar", method: "ship", cost: 0, npc: "Captain Gull" },
      { destination: "Liberty Bay", method: "ship", cost: 0, npc: "Captain Gull" },
      { destination: "Ab'Dendriel", method: "ship", cost: 0, npc: "Captain Seahorse" },
    ],
    notes: "Home to Ape City quests."
  },
  {
    id: "town-yalahar",
    name: "Yalahar",
    position: { x: 32816, y: 31272, z: 7 },
    continent: "Mainland",
    type: "special",
    premium: true,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "70+",
    description: "An ancient city surrounded by a wall. Home to many challenging quests.",
    huntingGrounds: ["Giant Spiders", "Hydras", "Undead", "Elementals"],
    travelRoutes: [
      { destination: "Port Hope", method: "ship", cost: 0, npc: "Captain Bluebeard" },
      { destination: "Liberty Bay", method: "ship", cost: 0, npc: "Captain Bluebeard" },
      { destination: "Kazordoon", method: "ship", cost: 0, npc: "Captain Bluebeard" },
    ],
    notes: "Premium account required. Home to many high-level quests."
  },
  {
    id: "town-liberty-bay",
    name: "Liberty Bay",
    position: { x: 32317, y: 32826, z: 7 },
    continent: "Tiquanda",
    type: "main",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "50+",
    description: "A port city on the southern coast. Famous for pirate quests.",
    huntingGrounds: ["Pirates", "Giant Spiders", "Tarantulas", "Quaras"],
    travelRoutes: [
      { destination: "Port Hope", method: "ship", cost: 0, npc: "Captain Seahawk" },
      { destination: "Yalahar", method: "ship", cost: 0, npc: "Captain Seahawk" },
    ],
    notes: "Home to pirate quests."
  },
  {
    id: "town-ab-dendriel",
    name: "Ab'Dendriel",
    position: { x: 32720, y: 31668, z: 7 },
    continent: "Mainland",
    type: "starter",
    premium: false,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "1+",
    description: "A peaceful island city. Home to elves and nature.",
    huntingGrounds: ["Rotworms", "Trolls", "Goblins", "Elves"],
    travelRoutes: [
      { destination: "Carlin", method: "ship", cost: 0, npc: "Captain Seahorse" },
      { destination: "Port Hope", method: "ship", cost: 0, npc: "Captain Seahorse" },
      { destination: "Thais", method: "ship", cost: 0, npc: "Captain Seahorse" },
    ],
    notes: "Good for low-level hunting. Home to elves."
  },
  {
    id: "town-svargrond",
    name: "Svargrond",
    position: { x: 32326, y: 31107, z: 7 },
    continent: "Mainland",
    type: "special",
    premium: true,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "100+",
    description: "A northern city surrounded by ice. Home to barbarians and fierce creatures.",
    huntingGrounds: ["Barbarians", "Yakchal", "Bears", "Undead"],
    travelRoutes: [
      { destination: "Carlin", method: "ship", cost: 0, npc: "Frimbrik" },
    ],
    notes: "Premium account required. Very cold region."
  },
  {
    id: "town-rathleton",
    name: "Rathleton",
    position: { x: 33868, y: 31874, z: 6 },
    continent: "Tiquanda",
    type: "special",
    premium: true,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "150+",
    description: "A city built on stilts in the jungle. Home to glooth creatures.",
    huntingGrounds: ["Waspoids", "Glooth", "Crystal Spiders", "Tarantulas"],
    travelRoutes: [
      { destination: "Port Hope", method: "ship", cost: 0, npc: "Captain Seagull" },
      { destination: "Yalahar", method: "ship", cost: 0, npc: "Captain Seagull" },
    ],
    notes: "Premium account required. Home to glooth quests."
  },
  {
    id: "town-roshamuul",
    name: "Roshamuul",
    position: { x: 33358, y: 31363, z: 7 },
    continent: "Mainland",
    type: "special",
    premium: true,
    hasTemple: false,
    hasDepot: false,
    hasBoat: false,
    recommendedLevel: "200+",
    description: "An ancient underground city. Home to the most dangerous creatures.",
    huntingGrounds: ["Demons", "Undead Dragons", "Hydras", "Ghazbaran"],
    travelRoutes: [],
    notes: "Premium account required. No temple or depot. Very dangerous."
  },
  {
    id: "town-gray-island",
    name: "Gray Island",
    position: { x: 33197, y: 31970, z: 7 },
    continent: "Islands",
    type: "special",
    premium: true,
    hasTemple: true,
    hasDepot: false,
    hasBoat: true,
    recommendedLevel: "250+",
    description: "A mysterious island. Home to the Gray Island quests.",
    huntingGrounds: ["Undead", "Ghosts", "Nightmares", "Demons"],
    travelRoutes: [],
    notes: "Premium account required. Accessible by ship."
  },
  {
    id: "town-cormaya",
    name: "Cormaya",
    position: { x: 33312, y: 31890, z: 7 },
    continent: "Mainland",
    type: "special",
    premium: true,
    hasTemple: true,
    hasDepot: true,
    hasBoat: true,
    recommendedLevel: "80+",
    description: "An island city near Edron. Famous for the Cyclopolis.",
    huntingGrounds: ["Cyclops", "Orcs", "Goblins", "Dwarves"],
    travelRoutes: [
      { destination: "Edron", method: "walking", cost: 0, notes: "Walk south" },
    ],
    notes: "Premium account required. Home to Cyclopolis."
  },
];

// Helper functions
export const getTownById = (id: string) => {
  return towns.find(t => t.id === id);
};

export const getTownsByContinent = (continent: string) => {
  return towns.filter(t =>
    t.continent.toLowerCase().includes(continent.toLowerCase())
  );
};

export const getTownsByType = (type: string) => {
  return towns.filter(t => t.type === type);
};

export const getPremiumTowns = () => {
  return towns.filter(t => t.premium);
};

export const getFreeTowns = () => {
  return towns.filter(t => !t.premium);
};

export const getTownsByLevel = (level: number) => {
  return towns.filter(t => {
    if (!t.recommendedLevel) return true;
    const match = t.recommendedLevel.match(/(\d+)\+/);
    if (!match) return true;
    return parseInt(match[1]) <= level;
  });
};

export const getTownsByHuntingGround = (huntingGround: string) => {
  return towns.filter(t =>
    t.huntingGrounds.some(h =>
      h.toLowerCase().includes(huntingGround.toLowerCase())
    )
  );
};

export const totalTowns = towns.length;
export const premiumTowns = towns.filter(t => t.premium).length;
export const freeTowns = towns.filter(t => !t.premium).length;
export const mainlandTowns = towns.filter(t => t.continent === "Mainland").length;
