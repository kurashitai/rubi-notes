// Dados completos da Hunt: Deeper Banuta
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

export const huntGyBHQDeeperBanuta: IntibiaHunt = {
  url: "https://intibia.com/pt/hunts/GyBHQ/knight-deeper-banuta-floor-4",
  id: "GyBHQ",
  slug: "knight-deeper-banuta-floor-4",
  title: "Deeper Banuta",
  vocation: "Knights",
  levelRange: { min: 300, max: 600 },
  xpPerHour: { min: "2.2kk", max: "4kk" },
  xpPerHour150: { min: "3.3kk", max: "6kk" },
  profitPerHour: { min: "250k", max: "700k" },
  video: "https://www.youtube.com/watch?v=C3HBF3noWV0",
  creatures: [
    { name: "Ver andares Medusa", xp: 4050, points: 50 }
  ],
  bestLoots: [],
  strategy: "",
  location: "",
  howToGetThere: "",
  supplies: [],
  requirements: "",
  images: [
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/medusa.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/serpent-spawn.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/hydra.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/eternal-guardian.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/souleater.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/bonebeast.png",
    "https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/elder-bonelord.png",
    "https://intibia.com/_next/image?url=https%3A%2F%2Fcwzamxexhvmurenetenq.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpartner_orders%2Fheader-button%2Fgolden-helmet-icon.webp&w=64&q=75"
  ],
  mapCoordinates: ""
};

export default huntGyBHQDeeperBanuta;
