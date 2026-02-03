"use client";

import { useState, useEffect } from "react";

interface BoostedCreature {
  name: string;
  image: string;
}

export default function BoostedCreatureWidget() {
  const [boosted, setBoosted] = useState<BoostedCreature | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBoosted() {
      try {
        // Usa nossa API interna que faz o scraping do Rubinot
        const response = await fetch("/api/boosted");
        
        if (!response.ok) throw new Error("Failed to fetch");
        
        const data = await response.json();
        
        if (data.image) {
           setBoosted({
             name: data.name || "Boosted Creature",
             image: data.image
           });
        } else {
          throw new Error("No data");
        }
      } catch (err) {
        console.error("Failed to fetch boosted creature", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBoosted();
  }, []);

  if (error) return null;

  if (loading) {
    return (
      <div className="w-full h-12 bg-[#1e1e2e] animate-pulse rounded-lg mb-6"></div>
    );
  }

  if (!boosted) return null;

  return (
    <div className="w-full bg-gradient-to-r from-[#1e1e2e] to-[#2a2a3e] rounded-lg p-4 mb-6 border border-purple-500/20 shadow-lg shadow-purple-900/10 flex items-center justify-between relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="flex items-center gap-4 z-10">
        <div className="relative">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center border border-purple-500/50">
             <img 
               src={boosted.image} 
               alt={boosted.name} 
               className="w-10 h-10 object-contain"
             />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-[10px] font-bold text-black px-1.5 rounded-full shadow-sm">
            XP
          </div>
        </div>
        
        <div>
          <span className="text-xs text-purple-400 font-bold uppercase tracking-wider block">
            Boosted Creature (Rubinot)
          </span>
          <h3 className="text-lg font-bold text-white leading-none">
            {boosted.name}
          </h3>
        </div>
      </div>

      <div className="text-right z-10 hidden sm:block">
        <div className="text-xs text-gray-400">Bônus Ativos:</div>
        <div className="flex gap-2 mt-1">
           <span className="text-xs bg-green-900/30 text-green-400 border border-green-600/30 px-2 py-0.5 rounded">
             2x XP
           </span>
           <span className="text-xs bg-amber-900/30 text-amber-400 border border-amber-600/30 px-2 py-0.5 rounded">
             2x Loot
           </span>
        </div>
      </div>

    </div>
  );
}
