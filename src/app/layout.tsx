import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CommandBar from "./components/CommandBar";
import SearchTrigger from "./components/SearchTrigger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubi-Notes - Knight Club Progression",
  description: "Database completa para Knight Club (Solo) no servidor Rubinot - Hunts, Tasks, Bosses e Tools.",
  keywords: ["Tibia", "Rubinot", "Knight", "Club", "Guide", "Hunts", "Progression"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0a0a0f] text-[#e4e4e7] min-h-screen`}>
        {/* Command Bar Global (Ctrl+K) */}
        <CommandBar />

        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#14141f]/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-900/5">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-2xl group-hover:rotate-12 transition-transform">💎</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RUBI-NOTES
              </span>
            </a>
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="/hunts" className="hover:text-purple-400 transition-colors">Hunts</a>
              <a href="/linked-tasks" className="hover:text-purple-400 transition-colors">Tasks</a>
              <a href="/bestiary" className="hover:text-purple-400 transition-colors">Bestiário</a>
              <a href="/bosses" className="hover:text-purple-400 transition-colors">Bosses</a>
              <a href="/imbuements" className="hover:text-purple-400 transition-colors">Imbuements</a>
              <div className="h-4 w-px bg-gray-700 mx-1"></div>
              <a href="/weapons" className="hover:text-purple-400 transition-colors">Armas</a>
              <a href="/sets" className="hover:text-purple-400 transition-colors">Sets</a>
              <a href="/tools" className="hover:text-purple-400 transition-colors">Tools</a>
            </div>
            
            {/* Search Trigger (Client Component) */}
            <SearchTrigger />
          </div>
        </nav>
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <footer className="bg-[#14141f] border-t border-purple-500/20 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-6 mb-4 text-gray-400 text-sm">
               <a href="/hunts" className="hover:text-purple-400">Hunts</a>
               <a href="/quests" className="hover:text-purple-400">Quests</a>
               <a href="/tools" className="hover:text-purple-400">Tools</a>
            </div>
            <p className="text-xs text-gray-600">
              Rubi-Notes © 2026 - Guia não-oficial para o servidor Rubinot.<br/>
              Feito com Next.js, Tailwind e 💜.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
