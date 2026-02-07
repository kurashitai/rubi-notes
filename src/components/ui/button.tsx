import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  icon?: React.ReactNode
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5",
    secondary: "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:text-purple-300",
    outline: "border-2 border-purple-500/30 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10",
    ghost: "text-purple-400 hover:bg-purple-500/10 hover:text-purple-300",
    destructive: "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300"
  }

  const sizeStyles = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg"
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12c0 4.311-3.689 8-8 8V0H6v8h0zm-2 5.291V12H4v8h4zm0-2H2v2h6v-4h6zm6-6H6v4h6V8h4z"></path>
          </svg>
          Carregando...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  )
}
