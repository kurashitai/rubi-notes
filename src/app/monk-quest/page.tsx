"use client";

import { useState } from "react";
import { monkQuestShrines, monkQuestInfo } from "@/data/monk-quest";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function MonkQuestPage() {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "The Way of the Monk Quest" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              The Way of the Monk Quest
            </span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl">
            {monkQuestInfo.description}
          </p>
        </div>

        {/* Final Reward Card */}
        <div className="mb-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
              <span className="text-2xl">🎁</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Recompensa Final
              </h2>
              <p className="text-2xl font-bold text-amber-400">
                10 Pontos de Promoção no Wheel of Destiny
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                Entregue a pilgrimage ao NPC Enpa-Deia Pema em Blue Valley após visitar todos os santuários.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-[var(--accent-primary)]/20">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              ⚠️ Requisitos
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              {monkQuestInfo.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              📝 Notas Importantes
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              {monkQuestInfo.notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shrines Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            🛕 Os 9 Santuários (Shrines)
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            Visite os santuários na ordem correta, do nível mais baixo para o mais alto.
          </p>

          <div className="space-y-4">
            {monkQuestShrines.map((shrine, idx) => (
              <div
                key={shrine.name}
                className={`bg-[var(--bg-secondary)] rounded-xl p-5 border-2 transition-all ${
                  shrine.level <= 150 ? "border-amber-500/20 hover:border-amber-500/40" : "border-orange-500/20 hover:border-orange-500/40"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    {/* Level Badge */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-lg text-xl font-bold ${
                      shrine.level <= 150 ? "bg-amber-500/20 text-amber-400" : "bg-orange-500/20 text-orange-400"
                    }`}>
                      {shrine.level}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {idx + 1}. {shrine.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        📍 {shrine.location}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Details */}
                  <button
                    onClick={() => setShowDetails(showDetails === idx ? null : idx)}
                    className="text-sm px-3 py-1.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors"
                  >
                    {showDetails === idx ? "Ocultar" : "Ver Detalhes"}
                  </button>
                </div>

                {/* Expandable Details */}
                {showDetails === idx && (
                  <div className="mt-4 pt-4 border-t border-[var(--accent-primary)]/10 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-[var(--bg-tertiary)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-[var(--accent-primary)] mb-2">
                          🎁 Recompensa Monk
                        </h4>
                        <p className="text-sm text-[var(--text-primary)]">
                          {shrine.monkReward}
                        </p>
                      </div>
                      <div className="bg-[var(--bg-tertiary)] rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-purple-400 mb-2">
                          ⭐ XP
                        </h4>
                        <p className="text-sm text-[var(--text-primary)]">
                          {shrine.xp}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-blue-400 mb-2">
                        📦 Outras Vocações
                      </h4>
                      <p className="text-sm text-[var(--text-primary)]">
                        {shrine.otherReward}
                      </p>
                    </div>

                    <div className="bg-[var(--bg-tertiary)] rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-green-400 mb-2">
                        💡 Guidance
                      </h4>
                      <p className="text-sm text-[var(--text-primary)]">
                        {shrine.guidance}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Monk Exclusive Items */}
        <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            🔥 Itens Exclusivos de Monk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monkQuestShrines.filter(s => s.monkReward && !s.monkReward.includes("spell") && !s.monkReward.includes("spell")).map((item) => (
              <div key={item.name} className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-amber-500/20">
                <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                  {item.monkReward}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {item.xp} • Nível {item.level}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-[var(--text-primary)]">
              <strong>Bônus Completo:</strong> +25% base autoattack (+50% quando Serene)
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-[var(--bg-secondary)] rounded-xl p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            💡 Dicas
          </h2>
          <ul className="space-y-3 text-[var(--text-muted)]">
            {monkQuestInfo.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p>{tip}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Start NPC Info */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-3xl">
              🧙
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Como Começar
              </h3>
              <p className="text-[var(--text-muted)] mt-1">
                Encontre <strong>Enpa-Deia Pema</strong> em <strong>Blue Valley</strong>
                (acesse via Adventurer's Guild, segundo andar, ao lado do Reward Shrine).
                Use um Guarded Crystal Sphere para começar sua peregrinação.
              </p>
              <p className="text-xs text-purple-400 mt-2">
                ⚠️ Se você não for Monk, comece diretamente da seção Blue Valley (pule Dawnport).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
