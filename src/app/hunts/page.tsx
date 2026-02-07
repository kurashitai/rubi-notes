"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { huntsDatabase, HuntData } from "@/data/hunts";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useFavorites, FavoriteButton, FavoritesFilter } from "@/hooks/useFavorites";

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

const getTierColor = (tier: string) => {
  switch (tier) {
    case "S": return "bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30";
    case "A": return "bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30";
    case "B": return "bg-gradient-to-br from-green-500/20 to-green-600/10 text-green-400 border-green-500/30";
    case "C": return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
    default: return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
  }
};

export default function HuntsPage() {
  const [filterLevel, setFilterLevel] = useState("all");
  const [sortBy, setSortBy] = useState<"tier" | "exp" | "profit" | "score">("tier");
  const [search, setSearch] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  const allHunts = Object.values(huntsDatabase);

  const filteredHunts = useMemo(() => {
    let result = [...allHunts];

    // Filter by search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((h) =>
        h.name.toLowerCase().includes(q) ||
        h.location.toLowerCase().includes(q) ||
        h.weakness.toLowerCase().includes(q)
      );
    }

    // Filter by level
    if (filterLevel !== "all") {
      const minLevel = parseInt(filterLevel.split("-")[0]);
      result = result.filter((h) => {
        const huntMin = parseInt(h.levelRange.split("-")[0]);
        return huntMin >= minLevel;
      });
    }

    // Filter by favorites
    if (showOnlyFavorites) {
      result = result.filter((h) => isFavorite(h.slug, "hunt"));
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "exp") return parseValue(b.rawExp) - parseValue(a.rawExp);
      if (sortBy === "profit") return b.baseProfit - a.baseProfit;
      if (sortBy === "score") return calculateScore(b) - calculateScore(a);

      const tiers = { S: 4, A: 3, B: 2, C: 1 };
      return (tiers[b.tier as keyof typeof tiers] || 0) - (tiers[a.tier as keyof typeof tiers] || 0);
    });

    return result;
  }, [allHunts, filterLevel, sortBy, search, showOnlyFavorites, isFavorite]);

  const getProfitColor = (profit: number) => {
    if (profit >= 500) return "text-emerald-400";
    if (profit >= 200) return "text-green-400";
    if (profit >= 100) return "text-yellow-400";
    if (profit > 0) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Hunts" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">🗺️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent mb-2">
                Hunts
              </h1>
              <p className="text-[var(--glass-text-secondary)] text-lg">
                Encontre a hunt perfeita para seu level, foco em XP ou Profit.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">{allHunts.length}</div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Hunts Disponíveis</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {allHunts.filter(h => h.tier === "S").length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Tier S (Melhores)</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {allHunts.filter(h => h.baseProfit >= 200).length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Muito Profitáveis</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              {allHunts.filter(h => parseValue(h.rawExp) >= 4000000).length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">High XP</div>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-panel p-4 mb-6 sticky top-20 z-40 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar hunt, localização ou fraqueza..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="glass-input w-full pl-11"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--glass-text-muted)]">🔍</span>
              </div>
            </div>

            {/* Level Filter */}
            <div className="md:w-44 w-full">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="glass-input w-full cursor-pointer"
              >
                <option value="all">Todos Níveis</option>
                <option value="8-50">8+ (Iniciante)</option>
                <option value="50-100">50+ (Intermediário)</option>
                <option value="100-200">100+ (Avançado)</option>
                <option value="200-300">200+ (Expert)</option>
                <option value="300-999">300+ (Master)</option>
                <option value="400-999">400+ (Legendary)</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
              {[
                { id: "tier", label: "Tier", icon: "⭐" },
                { id: "score", label: "Score", icon: "🎯" },
                { id: "exp", label: "XP", icon: "⚡" },
                { id: "profit", label: "Profit", icon: "💰" },
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

          {/* Favorites Filter */}
          <div className="mt-4 pt-4 border-t border-[var(--accent-primary)]/10">
            <FavoritesFilter
              type="hunt"
              showOnlyFavorites={showOnlyFavorites}
              onToggle={() => setShowOnlyFavorites(!showOnlyFavorites)}
            />
          </div>
        </div>

        {/* Hunts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHunts.map((hunt, index) => (
            <Link
              key={hunt.slug}
              href={`/hunts/${hunt.slug}`}
              className="group relative glass-card overflow-hidden"
            >
              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(hunt.slug, "hunt", hunt.name);
                }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[var(--bg-primary)]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-[var(--glass-border)] hover:border-[var(--glass-rubi-primary)]/50 transition-all hover:scale-110"
              >
                <FavoriteButton id={hunt.slug} type="hunt" name={hunt.name} />
              </button>

              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-2xl">
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 mt-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--glass-text-primary)] group-hover:text-[var(--glass-rubi-primary)] transition-colors mb-1">
                      {hunt.name}
                    </h3>
                    <p className="text-sm text-[var(--glass-text-muted)]">{hunt.location}</p>
                  </div>
                  <div className={`glass-badge ${getTierColor(hunt.tier)}`}>
                    {hunt.tier}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {/* Level */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--glass-text-muted)]">Nível</span>
                    <span className="text-sm font-bold text-[var(--glass-text-primary)]">{hunt.levelRange}</span>
                  </div>

                  {/* XP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--glass-text-muted)]">XP/Hora</span>
                    <span className="text-sm font-bold text-[var(--glass-rubi-primary)]">{hunt.rawExp}</span>
                  </div>

                  {/* Profit */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--glass-text-muted)]">Profit/Hora</span>
                    <span className={`text-sm font-bold ${getProfitColor(hunt.baseProfit)}`}>
                      {hunt.baseProfit > 0 ? `${hunt.baseProfit.toLocaleString()}k` : "---"}
                    </span>
                  </div>

                  {/* Weakness */}
                  <div className="pt-3 border-t border-[var(--glass-border)]">
                    <div className="text-xs text-[var(--glass-text-muted)] mb-1">Fraqueza</div>
                    <div className="text-sm font-medium text-[var(--glass-text-primary)]">{hunt.weakness}</div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--glass-rubi-primary)]/0 to-[var(--glass-rubi-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredHunts.length === 0 && (
          <div className="text-center py-16 glass-card">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[var(--glass-text-primary)] mb-2">
              Nenhuma hunt encontrada
            </h3>
            <p className="text-[var(--glass-text-secondary)]">
              Tente ajustar os filtros de busca ou nível.
            </p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 text-center text-sm text-[var(--glass-text-muted)]">
          <p>Mostrando <span className="font-bold text-[var(--glass-text-primary)]">{filteredHunts.length}</span> de {allHunts.length} hunts</p>
        </div>
      </div>
    </div>
  );
}
