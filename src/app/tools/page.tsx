"use client";

import { useState } from "react";
import Link from "next/link";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";

export default function ToolsPage() {
  // Profit State
  const [supplies, setSupplies] = useState(0);
  const [gold, setGold] = useState(0);
  const [platinum, setPlatinum] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [marketLoot, setMarketLoot] = useState(0);
  const [duration, setDuration] = useState(60);

  // Party Split State
  const [partyBalance, setPartyBalance] = useState(0);
  const [partySize, setPartySize] = useState(2);
  
  // Exp State
  const [currentLevel, setCurrentLevel] = useState(100);
  const [targetLevel, setTargetLevel] = useState(101);
  const [expPerHour, setExpPerHour] = useState(1000000);

  // Character Search State
  const [charName, setCharName] = useState("");

  // Profit Logic
  const totalLoot = gold + (platinum * 100) + (crystal * 10000) + marketLoot;
  const profit = totalLoot - supplies;
  const profitPerHour = duration > 0 ? (profit / duration) * 60 : 0;

  // Party Logic
  const splitPerPlayer = partySize > 0 ? partyBalance / partySize : 0;

  // Exp Logic
  const getExpForLevel = (lvl: number) => Math.floor((50 / 3) * (Math.pow(lvl, 3) - 6 * Math.pow(lvl, 2) + 17 * lvl - 12));
  const currentExpTotal = getExpForLevel(currentLevel);
  const targetExpTotal = getExpForLevel(targetLevel);
  const expNeeded = targetExpTotal - currentExpTotal;
  const timeToLevel = expPerHour > 0 ? expNeeded / expPerHour : 0;

  // Search Logic
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (charName.trim()) {
      window.open(`https://rubinot.com.br/?subtopic=characters&name=${encodeURIComponent(charName)}`, '_blank');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome items={[{ label: "Calculadoras" }]} />

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          🧮 Calculadoras & Tools
        </h1>
        <p className="text-[var(--glass-text-secondary)]">Ferramentas úteis para otimizar sua gameplay.</p>
      </div>

      {/* Character Search Widget */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
          <span>🔍</span> Character Search (Rubinot)
        </h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={charName}
            onChange={(e) => setCharName(e.target.value)}
            placeholder="Nome do personagem..."
            className="flex-1 glass-input"
          />
          <button 
            type="submit"
            className="glass-btn-primary px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105"
          >
            Buscar
          </button>
        </form>
        <p className="text-xs text-[var(--glass-text-muted)] mt-2 ml-1">
          Redireciona para a página oficial do personagem no Rubinot.
        </p>
      </div>

      <div className="grid gap-8">
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profit Calculator */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-400">
              <span>💰</span> Loot & Profit
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Custo de Supplies (gp)</label>
                <input
                  type="number"
                  value={supplies || ""}
                  onChange={(e) => setSupplies(Number(e.target.value))}
                  className="w-full glass-input text-red-400 font-mono"
                  placeholder="0"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs text-[var(--glass-text-muted)] mb-1">Gold Coins</label>
                  <input
                    type="number"
                    value={gold || ""}
                    onChange={(e) => setGold(Number(e.target.value))}
                    className="w-full glass-input text-yellow-400 font-mono"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--glass-text-muted)] mb-1">Platinum</label>
                  <input
                    type="number"
                    value={platinum || ""}
                    onChange={(e) => setPlatinum(Number(e.target.value))}
                    className="w-full glass-input text-[var(--glass-text-secondary)] font-mono"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--glass-text-muted)] mb-1">Crystal</label>
                  <input
                    type="number"
                    value={crystal || ""}
                    onChange={(e) => setCrystal(Number(e.target.value))}
                    className="w-full glass-input text-cyan-400 font-mono"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Valor de Market Loot (gp)</label>
                <input
                  type="number"
                  value={marketLoot || ""}
                  onChange={(e) => setMarketLoot(Number(e.target.value))}
                  className="w-full glass-input text-green-400 font-mono"
                  placeholder="Ex: Itens de criatura"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Duração da Hunt (minutos)</label>
                <input
                  type="number"
                  value={duration || ""}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full glass-input text-[var(--glass-rubi-secondary)] font-mono"
                  placeholder="60"
                />
              </div>

              <div className="mt-6 p-4 bg-[var(--glass-bg-hover)] rounded-lg border border-[var(--glass-border)]">
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--glass-text-muted)]">Loot Total:</span>
                  <span className="text-green-400 font-mono">{totalLoot.toLocaleString()} gp</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--glass-text-muted)]">Supplies:</span>
                  <span className="text-red-400 font-mono">-{supplies.toLocaleString()} gp</span>
                </div>
                <div className="h-px bg-[var(--glass-border)] my-2"></div>
                <div className="flex justify-between items-end">
                  <span className="text-[var(--glass-text-primary)] font-bold">Balance:</span>
                  <div className="text-right">
                    <div className={`text-2xl font-bold font-mono ${profit >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                      {profit.toLocaleString()} gp
                    </div>
                    <div className="text-xs text-[var(--glass-text-muted)]">
                      {profitPerHour.toLocaleString(undefined, { maximumFractionDigits: 0 })} gp/hora
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exp Calculator */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
              <span>⚡</span> Time to Level
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Level Atual</label>
                  <input
                    type="number"
                    value={currentLevel}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentLevel(val);
                      setTargetLevel(val + 1);
                    }}
                    className="w-full glass-input font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Level Alvo</label>
                  <input
                    type="number"
                    value={targetLevel}
                    onChange={(e) => setTargetLevel(Number(e.target.value))}
                    className="w-full glass-input font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Exp/Hora da Hunt</label>
                <input
                  type="number"
                  value={expPerHour}
                  onChange={(e) => setExpPerHour(Number(e.target.value))}
                  className="w-full glass-input text-amber-400 font-mono"
                />
              </div>

              <div className="mt-6 p-4 bg-[var(--glass-bg-hover)] rounded-lg border border-[var(--glass-border)] space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--glass-text-muted)]">Exp Faltante:</span>
                  <span className="text-[var(--glass-text-primary)] font-mono">{expNeeded.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--glass-text-muted)]">Tempo Estimado:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {Math.floor(timeToLevel)}h {Math.round((timeToLevel % 1) * 60)}m
                  </span>
                </div>
              </div>

              <div className="p-3 bg-blue-900/10 border border-blue-900/30 rounded text-xs text-blue-300">
                💡 Baseado na fórmula oficial do Tibia.
              </div>
            </div>
          </div>
        </div>

        {/* Party Split */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
            <span>🤝</span> Party Split (Divisão de Loot)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Balance Total da Party</label>
              <input
                type="number"
                value={partyBalance || ""}
                onChange={(e) => setPartyBalance(Number(e.target.value))}
                className="w-full glass-input text-green-400 font-mono"
                placeholder="Ex: 500000"
              />
            </div>
            
            <div>
              <label className="block text-sm text-[var(--glass-text-muted)] mb-1">Número de Jogadores</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full glass-input"
              >
                {[2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Jogadores</option>)}
              </select>
            </div>

            <div className="bg-[var(--glass-bg-hover)] p-3 rounded-lg border border-[var(--glass-border)] text-center">
              <span className="block text-xs text-[var(--glass-text-muted)] mb-1">Cada um recebe:</span>
              <span className="text-xl font-bold text-blue-400 font-mono">
                {Math.floor(splitPerPlayer).toLocaleString()} gp
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
