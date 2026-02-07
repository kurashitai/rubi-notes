"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const mainNavItems: NavItem[] = [
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const openMenu = () => {
    setMobileMenuOpen(true);
    setIsClosing(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-900/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                <span className="text-xl">💎</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gradient">RUBI-NOTES</h1>
                <p className="text-xs text-[var(--text-muted)]">Knight Club Guide</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Main Nav */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "text-purple-400 bg-purple-500/20"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10"
                  }`}
                >
                  <span className="mr-1.5">{item.icon}</span>
                  {item.label}
                </Link>
              ))}

              {/* Separator */}
              <div className="h-6 w-px bg-purple-500/20 mx-2" />

              {/* Secondary Nav */}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "text-purple-400 bg-purple-500/20"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10"
                  }`}
                >
                  <span className="mr-1.5">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search Button (Desktop) */}
              <button
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-purple-500/20 text-sm text-[var(--text-secondary)] hover:border-purple-500/40 hover:text-[var(--text-primary)] transition-all"
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }))}
              >
                <span>🔍</span>
                <span>Buscar...</span>
                <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-purple-500/10 border border-purple-500/20 rounded">⌘K</kbd>
              </button>

              {/* Mobile Search */}
              <button
                className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10 transition-all"
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }))}
              >
                🔍
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10 transition-all"
                onClick={() => mobileMenuOpen ? closeMenu() : openMenu()}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  {/* Hamburger to X animation */}
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "top-3 rotate-45" : "top-1.5 rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "top-3 -rotate-45" : "top-[18px] rotate-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            className={`absolute top-16 left-0 right-0 bg-[var(--bg-secondary)] border-b border-purple-500/20 shadow-xl transform transition-all duration-200 ${
              isClosing ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {/* Main Section Label */}
                <p className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  Principal
                </p>
                
                {/* Main Nav */}
                {mainNavItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all transform ${
                      isActive(item.href)
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10"
                    }`}
                    onClick={closeMenu}
                    style={{
                      animationDelay: `${index * 30}ms`,
                    }}
                  >
                    <span className="text-lg w-6 text-center">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {isActive(item.href) && (
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                    )}
                  </Link>
                ))}

                {/* Secondary Section Label */}
                <p className="px-4 py-2 mt-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  Mais
                </p>

                {/* Secondary Nav */}
                {secondaryNavItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10"
                    }`}
                    onClick={closeMenu}
                    style={{
                      animationDelay: `${(mainNavItems.length + index) * 30}ms`,
                    }}
                  >
                    <span className="text-lg w-6 text-center">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {isActive(item.href) && (
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t border-purple-500/20">
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10 transition-all"
                  onClick={() => {
                    closeMenu();
                    setTimeout(() => {
                      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
                    }, 250);
                  }}
                >
                  <span className="text-lg w-6 text-center">🔍</span>
                  <span className="flex-1">Buscar</span>
                  <kbd className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded">⌘K</kbd>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
