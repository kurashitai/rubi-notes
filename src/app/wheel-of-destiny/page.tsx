"use client";

import { useState } from "react";
import { getAllPresets, getPresetsByVocation, WheelPreset, vocationIcons, knightPresetsData, sorcererPresetsData, druidPresetsData, paladinPresetsData } from "@/data/wheel-of-destiny";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function WheelOfDestinyPage() {
  const [selectedVocation, setSelectedVocation] = useState<"knight" | "sorcerer" | "druid" | "paladin">("knight");
  const [selectedPreset, setSelectedPreset] = useState<WheelPreset | null>(null);
  const selectedTab = "all"; // Mostrar todos por padrão

  const allPresets = getAllPresets();
  const knightPresets = knightPresetsData;
  const sorcererPresets = sorcererPresetsData;
  const druidPresets = druidPresetsData;
  const paladinPresets = paladinPresetsData;
  const vocationPresets = getPresetsByVocation(selectedVocation);

  const getVocationColor = (vocation: string) => {
    switch (vocation) {
      case "knight": return "text-amber-400 border-amber-500/30";
      case "sorcerer": return "text-purple-400 border-purple-500/30";
      case "druid": return "text-green-400 border-green-500/30";
      case "paladin": return "text-blue-400 border-blue-500/30";
      default: return "text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Wheel of Destiny" }
        ]} />

        {/* Header */}
        <div className="mb-8 mt-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            <span className="bg-gradient-to-r from-[var(--accent-primary)] via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Wheel of Destiny
            </span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Presets otimizados para TODAS as classes: Knight, Sorcerer, Druid e Paladin.
          </p>
          <p className="text-xs text-[var(--accent-primary)] mt-2">
            Baseado em TibiaWiki BR e TibiaWiki Fandom
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--accent-primary)]/20">
            <div className="text-2xl font-bold text-[var(--accent-primary)]">{allPresets.length}</div>
            <div className="text-sm text-[var(--text-muted)]">Total Presets</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-amber-500/20">
            <div className="text-2xl font-bold text-amber-400">
              {Object.values(knightPresets || sorcererPresets || druidPresets || paladinPresets).filter(p => p.vocation === "knight").length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Knight Presets</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-purple-500/20">
            <div className="text-2xl font-bold text-purple-400">
              {Object.values(sorcererPresets || druidPresets || paladinPresets).filter(p => p.vocation === "sorcerer").length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Sorcerer Presets</div>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-green-500/20">
            <div className="text-2xl font-bold text-green-400">
              {Object.values(druidPresets || paladinPresets).filter(p => p.vocation === "druid").length}
            </div>
            <div className="text-sm text-[var(--text-muted)]">Druid Presets</div>
          </div>
        </div>

        {/* Vocation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[
            { id: "knight", label: "⚔️ Knight", description: "Club Weapons" },
            { id: "sorcerer", label: "🔮 Sorcerer", description: "Energy Magic" },
            { id: "druid", label: "🍃 Druid", description: "Nature Magic" },
            { id: "paladin", label: "✝️ Paladin", description: "Melee + Magic" }
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVocation(v.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedVocation === v.id
                    ? "bg-[var(--accent-primary)] text-white shadow-lg"
                    : "bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--accent-primary)]/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{vocationIcons[v.id as keyof typeof vocationIcons]}</span>
                <div>
                  <div className="text-sm font-semibold">{v.label}</div>
                  <div className="text-xs text-[var(--text-muted)]">{v.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Presets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vocationPresets.map((preset) => (
            <div
              key={preset.slug}
              onClick={() => setSelectedPreset(preset)}
              className={`bg-[var(--bg-secondary)] rounded-xl p-5 border-2 cursor-pointer transition-all hover:shadow-xl ${
                selectedPreset?.slug === preset.slug
                    ? "border-[var(--accent-primary)] shadow-[var(--accent-primary)]/20"
                    : "border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/30"
              }`}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {preset.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        {preset.recommendedLevel}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getVocationColor(preset.vocation)}`}>
                        {preset.vocation.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${getVocationColor(preset.vocation)}`}>
                    {preset.playstyle.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {preset.description}
                </p>
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Pontos</span>
                  <span className="font-semibold text-purple-400">{preset.totalPoints}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Domain</span>
                  <span className="font-semibold text-blue-400">{preset.branches.domain.length} slices</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-muted)]">Mastery</span>
                  <span className="font-semibold text-green-400">{preset.branches.mastery.length} slices</span>
                </div>
              </div>

              {/* Key Perks */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  🔑 Perks Principais
                </h4>
                <div className="flex flex-wrap gap-1">
                  {preset.keyPerks.slice(0, 4).map((perk) => (
                    <span
                      key={perk}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-primary)]"
                    >
                      {perk}
                    </span>
                  ))}
                  {preset.keyPerks.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                      +{preset.keyPerks.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                {preset.statsBonus.hp > 0 && (
                  <div className="bg-red-500/10 rounded p-2">
                    <div className="text-sm font-bold text-red-400">+{preset.statsBonus.hp}</div>
                    <div className="text-xs text-[var(--text-muted)]">HP</div>
                  </div>
                )}
                {preset.statsBonus.mana > 0 && (
                  <div className="bg-blue-500/10 rounded p-2">
                    <div className="text-sm font-bold text-blue-400">+{preset.statsBonus.mana}</div>
                    <div className="text-xs text-[var(--text-muted)]">Mana</div>
                  </div>
                )}
                {preset.statsBonus.magicLevel > 0 && (
                  <div className="bg-purple-500/10 rounded p-2">
                    <div className="text-sm font-bold text-purple-400">+{preset.statsBonus.magicLevel}</div>
                    <div className="text-xs text-[var(--text-muted)]">ML</div>
                  </div>
                )}
                {preset.statsBonus.distance > 0 && (
                  <div className="bg-green-500/10 rounded p-2">
                    <div className="text-sm font-bold text-green-400">+{preset.statsBonus.distance}</div>
                    <div className="text-xs text-[var(--text-muted)]">Dist</div>
                  </div>
                )}
                {preset.statsBonus.shielding > 0 && (
                  <div className="bg-yellow-500/10 rounded p-2">
                    <div className="text-sm font-bold text-yellow-400">+{preset.statsBonus.shielding}</div>
                    <div className="text-xs text-[var(--text-muted)]">Shield</div>
                  </div>
                )}
              </div>

              {/* Spells Preview */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  ✨ Spells ({preset.spells.length})
                </h4>
                <div className="flex flex-wrap gap-1">
                  {preset.spells.slice(0, 3).map((spell) => (
                    <span
                      key={spell}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                    >
                      {spell}
                    </span>
                  ))}
                  {preset.spells.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                      +{preset.spells.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedPreset(preset)}
                className="w-full py-2 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-primary)]/80 transition-colors text-sm font-medium"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* Selected Preset Details Modal */}
        {selectedPreset && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPreset(null)}
          >
            <div
              className="bg-[var(--bg-secondary)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[var(--accent-primary)]/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-[var(--bg-tertiary)] flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{vocationIcons[selectedPreset.vocation]}</span>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                      {selectedPreset.name}
                    </h2>
                  </div>
                  <p className="text-[var(--text-muted)]">{selectedPreset.vocation.toUpperCase()}</p>
                </div>
                <button
                  onClick={() => setSelectedPreset(null)}
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Branches */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    🌳 Branches do Wheel
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Domain */}
                    <div className="bg-[var(--bg-tertiary)] rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 text-center">
                        Domain (Slices 1-3)
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mb-2 text-center">
                        HP + HP Regen
                      </p>
                      <div className="space-y-1">
                        {selectedPreset.branches.domain.map((slice) => (
                          <div
                            key={slice}
                            className="flex items-center gap-2 text-sm p-2 rounded bg-[var(--bg-primary)]"
                          >
                            <span className="text-red-400">Slice {slice}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mastery */}
                    <div className="bg-[var(--bg-tertiary)] rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 text-center">
                        Mastery (Slices 4-6)
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mb-2 text-center">
                        {selectedPreset.vocation === "knight" ? "Offensive (Distance/Melee)" :
                         selectedPreset.vocation === "paladin" ? "Offensive (Distance/Divine)" :
                         "Magic Mastery"}
                      </p>
                      <div className="space-y-1">
                        {selectedPreset.branches.mastery.map((slice) => (
                          <div
                            key={slice}
                            className="flex items-center gap-2 text-sm p-2 rounded bg-[var(--bg-primary)]"
                          >
                            <span className="text-blue-400">Slice {slice}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bonus Info */}
                    <div className="bg-[var(--bg-tertiary)] rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 text-center">
                        Informações
                      </h4>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">Total de pontos</span>
                          <span className="font-semibold text-[var(--accent-primary)]">
                            {selectedPreset.totalPoints} / 575
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">Branches usadas</span>
                          <span className="font-semibold text-[var(--text-primary)]">
                            {selectedPreset.branches.domain.length} (Domain) + {selectedPreset.branches.mastery.length} (Mastery)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* All Perks */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    🔑 Todos os Perks
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedPreset.keyPerks.map((perk, index) => (
                      <div
                        key={perk}
                        className="bg-[var(--bg-tertiary)] rounded-lg p-3 border border-[var(--accent-primary)]/10"
                      >
                        <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                          {perk}
                        </div>
                        <div className="text-xs text-[var(--accent-primary)]">
                          Perk {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Spells */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    ✨ Todos os Spells
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedPreset.spells.map((spell, index) => (
                      <div
                        key={spell}
                        className="bg-[var(--bg-tertiary)] rounded-lg p-3 border border-purple-500/10"
                      >
                        <div className="text-sm font-semibold text-purple-400 mb-1">
                          {spell}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          Spell {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Bonus Breakdown */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    📊 Bônus de Stats
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedPreset.statsBonus.hp > 0 && (
                      <div className="bg-red-500/10 rounded-xl p-4 text-center border border-red-500/20">
                        <div className="text-3xl font-bold text-red-400">
                          +{selectedPreset.statsBonus.hp}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">HP</div>
                      </div>
                    )}
                    {selectedPreset.statsBonus.mana > 0 && (
                      <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/20">
                        <div className="text-3xl font-bold text-blue-400">
                          +{selectedPreset.statsBonus.mana}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Mana</div>
                      </div>
                    )}
                    {selectedPreset.statsBonus.magicLevel > 0 && (
                      <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/20">
                        <div className="text-3xl font-bold text-purple-400">
                          +{selectedPreset.statsBonus.magicLevel}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">ML</div>
                      </div>
                    )}
                    {selectedPreset.statsBonus.distance > 0 && (
                      <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/20">
                        <div className="text-3xl font-bold text-green-400">
                          +{selectedPreset.statsBonus.distance}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Distance</div>
                      </div>
                    )}
                    {selectedPreset.statsBonus.shielding > 0 && (
                      <div className="bg-yellow-500/10 rounded-xl p-4 text-center border border-yellow-500/20">
                        <div className="text-3xl font-bold text-yellow-400">
                          +{selectedPreset.statsBonus.shielding}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Shielding</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="p-6 border-t border-[var(--bg-tertiary)]">
                <button
                  onClick={() => setSelectedPreset(null)}
                  className="w-full py-3 bg-[var(--accent-primary)] text-white rounded-xl hover:bg-[var(--accent-primary)]/80 transition-colors text-base font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-[var(--bg-secondary)] rounded-xl p-6 border border-[var(--accent-primary)]/20">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            💡 Dicas Importantes
          </h3>
          <div className="space-y-3 text-[var(--text-muted)]">
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p>Presets podem ser redistribuídos gratuitamente no Temple. Não tenha medo de testar!</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p>Leve em consideração que cada vocação tem seus próprios perks e spells. Algumas combinações não são possíveis.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p><strong>Para knights:</strong> Os presets de Club assumem que você usa armas de Club (Distance não afeta muito).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p><strong>Para sorcerers/druids:</strong> Elemental Mastery pode não funcionar com certos tipos de magias (Chain Elemental).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p><strong>Para paladins:</strong> Existem presets para Melee (Foco em Exori) e Holy (Foco em Exori San).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--accent-primary)]">•</span>
              <p><strong>Geral:</strong> Level 50+ é quando você começa a ganhar pontos no Wheel (1 ponto por nível).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
