"use client";

import { useState, useEffect } from "react";
import LootImage from "./LootImage";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

const dailyBosses = [
  { id: "oberon", name: "Oberon", image: "/monsters/bosses/oberon.gif" },
  { id: "scarlett", name: "Scarlett", image: "/monsters/bosses/scarlett.gif" },
  { id: "drume", name: "Drume", image: "/monsters/bosses/drume.gif" },
  { id: "timira", name: "Timira", image: "/monsters/bosses/timira.gif" }
];

export default function DailyBossWidget() {
  const [killed, setKilled] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carregar estado do localStorage (compartilhado com a página de Bosses se usarmos a mesma key, 
    // mas aqui vou usar uma key simples para o widget por enquanto ou integrar depois)
    // Idealmente, usar um Contexto ou Zustand para estado global. 
    // Vou usar localStorage direto simplificado.
    const saved = localStorage.getItem("dailyBossesStatus");
    if (saved) setKilled(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  const toggle = (id: string) => {
    const newState = { ...killed, [id]: !killed[id] };
    setKilled(newState);
    localStorage.setItem("dailyBossesStatus", JSON.stringify(newState));
  };

  if (!isLoaded) return <div className="h-40 bg-[#1e1e2e] rounded-xl animate-pulse"></div>;

  return (
    <div className="bg-[#1e1e2e] rounded-xl p-4 border border-gray-700/50 h-full flex flex-col">
      <h3 className="text-sm font-bold text-gray-400 uppercase mb-3 flex items-center gap-2">
        <span>☠️</span> Rota Diária Rápida
      </h3>
      
      <div className="grid grid-cols-4 gap-2 flex-1">
        {dailyBosses.map((boss) => (
          <button
            key={boss.id}
            onClick={() => toggle(boss.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
              killed[boss.id] 
                ? "bg-green-900/20 border-green-900/50 opacity-60 grayscale" 
                : "bg-[#14141f] border-gray-800 hover:border-purple-500/50"
            }`}
          >
             <div className="w-10 h-10 flex items-center justify-center mb-1 relative">
                <img 
                  src={`${BASE_WIKI_URL}${boss.image}`} 
                  alt={boss.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => (e.target as HTMLImageElement).src = '/images/placeholder-boss.png'}
                />
                {killed[boss.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
                    <span className="text-green-500 font-bold text-lg">✓</span>
                  </div>
                )}
             </div>
             <span className={`text-[10px] font-bold ${killed[boss.id] ? "text-green-600" : "text-gray-400"}`}>
               {boss.name}
             </span>
          </button>
        ))}
      </div>
    </div>
  );
}
