"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { outfitsDatabase, outfitTypes, outfitRarities, outfitDifficulties } from "@/data/outfits";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Comum":
      return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
    case "Raro":
      return "bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30";
    case "Muito Raro":
      return "bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30";
    case "Exclusivo":
      return "bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30";
    default:
      return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Premium":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "Free":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Quest":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    case "Store":
      return "bg-pink-500/20 text-pink-400 border-pink-500/30";
    case "Event":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil":
      return "bg-green-500/20 text-green-400";
    case "Médio":
      return "bg-yellow-500/20 text-yellow-400";
    case "Difícil":
      return "bg-orange-500/20 text-orange-400";
    case "Muito Difícil":
      return "bg-red-500/20 text-red-400";
    default:
      return "bg-gray-500/20 text-gray-400";
  }
};

const getGenderIcon = (gender: string) => {
  switch (gender) {
    case "Male":
      return "♂";
    case "Female":
      return "♀";
    case "Both":
      return "⚧";
    default:
      return "⚧";
  }
};

const getBorderColor = (rarity: string) => {
  switch (rarity) {
    case "Comum":
      return "hover:border-gray-500/50";
    case "Raro":
      return "hover:border-blue-500/50";
    case "Muito Raro":
      return "hover:border-purple-500/50";
    case "Exclusivo":
      return "hover:border-amber-500/50";
    default:
      return "hover:border-gray-500/50";
  }
};

export default function OutfitsPage() {
  const [filterType, setFilterType] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterRarity, setFilterRarity] = useState("all");
  const [search, setSearch] = useState("");

  const allOutfits = Object.values(outfitsDatabase);

  const filteredOutfits = useMemo(() => {
    let result = [...allOutfits];

    // Filter by search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((o) =>
        o.name.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        o.source.toLowerCase().includes(q)
      );
    }

    // Filter by type
    if (filterType !== "all") {
      result = result.filter((o) => o.type === filterType);
    }

    // Filter by difficulty
    if (filterDifficulty !== "all") {
      result = result.filter((o) => o.difficulty === filterDifficulty);
    }

    // Filter by rarity
    if (filterRarity !== "all") {
      result = result.filter((o) => o.rarity === filterRarity);
    }

    return result;
  }, [allOutfits, filterType, filterDifficulty, filterRarity, search]);

  const clearFilters = () => {
    setFilterType("all");
    setFilterDifficulty("all");
    setFilterRarity("all");
    setSearch("");
  };

  const hasActiveFilters = filterType !== "all" || filterDifficulty !== "all" || filterRarity !== "all" || search !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Outfits" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">👤</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-pink-400 bg-clip-text text-transparent mb-2">
                Outfits
              </h1>
              <p className="text-[var(--text-muted)] text-lg">
                Complete sua coleção de outfits do Tibia/Rubinot.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border border-[var(--accent-primary)]/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-purple-400 bg-clip-text text-transparent">{allOutfits.length}</div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Outfits Disponíveis</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border-amber-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {allOutfits.filter(o => o.rarity === "Exclusivo").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Exclusivas</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border-green-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {allOutfits.filter(o => o.type === "Free").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Gratuitas</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border-purple-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {allOutfits.filter(o => o.rarity === "Muito Raro").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Muito Raras</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-xl p-4 mb-6 border border-[var(--accent-primary)]/20 sticky top-20 z-40 shadow-2xl">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar outfit por nome, descrição ou origem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all pl-11"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">🔍</span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Type Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  Tipo
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer"
                >
                  <option value="all">Todos</option>
                  {outfitTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  Dificuldade
                </label>
                <select
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                  className="px-4 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer"
                >
                  <option value="all">Todas</option>
                  {outfitDifficulties.map((diff) => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>

              {/* Rarity Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  Raridade
                </label>
                <select
                  value={filterRarity}
                  onChange={(e) => setFilterRarity(e.target.value)}
                  className="px-4 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer"
                >
                  <option value="all">Todas</option>
                  {outfitRarities.map((rarity) => (
                    <option key={rarity} value={rarity}>{rarity}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded-xl border border-[var(--accent-primary)]/20 hover:bg-[var(--accent-primary)]/10 hover:text-[var(--text-primary)] transition-all text-sm font-medium"
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Outfits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutfits.map((outfit) => (
            <div
              key={outfit.id}
              className={`group relative bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl border border-[var(--accent-primary)]/20 overflow-hidden ${getBorderColor(outfit.rarity)} hover:shadow-2xl hover:shadow-[var(--accent-primary)]/10 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {outfit.name}
                    </h3>
                    <span className="text-xl text-[var(--text-muted)]">
                      {getGenderIcon(outfit.gender)}
                    </span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getRarityColor(outfit.rarity)}`}>
                    {outfit.rarity}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getTypeColor(outfit.type)}`}>
                    {outfit.type}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getDifficultyColor(outfit.difficulty)}`}>
                    {outfit.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--accent-primary)]/10">
                    {outfit.addons} Addons
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                  {outfit.description}
                </p>

                {/* Source */}
                <div className="mb-4">
                  <div className="text-xs text-[var(--text-muted)] mb-1">Origem</div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">{outfit.source}</div>
                </div>

                {/* Requirements */}
                <div className="bg-[var(--bg-tertiary)] rounded-lg p-3">
                  <div className="text-xs text-[var(--text-muted)] mb-2 font-medium">Requisitos</div>
                  <ul className="space-y-1">
                    {outfit.requirements.map((req, idx) => (
                      <li key={idx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-0.5">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colors */}
                {outfit.colors.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[var(--accent-primary)]/10">
                    <div className="text-xs text-[var(--text-muted)] mb-2">Cores Disponíveis</div>
                    <div className="flex flex-wrap gap-1.5">
                      {outfit.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-md"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOutfits.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Nenhuma outfit encontrada
            </h3>
            <p className="text-[var(--text-muted)] mb-4">
              Tente ajustar os filtros de busca.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-xl hover:bg-[var(--accent-primary)]/80 transition-all font-medium"
              >
                Limpar Filtros
              </button>
            )}
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 text-center text-sm text-[var(--text-muted)]">
          <p>Mostrando <span className="font-bold text-[var(--text-primary)]">{filteredOutfits.length}</span> de {allOutfits.length} outfits</p>
        </div>
      </div>
    </div>
  );
}
