"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function GlassTopbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Infer title from path
  const getPageTitle = () => {
    if (pathname === "/") return "Dashboard";
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "Dashboard";
    
    const section = parts[0];
    const detail = parts[1];

    const sectionMap: Record<string, string> = {
      hunts: "Hunts",
      "linked-tasks": "Tasks",
      bestiary: "Bestiário",
      bosses: "Bosses",
      charms: "Charms",
      prey: "Prey",
      imbuements: "Imbuements",
      weapons: "Armas",
      sets: "Sets",
      outfits: "Outfits",
      mounts: "Mounts",
      "farm-guide": "Farm Guide",
      quests: "Quests",
      "monk-quest": "Way of the Monk",
      "wheel-of-destiny": "Wheel of Destiny",
      "zero-to-hero": "Zero to Hero",
      tools: "Tools",
      "glassmorphism-demo": "Glassmorphism Demo"
    };

    const title = sectionMap[section] || section.charAt(0).toUpperCase() + section.slice(1);
    
    if (detail) {
      return `${title} • ${detail.replace(/-/g, " ")}`;
    }
    
    return title;
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 transition-all duration-300 ${
        scrolled 
          ? "bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--glass-border)] shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Mobile Toggle + Title */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 -ml-2 rounded-lg text-[var(--glass-text-secondary)] hover:bg-[var(--glass-bg-hover)] hover:text-[var(--glass-text-primary)] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <h2 className="text-lg font-semibold text-[var(--glass-text-primary)] truncate max-w-[200px] sm:max-w-md hidden sm:block">
            {getPageTitle()}
          </h2>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Search Trigger (Mobile/Desktop) */}
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="p-2 rounded-lg text-[var(--glass-text-secondary)] hover:bg-[var(--glass-bg-hover)] hover:text-[var(--glass-text-primary)] transition-colors"
            title="Search (Cmd+K)"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Notifications (Mock) */}
          <button className="p-2 rounded-lg text-[var(--glass-text-secondary)] hover:bg-[var(--glass-bg-hover)] hover:text-[var(--glass-text-primary)] transition-colors relative">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[var(--bg-secondary)]" />
          </button>

          {/* User Avatar (Mock) */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border border-white/10 shadow-inner ml-2 cursor-pointer hover:ring-2 ring-[var(--accent-primary)] transition-all">
            {/* User image would go here */}
          </div>
        </div>
      </div>
    </header>
  );
}
