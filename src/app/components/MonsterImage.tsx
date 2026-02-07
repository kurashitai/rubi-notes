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

  // Fallbacks: src fornecido → /logo.svg
  const fallbacks = [
    src || "/logo.svg",  // Se src for vazio, usar logo diretamente
    "/logo.svg"
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
