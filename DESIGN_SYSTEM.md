# Rubi-Notes Design System & Identidade Visual

## Visão Geral

O Rubi-Notes é um database completo para o jogo Tibia/Rubinot, focado em ajudar jogadores a progredir. A identidade visual deve refletir:

- **Profissionalidade** - Informação precisa e confiável
- **Modernidade** - Design atual e funcional
- **Acessibilidade** - Fácil de usar e entender
- **Imersão** - Tema de fantasia/gaming

## Paleta de Cores

### Primárias (Branding)

| Nome | HEX | CSS Var | Uso |
|------|-----|----------|-----|
| Ruby Red | `#E63946` | `--color-primary` | Brand, CTAs, highlights |
| Deep Purple | `#8B5CF6` | `--color-secondary` | Secondary actions, links |
| Slate Dark | `#1E1E2E` | `--bg-primary` | Backgrounds principais |
| Slate Light | `#2A2A3E` | `--bg-secondary` | Cards, secundário |
| Slate Accent | `#4A4A5A` | `--bg-tertiary` | Acentos, inputs |

### Semânticas (Funcionais)

| Nome | HEX | CSS Var | Uso |
|------|-----|----------|-----|
| Success Green | `#22C55E` | `--color-success` | Success, positive |
| Warning Amber | `#F59E0B` | `--color-warning` | Warning, attention |
| Error Red | `#EF4444` | `--color-error` | Error, destructive |
| Info Blue | `#3B82F6` | `--color-info` | Informational |

### Tier Colors (Vocação/Ranking)

| Tier | HEX | Gradient | Uso |
|------|-----|----------|-----|
| S (Essencial) | `#EF4444` → `#DC2626` | Red gradient | Bosses/quests S-tier |
| A | `#F59E0B` → `#D97706` | Amber gradient | High priority |
| B | `#3B82F6` → `#2563EB` | Blue gradient | Mid priority |
| C | `#6B7280` → `#57525E` | Gray gradient | Low priority |

### Rarity Colors

| Rarity | HEX | Badge Style |
|--------|-----|-------------|
| Common | `#9CA3AF` | Gray badge |
| Uncommon | `#60A5FA` | Blue badge |
| Rare | `#A78BFA` | Purple badge |
| Very Rare | `#F472B6` | Pink badge |
| Exclusive | `#F59E0B` | Gold badge with glow |

## Tipografia

### Fontes

```css
/* Primary Font */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace (code, coordinates) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Heading Font (opcional - fantasy theme) */
--font-display: 'Cinzel', 'UnifrakturMaguntia', serif;
```

### Hierarchy

| Elemento | Size | Weight | Line Height |
|-----------|------|--------|-------------|
| H1 (Page Title) | 48px | 700 | 1.2 |
| H2 (Section Title) | 32px | 600 | 1.3 |
| H3 (Card Title) | 24px | 600 | 1.4 |
| H4 (Subtitle) | 20px | 500 | 1.5 |
| Body | 16px | 400 | 1.6 |
| Small (Caption) | 14px | 400 | 1.6 |
| X-Small (Label) | 12px | 500 | 1.5 |

## Espaçamentos

### Scale (8px base)

| Token | Value | Uso |
|-------|-------|-----|
| `--spacing-1` | 4px | Smallest gaps |
| `--spacing-2` | 8px | Small gaps |
| `--spacing-3` | 12px | Medium gaps |
| `--spacing-4` | 16px | Default padding |
| `--spacing-5` | 20px | Large padding |
| `--spacing-6` | 24px | XL padding |
| `--spacing-8` | 32px | XXL padding |
| `--spacing-10` | 40px | Section spacing |
| `--spacing-12` | 48px | Large section spacing |

## Border Radius

| Token | Value | Uso |
|-------|-------|-----|
| `--radius-sm` | 4px | Tags, badges |
| `--radius-md` | 8px | Cards, buttons |
| `--radius-lg` | 12px | Large cards |
| `--radius-xl` | 16px | Modals, dropdowns |
| `--radius-2xl` | 24px | Hero sections |

## Shadows

| Token | Value | Use Case |
|-------|-------|-----------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.08)` | Small elements |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.12)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.15)` | Large cards |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.18)` | Modals |
| `--shadow-glow` | `0 0 20px rgba(230,57,70,0.3)` | Highlights, CTAs |

## Gradientes

### Brand Gradients

```css
--gradient-primary: linear-gradient(135deg, #E63946 0%, #DC2626 100%);
--gradient-secondary: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
--gradient-dark: linear-gradient(180deg, #1E1E2E 0%, #0D0D12 100%);
```

### Feature Gradients

```css
--gradient-hunts: linear-gradient(135deg, #E63946 0%, #9B59B6 100%);
--gradient-bosses: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
--gradient-quests: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
--gradient-creatures: linear-gradient(135deg, #22C55E 0%, #10B981 100%);
```

### Glassmorphism

```css
--glass-bg: rgba(42, 42, 58, 0.7);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: 12px;

/* Application */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}
```

## Componentes

### Card Pattern

```tsx
<div className="card-glow">
  {/* Card com glow sutil e hover elevation */}
  <div className="bg-[var(--bg-secondary)] border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 hover:shadow-lg transition-all">
    <h3 className="text-xl font-bold text-[var(--text-primary)]">Title</h3>
    <p className="text-[var(--text-muted)] mt-2">Content</p>
  </div>
</div>
```

### Button Pattern

```tsx
/* Primary Button */
<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all">
  Primary Action
</button>

/* Secondary Button */
<button className="bg-[var(--bg-tertiary)] border border-gray-700 text-[var(--text-primary)] px-6 py-3 rounded-lg font-semibold hover:border-purple-500/50 hover:text-purple-400 transition-all">
  Secondary Action
</button>
```

### Badge Pattern

```tsx
{/* Tier Badge */}
<span className="px-3 py-1 rounded-md text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
  S-Tier
</span>

{/* Rarity Badge */}
<span className="px-3 py-1 rounded-md text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
  Rare
</span>
```

### Input Pattern

```tsx
<input
  type="text"
  className="w-full bg-[var(--bg-tertiary)] border border-gray-700 rounded-lg px-4 py-3 text-[var(--text-primary)] placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
  placeholder="Buscar..."
/>
```

## Page Layouts

### Default Layout

```tsx
<div className="min-h-screen bg-[var(--bg-primary)]">
  {/* Navbar - Sticky */}
  <nav className="sticky top-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-gray-800">
    {/* Navigation */}
  </nav>

  {/* Main Content */}
  <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Page Content */}
  </main>

  {/* Footer */}
  <footer className="border-t border-gray-800 mt-16">
    {/* Footer Content */}
  </footer>
</div>
```

### Content Layout (Two Columns)

```tsx
<div className="grid lg:grid-cols-3 gap-8">
  {/* Main Content (2/3) */}
  <div className="lg:col-span-2 space-y-6">
    {/* Cards, Sections */}
  </div>

  {/* Sidebar (1/3) */}
  <div className="space-y-6">
    {/* Filters, Related Content */}
  </div>
</div>
```

## Animations

### Micro-interactions

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.3s ease-out; }

/* Scale on Hover */
.scale-on-hover {
  transition: transform 0.2s ease;
}
.scale-on-hover:hover {
  transform: scale(1.02);
}

/* Glow Pulse */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(230,57,70,0.1); }
  50% { box-shadow: 0 0 30px rgba(230,57,70,0.3); }
}
.glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
```

## Accessibility

### Contrast Requirements

- **Text on Dark Background**: WCAG AA (4.5:1 contrast ratio)
- **Interactive Elements**: Minimum 44x44px touch target
- **Focus States**: Always visible (outline or ring)
- **Color Independence**: Not rely on color alone

### Focus Styles

```css
/* Default Focus */
*:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}

/* Custom Focus Ring */
.focus-ring {
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.3);
}
```

## Responsive Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;

/* Usage */
@media (min-width: var(--breakpoint-md)) {
  /* Tablet+ styles */
}
```

## Icons & Assets

### Icon System

Use **Emojis** + **Lucide Icons**:

| Categoria | Emojis | Lucide Icons |
|-----------|---------|--------------|
| Hunts | ⚔️, 🗡️, 💀 | Sword, Skull, Target |
| Bosses | ☠️, 👹, 💀 | Ghost, SkullCrossbones |
| Quests | 📜, 🎯, 🏆 | Scroll, Target, Trophy |
| Creatures | 👹, 🐲, 🐉 | Ghost, Dragon, Demon |
| Tools | 🧮, 📊, 🔧 | Calculator, BarChart2, Settings |
| Navigation | 🏠, 🔍, ⚙️ | Home, Search, Settings |

### SVG Patterns

```tsx
/* Gradient SVG for Icons */
<svg className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
  {/* Icon content */}
</svg>

/* Gradient Text */
<p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Gradient Text
</p>
```

## Theme Variations

### Default (Dark Fantasy)

```css
--bg-primary: #1E1E2E;
--bg-secondary: #2A2A3E;
--text-primary: #F1F5F9;
--text-muted: #9CA3AF;
```

### Light Mode (Future)

```css
--bg-primary: #F8FAFC;
--bg-secondary: #FFFFFF;
--text-primary: #1E293B;
--text-muted: #64748B;
```

## Implementation

### Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
      },
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        // ... etc
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        // ... etc
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        // ... etc
      },
    },
  },
}
```

### CSS Variables (globals.css)

```css
:root {
  /* Colors */
  --color-primary: #E63946;
  --color-secondary: #8B5CF6;
  --bg-primary: #1E1E2E;
  --bg-secondary: #2A2A3E;
  --text-primary: #F1F5F9;
  --text-muted: #9CA3AF;

  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  /* ... etc */

  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Effects */
  --radius-md: 8px;
  --shadow-md: 0 4px 6px rgba(0,0,0,0.12);
}
```

## Guidelines

### Dos

✅ **Use gradients consistentemente** para elementos importantes
✅ **Mantenha contraste adequado** para leitura
✅ **Use glassmorphism** para overlays e modais
✅ **Animações sutis** (0.2-0.3s) para hover effects
✅ **Micro-interactions** para feedback visual
✅ **Responsive first** - mobile a desktop
✅ **Accessibility** sempre em mente
✅ **Consistência** em todos os componentes

### Don'ts

❌ **Não use gradientes excessivos** - seja moderado
❌ **Não sacrifique legibilidade** por estética
❌ **Não ignore mobile** - test em todos os breakpoints
❌ **Não use animações longas** (max 0.5s)
❌ **Não hardcode valores** - use CSS variables
❌ **Não quebre padrões existentes** sem motivo

## Roadmap

### Fase 1 - Foundation (Implementado)
- [x] Base color palette
- [x] Typography system
- [x] Spacing scale
- [x] Component patterns
- [x] Dark theme

### Fase 2 - Refinamento (A fazer)
- [ ] Aplicar em todos os componentes
- [ ] Criar componentes reutilizáveis em `/components/ui/`
- [ ] Adicionar animações consistentes
- [ ] Melhorar a11y

### Fase 3 - Extensão (Futuro)
- [ ] Light mode support
- [ ] Custom themes
- [ ] Motion preferences (reduced motion)
- [ ] Sistema de componentes documentado

---

*Design System criado por Iris - 2026-02-05*
