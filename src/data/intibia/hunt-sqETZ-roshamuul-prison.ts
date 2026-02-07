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

export const huntsqETZ: IntibiaHunt = {
  id: 'sqETZ',
  slug: 'knight-roshamuul-prison-floor-1',
  title: 'Roshamuul Prison',
  vocation: 'Knight',
  levelRange: { min: 500, max: 1500 },
  xpPerHour: { min: '2.8kk', max: '3.5kk' },
  xpPerHour150: { min: '4.2kk', max: '5.25kk' },
  profitPerHour: { min: '600k', max: '900k' },
  video: 'https://www.youtube.com/watch?v=8ckL_N4YyrI',
  creatures: [
    { name: 'Juggernaut', xp: 11200, points: 50 },
    { name: 'Demon Outcast', xp: 6200, points: 50 },
    { name: 'Blightwalker', xp: 5850, points: 50 },
    { name: 'Hellhound', xp: 5440, points: 50 },
    { name: 'Dark Torturer', xp: 4650, points: 50 },
    { name: 'Lost Soul', xp: 4000, points: 25 },
    { name: 'Plaguesmith', xp: 3555, points: 25 },
    { name: 'Betrayed Wraith', xp: 3500, points: 25 },
    { name: 'Nightmare', xp: 1666, points: 25 }
  ],
  bestLoots: [
    { name: 'Heavy Mace', value: '50k', chance: '0.21%' },
    { name: 'Mastermind Shield', value: '50k', chance: '0.58%' },
    { name: 'Amulet of Loss', value: '45k', chance: '0.16%' }
  ],
  strategy: 'Good hunting for knights from level 500+ to hunt at floor -1. The place is close to the depot and is very attractive for everyone, in addition to giving good xp and a good profit.\n\nEnter the place and start catching 5 monsters at a time, as you get more confident, lure more monsters.\n\n⚠️ Take care:\n- When closing the box put a poison bomb on your foot so the summons don\'t step on and disturb the box.\n- Be smart with the hellhounds, don\'t get in front of them because they release very powerful waves, which can kill you in a combo.\n- Many monsters run on the red life here, to avoid this renew the exeta res frequently.\n- Avoid walking diagonally (especially with life in yellow) as you can be paralysed and die in a combo.\n\n🛡️ Equipment\nBring equipment that protects against ENERGY and LIFE DRAIN. Use energy weapon to kill the Demon Outcasts and switch to physical to kill the other creatures.\n\nFALCON BATTLE AXE is a great for damage and 12% energy protection. You can use it, combining with the BONE FIDDLE that gives 5% protection against life drain.\n\nPrismatic Ring is a plus to protect against physical attacks. 💍\n\n🐾 Charms\nIf you already have the bestiaries here, I recommend the combination:\nZAP on DEMON OUTCAST, PARRY on DARK TORTURER, HOLY on BLIGHTWALKER, WOUND on PLAGUESMITH, FREEZE on HELLHOUND and COURSE on JUGGERNAUT.\n\n⚔️ Imbuements\nThe imbuements I always use on 2-slot weapons are LIFE and MANA.',
  location: 'Roshamuul (premium)',
  howToGetThere: '',
  supplies: [
    { name: 'Ultimate Health Potion', quantity: '300x' },
    { name: 'Supreme Health Potion', quantity: '300x' },
    { name: 'Strong Mana Potion', quantity: '3000x' }
  ],
  requirements: 'A hunt não tem requisitos.',
  images: [],
  mapCoordinates: '',
  url: 'https://intibia.com/pt/hunts/sqETZ/knight-roshamuul-prison-floor-1'
};
