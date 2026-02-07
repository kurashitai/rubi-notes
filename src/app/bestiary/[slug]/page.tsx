import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import MonsterImage from "@/app/components/MonsterImage";
import { creaturesBySlug, creaturesDb } from "@/data/db/creatures";
import { huntsDatabase } from "@/data/hunts";

export async function generateStaticParams() {
  return creaturesDb.map((c) => ({ slug: c.slug }));
}

export default async function BestiaryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creature = creaturesBySlug[slug];
  if (!creature) return notFound();

  const huntsWithCreature = Object.values(huntsDatabase)
    .filter((hunt) => hunt.monsters?.some((m) => m.name.toLowerCase() === creature.name.toLowerCase()))
    .slice(0, 60);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Bestiário", href: "/bestiary" },
            { label: creature.name },
          ]}
        />

        <div className="glass-card p-6 mt-6">
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center w-20 h-20 rounded border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] overflow-hidden">
              <MonsterImage
                src={creature.imageUrl || "/logo.svg"}
                alt={creature.name}
                className="max-w-[56px] max-h-[56px] object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-[var(--glass-text-primary)]">{creature.name}</h1>
              <div className="mt-1 text-sm text-[var(--glass-text-secondary)]">
                {creature.category || "-"}{creature.occurrence ? ` • ${creature.occurrence}` : ""}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] px-2 py-1 text-[var(--glass-text-muted)]">
                  EXP: <span className="font-mono text-[var(--glass-text-primary)]">{creature.exp ?? "-"}</span>
                </span>
                <span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] px-2 py-1 text-[var(--glass-text-muted)]">
                  HP: <span className="font-mono text-[var(--glass-text-primary)]">{creature.hp ?? "-"}</span>
                </span>
                <span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-hover)] px-2 py-1 text-[var(--glass-text-muted)]">
                  Bestiary: <span className="font-mono text-[var(--glass-text-primary)]">{creature.bestiaryDifficulty || "-"}</span>
                </span>
              </div>

              <div className="mt-4 text-sm">
                <Link
                  href={`/creatures/${creature.slug}`}
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  Abrir página completa da criatura →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 glass-card p-4">
            <div className="text-xs uppercase tracking-wider text-[var(--glass-text-muted)]">
              Hunts onde aparece
            </div>

            {huntsWithCreature.length ? (
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {huntsWithCreature.map((hunt) => (
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
              <div className="mt-2 text-sm text-[var(--glass-text-muted)]">
                Nenhuma hunt indexada com esse monstro ainda.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
