import Link from "next/link";

const menuItems = [
  { icon: "🗡️", title: "Hunts", description: "Hunts por level e tier", href: "/hunts" },
  { icon: "⚔️", title: "Armas", description: "Progressão de armas Club", href: "/weapons" },
  { icon: "💎", title: "Imbuements", description: "Guia de imbuements", href: "/imbuements" },
  { icon: "🎯", title: "Quests", description: "Quests de acesso", href: "/quests" },
  { icon: "👹", title: "Bosses", description: "Bosses diários e rota", href: "/bosses" },
  { icon: "⭐", title: "Extras", description: "Charm, Prey, Profit", href: "/extras" },
];

const quickStats = [
  { label: "Hunts", value: "30+", icon: "🗺️" },
  { label: "Armas", value: "25+", icon: "🔨" },
  { label: "Bosses", value: "20+", icon: "💀" },
  { label: "Níveis", value: "20-500", icon: "📊" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Guia de Progressão
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Knight Club (Solo) - Rubinot
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Guia completo com hunts, armas, imbuements, bosses e muito mais para sua jornada no servidor Rubinot.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-glow p-4">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-8">
        <h3 className="text-xl font-semibold text-gray-400 mb-6">Navegação Rápida</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <div className="card-glow p-6 cursor-pointer h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Level Calculator */}
      <section className="py-8">
        <div className="card-glow p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>🔍</span> Encontrar Hunt por Level
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              placeholder="Seu level..."
              className="flex-1 bg-[#1e1e2e] border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all">
              Buscar Hunts →
            </button>
          </div>
        </div>
      </section>

      {/* Featured Hunts */}
      <section className="py-8">
        <h3 className="text-xl font-semibold text-gray-400 mb-6">🏆 Top Hunts</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Weretigers", level: "400+", exp: "5.1kk+", profit: "900k+", tier: "S" },
            { name: "Cobra Bastion", level: "300+", exp: "2kk", profit: "500k", tier: "S" },
            { name: "Draken Walls", level: "200+", exp: "1.5kk", profit: "300k", tier: "A" },
          ].map((hunt) => (
            <div key={hunt.name} className="card-glow p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">{hunt.name}</h4>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  hunt.tier === "S" ? "tier-s" : "tier-a"
                }`}>
                  {hunt.tier}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Level</span>
                  <span className="text-purple-400">{hunt.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Exp/h</span>
                  <span className="text-green-400">{hunt.exp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Profit/h</span>
                  <span className="text-amber-400">{hunt.profit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8">
        <div className="bg-gradient-to-r from-purple-900/30 to-amber-900/30 border border-purple-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📖</div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Sobre o Guia</h4>
              <p className="text-gray-400 text-sm">
                Este guia foi criado especificamente para jogadores de Knight Club solo no servidor Rubinot (client 13.30 Retro-PVP). 
                Inclui informações sobre hunts, armas elementais, imbuements recomendados, bosses diários e muito mais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
