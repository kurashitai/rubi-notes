#!/usr/bin/env node
/**
 * Script: sync-hunts-to-creatures.mjs
 * 
 * Atualiza as hunts com dados das criaturas:
 * - Substitui dados de monstros pelos dados reais das criaturas
 * - Adiciona fraquezas
 * - Adiciona loot principal (só os melhores loots com imagem)
 * - Adiciona kills necessários para bestiário
 */

import fs from 'fs/promises';
import path from 'path';

const CREATURES_DB_PATH = path.join(process.cwd(), 'src/data/db/creatures.ts');
const HUNTS_DIR = path.join(process.cwd(), 'src/data');

async function main() {
  console.log('🔧 Sincronizando hunts com dados de criaturas...\n');

  // 1. Ler banco de dados de criaturas
  const creaturesContent = await fs.readFile(CREATURES_DB_PATH, 'utf-8');
  const creaturesMatch = creaturesContent.match(/creatures: (\[[\s\S]*?\])/);
  
  if (!creaturesMatch) {
    console.error('❌ Erro: Não foi possível ler o banco de dados de criaturas.');
    process.exit(1);
  }

  const creatures = JSON.parse(creaturesMatch[1]);
  
  // Criar mapa de nome -> criatura
  const creatureMap = {};
  for (const creature of creatures) {
    const normalizedName = creature.name.toLowerCase().trim();
    creatureMap[normalizedName] = creature;
  }

  console.log(`📊 ${creatures.length} criaturas carregadas no mapa.\n`);

  // 2. Arquivos de hunts para atualizar
  const huntFiles = [
    'hunts.ts',
    'hunts-intibia.ts',
    'hunts-batch1.ts',
    'hunts-extra.ts',
    'hunts-extra-v2.ts'
  ];

  let totalUpdated = 0;
  let totalCreaturesLinked = 0;

  for (const huntFile of huntFiles) {
    const filePath = path.join(HUNTS_DIR, huntFile);
    
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Verificar se é arquivo TypeScript com hunts
      if (!content.includes('export') || !content.includes('Hunt')) {
        console.log(`⏭️  ${huntFile} - Pulando (não parece arquivo de hunts)`);
        continue;
      }

      // Tenta fazer parse do TypeScript (removeções básicas)
      let jsContent = content
        .replace(/import\s+.*?from\s+['"][^'"]+['"];\s*/g, '')
        .replace(/type\s+\w+\s*=\s*{[^}]*};?\s*/g, '')
        .replace(/interface\s+\w+\s*{[^}]*};?\s*/g, '')
        .replace(/;\s*$/, '');

      // Remove comentários
      jsContent = jsContent.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

      // Extrair hunts com regex
      const huntArrayMatch = jsContent.match(/export\s+(?:const|let|var)\s+\w+\s*=\s*(\[[\s\S]*?\])/);
      
      if (!huntArrayMatch) {
        console.log(`⏭️  ${huntFile} - Pulando (não encontrado array de hunts)`);
        continue;
      }

      let hunts = JSON.parse(huntArrayMatch[1]);
      let fileUpdated = false;
      let creaturesLinked = 0;

      // Atualizar cada hunt
      for (const hunt of hunts) {
        if (!hunt.creatures || !Array.isArray(hunt.creatures)) continue;

        for (const monster of hunt.creatures) {
          if (!monster.name) continue;

          // Buscar criatura no banco de dados
          const creatureName = monster.name.toLowerCase().trim();
          const creature = creatureMap[creatureName];

          if (creature) {
            // Atualizar dados do monstro com dados da criatura
            let monsterUpdated = false;

            // 1. Adicionar fraquezas
            if (creature.weaknesses && !monster.weaknesses) {
              monster.weaknesses = creature.weaknesses;
              monsterUpdated = true;
            }

            // 2. Adicionar loot principal (só os melhores 3 loots)
            if (creature.loot && Array.isArray(creature.loot) && creature.loot.length > 0) {
              // Filtrar loots valiosos (raridade <= Rare ou com chance >= 4%)
              const valuableLoot = creature.loot
                .filter(item => {
                  const rarity = item.rarity || 'Unknown';
                  const chance = item.chance || 0;
                  return rarity === 'Very Common' || 
                         rarity === 'Common' || 
                         rarity === 'Uncommon' || 
                         rarity === 'Rare' ||
                         chance >= 4;
                })
                .sort((a, b) => {
                  // Ordenar por raridade (raros primeiro)
                  const rarityOrder = ['Unknown', 'Extremely Rare', 'Very Rare', 'Rare', 'Uncommon', 'Common', 'Very Common', 'Always'];
                  return rarityOrder.indexOf(a.rarity || 'Unknown') - rarityOrder.indexOf(b.rarity || 'Unknown');
                })
                .slice(0, 3); // Pegar só os 3 melhores

              if (valuableLoot.length > 0 && !monster.mainLoot) {
                monster.mainLoot = valuableLoot.map(item => ({
                  name: item.itemName || item.name,
                  chance: item.chance,
                  rarity: item.rarity,
                  imageUrl: item.imageUrl,
                  amount: item.amount || 1
                }));
                monsterUpdated = true;
              }
            }

            // 3. Adicionar kills para bestiário
            if (creature.bestiaryKills && !monster.bestiaryKills) {
              monster.bestiaryKills = creature.bestiaryKills;
              monsterUpdated = true;
            }

            // 4. Adicionar HP se não tiver
            if (creature.hp && !monster.hp) {
              monster.hp = creature.hp;
              monsterUpdated = true;
            }

            // 5. Adicionar exp se não tiver
            if (creature.exp && !monster.exp) {
              monster.exp = creature.exp;
              monsterUpdated = true;
            }

            // 6. Adicionar imagem da criatura se não tiver
            if (creature.imageUrl && !monster.imageUrl) {
              monster.imageUrl = creature.imageUrl;
              monsterUpdated = true;
            }

            if (monsterUpdated) {
              creaturesLinked++;
            }
          }
        }

        if (creaturesLinked > 0) {
          fileUpdated = true;
        }
      }

      // Se houve atualizações, reescrever o arquivo
      if (fileUpdated) {
        // Preservar imports e tipos originais
        const importMatch = content.match(/import\s+[\s\S]*?from\s+['"][^'"]+['"];\s*/);
        const imports = importMatch ? importMatch[0] : '';
        
        const typeMatch = content.match(/(?:type|interface)\s+\w+\s*{[^}]*};?\s*/g);
        const types = typeMatch ? typeMatch.join('\n') + '\n' : '';

        const exportMatch = content.match(/export\s+(?:const|let|var)\s+(\w+)/);
        const exportName = exportMatch ? exportMatch[1] : 'hunts';

        const newContent = `${imports}${types}\nexport const ${exportName} = ${JSON.stringify(hunts, null, 2)};\n`;
        
        await fs.writeFile(filePath, newContent, 'utf-8');
        console.log(`✅ ${huntFile} - ${creaturesLinked} monstros atualizados`);
        totalUpdated++;
        totalCreaturesLinked += creaturesLinked;
      } else {
        console.log(`✅ ${huntFile} - Já está atualizado`);
      }

    } catch (error) {
      console.error(`❌ Erro ao processar ${huntFile}:`, error.message);
    }
  }

  console.log(`\n✅ Sincronização concluída!`);
  console.log(`📁 Arquivos atualizados: ${totalUpdated}`);
  console.log(`👾 Monstros sincronizados: ${totalCreaturesLinked}`);
}

main().catch(console.error);
