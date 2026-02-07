import { notFound } from "next/navigation";
import Link from "next/link";
import { getBossbySlug, getAllBosses } from "@/data/bosses";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export async function generateStaticParams() {
  const bosses = getAllBosses();
  return bosses.map((boss) => ({
    slug: boss.slug,
  }));
}

export default async function BossDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const boss = getBossbySlug(slug);

  if (!boss) {
    notFound();
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "S": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "A": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "B": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "C": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
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

  const getLootRarityColor = (chance: string) => {
    switch (chance) {
      case "Comum": return "text-gray-400";
      case "Raro": return "text-blue-400";
      case "Muito Raro": return "text-amber-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Bosses", href: "/bosses" },
          { label: boss.name }
        ]} />

        {/* Header */}
        <div className="glass-card p-6 mb-6 mt-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-[var(--glass-text-primary)]">{boss.name}</h1>
                <span className={`glass-badge ${getTierColor(boss.tier)}`}>
                  Tier {boss.tier}
                </span>
              </div>
              <p className="text-[var(--glass-text-secondary)]">
                {boss.category} • Level {boss.recommendedLevel}+
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{boss.cooldown}</div>
                <div className="text-xs text-[var(--glass-text-muted)]">Cooldown</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {boss.maxPlayers === 1 ? "Solo" : `1-${boss.maxPlayers}`}
                </div>
                <div className="text-xs text-[var(--glass-text-muted)]">Players</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-red-400">{(boss.hp / 1000).toFixed(0)}k</div>
            <div className="text-sm text-[var(--glass-text-muted)]">HP</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{(boss.exp / 1000).toFixed(0)}k</div>
            <div className="text-sm text-[var(--glass-text-muted)]">EXP</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{boss.difficulty}</div>
            <div className="text-sm text-[var(--glass-text-muted)]">Dificuldade</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">{boss.cooldownHours}h</div>
            <div className="text-sm text-[var(--glass-text-muted)]">Horas CD</div>
          </div>
        </div>

        {/* Location & Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-[var(--glass-text-primary)] mb-3">📍 Localização</h2>
            <p className="text-[var(--glass-text-secondary)] mb-2">{boss.location}</p>
            {boss.coordinates && (
              <p className="text-sm text-[var(--glass-text-muted)] font-mono bg-[var(--glass-bg-hover)] p-2 rounded">
                Coordenadas: {boss.coordinates}
              </p>
            )}
          </div>

          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-[var(--glass-text-primary)] mb-3">📜 Acesso</h2>
            {boss.accessQuestSlug ? (
              <Link href={`/quests/${boss.accessQuestSlug}`} className="text-purple-400 hover:underline">
                {boss.accessQuest}
              </Link>
            ) : (
              <p className="text-[var(--glass-text-secondary)]">{boss.accessQuest || "Nenhum"}</p>
            )}
          </div>
        </div>

        {/* Weaknesses & Immunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Weaknesses */}
          <div className="glass-card p-6 border-green-500/20">
            <h2 className="text-lg font-semibold text-green-400 mb-3">✅ Fraquezas</h2>
            {Object.keys(boss.weaknesses).length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {Object.entries(boss.weaknesses).map(([element, percent]) => (
                  <span key={element} className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-sm border border-green-500/30">
                    {element} +{percent}%
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[var(--glass-text-muted)]">Nenhuma fraqueza conhecida</p>
            )}
          </div>

          {/* Immunities */}
          <div className="glass-card p-6 border-purple-500/20">
            <h2 className="text-lg font-semibold text-purple-400 mb-3">🚫 Imunidades</h2>
            {boss.immunities.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {boss.immunities.map((immunity) => (
                  <span key={immunity} className="px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">
                    {immunity}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[var(--glass-text-muted)]">Nenhuma imunidade</p>
            )}
          </div>
        </div>

        {/* Mechanics */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-lg font-semibold text-[var(--glass-text-primary)] mb-3">⚙️ Mecânicas</h2>
          <ol className="space-y-2">
            {boss.mechanics.map((mechanic, index) => (
              <li key={index} className="flex items-start gap-2 text-[var(--glass-text-secondary)]">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--glass-rubi-primary)] text-white text-sm font-bold shrink-0`}>
                  {index + 1}
                </span>
                {mechanic}
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        {boss.tips.length > 0 && (
          <div className="glass-card p-6 mb-6 border-blue-500/20">
            <h2 className="text-lg font-semibold text-blue-400 mb-3">💡 Dicas</h2>
            <ul className="space-y-2">
              {boss.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-[var(--glass-text-secondary)]">
                  <span className="text-blue-400">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Loot Table */}
        <div className="glass-card p-6 mb-6 border-yellow-500/20">
          <h2 className="text-lg font-semibold text-yellow-400 mb-4">💰 Loot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--glass-border)]">
                  <th className="text-left py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Item</th>
                  <th className="text-center py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Chance</th>
                  <th className="text-center py-3 px-4 text-[var(--glass-text-secondary)] font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {boss.loot.map((item, index) => (
                  <tr key={index} className="border-b border-[var(--glass-border)] last:border-b-0 hover:bg-[var(--glass-bg-hover)] transition-colors">
                    <td className="py-3 px-4 text-[var(--glass-text-primary)]">{item.item}</td>
                    <td className={`py-3 px-4 text-center font-medium ${getLootRarityColor(item.chance)}`}>
                      {item.chance}
                    </td>
                    <td className="py-3 px-4 text-center text-[var(--glass-text-muted)]">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rewards */}
        {boss.rewards && boss.rewards.length > 0 && (
          <div className="glass-card p-6 mb-6 border-purple-500/20">
            <h2 className="text-lg font-semibold text-purple-400 mb-3">🏆 Recompensas Adicionais</h2>
            <div className="flex flex-wrap gap-2">
              {boss.rewards.map((reward, index) => (
                <span key={index} className="glass-badge bg-purple-500/20 text-purple-400 border-purple-500/30">
                  {reward}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video Guide */}
        {boss.videoGuide && (
          <div className="glass-card p-6 mb-6">
            <h2 className="text-lg font-semibold text-[var(--glass-text-primary)] mb-3">🎬 Vídeo Guia</h2>
            <Link
              href={boss.videoGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Assistir ao guia de vídeo
            </Link>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-center">
          <Link
            href="/bosses"
            className="glass-btn-primary px-8 py-3 text-white rounded-xl hover:scale-105 transition-transform"
          >
            ← Voltar para Bosses
          </Link>
        </div>
      </div>
    </div>
  );
}
