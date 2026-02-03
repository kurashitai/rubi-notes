"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { huntsDatabase, HuntData } from "@/data/hunts";
import { useFavorites } from "@/hooks/useFavorites";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

const parseValue = (val: string) => {
  if (!val) return 0;
  const num = parseFloat(val.replace(/[^0-9.]/g, ""));
  if (val.toLowerCase().includes("kk") || val.toLowerCase().includes("m")) return num * 1000000;
  if (val.toLowerCase().includes("k")) return num * 1000;
  return num;
};

const calculateScore = (hunt: HuntData) => {
  const xpScore = parseValue(hunt.rawExp) / 10000; 
  const profitScore = hunt.baseProfit > 0 ? hunt.baseProfit * 2 : 0;
  return xpScore + profitScore;
};

export default function HuntsPage() {
  const [filterLevel, setFilterLevel] = useState("all");
  const [sortBy, setSortBy] = useState<"tier" | "exp" | "profit" | "score">("tier");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites("favoriteHunts");

  const allHunts = Object.values(huntsDatabase);

  const filteredHunts = useMemo(() => {
    let result = [...allHunts];

    if (showFavoritesOnly) {
      result = result.filter(h => favorites.includes(h.slug));
    }

    if (filterLevel !== "all") {
      const minLevel = parseInt(filterLevel.split("-")[0]);
      result = result.filter((h) => {
         const huntMin = parseInt(h.levelRange.split("-")[0]);
         return huntMin >= minLevel;
      });
    }

    result.sort((a, b) => {
      if (sortBy === "exp") return parseValue(b.rawExp) - parseValue(a.rawExp);
      if (sortBy === "profit") return b.baseProfit - a.baseProfit;
      if (sortBy === "score") return calculateScore(b) - calculateScore(a);
      
      const tiers = { S: 4, A: 3, B: 2, C: 1 };
      return (tiers[b.tier as keyof typeof tiers] || 0) - (tiers[a.tier as keyof typeof tiers] || 0);
    });

    return result;
  }, [allHunts, filterLevel, sortBy, showFavoritesOnly, favorites]);

  if (!isLoaded) return <div className="p-8 text-center text-gray-500">Carregando hunts...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>🗺️</span> Hunts Guide
        </h1>
        <p className="text-gray-400">
          Encontre a hunt perfeita para seu level, foco em XP ou Profit.
        </p>
      </div>

      <div className="bg-[#1e1e2e] p-4 rounded-xl border border-gray-700/50 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-20 z-40 shadow-lg backdrop-blur-md bg-opacity-90">
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Min Level:</span>
            <select 
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="bg-[#14141f] border border-gray-700 rounded px-3 py-1.5 text-sm text-white focus:border-purple-500 outline-none"
            >
              <option value="all">Todos</option>
              <option value="8-50">8+</option>
              <option value="50-100">50+</option>
              <option value="100-200">100+</option>
              <option value="200-300">200+</option>
              <option value="300-999">300+</option>
              <option value="400-999">400+</option>
            </select>
          </div>

          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-bold transition-colors ${
              showFavoritesOnly ? "bg-amber-500/20 text-amber-400 border border-amber-500/50" : "bg-[#14141f] text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            <span>★</span> Favoritos ({favorites.length})
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
           {[
             { id: "tier", label: "Tier List" },
             { id: "score", label: "Melhor Custo-Benefício" },
             { id: "exp", label: "Maior XP" },
             { id: "profit", label: "Maior Lucro" },
           ].map((opt) => (
             <button
               key={opt.id}
               onClick={() => setSortBy(opt.id as any)}
               className={`px-3 py-1.5 rounded text-xs font-bold transition-colors whitespace-nowrap ${
                 sortBy === opt.id
                   ? "bg-purple-600 text-white shadow-glow"
                   : "bg-[#14141f] text-gray-400 hover:text-white"
               }`}
             >
               {opt.label}
             </button>
           ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHunts.map((hunt) => (
          <div key={hunt.slug} className="group relative">
            <Link href={`/hunts/${hunt.slug}`} className="block h-full">
              <div className={`card-glow bg-[#1e1e2e] h-full flex flex-col relative overflow-hidden group-hover:border-purple-500/50 transition-all ${
                isFavorite(hunt.slug) ? "border-amber-500/30 shadow-amber-900/10" : ""
              }`}>
                
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <img 
                      src={`${BASE_WIKI_URL}/monsters/global/${hunt.monsters[0]?.name.toLowerCase().replace(/ /g, "-")}.gif`}
                      alt="bg"
                      className="w-48 h-48 object-contain grayscale"
                      onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                   />
                </div>

                <div className="p-5 border-b border-gray-700/50 flex justify-between items-start">
                  <div className="pr-8"> 
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {hunt.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-xs text-gray-400 bg-black/30 px-2 py-0.5 rounded">
                         Lvl {hunt.levelRange}
                       </span>
                       <span className="text-xs text-gray-500 flex items-center gap-1">
                         📍 {hunt.location}
                       </span>
                    </div>
                  </div>
                  
                  <span className={`px-2 py-1 rounded text-xs font-bold shrink-0 ${
                    hunt.tier === "S" ? "tier-s" : 
                    hunt.tier === "A" ? "tier-a" : 
                    hunt.tier === "B" ? "tier-b" : "bg-gray-700 text-gray-300"
                  }`}>
                    {hunt.tier}
                  </span>
                </div>

                <div className="absolute top-4 right-14 opacity-90 group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={`${BASE_WIKI_URL}/monsters/global/${hunt.monsters[0]?.name.toLowerCase().replace(/ /g, "-")}.gif`}
                      alt={hunt.monsters[0]?.name}
                      className="w-12 h-12 object-contain drop-shadow-md"
                      onError={(e) => (e.target as HTMLImageElement).src = '/images/placeholder-monster.png'}
                   />
                </div>

                <div className="p-5 flex-1 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">XP/h</span>
                    <span className="text-green-400 font-mono font-bold">{hunt.rawExp}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Profit/h</span>
                    <span className={`font-mono font-bold ${hunt.baseProfit >= 0 ? 'text-amber-400' : 'text-red-400'}`}>
                      {hunt.baseProfit > 0 ? `${hunt.baseProfit}k` : `${hunt.baseProfit}k`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Fraqueza</span>
                    <span className="text-red-400 text-xs px-2 py-0.5 bg-red-900/10 border border-red-900/30 rounded">
                      {hunt.weakness}
                    </span>
                  </div>
                </div>

              </div>
            </Link>
            
            {/* Botão de Favorito (Fora do Link para não navegar ao clicar) */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(hunt.slug);
              }}
              className={`absolute top-4 right-14 z-20 p-1.5 rounded-full transition-all hover:scale-110 ${
                isFavorite(hunt.slug) 
                  ? "text-amber-400 bg-amber-900/20" 
                  : "text-gray-600 hover:text-amber-400 bg-black/20"
              }`}
              style={{ right: '4rem' }} // Ajuste de posição
              title={isFavorite(hunt.slug) ? "Remover Favorito" : "Favoritar"}
            >
              <span className="text-xl leading-none">★</span>
            </button>
          </div>
        ))}
      </div>

      {filteredHunts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {showFavoritesOnly 
            ? "Você ainda não favoritou nenhuma hunt." 
            : "Nenhuma hunt encontrada com esses filtros."}
        </div>
      )}
    </div>
  );
}
