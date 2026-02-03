import Link from "next/link";
import BoostedCreatureWidget from "@/app/components/BoostedCreatureWidget";
import DailyBossWidget from "@/app/components/DailyBossWidget";

const menuItems = [
  { icon: "🗡️", title: "Hunts", description: "Hunts por level e tier", href: "/hunts" },
  { icon: "📜", title: "Linked Tasks", description: "Tasks de acesso e recompensas", href: "/linked-tasks" },
  { icon: "☠️", title: "Bosses", description: "Rota diária de farm", href: "/bosses" },
  { icon: "💎", title: "Imbuements", description: "Guia de imbuements T3", href: "/imbuements" },
  { icon: "⚔️", title: "Armas", description: "Progressão de armas Club", href: "/weapons" },
  { icon: "🛡️", title: "Sets", description: "Equipamentos defensivos", href: "/sets" },
  { icon: "🎯", title: "Quests", description: "Acessos principais", href: "/quests" },
  { icon: "🧮", title: "Tools", description: "Calculadoras de XP e Profit", href: "/tools" },
];

const quickStats = [
  { label: "Hunts", value: "60+", icon: "🗺️" },
  { label: "Tasks", value: "94", icon: "📜" },
  { label: "Bosses", value: "6+", icon: "💀" },
  { label: "Níveis", value: "20-600", icon: "📊" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Rubi-Notes
          </span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          A database definitiva para sua jornada no Rubinot.
        </p>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
           <BoostedCreatureWidget />
           <DailyBossWidget />
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-glow p-4 bg-[#1e1e2e]">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <div className="card-glow p-6 cursor-pointer h-full hover:border-purple-500/50 transition-colors bg-[#1e1e2e] group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-purple-400">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Hunts */}
      <section className="py-8">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-xl font-semibold text-gray-400">🏆 Top Hunts</h3>
           <Link href="/hunts" className="text-purple-400 text-sm hover:underline">Ver todas →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Weretigers", level: "400+", exp: "5.1kk+", profit: "900k+", tier: "S" },
            { name: "Cobra Bastion", level: "300+", exp: "2kk", profit: "500k", tier: "S" },
            { name: "Buried Cathedral", level: "400+", exp: "5kk", profit: "150k", tier: "S" },
          ].map((hunt) => (
            <Link href={`/hunts/${hunt.name.toLowerCase().replace(/ /g, "-")}`} key={hunt.name}>
              <div className="card-glow p-5 bg-[#1e1e2e] hover:border-purple-500/50 transition-colors cursor-pointer h-full">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-white">{hunt.name}</h4>
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
