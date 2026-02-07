"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";
import { huntsDatabase as huntsRecord, RUBINOT_LOOT_RATE, type HuntData } from "@/data/hunts";

// Convert hunts record to array
const huntsDatabase = Object.values(huntsRecord) as HuntData[];

// Level ranges for the farm guide
const levelRanges = [
  { label: "1-50", min: 1, max: 50, color: "from-green-500 to-emerald-500", icon: "🌱" },
  { label: "50-100", min: 50, max: 100, color: "from-blue-500 to-cyan-500", icon: "⚔️" },
  { label: "100-150", min: 100, max: 150, color: "from-purple-500 to-violet-500", icon: "🔮" },
  { label: "150-200", min: 150, max: 200, color: "from-amber-500 to-orange-500", icon: "🔥" },
  { label: "200-300", min: 200, max: 300, color: "from-red-500 to-pink-500", icon: "💀" },
  { label: "300-400", min: 300, max: 400, color: "from-indigo-500 to-purple-500", icon: "⚡" },
  { label: "400-500", min: 400, max: 500, color: "from-rose-500 to-red-500", icon: "👑" },
  { label: "500+", min: 500, max: 9999, color: "from-yellow-500 to-amber-500", icon: "🏆" },
];

// Parse level range string to get min level
function parseLevelRange(levelRange: string): { min: number; max: number } {
  // Handle formats like "200-400", "200+", "8-30", etc.
  const match = levelRange.match(/(\d+)[-+]?(\d*)/);
  if (match) {
    const min = parseInt(match[1], 10);
    const max = match[2] ? parseInt(match[2], 10) : min + 100;
    return { min, max };
  }
  return { min: 0, max: 999 };
}

// Check if a hunt falls within a level range
function huntInRange(huntLevelRange: string, rangeMin: number, rangeMax: number): boolean {
  const { min, max } = parseLevelRange(huntLevelRange);
  // Hunt is in range if there's any overlap
  return min <= rangeMax && max >= rangeMin;
}

export default function FarmGuidePage() {
  const [selectedRange, setSelectedRange] = useState(levelRanges[2]); // Default to 100-150
  const [sortBy, setSortBy] = useState<"profit" | "exp">("profit");

  // Get hunts for selected range, sorted by profit or exp
  const huntsInRange = useMemo(() => {
    return huntsDatabase
      .filter(hunt => huntInRange(hunt.levelRange, selectedRange.min, selectedRange.max))
      .sort((a, b) => {
        if (sortBy === "profit") {
          return (b.baseProfit * RUBINOT_LOOT_RATE) - (a.baseProfit * RUBINOT_LOOT_RATE);
        } else {
          // Parse exp string to get numeric value
          const getExp = (expStr: string) => {
            const match = expStr.match(/([\d.]+)([mk])?/i);
            if (!match) return 0;
            let value = parseFloat(match[1]);
            if (match[2]?.toLowerCase() === 'k') value *= 1000;
            if (match[2]?.toLowerCase() === 'm') value *= 1000000;
            return value;
          };
          return getExp(b.rawExp) - getExp(a.rawExp);
        }
      });
  }, [selectedRange, sortBy]);

  // Calculate total profit potential for the range
  const topProfit = huntsInRange[0]?.baseProfit * RUBINOT_LOOT_RATE || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadcrumbWithHome items={[{ label: "Farm Guide" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          💰 Guia de Farm
        </h1>
        <p className="text-gray-400">
          Ranking das melhores hunts de profit por faixa de level. Valores consideram loot rate {RUBINOT_LOOT_RATE}x do Rubinot.
        </p>
      </div>

      {/* Level Range Selector */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-8">
        {levelRanges.map(range => (
          <button
            key={range.label}
            onClick={() => setSelectedRange(range)}
            className={`p-3 rounded-lg text-center transition-all ${
              selectedRange.label === range.label
                ? `bg-gradient-to-r ${range.color} text-white shadow-lg scale-105`
                : "bg-[#1e1e2e] text-gray-400 hover:text-white hover:bg-[#2a2a3e]"
            }`}
          >
            <div className="text-xl mb-1">{range.icon}</div>
            <div className="text-xs font-bold">{range.label}</div>
          </button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-400">Ordenar por:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("profit")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === "profit"
                ? "bg-green-600 text-white"
                : "bg-[#1e1e2e] text-gray-400 hover:text-white"
            }`}
          >
            💰 Profit
          </button>
          <button
            onClick={() => setSortBy("exp")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === "exp"
                ? "bg-amber-600 text-white"
                : "bg-[#1e1e2e] text-gray-400 hover:text-white"
            }`}
          >
            ⭐ Experiência
          </button>
        </div>
      </div>

      {/* Stats Card */}
      <div className="card-glow p-6 bg-[#1e1e2e] mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Faixa de Level</p>
            <p className={`text-3xl font-bold bg-gradient-to-r ${selectedRange.color} bg-clip-text text-transparent`}>
              {selectedRange.icon} {selectedRange.label}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Hunts Disponíveis</p>
            <p className="text-3xl font-bold text-white">{huntsInRange.length}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Melhor Profit/h</p>
            <p className="text-3xl font-bold text-green-400">
              {topProfit > 0 ? `${(topProfit / 1000).toFixed(0)}k` : "-"} gp
            </p>
          </div>
        </div>
      </div>

      {/* Hunts Ranking */}
      <div className="space-y-4">
        {huntsInRange.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Nenhuma hunt encontrada para esta faixa de level.
          </div>
        ) : (
          huntsInRange.map((hunt, index) => {
            const adjustedProfit = hunt.baseProfit * RUBINOT_LOOT_RATE;
            const profitK = (adjustedProfit / 1000).toFixed(0);
            const isTop3 = index < 3;
            
            return (
              <Link
                key={hunt.slug}
                href={`/hunts/${hunt.slug}`}
                className={`block card-glow p-4 bg-[#1e1e2e] hover:scale-[1.01] transition-all ${
                  isTop3 ? "ring-1 ring-green-500/30" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    index === 0 ? "bg-yellow-500/20 text-yellow-400" :
                    index === 1 ? "bg-gray-400/20 text-gray-300" :
                    index === 2 ? "bg-amber-600/20 text-amber-500" :
                    "bg-gray-800 text-gray-500"
                  }`}>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                  </div>

                  {/* Hunt Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white truncate">{hunt.name}</h3>
                      <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        {hunt.tier}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>📍 {hunt.location}</span>
                      <span>⚔️ {hunt.levelRange}</span>
                      <span>💎 {hunt.weakness}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-shrink-0 text-right">
                    <div className="text-xl font-bold text-green-400">
                      {profitK}k gp/h
                    </div>
                    <div className="text-sm text-amber-400">
                      {hunt.rawExp} exp/h
                    </div>
                  </div>
                </div>

                {/* Monsters Preview */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {hunt.monsters.slice(0, 5).map(monster => (
                    <span
                      key={monster.name}
                      className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-400"
                    >
                      {monster.name}
                    </span>
                  ))}
                  {hunt.monsters.length > 5 && (
                    <span className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-500">
                      +{hunt.monsters.length - 5} mais
                    </span>
                  )}
                </div>
              </Link>
            );
          })
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-12 card-glow p-6 bg-[#1e1e2e]">
        <h2 className="text-xl font-bold mb-4 text-white">💡 Dicas de Farm</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#14141f] rounded-lg">
            <h3 className="font-bold text-green-400 mb-2">🎯 Maximize Profit</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Use Loot Prey na criatura mais valiosa</li>
              <li>• Priorize criaturas que dropam itens de Imbuement</li>
              <li>• Venda loots raros no Market, não no NPC</li>
              <li>• Use charms que maximizam kills/hora</li>
            </ul>
          </div>
          <div className="p-4 bg-[#14141f] rounded-lg">
            <h3 className="font-bold text-amber-400 mb-2">⚡ Maximize XP</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Use XP Prey ou Damage Prey</li>
              <li>• Priorize respawns com alta densidade</li>
              <li>• Use AoE spells para kills em grupo</li>
              <li>• Balance supply cost vs XP gain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
