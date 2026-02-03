"use client";

import { useState } from "react";
import Link from "next/link";

export default function ToolsPage() {
  // Profit State
  const [supplies, setSupplies] = useState(0);
  const [gold, setGold] = useState(0);
  const [platinum, setPlatinum] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [marketLoot, setMarketLoot] = useState(0);
  const [duration, setDuration] = useState(60); // minutes

  // Party Split State
  const [partyBalance, setPartyBalance] = useState(0);
  const [partySize, setPartySize] = useState(2);
  
  // Exp State
  const [currentLevel, setCurrentLevel] = useState(100);
  const [targetLevel, setTargetLevel] = useState(101);
  const [expPerHour, setExpPerHour] = useState(1000000); // 1kk/h

  // Profit Logic
  const totalLoot = gold + (platinum * 100) + (crystal * 10000) + marketLoot;
  const profit = totalLoot - supplies;
  const profitPerHour = duration > 0 ? (profit / duration) * 60 : 0;

  // Party Logic
  const splitPerPlayer = partySize > 0 ? partyBalance / partySize : 0;

  // Exp Logic (Tibia Formula)
  // Exp for level L = (50/3)*(L^3 - 6*L^2 + 17*L - 12)
  const getExpForLevel = (lvl: number) => Math.floor((50 / 3) * (Math.pow(lvl, 3) - 6 * Math.pow(lvl, 2) + 17 * lvl - 12));
  const currentExpTotal = getExpForLevel(currentLevel);
  const targetExpTotal = getExpForLevel(targetLevel);
  const expNeeded = targetExpTotal - currentExpTotal;
  const timeToLevel = expPerHour > 0 ? expNeeded / expPerHour : 0; // hours

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2">🧮 Calculadoras</h1>
        <p className="text-gray-500">Ferramentas úteis para otimizar sua gameplay.</p>
      </div>

      <div className="grid gap-8">
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profit Calculator */}
          <div className="card-glow p-6 bg-[#1e1e2e]">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-400">
              <span>💰</span> Loot & Profit
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Custo de Supplies (gp)</label>
                <input
                  type="number"
                  value={supplies || ""}
                  onChange={(e) => setSupplies(Number(e.target.value))}
                  className="w-full bg-[#14141f] border border-gray-700 rounded p-2 text-red-400 font-mono focus:border-red-500 outline-none"
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
                    className="w-full bg-[#14141f] border border-yellow-700 rounded p-2 text-yellow-400 font-mono focus:border-yellow-500 outline-none"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Platinum</label>
                  <input
                    type="number"
                    value={platinum || ""}
                    onChange={(e) => setPlatinum(Number(e.target.value))}
                    className="w-full bg-[#14141f] border border-gray-400 rounded p-2 text-gray-300 font-mono focus:border-gray-500 outline-none"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Crystal</label>
                  <input
                    type="number"
                    value={crystal || ""}
                    onChange={(e) => setCrystal(Number(e.target.value))}
                    className="w-full bg-[#14141f] border border-cyan-700 rounded p-2 text-cyan-400 font-mono focus:border-cyan-500 outline-none"
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
                  className="w-full bg-[#14141f] border border-green-700/50 rounded p-2 text-green-400 font-mono focus:border-green-500 outline-none"
                  placeholder="Ex: Itens de criatura"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Duração da Hunt (minutos)</label>
                <input
                  type="number"
                  value={duration || ""}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-[#14141f] border border-purple-700/50 rounded p-2 text-purple-400 font-mono focus:border-purple-500 outline-none"
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
                      {profitPerHour.toLocaleString(undefined, { maximumFractionDigits: 0 })} gp/hora
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exp Calculator */}
          <div className="card-glow p-6 bg-[#1e1e2e]">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
              <span>⚡</span> Time to Level
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Level Atual</label>
                  <input
                    type="number"
                    value={currentLevel}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentLevel(val);
                      setTargetLevel(val + 1);
                    }}
                    className="w-full bg-[#14141f] border border-gray-700 rounded p-2 text-white font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Level Alvo</label>
                  <input
                    type="number"
                    value={targetLevel}
                    onChange={(e) => setTargetLevel(Number(e.target.value))}
                    className="w-full bg-[#14141f] border border-gray-700 rounded p-2 text-white font-mono outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Exp/Hora da Hunt</label>
                <input
                  type="number"
                  value={expPerHour}
                  onChange={(e) => setExpPerHour(Number(e.target.value))}
                  className="w-full bg-[#14141f] border border-amber-700/50 rounded p-2 text-amber-400 font-mono outline-none"
                />
              </div>

              <div className="mt-6 p-4 bg-[#14141f] rounded-lg border border-gray-800 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Exp Faltante:</span>
                  <span className="text-white font-mono">{expNeeded.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tempo Estimado:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {Math.floor(timeToLevel)}h {Math.round((timeToLevel % 1) * 60)}m
                  </span>
                </div>
              </div>

              <div className="p-3 bg-blue-900/10 border border-blue-900/30 rounded text-xs text-blue-300">
                💡 Baseado na fórmula oficial do Tibia. Rates do servidor Rubinot (se houver stages) podem afetar a exp/h real, mas a quantidade necessária é a mesma.
              </div>
            </div>
          </div>
        </div>

        {/* Party Split */}
        <div className="card-glow p-6 bg-[#1e1e2e]">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
            <span>🤝</span> Party Split (Divisão de Loot)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Balance Total da Party</label>
              <input
                type="number"
                value={partyBalance || ""}
                onChange={(e) => setPartyBalance(Number(e.target.value))}
                className="w-full bg-[#14141f] border border-green-700/50 rounded p-2 text-green-400 font-mono outline-none"
                placeholder="Ex: 500000"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Número de Jogadores</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full bg-[#14141f] border border-gray-700 rounded p-2 text-white outline-none"
              >
                {[2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Jogadores</option>)}
              </select>
            </div>

            <div className="bg-[#14141f] p-3 rounded-lg border border-gray-800 text-center">
              <span className="block text-xs text-gray-400 mb-1">Cada um recebe:</span>
              <span className="text-xl font-bold text-blue-400 font-mono">
                {Math.floor(splitPerPlayer).toLocaleString()} gp
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            * Insira o "Balance" final do analyzer da party (Loot - Supplies). O valor acima é o lucro líquido para cada jogador.
          </p>
        </div>

      </div>
    </div>
  );
}
