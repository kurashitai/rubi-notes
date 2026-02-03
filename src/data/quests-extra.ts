import { QuestData } from "./quests";

export const questsDatabaseExtra: Record<string, QuestData> = {
  "heart-of-destruction": {
    slug: "heart-of-destruction",
    name: "Heart of Destruction (Gold Tokens)",
    type: "Endgame",
    status: "Essencial",
    levelRequired: 250,
    length: "Longa",
    rewards: ["Gold Tokens (diário)", "Imbuements T3 (Crit/Mana/Life)"],
    bossesUnlocked: ["Anomaly", "Realityquake", "Rupture", "Eradicator", "Outburst", "World Devourer"],
    huntsUnlocked: ["Otherworld (Hunts)"],
    requirements: ["Level 250+", "Acesso a Zao/Svargrond/Ankrahmun/Farmine/Edron"],
    steps: [
      {
        title: "1. Introdução",
        description: [
          "Fale com o NPC Yana em Thais (Templo).",
          "Ela explicará sobre os cristais de energia instáveis."
        ]
      },
      {
        title: "2. Os 5 Bosses (Acesso)",
        description: [
          "Você precisa matar 5 bosses para carregar a energia.",
          "Cada boss fica em uma cidade (Ankrahmun, Svargrond, Zao, Farmine, Edron).",
          "Entre no portal 'Otherworld' e procure a entrada do boss."
        ]
      },
      {
        title: "3. World Devourer",
        description: [
          "Após matar os 5, você pode enfrentar o World Devourer (Boss Final).",
          "Local: Hub principal da quest (acesso por qualquer portal)."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/results?search_query=tibia+heart+of+destruction+guide"
  },
  "ferumbras-ascension": {
    slug: "ferumbras-ascension",
    name: "Ferumbras' Ascension",
    type: "Endgame",
    status: "Essencial",
    levelRequired: 150,
    length: "Muito Longa",
    rewards: ["Rift Warrior Outfit", "Ferumbras' Hat (Chance Rara)", "Tibia Coins (Rubinot)"],
    bossesUnlocked: ["Mazoran", "Plagirath", "Zamulosh", "Razzagorn", "Ragiaz", "Tarbaz", "Shulgrax", "Ascending Ferumbras"],
    huntsUnlocked: ["Ferumbras Ascension Seals (Grimeleech, Vexclaw)"],
    requirements: ["Level 150+"],
    steps: [
      {
        title: "1. O Começo",
        description: [
          "Vá para Darashia e fale com o NPC Cael.",
          "Ele fica na entrada da quest (Norte de Darashia, no deserto)."
        ]
      },
      {
        title: "2. Os 7 Selos",
        description: [
          "Você deve completar os 7 selos (dungeons).",
          "Cada selo tem uma mecânica e um boss final.",
          "Recomendado time de 5 pessoas (ou level alto solo)."
        ]
      },
      {
        title: "3. O Final",
        description: [
          "Após os 7 selos, você libera o acesso ao Ascending Ferumbras.",
          "Boss a cada 14 dias (Global) ou conforme regra do Rubinot."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/results?search_query=tibia+ferumbras+ascension+guide"
  },
  "feaster-of-souls": {
    slug: "feaster-of-souls",
    name: "Feaster of Souls",
    type: "Endgame",
    status: "Essencial",
    levelRequired: 200,
    length: "Média",
    rewards: ["Soul Items (acesso)", "Poltergeist Outfit", "Soulshell"],
    bossesUnlocked: ["The Dread Maiden", "The Unwelcome", "The Fear Feaster", "The Pale Worm"],
    huntsUnlocked: ["Port Hope Haunted Nexus (Brain Squid)"],
    requirements: ["Level 200+"],
    steps: [
      {
        title: "1. Port Hope",
        description: [
          "Inicie em Port Hope (Haunted Nexus).",
          "Fale com o NPC Spectulus."
        ]
      },
      {
        title: "2. Os 3 Bosses",
        description: [
          "Mate The Dread Maiden (Vengoth), The Unwelcome (Jakundaf Desert) e The Fear Feaster (Tiquanda).",
          "Use o 'Ghost Detector' para achar a entrada."
        ]
      },
      {
        title: "3. The Pale Worm",
        description: [
          "Boss final no Haunted Nexus.",
          "Mecânica de piso colorido."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/results?search_query=tibia+feaster+of+souls+guide"
  },
  "dream-courts": {
    slug: "dream-courts",
    name: "The Dream Courts",
    type: "Access",
    status: "Recomendada",
    levelRequired: 250,
    length: "Longa",
    rewards: ["Dream Warrior Outfit", "Acesso aos Spectres"],
    bossesUnlocked: ["Plagueroot", "Malofur", "Maxxenius", "Alptramun", "Izcandar", "The Nightmare Beast"],
    huntsUnlocked: ["Haunted Nexus (Burster/Gazer/Ripper Spectres)"],
    requirements: ["Level 250+"],
    steps: [
      {
        title: "1. Seven Keys",
        description: [
          "Fale com Andrew Lyze em Thais.",
          "Complete os puzzles nas 7 cidades para pegar as chaves."
        ]
      },
      {
        title: "2. Ward Stones (Spectres)",
        description: [
          "Entre na Dream Court de Thais e use o portal 'Haunted Nexus'.",
          "Complete a mecânica das cores nos pisos para liberar os portais de caça."
        ]
      },
      {
        title: "3. Bosses Diários",
        description: [
          "Use o Dream Scar para acessar a arena dos bosses.",
          "Cada dia um boss diferente."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/results?search_query=tibia+dream+courts+guide"
  }
};
