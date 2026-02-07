"use client";

import { useState } from "react";
import { charms, charmsByHunt, charmTips, charmsByWeakness } from "@/data/charms";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function CharmsPage() {
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedHunt, setSelectedHunt] = useState<string>("");

  const charmKeys = Object.keys(charms) as string[];

  const huntKeys = Object.keys(charmsByHunt) as string[];

  const getCharmInfo = (charmKey: string) => {
    return charms[charmKey];
  };

  const getRecommendedCharmsForHunt = (huntKey: string) => {
    return charmsByHunt[huntKey] || [];
  };

  const getCharmColor = (charmKey: string) => {
    const colorMap: Record<string, string> = {
      phantasm: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      void: "from-gray-500/20 to-slate-500/20 border-gray-500/30",
      vampire: "from-red-500/20 to-orange-500/20 border-red-500/30",
      lightning: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      fire: "from-orange-500/20 to-red-500/20 border-orange-500/30",
      earth: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      energy: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
      ice: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      holy: "from-pink-500/20 to-purple-500/20 border-pink-500/30",
      death: "from-slate-500/20 to-gray-500/20 border-slate-500/30",
      physical: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
      nature: "from-emerald-500/20 to-green-500/20 border-emerald-500/30"
    };
    return colorMap[charmKey] || "from-gray-500/20 to-slate-500/20 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Charms System" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--glass-text-primary)] mb-2">
            <span className="bg-gradient-to-r from-[var(--glass-rubi-primary)] via-[var(--glass-accent-glow)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">
              Charms System
            </span>
          </h1>
          <p className="text-[var(--glass-text-muted)] max-w-2xl">
            Guia completo de quais charms usar em cada hunt para maximizar seu dano.
          </p>
        </div>

        {/* Tips Section */}
        <div className="mb-8 glass-card p-6">
          <h2 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">
            💡 Dicas Importantes
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[var(--glass-text-secondary)]">
            {charmTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--glass-rubi-primary)] mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Charm Finder by Hunt */}
        <div className="mb-8 glass-panel p-6">
          <h2 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">
            🔍 Encontrar Charms para uma Hunt
          </h2>
          <div className="flex gap-3">
            <select
              value={selectedHunt}
              onChange={(e) => setSelectedHunt(e.target.value)}
              className="flex-1 glass-input cursor-pointer"
            >
              <option value="">Selecione uma hunt...</option>
              {huntKeys.map(hunt => (
                <option key={hunt} value={hunt}>
                  {hunt.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </option>
              ))}
            </select>
          </div>

          {selectedHunt && (
            <div className="mt-4 p-4 rounded-xl border border-green-500/30 bg-green-500/5">
              <h3 className="font-semibold text-green-400 mb-2">
                ✨ Charms Recomendados
              </h3>
              <div className="flex flex-wrap gap-2">
                {getRecommendedCharmsForHunt(selectedHunt).map(charmKey => {
                  const charm = getCharmInfo(charmKey);
                  return (
                    <button
                      key={charmKey}
                      onClick={() => setSelectedCharm(charmKey)}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getCharmColor(charmKey)} text-white font-medium hover:scale-105 transition-transform`}
                    >
                      <span className="text-lg mr-1">{charm.icon}</span>
                      {charm.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* All Charms Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--glass-text-primary)] mb-4">
            🎨 Todos os Charms Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {charmKeys.map(charmKey => {
              const charm = getCharmInfo(charmKey);
              return (
                <div
                  key={charmKey}
                  onClick={() => setSelectedCharm(charmKey)}
                  className={`glass-card p-5 cursor-pointer transition-all hover:scale-105 hover:shadow-[var(--glass-glow)] border-l-4 ${getCharmColor(charmKey).replace("bg-gradient-to-r", "").trim()}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{charm.icon}</span>
                    <h3 className="text-xl font-bold text-[var(--glass-text-primary)]">
                      {charm.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--glass-text-secondary)] mb-3">
                    {charm.description}
                  </p>
                  <div className="bg-[var(--glass-bg-hover)] rounded-lg p-3 border border-[var(--glass-border)]">
                    <div className="text-sm font-semibold text-[var(--glass-text-primary)]">
                      ⚡ {charm.bonus}
                    </div>
                  </div>

                  {/* Best For */}
                  {charm.bestFor.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-xs font-semibold text-[var(--glass-text-muted)] mb-2">
                        ✅ Melhor para:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {charm.bestFor.slice(0, 4).map((target, idx) => (
                          <span
                            key={idx}
                            className="glass-badge"
                          >
                            {target}
                          </span>
                        ))}
                        {charm.bestFor.length > 4 && (
                          <span className="glass-badge opacity-60">
                            +{charm.bestFor.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Charm Detail Modal */}
        {selectedCharm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedCharm(null)}
          >
            <div
              className="w-full max-w-2xl glass-card rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-[var(--glass-border)]">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{charms[selectedCharm].icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--glass-text-primary)]">
                      {charms[selectedCharm].name} Charm
                    </h2>
                    <p className="text-sm text-[var(--glass-text-muted)]">
                      {charms[selectedCharm].description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCharm(null)}
                  className="text-2xl text-[var(--glass-text-muted)] hover:text-[var(--glass-text-primary)] transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Bonus */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <h3 className="text-lg font-bold text-green-400 mb-2">
                    ⚡ Bônus
                  </h3>
                  <p className="text-2xl font-bold text-[var(--glass-text-primary)]">
                    {charms[selectedCharm].bonus}
                  </p>
                </div>

                {/* Best For */}
                {charms[selectedCharm].bestFor.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-[var(--glass-text-primary)] mb-3">
                      ✅ Melhor Para
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {charms[selectedCharm].bestFor.map((target, idx) => (
                        <span
                          key={idx}
                          className="glass-badge bg-[var(--glass-bg-hover)] text-[var(--glass-text-primary)]"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Weak Against */}
                {charms[selectedCharm].weakAgainst.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-3">
                      ❌ Fraco Contra
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {charms[selectedCharm].weakAgainst.map((target, idx) => (
                        <span
                          key={idx}
                          className="glass-badge bg-red-500/10 text-red-300 border-red-500/30"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Effective Against */}
                <div className="bg-[var(--glass-bg-hover)] rounded-xl p-5 border border-[var(--glass-border)]">
                  <h3 className="text-lg font-bold text-[var(--glass-text-primary)] mb-3">
                    🎯 Usar Contra
                  </h3>
                  <div className="text-sm text-[var(--glass-text-muted)]">
                    <p className="mb-2">
                      Este charm aumenta o dano físico em <strong>10%</strong> contra o tipo de criatura especificado.
                    </p>
                    <p>
                      Combine com outros bônus de dano (imbuements, wheel of destiny) para maximizar seu DPS.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-[var(--glass-border)]">
                <button
                  onClick={() => setSelectedCharm(null)}
                  className="glass-btn-primary w-full py-3 rounded-xl font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
