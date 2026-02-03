"use client";

import { useState } from "react";

interface LootImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LootImage({ src, alt, className }: LootImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  // Normalização do nome para TibiaWiki
  const tibiaWikiName = alt.trim().replace(/ /g, "_");
  
  // Lista de tentativas (Prioridade: Rubinot -> TibiaWiki Fandom -> TibiaWiki BR)
  // Usando 'wsrv.nl' como proxy para evitar bloqueio de CORS/Hotlink em alguns casos se necessário, 
  // mas primeiro tentamos direto.
  const fallbacks = [
    // 1. Tenta a URL original (Rubinot)
    src,
    // 2. TibiaWiki Fandom (Global) - Link direto de arquivo
    `https://tibia.fandom.com/wiki/Special:FilePath/${tibiaWikiName}.gif`,
    // 3. TibiaWiki BR
    `https://www.tibiawiki.com.br/images/${tibiaWikiName}.gif`,
    // 4. TibiaWiki Fandom (PNG fallback)
    `https://tibia.fandom.com/wiki/Special:FilePath/${tibiaWikiName}.png`
  ];

  // Inicializa com o primeiro src apenas no client para evitar hydration mismatch
  if (currentSrc === null && attempt === 0) {
      setCurrentSrc(fallbacks[0]);
  }

  const handleError = () => {
    if (attempt < fallbacks.length - 1) {
      const nextAttempt = attempt + 1;
      setAttempt(nextAttempt);
      setCurrentSrc(fallbacks[nextAttempt]);
    } else {
      // Se falhar tudo, esconde
      setCurrentSrc(""); 
    }
  };

  if (!currentSrc) return null;

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      style={{ imageRendering: "pixelated" }} // Melhor qualidade para sprites pixel art
    />
  );
}
