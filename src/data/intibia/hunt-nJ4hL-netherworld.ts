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

export const huntnJ4hL: IntibiaHunt = {
  id: 'nJ4hL',
  slug: 'sorcerer-netherworld-gfbs-lost-souls',
  title: 'Netherworld',
  vocation: 'Sorcerer',
  levelRange: { min: 400, max: 600 },
  xpPerHour: { min: '2.4kk', max: '4kk' },
  xpPerHour150: { min: '3.6kk', max: '6kk' },
  profitPerHour: { min: '-100k', max: '300k' },
  video: 'https://www.youtube.com/watch?v=WdcxUYuapHY',
  creatures: [
    { name: 'Freakish Lost Soul', xp: 7020, points: 50 },
    { name: 'Mean Lost Soul', xp: 5580, points: 50 },
    { name: 'Flimsy Lost Soul', xp: 4500, points: 50 }
  ],
  bestLoots: [
    { name: 'Crystal Crossbow', value: '35k', chance: '0.78%' },
    { name: 'Twiceslicer', value: '28k', chance: '0.43%' },
    { name: 'Mercenary Sword', value: '12k', chance: '1.29%' }
  ],
  strategy: 'Lure several creatures and throw GFBs or Avalanches, every once in a while use Hell\'s Core (Fire UE).\n\nYou can use Sap Strength (Exori kor) if you feel they hit you too hard or Expose Weakness (Exori moe) if you want to kill faster, at your own criteria depending on what you need.\n\nBeware of over luring and getting trapped as 3-4 can easily combo any mage on close range',
  location: 'Port Hope (premium)',
  howToGetThere: '',
  supplies: [
    { name: 'Avalanche Rune', quantity: '1000x' },
    { name: 'Enchanted Theurgic Amulet', quantity: '1x' },
    { name: 'Great Fireball Rune', quantity: '1000x' },
    { name: 'Prismatic Ring', quantity: '1x' },
    { name: 'Ring of Green Plasma', quantity: '2x' },
    { name: 'Ring of Souls', quantity: '1x' },
    { name: 'Ultimate Mana Potion', quantity: '400x' }
  ],
  requirements: 'Mission "Journey to the Netherworld" done of Feaster of Souls Quest\nBurial Shroud',
  images: [
    'https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/freakish-lost-soul.png',
    'https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/mean-lost-soul.png',
    'https://cwzamxexhvmurenetenq.supabase.co/storage/v1/object/public/creatures/static/flimsy-lost-soul.png',
    'https://intibia.com/_next/image?url=https%3A%2F%2Ftibiatrade.gg%2Fimages%2Fitem%2FShield_of_Honour.gif&w=64&q=75',
    'https://intibia.com/_next/image?url=https%3A%2F%2Ftibiatrade.gg%2Fimages%2Fitem%2FIcy_Culottes.gif&w=64&q=75',
    'https://intibia.com/_next/image?url=https%3A%2F%2Ftibiatrade.gg%2Fimages%2Fitem%2FBottled_Dragon_Breath.gif&w=64&q=75',
    'https://intibia.com/_next/image?url=https%3A%2F%2Ftibiatrade.gg%2Fimages%2Fitem%2FSanguine_Legs.gif&w=64&q=75'
  ],
  mapCoordinates: '',
  url: 'https://intibia.com/pt/hunts/nJ4hL/sorcerer-netherworld-gfbs-lost-souls'
};
