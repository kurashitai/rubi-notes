#!/usr/bin/env node
/**
 * Script: fix-creature-navigation.mjs
 * 
 * Padroniza a navegação nas páginas de criaturas para que:
 * - Criaturas acessadas via /bestiary tenham breadcrumb voltando para /bestiary
 * - Criaturas acessadas via /creatures tenham breadcrumb voltando para /creatures
 * 
 * Isso é feito adicionando uma prop `backTo` aos breadcrumbs das páginas.
 */

import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = path.join(process.cwd(), 'src/app');

async function main() {
  console.log('🔧 Padronizando navegação das páginas de criaturas...\n');

  // Lista de páginas que precisam de fix
  const pagesToFix = [
    { 
      path: 'creatures/[slug]/page.tsx', 
      backTo: '/creatures',
      backLabel: 'Criaturas'
    },
    { 
      path: 'bestiary/[slug]/page.tsx', 
      backTo: '/bestiary',
      backLabel: 'Bestiário'
    },
    { 
      path: 'bosses/[slug]/page.tsx', 
      backTo: '/bosses',
      backLabel: 'Bosses'
    }
  ];

  let fixedCount = 0;

  for (const page of pagesToFix) {
    const filePath = path.join(PAGES_DIR, page.path);
    
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Verificar se já tem o breadcrumb correto
      if (content.includes(`label: "${page.backLabel}"`) && content.includes(`href: "${page.backTo}"`)) {
        console.log(`✅ ${page.path} já está correto`);
        continue;
      }

      // Encontrar e substituir o breadcrumb
      const oldBreadcrumbPattern = /<Breadcrumb[^>]*items={\[[\s\S]*?\]} \/>/g;
      
      // Padrões possíveis de breadcrumb
      const possiblePatterns = [
        // Padrão 1: BreadcrumbWithHome simples
        /<BreadcrumbWithHome items=\{\[\s*\{\s*label:\s*"[^"]*"\s*\}\s*\]\} \/>/,
        // Padrão 2: Breadcrumb normal
        /<Breadcrumb items=\{\[\s*\{\s*label:\s*"Home",\s*href:\s*"\/"\s*\},\s*\{\s*label:\s*"[^"]*"\s*\}\s*\]\} \/>/,
        // Padrão 3: BreadcrumbWithHome com label
        /<BreadcrumbWithHome items=\{\[\s*\{\s*label:\s*"Home"\s*\},\s*\{\s*label:\s*"[^"]*"\s*\}\s*\]\} \/>/
      ];

      let newContent = content;
      let wasFixed = false;

      for (const pattern of possiblePatterns) {
        if (pattern.test(content)) {
          // Gerar novo breadcrumb
          const newBreadcrumb = `<Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "${page.backLabel}", href: "${page.backTo}" }
          ]} />`;

          newContent = content.replace(pattern, newBreadcrumb);
          wasFixed = true;
          break;
        }
      }

      if (wasFixed) {
        await fs.writeFile(filePath, newContent, 'utf-8');
        console.log(`✅ ${page.path} - Atualizado para voltar para ${page.backTo}`);
        fixedCount++;
      } else {
        console.log(`⚠️  ${page.path} - Não encontrado padrão de breadcrumb para substituir`);
      }

    } catch (error) {
      console.error(`❌ Erro ao processar ${page.path}:`, error.message);
    }
  }

  console.log(`\n✅ Concluído! ${fixedCount} páginas atualizadas.`);
}

main().catch(console.error);
