"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { creaturesDb } from "@/data/db/creatures";
import { Breadcrumb } from "@/components/ui/breadcrumb";

type CreatureRecord = (typeof creaturesDb)[number];

export default function CreaturesPage() {
  const creatures = creaturesDb;
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [bestiaryFilter, setBestiaryFilter] = useState<string>("all");

  const filteredCreatures = useMemo(() => {
    return creatures.filter((creature) => {
      const matchesSearch = creature.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "all" || creature.category === categoryFilter;
      const matchesBestiary = bestiaryFilter === "all" || creature.bestiaryDifficulty === bestiaryFilter;
      return matchesSearch && matchesCategory && matchesBestiary;
    });
  }, [creatures, search, categoryFilter, bestiaryFilter]);

  const getBestiaryColor = (difficulty: string | null) => {
    switch (difficulty) {
      case "Trivial": return "bg-gray-500/20 text-gray-400";
      case "Easy": return "bg-green-500/20 text-green-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400";
      case "Hard": return "bg-orange-500/20 text-orange-400";
      case "Challenging": return "bg-red-500/20 text-red-400";
      case "Archfoe": return "bg-purple-500/20 text-purple-400";
      case "Nemesis": return "bg-pink-500/20 text-pink-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Dragons": return "🐉";
      case "Demons": return "👹";
      case "The Undead": return "💀";
      case "Lycanthropes": return "🐺";
      case "Giants": return "🗿";
      case "Humanoids": return "👤";
      case "Elementals": return "🔥";
      case "Vermin": return "🕷️";
      default: return "❓";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Criaturas" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            🦴 Criaturas
          </h1>
          <p className="text-[var(--text-muted)]">
            Database própria de criaturas (sem dependência externa) com HP, EXP, fraquezas e loot.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20">
            <div className="text-2xl font-bold text-[var(--accent-primary)]">{creatures.length}</div>
            <div className="text-sm text-[var(--text-muted)]">Criaturas</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20">
            <div className="text-2xl font-bold text-purple-400">
              {new Set(creatures.map(c => c.category).filter(Boolean)).size}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Categorias</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20">
            <div className="text-2xl font-bold text-yellow-400">
              {creatures.reduce((acc, c) => acc + (c.loot?.length || 0), 0)}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Itens de Loot</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20">
            <div className="text-2xl font-bold text-green-400">
              {creatures.reduce((acc, c) => acc + (c.charmPoints || 0), 0)}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Charm Points Total</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[var(--bg-secondary)] rounded-lg p-4 mb-6 border border-[var(--accent-primary)]/20">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar criatura..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-lg border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-lg border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)]"
              >
                <option value="all">Todas Categorias</option>
                {Array.from(new Set(creatures.map((c) => c.category).filter((c): c is string => !!c))).sort().map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Bestiary Filter */}
            <div className="md:w-40">
              <select
                value={bestiaryFilter}
                onChange={(e) => setBestiaryFilter(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-lg border border-[var(--accent-primary)]/20 focus:outline-none focus:border-[var(--accent-primary)]"
              >
                <option value="all">Todos Níveis</option>
                <option value="Trivial">Trivial</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Challenging">Challenging</option>
                <option value="Archfoe">Archfoe</option>
                <option value="Nemesis">Nemesis</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-[var(--text-muted)]">
          Mostrando {filteredCreatures.length} de {creatures.length} criaturas
        </div>

        {/* Creatures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCreatures.map((creature) => (
            <Link
              key={creature.slug}
              href={`/creatures/${creature.slug}`}
              className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 transition-all hover:shadow-lg hover:shadow-[var(--accent-primary)]/5 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getCategoryIcon(creature.category || "")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {creature.name}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)]">{creature.category}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${getBestiaryColor(creature.bestiaryDifficulty)}`}>
                  {creature.bestiaryDifficulty}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                <div className="bg-[var(--bg-tertiary)] rounded p-2">
                  <div className="text-sm font-bold text-red-400">{creature.hp?.toLocaleString() ?? "-"}</div>
                  <div className="text-xs text-[var(--text-muted)]">HP</div>
                </div>
                <div className="bg-[var(--bg-tertiary)] rounded p-2">
                  <div className="text-sm font-bold text-blue-400">{creature.exp?.toLocaleString() ?? "-"}</div>
                  <div className="text-xs text-[var(--text-muted)]">EXP</div>
                </div>
                <div className="bg-[var(--bg-tertiary)] rounded p-2">
                  <div className="text-sm font-bold text-yellow-400">{creature.charmPoints ?? "-"}</div>
                  <div className="text-xs text-[var(--text-muted)]">Charm</div>
                </div>
              </div>

              {/* Weaknesses */}
              {Object.keys(creature.weaknesses || {}).length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {Object.entries(creature.weaknesses || {}).map(([element, percent]) => (
                    <span key={element} className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                      {element} +{percent}%
                    </span>
                  ))}
                </div>
              )}

              {/* Loot preview */}
              <div className="mt-2 text-xs text-[var(--text-muted)]">
                💰 {(creature.loot?.length || 0)} itens de loot
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredCreatures.length === 0 && (
          <div className="text-center py-12 bg-[var(--bg-secondary)] rounded-lg border border-[var(--accent-primary)]/20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              Nenhuma criatura encontrada
            </h3>
            <p className="text-[var(--text-muted)]">
              Tente ajustar os filtros ou buscar por outro termo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
