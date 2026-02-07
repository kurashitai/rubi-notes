import { IntibiaHunt } from './types';

export const huntPcfZIHyaenaLairs: IntibiaHunt = {
  id: 'PcfZI',
  title: 'Hyaena Lairs',
  vocation: 'Paladin',
  vocationSubtext: 'Floor -2 + Summon',
  levelMin: 280,
  levelMax: 350,
  xpPerHour: '1.8kk até 2.8kk',
  xpPerHour150: '2.7kk até 4.2kk',
  profitPerHour: '150k até 500k',
  access: 'Darashia (premium)',
  videoUrl: 'https://www.youtube.com/watch?v=cGWBgxisb4M',
  creatures: [
    { name: 'Werehyaena', xp: 2200, points: 25 },
    { name: 'Werehyaena Shaman', xp: 2200, points: 25 },
    { name: 'Lich', xp: 900, points: 25 }
  ],
  bestLoots: [
    { name: 'Maxilla Maximus', value: '400k', dropRate: '0.05%', image: '' },
    { name: 'Werehyaena Trophy', value: '12k', dropRate: '0.2%', image: '' },
    { name: 'Blue Robe', value: '10k', dropRate: '0.2%', image: '' }
  ],
  strategy: 'The best way to hunt in this place is luring and attacking the monsters, so when they are in middle/low life, finish them in the box.',
  location: '',
  howToGetThere: '',
  supplies: [
    { name: 'Great Spirit Potion', quantity: '700x' },
    { name: 'Ultimate Spirit Potion', quantity: '50x' },
    { name: 'Avalanche Rune', quantity: '500x' },
    { name: 'Diamond Arrow', quantity: '1000x' },
    { name: 'Bullseye Potion', quantity: '10x' },
    { name: 'Ring of Blue Plasma', quantity: '5x' }
  ],
  requirements: [
    'Shovel',
    'Rope'
  ],
  images: [],
  coordinates: ''
};
