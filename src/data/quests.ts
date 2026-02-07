export interface QuestStep {
  title: string;
  description: string[];
  coordinates?: string;
  image?: string;
}

export interface QuestData {
  slug: string;
  name: string;
  type: "Access" | "Outfit" | "Story" | "Endgame";
  status: "Essencial" | "Recomendada" | "Opcional";
  levelRequired: number;
  length: "Curta" | "Média" | "Longa" | "Muito Longa";
  rewards: string[];
  bossesUnlocked: string[];
  huntsUnlocked: string[];
  requirements: string[];
  steps: QuestStep[];
  videoGuide?: string;
}

export const questsDatabase: Record<string, QuestData> = {
  // Access Quests
  "dream-courts": {
    slug: "dream-courts",
    name: "The Dream Courts",
    type: "Access",
    status: "Essencial",
    levelRequired: 250,
    length: "Média",
    rewards: ["Acesso a Dream Courts", "Acesso a Haunted Nexus (Spectres)"],
    bossesUnlocked: ["Izcandar", "Maxxenius", "Plagueroot", "Malofur", "Lockward", "Faceless Bane"],
    huntsUnlocked: ["Burster Spectres", "Gazer Spectres", "Ripper Spectres", "Nightmare Isle"],
    requirements: ["Premium Account"],
    steps: [
      {
        title: "1. O Início (Seven Keys)",
        description: [
          "Vá até o NPC Andrew Lyze em Thais (perto da saída norte).",
          "Ele pedirá para você encontrar 7 chaves nas 'Dream Courts'.",
          "Use o portal atrás dele para entrar na Dream Court de Thais."
        ]
      },
      {
        title: "2. Ward Stones (Acesso aos Spectres)",
        description: [
          "Para liberar os Spectres (Haunted Nexus), você precisa completar a missão das Ward Stones.",
        ]
      },
      {
        title: "3. The Dream Courts",
        description: [
          "Enfrente os 6 bosses das Dream Courts: Izcandar, Maxxenius, Plagueroot, Malofur, Lockward, Faceless Bane.",
          "Cada boss libera uma chave.",
          "Colete as 7 chaves."
        ]
      },
      {
        title: "4. Acesso ao Haunted Nexus",
        description: [
          "Com todas as 7 chaves, você pode entrar no Haunted Nexus.",
          "Hunte os Spectres: Burster, Gazer, Ripper.",
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_dream_courts"
  },
  "pyramid-plunder": {
    slug: "pyramid-plunder",
    name: "Pyramid Plunder",
    type: "Outfit",
    status: "Opcional",
    levelRequired: 200,
    length: "Curta",
    rewards: ["Outfit: Pyramid Plunder"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Key to Pyramid", "Food", "Runes"],
    steps: [
      {
        title: "1. Entrar na Pirâmide",
        description: [
          "Ir até a Pirâmide de Ankrahmun.",
          "Usar a chave para entrar."
        ]
      },
      {
        title: "2. Matar as múmias",
        description: [
          "Hunt as múmias da pirâmide.",
          "Coletar loot e XP."
        ]
      },
      {
        title: "3. Pegar recompensa",
        description: [
          "Falar com NPC para pegar outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_pyramid_plunder"
  },
  "soul-war": {
    slug: "soul-war",
    name: "Soul War",
    type: "Endgame",
    status: "Essencial",
    levelRequired: 800,
    length: "Muito Longa",
    rewards: ["Soul War Outfit", "Soul Weapons"],
    bossesUnlocked: [],
    huntsUnlocked: ["Soul War Creatures"],
    requirements: ["Completo The Dream Courts", "Team de 15+", "Muita prática"],
    steps: [
      {
        title: "1. Preparação",
        description: [
          "Complete todas as quests do Dream Courts.",
          "Tenha nível 800+.",
          "Forme um time forte de 15+ players."
        ]
      },
      {
        title: "2. The Soul War",
        description: [
          "Enfrente os 5 bosses da Soul War.",
          "Os bosses são os mais difíceis do jogo.",
          "Coordenação é essencial."
        ]
      },
      {
        title: "3. Recompensas",
        description: [
          "Drops incluem as melhores armas do jogo.",
          "Outfit exclusiva Soul War.",
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_soul_war"
  },
  "heart-of-destruction": {
    slug: "heart-of-destruction",
    name: "Heart of Destruction",
    type: "Story",
    status: "Essencial",
    levelRequired: 400,
    length: "Longa",
    rewards: ["Acesso a Ferumbras' Castle", "Heart of Destruction Shield"],
    bossesUnlocked: ["Ferumbras"],
    huntsUnlocked: [],
    requirements: ["Completo Dream Courts"],
    steps: [
      {
        title: "1. Início",
        description: [
          "Falar com NPC em Port Hope.",
          "Receber a missão."
        ]
      },
      {
        title: "2. Heart of Destruction",
        description: [
          "Encontrar e destruir os 5 orbes do coração.",
          "Cada orb dropa uma parte do escudo."
        ]
      },
      {
        title: "3. Ferumbras",
        description: [
          "Acesso a Ferumbras' Castle liberado.",
          "Enfrentar Ferumbras - boss final."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_heart_of_destruction"
  },
  "ferumbras-ascension": {
    slug: "ferumbras-ascension",
    name: "Ferumbras' Ascension",
    type: "Endgame",
    status: "Opcional",
    levelRequired: 1000,
    length: "Muito Longa",
    rewards: ["Ferumbras' Ascension Outfit", "Ferumbras' Ascension Weapons"],
    bossesUnlocked: [],
    huntsUnlocked: ["Ferumbras' Ascension Creatures"],
    requirements: ["Completo Soul War", "Level 1000+"],
    steps: [
      {
        title: "1. Ascensão",
        description: [
          "Complete a Soul War.",
          "Tenha nível 1000+.",
          "Enfrentar Ferumbras em sua forma ascended."
        ]
      },
      {
        title: "2. Recompensas",
        description: [
          "Drops ainda mais poderosos.",
          "Outfit exclusiva Ferumbras' Ascension."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_ferumbras_ascension"
  },
  "feaster-of-souls": {
    slug: "feaster-of-souls",
    name: "Feaster of Souls",
    type: "Story",
    status: "Recomendada",
    levelRequired: 200,
    length: "Média",
    rewards: ["Outfit: Feaster of Souls", "Acesso a Zomba"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 200+"],
    steps: [
      {
        title: "1. A Quest",
        description: [
          "Falar com NPC em Edron.",
          "Receber missão."
        ]
      },
      {
        title: "2. Zomba",
        description: [
          "Enfrentar as criaturas da Zomba.",
          "Completar a quest."
        ]
      },
      {
        title: "3. Recompensa",
        description: [
          "Receber outfit Feaster of Souls.",
          "Acesso liberado a Zomba."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_feaster_of_souls"
  },

  // Additional Access Quests
  "annihilator": {
    slug: "annihilator",
    name: "Annihilator Quest",
    type: "Access",
    status: "Essencial",
    levelRequired: 80,
    length: "Curta",
    rewards: ["Demon Legs", "Steel Boots", "Magic Sword", "Stone Cutter Amulet"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["4 jogadores", "Cada jogador precisa de uma chave"],
    steps: [
      {
        title: "1. Conseguir as Chaves",
        description: [
          "4 jogadores precisam das 4 chaves diferentes.",
          "Chaves podem ser obtidas com NPCs ou drops de monstros.",
          "Coordene com seu time."
        ]
      },
      {
        title: "2. Entrar na Annihilator Room",
        description: [
          "Localizada em Edron, em uma caverna subterrânea.",
          "Todos os 4 jogadores devem entrar juntos.",
          "As chaves abrem as portas."
        ]
      },
      {
        title: "3. Derrotar os Demônios",
        description: [
          "4 demônios aparecem quando a quest é iniciada.",
          "Cada jogador foca em um demônio.",
          "Vitória garante itens valiosos."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_annihilator"
  },

  "demon-helmet": {
    slug: "demon-helmet",
    name: "Demon Helmet Quest",
    type: "Access",
    status: "Recomendada",
    levelRequired: 80,
    length: "Curta",
    rewards: ["Demon Helmet", "Magma Legs", "Golden Helmet"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 80+", "Chave da Masquerade"],
    steps: [
      {
        title: "1. Localizar a Entrada",
        description: [
          "A quest fica no deserto de Ankrahmun.",
          "Use a chave para entrar na Masquerade.",
          "Cuidado com armadilhas."
        ]
      },
      {
        title: "2. Resolver o Quebra-Cabeça",
        description: [
          "Puxe as alavancas na ordem correta.",
          "Use o mapa para guiar.",
          "Cada alavanca abre um caminho."
        ]
      },
      {
        title: "3. Pegar os Itens",
        description: [
          "Demon Helmet está no final.",
          "Também pode pegar Magma Legs e Golden Helmet.",
          "Cada jogador só pode fazer uma vez."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_demon_helmet"
  },

  "pit-of-inferno": {
    slug: "pit-of-inferno",
    name: "Pit of Inferno",
    type: "Access",
    status: "Essencial",
    levelRequired: 200,
    length: "Longa",
    rewards: ["Acesso a Pit of Inferno", "Infernalis Outfit"],
    bossesUnlocked: ["The Pit Lord"],
    huntsUnlocked: ["Hellspawn", "Guzzlemaw", "Silencer", "Demon"],
    requirements: ["Completo The Inquisition", "Team forte", "Muita mana"],
    steps: [
      {
        title: "1. Complete The Inquisition",
        description: [
          "A Inquisition é pré-requisito.",
          "Fale com o NPC em Edron para iniciar.",
          "Complete as 4 missões."
        ]
      },
      {
        title: "2. Acesso ao Pit",
        description: [
          "Use o portal em Edron.",
          "Prepare-se para hunts intensas.",
          "Crie runes suficientes."
        ]
      },
      {
        title: "3. Explorar os Níveis",
        description: [
          "Pit of Inferno tem 8 níveis.",
          "Monstros ficam mais fortes conforme desce.",
          "Top level tem os melhores drops."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_pit_of_inferno"
  },

  "asura-palace": {
    slug: "asura-palace",
    name: "Asura Palace",
    type: "Access",
    status: "Essencial",
    levelRequired: 150,
    length: "Média",
    rewards: ["Acesso a Asura Palace", "Asura Outfit"],
    bossesUnlocked: ["Asura", "Asura Champion"],
    huntsUnlocked: ["Asura", "Cobra", "Scorpion", "Hydra"],
    requirements: ["Level 150+", "Completo The Hunt"],
    steps: [
      {
        title: "1. Falar com NPC",
        description: [
          "NPC está em Port Hope.",
          "Ele contará sobre os Asuras.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Encontrar a Entrada",
        description: [
          "Entrada está nas selvas de Tiquanda.",
          "Use uma chave para abrir.",
          "Cuidado com monstros."
        ]
      },
      {
        title: "3. Acesso Liberado",
        description: [
          "Entre no Asura Palace.",
          "Hunte Asuras para XP e loot.",
          "Boss Asura Champion é opcional."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_asura_palace"
  },

  "the-ice-islands": {
    slug: "the-ice-islands",
    name: "The Ice Islands",
    type: "Access",
    status: "Recomendada",
    levelRequired: 150,
    length: "Longa",
    rewards: ["Acesso a Ice Islands", "Ice Outfit", "Coldheart Amulet"],
    bossesUnlocked: ["The Yeti", "Thul"],
    huntsUnlocked: ["Polar Bears", "Crystal Spiders", "Frost Dragons"],
    requirements: ["Level 150+", "Barco para Svargrond"],
    steps: [
      {
        title: "1. Ir para Svargrond",
        description: [
          "Tome o navio de Carlin para Svargrond.",
          "Fale com o capitão.",
          "Prepare equipamento quente."
        ]
      },
      {
        title: "2. Explorar as Ilhas",
        description: [
          "As Ice Islands têm várias áreas.",
          "Hunte nos cristais gelados.",
          "Cuidado com Frost Dragons."
        ]
      },
      {
        title: "3. Bosses",
        description: [
          "Enfrente The Yeti em sua caverna.",
          "Thul é o boss final.",
          "Drops incluem itens valiosos."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_ice_islands"
  },

  "wrath-of-emperor": {
    slug: "wrath-of-emperor",
    name: "Wrath of the Emperor",
    type: "Access",
    status: "Essencial",
    levelRequired: 250,
    length: "Muito Longa",
    rewards: ["Acesso a Asura Palace", "Acesso a The Warzone"],
    bossesUnlocked: ["The Count of the Core", "The Fear Feaster", "The Obliverator", "The Plasmother", "The Voidwalker"],
    huntsUnlocked: ["Gazer Spectres", "Burster Spectres", "Ripper Spectres"],
    requirements: ["Level 250+", "Team forte", "Completo The Hunt"],
    steps: [
      {
        title: "1. Iniciar a Missão",
        description: [
          "Fale com NPC em Kazordoon.",
          "Ele contará sobre o Imperador.",
          "Aceite a missão Wrath of the Emperor."
        ]
      },
      {
        title: "2. As 5 Missões",
        description: [
          "Complete as 5 missões preliminares.",
          "Cada missão desbloqueia um boss.",
          "Guarde os itens coletados."
        ]
      },
      {
        title: "3. Enfrentar os Bosses",
        description: [
          "Os 5 bosses precisam ser derrotados.",
          "Coordenação com o time é essencial.",
          "Drops incluem equipamentos de endgame."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_wrath_of_emperor"
  },

  "the-hidden-city": {
    slug: "the-hidden-city",
    name: "The Hidden City of Beregar",
    type: "Access",
    status: "Recomendada",
    levelRequired: 100,
    length: "Média",
    rewards: ["Acesso a Beregar", "Dwarf Outfit", "Heavy Mace"],
    bossesUnlocked: ["The Big Bad One"],
    huntsUnlocked: ["Dwarves", "Cave Dwellers"],
    requirements: ["Level 100+", "Pickaxe"],
    steps: [
      {
        title: "1. Encontrar a Entrada",
        description: [
          "A entrada está em Kazordoon.",
          "Siga para o leste nas minas.",
          "Use pickaxe nas rochas."
        ]
      },
      {
        title: "2. Explorar Beregar",
        description: [
          "A cidade escondida dos anões.",
          "Fale com NPCs para missões.",
          "Explore todas as áreas."
        ]
      },
      {
        title: "3. Boss e Recompensas",
        description: [
          "The Big Bad One é o boss.",
          "Drops incluem Dwarf Outfit.",
          "Heavy Mace também pode ser dropado."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_hidden_city"
  },

  "carlin-citadel": {
    slug: "carlin-citadel",
    name: "Carlin Citadel",
    type: "Access",
    status: "Recomendada",
    levelRequired: 70,
    length: "Curta",
    rewards: ["Acesso a Citadel", "Warrior's Axe", "Knight Legs"],
    bossesUnlocked: [],
    huntsUnlocked: ["Cyclops", "Cyclops Drone", "Cyclops Smith"],
    requirements: ["Level 70+", "Chave do NPC"],
    steps: [
      {
        title: "1. Falar com NPC",
        description: [
          "NPC está em Carlin.",
          "Ele dará a missão.",
          "Receba a chave."
        ]
      },
      {
        title: "2. Entrar na Citadel",
        description: [
          "A Citadel fica ao norte de Carlin.",
          "Use a chave para entrar.",
          "Cuidado com os cyclops."
        ]
      },
      {
        title: "3. Hunt e Loot",
        description: [
          "Hunte cyclops para XP.",
          "Pegue Warrior's Axe e Knight Legs.",
          "Área boa para level 70-100."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_carlin_citadel"
  },

  "thais-tomb": {
    slug: "thais-tomb",
    name: "Thais Tomb",
    type: "Access",
    status: "Opcional",
    levelRequired: 50,
    length: "Curta",
    rewards: ["Magic Plate Armor", "Demon Shield"],
    bossesUnlocked: [],
    huntsUnlocked: ["Skeleton", "Ghoul", "Ghost"],
    requirements: ["Level 50+", "Chave"],
    steps: [
      {
        title: "1. Entrar no Túmulo",
        description: [
          "Localizado em Thais.",
          "Use a chave para entrar.",
          "Desça os degraus."
        ]
      },
      {
        title: "2. Encontrar os Baús",
        description: [
          "Magic Plate Armor está em um baú.",
          "Demon Shield em outro.",
          "Cada jogador só pode pegar uma vez."
        ]
      },
      {
        title: "3. Cuidado com os Monstros",
        description: [
          "Skeletons, Ghouls e Ghosts.",
          "Bom para farming de mana.",
          "Hunte com cuidado."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_thais_tomb"
  },

  // Outfit Quests
  "explorer-outfit": {
    slug: "explorer-outfit",
    name: "Explorer Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 50,
    length: "Média",
    rewards: ["Outfit: Explorer"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 50+"],
    steps: [
      {
        title: "1. Iniciar em Port Hope",
        description: [
          "Fale com o NPC em Port Hope.",
          "Ele pedirá para explorar.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Explorar Áreas",
        description: [
          "Visite as áreas marcadas no mapa.",
          "Cada área precisa ser explorada.",
          "Reporte de volta ao NPC."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após explorar todas as áreas.",
          "Fale novamente com o NPC.",
          "Receba o Explorer Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_explorer_outfit"
  },

  "barbarian-outfit": {
    slug: "barbarian-outfit",
    name: "Barbarian Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 40,
    length: "Longa",
    rewards: ["Outfit: Barbarian"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 40+"],
    steps: [
      {
        title: "1. Ir para Svargrond",
        description: [
          "Tome o navio de Carlin para Svargrond.",
          "Fale com o chefe barbarian.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Provar sua Força",
        description: [
          "Complete os desafios dos barbarians.",
          "Hunte e prove seu valor.",
          "Coletar itens necessários."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar todos os desafios.",
          "Fale novamente com o chefe.",
          "Receba o Barbarian Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_barbarian_outfit"
  },

  "jester-outfit": {
    slug: "jester-outfit",
    name: "Jester Outfit Quest",
    type: "Outfit",
    status: "Opcional",
    levelRequired: 60,
    length: "Média",
    rewards: ["Outfit: Jester"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 60+"],
    steps: [
      {
        title: "1. Encontrar o Jester",
        description: [
          "O Jester está em Carlin.",
          "Ele oferece riddles e jogos.",
          "Aceite o desafio."
        ]
      },
      {
        title: "2. Resolver os Riddles",
        description: [
          "Complete os puzzles do Jester.",
          "Cada puzzle libera um item.",
          "Use seu intelecto."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após resolver todos os puzzles.",
          "Fale novamente com o Jester.",
          "Receba o Jester Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_jester_outfit"
  },

  "pirate-outfit": {
    slug: "pirate-outfit",
    name: "Pirate Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 80,
    length: "Média",
    rewards: ["Outfit: Pirate"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 80+"],
    steps: [
      {
        title: "1. Ir para Liberty Bay",
        description: [
          "Tome o navio para Liberty Bay.",
          "Fale com o capitão pirata.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Missões Piratas",
        description: [
          "Complete as missões dos piratas.",
          "Roube tesouros e derrote inimigos.",
          "Colete itens piratas."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar as missões.",
          "Fale novamente com o capitão.",
          "Receba o Pirate Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_pirate_outfit"
  },

  "shaman-outfit": {
    slug: "shaman-outfit",
    name: "Shaman Outfit Quest",
    type: "Outfit",
    status: "Opcional",
    levelRequired: 60,
    length: "Média",
    rewards: ["Outfit: Shaman"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 60+"],
    steps: [
      {
        title: "1. Ir para Port Hope",
        description: [
          "Fale com o shaman em Port Hope.",
          "Ele pedirá itens da selva.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Coletar Itens",
        description: [
          "Coletar ervas e objetos mágicos.",
          "Hunte na selva de Tiquanda.",
          "Encontre os itens necessários."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Entregue os itens ao shaman.",
          "Ele recompensará com o outfit.",
          "Receba o Shaman Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_shaman_outfit"
  },

  "warrior-outfit": {
    slug: "warrior-outfit",
    name: "Warrior Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 40,
    length: "Média",
    rewards: ["Outfit: Warrior"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 40+"],
    steps: [
      {
        title: "1. Falar com NPC",
        description: [
          "O treinador de guerreiros está em Thais.",
          "Fale com ele para iniciar.",
          "Aceite o treinamento."
        ]
      },
      {
        title: "2. Treinamento",
        description: [
          "Complete os exercícios de combate.",
          "Derrote os oponentes de treino.",
          "Prove suas habilidades."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar o treinamento.",
          "Fale novamente com o treinador.",
          "Receba o Warrior Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_warrior_outfit"
  },

  "wizard-outfit": {
    slug: "wizard-outfit",
    name: "Wizard Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 40,
    length: "Média",
    rewards: ["Outfit: Wizard"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 40+"],
    steps: [
      {
        title: "1. Falar com NPC",
        description: [
          "O mago está em Edron.",
          "Fale com ele sobre magia.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Estudos Mágicos",
        description: [
          "Colete runas e ingredientes.",
          "Faça os experimentos pedidos.",
          "Estude os pergaminhos."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar os estudos.",
          "Fale novamente com o mago.",
          "Receba o Wizard Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_wizard_outfit"
  },

  "beggar-outfit": {
    slug: "beggar-outfit",
    name: "Beggar Outfit Quest",
    type: "Outfit",
    status: "Opcional",
    levelRequired: 50,
    length: "Curta",
    rewards: ["Outfit: Beggar"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 50+"],
    steps: [
      {
        title: "1. Encontrar o Pedinte",
        description: [
          "O pedinte está em Carlin.",
          "Ele pedirá ajuda.",
          "Converse com ele."
        ]
      },
      {
        title: "2. Ajudar o Pedinte",
        description: [
          "Conclua pequenas tarefas.",
          "Ajude outras pessoas na cidade.",
          "Prova de generosidade."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após ajudar suficientemente.",
          "Fale novamente com o pedinte.",
          "Receba o Beggar Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_beggar_outfit"
  },

  "norseman-outfit": {
    slug: "norseman-outfit",
    name: "Norseman Outfit Quest",
    type: "Outfit",
    status: "Opcional",
    levelRequired: 70,
    length: "Média",
    rewards: ["Outfit: Norseman"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 70+"],
    steps: [
      {
        title: "1. Ir para Svargrond",
        description: [
          "Tome o navio de Carlin para Svargrond.",
          "Fale com o líder nórdico.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Missões Nórdicas",
        description: [
          "Complete as missões nórdicas.",
          "Caça e navegue pelo gelo.",
          "Mostre suas habilidades."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar as missões.",
          "Fale novamente com o líder.",
          "Receba o Norseman Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_norseman_outfit"
  },

  "warmaster-outfit": {
    slug: "warmaster-outfit",
    name: "Warmaster Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 200,
    length: "Longa",
    rewards: ["Outfit: Warmaster"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 200+", "Reputação de guild"],
    steps: [
      {
        title: "1. Entrar na Guild",
        description: [
          "Junte-se a uma guild.",
          "Construa sua reputação.",
          "Fale com o Warmaster."
        ]
      },
      {
        title: "2. Batalhas Guild",
        description: [
          "Participe de batalhas de guild.",
          "Derrote inimigos em mass PvP.",
          "Acumule pontos de guild."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após atingir reputação máxima.",
          "Fale com o Warmaster novamente.",
          "Receba o Warmaster Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_warmaster_outfit"
  },

  "citizen-outfit": {
    slug: "citizen-outfit",
    name: "Citizen Outfit Quest",
    type: "Outfit",
    status: "Recomendada",
    levelRequired: 50,
    length: "Curta",
    rewards: ["Outfit: Citizen"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 50+"],
    steps: [
      {
        title: "1. Falar com NPC",
        description: [
          "O NPC está em Thais.",
          "Ele oferece tarefas cívicas.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Tarefas Cívicas",
        description: [
          "Ajude os cidadãos de Thais.",
          "Complete pequenas tarefas.",
          "Seja um cidadão exemplar."
        ]
      },
      {
        title: "3. Receber Outfit",
        description: [
          "Após completar as tarefas.",
          "Fale novamente com o NPC.",
          "Receba o Citizen Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_citizen_outfit"
  },

  // Story Quests
  "the-black-knight": {
    slug: "the-black-knight",
    name: "The Black Knight",
    type: "Story",
    status: "Recomendada",
    levelRequired: 30,
    length: "Média",
    rewards: ["Black Shield", "Magic Sword"],
    bossesUnlocked: ["The Black Knight"],
    huntsUnlocked: [],
    requirements: ["Level 30+"],
    steps: [
      {
        title: "1. O Início",
        description: [
          "Fale com o NPC em Thais.",
          "Ele contará sobre o Black Knight.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Encontrar o Castelo",
        description: [
          "Siga para o castelo ao norte.",
          "Enfrente os guardas.",
          "Chegue ao topo."
        ]
      },
      {
        title: "3. Derrotar o Black Knight",
        description: [
          "O Black Knight espera você.",
          "Derrote-o em combate.",
          "Pegue Black Shield e Magic Sword."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_black_knight"
  },

  "the-cursed-monk": {
    slug: "the-cursed-monk",
    name: "The Cursed Monk",
    type: "Story",
    status: "Recomendada",
    levelRequired: 50,
    length: "Média",
    rewards: ["Demon Legs", "Hallowed Axe"],
    bossesUnlocked: ["The Cursed Monk"],
    huntsUnlocked: [],
    requirements: ["Level 50+"],
    steps: [
      {
        title: "1. A Maldição",
        description: [
          "Fale com o padre em Carlin.",
          "Ele contará sobre o monge amaldiçoado.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. O Mosteiro",
        description: [
          "Viaje para o mosteiro abandonado.",
          "Encontre o monge amaldiçoado.",
          "Prepare-se para o combate."
        ]
      },
      {
        title: "3. Libertar o Monge",
        description: [
          "Derrote o monge amaldiçoado.",
          "Receba Demon Legs e Hallowed Axe.",
          "Complete a missão."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_cursed_monk"
  },

  "the-ape-city": {
    slug: "the-ape-city",
    name: "The Ape City",
    type: "Story",
    status: "Recomendada",
    levelRequired: 120,
    length: "Longa",
    rewards: ["Acesso a Banuta", "Ape Outfit", "Golden Backpack"],
    bossesUnlocked: ["Kongra", "Sibang", "Merlkin"],
    huntsUnlocked: ["Kongra", "Sibang", "Merlkin", "Congo"],
    requirements: ["Level 120+", "Completo The Hunt"],
    steps: [
      {
        title: "1. Iniciar",
        description: [
          "Fale com NPC em Port Hope.",
          "Ele contará sobre Ape City.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Explorar Banuta",
        description: [
          "Ape City está nas selvas.",
          "Explore as ruínas de Banuta.",
          "Enfrente os primatas."
        ]
      },
      {
        title: "3. Bosses e Recompensas",
        description: [
          "Derrote os 3 bosses dos apes.",
          "Kongra, Sibang e Merlkin.",
          "Receba Ape Outfit e itens."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_ape_city"
  },

  "the-orc-fortress": {
    slug: "the-orc-fortress",
    name: "The Orc Fortress",
    type: "Story",
    status: "Opcional",
    levelRequired: 80,
    length: "Média",
    rewards: ["Orc Champion Gear", "Orc Face Mask"],
    bossesUnlocked: ["Orc Warlord", "Orc King"],
    huntsUnlocked: ["Orc", "Orc Berserker", "Orc Shaman"],
    requirements: ["Level 80+"],
    steps: [
      {
        title: "1. A Fortaleza",
        description: [
          "A fortaleza fica em Ulderek's Rock.",
          "Use o mapa para localizar.",
          "Entre na área."
        ]
      },
      {
        title: "2. Invasão",
        description: [
          "Enfrente os orcs na fortaleza.",
          "Chegue até o líder.",
          "Derrote os guardas."
        ]
      },
      {
        title: "3. Orc King",
        description: [
          "Derrote o Orc King.",
          "Receba gear de Orc Champion.",
          "Pegue Orc Face Mask."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_orc_fortress"
  },

  "the-ancient-tombs": {
    slug: "the-ancient-tombs",
    name: "The Ancient Tombs",
    type: "Story",
    status: "Recomendada",
    levelRequired: 200,
    length: "Longa",
    rewards: ["Acesso a Ancient Tombs", "Pharaohs' Outfit"],
    bossesUnlocked: ["Ashmunrah", "Mahrdis", "Omruc", "Thalas", "Morgaroth"],
    huntsUnlocked: ["Scarab", "Ancient Scarab", "Gazer Spectre"],
    requirements: ["Level 200+", "Completo The Hunt"],
    steps: [
      {
        title: "1. A Maldição dos Faraós",
        description: [
          "Fale com NPC em Ankrahmun.",
          "Ele contará sobre os faraós.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Explorar os Túmulos",
        description: [
          "Explore as 5 tumbas antigas.",
          "Cada tumba tem um faraó.",
          "Colete artefatos."
        ]
      },
      {
        title: "3. Faraós",
        description: [
          "Derrote os 5 faraós.",
          "Ashmunrah é o boss final.",
          "Receba Pharaohs' Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_ancient_tombs"
  },

  "the-hunt": {
    slug: "the-hunt",
    name: "The Hunt",
    type: "Story",
    status: "Essencial",
    levelRequired: 100,
    length: "Média",
    rewards: ["Acesso a hunts avançadas", "Hunter's Outfit"],
    bossesUnlocked: [],
    huntsUnlocked: ["Behemoth", "Hydra", "Medusa", "Serpent Spawn"],
    requirements: ["Level 100+"],
    steps: [
      {
        title: "1. O Caçador",
        description: [
          "Fale com o caçador em Port Hope.",
          "Ele ensinará sobre grandes criaturas.",
          "Aceite o treinamento."
        ]
      },
      {
        title: "2. Grande Caçada",
        description: [
          "Caçe as criaturas lendárias.",
          "Behemoth, Hydra, Medusa e mais.",
          "Prove suas habilidades."
        ]
      },
      {
        title: "3. Mestre Caçador",
        description: [
          "Após completar a caçada.",
          "Fale novamente com o caçador.",
          "Receba Hunter's Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_the_hunt"
  },

  "the-white-raven": {
    slug: "the-white-raven",
    name: "The White Raven",
    type: "Story",
    status: "Opcional",
    levelRequired: 150,
    length: "Média",
    rewards: ["White Raven Shield", "Feather of the Raven"],
    bossesUnlocked: ["The White Raven"],
    huntsUnlocked: [],
    requirements: ["Level 150+"],
    steps: [
      {
        title: "1. A Lenda",
        description: [
          "Fale com o ancião em Carlin.",
          "Ele contará sobre o White Raven.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Procurar o Raven",
        description: [
          "Siga as pistas do Raven.",
          "Explore o norte de Carlin.",
          "Encontre seu esconderijo."
        ]
      },
      {
        title: "3. Encontrar o White Raven",
        description: [
          "O White Raven aparece.",
          "Converse com ele.",
          "Receba White Raven Shield."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_white_raven"
  },

  "the-secret-library": {
    slug: "the-secret-library",
    name: "The Secret Library",
    type: "Story",
    status: "Recomendada",
    levelRequired: 120,
    length: "Longa",
    rewards: ["Acesso a Secret Library", "Librarian Outfit", "Knowledge Scroll"],
    bossesUnlocked: [],
    huntsUnlocked: [],
    requirements: ["Level 120+"],
    steps: [
      {
        title: "1. O Segredo",
        description: [
          "Fale com bibliotecário em Yalahar.",
          "Ele menciona uma biblioteca secreta.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Encontrar a Biblioteca",
        description: [
          "Siga as pistas ocultas.",
          "Resolva os enigmas.",
          "Entre na biblioteca secreta."
        ]
      },
      {
        title: "3. Conhecimento",
        description: [
          "Leia os livros antigos.",
          "Colete pergaminhos.",
          "Receba Librarian Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_secret_library"
  },

  "the-brotherhood-of-wood": {
    slug: "the-brotherhood-of-wood",
    name: "The Brotherhood of Wood",
    type: "Story",
    status: "Opcional",
    levelRequired: 20,
    length: "Curta",
    rewards: ["Wooden Shield", "Studded Armor"],
    bossesUnlocked: [],
    huntsUnlocked: ["Wolves", "Bears"],
    requirements: ["Level 20+"],
    steps: [
      {
        title: "1. A Irmandade",
        description: [
          "Fale com o druida em Carlin.",
          "Ele contará sobre a irmandade.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Missões da Floresta",
        description: [
          "Complete missões na floresta.",
          "Proteja os animais e plantas.",
          "Mostre respeito à natureza."
        ]
      },
      {
        title: "3. Juntar-se à Irmandade",
        description: [
          "Após completar as missões.",
          "Fale novamente com o druida.",
          "Receba itens de madeira."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_brotherhood_of_wood"
  },

  // Endgame Quests
  "the-inquisition": {
    slug: "the-inquisition",
    name: "The Inquisition",
    type: "Endgame",
    status: "Essencial",
    levelRequired: 150,
    length: "Muito Longa",
    rewards: ["Acesso a Pit of Inferno", "Inquisitor Outfit", "Demon Armor"],
    bossesUnlocked: [],
    huntsUnlocked: ["Ghosts", "Ghouls", "Spectres", "Demon"],
    requirements: ["Level 150+", "Team forte"],
    steps: [
      {
        title: "1. Iniciar",
        description: [
          "Fale com NPC em Edron.",
          "Ele iniciará a Inquisition.",
          "Prepare-se para longa missão."
        ]
      },
      {
        title: "2. As 4 Missões",
        description: [
          "Complete as 4 missões preliminares.",
          "Cada missão é um desafio.",
          "Guarde os itens coletados."
        ]
      },
      {
        title: "3. Acesso ao Pit",
        description: [
          "Após completar todas as missões.",
          "Acesso ao Pit of Inferno liberado.",
          "Receba Inquisitor Outfit."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_inquisition"
  },

  "the-firmament": {
    slug: "the-firmament",
    name: "The Firmament",
    type: "Endgame",
    status: "Recomendada",
    levelRequired: 300,
    length: "Muito Longa",
    rewards: ["Firmament Outfit", "Firmament Weapons"],
    bossesUnlocked: ["The Astral Guardian"],
    huntsUnlocked: ["Celestial Creatures"],
    requirements: ["Level 300+", "Completo Dream Courts"],
    steps: [
      {
        title: "1. O Céu",
        description: [
          "Fale com NPC em Edron.",
          "Ele contará sobre o Firmament.",
          "Aceite a missão."
        ]
      },
      {
        title: "2. Escalar ao Céu",
        description: [
          "Complete os desafios celestiais.",
          "Enfrente criaturas astrais.",
          "Suba os níveis do Firmament."
        ]
      },
      {
        title: "3. Astral Guardian",
        description: [
          "Derrote o Astral Guardian.",
          "Receba Firmament Outfit.",
          "Armas celestiais também."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_firmament"
  },

  "the-sunken-kingdom": {
    slug: "the-sunken-kingdom",
    name: "The Sunken Kingdom",
    type: "Endgame",
    status: "Recomendada",
    levelRequired: 350,
    length: "Muito Longa",
    rewards: ["Sunken Outfit", "Poseidon Trident"],
    bossesUnlocked: ["The Drowned King", "The Kraken"],
    huntsUnlocked: ["Sea Serpents", "Quaras"],
    requirements: ["Level 350+", "Equipe de mergulho"],
    steps: [
      {
        title: "1. O Reino Submerso",
        description: [
          "Fale com NPC em Port Hope.",
          "Ele contará sobre o reino submerso.",
          "Prepare equipamento de mergulho."
        ]
      },
      {
        title: "2. Explorar as Profundezas",
        description: [
          "Mergulhe nas águas profundas.",
          "Encontre o reino perdido.",
          "Enfrente criaturas marinhas."
        ]
      },
      {
        title: "3. Drowned King e Kraken",
        description: [
          "Derrote o Drowned King.",
          "Enfrente o Kraken.",
          "Receba Sunken Outfit e Trident."
        ]
      }
    ],
    videoGuide: "https://youtube.com/watch?v=demo_sunken_kingdom"
  }
};

// Helper functions
export function getQuestBySlug(slug: string): QuestData | undefined {
  return questsDatabase[slug];
}

export function getQuestsByType(type: QuestData["type"]): QuestData[] {
  return Object.values(questsDatabase).filter(q => q.type === type);
}

export function getQuestsByStatus(status: QuestData["status"]): QuestData[] {
  return Object.values(questsDatabase).filter(q => q.status === status);
}

export function getQuestsByLevel(minLevel: number, maxLevel?: number): QuestData[] {
  return Object.values(questsDatabase).filter(q =>
    q.levelRequired >= minLevel && (maxLevel ? q.levelRequired <= maxLevel : true)
  );
}

export function getAllQuests(): QuestData[] {
  return Object.values(questsDatabase);
}

export function searchQuests(query: string): QuestData[] {
  const q = query.toLowerCase();
  return Object.values(questsDatabase).filter(quest =>
    quest.name.toLowerCase().includes(q) ||
    quest.type.toLowerCase().includes(q)
  );
}

export const questTypes = [
  "Access",
  "Outfit",
  "Story",
  "Endgame"
] as const;

export const questStatus = [
  "Essencial",
  "Recomendada",
  "Opcional"
] as const;
