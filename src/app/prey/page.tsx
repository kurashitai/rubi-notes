"use client";

import { useState } from "react";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";
import { 
  preyBonuses, 
  preyCreatures, 
  preyTips, 
  huntingTaskRewards,
  htpTable,
  type PreyCreature,
  type PreyBonus
} from "@/data/prey";

const bonusIcons: Record<PreyBonus["type"], string> = {
  damage: "⚔️",
  defense: "🛡️",
  experience: "⭐",
  loot: "💰"
};

const bonusColors: Record<PreyBonus["type"], string> = {
  damage: "from-red-500 to-orange-500",
  defense: "from-blue-500 to-cyan-500",
  experience: "from-yellow-500 to-amber-500",
  loot: "from-green-500 to-emerald-500"
};

const difficultyColors: Record<PreyCreature["difficulty"], string> = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30"
};

export default function PreyPage() {
  const [selectedBonus, setSelectedBonus] = useState<PreyBonus["type"] | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<PreyCreature["difficulty"] | "all">("all");
  const [levelRange, setLevelRange] = useState<[number, number]>([0, 500]);
  const [selectedCreature, setSelectedCreature] = useState<PreyCreature | null>(null);
  const [activeTab, setActiveTab] = useState<"creatures" | "rewards" | "calculator">("creatures");

  const filteredCreatures = preyCreatures.filter(creature => {
    if (selectedBonus !== "all" && creature.bestBonus !== selectedBonus) return false;
    if (selectedDifficulty !== "all" && creature.difficulty !== selectedDifficulty) return false;
    if (creature.level < levelRange[0] || creature.level > levelRange[1]) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadcrumbWithHome items={[{ label: "Prey System" }]} />

      {/* Header */}
      <div className="mb-8 mt-6">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          🎯 Prey System
        </h1>
        <p className="text-[var(--glass-text-muted)]">
          Sistema de bônus para caçar criaturas específicas. Escolha suas presas sabiamente!
        </p>
      </div>

      {/* Bonus Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {preyBonuses.map(bonus => (
          <div 
            key={bonus.type}
            className={`glass-card p-4 cursor-pointer transition-all hover:scale-105 hover:shadow-[var(--glass-glow)] ${
              selectedBonus === bonus.type ? "ring-2 ring-[var(--glass-rubi-primary)]" : ""
            }`}
            onClick={() => setSelectedBonus(selectedBonus === bonus.type ? "all" : bonus.type)}
          >
            <div className={`text-3xl mb-2 bg-gradient-to-r ${bonusColors[bonus.type]} bg-clip-text text-transparent`}>
              {bonusIcons[bonus.type]}
            </div>
            <h3 className="font-bold text-[var(--glass-text-primary)] capitalize">{bonus.type}</h3>
            <p className="text-sm text-[var(--glass-text-muted)]">
              {bonus.minValue}% - {bonus.maxValue}%
            </p>
            <p className="text-xs text-[var(--glass-text-secondary)] mt-1">
              Step: {bonus.step}%
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-[var(--glass-border)] pb-2">
        {[
          { id: "creatures", label: "🦁 Criaturas Recomendadas" },
          { id: "rewards", label: "🏆 Recompensas HTP" },
          { id: "calculator", label: "🧮 Calculadora" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === tab.id 
                ? "bg-[var(--glass-rubi-primary)] text-white" 
                : "text-[var(--glass-text-muted)] hover:text-[var(--glass-text-primary)] hover:bg-[var(--glass-bg-hover)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Creatures Tab */}
      {activeTab === "creatures" && (
        <>
          {/* Filters */}
          <div className="glass-panel p-4 mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-2">Melhor Bônus</label>
                <select
                  value={selectedBonus}
                  onChange={(e) => setSelectedBonus(e.target.value as typeof selectedBonus)}
                  className="glass-input cursor-pointer"
                >
                  <option value="all">Todos</option>
                  <option value="damage">⚔️ Damage</option>
                  <option value="defense">🛡️ Defense</option>
                  <option value="experience">⭐ Experience</option>
                  <option value="loot">💰 Loot</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-2">Dificuldade</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as typeof selectedDifficulty)}
                  className="glass-input cursor-pointer"
                >
                  <option value="all">Todas</option>
                  <option value="Easy">Easy (25-50 kills)</option>
                  <option value="Medium">Medium (100-200 kills)</option>
                  <option value="Hard">Hard (400-800 kills)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-2">Level Mínimo</label>
                <select
                  value={levelRange[0]}
                  onChange={(e) => setLevelRange([Number(e.target.value), levelRange[1]])}
                  className="glass-input cursor-pointer"
                >
                  <option value={0}>Qualquer</option>
                  <option value={50}>50+</option>
                  <option value={100}>100+</option>
                  <option value={150}>150+</option>
                  <option value={200}>200+</option>
                  <option value={250}>250+</option>
                  <option value={300}>300+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Creatures Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredCreatures.map(creature => (
              <div
                key={creature.id}
                className="glass-card p-4 cursor-pointer hover:scale-[1.02] transition-all"
                onClick={() => setSelectedCreature(creature)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[var(--glass-text-primary)] text-lg">{creature.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs border ${difficultyColors[creature.difficulty]}`}>
                    {creature.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[var(--glass-text-muted)] mb-2">
                  <span>📍 {creature.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[var(--glass-text-muted)] mb-3">
                  <span>⚔️ Level {creature.level}+</span>
                </div>

                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${bonusColors[creature.bestBonus]} bg-opacity-20`}>
                  <span>{bonusIcons[creature.bestBonus]}</span>
                  <span className="text-[var(--glass-text-primary)] text-sm font-medium capitalize">
                    Melhor: {creature.bestBonus}
                  </span>
                </div>

                <p className="text-xs text-[var(--glass-text-secondary)] mt-2 line-clamp-2">
                  {creature.reason}
                </p>
              </div>
            ))}
          </div>

          {filteredCreatures.length === 0 && (
            <div className="text-center py-12 text-[var(--glass-text-secondary)]">
              Nenhuma criatura encontrada com os filtros selecionados.
            </div>
          )}
        </>
      )}

      {/* Rewards Tab */}
      {activeTab === "rewards" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {huntingTaskRewards.map(reward => (
            <div key={reward.name} className="glass-card p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{reward.icon}</span>
                <div>
                  <h3 className="font-bold text-[var(--glass-text-primary)]">{reward.name}</h3>
                  <p className="text-amber-400 font-mono">
                    {reward.cost.toLocaleString()} HTP
                  </p>
                  <span className="text-xs text-[var(--glass-text-secondary)] capitalize">{reward.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calculator Tab */}
      {activeTab === "calculator" && (
        <div className="glass-panel p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-[var(--glass-text-primary)]">📊 Tabela de HTP por Task</h2>
          
          <div className="overflow-x-auto rounded-lg border border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--glass-border)] bg-[var(--glass-bg-hover)]">
                  <th className="text-left py-2 px-3 text-[var(--glass-text-muted)]">Dificuldade</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">Kills</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">⭐</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">⭐⭐</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">⭐⭐⭐</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">⭐⭐⭐⭐</th>
                  <th className="text-center py-2 px-3 text-[var(--glass-text-muted)]">⭐⭐⭐⭐⭐</th>
                </tr>
              </thead>
              <tbody>
                {(["Easy", "Medium", "Hard"] as const).map(diff => (
                  <>
                    <tr key={`${diff}-1`} className="border-b border-[var(--glass-border)]">
                      <td className="py-2 px-3 text-[var(--glass-text-primary)] font-medium" rowSpan={2}>{diff}</td>
                      <td className="py-2 px-3 text-center text-[var(--glass-text-muted)]">{htpTable[diff].amount1}</td>
                      {[1, 2, 3, 4, 5].map(level => (
                        <td key={level} className="py-2 px-3 text-center text-amber-400">
                          {htpTable[diff].rewards[level as 1|2|3|4|5].htp1}
                        </td>
                      ))}
                    </tr>
                    <tr key={`${diff}-2`} className="border-b border-[var(--glass-border)]">
                      <td className="py-2 px-3 text-center text-[var(--glass-text-muted)]">{htpTable[diff].amount2}</td>
                      {[1, 2, 3, 4, 5].map(level => (
                        <td key={level} className="py-2 px-3 text-center text-green-400 font-bold">
                          {htpTable[diff].rewards[level as 1|2|3|4|5].htp2}
                        </td>
                      ))}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 rounded-lg border border-green-500/30 bg-green-500/10">
            <p className="text-green-400 text-sm">
              💡 <strong>Dica:</strong> Para maximizar HTP, faça tasks Hard de 800 kills com 5 estrelas = 914 HTP por task!
            </p>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[var(--glass-text-primary)]">💡 Dicas do Prey System</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {preyTips.map((tip, index) => (
            <div key={index} className="glass-card p-4">
              <div className="text-2xl mb-2">{tip.icon}</div>
              <h3 className="font-bold text-[var(--glass-text-primary)] mb-1">{tip.title}</h3>
              <p className="text-sm text-[var(--glass-text-muted)]">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for creature details */}
      {selectedCreature && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCreature(null)}
        >
          <div 
            className="glass-card rounded-xl p-6 max-w-lg w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-[var(--glass-text-primary)]">{selectedCreature.name}</h2>
              <button 
                onClick={() => setSelectedCreature(null)}
                className="text-[var(--glass-text-muted)] hover:text-[var(--glass-text-primary)] text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded border ${difficultyColors[selectedCreature.difficulty]}`}>
                  {selectedCreature.difficulty}
                </span>
                <span className="glass-badge">
                  Level {selectedCreature.level}+
                </span>
              </div>

              <div>
                <h4 className="text-[var(--glass-text-muted)] text-sm mb-1">📍 Localização</h4>
                <p className="text-[var(--glass-text-primary)]">{selectedCreature.location}</p>
              </div>

              <div>
                <h4 className="text-[var(--glass-text-muted)] text-sm mb-1">🎯 Melhor Bônus</h4>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${bonusColors[selectedCreature.bestBonus]}`}>
                  <span className="text-xl">{bonusIcons[selectedCreature.bestBonus]}</span>
                  <span className="text-white font-bold capitalize">{selectedCreature.bestBonus}</span>
                </div>
              </div>

              <div>
                <h4 className="text-[var(--glass-text-muted)] text-sm mb-1">💡 Por quê?</h4>
                <p className="text-[var(--glass-text-primary)]">{selectedCreature.reason}</p>
              </div>

              {selectedCreature.huntingTips && (
                <div>
                  <h4 className="text-[var(--glass-text-muted)] text-sm mb-1">⚔️ Dicas de Hunt</h4>
                  <p className="text-amber-400">{selectedCreature.huntingTips}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
