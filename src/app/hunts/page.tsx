import Link from "next/link";

// Rate do Rubinot: 2.5x loot
const RUBINOT_LOOT_RATE = 2.5;

interface Hunt {
  name: string;
  level: string;
  rawExp: string;
  baseProfit: number; // profit base em k
  tier: string;
  location: string;
  weakness: string;
  imbuement: string;
  access?: string;
  accessQuest?: string;
}

const hunts: Hunt[] = [
  // S-Tier
  { name: "Weretigers", level: "400+", rawExp: "5.1kk+", baseProfit: 360, tier: "S", location: "Oskayaat", weakness: "Death +25%", imbuement: "Mortal Mace", access: "Paradise Lost Quest", accessQuest: "/quests/paradise-lost" },
  { name: "Cobra Bastion", level: "300+", rawExp: "2kk", baseProfit: 200, tier: "S", location: "Issavi", weakness: "Physical", imbuement: "Mace of Destruction", access: "Cobra Bastion Quest" },
  { name: "Lion Sanctuary", level: "300+", rawExp: "2kk", baseProfit: 200, tier: "S", location: "Issavi", weakness: "Physical", imbuement: "Mace of Destruction", access: "Lion Sanctuary Quest" },
  { name: "Warzone 8", level: "300+", rawExp: "1.5kk", baseProfit: 800, tier: "S", location: "Warzone", weakness: "Variable", imbuement: "Variable", access: "Warzone Access" },
  // A-Tier
  { name: "Draken Walls", level: "200+", rawExp: "1.5kk", baseProfit: 120, tier: "A", location: "Zao", weakness: "Earth +10%", imbuement: "Lion Hammer", access: "Wrath of the Emperor Quest", accessQuest: "/quests/wrath-emperor" },
  { name: "Burster Spectres", level: "300+", rawExp: "4.5kk", baseProfit: 200, tier: "A", location: "Darashia", weakness: "Physical", imbuement: "Mace of Destruction", access: "Livre" },
  { name: "Summer Court", level: "400+", rawExp: "4.5kk", baseProfit: 150, tier: "A", location: "Feyrist", weakness: "Ice +30%", imbuement: "Soulcrusher", access: "Feyrist Access" },
  { name: "Asura Palace", level: "200+", rawExp: "1.2kk", baseProfit: 160, tier: "A", location: "Issavi", weakness: "Physical", imbuement: "Physical", access: "Asura Palace Quest" },
  // B-Tier
  { name: "Grim Reaper", level: "100+", rawExp: "1kk", baseProfit: 80, tier: "B", location: "Yalahar/Drefia", weakness: "Holy +25%", imbuement: "Fire imbue", access: "Livre" },
  { name: "Banuta Last Floor", level: "200+", rawExp: "1.2kk", baseProfit: 60, tier: "B", location: "Banuta", weakness: "Fire/Ice", imbuement: "Scorch/Frost", access: "Ape City Quest", accessQuest: "/quests/ape-city" },
  { name: "Oramond West", level: "200+", rawExp: "2kk", baseProfit: -50, tier: "B", location: "Rathleton", weakness: "Ice +10%", imbuement: "Resizer", access: "Livre (via Rathleton)" },
  { name: "Winter Court", level: "300+", rawExp: "3.5kk", baseProfit: 100, tier: "B", location: "Feyrist", weakness: "Fire/Energy", imbuement: "Falcon Mace", access: "Feyrist Access" },
  // Lower levels
  { name: "Giant Spiders", level: "50+", rawExp: "400k", baseProfit: 40, tier: "A", location: "PoI", weakness: "Physical", imbuement: "Physical", access: "Livre" },
  { name: "Wyrms", level: "50+", rawExp: "450k", baseProfit: 50, tier: "A", location: "Drefia", weakness: "Physical", imbuement: "Physical", access: "Livre" },
  { name: "Stonerefiner", level: "20+", rawExp: "150k", baseProfit: 20, tier: "S", location: "Unknown", weakness: "Ice +20%", imbuement: "Frost", access: "Livre" },
];

const tierColors: Record<string, string> = {
  S: "tier-s",
  A: "tier-a",
  B: "tier-b",
};

const levelRanges = ["All", "20-100", "100-200", "200-300", "300-400", "400-500"];

function formatProfit(baseProfit: number): string {
  const rubinot = Math.round(baseProfit * RUBINOT_LOOT_RATE);
  if (rubinot < 0) return "Waste";
  if (rubinot >= 1000) return `${(rubinot / 1000).toFixed(1)}kk`;
  return `${rubinot}k`;
}

export default function HuntsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2">🗡️ Hunts</h1>
        <p className="text-gray-500">Lista completa de hunts para Knight Club solo</p>
      </div>

      {/* Rate Info */}
      <div className="card-glow p-4 mb-6 bg-gradient-to-r from-amber-900/20 to-transparent border-amber-500/30">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 text-xl">💰</span>
          <div>
            <p className="text-sm font-semibold text-amber-400">Rate do Rubinot: {RUBINOT_LOOT_RATE}x Loot</p>
            <p className="text-xs text-gray-500">Profit já calculado com a rate do servidor</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card-glow p-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="text-gray-500 py-2">Filtrar por level:</span>
          {levelRanges.map((range) => (
            <button
              key={range}
              className="px-4 py-2 rounded-lg bg-[#1e1e2e] hover:bg-purple-600/30 border border-purple-500/30 transition-colors"
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Tier Sections */}
      {["S", "A", "B"].map((tier) => {
        const tierHunts = hunts.filter((h) => h.tier === tier);
        if (tierHunts.length === 0) return null;
        
        return (
          <section key={tier} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className={`px-3 py-1 rounded font-bold ${tierColors[tier]}`}>{tier}-TIER</span>
              <span className="text-gray-500 text-sm">({tierHunts.length} hunts)</span>
            </h2>
            
            <div className="grid gap-4">
              {tierHunts.map((hunt) => (
                <div key={hunt.name} className="card-glow p-5">
                  <Link href={`/hunts/${hunt.name.toLowerCase().replace(/ /g, '-')}`} className="block">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Hunt Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{hunt.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${tierColors[hunt.tier]}`}>
                            {hunt.tier}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="text-gray-500">
                            📍 {hunt.location}
                          </span>
                          <span className="text-purple-400">
                            Lvl {hunt.level}
                          </span>
                          {hunt.access && (
                            <span className="text-blue-400">
                              🔓 {hunt.access}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 lg:gap-6 text-sm">
                        <div className="text-center min-w-[70px]">
                          <div className="text-gray-500 mb-1">Raw Exp/h</div>
                          <div className="text-green-400 font-semibold">{hunt.rawExp}</div>
                        </div>
                        <div className="text-center min-w-[70px]">
                          <div className="text-gray-500 mb-1">Profit ({RUBINOT_LOOT_RATE}x)</div>
                          <div className={`font-semibold ${hunt.baseProfit < 0 ? 'text-red-400' : 'text-amber-400'}`}>
                            {formatProfit(hunt.baseProfit)}
                          </div>
                        </div>
                        <div className="text-center min-w-[80px]">
                          <div className="text-gray-500 mb-1">Fraqueza</div>
                          <div className="text-red-400 font-semibold">{hunt.weakness}</div>
                        </div>
                        <div className="text-center min-w-[100px]">
                          <div className="text-gray-500 mb-1">Arma</div>
                          <div className="text-blue-400 font-semibold">{hunt.imbuement}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Legend */}
      <section className="mt-12">
        <div className="card-glow p-6">
          <h3 className="font-semibold mb-4">📋 Legenda</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-2"><span className="tier-s">S</span> Meta, melhor opção</p>
              <p className="mb-2"><span className="tier-a">A</span> Excelente escolha</p>
              <p><span className="tier-b">B</span> Boa opção</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-green-400">Raw Exp/h</span> = Experiência base (sem prey/boost)</p>
              <p className="mb-2"><span className="text-amber-400">Profit</span> = Já com rate {RUBINOT_LOOT_RATE}x do Rubinot</p>
              <p><span className="text-red-400">Waste</span> = Hunt com prejuízo (foco em exp)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
