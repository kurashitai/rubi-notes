import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "tier-s" | "tier-a" | "tier-b" | "tier-c" | "success" | "warning" | "error" | "info" | "default"
  size?: "sm" | "md" | "lg"
}

export function Badge({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-bold"

  const variantStyles = {
    "tier-s": "bg-gradient-to-br from-amber-400 to-amber-500 text-black",
    "tier-a": "bg-gradient-to-br from-slate-300 to-slate-400 text-black",
    "tier-b": "bg-gradient-to-br from-orange-600 to-amber-600 text-white",
    "tier-c": "bg-gradient-to-br from-gray-500 to-gray-600 text-white",
    "success": "bg-green-500/20 text-green-400 border border-green-500/30",
    "warning": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    "error": "bg-red-500/20 text-red-400 border border-red-500/30",
    "info": "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    "default": "bg-purple-500/20 text-purple-400 border border-purple-500/30"
  }

  const sizeStyles = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-0.5 text-sm",
    lg: "px-3 py-1 text-base"
  }

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

// Badge de Tier específico para Tibia/Rubinot
export function TierBadge({
  tier,
  className = "",
  ...props
}: { tier: "S" | "A" | "B" | "C" } & Omit<BadgeProps, "variant">) {
  const variantMap = {
    S: "tier-s" as const,
    A: "tier-a" as const,
    B: "tier-b" as const,
    C: "tier-c" as const
  }

  return (
    <Badge variant={variantMap[tier]} className={className} {...props}>
      {tier}
    </Badge>
  )
}

// Badge de Elemento (Tibia)
export function ElementBadge({
  element,
  value,
  className = "",
  ...props
}: { element: string; value?: number } & Omit<BadgeProps, "variant">) {
  const elementColors: Record<string, string> = {
    fire: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    ice: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    earth: "bg-green-500/20 text-green-400 border border-green-500/30",
    energy: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    death: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
    holy: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    physical: "bg-slate-500/20 text-slate-400 border border-slate-500/30"
  }

  const color = elementColors[element.toLowerCase()] || elementColors.physical

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md font-semibold px-2 py-0.5 text-xs ${color} ${className}`}
      {...props}
    >
      {element} {value !== undefined && `${value > 0 ? "+" : ""}${value}%`}
    </span>
  )
}
