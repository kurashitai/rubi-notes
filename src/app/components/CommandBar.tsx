"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { huntsDatabase } from "@/data/hunts";
import { linkedTasksDatabase } from "@/data/linked-tasks";
import { bossesDatabase } from "@/data/bosses";

// Flatten data for search
const searchIndex = [
  ...Object.values(huntsDatabase).map(h => ({ type: "Hunt", name: h.name, url: `/hunts/${h.slug}` })),
  ...linkedTasksDatabase.map(t => ({ type: "Task", name: `${t.name} (${t.room})`, url: `/linked-tasks` })), // Poderia linkar pra sala específica se tivesse query param
  ...bossesDatabase.map(b => ({ type: "Boss", name: b.name, url: `/bosses` })),
  { type: "Tool", name: "Profit Calculator", url: "/tools" },
  { type: "Tool", name: "XP Calculator", url: "/tools" },
  { type: "Tool", name: "Party Split", url: "/tools" },
  { type: "Guide", name: "Imbuements", url: "/imbuements" },
  { type: "Guide", name: "Weapons (Club)", url: "/weapons" },
  { type: "Guide", name: "Sets (Equip)", url: "/sets" },
];

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Toggle com Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter logic
  const results = useMemo(() => {
    if (!query) return [];
    return searchIndex.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit 5 results
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    setIsOpen(false);
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh] animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#1e1e2e] border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Input */}
        <div className="flex items-center px-4 py-3 border-b border-gray-700">
          <span className="text-xl mr-3">🔍</span>
          <input
            autoFocus
            type="text"
            placeholder="Buscar hunts, monstros, tools... (Esc para fechar)"
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((result, i) => (
              <button
                key={i}
                onClick={() => handleSelect(result.url)}
                className="w-full text-left flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#2a2a3e] hover:text-purple-400 group transition-colors"
              >
                <span className="font-medium text-gray-200 group-hover:text-purple-300">
                  {result.name}
                </span>
                <span className="text-xs bg-black/40 px-2 py-1 rounded text-gray-500 border border-gray-800">
                  {result.type}
                </span>
              </button>
            ))
          ) : query ? (
            <div className="px-4 py-8 text-center text-gray-500">
              Nenhum resultado encontrado.
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500 text-sm">
              Digite para buscar em todo o Rubi-Notes...
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#14141f] px-4 py-2 border-t border-gray-800 flex justify-between text-xs text-gray-500">
            <span><strong>Enter</strong> selecionar</span>
            <span><strong>Esc</strong> fechar</span>
        </div>

      </div>
    </div>
  );
}
