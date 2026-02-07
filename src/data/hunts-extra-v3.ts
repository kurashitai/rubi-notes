// Hunts Extras - Mais hunts do Tibia/Rubinot
// Fonte: TibiaWiki, TibiaFandom, Wiki Rubinot

interface Monster {
  name: string;
  hp: number;
  exp: number;
  damage: string;
  weaknesses: Record<string, number>;
  immunities: string[];
  bestiaryKills: number;
  loot: { item: string; chance: string; value: string; discard?: boolean }[];
  ignore?: boolean;
  ignoreReason?: string;
}

interface HuntExtra {
  slug: string;
  name: string;
  tier: string;
  levelRange: string;
  location: string;
  rawExp: string;
  baseProfit: number; // em KK (x1000 gold)
  monsters: Monster[];
  recommendedVocations: string[];
  tips: string[];
  requirements?: string[];
}

export const extraHunts: HuntExtra[] = [
  // LOW LEVEL (50-100)
  {
    slug: "waspoids",
    name: "Waspoids",
    tier: "B",
    levelRange: "60-90",
    location: "Waspoid Cave",
    rawExp: "1.5M",
    baseProfit: 50,
    monsters: [
      {
        name: "Waspoid",
        hp: 2200,
        exp: 900,
        damage: "Medium",
        weaknesses: { fire: 100, earth: 100, energy: 100 },
        immunities: ["poison", "paralyze"],
        bestiaryKills: 500,
        loot: [
          { item: "Waspoid Wing", chance: "common", value: "100", discard: true },
          { item: "Honeycomb", chance: "common", value: "50" },
          { item: "Gold Coin", chance: "always", value: "100" },
          { item: "Platinum Coin", chance: "uncommon", value: "200" },
          { item: "Waspoid Trophy", chance: "rare", value: "15000" },
        ]
      },
      {
        name: "Spidris",
        hp: 3500,
        exp: 1600,
        damage: "Medium",
        weaknesses: { fire: 100, earth: 100, energy: 100 },
        immunities: ["poison", "paralyze"],
        bestiaryKills: 500,
        loot: [
          { item: "Spider Silk", chance: "common", value: "50" },
          { item: "Gold Coin", chance: "always", value: "150" },
          { item: "Platinum Coin", chance: "uncommon", value: "300" },
          { item: "Spidris Trophy", chance: "rare", value: "20000" },
        ]
      }
    ],
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Waspoids são fracos a Fire, Earth e Energy",
      "Use Fireball, Stalagmite ou Energy Strike",
      "Knight: Use Exori Hur",
      "Paladin: Use Ethereal Spear",
      "Waspoid Wing pode ser vendido (não discard)",
      "Spidris Trophy é valioso"
    ]
  },
  {
    slug: "sibangs",
    name: "Sibangs",
    tier: "B",
    levelRange: "55-80",
    location: "Sibang Cave",
    rawExp: "1.2M",
    baseProfit: 45,
    monsters: [
      {
        name: "Sibang",
        hp: 1800,
        exp: 750,
        damage: "Low",
        weaknesses: { fire: 110, energy: 100, ice: 90 },
        immunities: ["earth", "poison"],
        bestiaryKills: 500,
        loot: [
          { item: "Banana", chance: "common", value: "20" },
          { item: "Sibang Fur", chance: "uncommon", value: "80", discard: true },
          { item: "Gold Coin", chance: "always", value: "80" },
          { item: "Platinum Coin", chance: "uncommon", value: "150" },
          { item: "Sibang Trophy", chance: "rare", value: "12000" },
        ]
      }
    ],
    recommendedVocations: ["Knight", "Sorcerer", "Druid", "Paladin"],
    tips: [
      "Sibangs são fracos a Fire",
      "Use Fireball ou Great Fireball",
      "Knight: Use Exori Hur",
      "Paladin: Use Ethereal Spear",
      "Sibang Fur pode ser vendido (não discard)",
      "Good profit mid-level"
    ]
  },
  // MID LEVEL (100-200)
  {
    slug: "werelions",
    name: "Werelions",
    tier: "A",
    levelRange: "100-150",
    location: "Werelion Cave",
    rawExp: "2.5M",
    baseProfit: 120,
    monsters: [
      {
        name: "Werelion",
        hp: 5500,
        exp: 2200,
        damage: "High",
        weaknesses: { fire: 100, earth: 100, energy: 100, holy: 100 },
        immunities: ["poison", "paralyze", "drain", "invisible"],
        bestiaryKills: 1000,
        loot: [
          { item: "Werelion Fang", chance: "rare", value: "15000", discard: true },
          { item: "Werelion Mane", chance: "rare", value: "20000", discard: true },
          { item: "Gold Coin", chance: "always", value: "300" },
          { item: "Platinum Coin", chance: "uncommon", value: "500" },
          { item: "Werelion Trophy", chance: "very rare", value: "50000" },
          { item: "Ravager Axe", chance: "very rare", value: "80000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Werelions são fracos a Fire, Earth, Energy e Holy",
      "Knight: Use Exori Gran com fire-enchanted weapon",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Ethereal Spear ou Divine Caliber Rune",
      "Ravager Axe é item valioso",
      "Werelion Trophy é muito valioso"
    ]
  },
  {
    slug: "werehyenas",
    name: "Werehyenas",
    tier: "A",
    levelRange: "110-160",
    location: "Werehyena Cave",
    rawExp: "2.8M",
    baseProfit: 130,
    monsters: [
      {
        name: "Werehyaena",
        hp: 6200,
        exp: 2500,
        damage: "High",
        weaknesses: { fire: 100, earth: 100, energy: 100, holy: 100 },
        immunities: ["poison", "paralyze", "drain", "invisible"],
        bestiaryKills: 1000,
        loot: [
          { item: "Werehyaena Snout", chance: "rare", value: "18000", discard: true },
          { item: "Werehyaena Tail", chance: "rare", value: "25000", discard: true },
          { item: "Gold Coin", chance: "always", value: "350" },
          { item: "Platinum Coin", chance: "uncommon", value: "600" },
          { item: "Werehyaena Trophy", chance: "very rare", value: "60000" },
          { item: "War Hammer", chance: "rare", value: "70000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Werehyenas são fracos a Fire, Earth, Energy e Holy",
      "Knight: Use Exori Gran com fire-enchanted weapon",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Ethereal Spear ou Divine Caliber Rune",
      "War Hammer é item decente para Knights",
      "Werehyaena Trophy é muito valioso"
    ]
  },
  // HIGH LEVEL (150-300)
  {
    slug: "undead-dragons",
    name: "Undead Dragons",
    tier: "S",
    levelRange: "200-300",
    location: "Ghostlands",
    rawExp: "4.8M",
    baseProfit: 250,
    monsters: [
      {
        name: "Undead Dragon",
        hp: 8500,
        exp: 4800,
        damage: "Very High",
        weaknesses: { fire: 110, energy: 100, earth: 100, holy: 100 },
        immunities: ["ice", "poison", "paralyze", "drain", "life drain"],
        bestiaryKills: 2000,
        loot: [
          { item: "Dragon Scale Mail", chance: "very rare", value: "300000" },
          { item: "Dragon Shield", chance: "very rare", value: "120000" },
          { item: "Undead Dragon Trophy", chance: "very rare", value: "300000" },
          { item: "Golden Amulet", chance: "rare", value: "50000" },
          { item: "Gold Coin", chance: "always", value: "1000" },
          { item: "Platinum Coin", chance: "uncommon", value: "18000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Undead Dragons são fracos a Fire",
      "DO NOT use Ice - são imunes",
      "Knight: Precisa de Magic Shield para Death Wave",
      "Knight: Use Magic Walls para bloquear Life Drain",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Divine Missile ou Exori Con",
      "Undead Dragons podem paralizar - traga Antidote ou Paralyze Rune",
      "Life Drain é perigoso - heal rápido ou morra"
    ]
  },
  {
    slug: "ghastly-dragons",
    name: "Ghastly Dragons",
    tier: "S",
    levelRange: "210-310",
    location: "Ghostlands",
    rawExp: "4.5M",
    baseProfit: 280,
    monsters: [
      {
        name: "Ghastly Dragon",
        hp: 6800,
        exp: 3350,
        damage: "Very High",
        weaknesses: { fire: 110, energy: 100, earth: 100, holy: 100 },
        immunities: ["ice", "poison", "paralyze", "drain", "life drain", "invisible"],
        bestiaryKills: 2000,
        loot: [
          { item: "Dragon Scale Mail", chance: "very rare", value: "300000" },
          { item: "Dragon Shield", chance: "very rare", value: "120000" },
          { item: "Ghastly Dragon Trophy", chance: "very rare", value: "250000" },
          { item: "Ring of the Sky", chance: "very rare", value: "500000" },
          { item: "Gold Coin", chance: "always", value: "1100" },
          { item: "Platinum Coin", chance: "uncommon", value: "20000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Ghastly Dragons são fracos a Fire",
      "DO NOT use Ice - são imunes",
      "Knight: Precisa de Magic Shield para Life Drain e Ghost Fire",
      "Knight: Use Magic Walls para bloquear Life Drain",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Divine Missile ou Exori Con",
      "Ghastly Dragons podem usar Death Wave - fique diagonal",
      "Ghost Fire é death ranged - move constantemente",
      "Ring of the Sky é item muito valioso"
    ]
  },
  {
    slug: "frost-dragons",
    name: "Frost Dragons",
    tier: "A",
    levelRange: "190-290",
    location: "Frost Dragon Caves",
    rawExp: "4.0M",
    baseProfit: 220,
    monsters: [
      {
        name: "Frost Dragon",
        hp: 6800,
        exp: 3200,
        damage: "Very High",
        weaknesses: { fire: 110, earth: 100, energy: 90, physical: 80 },
        immunities: ["ice", "energy", "paralyze", "drain", "invisible"],
        bestiaryKills: 2000,
        loot: [
          { item: "Dragon Scale Mail", chance: "very rare", value: "300000" },
          { item: "Dragon Shield", chance: "very rare", value: "120000" },
          { item: "Frost Dragon Trophy", chance: "very rare", value: "200000" },
          { item: "Frostborn Helm", chance: "rare", value: "60000" },
          { item: "Gold Coin", chance: "always", value: "900" },
          { item: "Platinum Coin", chance: "uncommon", value: "15000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Frost Dragons são fracos a Fire",
      "DO NOT use Ice - são imunes",
      "Knight: Use Magic Shield para Great Ice Strike",
      "Knight: Use Exori Gran e Exori Hur com fire-enchanted weapon",
      "Druid/Sorcerer: Cast Great Fireball ou Avalanche Rune",
      "Paladin: Use Divine Missile ou Divine Caliber Rune",
      "Frost Dragons podem congelar - fique movendo e não se encurrale",
      "Frost Wave tem area grande - fique a distancia",
      "Summon Snow Golems - mate-os rapidamente ou vai ficar cercado"
    ]
  },
  // EXTREME LEVEL (300+)
  {
    slug: "behemoths",
    name: "Behemoths",
    tier: "S",
    levelRange: "250-500",
    location: "Behemoth's Cave",
    rawExp: "5.5M",
    baseProfit: 350,
    monsters: [
      {
        name: "Behemoth",
        hp: 13000,
        exp: 5000,
        damage: "Very High",
        weaknesses: { earth: 100, physical: 90, energy: 80, ice: 60 },
        immunities: ["energy", "paralyze", "invisible"],
        bestiaryKills: 1000,
        loot: [
          { item: "Behemoth Fang", chance: "always", value: "30000" },
          { item: "Giant Sword", chance: "rare", value: "90000" },
          { item: "Behemoth Trophy", chance: "very rare", value: "250000" },
          { item: "Gold Coin", chance: "always", value: "12000" },
          { item: "Platinum Coin", chance: "rare", value: "20000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Behemoth tem um ataque de area ENORME - fique a distancia",
      "Knight: Precisa de armor muito boa e HP alto",
      "Knight: Use Stone Skin ou Mass Challenge se disponível",
      "Knight: Traga muitos Ultimate Healing Runes",
      "Druid/Sorcerer: Use Great Earth Beam ou Avalanche Rune",
      "Paladin: Use Ethereal Spear ou Divine Caliber Rune",
      "Behemoth pode self-heal - mate-o rapidamente",
      "Behemoth charge - mantenha distancia e posicao diagonal",
      "Nunca lute com Behemoth com HP baixo - Earthquake mata instantaneamente"
    ]
  },
  {
    slug: "hydra-cave",
    name: "Hydra Cave",
    tier: "S",
    levelRange: "180-350",
    location: "Hydra Plains",
    rawExp: "5.2M",
    baseProfit: 320,
    monsters: [
      {
        name: "Hydra",
        hp: 8300,
        exp: 4450,
        damage: "Very High",
        weaknesses: { fire: 100, energy: 100, ice: 100, earth: 100 },
        immunities: ["poison", "paralyze", "drain"],
        bestiaryKills: 3000,
        loot: [
          { item: "Hydra Egg", chance: "always", value: "25000" },
          { item: "Hydra Head", chance: "always", value: "50000" },
          { item: "Piece of Royal Armor", chance: "rare", value: "80000" },
          { item: "Boots of Haste", chance: "very rare", value: "150000" },
          { item: "Gold Coin", chance: "always", value: "5000" },
          { item: "Platinum Coin", chance: "rare", value: "10000" },
        ]
      }
    ],
    recommendedVocations: ["Elite Knight", "Master Sorcerer", "Master Druid", "Royal Paladin"],
    tips: [
      "Use Fire attacks se disponivel - Hydras sao fracas a fire",
      "Knight: Use Challenge ability para manter Hydra focada em voce",
      "Knight: Use Magic Shield para Fire attacks",
      "Druid/Sorcerer: Cast Mass Ice/Energy Wave e Great Fireball",
      "Paladin: Use Assassin Stars (Avalanche Rune) ou Divine Missile",
      "Evite ficar em melee - Hydras spawn em pares e sao perigosas",
      "Traga Ultimate Healing Runes para recuperaçao rapida"
    ]
  },
];

// Helper functions
export const getExtraHuntBySlug = (slug: string) => {
  return extraHunts.find(h => h.slug === slug);
};

export const getExtraHuntsByLevel = (minLevel: number, maxLevel?: number) => {
  return extraHunts.filter(h => {
    const huntMin = parseInt(h.levelRange.split("-")[0]);
    const huntMax = parseInt(h.levelRange.split("-")[1]);
    return huntMin >= minLevel && (maxLevel ? huntMax <= maxLevel : true);
  });
};

export const getExtraHuntsByTier = (tier: string) => {
  return extraHunts.filter(h => h.tier === tier);
};

export const getExtraHuntsByVocation = (vocation: string) => {
  const vocationLower = vocation.toLowerCase();
  return extraHunts.filter(h =>
    h.recommendedVocations.some(v => v.toLowerCase().includes(vocationLower))
  );
};

export const totalExtraHunts = extraHunts.length;
