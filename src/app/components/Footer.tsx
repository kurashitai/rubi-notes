import Link from "next/link";

const footerLinks = [
  {
    title: "Guias",
    links: [
      { label: "Hunts", href: "/hunts" },
      { label: "Tasks", href: "/linked-tasks" },
      { label: "Bosses", href: "/bosses" },
      { label: "Bestiário", href: "/bestiary" },
    ],
  },
  {
    title: "Equipamentos",
    links: [
      { label: "Armas (Club)", href: "/weapons" },
      { label: "Sets", href: "/sets" },
      { label: "Imbuements", href: "/imbuements" },
    ],
  },
  {
    title: "Ferramentas",
    links: [
      { label: "Calculadoras", href: "/tools" },
      { label: "Quests", href: "/quests" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-purple-500/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💎</span>
              <span className="text-xl font-bold text-gradient">RUBI-NOTES</span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Guia completo para jogadores de Knight Club (Solo) no servidor Rubinot.
            </p>
            <div className="flex gap-3">
              <a
                href="https://rubinot.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] hover:text-purple-400 transition-colors"
              >
                🌐 Rubinot
              </a>
              <a
                href="https://wiki.rubinot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] hover:text-purple-400 transition-colors"
              >
                📖 Wiki
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 Rubi-Notes — Guia não-oficial para o servidor Rubinot.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Feito com Next.js, Tailwind e 💜
          </p>
        </div>
      </div>
    </footer>
  );
}
