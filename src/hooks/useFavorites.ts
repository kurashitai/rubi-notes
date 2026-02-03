import { useState, useEffect } from "react";

export function useFavorites(key: string) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, [key]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      
      localStorage.setItem(key, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
