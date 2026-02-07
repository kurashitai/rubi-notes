import Link from "next/link";
import { notFound } from "next/navigation";
import { huntsDatabase, RUBINOT_LOOT_RATE, RUBINOT_BESTIARY_RATE } from "@/data/hunts";
import { creaturesDb } from "@/data/db/creatures";
import MonsterImage from "@/app/components/MonsterImage";
import LootImage from "@/app/components/LootImage";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";
import { TierBadge } from "@/components/ui/badge";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

const creaturesMap = new Map(
  creaturesDb.map((c) => [c.name.toLowerCase(), c])
);

function formatProfit(baseProfit: number): string {
  const rubinot = Math.round(baseProfit * RUBINOT_LOOT_RATE);
  if (rubinot < 0) return "Waste";
  if (rubinot >= 1000) return `${(rubinot / 1000).toFixed(1)}kk`;
  return `${rubinot}k`;
}

function formatBestiaryKills(kills: number): number {
  return Math.ceil(kills / RUBINOT_BESTIARY_RATE);
}

const tierColors: Record<string, string> = {
  S: "tier-s",
  A: "tier-a",
  B: "tier-b",
  C: "tier-b",
};

export default async function HuntDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hunt = huntsDatabase[slug];

  if (!hunt) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome
        items={[
          { label: "Hunts", href: "/hunts" },
          { label: hunt.name }
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold">{hunt.name}</h1>
          <TierBadge tier={hunt.tier as "S" | "A" | "B" | "C"} />
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <span>📍 {hunt.location}</span>
          <span>📊 Level {hunt.levelRange}</span>
          <span className="text-green-400">⚡ {hunt.rawExp} Raw Exp/h</span>
          <span className="text-amber-400">💰 {formatProfit(hunt.baseProfit)}/h (2.5x)</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl mb-1">⚔️</div>
          <div className="text-xs text-[var(--glass-text-muted)]">Fraqueza</div>
          <div className="text-red-400 font-semibold">{hunt.weakness}</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl mb-1">🔨</div>
          <div className="text-xs text-[var(--glass-text-muted)]">Arma</div>
          <div className="text-[var(--glass-accent-glow)] font-semibold">{hunt.recommendedSet.weapon}</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl mb-1">👹</div>
          <div className="text-xs text-[var(--glass-text-muted)]">Monstros</div>
          <div className="text-purple-400 font-semibold">{hunt.monsters.length} tipos</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl mb-1">🎯</div>
          <div className="text-xs text-[var(--glass-text-muted)]">Quest</div>
          <div className="text-amber-400 font-semibold">{hunt.access.quest || "Livre"}</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Access */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>🔓</span> Como Chegar (Spoiler)
            </h2>
            {hunt.access.requirements && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[var(--glass-text-secondary)] mb-2">Requisitos:</h3>
                <ul className="text-sm space-y-1">
                  {hunt.access.requirements.map((req, i) => (
                    <li key={i} className="text-amber-400">• {req}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-[var(--glass-text-secondary)] mb-2">Passo a passo:</h3>
              <ol className="text-sm space-y-2">
                {hunt.access.howToGet.map((step, i) => (
                  <li key={i} className="text-[var(--glass-text-muted)]">{step}</li>
                ))}
              </ol>
            </div>
            {hunt.access.coordinates && (
              <div className="mt-4 p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded text-sm">
                <span className="text-[var(--glass-text-secondary)]">📍 Coordenadas:</span>{" "}
                <span className="text-green-400 font-mono">{hunt.access.coordinates}</span>
              </div>
            )}
          </section>

          {/* Rotation */}
          {hunt.rotation && (
            <section className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
                <span>🔄</span> Rotação no Spawn
              </h2>
              <ol className="text-sm space-y-2">
                {hunt.rotation.map((step, i) => (
                  <li key={i} className="text-[var(--glass-text-muted)]">{step}</li>
                ))}
              </ol>
            </section>
          )}

          {/* Recommended Set */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>🛡️</span> Set Recomendado
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">🔨 Arma:</span>
                <div className="text-[var(--glass-accent-glow)]">{hunt.recommendedSet.weapon} ({hunt.recommendedSet.weaponLevel})</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">🪖 Helmet:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.helmet}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">🦺 Armor:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.armor}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">👖 Legs:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.legs}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">👢 Boots:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.boots}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">🛡️ Shield:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.shield}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">📿 Amulet:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.amulet}</div>
              </div>
              <div className="p-2 bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] rounded">
                <span className="text-[var(--glass-text-secondary)]">💍 Ring:</span>
                <div className="text-[var(--glass-text-primary)]">{hunt.recommendedSet.ring}</div>
              </div>
            </div>
          </section>

          {/* Imbuements */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>💎</span> Imbuements Recomendados
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[var(--glass-text-secondary)]">Weapon:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.weapon.map((imb, i) => (
                    <span key={i} className="glass-badge bg-purple-600/20 text-purple-300 border-purple-500/30">{imb}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[var(--glass-text-secondary)]">Armor:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.armor.map((imb, i) => (
                    <span key={i} className="glass-badge bg-orange-600/20 text-orange-300 border-orange-500/30">{imb}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[var(--glass-text-secondary)]">Helmet:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.helmet.map((imb, i) => (
                    <span key={i} className="glass-badge bg-blue-600/20 text-blue-300 border-blue-500/30">{imb}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Charms */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>⭐</span> Charms Recomendados
            </h2>
            <div className="flex flex-wrap gap-2">
              {hunt.charms.map((charm, i) => (
                <span key={i} className="glass-badge bg-amber-600/20 text-amber-300 border-amber-500/30">{charm}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Monsters / Bestiary */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>👹</span> Bestiário
              <span className="text-xs text-[var(--glass-text-muted)] font-normal">(Rate Rubinot: {RUBINOT_BESTIARY_RATE}x)</span>
            </h2>
            <div className="space-y-4">
              {hunt.monsters.map((monster) => {
                const dbCreature = creaturesMap.get(monster.name.toLowerCase());
                const hp = dbCreature?.hp ?? monster.hp;
                const exp = dbCreature?.exp ?? monster.exp;
                const kills = dbCreature?.bestiaryKills ?? 0; // Prioriza DB
                const weaknesses = dbCreature?.weaknesses ?? monster.weaknesses;
                const imageUrl = dbCreature?.imageUrl ?? `${BASE_WIKI_URL}/monsters/global/${monster.name.toLowerCase().replace(/ /g, "-")}.gif`;

                return (
                <div key={monster.name} className={`p-4 rounded-xl border border-[var(--glass-border)] ${monster.ignore ? 'bg-[var(--glass-bg)] opacity-60' : 'bg-[var(--glass-bg-hover)]'}`}>
                  <div className="flex items-center gap-4 mb-2">
                    {/* Monster Image (Client Component) */}
                    <div className="w-12 h-12 bg-black/40 rounded-lg flex items-center justify-center border border-[var(--glass-border)] shrink-0">
                      <MonsterImage
                        src={imageUrl}
                        alt={monster.name}
                        className="max-w-[40px] max-h-[40px] object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg leading-tight text-[var(--glass-text-primary)]">{monster.name}</h3>
                        {monster.ignore && (
                          <span className="text-xs text-red-400 px-2 py-1 bg-red-900/30 rounded border border-red-900/50">IGNORAR</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm mb-3 pl-[4rem]">
                    <div>
                      <span className="text-[var(--glass-text-secondary)]">HP:</span>
                      <span className="text-red-400 ml-1">{hp.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[var(--glass-text-secondary)]">Exp:</span>
                      <span className="text-green-400 ml-1">{exp.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[var(--glass-text-secondary)]">Kills:</span>
                      <span className="text-purple-400 ml-1">{formatBestiaryKills(kills)}</span>
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="mb-3 pl-[4rem]">
                    <span className="text-xs text-[var(--glass-text-secondary)]">Fraquezas:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Object.entries(weaknesses).map(([element, value]) => (
                        <span
                          key={element}
                          className={`text-xs px-2 py-0.5 rounded border border-white/5 ${
                            (value as number) > 0 ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'
                          }`}
                        >
                          {element} {(value as number) > 0 ? '+' : ''}{value}%
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Loot with Images (Client Component) */}
                  <div className="pl-[4rem]">
                    <span className="text-xs text-[var(--glass-text-secondary)]">Loot Principal:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {monster.loot.map((item, i) => (
                        <div 
                          key={i}
                          className={`flex items-center gap-2 px-2 py-1 rounded border ${
                            item.discard 
                              ? 'bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--glass-text-muted)] line-through opacity-60' 
                              : 'bg-[var(--glass-bg-hover)] border-[var(--glass-border)] text-[var(--glass-text-primary)]'
                          }`}
                          title={item.discard ? 'Descartar' : `${item.chance} - ${item.value}`}
                        >
                          <LootImage 
                            src={`${BASE_WIKI_URL}/items/rubinot/${item.item.toLowerCase().replace(/'/g, "").replace(/ /g, "-")}.gif`}
                            alt={item.item}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-xs">{item.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </section>

          {/* Dangers */}
          <section className="glass-card p-6 border-red-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-400">
              <span>⚠️</span> Perigos
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.dangers.map((danger, i) => (
                <li key={i} className="text-red-300">• {danger}</li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="glass-card p-6 border-green-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-400">
              <span>💡</span> Dicas
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.tips.map((tip, i) => (
                <li key={i} className="text-green-300">• {tip}</li>
              ))}
            </ul>
          </section>

          {/* Alternatives */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
              <span>🔀</span> Alternativas (se lotado)
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.alternatives.map((alt, i) => (
                <li key={i} className="text-[var(--glass-accent-glow)]">• {alt}</li>
              ))}
            </ul>
          </section>

          {/* Video Guide */}
          {hunt.videoGuide && (
            <section className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
                <span>🎥</span> Vídeo Guia
              </h2>
              <a
                href={hunt.videoGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors border border-red-600/30"
              >
                <span className="text-red-400 font-medium">▶️ Assistir no YouTube</span>
              </a>
            </section>
          )}

          {/* Group Version */}
          {hunt.groupVersion && (
            <section className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
                <span>👥</span> Versão em Grupo
              </h2>
              <p className="text-sm text-[var(--glass-text-muted)]">{hunt.groupVersion}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(huntsDatabase).map((slug) => ({ slug }));
}
