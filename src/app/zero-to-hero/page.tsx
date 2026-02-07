"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface GuideStep {
  level: string;
  title: string;
  description: string;
  objectives: string[];
  hunts: { name: string; slug: string; profit: string; exp: string }[];
  quests: { name: string; slug: string; reward: string }[];
  equipment: string[];
  tips: string[];
}

const guideSteps: GuideStep[] = [
  {
    level: "1-8",
    title: "Tutorial & Rookgaard",
    description: "Primeiros passos no jogo. Aprenda os básicos, escolha sua vocação e se prepare para a aventura.",
    objectives: [
      "Completar o tutorial básico",
      "Aprender a usar o mapa e movimentação",
      "Entender o sistema de vocações",
      "Juntar gold inicial para equipamentos",
    ],
    hunts: [
      { name: "Rats (Rookgaard)", slug: "rats", profit: "50-100gp/h", exp: "1-2k/h" },
      { name: "Cave Rats", slug: "cave-rats", profit: "100-200gp/h", exp: "2-4k/h" },
    ],
    quests: [
      { name: "Tutorial Quest", slug: "tutorial", reward: "Vocação escolhida" },
    ],
    equipment: [
      "Qualquer arma inicial",
      "Roupa básica de Rookgaard",
    ],
    tips: [
      "Não morra! Você perde XP e skills",
      "Guarde gold para depois",
      "Explore o mapa com cuidado",
      "Aprenda os comandos básicos: /look, /attack, etc",
    ],
  },
  {
    level: "8-30",
    title: "Mainland - Início",
    description: "Chegou no mainland! Hora de explorar as cidades e começar a ganhar XP de verdade.",
    objectives: [
      "Escolher uma cidade principal",
      "Comprar equipamentos básicos",
      "Fazer as primeiras quests",
      "Ganhar dinheiro para supplies",
    ],
    hunts: [
      { name: "Rotworms", slug: "rotworms", profit: "5-15k/h", exp: "50-100k/h" },
      { name: "Cyclopolis (Cyclops)", slug: "cyclopolis", profit: "10-25k/h", exp: "80-150k/h" },
      { name: "Minotaurs", slug: "minotaurs", profit: "8-20k/h", exp: "60-120k/h" },
    ],
    quests: [
      { name: "Blood Herb Quest", slug: "blood-herb-quest", reward: "Blood Herb" },
      { name: "Cat Herb Quest", slug: "cat-herb-quest", reward: "Cat Herb" },
    ],
    equipment: [
      "Plate Armor ou Dwarven Armor",
      "Steel Helmet",
      "Plate Legs",
      "Boots of Haste (se tiver gold)",
    ],
    tips: [
      "Treine skills offline quando não estiver jogando",
      "Compre food e mana potions",
      "Use o tibia map para não se perder",
      "Não leve muito gold - pode morrer",
    ],
  },
  {
    level: "30-60",
    title: "Progressão Inicial",
    description: "Você já conhece o básico. Hora de evoluir equipamentos e começar hunts mais lucrativas.",
    objectives: [
      "Completar quests de acesso importantes",
      "Melhorar equipamentos significativamente",
      "Aprender a usar imbuements",
      "Ganhar 500k+ para investir",
    ],
    hunts: [
      { name: "Dragons (solo)", slug: "dragons", profit: "30-60k/h", exp: "200-400k/h" },
      { name: "Giant Spiders", slug: "giant-spiders", profit: "25-50k/h", exp: "150-300k/h" },
      { name: "Orc Fort", slug: "orc-fort", profit: "20-40k/h", exp: "120-250k/h" },
    ],
    quests: [
      { name: "Dragon Lair", slug: "dragon-lair", reward: "Dragon Scale" },
      { name: "Dwarf Armor Quest", slug: "dwarf-armor", reward: "Dwarf Armor" },
    ],
    equipment: [
      "Dragon Scale Mail",
      "Demon Shield ou Shield of Honour",
      "Boots of Haste",
      "Enchanted Weapons",
    ],
    tips: [
      "Aprenda sobre imbuements - são ESSENCIAIS",
      "Use prey system para boost de XP/loot",
      "Faça quests de acesso para hunts melhores",
      "Invista em equipment ao invés de guardar gold",
    ],
  },
  {
    level: "60-100",
    title: "Mid-Game",
    description: "Você está no mid-game. Hunts mais desafiadoras, profit real, e preparação para high level.",
    objectives: [
      "Completar quests importantes (Access)",
      "Conseguir equipment tier 1",
      "Aprender mecanicas de boss",
      "Fazer hunts em team",
    ],
    hunts: [
      { name: "Werecreatures", slug: "werecreatures", profit: "100-200k/h", exp: "800k-1.5M/h" },
      { name: "Sea Serpents", slug: "sea-serpents", profit: "80-150k/h", exp: "600k-1M/h" },
      { name: "Edron Hero Cave", slug: "edron-hero", profit: "60-120k/h", exp: "500-800k/h" },
    ],
    quests: [
      { name: "Elven Quest", slug: "elven-quest", reward: "Elven Armor" },
      { name: "Gharz", slug: "gharz", reward: "Dragon Scale Mail" },
    ],
    equipment: [
      "Falcon Set ou Cobra Set",
      "Tier 1 Weapons",
      "Full Imbuements",
      "Enchanted Armor",
    ],
    tips: [
      "Participe de boss dailies",
      "Faça amigos para team hunts",
      "Estude as mecânicas do Wheel of Destiny",
      "Priorize XP sobre profit neste level",
    ],
  },
  {
    level: "100-200",
    title: "Upper Mid-Game",
    description: "Level 100+ é onde o jogo começa de verdade. Hunts lucrativas, bosses diários, e team play.",
    objectives: [
      "Completar Dream Courts",
      "Fazer bosses diários (Oberon, etc)",
      "Conseguir equipment tier 2",
      "Formar ou entrar em guild ativa",
    ],
    hunts: [
      { name: "Burster Spectres", slug: "burster-spectres", profit: "200-400k/h", exp: "2-4M/h" },
      { name: "Gazer Spectres", slug: "gazer-spectres", profit: "250-500k/h", exp: "3-5M/h" },
      { name: "Werelions", slug: "werelions", profit: "180-350k/h", exp: "2.5-4M/h" },
    ],
    quests: [
      { name: "The Dream Courts", slug: "dream-courts", reward: "Acesso a Spectres" },
      { name: "Heart of Destruction", slug: "heart-of-destruction", reward: "Acesso a Ferumbras" },
    ],
    equipment: [
      "Gnome Set",
      "Tier 2 Weapons",
      "Full T3 Imbuements",
      "Soul Set (se disponível)",
    ],
    tips: [
      "Bosses diários são profit garantido",
      "Team hunt > Solo hunt neste level",
      "Use Wheel of Destiny com inteligência",
      "Estude rotações de spell para sua vocação",
    ],
  },
  {
    level: "200-300",
    title: "High Level",
    description: "Você é um high level agora! Hunts extremamente lucrativas e os desafios mais difíceis do jogo.",
    objectives: [
      "Completar todas as quests de acesso",
      "Participar de bosses em team",
      "Conseguir equipment tier 3",
      "Ter 10M+ de gold",
    ],
    hunts: [
      { name: "Ripper Spectres", slug: "ripper-spectres", profit: "400-700k/h", exp: "5-8M/h" },
      { name: "Issavi Monsters", slug: "issavi", profit: "350-600k/h", exp: "4-7M/h" },
      { name: "Cobra Bastion", slug: "cobra-bastion", profit: "300-550k/h", exp: "4-6M/h" },
    ],
    quests: [
      { name: "Demon Armor Quest", slug: "demon-armor", reward: "Demon Helmet + Shield" },
      { name: "Ferumbras' Ascension", slug: "ferumbras-ascension", reward: "Ferumbras Weapons" },
    ],
    equipment: [
      "Falcon Set completo",
      "Tier 3 Weapons",
      "Best in Slot acessórios",
      "Soul Set ou equivalente",
    ],
    tips: [
      "Especialize sua build no Wheel",
      "Team hunt é essencial",
      "Aprenda mecânicas de boss avançadas",
      "Profit começa a ser muito bom aqui",
    ],
  },
  {
    level: "300-500",
    title: "Endgame",
    description: "Bem-vindo ao endgame! Os desafios mais difíceis e as recompensas mais valiosas.",
    objectives: [
      "Completar Soul War",
      "Ter equipment best-in-slot",
      "Participar de todas as raids",
      "Dominar sua vocação",
    ],
    hunts: [
      { name: "Soul War Creatures", slug: "soul-war", profit: "800k-1.5M/h", exp: "10-15M/h" },
      { name: "Rotten Blood", slug: "rotten-blood", profit: "700k-1.2M/h", exp: "8-12M/h" },
      { name: "Primal Pack", slug: "primal-pack", profit: "600k-1M/h", exp: "7-10M/h" },
    ],
    quests: [
      { name: "Soul War", slug: "soul-war", reward: "Soul Weapons" },
    ],
    equipment: [
      "Soul Set completo",
      "Tier 4 Weapons",
      "Best in Slot tudo",
    ],
    tips: [
      "Você está entre os melhores",
      "Ajude novatos - você foi um",
      "O grind continua, mas fica mais divertido",
      "Explore todo o conteúdo do jogo",
    ],
  },
  {
    level: "500+",
    title: "Lendário",
    description: "Você é uma lenda! Poucos chegam aqui. O céu é o limite.",
    objectives: [
      "Ser respeitado na comunidade",
      "Ter todos os achievements",
      "Ajudar a comunidade",
      "Continuar evoluindo",
    ],
    hunts: [
      { name: "Qualquer hunt do jogo", slug: "all", profit: "1M+/h", exp: "15M+/h" },
    ],
    quests: [
      { name: "Todas completadas", slug: "all", reward: "Satisfação pessoal" },
    ],
    equipment: [
      "Best in Slot absoluto",
      "Tier 5 Weapons (se existir)",
      "Customizado para seu estilo",
    ],
    tips: [
      "Você domina o jogo",
      "Continue ajudando a comunidade",
      "Experimente builds diferentes",
      "Divirta-se!",
    ],
  },
];

export default function ZeroToHeroPage() {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const step = guideSteps[selectedStep];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Zero to Hero" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              🚀 Zero to Hero
            </span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl">
            Guia completo para evoluir do level 1 ao endgame. Cada fase tem hunts, quests e equipamentos recomendados.
          </p>
        </div>

        {/* Level Range Selector */}
        <div className="mb-8 flex flex-wrap gap-2">
          {guideSteps.map((s, index) => (
            <button
              key={index}
              onClick={() => setSelectedStep(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedStep === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] border border-gray-700"
              }`}
            >
              {s.level}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Guide */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Card */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl">
                  {selectedStep === 0 ? "🌱" : selectedStep === guideSteps.length - 1 ? "🏆" : "⚔️"}
                </div>
                <div>
                  <p className="text-sm text-purple-400 font-medium">Level {step.level}</p>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">{step.title}</h2>
                </div>
              </div>
              <p className="mt-4 text-[var(--text-muted)]">{step.description}</p>
            </div>

            {/* Objectives */}
            <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-yellow-400">🎯</span> Objetivos
              </h3>
              <ul className="space-y-2">
                {step.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-muted)]">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hunts */}
            <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-red-400">⚔️</span> Hunts Recomendadas
              </h3>
              <div className="space-y-3">
                {step.hunts.map((hunt, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{hunt.name}</p>
                      <p className="text-sm text-[var(--text-muted)]">
                        <span className="text-green-400">{hunt.profit}</span> | <span className="text-blue-400">{hunt.exp}</span>
                      </p>
                    </div>
                    <Link
                      href={`/hunts/${hunt.slug}`}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded hover:bg-purple-500/30 transition-colors"
                    >
                      Ver Hunt →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Quests */}
            <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span className="text-blue-400">📜</span> Quests Importantes
              </h3>
              <div className="space-y-3">
                {step.quests.map((quest, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[var(--bg-primary)] rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">{quest.name}</p>
                      <p className="text-sm text-amber-400">{quest.reward}</p>
                    </div>
                    <Link
                      href={`/quests/${quest.slug}`}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors"
                    >
                      Ver Quest →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Equipment */}
            <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span>🛡️</span> Equipamentos
              </h3>
              <ul className="space-y-2">
                {step.equipment.map((eq, i) => (
                  <li key={i} className="flex items-center gap-2 text-[var(--text-muted)]">
                    <span className="text-amber-400">•</span>
                    {eq}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>💡</span> Dicas
              </h3>
              <ul className="space-y-3">
                {step.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--text-muted)] text-sm">
                    <span className="text-green-400 mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedStep(Math.max(0, selectedStep - 1))}
                disabled={selectedStep === 0}
                className="flex-1 py-3 px-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-muted)] border border-gray-700 hover:border-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setSelectedStep(Math.min(guideSteps.length - 1, selectedStep + 1))}
                disabled={selectedStep === guideSteps.length - 1}
                className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
