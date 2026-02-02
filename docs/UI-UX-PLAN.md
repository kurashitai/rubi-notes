# Plano de UI/UX - Tibia Rubinot Guide MVP

## 1. Visão Geral

### Objetivo
Criar um site/app web moderno, bonito e funcional para servir como guia de progressão para jogadores de Tibia no servidor Rubinot.

### Público-Alvo
- Jogador iniciante/intermediário de Tibia
- Foco em Knight (Club) Solo
- Servidor Rubinot (13.30 Retro-PVP)

### Princípios de Design
1. **Dark Mode First** - Jogadores de Tibia preferem temas escuros
2. **Mobile Responsive** - Consulta rápida durante o jogo
3. **Acesso Rápido** - Encontrar informação em < 3 cliques
4. **Visual Gaming** - Estética que remete a RPGs/Tibia

---

## 2. Arquitetura de Informação

### Estrutura de Navegação

```
📱 Home
├── 🗡️ Hunts
│   ├── Por Level (20-50, 50-100, 100-200, 200-300, 300-400, 400-500)
│   ├── Por Profit
│   ├── Por Exp/h
│   └── Tier List
├── ⚔️ Equipamentos
│   ├── Armas de Club
│   ├── Armaduras
│   └── Por Level Range
├── 💎 Imbuements
│   ├── Elementais
│   ├── Leech
│   └── Por Hunt
├── 🎯 Quests
│   ├── Acesso a Hunts
│   └── Checklist
├── 👹 Bosses
│   ├── Diários
│   └── Rota Otimizada
├── ⭐ Extras
│   ├── Charm Points
│   ├── Prey System
│   └── Profit Guide
└── ⚙️ Configurações
    └── Tema (Dark/Light)
```

---

## 3. Wireframes

### 3.1 Home Page

```
┌─────────────────────────────────────────┐
│  🏰 RUBINOT GUIDE                  ☰   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │  🗡️    │ │  ⚔️    │ │  💎    │   │
│  │ HUNTS   │ │ EQUIPS  │ │ IMBUES  │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │  🎯    │ │  👹    │ │  ⭐    │   │
│  │ QUESTS  │ │ BOSSES  │ │ EXTRAS  │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🔍 Buscar hunt, boss, item...   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  📊 Quick Stats                         │
│  ┌─────────────────────────────────┐   │
│  │ Seu Level: [___] Calcular →     │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### 3.2 Lista de Hunts

```
┌─────────────────────────────────────────┐
│  ← HUNTS                          ☰    │
├─────────────────────────────────────────┤
│  Filtros: [Level ▼] [Profit ▼] [Exp ▼] │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🏆 S-TIER                       │   │
│  ├─────────────────────────────────┤   │
│  │ 💀 Weretigers        400+      │   │
│  │    5kk exp/h | 900k profit     │   │
│  ├─────────────────────────────────┤   │
│  │ 🐍 Cobra Bastion     300+      │   │
│  │    2kk exp/h | 500k profit     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🥈 A-TIER                       │   │
│  ├─────────────────────────────────┤   │
│  │ 🦎 Draken Walls      200+      │   │
│  │    1.5kk exp/h | 300k profit   │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### 3.3 Detalhe de Hunt

```
┌─────────────────────────────────────────┐
│  ← WERETIGERS                     ⭐   │
├─────────────────────────────────────────┤
│                                         │
│  📍 Localização: Oskayaat              │
│  📊 Level: 400+                        │
│  💰 Profit: 900k+/h                    │
│  ⚡ Exp: 5.1kk+/h                      │
│  🔓 Acesso: Paradise Lost Quest        │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🔥 FRAQUEZAS                    │   │
│  ├─────────────────────────────────┤   │
│  │ Death   ████████████████  +25%  │   │
│  │ Holy    ███████████       +15%  │   │
│  │ Earth   ████              +5%   │   │
│  │ Fire    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  -60%  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ⚔️ ARMA RECOMENDADA                   │
│  ┌─────────────────────────────────┐   │
│  │ 💀 Mortal Mace (220)            │   │
│  │    Death +5 | Atk 52            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  💎 IMBUEMENTS                         │
│  • Vampirism (Life Leech)              │
│  • Fire Protection                      │
│                                         │
│  📋 ESTRATÉGIA                         │
│  Cuidado! Weretigers são muito fortes. │
│  Use Death weapon, Fire protection...  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. Design System

### 4.1 Cores

```css
/* Dark Theme (Principal) */
--bg-primary: #0a0a0f;      /* Fundo principal */
--bg-secondary: #14141f;    /* Cards */
--bg-tertiary: #1e1e2e;     /* Hover/Active */
--text-primary: #e4e4e7;    /* Texto principal */
--text-secondary: #a1a1aa;  /* Texto secundário */
--accent-primary: #8b5cf6;  /* Roxo (ações) */
--accent-gold: #fbbf24;     /* Dourado (destaque) */
--accent-green: #22c55e;    /* Verde (positivo) */
--accent-red: #ef4444;      /* Vermelho (negativo) */
--accent-blue: #3b82f6;     /* Azul (info) */

/* Elementos */
--fire: #f97316;
--ice: #38bdf8;
--earth: #84cc16;
--energy: #a855f7;
--death: #6b7280;
--holy: #fef08a;
```

### 4.2 Tipografia

```css
--font-primary: 'Inter', sans-serif;
--font-display: 'Cinzel', serif;  /* Para títulos gaming */

--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
```

### 4.3 Componentes

#### Cards
- Border radius: 12px
- Sombra sutil
- Hover com brilho dourado
- Glassmorphism leve

#### Botões
- Primary: Roxo com gradiente
- Secondary: Outline branco
- Estados: hover, active, disabled

#### Tags/Badges
- Tier: S (dourado), A (prateado), B (bronze)
- Elementos: cor correspondente
- Level range: gradiente

---

## 5. Funcionalidades MVP

### Essenciais (v1.0)
- [x] Lista de Hunts por level
- [x] Detalhe de Hunt com fraquezas
- [x] Lista de Armas
- [x] Recomendação de arma por hunt
- [x] Dark mode
- [x] Responsivo mobile

### Futuras (v1.1+)
- [ ] Calculadora de exp/profit
- [ ] Filtros avançados
- [ ] Favoritos
- [ ] Busca
- [ ] Checklist de quests
- [ ] Timer de imbuements

---

## 6. Tecnologias

### Frontend
- **Framework:** React ou Next.js
- **Styling:** Tailwind CSS
- **Icons:** Lucide React ou Heroicons
- **Animações:** Framer Motion (opcional)

### Dados
- JSON estático (já temos: `knight-club-guide.json`)
- Sem backend necessário para MVP

### Deploy
- Vercel ou Netlify (grátis)
- GitHub Pages (alternativa)

---

## 7. Estrutura de Arquivos

```
rubinot-guide/
├── public/
│   └── data/
│       └── knight-club-guide.json
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── HuntCard/
│   │   ├── WeaponCard/
│   │   └── ...
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── hunts/
│   │   ├── weapons/
│   │   └── ...
│   ├── styles/
│   │   └── globals.css
│   └── data/
│       └── types.ts
├── package.json
└── tailwind.config.js
```

---

## 8. Próximos Passos

1. ✅ Criar plano de UI/UX
2. [ ] Iniciar projeto Next.js
3. [ ] Implementar design system
4. [ ] Criar componentes base
5. [ ] Implementar páginas
6. [ ] Integrar dados JSON
7. [ ] Deploy

---

*Plano criado: 2026-02-02*
*Versão: 1.0*
