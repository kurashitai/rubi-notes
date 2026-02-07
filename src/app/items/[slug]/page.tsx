import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { itemsBySlug, itemsDb } from "@/data/db/items";
import { huntsDatabase } from "@/data/hunts";

export async function generateStaticParams() {
  return itemsDb.map((item) => ({ slug: item.slug }));
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function ItemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = itemsBySlug[slug];

  if (!item) return notFound();

  // Hunts that list this item in monster loot tables
  const huntsWithItem = Object.values(huntsDatabase)
    .filter((hunt) =>
      hunt.monsters?.some((m) =>
        (m.loot || []).some((l) => (l.item || "").toLowerCase() === item.name.toLowerCase())
      )
    )
    .slice(0, 30);

  const droppedBy = (item.droppedBy || []).filter(Boolean);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Items", href: "/items" },
            { label: item.name },
          ]}
        />

        <div className="glass-card p-6 mt-6">
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-20 h-20 rounded border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image || `/items/${item.slug}.gif`}
                alt={item.name}
                className="max-w-[56px] max-h-[56px] object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-[var(--glass-text-primary)]">{item.name}</h1>
              <div className="mt-1 text-sm text-[var(--glass-text-secondary)]">
                {item.category || "-"}{item.type ? ` • ${item.type}` : ""}
              </div>
              {item.flavorText ? (
                <div className="mt-3 text-sm italic text-[var(--glass-text-muted)]">“{item.flavorText}”</div>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-4">
              <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">Economia</div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">NPC value:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.npcValue ?? "-"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Market:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.value ?? "-"}</span></div>
                {item.buyFrom ? (
                  <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Buy from:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.buyFrom}</span></div>
                ) : null}
                {item.sellTo ? (
                  <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Sell to:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.sellTo}</span></div>
                ) : null}
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">Atributos</div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Armor:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.armor ?? "-"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Attack:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.attack ?? "-"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Defense:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.defense ?? "-"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Weight:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.weight ?? "-"}</span></div>
                <div className="flex justify-between"><span className="text-[var(--glass-text-secondary)]">Imbue slots:</span><span className="font-mono text-[var(--glass-text-primary)]">{item.imbuementSlots ?? "-"}</span></div>
              </div>
            </div>
          </div>

          {item.description ? (
            <div className="mt-6 glass-card p-4">
              <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">Descrição</div>
              <div className="mt-2 text-sm text-[var(--glass-text-secondary)] whitespace-pre-wrap">{item.description}</div>
            </div>
          ) : null}

          {/* Dropped by */}
          <div className="mt-6 glass-card p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">Dropa de</div>
            {droppedBy.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {droppedBy.map((name) => (
                  <Link
                    key={name}
                    href={`/creatures/${slugify(name)}`}
                    className="px-3 py-1 rounded border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] text-sm text-[var(--glass-text-primary)] hover:bg-white/10"
                    title="Abrir criatura"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-sm text-[var(--glass-text-muted)]">Sem dados de drop ainda.</div>
            )}
          </div>

          {/* Hunts */}
          <div className="mt-6 glass-card p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">Hunts onde aparece no loot</div>
            {huntsWithItem.length ? (
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {huntsWithItem.map((hunt) => (
                  <Link
                    key={hunt.slug}
                    href={`/hunts/${hunt.slug}`}
                    className="rounded border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] p-3 text-sm text-[var(--glass-text-primary)] hover:bg-white/10"
                  >
                    <div className="font-semibold">{hunt.name}</div>
                    <div className="text-xs text-[var(--glass-text-muted)]">{hunt.levelRange} • {hunt.location}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-sm text-[var(--glass-text-muted)]">Nenhuma hunt indexada com esse item ainda.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
