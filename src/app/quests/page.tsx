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
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          <span>🎯</span> Quests & Acessos
        </h1>
        <p className="text-[var(--glass-text-secondary)] max-w-2xl">
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
                ? "glass-btn-primary"
                : "glass-btn hover:text-[var(--glass-text-primary)]"
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
            className="glass-card block p-5 hover:scale-[1.01] transition-all group relative overflow-hidden"
          >
            {/* Background Icon Opacity */}
            <div className="absolute right-[-20px] top-[-20px] text-[100px] opacity-5 pointer-events-none select-none text-[var(--glass-text-primary)]">
              {typeIcons[quest.type] || "📜"}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              {/* Left Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h2 className="text-xl font-bold text-[var(--glass-text-primary)] group-hover:text-[var(--glass-rubi-primary)] transition-colors">
                    {quest.name}
                  </h2>
                  <span className={`px-2 py-0.5 text-xs border rounded uppercase font-bold tracking-wide ${
                    quest.status === "Essencial" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                    quest.status === "Recomendada" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                    "bg-[var(--glass-bg-hover)] text-[var(--glass-text-muted)] border-[var(--glass-border)]"
                  }`}>
                    {quest.status}
                  </span>
                  <span className="text-xs text-[var(--glass-text-secondary)] glass-badge">
                    Lvl {quest.levelRequired}+
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[var(--glass-text-muted)] mt-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-[var(--glass-text-secondary)] uppercase">Libera Bosses</span>
                    <span className="text-[var(--glass-text-primary)] font-medium">{quest.bossesUnlocked.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[var(--glass-text-secondary)] uppercase">Libera Hunts</span>
                    <span className="text-[var(--glass-text-primary)] font-medium">{quest.huntsUnlocked.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[var(--glass-text-secondary)] uppercase">Duração</span>
                    <span className="text-[var(--glass-text-primary)] font-medium">{quest.length}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[var(--glass-text-secondary)] uppercase">Recompensas</span>
                    <span className="text-[var(--glass-text-primary)] font-medium truncate max-w-[150px]" title={quest.rewards.join(", ")}>
                      {quest.rewards[0] || "-"} {quest.rewards.length > 1 && `+${quest.rewards.length - 1}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--glass-bg-hover)] text-[var(--glass-text-muted)] group-hover:text-[var(--glass-rubi-primary)] group-hover:bg-[var(--glass-rubi-primary)]/10 transition-all border border-[var(--glass-border)]">
                <span className="text-xl">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
