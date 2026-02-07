import React from 'react';
import { designTokens } from '@/styles/design-tokens';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: designTokens.colors.glass.bg,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${designTokens.colors.glass.border}`,
        borderRadius: designTokens.borderRadius.lg,
        boxShadow: hover ? designTokens.shadows.cardHover : designTokens.shadows.card,
        transition: `all ${designTokens.effects.transition.base}`,
        padding: designTokens.spacing.lg,
      }}
      className={`glass-card ${hover ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export function GlassButton({ children, variant = 'primary', onClick, className = '' }: GlassButtonProps) {
  const getStyles = () => {
    const base = {
      border: `1px solid ${designTokens.borders.button}`,
      borderRadius: designTokens.borderRadius.base,
      fontWeight: designTokens.typography.fontWeight.medium,
      padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
      transition: `all ${designTokens.effects.transition.fast}`,
      cursor: 'pointer',
      fontFamily: designTokens.typography.fontFamily.sans.join(", "),
      backdropFilter: 'blur(8px)',
    };

    const variants = {
      primary: {
        background: designTokens.colors.primary[500],
        color: '#ffffff',
        boxShadow: designTokens.shadows.button,
        '&:hover': {
          boxShadow: designTokens.shadows.buttonHover,
          background: designTokens.colors.primary[600],
          transform: 'translateY(-1px)',
        },
      },
      secondary: {
        background: designTokens.colors.glass.bg,
        color: designTokens.colors.text.primary,
        boxShadow: designTokens.shadows.glass,
        '&:hover': {
          boxShadow: designTokens.shadows.glassLight,
        },
      },
      outline: {
        background: 'transparent',
        color: designTokens.colors.primary[500],
        boxShadow: 'none',
        '&:hover': {
          boxShadow: designTokens.shadows.input,
          background: designTokens.colors.glass.bgDark,
        },
      },
    };

    return { ...base, ...variants[variant] };
  };

  return (
    <button
      onClick={onClick}
      style={getStyles()}
      className={`glass-button ${className}`}
    >
      {children}
    </button>
  );
}

interface GlassInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function GlassInput({ placeholder, type = 'text', value, onChange, className = '' }: GlassInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        background: designTokens.colors.glass.bgDark,
        backdropFilter: `blur(${designTokens.effects.blur.lg})`,
        border: designTokens.borders.input,
        borderRadius: designTokens.borderRadius.base,
        boxShadow: designTokens.shadows.input,
        color: designTokens.colors.text.primary,
        padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
        fontSize: designTokens.typography.fontSize.base,
        fontFamily: designTokens.typography.fontFamily.sans.join(", "),
        transition: `all ${designTokens.effects.transition.fast}`,
        outline: 'none',
      }}
      className={`glass-input ${className}`}
    />
  );
}

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export function GlassBadge({ children, variant = 'primary', className = '' }: GlassBadgeProps) {
  const getColors = () => {
    const variants = {
      primary: { bg: designTokens.colors.primary[500], text: '#ffffff' },
      secondary: { bg: designTokens.colors.secondary[500], text: '#ffffff' },
      success: { bg: designTokens.colors.status.success, text: '#ffffff' },
      warning: { bg: designTokens.colors.status.warning, text: '#000000' },
      error: { bg: designTokens.colors.status.error, text: '#ffffff' },
      info: { bg: designTokens.colors.status.info, text: '#ffffff' },
    };

    return variants[variant] || variants.primary;
  };

  const colors = getColors();

  return (
    <span
      style={{
        background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg} 100%)`,
        backdropFilter: 'blur(8px)',
        color: colors.text,
        padding: `${designTokens.spacing.xs} ${designTokens.spacing.sm}`,
        borderRadius: designTokens.borderRadius.sm,
        fontSize: designTokens.typography.fontSize.xs,
        fontWeight: designTokens.typography.fontWeight.semibold,
        fontFamily: designTokens.typography.fontFamily.sans.join(", "),
        boxShadow: designTokens.shadows.glass,
        border: `1px solid ${designTokens.colors.glass.borderDark}`,
      }}
      className={`glass-badge ${className}`}
    >
      {children}
    </span>
  );
}
