import * as React from "react"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
}

export function Breadcrumb({
  items,
  separator = "/"
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-[var(--text-secondary)]/50">{separator}</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-purple-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-primary)] font-medium">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

// Breadcrumb com ícone de home
export function BreadcrumbWithHome({
  items,
  separator = "/"
}: BreadcrumbProps) {
  const itemsWithHome = [
    { label: "🏠", href: "/" },
    ...items
  ]

  return <Breadcrumb items={itemsWithHome} separator={separator} />
}
