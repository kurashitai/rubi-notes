#!/usr/bin/env node
/**
 * Script: update-creatures-extra.mjs
 * 
 * Atualiza o banco de dados de criaturas com dados extras:
 * - Chance de loot para cada item
 * - Charm Points (baseado na dificuldade)
 * - Bestiary Kills (baseado na dificuldade)
 * - Imagens dos itens (com base no nome normalizado)
 */

import fs from 'fs/promises';
import path from 'path';

const CREATURES_DB_PATH = path.join(process.cwd(), 'src/data/db/creatures.ts');

// Mapping de raridade para chance de loot
const RARITY_TO_CHANCE = {
  'Always': 100,
  'Very Common': 30,
  'Common': 15,
  'Uncommon': 8,
  'Rare': 4,
  'Very Rare': 2,
  'Extremely Rare': 1,
  'Unknown': 0
};

// Charm points baseado na dificuldade (estimativa)
const DIFFICULTY_TO_CHARM_POINTS = {
  'Easy': 100,
  'Medium': 300,
  'Hard': 600,
  'Boss': 800
};

// Bestiary kills baseado na dificuldade (estimativa)
const DIFFICULTY_TO_BESTIARY_KILLS = {
  'Easy': 100,
  'Medium': 500,
  'Hard': 1000,
  'Boss': 1500
};

// Função para normalizar nome de item para URL de imagem
function normalizeItemNameForImage(itemName) {
  return itemName
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\./g, '')
    .replace(/ /g, '-')
    .replace(/---/g, '-');
}

// Função para calcular dificuldade estimada baseada em HP
function calculateDifficulty(hp) {
  if (hp < 2000) return 'Easy';
  if (hp < 5000) return 'Medium';
  if (hp < 15000) return 'Hard';
  return 'Boss';
}

// Função para inferir raridade com base na taxa de drops
function inferRarityFromDropRate(dropRate) {
  if (dropRate >= 50) return 'Always';
  if (dropRate >= 20) return 'Very Common';
  if (dropRate >= 10) return 'Common';
  if (dropRate >= 5) return 'Uncommon';
  if (dropRate >= 2) return 'Rare';
  if (dropRate >= 0.5) return 'Very Rare';
  return 'Extremely Rare';
}

// Função principal
async function main() {
  console.log('🔧 Atualizando banco de dados de criaturas com dados extras...\n');

  // Ler arquivo atual
  const creaturesContent = await fs.readFile(CREATURES_DB_PATH, 'utf-8');
  
  // Extrair array de criaturas
  const creaturesMatch = creaturesContent.match(/export const creaturesDb = \{[\s\S]*?creatures: (\[[\s\S]*?\])[\s\S]*?\}/);
  
  if (!creaturesMatch) {
    console.error('❌ Erro: Não foi possível encontrar o array de criaturas no arquivo.');
    process.exit(1);
  }

  let creatures = JSON.parse(creaturesMatch[1]);

  console.log(`📊 Encontradas ${creatures.length} criaturas para atualizar.\n`);

  let updatedCount = 0;
  let addedChance = 0;
  let addedCharmPoints = 0;
  let addedBestiaryKills = 0;
  let addedImages = 0;

  // Atualizar cada criatura
  for (const creature of creatures) {
    let hasChanges = false;

    // 1. Calcular dificuldade se não existir
    if (!creature.difficulty && creature.hp) {
      creature.difficulty = calculateDifficulty(creature.hp);
      hasChanges = true;
    }

    // 2. Adicionar charmPoints se não existir
    if (!creature.charmPoints && creature.difficulty) {
      creature.charmPoints = DIFFICULTY_TO_CHARM_POINTS[creature.difficulty] || 0;
      addedCharmPoints++;
      hasChanges = true;
    }

    // 3. Adicionar bestiaryKills se não existir
    if (!creature.bestiaryKills && creature.difficulty) {
      creature.bestiaryKills = DIFFICULTY_TO_BESTIARY_KILLS[creature.difficulty] || 0;
      addedBestiaryKills++;
      hasChanges = true;
    }

    // 4. Atualizar loot com chance e imagem
    if (creature.loot && Array.isArray(creature.loot)) {
      for (const item of creature.loot) {
        let itemHasChanges = false;

        // Adicionar chance se não existir
        if (item.rarity && !item.chance) {
          item.chance = RARITY_TO_CHANCE[item.rarity] || 0;
          addedChance++;
          itemHasChanges = true;
        }

        // Adicionar imagem se não existir
        if (item.itemName && !item.imageUrl) {
          const normalizedName = normalizeItemNameForImage(item.itemName);
          item.imageUrl = `https://rubinot-wiki.com/items/rubinot/${normalizedName}.gif`;
          addedImages++;
          itemHasChanges = true;
        }

        if (itemHasChanges) hasChanges = true;
      }
    }

    if (hasChanges) {
      updatedCount++;
    }
  }

  // Gerar novo conteúdo do arquivo
  const creaturesArrayStr = JSON.stringify(creatures, null, 2);
  
  const newContent = `import { Creature } from "../types";

export const creaturesDb = {
  creatures: ${creaturesArrayStr},

  getCreature(name: string): Creature | undefined {
    return this.creatures.find(c => 
      c.name.toLowerCase() === name.toLowerCase() ||
      c.slug === name.toLowerCase()
    );
  },

  search(query: string): Creature[] {
    const q = query.toLowerCase();
    return this.creatures.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.slug?.includes(q)
    );
  }
};

export default creaturesDb;
`;

  // Escrever novo arquivo
  await fs.writeFile(CREATURES_DB_PATH, newContent, 'utf-8');

  console.log('\n✅ Atualização concluída!');
  console.log(`📝 Criaturas atualizadas: ${updatedCount}/${creatures.length}`);
  console.log(`🎲 Chances de loot adicionadas: ${addedChance}`);
  console.log(`💎 Charm Points adicionados: ${addedCharmPoints}`);
  console.log(`🎯 Bestiary Kills adicionados: ${addedBestiaryKills}`);
  console.log(`🖼️  Imagens de itens adicionadas: ${addedImages}`);
}

// Executar
main().catch(console.error);
