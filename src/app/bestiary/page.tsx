"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { huntsDatabase, Monster } from "@/data/hunts";
import { creaturesDb } from "@/data/db/creatures";
import MonsterImage from "@/app/components/MonsterImage";
import LootImage from "@/app/components/LootImage";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

const toDangerLabel = (difficulty?: string | null) => {
  const normalized = (difficulty || "").toLowerCase();
  if (normalized === "trivial") return "Very Low";
  if (normalized === "easy") return "Low";
  if (normalized === "medium") return "Medium";
  if (normalized === "hard") return "High";
  if (normalized === "challenging") return "Very High";
  if (normalized === "archfoe" || normalized === "nemesis") return "Extreme";
  return "Unknown";
};

type BestiaryMonster = Monster & { slug: string; imageUrl?: string | null; huntSlug?: string };

// Helper para extrair todos os monstros únicos
const getAllMonsters = (): BestiaryMonster[] => {
  if (creaturesDb.length > 0) {
    return creaturesDb.map((creature) => {
      const weaknesses: Record<string, number> = {};
      Object.entries(creature.weaknesses || {}).forEach(([key, value]) => {
        if (typeof value === "number") weaknesses[key] = value;
      });

      return {
        name: creature.name,
        hp: creature.hp ?? 0,
        exp: creature.exp ?? 0,
        imageUrl: creature.imageUrl ?? null,
        damage: toDangerLabel(creature.bestiaryDifficulty),
        weaknesses,
        immunities: creature.immunities || [],
        bestiaryKills: creature.bestiaryKills ?? 0,
        loot: creature.loot?.map((item) => ({
          item: item.name,
          chance: item.chance || "",
          value: item.amount || "",
        })) || [],
        slug: creature.slug,
      };
    });
  }

  const monsterMap = new Map<string, BestiaryMonster>();

  Object.values(huntsDatabase).forEach((hunt) => {
    hunt.monsters.forEach((monster) => {
      if (!monsterMap.has(monster.name)) {
        const slug = monster.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        monsterMap.set(monster.name, { ...monster, slug, huntSlug: hunt.slug });
      }
    });
  });

  return Array.from(monsterMap.values());
};

const getWeaknessIcon = (element: string) => {
  switch (element) {
    case "physical": return "⚔️";
    case "fire": return "🔥";
    case "ice": return "❄️";
    case "earth": return "🪨";
    case "energy": return "⚡";
    case "holy": return "✨";
    case "death": return "💀";
    default: return "❓";
  }
};

const getWeaknessColor = (element: string) => {
  switch (element) {
    case "physical": return "from-gray-500/20 to-gray-600/10 border-gray-500/30";
    case "fire": return "from-red-500/20 to-orange-600/10 border-red-500/30";
    case "ice": return "from-blue-500/20 to-cyan-600/10 border-blue-500/30";
    case "earth": return "from-amber-500/20 to-yellow-600/10 border-amber-500/30";
    case "energy": return "from-yellow-500/20 to-amber-600/10 border-yellow-500/30";
    case "holy": return "from-purple-500/20 to-pink-600/10 border-purple-500/30";
    case "death": return "from-green-500/20 to-emerald-600/10 border-green-500/30";
    default: return "from-gray-500/20 to-gray-600/10 border-gray-500/30";
  }
};

const getDangerColor = (damage: string) => {
  const lower = damage.toLowerCase();
  if (lower.includes("very low")) return "bg-green-500/20 text-green-400 border-green-500/30";
  if (lower.includes("low")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  if (lower.includes("medium")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  if (lower.includes("high")) return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  if (lower.includes("very high") || lower.includes("extreme")) return "bg-red-500/20 text-red-400 border-red-500/30";
  return "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

export default function BestiaryPage() {
  const [search, setSearch] = useState("");
  const [weaknessFilter, setWeaknessFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"hp" | "exp" | "name">("name");

  const monsters = useMemo(() => getAllMonsters(), []);

  const filteredMonsters = useMemo(() => {
    let result = monsters.filter((m) => {
      const matchName = m.name.toLowerCase().includes(search.toLowerCase());
      
      let matchWeakness = true;
      if (weaknessFilter !== "all") {
        matchWeakness = (m.weaknesses[weaknessFilter] || 0) > 0;
      }

      return matchName && matchWeakness;
    });

    // Sort
    if (sortBy === "hp") {
      result.sort((a, b) => b.hp - a.hp);
    } else if (sortBy === "exp") {
      result.sort((a, b) => b.exp - a.exp);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [monsters, search, weaknessFilter, sortBy]);

  const maxWeakness = (monster: Monster) => {
    const w = monster.weaknesses;
    return Math.max(
      w.physical || 0,
      w.fire || 0,
      w.ice || 0,
      w.earth || 0,
      w.energy || 0,
      w.holy || 0,
      w.death || 0
    );
  };

  const getPrimaryWeakness = (monster: Monster) => {
    const w = monster.weaknesses;
    const weakList = [
      { key: "physical", value: w.physical || 0 },
      { key: "fire", value: w.fire || 0 },
      { key: "ice", value: w.ice || 0 },
      { key: "earth", value: w.earth || 0 },
      { key: "energy", value: w.energy || 0 },
      { key: "holy", value: w.holy || 0 },
      { key: "death", value: w.death || 0 },
    ];
    const max = Math.max(...weakList.map(wl => wl.value));
    const primary = weakList.find(wl => wl.value === max);
    return primary ? primary.key : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Bestiário" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">📖</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent mb-2">
                Bestiário
              </h1>
              <p className="text-[var(--glass-text-secondary)] text-lg">
                Pesquise por monstros, fraquezas e loot.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">{monsters.length}</div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Monstros Totais</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              {monsters.filter(m => {
                const d = m.damage.toLowerCase();
                return d.includes("high") || d.includes("very high") || d.includes("extreme");
              }).length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Perigosos</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {monsters.filter(m => maxWeakness(m) >= 100).length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Fraqueza Alta</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {new Set(monsters.map(m => m.huntSlug)).size}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Hunts Disponíveis</div>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-panel p-4 mb-6 sticky top-20 z-40 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar monstro..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="glass-input w-full pl-11"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--glass-text-muted)]">🔍</span>
              </div>
            </div>

            {/* Weakness Filter */}
            <div className="md:w-44">
              <select
                value={weaknessFilter}
                onChange={(e) => setWeaknessFilter(e.target.value)}
                className="glass-input w-full cursor-pointer"
              >
                <option value="all">Todas Fraquezas</option>
                <option value="physical">⚔️ Physical</option>
                <option value="fire">🔥 Fire</option>
                <option value="ice">❄️ Ice</option>
                <option value="earth">🪨 Earth</option>
                <option value="energy">⚡ Energy</option>
                <option value="holy">✨ Holy</option>
                <option value="death">💀 Death</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
              {[
                { id: "name", label: "Nome", icon: "🏷️" },
                { id: "hp", label: "HP", icon: "❤️" },
                { id: "exp", label: "EXP", icon: "⚡" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSortBy(opt.id as any)}
                  className={`glass-btn whitespace-nowrap flex items-center gap-2 ${
                    sortBy === opt.id ? "glass-btn-primary" : ""
                  }`}
                >
                  <span>{opt.icon}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Monsters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMonsters.map((monster, index) => {
            const primaryWeakness = getPrimaryWeakness(monster);
            return (
              <Link
                key={monster.slug}
                href={`/creatures/${monster.slug}?from=bestiary`}
                className="glass-card p-5 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-16 h-16 bg-[var(--glass-bg-hover)] rounded-lg overflow-hidden flex items-center justify-center border border-[var(--glass-border)]">
                    <MonsterImage
                      src={monster.imageUrl ?? ""}
                      alt={monster.name}
                      className="max-w-[64px] max-h-[64px] object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[var(--glass-text-primary)] group-hover:text-[var(--glass-rubi-primary)] transition-colors truncate">
                      {monster.name}
                    </h3>
                    <div className={`px-2 py-0.5 rounded-full text-xs font-medium border mt-1 inline-block ${getDangerColor(monster.damage)}`}>
                      {monster.damage}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 relative z-10">
                  {/* HP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--glass-text-muted)]">❤️ HP</span>
                    <span className="text-sm font-bold text-red-400">{monster.hp.toLocaleString()}</span>
                  </div>

                  {/* EXP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--glass-text-muted)]">⚡ EXP</span>
                    <span className="text-sm font-bold text-[var(--glass-rubi-primary)]">{monster.exp.toLocaleString()}</span>
                  </div>

                  {/* Primary Weakness */}
                  {primaryWeakness ? (
                    <div className="pt-2 border-t border-[var(--glass-border)] mt-2">
                      <div className={`px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br ${getWeaknessColor(primaryWeakness)} border inline-flex items-center gap-1.5 w-full justify-center`}>
                        <span>{getWeaknessIcon(primaryWeakness)}</span>
                        <span className="capitalize">{primaryWeakness}</span>
                        <span className="opacity-70">({maxWeakness(monster)}%)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-[var(--glass-border)] mt-2 h-[34px]"></div>
                  )}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[var(--glass-rubi-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMonsters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👾</div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Nenhum monstro encontrado
            </h3>
            <p className="text-[var(--text-muted)]">
              Tente ajustar os filtros de busca ou fraqueza.
            </p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 text-center text-sm text-[var(--text-muted)]">
          <p>Mostrando <span className="font-bold text-[var(--text-primary)]">{filteredMonsters.length}</span> de {monsters.length} monstros</p>
        </div>
      </div>
    </div>
  );
}
