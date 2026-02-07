"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getAllBosses, BossData } from "@/data/bosses";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function BossesPage() {
  const bosses = getAllBosses();
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"hp" | "exp" | "cooldown">("hp");

  const filteredBosses = useMemo(() => {
    let result = bosses.filter((boss) => {
      const matchesSearch = boss.name.toLowerCase().includes(search.toLowerCase()) ||
        boss.location.toLowerCase().includes(search.toLowerCase());
      const matchesTier = tierFilter === "all" || boss.tier === tierFilter;
      const matchesCategory = categoryFilter === "all" || boss.category === categoryFilter;
      return matchesSearch && matchesTier && matchesCategory;
    });

    // Sort
    if (sortBy === "hp") {
      result.sort((a, b) => b.hp - a.hp);
    } else if (sortBy === "exp") {
      result.sort((a, b) => b.exp - a.exp);
    } else if (sortBy === "cooldown") {
      result.sort((a, b) => a.cooldown.localeCompare(b.cooldown));
    }

    return result;
  }, [bosses, search, tierFilter, categoryFilter, sortBy]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "S": return "bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30";
      case "A": return "bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30";
      case "B": return "bg-gradient-to-br from-green-500/20 to-green-600/10 text-green-400 border-green-500/30";
      case "C": return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
      default: return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Médio": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Difícil": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Muito Difícil": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Extremo": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "World Boss": return "🌍";
      case "Raid Boss": return "⚔️";
      case "Quest Boss": return "📜";
      case "Mini Boss": return "👾";
      case "Daily Boss": return "📅";
      default: return "❓";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Bosses" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">☠️</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent mb-2">
                Bosses
              </h1>
              <p className="text-[var(--glass-text-secondary)] text-lg">
                Database completa de bosses do Rubinot com HP, EXP, cooldown, mecânicas e loot.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">{bosses.length}</div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Bosses Totais</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {bosses.filter(b => b.tier === "S").length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Tier S (Essencial)</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {bosses.filter(b => b.maxPlayers <= 5).length}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Solo/Small Group</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {bosses.reduce((acc, b) => acc + b.loot.length, 0)}
            </div>
            <div className="text-sm text-[var(--glass-text-muted)] mt-1">Itens de Loot</div>
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
                  placeholder="Buscar boss ou localização..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="glass-input w-full pl-11"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--glass-text-muted)]">🔍</span>
              </div>
            </div>

            {/* Tier Filter */}
            <div className="md:w-40">
              <select
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
                className="glass-input w-full cursor-pointer"
              >
                <option value="all">Todos Tiers</option>
                <option value="S">Tier S</option>
                <option value="A">Tier A</option>
                <option value="B">Tier B</option>
                <option value="C">Tier C</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="md:w-44">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="glass-input w-full cursor-pointer"
              >
                <option value="all">Todas Categorias</option>
                <option value="World Boss">World Boss</option>
                <option value="Raid Boss">Raid Boss</option>
                <option value="Quest Boss">Quest Boss</option>
                <option value="Mini Boss">Mini Boss</option>
                <option value="Daily Boss">Daily Boss</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
              {[
                { id: "hp", label: "HP", icon: "❤️" },
                { id: "exp", label: "EXP", icon: "⚡" },
                { id: "cooldown", label: "Cooldown", icon: "⏱️" },
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

        {/* Bosses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBosses.map((boss, index) => (
            <Link
              key={boss.slug}
              href={`/bosses/${boss.slug}`}
              className="group relative bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl border border-[var(--accent-primary)]/20 overflow-hidden hover:border-[var(--accent-primary)]/50 hover:shadow-2xl hover:shadow-[var(--accent-primary)]/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-2xl">
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-5 mt-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(boss.category)}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1">
                        {boss.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">{boss.location}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getTierColor(boss.tier)}`}>
                    {boss.tier}
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {/* HP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">❤️ HP</span>
                    <span className="text-sm font-bold text-red-400">{boss.hp.toLocaleString()}</span>
                  </div>

                  {/* EXP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">⚡ EXP</span>
                    <span className="text-sm font-bold text-[var(--accent-primary)]">{boss.exp.toLocaleString()}</span>
                  </div>

                  {/* Cooldown */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">⏱️ Cooldown</span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{boss.cooldown}</span>
                  </div>

                  {/* Players */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)] flex items-center gap-1">👥 Max Players</span>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{boss.maxPlayers}</span>
                  </div>

                  {/* Difficulty */}
                  <div className="pt-3 border-t border-[var(--accent-primary)]/10">
                    <div className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getDifficultyColor(boss.difficulty)} border`}>
                      {boss.difficulty}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredBosses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👻</div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Nenhum boss encontrado
            </h3>
            <p className="text-[var(--text-muted)]">
              Tente ajustar os filtros de busca ou categoria.
            </p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 text-center text-sm text-[var(--text-muted)]">
          <p>Mostrando <span className="font-bold text-[var(--text-primary)]">{filteredBosses.length}</span> de {bosses.length} bosses</p>
        </div>
      </div>
    </div>
  );
}
