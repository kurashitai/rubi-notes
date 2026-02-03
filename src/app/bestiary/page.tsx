"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { huntsDatabase, Monster } from "@/data/hunts";
import MonsterImage from "@/app/components/MonsterImage";
import LootImage from "@/app/components/LootImage";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

// Helper para extrair todos os monstros únicos das hunts
const getAllMonsters = () => {
  const monsterMap = new Map<string, Monster & { huntSlug: string }>();

  Object.values(huntsDatabase).forEach((hunt) => {
    hunt.monsters.forEach((monster) => {
      if (!monsterMap.has(monster.name)) {
        monsterMap.set(monster.name, { ...monster, huntSlug: hunt.slug });
      }
    });
  });

  return Array.from(monsterMap.values());
};

export default function BestiaryPage() {
  const [search, setSearch] = useState("");
  const [weaknessFilter, setWeaknessFilter] = useState("all");

  const monsters = useMemo(() => getAllMonsters(), []);

  const filteredMonsters = useMemo(() => {
    return monsters.filter((m) => {
      const matchName = m.name.toLowerCase().includes(search.toLowerCase());
      
      let matchWeakness = true;
      if (weaknessFilter !== "all") {
        // Verifica se tem fraqueza > 0 no elemento selecionado
        matchWeakness = (m.weaknesses[weaknessFilter] || 0) > 0;
      }

      return matchName && matchWeakness;
    });
  }, [monsters, search, weaknessFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>📖</span> Bestiário
        </h1>
        <p className="text-gray-400">
          Pesquise por monstros, fraquezas e loot.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-[#1e1e2e] p-4 rounded-xl border border-gray-700/50 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar monstro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#14141f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Fraco contra:</span>
          <select
            value={weaknessFilter}
            onChange={(e) => setWeaknessFilter(e.target.value)}
            className="bg-[#14141f] border border-gray-700 rounded-lg px-3 py-3 text-white focus:border-purple-500 outline-none"
          >
            <option value="all">Qualquer</option>
            <option value="Physical">Physical</option>
            <option value="Fire">Fire</option>
            <option value="Ice">Ice</option>
            <option value="Energy">Energy</option>
            <option value="Earth">Earth</option>
            <option value="Death">Death</option>
            <option value="Holy">Holy</option>
          </select>
        </div>
      </div>

      {/* Monsters Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMonsters.map((monster) => (
          <div key={monster.name} className="card-glow bg-[#1e1e2e] p-4 rounded-lg flex flex-col gap-3">
            
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/40 rounded flex items-center justify-center shrink-0 border border-gray-700">
                <MonsterImage
                  src={`${BASE_WIKI_URL}/monsters/global/${monster.name.toLowerCase().replace(/ /g, "-")}.gif`}
                  alt={monster.name}
                  className="max-w-[40px] max-h-[40px] object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white">{monster.name}</h3>
                <div className="text-xs text-gray-400">
                  HP: <span className="text-red-400">{monster.hp.toLocaleString()}</span> • XP: <span className="text-green-400">{monster.exp.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Weaknesses */}
            <div className="flex flex-wrap gap-1">
              {Object.entries(monster.weaknesses).map(([elem, val]) => (
                <span 
                  key={elem} 
                  className={`text-[10px] px-1.5 py-0.5 rounded border ${
                    val > 0 
                      ? "bg-green-900/20 border-green-800 text-green-400" 
                      : "bg-red-900/20 border-red-800 text-red-400 opacity-60"
                  }`}
                >
                  {elem} {val > 0 ? `+${val}%` : `${val}%`}
                </span>
              ))}
            </div>

            {/* Loot Teaser */}
            <div className="bg-[#14141f] p-2 rounded text-xs text-gray-400 flex flex-wrap gap-2">
                {monster.loot.slice(0, 3).map((item, i) => (
                    <span key={i} className="flex items-center gap-1">
                        <LootImage 
                           src={`${BASE_WIKI_URL}/items/rubinot/${item.item.toLowerCase().replace(/'/g, "").replace(/ /g, "-")}.gif`}
                           alt={item.item}
                           className="w-4 h-4 object-contain"
                        />
                        {item.item}
                    </span>
                ))}
                {monster.loot.length > 3 && <span>...</span>}
            </div>

            {/* Link to Hunt */}
            <Link 
              href={`/hunts/${monster.huntSlug}`}
              className="mt-auto text-center bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-600/50 py-2 rounded transition-colors text-xs font-bold uppercase"
            >
              Ver Hunt
            </Link>

          </div>
        ))}
      </div>

      {filteredMonsters.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Nenhum monstro encontrado.
        </div>
      )}
    </div>
  );
}
