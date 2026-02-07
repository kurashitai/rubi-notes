// Dados completos da Hunt: Kilmaresh Central Steppe
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

export const intibiaHuntsPage1Hunt1: IntibiaHunt = {
  url: "https://intibia.com/pt/hunts/ZxLEd/druid-sorcerer-kilmaresh-central-steppe-goannas-avalanches",
  id: "ZxLEd",
  slug: "druid-sorcerer-kilmaresh-central-steppe-goannas-avalanches",
  title: "Kilmaresh Central Steppe",
  vocation: "Mages",
  levelRange: { min: 700, max: 2500 },
  xpPerHour: { min: "8kk", max: "20kk" },
  xpPerHour150: { min: "12kk", max: "30kk" },
  profitPerHour: { min: "100k", max: "2kk" },
  video: "https://www.youtube.com/watch?v=7MWyQ5thjFM",
  creatures: [
    { name: "Feral Sphinx", xp: 8800, points: 50 },
    { name: "Adult Goanna", xp: 6650, points: 50 },
    { name: "Young Goanna", xp: 6100, points: 50 },
    { name: "Manticore", xp: 5100, points: 50 },
    { name: "Scorpion", xp: 45, points: 15 },
    { name: "Crocodile", xp: 40, points: 15 },
    { name: "Lion", xp: 30, points: 15 },
    { name: "Hyaena", xp: 20, points: 15 },
    { name: "Seagull", xp: 0, points: -5 },
    { name: "Flamingo", xp: 0, points: -5 }
  ],
  bestLoots: [
    { name: "Wooden Spellbook", value: "12k", chance: "0.37%" },
    { name: "Magma Coat", value: "11k", chance: "2.99%" },
    { name: "Magma Legs", value: "11k", chance: "1.41%" }
  ],
  strategy: "Great hunt for mages level 700+ to rush experience. It's a pretty hardcore place, be careful not to get trapped.\n\n❄️ Keep a distance from creatures, shoot avalanches and Eternal Winter.\n\n⚡️ Charms:\n  Poison on Sphinx\n  Wound on Lamassu\n  Freeze on Manticore\n  Zap on Adult Goanna\n  Divine Wrath on Young Goanna\n  Curse on Feral Sphinx",
  location: "Kilmaresh Central Steppe",
  howToGetThere: "Use boat in Port Hope to Kilmaresh Island. Walk west from Kilmaresh City to steppe area.",
  supplies: [
    { name: "Ultimate Mana Potion", quantity: "600x" },
    { name: "Avalanche Rune", quantity: "1500x" }
  ],
  requirements: "Premium account. Access through Issavi.",
  images: [
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/feral-sphinx.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/adult-goanna.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/young-goanna.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/manticore.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/scorpion.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/crocodile.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/lion.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/hyaena.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/seagull.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/flamingo.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/wooden-spellbook.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/magma-coat.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/magma-legs.png"
  ],
  mapCoordinates: ""
};

export default intibiaHuntsPage1Hunt1;
