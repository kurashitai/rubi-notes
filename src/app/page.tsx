import Link from "next/link";

const menuItems = [
  { icon: "🗺️", title: "Hunts", description: "Hunts por level e tier", href: "/hunts" },
  { icon: "📜", title: "Linked Tasks", description: "Tasks de acesso e recompensas", href: "/linked-tasks" },
  { icon: "☠️", title: "Bosses", description: "Rota diária de farm", href: "/bosses" },
  { icon: "💎", title: "Imbuements", description: "Guia de imbuements T3", href: "/imbuements" },
  { icon: "⚔️", title: "Armas", description: "Progressão de armas Club", href: "/weapons" },
  { icon: "🛡️", title: "Sets", description: "Equipamentos defensivos", href: "/sets" },
  { icon: "🎯", title: "Quests", description: "Acessos principais", href: "/quests" },
  { icon: "🔧", title: "Tools", description: "Calculadoras de XP e Profit", href: "/tools" },
];

const quickStats = [
  { label: "Hunts", value: "26", icon: "🗺️", color: "text-purple-400" },
  { label: "Tasks", value: "94", icon: "📜", color: "text-blue-400" },
  { label: "Bosses", value: "11", icon: "☠️", color: "text-red-400" },
  { label: "Criaturas", value: "18", icon: "🦴", color: "text-green-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-12 mb-16">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[var(--accent-primary)] via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Rubi-Notes
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            A database definitiva para sua jornada no Rubinot. <span className="text-[var(--accent-primary)]">Hunts</span>, <span className="text-[var(--accent-primary)]">Bosses</span>, <span className="text-[var(--accent-primary)]">Quests</span> e muito mais.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">📊 Estatísticas Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/30 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Grid */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">🚀 Navegação Rápida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <div className="group bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/50 hover:shadow-xl hover:shadow-[var(--accent-primary)]/15 transition-all duration-300 h-full cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Hunts */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">🏆 Top Hunts</h2>
            <Link
              href="/hunts"
              className="text-[var(--accent-primary)] text-sm font-medium hover:underline transition-all"
            >
              Ver todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Weretigers", level: "400+", exp: "5.1kk+", profit: "360k", tier: "S", slug: "weretigers" },
              { name: "Cobra Bastion", level: "300+", exp: "2kk", profit: "500k", tier: "S", slug: "cobra-bastion" },
              { name: "Lion Sanctuary", level: "250+", exp: "2kk", profit: "500k", tier: "S", slug: "lion-sanctuary" },
            ].map((hunt) => (
              <Link href={`/hunts/${hunt.slug}`} key={hunt.name}>
                <div className="group bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/50 hover:shadow-xl hover:shadow-[var(--accent-primary)]/15 transition-all duration-300 h-full cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {hunt.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      hunt.tier === "S"
                        ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                        : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    }`}>
                      Tier {hunt.tier}
                    </span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-[var(--bg-tertiary)] rounded-lg">
                      <span className="text-[var(--text-muted)]">Level</span>
                      <span className="font-semibold text-[var(--accent-primary)]">{hunt.level}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-[var(--bg-tertiary)] rounded-lg">
                      <span className="text-[var(--text-muted)]">Exp/h</span>
                      <span className="font-semibold text-green-400">{hunt.exp}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-[var(--bg-tertiary)] rounded-lg">
                      <span className="text-[var(--text-muted)]">Profit/h</span>
                      <span className="font-semibold text-amber-400">{hunt.profit}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-[var(--bg-secondary)] rounded-3xl border border-[var(--accent-primary)]/20">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Precisa de mais ajuda?
          </h2>
          <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
            Use nossa busca global (Cmd+K) para encontrar hunts, quests, bosses ou criaturas rapidamente.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-xl hover:bg-[var(--accent-primary)]/80 transition-all cursor-pointer font-semibold">
            <span className="text-xl">⌘</span>
            <span>Pressione K para buscar</span>
          </div>
        </section>
      </div>
    </div>
  );
}
