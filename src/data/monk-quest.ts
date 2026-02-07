// The Way of the Monk Quest
// Fonte: TibiaWiki Fandom

export interface MonkQuestShrine {
  name: string;
  level: number;
  location: string;
  monkReward: string;
  xp: string;
  otherReward: string;
  guidance: string;
}

export const monkQuestShrines: MonkQuestShrine[] = [
  {
    name: "Guidance",
    level: 6,
    location: "Thais Peninsula",
    monkReward: "Boots of Enlightenment",
    xp: "300 XP",
    otherReward: "300 XP",
    guidance: "Nível mais baixo, introdução simples."
  },
  {
    name: "Tranquility",
    level: 20,
    location: "Thais",
    monkReward: "Fists of Enlightenment",
    xp: "2,500 XP",
    otherReward: "2,500 XP",
    guidance: "Primeira cidade principal, fácil acesso."
  },
  {
    name: "Respect",
    level: 30,
    location: "Tyrsung",
    monkReward: "Mystic Repulse (+5% base autoattack, +10% when Serene)",
    xp: "5,000 XP",
    otherReward: "5,000 XP",
    guidance: "Requer Nibelor 2 quest para acesso."
  },
  {
    name: "Legacy",
    level: 40,
    location: "Elvenbane",
    monkReward: "Legs of Enlightenment (+5% base autoattack, +10% when Serene)",
    xp: "10,000 XP",
    otherReward: "10,000 XP",
    guidance: "Em Elvenbane, área de culto."
  },
  {
    name: "Empathy",
    level: 50,
    location: "Maze of Lost Souls",
    monkReward: "Nunchaku of Enlightenment (+5% base autoattack, +10% when Serene)",
    xp: "15,000 XP",
    otherReward: "15,000 XP",
    guidance: "Através do caminho no Maze of Lost Souls."
  },
  {
    name: "Harmony",
    level: 70,
    location: "Waterfall Quest, Tiquanda",
    monkReward: "Cone Hat of Enlightenment (+5% base autoattack, +10% when Serene)",
    xp: "30,000 XP",
    otherReward: "30,000 XP",
    guidance: "Na área da Waterfall Quest em Tiquanda."
  },
  {
    name: "Power",
    level: 100,
    location: "Pits of Inferno",
    monkReward: "Sai of Enlightenment (+5% base autoattack, +10% when Serene)",
    xp: "60,000 XP",
    otherReward: "60,000 XP",
    guidance: "Requer 'The Levers' mission da Pits of Inferno."
  },
  {
    name: "Knowledge",
    level: 110,
    location: "Black Serpent Dungeon",
    monkReward: "Forceful Uppercut (spell)",
    xp: "75,000 XP",
    otherReward: "75,000 XP",
    guidance: "Em Black Serpent Dungeon."
  },
  {
    name: "Serenity",
    level: 150,
    location: "Barkless Cult Trial Zone",
    monkReward: "Robe of Enlightenment",
    xp: "150,000 XP",
    otherReward: "150,000 XP",
    guidance: "Requer 'The Powerful Relic' stage da Barkless mission."
  },
  {
    name: "Eternity",
    level: 275,
    location: "Kilmaresh Mountains",
    monkReward: "Focus Harmony (spell) + Achievement 'Hope of Merudri' + Title 'Pensive Wanderer'",
    xp: "500,000 XP",
    otherReward: "500,000 XP",
    guidance: "Santuário final. Completar desbloqueia o prêmio principal."
  }
];

export const monkQuestInfo = {
  name: "The Way of the Monk Quest",
  description: "Siga o caminho do antigo Merudri para ganhar sabedoria e habilidades dignas de um verdadeiro monge.",
  levelRequirement: "275 (nível máximo)",
  finalReward: "10 pontos de promoção para o Wheel of Destiny",
  npc: "Enpa-Deia Pema (Blue Valley)",
  dangers: "many",
  requirements: [
    "Level 275 para completar totalmente",
    "Rope, Shovel e Machete; ou Secret Agent Tools com funcionalidades similares",
    "Levitate spell ou parcels",
    "Iniciado Nibelor 2: Ecological Terrorism (The Ice Islands Quest) para acesso a Tyrsung",
    "Alcançado The Levers mission (The Pits of Inferno Quest)",
    "Completado The New Frontier Quest",
    "Entregado 8 Tomes of Knowledge ao NPC Cael (acesso a Corruption Hole)",
    "Alcançado The Powerful Relic stage (Cults of Tibia Quest)"
  ],
  notes: [
    "Os santuários devem ser visitados na ordem correta, do nível mais baixo para o mais alto",
    "Pular um santuário impedirá o progresso",
    "Cada santuário tem um requisito de nível mínimo e dá recompensas",
    "Monks ganham itens exclusivos de 'Enlightenment' com bônus de ataque",
    "Outras vocações recebem apenas XP",
    "Após visitar todos os santuários, retorne a Blue Valley e diga 'pilgrimage' para o NPC",
    "A parte Dawnport só pode ser completada por Monks. Outras vocações devem começar em Blue Valley"
  ],
  tips: [
    "Faça essa quest com Monk para obter os itens exclusivos de Enlightenment",
    "Os itens de Enlightenment dão +5% base autoattack, que aumenta para +10% quando você está Serene",
    "Conjunto completo (Boots, Legs, Hat, Sai, Robe) = +25% base autoattack (+50% quando Serene)",
    "Os 10 pontos finais do Wheel of Destiny são muito valiosos - use com sabedoria",
    "Level 275 é alto, prepare-se com recursos suficientes",
    "Alguns santuários estão em áreas perigosas, vá preparado"
  ]
};
