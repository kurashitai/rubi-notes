#!/usr/bin/env node
/**
 * Script para extrair Boosted Creature e Boosted Boss do Rubinot
 * Roda diariamente às 10:30 BRT (13:30 UTC)
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const RUBINOT_URL = 'https://rubinot.com.br/';
const OUTPUT_DIR = path.join(__dirname, '../public/data/boosted');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'boosted.json');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

// Criar diretórios se não existirem
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    };

    protocol.get(url, options, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const filePath = path.join(IMAGES_DIR, filename);
    
    protocol.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filePath);
      });
    }).on('error', reject);
  });
}

function extractImageInfo(html, id) {
  // Regex ajustado para o HTML do Rubinot
  // Exemplo: <img id="Monster" title="Today's boosted creature: cursed prospector" ... >
  
  const regex = new RegExp(`<img[^>]*id=["']${id}["'][^>]*>`, 'i');
  const match = html.match(regex);
  
  if (!match) {
    console.log(`Não encontrou imagem com id="${id}"`);
    return null;
  }
  
  const imgTag = match[0];
  
  // Extrair src
  const srcMatch = imgTag.match(/src=["']([^"']+)["']/i);
  let src = srcMatch ? srcMatch[1] : null;
  
  // Resolver URL relativa
  if (src && !src.startsWith('http')) {
    src = new URL(src, RUBINOT_URL).href;
  }
  
  // Extrair nome do title
  // Ex: title="Today's boosted creature: cursed prospector"
  const titleMatch = imgTag.match(/title=["']([^"']+)["']/i);
  let name = 'Unknown';
  
  if (titleMatch) {
    const titleText = titleMatch[1];
    // Remover prefixo "Today's boosted creature: " ou "Today's boosted boss: "
    name = titleText.replace(/Today's boosted (creature|boss): /i, '').trim();
  } else {
    // Fallback para alt
    const altMatch = imgTag.match(/alt=["']([^"']+)["']/i);
    if (altMatch) name = altMatch[1];
  }
  
  return {
    id,
    name,
    imageUrl: src,
    rawTag: imgTag
  };
}

async function main() {
  console.log('='.repeat(50));
  console.log(`[${new Date().toISOString()}] Iniciando extração de Boosted Creatures...`);
  
  try {
    // Buscar página do Rubinot
    console.log(`Buscando: ${RUBINOT_URL}`);
    const html = await fetchPage(RUBINOT_URL);
    
    if (!html || html.length < 100) {
      throw new Error('Página retornou vazia ou muito pequena');
    }
    
    console.log(`Página carregada: ${html.length} bytes`);
    
    // Extrair Monster e Boss
    const monster = extractImageInfo(html, 'Monster');
    const boss = extractImageInfo(html, 'Boss');
    
    const result = {
      lastUpdate: new Date().toISOString(),
      serverSave: '10:00 BRT',
      boostedCreature: monster,
      boostedBoss: boss
    };
    
    // Baixar imagens se disponíveis
    if (monster && monster.imageUrl) {
      try {
        console.log(`Baixando imagem Monster: ${monster.imageUrl}`);
        const filename = `monster_${Date.now()}.gif`;
        await downloadImage(monster.imageUrl, filename);
        result.boostedCreature.localImage = `/data/boosted/images/${filename}`;
        console.log(`✓ Imagem Monster salva: ${filename}`);
      } catch (err) {
        console.error('Erro ao baixar imagem Monster:', err.message);
      }
    }
    
    if (boss && boss.imageUrl) {
      try {
        console.log(`Baixando imagem Boss: ${boss.imageUrl}`);
        const filename = `boss_${Date.now()}.gif`;
        await downloadImage(boss.imageUrl, filename);
        result.boostedBoss.localImage = `/data/boosted/images/${filename}`;
        console.log(`✓ Imagem Boss salva: ${filename}`);
      } catch (err) {
        console.error('Erro ao baixar imagem Boss:', err.message);
      }
    }
    
    // Salvar resultado
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
    console.log(`✓ Dados salvos em: ${OUTPUT_FILE}`);
    
    // Mostrar resultado
    console.log('\n📊 RESULTADO:');
    console.log(`  Boosted Creature: ${monster?.name || 'Não encontrado'}`);
    console.log(`  Boosted Boss: ${boss?.name || 'Não encontrado'}`);
    console.log('='.repeat(50));
    
    return result;
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
    
    // Salvar erro
    const errorResult = {
      lastUpdate: new Date().toISOString(),
      error: error.message,
      boostedCreature: null,
      boostedBoss: null
    };
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(errorResult, null, 2));
    
    throw error;
  }
}

// Executar
main()
  .then(() => {
    console.log('Script finalizado com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Script falhou:', err.message);
    process.exit(1);
  });
