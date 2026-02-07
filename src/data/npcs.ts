// NPCs - Non-Playable Characters
// Fonte: TibiaWiki, Rubinot Wiki
// Data: 2026-02-05

export interface NPCService {
  name: string;
  type: "buy" | "sell" | "quest" | "travel" | "deposit" | "withdraw" | "heal" | "blessing" | "other";
  items?: string[];
  notes?: string;
}

export interface NPC {
  id: string;
  name: string;
  location: string;
  position: { x: number; y: number; z: number };
  town: string;
  services: NPCService[];
  description: string;
  image?: string;
  notes?: string;
}

export const npcs: NPC[] = [
  {
    id: "npc-clement",
    name: "Clement",
    location: "Edron",
    position: { x: 32178, y: 31941, z: 7 },
    town: "Edron",
    services: [
      {
        name: "Sell Items",
        type: "sell",
        items: ["Weapons", "Armor", "Shields", "Helmets", "Legs", "Boots"],
        notes: "Buys items from adventurers"
      }
    ],
    description: "A friendly trader who buys used equipment from adventurers.",
    notes: "Good place to sell loot after hunts."
  },
  {
    id: "npc-amber",
    name: "Amber",
    location: "Edron",
    position: { x: 32172, y: 31924, z: 6 },
    town: "Edron",
    services: [
      {
        name: "Buy Items",
        type: "buy",
        items: ["Food", "Potions", "Runes"],
        notes: "Sells basic supplies"
      }
    ],
    description: "A helpful shopkeeper who sells essential supplies."
  },
  {
    id: "npc-thais-knight",
    name: "The King",
    location: "Thais",
    position: { x: 32321, y: 32212, z: 7 },
    town: "Thais",
    services: [
      {
        name: "Quest",
        type: "quest",
        notes: "Main story quests"
      }
    ],
    description: "The King of Thais, ruler of the kingdom.",
    notes: "Start point for many quests."
  },
  {
    id: "npc-darashia-depot",
    name: "Haroun",
    location: "Darashia",
    position: { x: 33289, y: 32480, z: 6 },
    town: "Darashia",
    services: [
      {
        name: "Deposit",
        type: "deposit",
        notes: "Depot storage"
      }
    ],
    description: "Depot keeper in Darashia.",
    notes: "Safe place to store items."
  },
  {
    id: "npc-yalahar-travel",
    name: "Captain Bluebeard",
    location: "Yalahar",
    position: { x: 32803, y: 31235, z: 7 },
    town: "Yalahar",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Port Hope", "Liberty Bay", "Yalahar - Sunken"]
      }
    ],
    description: "The captain of the ship that sails from Yalahar.",
    notes: "Travel by ship, costs gold."
  },
  {
    id: "npc-porthope",
    name: "Captain Gull",
    location: "Port Hope",
    position: { x: 32535, y: 32788, z: 7 },
    town: "Port Hope",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Yalahar", "Liberty Bay"]
      }
    ],
    description: "The captain of the ship in Port Hope.",
  },
  {
    id: "npc-ankrahmun-travel",
    name: "Asha",
    location: "Ankrahmun",
    position: { x: 33091, y: 32882, z: 6 },
    town: "Ankrahmun",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Carpet travel",
        items: ["Darashia", "Darama"]
      }
    ],
    description: "The carpet merchant who flies to other desert cities.",
    notes: "Travel by magic carpet, costs gold."
  },
  {
    id: "npc-svargrond-travel",
    name: "Frimbrik",
    location: "Svargrond",
    position: { x: 32338, y: 31107, z: 7 },
    town: "Svargrond",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other northern cities",
        items: ["Carlin", "Svargrond"]
      }
    ],
    description: "The captain of the ship in Svargrond.",
  },
  {
    id: "npc-rathleton-travel",
    name: "Captain Seagull",
    location: "Rathleton",
    position: { x: 33868, y: 31874, z: 6 },
    town: "Rathleton",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Port Hope", "Yalahar"]
      }
    ],
    description: "The captain of the ship in Rathleton.",
  },
  {
    id: "npc-venore-travel",
    name: "Captain Seastorm",
    location: "Venore",
    position: { x: 32955, y: 32076, z: 7 },
    town: "Venore",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Thais", "Kazordoon", "Venore"]
      }
    ],
    description: "The captain of the ship in Venore.",
  },
  {
    id: "npc-kazordoon-travel",
    name: "Captain Bluebird",
    location: "Kazordoon",
    position: { x: 32638, y: 31928, z: 7 },
    town: "Kazordoon",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Venore", "Kazordoon"]
      }
    ],
    description: "The captain of the ship in Kazordoon.",
  },
  {
    id: "npc-carlin-travel",
    name: "Captain Fearless",
    location: "Carlin",
    position: { x: 32183, y: 31934, z: 7 },
    town: "Carlin",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Ab'Dendriel", "Svargrond", "Carlin"]
      }
    ],
    description: "The captain of the ship in Carlin.",
  },
  {
    id: "npc-ab-dendriel-travel",
    name: "Captain Seahorse",
    location: "Ab'Dendriel",
    position: { x: 32720, y: 31668, z: 7 },
    town: "Ab'Dendriel",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Carlin", "Port Hope"]
      }
    ],
    description: "The captain of the ship in Ab'Dendriel.",
  },
  {
    id: "npc-liberty-bay-travel",
    name: "Captain Seahawk",
    location: "Liberty Bay",
    position: { x: 32294, y: 32832, z: 7 },
    town: "Liberty Bay",
    services: [
      {
        name: "Travel",
        type: "travel",
        notes: "Sails to other cities",
        items: ["Port Hope", "Yalahar"]
      }
    ],
    description: "The captain of the ship in Liberty Bay.",
  },
  {
    id: "npc-thais-blessing",
    name: "Norf",
    location: "Thais",
    position: { x: 32549, y: 32350, z: 7 },
    town: "Thais",
    services: [
      {
        name: "Blessing",
        type: "blessing",
        notes: "Adventurer's Blessing",
        items: ["Blessing of the Adventure", "Blessing of the Wise"]
      }
    ],
    description: "The priest who blesses adventurers.",
    notes: "Costs 10000 gold per blessing."
  },
  {
    id: "npc-ankrahmun-heal",
    name: "Alesar",
    location: "Ankrahmun",
    position: { x: 33166, y: 32884, z: 7 },
    town: "Ankrahmun",
    services: [
      {
        name: "Heal",
        type: "heal",
        notes: "Heals HP and removes poison/curse"
      }
    ],
    description: "The temple priest in Ankrahmun.",
    notes: "Free healing service."
  },
  {
    id: "npc-carlin-heal",
    name: "Elane",
    location: "Carlin",
    position: { x: 32360, y: 31843, z: 7 },
    town: "Carlin",
    services: [
      {
        name: "Heal",
        type: "heal",
        notes: "Heals HP"
      }
    ],
    description: "The temple priestess in Carlin.",
    notes: "Free healing service."
  },
  {
    id: "npc-thais-heal",
    name: "Kasmir",
    location: "Thais",
    position: { x: 32549, y: 32350, z: 7 },
    town: "Thais",
    services: [
      {
        name: "Heal",
        type: "heal",
        notes: "Heals HP and removes poison/curse"
      }
    ],
    description: "The temple priest in Thais.",
    notes: "Free healing service."
  },
  {
    id: "npc-abbey-of-amber",
    name: "Sister Celina",
    location: "Abbey of Amber",
    position: { x: 32054, y: 32173, z: 7 },
    town: "Abbey of Amber",
    services: [
      {
        name: "Quest",
        type: "quest",
        notes: "Promotion quest"
      }
    ],
    description: "The nun who helps adventurers with their promotion.",
    notes: "Promotion unlocks abilities and spells."
  },
  {
    id: "npc-yalahar-depot",
    name: "Azerus",
    location: "Yalahar",
    position: { x: 32787, y: 31247, z: 7 },
    town: "Yalahar",
    services: [
      {
        name: "Deposit",
        type: "deposit",
        notes: "Depot storage"
      }
    ],
    description: "Depot keeper in Yalahar.",
  },
  {
    id: "npc-carlin-depot",
    name: "Eliott",
    location: "Carlin",
    position: { x: 32360, y: 31843, z: 7 },
    town: "Carlin",
    services: [
      {
        name: "Deposit",
        type: "deposit",
        notes: "Depot storage"
      }
    ],
    description: "Depot keeper in Carlin.",
  },
];

// Helper functions
export const getNPCById = (id: string) => {
  return npcs.find(n => n.id === id);
};

export const getNPCsByTown = (town: string) => {
  return npcs.filter(n => n.town.toLowerCase() === town.toLowerCase());
};

export const getNPCsByService = (service: string) => {
  return npcs.filter(n =>
    n.services.some(s => s.type.toLowerCase().includes(service.toLowerCase()))
  );
};

export const getTravelNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "travel")
  );
};

export const getDepotNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "deposit")
  );
};

export const getHealNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "heal")
  );
};

export const getBlessingNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "blessing")
  );
};

export const getQuestNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "quest")
  );
};

export const getBuyNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "buy")
  );
};

export const getSellNPCs = () => {
  return npcs.filter(n =>
    n.services.some(s => s.type === "sell")
  );
};

export const totalNPCs = npcs.length;
