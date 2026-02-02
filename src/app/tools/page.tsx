"use client";

import { useState } from "react";
import Link from "next/link";

export default function ToolsPage() {
  const [supplies, setSupplies] = useState(0);
  const [gold, setGold] = useState(0);
  const [platinum, setPlatinum] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [marketLoot, setMarketLoot] = useState(0);
  const [duration, setDuration] = useState(60); // minutes

  const totalLoot = gold + (platinum * 100) + (crystal * 10000) + marketLoot;
  const profit = totalLoot - supplies;
  const profitPerHour = (profit / duration) * 60;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2">🧮 Calculadoras</h1>
        <p className="text-gray-500">Ferramentas úteis para o dia a dia</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profit Calculator */}
        <div className="card-glow p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>💰</span> Calculadora de Profit
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Custo de Supplies (gp)</label>
              <input
                type="number"
                value={supplies || ""}
                onChange={(e) => setSupplies(Number(e.target.value))}
                className="w-full bg-[#1e1e2e] border border-gray-700 rounded p-2 text-red-400 font-mono focus:border-red-500 outline-none"
                placeholder="0"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Gold Coins</label>
                <input
                  type="number"
                  value={gold || ""}
                  onChange={(e) => setGold(Number(e.target.value))}
                  className="w-full bg-[#1e1e2e] border border-yellow-700 rounded p-2 text-yellow-400 font-mono focus:border-yellow-500 outline-none"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Platinum Coins</label>
                <input
                  type="number"
                  value={platinum || ""}
                  onChange={(e) => setPlatinum(Number(e.target.value))}
                  className="w-full bg-[#1e1e2e] border border-gray-400 rounded p-2 text-gray-300 font-mono focus:border-gray-500 outline-none"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Crystal Coins</label>
                <input
                  type="number"
                  value={crystal || ""}
                  onChange={(e) => setCrystal(Number(e.target.value))}
                  className="w-full bg-[#1e1e2e] border border-cyan-700 rounded p-2 text-cyan-400 font-mono focus:border-cyan-500 outline-none"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Valor de Market Loot (gp)</label>
              <input
                type="number"
                value={marketLoot || ""}
                onChange={(e) => setMarketLoot(Number(e.target.value))}
                className="w-full bg-[#1e1e2e] border border-green-700/50 rounded p-2 text-green-400 font-mono focus:border-green-500 outline-none"
                placeholder="Ex: Valor dos creature products"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Duração da Hunt (minutos)</label>
              <input
                type="number"
                value={duration || ""}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full bg-[#1e1e2e] border border-purple-700/50 rounded p-2 text-purple-400 font-mono focus:border-purple-500 outline-none"
                placeholder="60"
              />
            </div>

            <div className="mt-6 p-4 bg-[#14141f] rounded-lg border border-gray-800">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Loot Total:</span>
                <span className="text-green-400 font-mono">{totalLoot.toLocaleString()} gp</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Supplies:</span>
                <span className="text-red-400 font-mono">-{supplies.toLocaleString()} gp</span>
              </div>
              <div className="h-px bg-gray-700 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="text-gray-300 font-bold">Balance:</span>
                <div className="text-right">
                  <div className={`text-2xl font-bold font-mono ${profit >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                    {profit.toLocaleString()} gp
                  </div>
                  <div className="text-xs text-gray-500">
                    {profitPerHour.toLocaleString()} gp/hora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exp Calculator (Simple) */}
        <div className="card-glow p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span>⚡</span> Exp Calculator (Estimativa)
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded text-sm text-amber-200">
              <p>Em breve: Calculadora de XP necessária para o próximo level com base nas rates do Rubinot!</p>
            </div>
            {/* Placeholder for future implementation */}
          </div>
        </div>
      </div>
    </div>
  );
}
