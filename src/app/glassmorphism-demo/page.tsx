"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function GlassmorphismDemo() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [hoverBtn, setHoverBtn] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--glass-rubi-primary)]/5 via-transparent to-[var(--glass-accent-glow)]/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(93, 44, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(143, 45, 86, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Glassmorphism Demo" }
        ]} />

        {/* Header */}
        <div className="mb-12 mt-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--glass-rubi-primary)] via-[var(--glass-accent-glow)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">
              Glassmorphism
            </span>
            <span className="text-[var(--glass-text-primary)]"> Design</span>
          </h1>
          <p className="text-[var(--glass-text-secondary)] text-lg max-w-2xl mx-auto">
            Nova identidade visual com transparências, blur, bordas sutis e gradients elegantes
          </p>
        </div>

        {/* Design Tokens */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--glass-text-primary)] mb-8 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            Design Tokens
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Colors */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Cores Primárias</h3>
              <div className="space-y-3">
                {[
                  { name: 'Rubi Primary', value: 'var(--glass-rubi-primary)', color: '#8F2D56' },
                  { name: 'Rubi Secondary', value: 'var(--glass-rubi-secondary)', color: '#B23A6D' },
                  { name: 'Blue Night', value: 'var(--glass-blue-night)', color: '#0B1020' },
                  { name: 'Accent Glow', value: 'var(--glass-accent-glow)', color: '#5D2CFF' },
                ].map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg shadow-lg"
                      style={{ backgroundColor: color.color }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[var(--glass-text-primary)]">{color.name}</div>
                      <div className="text-xs text-[var(--glass-text-muted)]">{color.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Radius */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Border Radius</h3>
              <div className="space-y-4">
                {[
                  { name: 'Glass MD', value: '12px', radius: 'var(--radius-glass-md)' },
                  { name: 'Glass LG', value: '18px', radius: 'var(--radius-glass-lg)' },
                  { name: 'Glass XL', value: '24px', radius: 'var(--radius-glass-xl)' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 bg-[var(--glass-rubi-primary)]/20 border border-[var(--glass-border)]"
                      style={{ borderRadius: item.radius }}
                    />
                    <div>
                      <div className="text-sm font-medium text-[var(--glass-text-primary)]">{item.name}</div>
                      <div className="text-xs text-[var(--glass-text-muted)]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blur */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Backdrop Blur</h3>
              <div className="space-y-4">
                {[
                  { name: 'Small', value: '8px', blur: 'var(--glass-blur-sm)' },
                  { name: 'Medium', value: '14px', blur: 'var(--glass-blur-md)' },
                  { name: 'Large', value: '22px', blur: 'var(--glass-blur-lg)' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="text-sm font-medium text-[var(--glass-text-primary)] mb-2">{item.name}</div>
                    <div
                      className="h-12 rounded-lg flex items-center justify-center text-xs text-[var(--glass-text-muted)] border border-[var(--glass-border)]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: item.blur,
                        WebkitBackdropFilter: item.blur
                      }}
                    >
                      Blur: {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Glass Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--glass-text-primary)] mb-8 flex items-center gap-3">
            <span className="text-4xl">🧊</span>
            Glass Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Glass Card */}
            <div
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                activeCard === 'card' ? 'scale-105 border-[var(--glass-rubi-primary)]' : ''
              }`}
              onClick={() => setActiveCard(activeCard === 'card' ? null : 'card')}
            >
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-2">Glass Card</h3>
              <p className="text-[var(--glass-text-secondary)] text-sm mb-4">
                Card com background translúcido e blur
              </p>
              <div className="flex gap-2">
                <span className="glass-badge">Default</span>
                <span className="glass-badge border-[var(--glass-rubi-primary)]/50">Hover</span>
              </div>
            </div>

            {/* Glass Panel */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-2">Glass Panel</h3>
              <p className="text-[var(--glass-text-secondary)] text-sm mb-4">
                Panel para sidebar e filtros
              </p>
              <div className="flex gap-2">
                <span className="glass-badge">Sidebar</span>
                <span className="glass-badge">Filters</span>
              </div>
            </div>

            {/* Glass Buttons */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Glass Buttons</h3>
              <div className="space-y-3">
                <button
                  className="glass-btn w-full py-2 px-4 text-sm"
                  onMouseEnter={() => setHoverBtn('default')}
                  onMouseLeave={() => setHoverBtn(null)}
                >
                  Default Button
                </button>
                <button
                  className="glass-btn-primary w-full py-2 px-4 text-sm"
                  onMouseEnter={() => setHoverBtn('primary')}
                  onMouseLeave={() => setHoverBtn(null)}
                >
                  Primary Button
                </button>
              </div>
              <p className="text-xs text-[var(--glass-text-muted)] mt-3">
                Hover: {hoverBtn || 'none'}
              </p>
            </div>

            {/* Glass Input */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Glass Input</h3>
              <input
                type="text"
                placeholder="Search..."
                className="glass-input w-full py-2 px-4 text-sm"
              />
              <p className="text-xs text-[var(--glass-text-muted)] mt-3">
                Focus ring with glass glow
              </p>
            </div>

            {/* Badges */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-4">Glass Badges</h3>
              <div className="flex flex-wrap gap-2">
                <span className="glass-badge">🔥 Fire</span>
                <span className="glass-badge">❄️ Ice</span>
                <span className="glass-badge">⚡ Energy</span>
                <span className="glass-badge">💀 Death</span>
                <span className="glass-badge">✨ Holy</span>
                <span className="glass-badge">🪨 Earth</span>
              </div>
            </div>

            {/* Gradient Text */}
            <div className="glass-card p-6 flex items-center justify-center text-center">
              <div>
                <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-2">Gradient Text</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-[var(--glass-rubi-primary)] via-[var(--glass-accent-glow)] to-[var(--glass-rubi-secondary)] bg-clip-text text-transparent">
                  Rubi-Notes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Texture Overlay */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--glass-text-primary)] mb-8 flex items-center gap-3">
            <span className="text-4xl">✨</span>
            Texture Overlay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* With Texture */}
            <div className="glass-card glass-texture p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-2">With Texture</h3>
              <p className="text-[var(--glass-text-secondary)] text-sm">
                Subtle gradient overlay with pattern
              </p>
            </div>

            {/* Without Texture */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-[var(--glass-text-primary)] mb-2">Without Texture</h3>
              <p className="text-[var(--glass-text-secondary)] text-sm">
                Clean glass without overlay
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 glass-btn-primary py-3 px-6 text-sm font-medium hover:scale-105 transition-transform"
          >
            <span>←</span>
            <span>Voltar para Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
