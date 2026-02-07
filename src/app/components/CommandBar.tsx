"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { huntsDatabase } from "@/data/hunts";
import { creaturesDatabase } from "@/data/creatures";
import { bossesDatabase } from "@/data/bosses";
import { questsDatabase } from "@/data/quests";

interface SearchableItem {
  id: string;
  type: "hunt" | "quest" | "creature" | "boss" | "page";
  title: string;
  description?: string;
  url: string;
  category?: string;
  icon?: string;
}

const typeIcons: Record<string, string> = {
  hunt: "🗡️",
  quest: "📜",
  creature: "👹",
  boss: "💀",
  page: "📄",
};

const typeLabels: Record<string, string> = {
  hunt: "Hunt",
  quest: "Quest",
  creature: "Criatura",
  boss: "Boss",
  page: "Página",
};

const typeColors: Record<string, string> = {
  hunt: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  quest: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  creature: "bg-red-500/20 text-red-400 border-red-500/30",
  boss: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  page: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

// Static pages
const staticPages: SearchableItem[] = [
  { id: "home", type: "page", title: "Home", url: "/", icon: "🏠" },
  { id: "imbuements", type: "page", title: "Imbuements", description: "Guia completo de imbuements", url: "/imbuements", icon: "💎" },
  { id: "charms", type: "page", title: "Charms", description: "Sistema de Charms", url: "/charms", icon: "🎨" },
  { id: "prey", type: "page", title: "Prey System", description: "Bônus de caça", url: "/prey", icon: "🎯" },
  { id: "farm-guide", type: "page", title: "Farm Guide", description: "Melhores hunts de profit", url: "/farm-guide", icon: "💰" },
  { id: "wheel", type: "page", title: "Wheel of Destiny", description: "Presets por vocação", url: "/wheel-of-destiny", icon: "🎡" },
  { id: "monk", type: "page", title: "Way of the Monk", description: "Quest do Monk", url: "/monk-quest", icon: "🧙" },
  { id: "tools", type: "page", title: "Calculadoras", description: "Loot, XP, Party Split", url: "/tools", icon: "🧮" },
  { id: "weapons", type: "page", title: "Armas", description: "Guia de armas", url: "/weapons", icon: "⚔️" },
  { id: "sets", type: "page", title: "Sets", description: "Sets de equipamento", url: "/sets", icon: "🛡️" },
  { id: "bestiary", type: "page", title: "Bestiário", description: "Lista de criaturas", url: "/bestiary", icon: "📚" },
  { id: "linked-tasks", type: "page", title: "Linked Tasks", description: "Tarefas do jogo", url: "/linked-tasks", icon: "📋" },
];

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Build searchable data from real databases
  const searchableData = useMemo(() => {
    const items: SearchableItem[] = [...staticPages];

    // Add hunts
    Object.values(huntsDatabase).forEach((hunt) => {
      items.push({
        id: `hunt-${hunt.slug}`,
        type: "hunt",
        title: hunt.name,
        description: `${hunt.tier} • ${hunt.levelRange} • ${hunt.location}`,
        url: `/hunts/${hunt.slug}`,
        category: hunt.tier,
      });
    });

    // Add creatures
    if (typeof creaturesDatabase === 'object') {
      Object.values(creaturesDatabase).forEach((creature: any) => {
        items.push({
          id: `creature-${creature.slug || creature.id}`,
          type: "creature",
          title: creature.name,
          description: `HP ${creature.hp} • EXP ${creature.exp}`,
          url: `/creatures/${creature.slug || creature.id}`,
          category: creature.bestiaryClass || creature.category,
        });
      });
    }

    // Add bosses
    if (typeof bossesDatabase === 'object') {
      Object.values(bossesDatabase).forEach((boss: any) => {
        items.push({
          id: `boss-${boss.slug || boss.id}`,
          type: "boss",
          title: boss.name,
          description: `${boss.tier || 'Boss'} • ${boss.location || ''}`,
          url: `/bosses/${boss.slug || boss.id}`,
          category: boss.tier,
        });
      });
    }

    // Add quests
    if (typeof questsDatabase === 'object') {
      Object.values(questsDatabase).forEach((quest: any) => {
        items.push({
          id: `quest-${quest.slug || quest.id}`,
          type: "quest",
          title: quest.name,
          description: `Level ${quest.levelRequired || quest.level || '?'}+`,
          url: `/quests/${quest.slug || quest.id}`,
          category: quest.difficulty,
        });
      });
    }

    return items;
  }, []);

  // Fuzzy search
  const results = useMemo(() => {
    if (!query.trim()) {
      // Show recent/popular when empty
      return staticPages.slice(0, 8);
    }

    const q = query.toLowerCase();
    const filtered = searchableData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const descMatch = item.description?.toLowerCase().includes(q);
      const categoryMatch = item.category?.toLowerCase().includes(q);
      const typeMatch = typeLabels[item.type]?.toLowerCase().includes(q);
      return titleMatch || descMatch || categoryMatch || typeMatch;
    });

    // Sort by relevance (title match first)
    filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const aStarts = aTitle.startsWith(q);
      const bStarts = bTitle.startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      const aIncludes = aTitle.includes(q);
      const bIncludes = bTitle.includes(q);
      if (aIncludes && !bIncludes) return -1;
      if (!aIncludes && bIncludes) return 1;
      return 0;
    });

    return filtered.slice(0, 12);
  }, [query, searchableData]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to toggle
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setQuery("");
        return;
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
        return;
      }

      if (!isOpen) return;

      // Arrow navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = useCallback((item: SearchableItem) => {
    setIsOpen(false);
    setQuery("");
    router.push(item.url);
  }, [router]);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/70 backdrop-blur-sm"
      onClick={close}
    >
      <div 
        className="w-full max-w-xl mx-4 bg-[#1e1e2e] rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-900/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-700">
          <span className="text-xl">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar hunts, criaturas, bosses, quests..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-base"
            autoFocus
          />
          <kbd className="text-xs text-gray-500 px-2 py-1 bg-gray-800 rounded border border-gray-700">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {!query.trim() && (
                <p className="px-4 py-1 text-xs text-gray-500 uppercase tracking-wider">
                  Páginas Populares
                </p>
              )}
              {results.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    index === selectedIndex
                      ? "bg-purple-500/20"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {/* Icon */}
                  <span className="text-xl w-8 text-center">
                    {item.icon || typeIcons[item.type]}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${
                        index === selectedIndex ? "text-purple-400" : "text-white"
                      }`}>
                        {item.title}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded border ${typeColors[item.type]}`}>
                        {typeLabels[item.type]}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  {index === selectedIndex && (
                    <span className="text-purple-400">→</span>
                  )}
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="py-12 text-center text-gray-500">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="text-sm">Nenhum resultado para "{query}"</p>
              <p className="text-xs mt-1">Tente buscar com outros termos</p>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray-700 flex items-center justify-between text-xs text-gray-500">
          <span>
            {searchableData.length} itens disponíveis
          </span>
          <div className="flex items-center gap-4">
            <span>↑↓ Navegar</span>
            <span>↵ Abrir</span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700">⌘K</kbd>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
