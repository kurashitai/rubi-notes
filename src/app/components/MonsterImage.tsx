"use client";

import { useState } from "react";

interface MonsterImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MonsterImage({ src, alt, className }: MonsterImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const tibiaWikiName = alt.trim().replace(/ /g, "_");

  const fallbacks = [
    src,
    `https://tibia.fandom.com/wiki/Special:FilePath/${tibiaWikiName}.gif`,
    `https://www.tibiawiki.com.br/images/${tibiaWikiName}.gif`,
    `https://tibia.fandom.com/wiki/Special:FilePath/${tibiaWikiName}.png`,
    "/images/placeholder-monster.png"
  ];

  if (currentSrc === null && attempt === 0) {
      setCurrentSrc(fallbacks[0]);
  }

  const handleError = () => {
    if (attempt < fallbacks.length - 1) {
      const nextAttempt = attempt + 1;
      setAttempt(nextAttempt);
      setCurrentSrc(fallbacks[nextAttempt]);
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
      style={{ imageRendering: "pixelated" }}
    />
  );
}
