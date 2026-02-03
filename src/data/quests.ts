import { questsDatabaseExtra } from "./quests-extra";

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
  ...questsDatabaseExtra,
  "dream-courts": {
    slug: "dream-courts",
    name: "The Dream Courts",
    type: "Access",
    status: "Essencial",
    levelRequired: 250,
    length: "Média",
    rewards: ["Acesso a Dream Courts", "Acesso a Haunted Nexus (Spectres)"],
    bossesUnlocked: ["Izcandar", "Maxxenius", "Plagueroot", "Malofur", "Lockt", "Faceless Bane"],
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
          "Entre no portal 'Haunted Nexus' dentro da Dream Court.",
          "Você precisa 'pisar' nos pisos coloridos correspondentes às cores das pedras (Ward Stones) enquanto enfrenta os monstros.",
          "Isso libera os portais de caça (Azul, Vermelho, Verde)."
        ]
      },
      {
        title: "3. Acesso à Arena (Bosses)",
        description: [
          "Para matar os bosses diários, você precisa entregar as 7 chaves.",
          "As chaves são obtidas completando puzzles em cada uma das 7 cidades (Thais, Carlin, Edron, etc).",
          "No Rubinot, verifique se o acesso é simplificado no NPC de Teleport."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/watch?v=dream-courts-guide"
  },
  "grave-danger": {
    slug: "grave-danger",
    name: "Grave Danger",
    type: "Access",
    status: "Essencial",
    levelRequired: 250,
    length: "Longa",
    rewards: ["Acesso a Cobra Bastion", "Acesso a Falcon Bastion (parte)"],
    bossesUnlocked: ["King Zelos", "Scarlett Etzel", "Drume (via Lion)", "Oberon (via Falcon)"],
    huntsUnlocked: ["Cobra Bastion"],
    requirements: ["Level 250+"],
    steps: [
      {
        title: "1. Jack Springfield",
        description: [
          "Fale com Jack Springfield em Thais.",
          "Ele te enviará para investigar o culto em várias cidades."
        ]
      },
      {
        title: "2. Cobra Bastion (Scarlett)",
        description: [
          "Vá para Ankrahmun e suba para o norte, na península.",
          "Não precisa de missão para ENTRAR no respawn.",
          "Para matar a Scarlett Etzel, você precisa apenas do level 250+ (no Global precisa de missão, no Rubinot geralmente é liberado ou simplificado)."
        ],
        coordinates: "Ankrahmun North"
      },
      {
        title: "3. King Zelos",
        description: [
          "Zelos é o boss final. Requer entregar todos os 'tomes' dos bosses menores (Count Vlarkorth, Earl Osam, Lord Azaram, Sir Baeloc, Duke Krule).",
          "Luta complexa em time."
        ]
      }
    ],
    videoGuide: "https://www.youtube.com/watch?v=grave-danger-guide"
  },
  "order-of-the-lion": {
    slug: "order-of-the-lion",
    name: "The Order of the Lion",
    type: "Access",
    status: "Essencial",
    levelRequired: 250,
    length: "Curta",
    rewards: ["Acesso a Bounac", "Acesso a Lion Sanctum"],
    bossesUnlocked: ["Drume"],
    huntsUnlocked: ["Lion Sanctum", "Werelions"],
    requirements: ["Level 250+"],
    steps: [
      {
        title: "1. Chegando em Bounac",
        description: [
          "Pegue o barco em Issavi para Bounac.",
          "Fale com o NPC Ksvin para iniciar."
        ]
      },
      {
        title: "2. Acesso ao Drume",
        description: [
          "Complete as tarefas básicas de reconhecimento na ilha.",
          "Mate os monstros na área externa para pegar itens de missão se necessário.",
          "O Drume fica no topo do castelo principal. Rota diária obrigatória!"
        ]
      }
    ]
  },
  "heart-of-destruction": {
    slug: "heart-of-destruction",
    name: "Heart of Destruction",
    type: "Endgame",
    status: "Recomendada",
    levelRequired: 300,
    length: "Longa",
    rewards: ["Imbuement Tier 3 (Crit/Mana/Life) - Se não for liberado free"],
    bossesUnlocked: ["World Devourer", "Os 5 Bosses de Gold Token"],
    huntsUnlocked: ["Otherworld"],
    requirements: ["Time de 5 pessoas (frequentemente)"],
    steps: [
      {
        title: "1. Informações",
        description: [
          "Quest focada em matar 5 bosses para carregar energia e enfrentar o final boss.",
          "Essencial para farmar Gold Tokens."
        ]
      }
    ]
  },
  "soul-war": {
    slug: "soul-war",
    name: "Soul War",
    type: "Endgame",
    status: "Opcional",
    levelRequired: 400,
    length: "Muito Longa",
    rewards: ["Bis Items (Soulbleeder, etc)", "Acesso a Gnomprona (hazard)"],
    bossesUnlocked: ["Goshnar's Megalomania", "Goshnar's Malice", "etc"],
    huntsUnlocked: ["Claustrophobia", "Rotten Blood (link)"],
    requirements: ["Level 400+", "Time extremamente forte"],
    steps: [
      {
        title: "1. Aviso",
        description: ["Esta é uma das quests mais difíceis do jogo.", "Requer time fechado e coordenado."]
      }
    ]
  },
  "primal-ordeal": {
    slug: "primal-ordeal",
    name: "The Primal Ordeal",
    type: "Endgame",
    status: "Opcional",
    levelRequired: 600,
    length: "Média",
    rewards: ["Primal Items", "Magma Monocle"],
    bossesUnlocked: ["Primal Menace"],
    huntsUnlocked: ["Gnomprona"],
    requirements: ["Level 600+ recomendado"],
    steps: [
      {
        title: "1. Gnomprona",
        description: ["Acesso via Edron/Cormaya (Warzone 4-6 area).", "Sistema de Hazard aumenta dificuldade e loot."]
      }
    ]
  }
};
