# Intibia Hunts Import - Guide

## Fonte
**URL**: https://intibia.com/pt/hunts

## Seções Para Importar
Para cada hunt, importar:
1. **Criaturas** - Monstros que aparecem na hunt
2. **Melhores Loots** - Items valiosos que dropam
3. **Estratégia** - Como jogar, rotação, dicas
4. **Localização** - Coordenadas, como chegar
5. **Suprimentos** - Itens necessários (potions, runas, etc.)
6. **Requisitos** - Quests, level, acesso premium/free
7. **Imagens** - Screenshot ou mapa da área

## Estrutura do Arquivo de Hunts

```typescript
export interface HuntData {
  slug: string;
  name: string;
  tier: string; // S, A, B, C
  levelRange: string;
  location: string;
  rawExp: string;
  baseProfit: number;
  weakness: string;
  areaStatus: "free" | "premium";
  access: {
    quest?: string;
    questLink?: string;
    requirements?: string[];
    howToGet: string[];
  };
  creatures: string[]; // Novo campo - slugs das criaturas
  monsters: Monster[];
  recommendedSet: {
    weapon: string;
    weaponLevel: number;
    helmet: string;
    armor: string;
    legs: string;
    boots: string;
    shield: string;
    amulet: string;
    ring: string;
  };
  imbuements: {
    weapon: string[];
    armor: string[];
    helmet: string[];
  };
  charms: string[];
  strategy: string[]; // Novo campo - estratégia
  supplies: { item: string; quantity: string; }[]; // Novo campo - suprimentos
  images: string[]; // Novo campo - URLs de imagens
  alternatives: string[];
  videoGuide?: string;
  groupVersion?: string;
}
```

## Procedimento de Importação

### Passo 1: Acessar Hunt Individual
1. Ir para https://intibia.com/pt/hunts
2. Clicar em uma hunt
3. Copiar o conteúdo das seções

### Passo 2: Criar Hunt no Formato do Rubi-Notes
```typescript
const huntName = "Nome da Hunt";
const slug = huntName.toLowerCase().replace(/[^a-z0-9]/g, '-');

const newHunt: HuntData = {
  slug,
  name: huntName,
  tier: "A", // S, A, B, C baseado no XP/Profit
  levelRange: "100-200", // Range de level sugerido
  location: "Nome da área",
  rawExp: "500k-1kk", // XP/h bruto
  baseProfit: 200, // Profit/h em k
  weakness: "Fire +20%", // Elemental weakness se houver
  areaStatus: "free", // free ou premium
  access: {
    quest: "Nome da Quest (se aplicável)",
    questLink: "/quests/nome-da-quest",
    requirements: [
      "Level X+",
      "Premium account (se aplicável)",
      "Item Y necessário"
    ],
    howToGet: [
      "1. Vá para [cidade]",
      "2. Use o teleport [nome]",
      "3. Siga o caminho até [coordenadas]"
    ]
  },
  creatures: ["creature1", "creature2"], // Slugs das criaturas
  monsters: [
    {
      name: "Nome do Monstro",
      hp: 1000,
      exp: 500,
      damage: "0-200",
      weaknesses: { "Fire": 20 },
      immunities: [],
      bestiaryKills: 100,
      loot: [
        { item: "Gold Coin", chance: "100%", value: "1-100 gp" },
        { item: "Platinum Coin", chance: "100%", value: "1-5 pc" },
        { item: "Item Raro", chance: "5%", value: "~1k gp", discard: false }
      ]
    }
  ],
  recommendedSet: {
    weapon: "Nome da Arma",
    weaponLevel: 30,
    helmet: "Nome do Capacete",
    armor: "Nome da Armadura",
    legs: "Nome das Perneiras",
    boots: "Nome das Botas",
    shield: "Nome do Escudo",
    amulet: "Nome do Amuleto",
    ring: "Nome do Anel"
  },
  imbuements: {
    weapon: ["Fire Striker", "Void"],
    armor: ["Vampirism"],
    helmet: ["Vampirism"]
  },
  charms: ["Charm 1", "Charm 2"],
  strategy: [
    "Estratégia 1",
    "Estratégia 2",
    "Estratégia 3"
  ],
  supplies: [
    { item: "Health Potion", quantity: "50" },
    { item: "Mana Potion", quantity: "50" },
    { item: "Strong Health Potion", quantity: "20" },
    { item: "Blank Rune", quantity: "100" }
  ],
  images: [
    "https://intibia.com/images/hunt-map.jpg",
    "https://intibia.com/images/hunt-screenshot.jpg"
  ],
  alternatives: ["Alternativa 1", "Alternativa 2"],
  videoGuide: "https://www.youtube.com/watch?v=VIDEO_ID"
};
```

### Passo 3: Adicionar ao Arquivo hunts.ts
```typescript
// hunts.ts
import { existingHunt } from "./hunts-existing";

export const newHunt: HuntData = {
  // ... dados da hunt
};

export const huntsDatabase: Record<string, HuntData> = {
  ...existingHunt,
  newHunt
};
```

### Passo 4: Baixar Imagens
```bash
# Criar diretório para imagens
mkdir -p /home/ubuntu/.openclaw/workspace/rubi-notes/public/images/hunts

# Baixar imagens
wget https://intibia.com/images/hunt-name.jpg -O hunt-name.jpg

# Ou curl
curl https://intibia.com/images/hunt-name.jpg -o hunt-name.jpg
```

## Campos Novos a Implementar

### creatures (Array de strings)
- Contém slugs das criaturas que aparecem na hunt
- Permite linking para bestiário
- Exemplo: `["weretiger", "white-weretiger"]`

### strategy (Array de strings)
- Contém passos e dicas estratégicas
- Exemplo: `["Use Fire Element", "Keep distance", "Focus on tanking"]`

### supplies (Array de objetos)
- Contém itens necessários e quantidades
- Exemplo: `[{ item: "Health Potion", quantity: "50" }]`

### images (Array de strings)
- Contém URLs de imagens (mapas, screenshots)
- Exemplo: `["/images/hunts/hunt-name.jpg"]`

## Tiers System

| Tier | XP/h | Profit/h | Cor |
|-------|-------|-----------|-----|
| S | 2kk+ | 500k+ | Red (S) |
| A | 1kk-2kk | 300-500k | Amber (A) |
| B | 500k-1kk | 100-300k | Blue (B) |
| C | < 500k | < 100k | Gray (C) |

## Batch Organization

### Batch 1: S-Tier Hunts (50 hunts)
- Focar nas melhores hunts do site
- Incluir hunts com alto XP/Profit
- Priorizar hunts populares

### Batch 2: A-Tier Hunts (50 hunts)
- Hunts com bom XP/Profit mas não top
- Hunts de level médio-alto (200-500)

### Batch 3: B-Tier Hunts (50 hunts)
- Hunts com XP/Profit mediano
- Hunts de level médio (100-300)

### Batch 4: C-Tier Hunts (50 hunts)
- Hunts com baixo XP/Profit
- Hunts de level baixo (50-150)

### Batch 5: Restante das Hunts
- Todas as hunts restantes
- Incluir hunts de todos os tiers

## Checklist Por Hunt

Antes de marcar como concluída:
- [ ] Nome da hunt importado
- [ ] Slug correto
- [ ] Tier definido
- [ ] Level range definido
- [ ] Localização importada
- [ ] XP/Profit importados
- [ ] Criaturas importadas
- [ ] Melhores loots importados
- [ ] Estratégia importada
- [ ] Localização detalhada (como chegar)
- [ ] Suprimentos listados
- [ ] Requisitos listados
- [ ] Imagens baixadas
- [ ] Set recomendado definido
- [ ] Imbuements definidos
- [ ] Charms definidos

## Atualizar Componentes

Depois de adicionar hunts, atualizar:
1. **hunts.ts** - Adicionar novas hunts
2. **[slug]/page.tsx** - Criar página de detalhe da hunt
3. **app/hunts/page.tsx** - Atualizar lista de hunts

---

*Guia criado por Iris - 2026-02-05*
