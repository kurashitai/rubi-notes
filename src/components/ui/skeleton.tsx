import * as React from "react"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "pulse" | "shimmer" | "none"
}

export function Skeleton({
  className = "",
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const animationStyles = {
    pulse: "animate-pulse",
    shimmer: "animate-shimmer",
    none: ""
  }

  return (
    <div
      className={`bg-purple-500/10 rounded-md ${animationStyles[animation]} ${className}`}
      {...props}
    />
  )
}

// Variantes pré-configuradas
export function SkeletonText({
  lines = 1,
  className = "",
  ...props
}: { lines?: number } & SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({
  className = "",
  ...props
}: SkeletonProps) {
  return (
    <div className={`p-6 rounded-xl border border-purple-500/20 bg-[var(--bg-secondary)] ${className}`} {...props}>
      <div className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-8 w-16 rounded-md" />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="mt-4">
        <Skeleton className="h-2 w-full rounded-full" />
      </div>
    </div>
  )
}

export function SkeletonAvatar({
  size = "md",
  className = "",
  ...props
}: { size?: "sm" | "md" | "lg" } & SkeletonProps) {
  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  }

  return (
    <Skeleton className={`rounded-full ${sizeStyles[size]} ${className}`} {...props} />
  )
}

export function SkeletonButton({
  size = "md",
  className = "",
  ...props
}: { size?: "sm" | "md" | "lg" } & SkeletonProps) {
  const sizeStyles = {
    sm: "h-9 w-20",
    md: "h-10 w-24",
    lg: "h-12 w-32"
  }

  return (
    <Skeleton className={`rounded-lg ${sizeStyles[size]} ${className}`} {...props} />
  )
}
