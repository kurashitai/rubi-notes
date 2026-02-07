import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { itemsDb } from "@/data/db/items";

export const dynamic = "force-static";

export default function ItemsPage() {
  const items = itemsDb;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Items", href: "/items" }]} />

        <div className="glass-card p-6 mt-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[var(--glass-text-primary)]">Items</h1>
            <p className="text-sm text-[var(--glass-text-secondary)]">
              Base de itens (em expansão). Total indexado: <span className="font-mono">{items.length}</span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/items/${item.slug}`}
                className="glass-card p-4 hover:bg-[var(--glass-bg-hover)] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image || `/items/${item.slug}.gif`}
                      alt={item.name}
                      className="max-w-[32px] max-h-[32px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[var(--glass-text-primary)] truncate">{item.name}</div>
                    <div className="text-xs text-[var(--glass-text-muted)] truncate">{item.category || "-"}</div>
                    {item.implemented ? (
                      <div className="mt-1 text-[10px] text-[var(--glass-text-muted)] font-mono">v{item.implemented}</div>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {items.length === 0 && (
            <div className="mt-6 text-sm text-[var(--glass-text-muted)]">
              Nenhum item indexado ainda. Rode o sync de items para popular o DB.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
