"use client";

import { useState } from "react";
import Link from "next/link";
import { bossesDatabase, BossData } from "@/data/bosses";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

// Sistema de Cooldown Local (Simulação)
const useBossTracker = () => {
  const [killedBosses, setKilledBosses] = useState<Record<string, number>>({});

  const toggleBoss = (id: string) => {
    setKilledBosses((prev) => {
      const newState = { ...prev };
      if (newState[id]) {
        delete newState[id]; // Uncheck
      } else {
        newState[id] = Date.now(); // Check with timestamp
      }
      return newState;
    });
  };

  const isKilled = (id: string) => !!killedBosses[id];

  return { isKilled, toggleBoss };
};

export default function BossesPage() {
  const { isKilled, toggleBoss } = useBossTracker();
  const [filter, setFilter] = useState<"All" | "S" | "A">("All");

  const filteredBosses = filter === "All" 
    ? bossesDatabase 
    : bossesDatabase.filter(b => b.tier === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>☠️</span> Boss Rotation Guide
        </h1>
        <p className="text-gray-400">
          Rota diária de bosses essenciais para profit e itens raros.
          Marque os bosses que você já matou hoje!
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        {["All", "S", "A"].map((tier) => (
          <button
            key={tier}
            onClick={() => setFilter(tier as any)}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              filter === tier
                ? "bg-red-600 text-white"
                : "bg-[#1e1e2e] text-gray-400 hover:bg-[#2a2a3e]"
            }`}
          >
            {tier === "All" ? "Todos" : `Tier ${tier}`}
          </button>
        ))}
      </div>

      {/* Boss Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBosses.map((boss) => (
          <div 
            key={boss.id} 
            className={`card-glow bg-[#1e1e2e] relative overflow-hidden transition-all ${
              isKilled(boss.id) ? "opacity-60 grayscale border-gray-700" : "border-red-900/30"
            }`}
          >
            {/* Header / Checkbox */}
            <div className="absolute top-3 right-3 z-10">
              <button
                onClick={() => toggleBoss(boss.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                  isKilled(boss.id)
                    ? "bg-green-500 border-green-500 text-black"
                    : "bg-black/50 border-gray-500 text-transparent hover:border-green-400"
                }`}
                title="Marcar como morto hoje"
              >
                ✓
              </button>
            </div>

            {/* Boss Info */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center border border-gray-700 shrink-0">
                  <img 
                    src={`${BASE_WIKI_URL}${boss.image}`} 
                    alt={boss.name}
                    className="max-w-[48px] max-h-[48px] object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/placeholder-boss.png";
                      (e.target as HTMLImageElement).style.opacity = "0.5";
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight mb-1">{boss.name}</h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded border ${
                      boss.tier === "S" ? "bg-amber-900/30 border-amber-600 text-amber-400" : "bg-blue-900/30 border-blue-600 text-blue-400"
                    }`}>
                      Tier {boss.tier}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-600 text-gray-300">
                      {boss.cooldown}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location & Quest */}
              <div className="space-y-2 mb-4 text-sm text-gray-300 bg-[#14141f] p-3 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-500">Local:</span>
                  <span>{boss.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Acesso:</span>
                  {boss.accessQuestSlug ? (
                    <Link href={`/quests/${boss.accessQuestSlug}`} className="text-purple-400 hover:underline">
                      {boss.accessQuest}
                    </Link>
                  ) : (
                    <span>{boss.accessQuest}</span>
                  )}
                </div>
              </div>

              {/* Mechanics (Expandable could be better, but keeping simple) */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Mecânica Rápida</h4>
                <ul className="text-xs space-y-1 text-gray-300 list-disc list-inside">
                  {boss.mechanics.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Loot Highlights */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Loot Principal</h4>
                <div className="flex flex-wrap gap-2">
                  {boss.loot.map((item, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-2 py-1 rounded border ${
                        item.chance === "Muito Raro" 
                          ? "bg-amber-900/20 border-amber-800 text-amber-500" 
                          : "bg-gray-800 border-gray-700 text-gray-300"
                      }`}
                      title={item.value}
                    >
                      {item.item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
