import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { creaturesBySlug, creaturesDb } from "@/data/db/creatures";
import MonsterImage from "@/app/components/MonsterImage";
import LootImage from "@/app/components/LootImage";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BackButton from "./BackButton";

export async function generateStaticParams() {
  return creaturesDb.map((creature) => ({
    slug: creature.slug,
  }));
}

export default async function CreatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creature = creaturesBySlug[slug];

  if (!creature) {
    notFound();
  }

  const getBestiaryColor = (bestiaryDifficulty: string) => {
    switch (bestiaryDifficulty) {
      case "Trivial": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      case "Easy": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Hard": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Challenging": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Archfoe": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Nemesis": return "bg-pink-500/20 text-pink-400 border-pink-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getLootRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "text-gray-400";
      case "Uncommon": return "text-green-400";
      case "Semi-Rare": return "text-blue-400";
      case "Rare": return "text-purple-400";
      case "Very Rare": return "text-orange-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Criaturas", href: "/creatures" },
          { label: creature.name }
        ]} />

        {/* Header */}
        <div className="glass-card p-6 mb-6 mt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-[var(--glass-text-primary)]">{creature.name}</h1>
                <span className={`glass-badge ${getBestiaryColor(creature.bestiaryDifficulty)}`}>
                  {creature.bestiaryDifficulty}
                </span>
              </div>
              <p className="text-[var(--glass-text-secondary)]">
                {creature.category || "-"}{creature.occurrence ? ` • ${creature.occurrence}` : ""}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{creature.charmPoints ?? "-"}</div>
                <div className="text-xs text-[var(--glass-text-muted)]">Charm Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{creature.bestiaryKills?.toLocaleString() ?? "-"}</div>
                <div className="text-xs text-[var(--glass-text-muted)]">Kills (Base)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-red-400">{creature.hp?.toLocaleString() ?? "-"}</div>
            <div className="text-sm text-[var(--glass-text-muted)]">HP</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{creature.exp?.toLocaleString() ?? "-"}</div>
            <div className="text-sm text-[var(--glass-text-muted)]">EXP</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">{creature.armor ?? "-"}</div>
            <div className="text-sm text-[var(--glass-text-muted)]">Armor</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{creature.speed ?? "-"}</div>
            <div className="text-sm text-[var(--glass-text-muted)]">Speed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Sprite - Left Column */}
          <div className="glass-card p-6 flex items-center justify-center lg:col-span-1 min-h-[200px]">
            <MonsterImage
              src={creature.imageUrl || "/logo.svg"}
              alt={creature.name}
              className="max-w-[128px] max-h-[128px] object-contain scale-125"
            />
          </div>

          {/* Resistances & Weaknesses - Right Column (2 cols wide) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Weaknesses */}
            <div className="glass-card p-4 border-green-500/20">
              <h2 className="text-lg font-semibold text-green-400 mb-3">✅ Fraquezas</h2>
              {Object.keys(creature.weaknesses).length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(creature.weaknesses).map(([element, percent]) => (
                    <span key={element} className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm border border-green-500/30">
                      {element} +{percent}%
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--glass-text-muted)]">Nenhuma fraqueza conhecida</p>
              )}
            </div>

            {/* Resistances */}
            <div className="glass-card p-4 border-red-500/20">
              <h2 className="text-lg font-semibold text-red-400 mb-3">🛡️ Resistências</h2>
              {Object.keys(creature.resistances).length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(creature.resistances).map(([element, percent]) => (
                    <span key={element} className="px-3 py-1 rounded bg-red-500/20 text-red-400 text-sm border border-red-500/30">
                      {element} -{percent}%
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--glass-text-muted)]">Nenhuma resistência</p>
              )}
            </div>

            {/* Immunities (Full Width if present) */}
            {creature.immunities.length > 0 && (
              <div className="glass-card p-4 border-purple-500/20 md:col-span-2">
                <h2 className="text-lg font-semibold text-purple-400 mb-3">🚫 Imunidades</h2>
                <div className="flex flex-wrap gap-2">
                  {creature.immunities.map((immunity) => (
                    <span key={immunity} className="px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">
                      {immunity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loot Table */}
        <div className="glass-card p-6 mb-6 border-yellow-500/20">
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">💰 Loot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--glass-border)]">
                  <th className="text-center py-3 px-4 w-16 text-[var(--glass-text-secondary)] font-medium">Img</th>
                  <th className="text-left py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Item</th>
                  <th className="text-center py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Chance</th>
                  <th className="text-center py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Qtd</th>
                  <th className="text-center py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Raridade</th>
                </tr>
              </thead>
              <tbody>
                {(creature.loot || []).map((item, index) => (
                  <tr key={index} className="border-b border-[var(--glass-border)] last:border-b-0 hover:bg-[var(--glass-bg-hover)] transition-colors">
                    <td className="py-3 px-4 flex justify-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-[var(--glass-bg-hover)] rounded border border-[var(--glass-border)] overflow-hidden">
                        <LootImage 
                          src={item.imageUrl || `/items/${item.name.replace(/ /g, "_")}.gif`} 
                          alt={item.name} 
                          className="max-w-[32px] max-h-[32px] object-contain" 
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--glass-text-primary)] align-middle font-medium">{item.name}</td>
                    <td className="py-3 px-4 text-center text-[var(--glass-text-muted)] align-middle">{item.chance || "-"}</td>
                    <td className="py-3 px-4 text-center text-[var(--glass-text-muted)] align-middle">{item.amount || "-"}</td>
                    <td className={`py-3 px-4 text-center font-medium align-middle ${getLootRarityColor(item.rarity || "")}`}>
                      {item.rarity || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Suspense fallback={<div className="text-xs text-[var(--glass-text-muted)]">Carregando…</div>}>
            <BackButton />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
