# Glassmorphism Redesign Checklist

## ✅ PÁGINAS JÁ ATUALIZADAS

### Páginas Principais
- [x] `/hunts/page.tsx` - Cards, filtros, tabela
- [x] `/bosses/page.tsx` - Cards, filtros por tier
- [x] `/bestiary/page.tsx` - Grid, filtros por fraqueza
- [x] `/creatures/page.tsx` - Grid, filtros, busca
- [x] `/bosses/[slug]/page.tsx` - Detalhes do boss
- [x] `/bestiary/[slug]/page.tsx` - Detalhes da criatura (com BackButton melhorado)
- [x] `/creatures/[slug]/page.tsx` - Detalhes da criatura (com imagem de loot)
- [x] `/hunts/[slug]/page.tsx` - Detalhes da hunt (monsters integrados com creaturesDb)
- [x] `/imbuements/page.tsx` - Cards mobile, tabela desktop
- [x] `/charms/page.tsx` - Cards de charms, buscador por hunt
- [x] `/prey/page.tsx` - Cards, filtros, calculadora HTP
- [x] `/farm-guide/page.tsx` - Ranking por range, cards de profit
- [x] `/monk-quest/page.tsx` - Timeline, cards de recompensas

### Componentes
- [x] `GlassLayout.tsx` - Layout principal
- [x] `GlassSidebar.tsx` - Navegação lateral
- [x] `GlassTopbar.tsx` - Barra superior
- [x] `glass-components.tsx` - Componentes reutilizáveis
- [x] `BackButton.tsx` - Botão voltar inteligente
- [x] `LootImage.tsx` - Imagem de loot com fallback

### Outros
- [x] `layout.tsx` - Layout principal atualizado
- [x] `Navbar.tsx` - Menu principal atualizado

---

## ⚠️ PÁGINAS PENDENTES (ATUALIZAR)

### Páginas Principais
- [ ] `/weapons/page.tsx` - Lista de armas
- [ ] `/sets/page.tsx` - Sets de equipamento
- [ ] `/imbuements/page.tsx` - Já atualizado ✅
- [ ] `/charms/page.tsx` - Já atualizado ✅
- [ ] `/prey/page.tsx` - Já atualizado ✅
- [ ] `/farm-guide/page.tsx` - Já atualizado ✅
- [ ] `/tools/page.tsx` - Ferramentas (calculadoras)
- [ ] `/linked-tasks/page.tsx` - Sistema de linked tasks
- [ ] `/characters/page.tsx` - Personagens/heróis
- [ ] `/quests/page.tsx` - Lista de quests
- [ ] `/quests/[slug]/page.tsx` - Detalhes da quest
- [ ] `/spells/page.tsx` - Feitiços
- [ ] `/towns/page.tsx` - Cidades
- [ ] `/keys/page.tsx` - Chaves de quests

### Páginas de Detalhe
- [ ] `/weapons/[slug]/page.tsx` - Detalhes da arma
- [ ] `/sets/[slug]/page.tsx` - Detalhes do set
- [ ] `/quests/[slug]/page.tsx` - Detalhes da quest

### Seções Especiais
- [ ] `/sections/charlover/` - Charlover (Outfits, Mounts, Conquistas)
- [ ] `/sections/bestiary/` - Seção especial do bestiário
- [ ] `/sections/npcs/` - NPCs com buy/sell
- [ ] `/sections/spells/` - Feitiços por vocação

### Componentes Pendentes
- [ ] `ItemCard.tsx` - Card de item
- [ ] `ItemImage.tsx` - Imagem de item
- [ ] `QuestCard.tsx` - Card de quest

### Funcionalidades Cross-page
- [ ] Integrar creaturesDb nas pages `/quests/[slug]` (quais criaturas aparecem)
- [ ] Integrar creaturesDb nas pages `/bosses/[slug]` (drop de bosses)
- [ ] Integrar creaturesDb nas pages `/hunts/[slug]` (já feito parcialmente)

### Melhorias Necessárias
- [ ] Padronizar nomenclatura de componentes (cards, panels, badges)
- [ ] Adicionar animações suaves (hover, transições)
- [ ] Implementar dark mode completo
- [ ] Otimizar carregamento de imagens (lazy loading, WebP)
- [ ] Adicionar paginação em listas longas
- [ ] Implementar filtros combinados (fraqueza + level)
- [ ] Adicionar sorting avançado (múltiplos critérios)

---

## 📋 PRIORIDADE DE IMPLEMENTAÇÃO

### Fase 1: Páginas Mais Acessadas (Semana 1)
1. [ ] `/weapons` - Lista de armas
2. [ ] `/sets` - Sets de equipamento
3. [ ] `/tools` - Calculadoras
4. [ ] `/linked-tasks` - Linked Tasks
5. [ ] `/quests` - Lista de quests

### Fase 2: Páginas de Detalhe e Integração (Semana 1-2)
1. [ ] `/weapons/[slug]` - Detalhes da arma
2. [ ] `/sets/[slug]` - Detalhes do set
3. [ ] `/quests/[slug]` - Detalhes da quest
4. [ ] Integrar creaturesDb em pages (cross-page consistency)

### Fase 3: Seções Especiais (Semana 2-3)
1. [ ] `/sections/charlover` - Charlover
2. [ ] `/sections/bestiary` - Estatísticas do bestiário
3. [ ] `/sections/spells` - Feitiços

### Fase 4: Melhorias e Otimizações (Semana 3-4)
1. [ ] Dark mode completo
2. [ ] Animações suaves
3. [ ] Paginação
4. [ ] Filtros avançados
5. [ ] Performance optimizations

---

## 🎨 TOKENS GLASSMORPHISM (JÁ DEFINIDOS EM `src/app/globals.css`)

### Backgrounds
- `--glass-bg`: #0a0f1a1c1b224
- `--glass-bg-hover`: rgba(255, 255, 255, 0.08)
- `--glass-bg-tertiary`: #0f0f1a181e233

### Text Colors
- `--glass-text-primary`: #ffffff
- `--glass-text-secondary`: rgba(255, 255, 255, 0.85)
- `--glass-text-muted`: rgba(255, 255, 255, 0.6)
- `--glass-accent-glow`: #e879f9 (roxo neon)

### Accents
- `--glass-rubi-primary`: #9b59b6
- `--glass-rubi-secondary`: #8b5cf6
- `--glass-border`: rgba(255, 255, 255, 0.1)
- `--glass-glow`: 0 0 0 rgba(255, 120, 231, 0.15)

---

## 🚨 BLOCOS ATUAIS

1. **Dados de Criaturas**: creaturesDb só tem 1917 criaturas (de 2124 possíveis)
   - Preciso executar `sync-creatures.mjs` com `--limit=2124` para completar
   
2. **Loot Chance**: Preciso estimar chances baseadas em raridade
   - Criar mapeamento de rarity → chance (common: 15%, uncommon: 2%, rare: 0.5%, very rare: 0.1%)
   
3. **Imagens de Itens**: Falta baixar/organizar imagens dos itens
   - Script `enrich-creatures.mjs` está baixando mas pode otimizar

4. **Integração Cross-page**: Hunts ainda usam dados parciais
   - `/hunts/[slug]/page.tsx` já usa creaturesDb para HP/EXP/Kills (✅ parcial)
   - Ainda falta integrar weaknesses completos e imagens

5. **Performance**: 2124 creatures pode gerar arquivos muito grandes
   - Considerar usar JSON separado ou lazy loading

---

## 📊 STATUS DO PROJETO

### Concluído
- ✅ Design System (tokens CSS)
- ✅ Glass Components (Layout, Sidebar, Topbar)
- ✅ Páginas principais atualizadas (hunts, bosses, bestiary, creatures)
- ✅ BackButton inteligente
- ✅ LootImage com fallback
- ✅ Navigation padrão

### Em Andamento
- ⏳ Glassmorphism Redesign (task-ui-plan-1770440000)
- ⏳ Dados de criaturas (incompleto)
- ⏳ Enrichment de dados (chance, imagens)

### Pendente
- ⏸️ Páginas de detalhes (weapons, sets, quests)
- ⏸️ Seções especiais (charlover, spells)
- ⏸️ Ferramentas (tools, linked-tasks)

---

## 🔄 PRÓXIMOS PASSOS

1. **Imediato** (Hoje):
   - Completar importação de criaturas (2124)
   - Atualizar `/bestiary/page.tsx` com imagens de loot
   - Atualizar `/creatures/[slug]/page.tsx` com imagens de loot
   - Testar build do Rubi-Notes

2. **Curto Prazo** (Esta semana):
   - Atualizar `/weapons/page.tsx` com glassmorphism
   - Atualizar `/sets/page.tsx` com glassmorphism
   - Atualizar `/tools/page.tsx` com glassmorphism
   - Atualizar `/quests/page.tsx` com glassmorphism
   - Criar `/sections/charlover/index.tsx` (placeholder)

3. **Médio Prazo** (Próximas 2 semanas):
   - Páginas de detalhes (weapons, sets, quests)
   - Seções especiais (charlover, spells)
   - Melhorias (animações, paginação, dark mode)

4. **Longo Prazo** (Mês 1+):
   - Cross-page integration completa
   - Dark mode completo
   - Performance optimizations
   - Sistema de linked tasks completo

---

## 💡 RECOMENDAÇÃO

Para acelerar o desenvolvimento, vou:
1. **Usar Codex/OpenCode** para refatorar as páginas automaticamente
2. **Priorizar qualidade** - aplicar glassmorphism de forma consistente
3. **Testar em mobile** - garantir que tudo funciona em todos os tamanhos de tela
4. **Otimizar imagens** - lazy loading, WebP, ou usar imagens locais sempre que possível

---

*Última atualização: 2026-02-07T10:28 UTC*
