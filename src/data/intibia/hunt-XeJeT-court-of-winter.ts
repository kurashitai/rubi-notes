// Dados completos da Hunt: Court of Winter
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

export const huntXeJeTCourtOfWinter: IntibiaHunt = {
  url: "https://intibia.com/pt/hunts/XeJeT/druid-sorcerer-court-of-winter-ice-elves-gfbs",
  id: "XeJeT",
  slug: "druid-sorcerer-court-of-winter-ice-elves-gfbs",
  title: "Court of Winter",
  vocation: "Mages",
  levelRange: { min: 270, max: 600 },
  xpPerHour: { min: "2kk", max: "4kk" },
  xpPerHour150: { min: "3kk", max: "6kk" },
  profitPerHour: { min: "0gp", max: "500k" },
  video: "https://www.youtube.com/watch?v=XxLZyT2baIw",
  creatures: [
    { name: "Thanatursus", xp: 6300, points: 50 },
    { name: "Soul-Broken Harbinger", xp: 5800, points: 50 },
    { name: "Crazed Winter Vanguard", xp: 5400, points: 50 },
    { name: "Crazed Winter Rearguard", xp: 4700, points: 50 },
    { name: "Arachnophobica", xp: 4700, points: 50 },
    { name: "Hibernal Moth", xp: 700, points: 25 }
  ],
  bestLoots: [
    { name: "Spellbook of Mind Control", value: "13k", chance: "1.13%" },
    { name: "Warrior's Axe", value: "11k", chance: "1.71%" },
    { name: "Glacier Robe", value: "11k", chance: "2.47%" }
  ],
  strategy: "Good hunt for mages level 260+ for both xp and profit. Better for sorcerers because of creatures are weak to fire 🔥. Dodge charm on Crazed Winter Vanguard. Equipments: Foxtail Amulet, Frostmind Raiment, Glacier Kilt, Glacier Shoes, Blue Gem.",
  location: "Feyrist",
  howToGetThere: "Use boat in Port Hope to Feyrist. Hunt in the underground area (Dream Courts). Keep north until you reach Winter Courts.",
  supplies: [
    { name: "Great Fireball Rune", quantity: "900x" },
    { name: "Ultimate Mana Potion", quantity: "400x" }
  ],
  requirements: "Must have started The Dream Courts Quest",
  images: [
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/thanatursus.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/soul-broken-harbinger.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/crazed-winter-vanguard.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/crazed-winter-rearguard.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/arachnophobica.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/hibernal-moth.png"
  ],
  mapCoordinates: ""
};

export default huntXeJeTCourtOfWinter;
