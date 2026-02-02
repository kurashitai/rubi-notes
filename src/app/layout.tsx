import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubinot Guide - Tibia Knight Club Progression",
  description: "Guia completo de progressão para Knight Club (Solo) no servidor Rubinot - Hunts, Armas, Imbuements, Bosses e mais!",
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#14141f]/90 backdrop-blur-md border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">🏰</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                RUBINOT GUIDE
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/hunts" className="hover:text-purple-400 transition-colors">Hunts</a>
              <a href="/weapons" className="hover:text-purple-400 transition-colors">Armas</a>
              <a href="/sets" className="hover:text-purple-400 transition-colors">Sets</a>
              <a href="/imbuements" className="hover:text-purple-400 transition-colors">Imbuements</a>
              <a href="/quests" className="hover:text-purple-400 transition-colors">Quests</a>
              <a href="/linked-tasks" className="hover:text-purple-400 transition-colors">Tasks</a>
              <a href="/bosses" className="hover:text-purple-400 transition-colors">Bosses</a>
              <a href="/tools" className="hover:text-purple-400 transition-colors">Tools</a>
            </div>
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </nav>
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="bg-[#14141f] border-t border-purple-500/20 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>Rubinot Guide © 2026 - Guia não-oficial para o servidor Rubinot</p>
            <p className="mt-2">Feito com 💜 para a comunidade Tibia</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
