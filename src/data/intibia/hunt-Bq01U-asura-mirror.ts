// Dados completos da Hunt: Asura Mirror
// Extraídos manualmente via Browser
// Data: 2026-02-06

export interface IntibiaHunt {
  id: string;
  slug: string;
  title: string;
  vocation: string;
  levelRange: { min: number; max: number };
  xpPerHour: { min: string; max: string };
  xpPerHour150: { min: string; max: string };
  profitPerHour: { min: string; max: string };
  video?: string;
  creatures: Array<{ name: string; xp: number; points: number }>;
  bestLoots: Array<{ name: string; value: string; chance: string }>;
  strategy: string;
  location: string;
  howToGetThere: string;
  supplies: Array<{ name: string; quantity: string }>;
  requirements: string;
  images: string[];
  mapCoordinates?: string;
  url: string;
}

export const huntBq01UAsuraMirror: IntibiaHunt = {
  url: "https://intibia.com/pt/hunts/Bq01U/knight-asura-mirror",
  id: "Bq01U",
  slug: "knight-asura-mirror",
  title: "Asura Mirror",
  vocation: "Knights",
  levelRange: { min: 400, max: 1500 },
  xpPerHour: { min: "4kk", max: "6kk" },
  xpPerHour150: { min: "6kk", max: "9kk" },
  profitPerHour: { min: "300k", max: "1kk" },
  video: "https://www.youtube.com/watch?v=th1jzPPJzhk",
  creatures: [
    { name: "True Dawnfire Asura", xp: 7475, points: 50 },
    { name: "True Midnight Asura", xp: 7313, points: 50 },
    { name: "True Frost Flower Asura", xp: 7069, points: 50 },
    { name: "Frost Flower Asura", xp: 4200, points: 25 },
    { name: "Dawnfire Asura", xp: 4100, points: 50 },
    { name: "Midnight Asura", xp: 4100, points: 25 },
    { name: "Hellspawn", xp: 2550, points: 25 }
  ],
  bestLoots: [
    { name: "Onyx Flail", value: "22k", chance: "0.1%" },
    { name: "Assassin Dagger", value: "20k", chance: "0.83%" },
    { name: "Skullcracker Armor", value: "18k", chance: "0.31%" }
  ],
  strategy: "Great place for knights level 400+ to make both experience and profit. It's near to the city and easy to refill.\n\nLure creatures and rotate your attack spells to kill them.\n\n⚠️ It's very important to trap True Asuras to be able to hunt properly here. Watch this video to learn how to do it.",
  location: "Asura Mirror",
  howToGetThere: "Walk north from Port Hope to Asura Palace. Go down to Asura Mirror.",
  supplies: [
    { name: "Strong Mana Potion", quantity: "2000x" },
    { name: "Supreme Health Potion", quantity: "200x" },
    { name: "Great Health Potion", quantity: "1000x" },
    { name: "Powerful Mana Imbuement", quantity: "2x" },
    { name: "Powerful Life Imbuement", quantity: "1x" },
    { name: "Powerful Strike Imbuement", quantity: "1x" },
    { name: "Powerful Skill Imbuement", quantity: "1x" }
  ],
  requirements: "The Lost Brother Quest done. Asura Palace Quest done. Mission \"The Lament\" started of The Secret Library Quest.",
  images: [],
  mapCoordinates: ""
};

export default huntBq01UAsuraMirror;
