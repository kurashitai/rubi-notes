import Link from "next/link";
import { notFound } from "next/navigation";
import { huntsDatabase, RUBINOT_LOOT_RATE, RUBINOT_BESTIARY_RATE } from "@/data/hunts";
import MonsterImage from "@/app/components/MonsterImage";
import LootImage from "@/app/components/LootImage";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

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
      {/* Header */}
      <div className="mb-8">
        <Link href="/hunts" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar para Hunts
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold">{hunt.name}</h1>
          <span className={`px-3 py-1 rounded font-bold ${tierColors[hunt.tier] || "bg-gray-700 text-gray-300"}`}>
            {hunt.tier}-TIER
          </span>
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
        <div className="card-glow text-center">
          <div className="text-2xl mb-1">⚔️</div>
          <div className="text-xs text-gray-500">Fraqueza</div>
          <div className="text-red-400 font-semibold">{hunt.weakness}</div>
        </div>
        <div className="card-glow text-center">
          <div className="text-2xl mb-1">🔨</div>
          <div className="text-xs text-gray-500">Arma</div>
          <div className="text-blue-400 font-semibold">{hunt.recommendedSet.weapon}</div>
        </div>
        <div className="card-glow text-center">
          <div className="text-2xl mb-1">👹</div>
          <div className="text-xs text-gray-500">Monstros</div>
          <div className="text-purple-400 font-semibold">{hunt.monsters.length} tipos</div>
        </div>
        <div className="card-glow text-center">
          <div className="text-2xl mb-1">🎯</div>
          <div className="text-xs text-gray-500">Quest</div>
          <div className="text-amber-400 font-semibold">{hunt.access.quest || "Livre"}</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Access */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🔓</span> Como Chegar (Spoiler)
            </h2>
            {hunt.access.requirements && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Requisitos:</h3>
                <ul className="text-sm space-y-1">
                  {hunt.access.requirements.map((req, i) => (
                    <li key={i} className="text-amber-400">• {req}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Passo a passo:</h3>
              <ol className="text-sm space-y-2">
                {hunt.access.howToGet.map((step, i) => (
                  <li key={i} className="text-gray-300">{step}</li>
                ))}
              </ol>
            </div>
            {hunt.access.coordinates && (
              <div className="mt-4 p-2 bg-[#1e1e2e] rounded text-sm">
                <span className="text-gray-500">📍 Coordenadas:</span>{" "}
                <span className="text-green-400 font-mono">{hunt.access.coordinates}</span>
              </div>
            )}
          </section>

          {/* Rotation */}
          {hunt.rotation && (
            <section className="card-glow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🔄</span> Rotação no Spawn
              </h2>
              <ol className="text-sm space-y-2">
                {hunt.rotation.map((step, i) => (
                  <li key={i} className="text-gray-300">{step}</li>
                ))}
              </ol>
            </section>
          )}

          {/* Recommended Set */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🛡️</span> Set Recomendado
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">🔨 Arma:</span>
                <div className="text-blue-400">{hunt.recommendedSet.weapon} ({hunt.recommendedSet.weaponLevel})</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">🪖 Helmet:</span>
                <div>{hunt.recommendedSet.helmet}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">🦺 Armor:</span>
                <div>{hunt.recommendedSet.armor}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">👖 Legs:</span>
                <div>{hunt.recommendedSet.legs}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">👢 Boots:</span>
                <div>{hunt.recommendedSet.boots}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">🛡️ Shield:</span>
                <div>{hunt.recommendedSet.shield}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">📿 Amulet:</span>
                <div>{hunt.recommendedSet.amulet}</div>
              </div>
              <div className="p-2 bg-[#1e1e2e] rounded">
                <span className="text-gray-500">💍 Ring:</span>
                <div>{hunt.recommendedSet.ring}</div>
              </div>
            </div>
          </section>

          {/* Imbuements */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💎</span> Imbuements Recomendados
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Weapon:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.weapon.map((imb, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-600/30 rounded text-purple-300">{imb}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Armor:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.armor.map((imb, i) => (
                    <span key={i} className="px-2 py-1 bg-orange-600/30 rounded text-orange-300">{imb}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Helmet:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {hunt.imbuements.helmet.map((imb, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-600/30 rounded text-blue-300">{imb}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Charms */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>⭐</span> Charms Recomendados
            </h2>
            <div className="flex flex-wrap gap-2">
              {hunt.charms.map((charm, i) => (
                <span key={i} className="px-3 py-1 bg-amber-600/30 rounded text-amber-300">{charm}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Monsters / Bestiary */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>👹</span> Bestiário
              <span className="text-xs text-gray-500 font-normal">(Rate Rubinot: {RUBINOT_BESTIARY_RATE}x)</span>
            </h2>
            <div className="space-y-4">
              {hunt.monsters.map((monster) => (
                <div key={monster.name} className={`p-4 rounded-lg ${monster.ignore ? 'bg-gray-800/50 opacity-60' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center gap-4 mb-2">
                    {/* Monster Image (Client Component) */}
                    <div className="w-12 h-12 bg-black/40 rounded-lg flex items-center justify-center border border-gray-700 shrink-0">
                      <MonsterImage
                        src={`${BASE_WIKI_URL}/monsters/global/${monster.name.toLowerCase().replace(/ /g, "-")}.gif`}
                        alt={monster.name}
                        className="max-w-[40px] max-h-[40px] object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg leading-tight">{monster.name}</h3>
                        {monster.ignore && (
                          <span className="text-xs text-red-400 px-2 py-1 bg-red-900/30 rounded">IGNORAR</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-sm mb-3 pl-[4rem]">
                    <div>
                      <span className="text-gray-500">HP:</span>
                      <span className="text-red-400 ml-1">{monster.hp.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Exp:</span>
                      <span className="text-green-400 ml-1">{monster.exp.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Kills:</span>
                      <span className="text-purple-400 ml-1">{formatBestiaryKills(monster.bestiaryKills)}</span>
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="mb-3 pl-[4rem]">
                    <span className="text-xs text-gray-500">Fraquezas:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Object.entries(monster.weaknesses).map(([element, value]) => (
                        <span
                          key={element}
                          className={`text-xs px-2 py-0.5 rounded ${
                            value > 0 ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                          }`}
                        >
                          {element} {value > 0 ? '+' : ''}{value}%
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Loot with Images (Client Component) */}
                  <div className="pl-[4rem]">
                    <span className="text-xs text-gray-500">Loot Principal:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {monster.loot.map((item, i) => (
                        <div 
                          key={i}
                          className={`flex items-center gap-2 px-2 py-1 rounded border ${
                            item.discard 
                              ? 'bg-gray-800/30 border-gray-800 text-gray-500 line-through opacity-60' 
                              : 'bg-[#14141f] border-gray-700 text-gray-300'
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
              ))}
            </div>
          </section>

          {/* Dangers */}
          <section className="card-glow border-red-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-400">
              <span>⚠️</span> Perigos
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.dangers.map((danger, i) => (
                <li key={i} className="text-red-300">{danger}</li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="card-glow border-green-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-400">
              <span>💡</span> Dicas
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.tips.map((tip, i) => (
                <li key={i} className="text-green-300">{tip}</li>
              ))}
            </ul>
          </section>

          {/* Alternatives */}
          <section className="card-glow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🔀</span> Alternativas (se lotado)
            </h2>
            <ul className="space-y-2 text-sm">
              {hunt.alternatives.map((alt, i) => (
                <li key={i} className="text-blue-400">• {alt}</li>
              ))}
            </ul>
          </section>

          {/* Video Guide */}
          {hunt.videoGuide && (
            <section className="card-glow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎥</span> Vídeo Guia
              </h2>
              <a
                href={hunt.videoGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors"
              >
                <span className="text-red-400">▶️ Assistir no YouTube</span>
              </a>
            </section>
          )}

          {/* Group Version */}
          {hunt.groupVersion && (
            <section className="card-glow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Versão em Grupo
              </h2>
              <p className="text-sm text-gray-300">{hunt.groupVersion}</p>
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
