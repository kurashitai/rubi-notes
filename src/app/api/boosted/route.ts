import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Tenta acessar o site do Rubinot simulando um navegador real
    const response = await fetch('https://rubinot.com.br/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
      next: { revalidate: 300 } // Cache por 5 minutos
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();

    // Procura pela div RightArtwork e extrai a imagem e o nome (via title ou alt)
    // Exemplo esperado: <div id="RightArtwork">...<img src="..." alt="Creature Name" ...>...</div>
    
    // Regex para encontrar a div e a imagem dentro dela
    const rightArtworkMatch = html.match(/id="RightArtwork"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i);
    
    // Fallback: Tenta achar style="background-image:url(...)" se for o caso
    const bgImageMatch = html.match(/id="RightArtwork"[^>]*style="[^"]*background-image:\s*url\('?([^')]+)'?\)/i);

    let imageUrl = '';
    let name = 'Unknown';

    if (rightArtworkMatch) {
      imageUrl = rightArtworkMatch[1]; // src
      name = rightArtworkMatch[2] || 'Boosted Creature'; // alt
    } else if (bgImageMatch) {
      imageUrl = bgImageMatch[1];
      // Tenta achar o nome em algum lugar próximo ou usa genérico
      name = 'Boosted Creature';
    }

    if (!imageUrl) {
      // Se falhar o regex específico, tenta pegar qualquer imagem dentro da div (mais genérico)
      const divMatch = html.match(/id="RightArtwork"[\s\S]*?<\/div>/i);
      if (divMatch) {
        const imgMatch = divMatch[0].match(/src="([^"]+)"/);
        if (imgMatch) imageUrl = imgMatch[1];
      }
    }

    if (!imageUrl) {
      return NextResponse.json({ error: 'Creature not found in HTML' }, { status: 404 });
    }

    // Corrige URL relativa se necessário
    if (imageUrl.startsWith('/')) {
      imageUrl = `https://rubinot.com.br${imageUrl}`;
    }

    return NextResponse.json({
      name,
      image: imageUrl
    });

  } catch (error) {
    console.error('Boosted Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
