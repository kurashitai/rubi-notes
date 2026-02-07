import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline"
  noPadding?: boolean
}

export function Card({
  children,
  variant = "default",
  noPadding = false,
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-xl border transition-all duration-200"

  const variantStyles = {
    default: "bg-[var(--bg-secondary)] border-purple-500/20 hover:border-purple-500/40",
    elevated: "bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border-purple-500/30 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1",
    outline: "bg-transparent border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/5"
  }

  const paddingStyles = noPadding ? "" : "p-6"

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 flex items-start justify-between ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-bold text-[var(--text-primary)] ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-[var(--text-secondary)] ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-6 flex items-center justify-end gap-3 ${className}`} {...props}>
      {children}
    </div>
  )
}
