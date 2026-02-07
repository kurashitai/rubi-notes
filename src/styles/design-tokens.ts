// Design System Tokens - Rubi-Notes
// Estilo: Glassmorphism
// Cores, gradientes, sombras, bordas, tipografia

export const designTokens = {
  // Cores principais (Glassmorphism)
  colors: {
    primary: {
      50: '#f0f9ff',  // Background muito claro
      100: '#e0f2fe',  // Acento claro
      200: '#bae6fd',  // Acento médio
      300: '#7dd3fc',  // Acento forte
      400: '#38bdf8',  // Acento vibrante
      500: '#0ea5e9',  // Acento principal
      600: '#0284c7',  // Hover
      700: '#0369a1',  // Ativo
      800: '#075985',  // Pressionado
      900: '#0c4a6e',  // Fundo escuro
    },
    secondary: {
      50: '#faf5ff',  // Roxo muito claro
      100: '#f3e8ff',  // Roxo claro
      200: '#e9d5ff',  // Roxo médio
      300: '#d8b4fe',  // Roxo forte
      400: '#c084fc',  // Roxo vibrante
      500: '#a855f7',  // Roxo principal
      600: '#9333ea',  // Hover
      700: '#7e22ce',  // Ativo
      800: '#6b21a8',  // Pressionado
      900: '#581c87',  // Fundo escuro
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.15)',  // Fundo translúcido
      bgDark: 'rgba(15, 23, 42, 0.4)',    // Fundo escuro translúcido
      border: 'rgba(255, 255, 255, 0.2)', // Borda glass
      borderDark: 'rgba(255, 255, 255, 0.1)', // Borda glass escura
      shadow: 'rgba(0, 0, 0, 0.1)',        // Sombra
      backdrop: 'rgba(255, 255, 255, 0.05)', // Backdrop blur
    },
    text: {
      primary: '#f8fafc',     // Texto principal
      secondary: '#94a3b8',   // Texto secundário
      muted: '#64748b',       // Texto mutado
      inverse: '#0f172a',     // Texto invertido
    },
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    vocations: {
      knight: '#ef4444',     // Vermelho
      sorcerer: '#a855f7',   // Roxo
      druid: '#10b981',     // Verde
      paladin: '#3b82f6',   // Azul
      elite: '#fbbf24',       // Laranja (Elite Knight)
    },
  },

  // Gradientes
  gradients: {
    primary: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    secondary: 'linear-gradient(135deg, #c084fc 0%, #e879f9 100%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
    glassDark: 'linear-gradient(135deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.1) 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Sombras
  shadows: {
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    glassLight: '0 4px 16px 0 rgba(255, 255, 255, 0.1)',
    card: '0 10px 40px rgba(0, 0, 0, 0.1)',
    cardHover: '0 20px 40px rgba(0, 0, 0, 0.15)',
    input: '0 0 0 2px rgba(0, 0, 0, 0.1)',
    button: '0 4px 12px rgba(59, 130, 246, 0.5)',
    buttonHover: '0 8px 16px rgba(59, 130, 246, 0.7)',
  },

  // Bordas
  borders: {
    glass: '1px solid rgba(255, 255, 255, 0.2)',
    glassDark: '1px solid rgba(255, 255, 255, 0.1)',
    input: '1px solid rgba(255, 255, 255, 0.2)',
    button: '1px solid rgba(255, 255, 255, 0.3)',
  },

  // Tipografia
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  // Espaçamento
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },

  // Efeitos
  effects: {
    blur: {
      sm: '2px',
      md: '4px',
      lg: '8px',
      xl: '16px',
    },
    transition: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
    },
  },
} as const;

export type DesignTokens = typeof designTokens;
