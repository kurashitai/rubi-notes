export interface BossData {
  id: string;
  name: string;
  image: string; // URL da imagem
  tier: "S" | "A" | "B" | "C"; // S = Essencial, C = Opcional
  cooldown: string; // "20h", "2h", "Diário"
  location: string;
  accessQuest: string;
  accessQuestSlug?: string; // Link para a página da quest
  mechanics: string[]; // Passos resumidos para matar
  loot: {
    item: string;
    chance: "Comum" | "Raro" | "Muito Raro";
    value: string;
  }[];
  soloable: boolean;
  recommendedLevel: number;
}

export const bossesDatabase: BossData[] = [
  {
    id: "oberon",
    name: "Grand Master Oberon",
    image: "/monsters/bosses/oberon.gif",
    tier: "S",
    cooldown: "20h",
    location: "Falcon Bastion",
    accessQuest: "The Secret Library (Falcon Bastion)",
    accessQuestSlug: "grave-danger", // Link aproximado ou criar específico
    mechanics: [
      "1. Entre na sala e ignore os summons.",
      "2. Bata no Oberon até ele gritar frases específicas.",
      "3. Quando ele gritar 'Are you ever going to fight?', fale 'Then let us prove it, Oberon!' (Hi -> Greeting).",
      "4. Repita 3 vezes até ele morrer."
    ],
    loot: [
      { item: "Falcon Items", chance: "Muito Raro", value: "30kk-100kk" },
      { item: "Grant of Arms", chance: "Raro", value: "2kk" },
      { item: "Falcon Escutcheon", chance: "Muito Raro", value: "High" }
    ],
    soloable: true,
    recommendedLevel: 300
  },
  {
    id: "scarlett",
    name: "Scarlett Etzel",
    image: "/monsters/bosses/scarlett.gif",
    tier: "S",
    cooldown: "20h",
    location: "Cobra Bastion",
    accessQuest: "Grave Danger",
    accessQuestSlug: "grave-danger",
    mechanics: [
      "1. A Scarlett é IMUNE a dano direto.",
      "2. Faça ela andar sobre os espelhos no chão quando eles brilharem.",
      "3. Quando a armadura quebrar (ela muda de sprite), bata nela com sua arma mais forte.",
      "4. Repita 4-5 vezes."
    ],
    loot: [
      { item: "Cobra Items", chance: "Muito Raro", value: "10kk-80kk" },
      { item: "Cobra Hood", chance: "Muito Raro", value: "High" }
    ],
    soloable: true,
    recommendedLevel: 250
  },
  {
    id: "drume",
    name: "Drume",
    image: "/monsters/bosses/drume.gif",
    tier: "S",
    cooldown: "20h",
    location: "Lion Sanctum (Bounac)",
    accessQuest: "The Order of the Lion",
    accessQuestSlug: "order-of-the-lion",
    mechanics: [
      "1. Mate os commanders (leões) primeiro se estiverem incomodando.",
      "2. Leve o Drume para o canto norte.",
      "3. Ele é fraco a Physical e Death.",
      "4. Cuidado com o dano de Holy em área."
    ],
    loot: [
      { item: "Lion Items", chance: "Muito Raro", value: "20kk-100kk" },
      { item: "Lion Heart", chance: "Raro", value: "2kk" }
    ],
    soloable: true,
    recommendedLevel: 250
  },
  {
    id: "timira",
    name: "Timira the Many-Headed",
    image: "/monsters/bosses/timira.gif",
    tier: "S",
    cooldown: "20h",
    location: "Naga City (Ingol)",
    accessQuest: "The Primal Ordeal (Acesso)",
    mechanics: [
      "1. Mate a Timira rapidamente.",
      "2. Quando ela sumir e invocar cópias, foque na verdadeira (dá mais dano).",
      "3. Evite ficar na frente das waves de água."
    ],
    loot: [
      { item: "Naga Items", chance: "Muito Raro", value: "5kk-30kk" },
      { item: "Timira's Egg", chance: "Raro", value: "1kk" }
    ],
    soloable: true,
    recommendedLevel: 300
  },
  {
    id: "tentugly",
    name: "Tentugly",
    image: "/monsters/bosses/tentugly.gif",
    tier: "A",
    cooldown: "20h",
    location: "Rathleton (Glooth Factory)",
    accessQuest: "Oramond Quest (Dark Trails)",
    mechanics: [
      "1. Boss simples de 'tank and spank'.",
      "2. Evite ficar na frente (wave de Earth).",
      "3. Requer 300 votos em Oramond para acessar o atalho."
    ],
    loot: [
      { item: "Maxilla Maximus", chance: "Muito Raro", value: "5kk" },
      { item: "Glooth Bags", chance: "Comum", value: "Low" }
    ],
    soloable: true,
    recommendedLevel: 250
  },
  {
    id: "leiden",
    name: "Count Vlarkorth (Leiden)",
    image: "/monsters/bosses/leiden.gif",
    tier: "A",
    cooldown: "20h",
    location: "Carlin (Grave Danger)",
    accessQuest: "Grave Danger",
    accessQuestSlug: "grave-danger",
    mechanics: [
      "1. Não deixe ele pisar nos sqms de 'vida' (vermelhos).",
      "2. Boss fácil, mas chato se curar muito."
    ],
    loot: [
      { item: "Final Judgement", chance: "Muito Raro", value: "15kk" }
    ],
    soloable: true,
    recommendedLevel: 250
  }
];
