"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge, TierBadge, ElementBadge } from "@/components/ui/badge";
import { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar, SkeletonButton } from "@/components/ui/skeleton";
import { Tooltip } from "@/components/ui/tooltip";
import { Breadcrumb, BreadcrumbWithHome } from "@/components/ui/breadcrumb";

export default function ComponentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gradient mb-4">Design System</h1>
        <p className="text-[var(--text-secondary)]">
          Componentes UI base do Rubi-Notes. Página de teste e documentação.
        </p>
      </div>

      {/* Breadcrumb */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Breadcrumb</h2>
        <div className="space-y-4">
          <BreadcrumbWithHome
            items={[
              { label: "Hunts", href: "/hunts" },
              { label: "Weretigers" }
            ]}
          />
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Quests", href: "/quests" },
              { label: "Paradise Lost" }
            ]}
            separator=">"
          />
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">States</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button icon="🎯">With Icon</Button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cards</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Descrição do card padrão</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-secondary)]">
                Conteúdo do card. Pode ser qualquer coisa.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Ação</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Com sombra e hover</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-secondary)]">
                Card elevado com efeito de hover mais pronunciado.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary">Ver mais</Button>
            </CardFooter>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <CardTitle>Outline Card</CardTitle>
              <CardDescription>Apenas borda</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-secondary)]">
                Card com fundo transparente e apenas borda.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">Detalhes</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Badges</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Tiers</h3>
          <div className="flex flex-wrap gap-4">
            <TierBadge tier="S" />
            <TierBadge tier="A" />
            <TierBadge tier="B" />
            <TierBadge tier="C" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Status</h3>
          <div className="flex flex-wrap gap-4">
            <Badge variant="success">Ativo</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Badge variant="error">Erro</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="default">Default</Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Elements (Tibia)</h3>
          <div className="flex flex-wrap gap-4">
            <ElementBadge element="Fire" value={-30} />
            <ElementBadge element="Ice" value={15} />
            <ElementBadge element="Earth" value={5} />
            <ElementBadge element="Energy" value={-25} />
            <ElementBadge element="Death" value={25} />
            <ElementBadge element="Holy" value={10} />
            <ElementBadge element="Physical" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm" variant="info">Small</Badge>
            <Badge size="md" variant="info">Medium</Badge>
            <Badge size="lg" variant="info">Large</Badge>
          </div>
        </div>
      </section>

      {/* Skeletons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Skeletons</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Text Lines</h3>
            <SkeletonText lines={3} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Avatars & Buttons</h3>
            <div className="flex items-center gap-4">
              <SkeletonAvatar size="sm" />
              <SkeletonAvatar size="md" />
              <SkeletonAvatar size="lg" />
              <SkeletonButton size="md" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-4">Card Skeleton</h3>
            <SkeletonCard />
          </div>
        </div>
      </section>

      {/* Tooltips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tooltips</h2>
        
        <div className="flex flex-wrap gap-8">
          <Tooltip content="Tooltip no topo" side="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip embaixo" side="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip à esquerda" side="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip à direita" side="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
        </div>
      </section>

      {/* CSS Classes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">CSS Classes</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Cards (CSS)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glow">
              <h4 className="font-semibold mb-2">.card-glow</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Card com hover glow dourado.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h4 className="font-semibold mb-2">.card-elevated</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Card elevado com gradiente.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Progress Bars</h3>
          <div className="space-y-2">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: "75%" }} />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">75% completo</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Weakness Bars</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Death</span>
                <span className="text-green-400">+25%</span>
              </div>
              <div className="weakness-bar">
                <div className="weakness-bar-fill weakness-positive" style={{ width: "75%" }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Fire</span>
                <span className="text-red-400">-30%</span>
              </div>
              <div className="weakness-bar">
                <div className="weakness-bar-fill weakness-negative" style={{ width: "30%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--text-secondary)]">Text Gradient</h3>
          <p className="text-3xl font-bold text-gradient">
            Texto com gradiente roxo/rosa
          </p>
        </div>
      </section>
    </div>
  );
}
