"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  mountsDatabase,
  Mount,
  mountTypes,
  mountRarities,
  mountDifficulties,
  getAllMounts,
} from "@/data/mounts";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useFavorites, FavoriteButton, FavoritesFilter } from "@/hooks/useFavorites";

export default function MountsPage() {
  const [filterType, setFilterType] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterRarity, setFilterRarity] = useState("all");
  const [filterSpeed, setFilterSpeed] = useState("all");
  const [search, setSearch] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  const allMounts = getAllMounts();

  const filteredMounts = useMemo(() => {
    let result = [...allMounts];

    // Filter by search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((m) =>
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.source.toLowerCase().includes(q)
      );
    }

    // Filter by type
    if (filterType !== "all") {
      result = result.filter((m) => m.type === filterType);
    }

    // Filter by difficulty
    if (filterDifficulty !== "all") {
      result = result.filter((m) => m.difficulty === filterDifficulty);
    }

    // Filter by rarity
    if (filterRarity !== "all") {
      result = result.filter((m) => m.rarity === filterRarity);
    }

    // Filter by speed
    if (filterSpeed !== "all") {
      if (filterSpeed === "high") {
        result = result.filter((m) => m.speed >= 20);
      } else if (filterSpeed === "medium") {
        result = result.filter((m) => m.speed >= 10 && m.speed < 20);
      } else if (filterSpeed === "low") {
        result = result.filter((m) => m.speed < 10);
      }
    }

    // Filter by favorites
    if (showOnlyFavorites) {
      result = result.filter((m) => isFavorite(m.id, "mount"));
    }

    return result;
  }, [
    allMounts,
    filterType,
    filterDifficulty,
    filterRarity,
    filterSpeed,
    search,
    showOnlyFavorites,
    isFavorite,
  ]);

  const getRarityColor = (rarity: Mount["rarity"]) => {
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

  const getRarityBadgeColor = (rarity: Mount["rarity"]) => {
    switch (rarity) {
      case "Comum":
        return "bg-gray-500/20 border-gray-500/30 text-gray-400";
      case "Raro":
        return "bg-blue-500/20 border-blue-500/30 text-blue-400";
      case "Muito Raro":
        return "bg-purple-500/20 border-purple-500/30 text-purple-400";
      case "Exclusivo":
        return "bg-amber-500/20 border-amber-500/30 text-amber-400";
      default:
        return "bg-gray-500/20 border-gray-500/30 text-gray-400";
    }
  };

  const getTypeColor = (type: Mount["type"]) => {
    switch (type) {
      case "Premium":
        return "bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30";
      case "Free":
        return "bg-gradient-to-br from-green-500/20 to-green-600/10 text-green-400 border-green-500/30";
      case "Quest":
        return "bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30";
      case "Store":
        return "bg-gradient-to-br from-pink-500/20 to-pink-600/10 text-pink-400 border-pink-500/30";
      case "Event":
        return "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/30";
      case "Achievement":
        return "bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-400 border-orange-500/30";
      default:
        return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/30";
    }
  };

  const getDifficultyColor = (difficulty: Mount["difficulty"]) => {
    switch (difficulty) {
      case "Fácil":
        return "text-green-400";
      case "Médio":
        return "text-yellow-400";
      case "Difícil":
        return "text-orange-400";
      case "Muito Difícil":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getSpeedColor = (speed: number) => {
    if (speed >= 20) return "bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900";
    if (speed >= 15) return "bg-gradient-to-r from-purple-400 to-pink-400 text-white";
    return "bg-gradient-to-r from-blue-400 to-cyan-400 text-white";
  };

  const getBorderGlow = (rarity: Mount["rarity"]) => {
    switch (rarity) {
      case "Exclusivo":
        return "border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/20";
      case "Muito Raro":
        return "border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20";
      case "Raro":
        return "border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20";
      default:
        return "border-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 hover:shadow-[var(--accent-primary)]/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Mounts" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">🐴</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-amber-400 bg-clip-text text-transparent mb-2">
                Mounts
              </h1>
              <p className="text-[var(--text-muted)] text-lg">
                Database completa de mounts para o Tibia/Rubinot.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border border-[var(--accent-primary)]/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-purple-400 bg-clip-text text-transparent">{allMounts.length}</div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Mounts Totais</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border border-amber-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {allMounts.filter(m => m.rarity === "Exclusivo").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Exclusivas</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border border-green-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {allMounts.filter(m => m.type === "Free").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Gratuitas</div>
          </div>
          <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl p-5 border border-purple-500/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {allMounts.filter(m => m.difficulty === "Fácil").length}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">Fáceis de Obter</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md rounded-xl p-4 mb-6 border border-[var(--accent-primary)]/20 sticky top-20 z-40 shadow-2xl">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar mount por nome, descrição ou origem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all pl-11"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">🔍</span>
            </div>

            {/* Filter Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-3 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer text-sm"
              >
                <option value="all">Todos Tipos</option>
                {mountTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="w-full px-3 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer text-sm"
              >
                <option value="all">Todas Dificuldades</option>
                {mountDifficulties.map((diff) => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>

              {/* Rarity Filter */}
              <select
                value={filterRarity}
                onChange={(e) => setFilterRarity(e.target.value)}
                className="w-full px-3 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer text-sm"
              >
                <option value="all">Todas Raridades</option>
                {mountRarities.map((rarity) => (
                  <option key={rarity} value={rarity}>{rarity}</option>
                ))}
              </select>

              {/* Speed Filter */}
              <select
                value={filterSpeed}
                onChange={(e) => setFilterSpeed(e.target.value)}
                className="w-full px-3 py-2.5 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all cursor-pointer text-sm"
              >
                <option value="all">Todas Velocidades</option>
                <option value="high">High (20+)</option>
                <option value="medium">Medium (10-19)</option>
                <option value="low">Low (&lt;10)</option>
              </select>
            </div>

            {/* Favorites Filter */}
            <div className="pt-3 border-t border-[var(--accent-primary)]/10">
              <FavoritesFilter
                type="mount"
                showOnlyFavorites={showOnlyFavorites}
                onToggle={() => setShowOnlyFavorites(!showOnlyFavorites)}
              />
            </div>
          </div>
        </div>

        {/* Mounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMounts.map((mount) => (
            <div
              key={mount.id}
              className={`group relative bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-xl border overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl ${getBorderGlow(mount.rarity)}`}
            >
              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(mount.id, "mount", mount.name)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-[var(--bg-primary)]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 transition-all hover:scale-110"
              >
                <FavoriteButton id={mount.id} type="mount" name={mount.name} />
              </button>

              {/* Speed Badge - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <div className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${getSpeedColor(mount.speed)}`}>
                  ⚡ +{mount.speed}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 mt-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1">
                      {mount.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-2">{mount.description}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${getTypeColor(mount.type)}`}>
                    {mount.type}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${getRarityBadgeColor(mount.rarity)}`}>
                    {mount.rarity}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(mount.difficulty)}`}>
                    {mount.difficulty}
                  </span>
                </div>

                {/* Taming Info */}
                {mount.creatureToTame && (
                  <div className="bg-[var(--bg-primary)]/50 rounded-lg p-3 mb-4 border border-[var(--accent-primary)]/10">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-lg">🦎</span>
                      <div>
                        <div className="text-xs text-[var(--text-muted)]">Criatura para domar</div>
                        <div className="font-semibold text-[var(--text-primary)]">{mount.creatureToTame}</div>
                      </div>
                    </div>
                    {mount.tamingItem && (
                      <div className="flex items-center gap-2 text-sm mt-2 pt-2 border-t border-[var(--accent-primary)]/10">
                        <span className="text-lg">🎁</span>
                        <div>
                          <div className="text-xs text-[var(--text-muted)]">Item de domação</div>
                          <div className="font-semibold text-[var(--text-primary)]">{mount.tamingItem}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Requirements */}
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Requisitos</div>
                  <div className="flex flex-wrap gap-1.5">
                    {mount.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[var(--bg-tertiary)] rounded-md text-xs text-[var(--text-secondary)] border border-[var(--accent-primary)]/10"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Source/Price */}
                <div className="pt-3 border-t border-[var(--accent-primary)]/10">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-[var(--text-muted)]">Origem: </span>
                      <span className="text-[var(--text-primary)] font-medium">{mount.source}</span>
                    </div>
                    {mount.price && (
                      <div className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg text-xs font-semibold text-amber-400 border border-amber-500/30">
                        {mount.price}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${mount.rarity === "Exclusivo" ? "bg-gradient-to-br from-amber-500/5 to-transparent" : mount.rarity === "Muito Raro" ? "bg-gradient-to-br from-purple-500/5 to-transparent" : "bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent"}`} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMounts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🐴</div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Nenhuma mount encontrada
            </h3>
            <p className="text-[var(--text-muted)]">
              Tente ajustar os filtros de busca.
            </p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 text-center text-sm text-[var(--text-muted)]">
          <p>Mostrando <span className="font-bold text-[var(--text-primary)]">{filteredMounts.length}</span> de {allMounts.length} mounts</p>
        </div>
      </div>
    </div>
  );
}
