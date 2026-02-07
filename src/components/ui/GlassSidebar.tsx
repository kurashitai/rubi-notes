"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Hunts", href: "/hunts", icon: "🗡️" },
  { label: "Tasks", href: "/linked-tasks", icon: "📜" },
  { label: "Bestiário", href: "/bestiary", icon: "👹" },
  { label: "Bosses", href: "/bosses", icon: "☠️" },
  { label: "Charms", href: "/charms", icon: "🎨" },
  { label: "Prey", href: "/prey", icon: "🎯" },
  { label: "Imbuements", href: "/imbuements", icon: "💎" },
];

const secondaryNavItems: NavItem[] = [
  { label: "Armas", href: "/weapons", icon: "⚔️" },
  { label: "Sets", href: "/sets", icon: "🛡️" },
  { label: "Outfits", href: "/outfits", icon: "👘" },
  { label: "Mounts", href: "/mounts", icon: "🦄" },
  { label: "Farm Guide", href: "/farm-guide", icon: "💰" },
  { label: "Quests", href: "/quests", icon: "🎯" },
  { label: "Way of the Monk", href: "/monk-quest", icon: "🧙" },
  { label: "Wheel of Destiny", href: "/wheel-of-destiny", icon: "🎡" },
  { label: "Zero to Hero", href: "/zero-to-hero", icon: "🚀" },
  { label: "Tools", href: "/tools", icon: "🧮" },
];

export function GlassSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        onClick={onClose} // Close sidebar on mobile when link is clicked
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
          active
            ? "bg-[var(--glass-rubi-primary)]/20 text-[var(--accent-primary-light)] border border-[var(--glass-rubi-primary)]/30"
            : "text-[var(--glass-text-secondary)] hover:text-[var(--glass-text-primary)] hover:bg-[var(--glass-bg-hover)] border border-transparent"
        }`}
      >
        <span className={`text-lg transition-transform group-hover:scale-110 ${active ? "opacity-100" : "opacity-70"}`}>
          {item.icon}
        </span>
        <span>{item.label}</span>
        {active && (
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]" />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-[var(--bg-secondary)] border-r border-[var(--glass-border)] flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--glass-rubi-primary)] to-[var(--glass-rubi-secondary)] flex items-center justify-center shadow-lg group-hover:shadow-[var(--glass-glow)] transition-all">
              <span className="text-sm">💎</span>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-[var(--glass-text-secondary)] bg-clip-text text-transparent">
                RUBI-NOTES
              </h1>
            </div>
          </Link>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar space-y-6">
          {/* Main Section */}
          <div>
            <div className="px-3 mb-2 text-xs font-semibold text-[var(--glass-text-muted)] uppercase tracking-wider">
              Principal
            </div>
            <nav className="space-y-1">
              {mainNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>
          </div>

          {/* Secondary Section */}
          <div>
            <div className="px-3 mb-2 text-xs font-semibold text-[var(--glass-text-muted)] uppercase tracking-wider">
              Ferramentas & Guias
            </div>
            <nav className="space-y-1">
              {secondaryNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>
          </div>
        </div>

        {/* Footer / User Area (Optional) */}
        <div className="p-4 border-t border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md">
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-sm text-[var(--glass-text-muted)] hover:text-[var(--glass-text-primary)] hover:border-[var(--glass-border-hover)] transition-all"
          >
            <span>🔍</span>
            <span className="flex-1 text-left">Buscar...</span>
            <kbd className="px-1.5 py-0.5 text-xs bg-white/5 rounded border border-white/10">⌘K</kbd>
          </button>
        </div>
      </aside>
    </>
  );
}
