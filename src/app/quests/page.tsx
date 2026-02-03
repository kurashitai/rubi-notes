"use client";

import Link from "next/link";
import { questsDatabase, QuestData } from "@/data/quests";
import { useState } from "react";

const statusColors = {
  "Essencial": "text-green-400 bg-green-900/20 border-green-900",
  "Recomendada": "text-blue-400 bg-blue-900/20 border-blue-900",
  "Opcional": "text-gray-400 bg-gray-800/20 border-gray-700",
};

const typeIcons = {
  "Access": "🔑",
  "Outfit": "👕",
  "Story": "📜",
  "Endgame": "☠️",
};

export default function QuestsPage() {
  const [filter, setFilter] = useState<"All" | "Essencial" | "Endgame">("All");

  const allQuests = Object.values(questsDatabase);
  
  const filteredQuests = allQuests.filter(q => {
    if (filter === "All") return true;
    if (filter === "Essencial") return q.status === "Essencial";
    if (filter === "Endgame") return q.type === "Endgame";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span>🎯</span> Quests & Acessos
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Guias de acesso para liberar hunts, bosses diários e imbuements. 
          Focados na realidade do Rubinot (rates e mecânicas facilitadas quando aplicável).
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {["All", "Essencial", "Endgame"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap ${
              filter === f
                ? "bg-purple-600 text-white shadow-glow"
                : "bg-[#1e1e2e] text-gray-400 hover:bg-[#2a2a3e]"
            }`}
          >
            {f === "All" ? "Todas" : f}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredQuests.map((quest) => (
          <Link 
            href={`/quests/${quest.slug}`} 
            key={quest.slug}
            className="card-glow block bg-[#1e1e2e] p-5 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all group relative overflow-hidden"
          >
            {/* Background Icon Opacity */}
            <div className="absolute right-[-20px] top-[-20px] text-[100px] opacity-5 pointer-events-none select-none">
              {typeIcons[quest.type] || "📜"}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              {/* Left Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {quest.name}
                  </h2>
                  <span className={`px-2 py-0.5 text-xs border rounded uppercase font-bold tracking-wide ${statusColors[quest.status]}`}>
                    {quest.status}
                  </span>
                  <span className="text-xs text-gray-500 bg-[#14141f] px-2 py-0.5 rounded border border-gray-700">
                    Lvl {quest.levelRequired}+
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mt-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 uppercase">Libera Bosses</span>
                    <span className="text-gray-300 font-medium">{quest.bossesUnlocked.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 uppercase">Libera Hunts</span>
                    <span className="text-gray-300 font-medium">{quest.huntsUnlocked.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 uppercase">Duração</span>
                    <span className="text-gray-300 font-medium">{quest.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 uppercase">Recompensas</span>
                    <span className="text-gray-300 font-medium truncate max-w-[150px]" title={quest.rewards.join(", ")}>
                      {quest.rewards[0] || "-"} {quest.rewards.length > 1 && `+${quest.rewards.length - 1}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#14141f] text-gray-600 group-hover:text-purple-400 group-hover:bg-purple-900/20 transition-all">
                <span className="text-xl">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
