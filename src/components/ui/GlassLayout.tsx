"use client";

import { useState } from "react";
import { GlassSidebar } from "./GlassSidebar";
import { GlassTopbar } from "./GlassTopbar";
import CommandBar from "@/app/components/CommandBar";
import { FavoritesProvider } from "@/hooks/useFavorites";

export default function GlassLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Command Bar Global (Cmd+K) */}
        <CommandBar />

        {/* Sidebar (Desktop + Mobile) */}
        <GlassSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Main Content Area */}
        <div className="lg:pl-64 transition-all duration-300">
          {/* Topbar (Desktop + Mobile) */}
          <div className="sticky top-0 z-30">
            <GlassTopbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
          </div>

          {/* Page Content */}
          <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 min-h-[calc(100vh-4rem)]">
            {children}
          </main>

          {/* Footer (Simplified) */}
          <footer className="border-t border-[var(--glass-border)] py-6 px-8 text-center text-sm text-[var(--glass-text-muted)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm">
            <p>© 2026 Rubi-Notes • Knight Club Guide</p>
          </footer>
        </div>
      </div>
    </FavoritesProvider>
  );
}
