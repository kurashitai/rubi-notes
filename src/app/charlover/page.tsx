import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

function FeatureCard({
  title,
  description,
  href,
  icon,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white/80">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white/90 group-hover:text-white">{title}</h3>
            {tag ? (
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[11px] text-white/70">
                {tag}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-white/60">{description}</p>
          <div className="mt-3 text-sm font-medium text-[var(--accent-primary)]">Abrir →</div>
        </div>
      </div>
    </Link>
  );
}

export default function CharloverPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Charlover", href: "/charlover" }]}
      />

      <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-pink-400">💖</span>
            <span className="text-sm font-semibold tracking-wide">GUIAS PARA CHAR LOVERS</span>
          </div>
          <h1 className="text-2xl font-bold text-white/95 md:text-3xl">Charlover</h1>
          <p className="max-w-2xl text-sm text-white/65 md:text-base">
            Tudo que um char lover ama: colecionáveis, cosméticos, conquistas e metas. Aqui é o hub
            (bem organizado) pra você construir seu “perfil perfeito”.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FeatureCard
            title="Outfits"
            description="Lista com filtros por raridade, tipo e dificuldade + dicas de como obter."
            href="/outfits"
            icon={<span className="text-lg">👘</span>}
            tag="Cosmético"
          />
          <FeatureCard
            title="Mounts"
            description="Coleção de montarias, requisitos e recomendações por estilo."
            href="/mounts"
            icon={<span className="text-lg">🦄</span>}
            tag="Colecionável"
          />
          <FeatureCard
            title="Achievements (roadmap)"
            description="Vamos evoluir para uma página com tiers e rotas eficientes."
            href="/charlover#achievements"
            icon={<span className="text-lg">🏆</span>}
            tag="Em breve"
          />
          <FeatureCard
            title="Checklist do Charlover"
            description="Um painel simples (objetivos + progresso) pra não se perder."
            href="/charlover#checklist"
            icon={<span className="text-lg">✨</span>}
            tag="Em breve"
          />
        </div>

        <div id="achievements" className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-base font-semibold text-white/90">Próximos módulos</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/65">
            <li>Achievements: tabela + rotas rápidas (por cidade/quest/evento)</li>
            <li>Mounts/Outfits: adicionar imagens (quando dataset estiver pronto)</li>
            <li>Checklist persistente (favoritos) pra charlover</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
