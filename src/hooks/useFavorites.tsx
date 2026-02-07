"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "rubi-notes-favorites";

export type FavoriteType = "hunt" | "boss" | "creature" | "quest" | "imbuement" | "mount";

export interface FavoriteItem {
  id: string;
  type: FavoriteType;
  name: string;
  addedAt: number;
}

export interface UseFavoritesReturn {
  favorites: FavoriteItem[];
  isFavorite: (id: string, type: FavoriteType) => boolean;
  addFavorite: (id: string, type: FavoriteType, name: string) => void;
  removeFavorite: (id: string, type: FavoriteType) => void;
  toggleFavorite: (id: string, type: FavoriteType, name: string) => void;
  getFavoritesByType: (type: FavoriteType) => FavoriteItem[];
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<{
  favorites: FavoriteItem[];
  isFavorite: (id: string, type: FavoriteType) => boolean;
  addFavorite: (id: string, type: FavoriteType, name: string) => void;
  removeFavorite: (id: string, type: FavoriteType) => void;
  toggleFavorite: (id: string, type: FavoriteType, name: string) => void;
  getFavoritesByType: (type: FavoriteType) => FavoriteItem[];
  clearFavorites: () => void;
  favoritesCount: number;
} | null>(null);

// Internal hook implementation
function useFavoritesImpl(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load favorites:", error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites:", error);
      }
    }
  }, [favorites, isLoaded]);

  const isFavorite = useCallback((id: string, type: FavoriteType): boolean => {
    return favorites.some(f => f.id === id && f.type === type);
  }, [favorites]);

  const addFavorite = useCallback((id: string, type: FavoriteType, name: string) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === id && f.type === type)) {
        return prev;
      }
      return [...prev, { id, type, name, addedAt: Date.now() }];
    });
  }, []);

  const removeFavorite = useCallback((id: string, type: FavoriteType) => {
    setFavorites(prev => prev.filter(f => !(f.id === id && f.type === type)));
  }, []);

  const toggleFavorite = useCallback((id: string, type: FavoriteType, name: string) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === id && f.type === type);
      if (exists) {
        return prev.filter(f => !(f.id === id && f.type === type));
      } else {
        return [...prev, { id, type, name, addedAt: Date.now() }];
      }
    });
  }, []);

  const getFavoritesByType = useCallback((type: FavoriteType): FavoriteItem[] => {
    return favorites.filter(f => f.type === type).sort((a, b) => b.addedAt - a.addedAt);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    getFavoritesByType,
    clearFavorites,
    favoritesCount: favorites.length,
  };
}

// Provider Props
export interface FavoritesProviderProps {
  children: React.ReactNode;
}

// Provider Component
export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const hookValue = useFavoritesImpl();
  return (
    <FavoritesContext.Provider value={hookValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Public hook to use in components
export function useFavorites(): UseFavoritesReturn {
  const context = useContext(FavoritesContext);
  if (!context) {
    return useFavoritesImpl();
  }
  return context;
}

// Favorite Button Props
export interface FavoriteButtonProps {
  id: string;
  type: FavoriteType;
  name: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

// Favorite Button Component
export const FavoriteButton = ({ 
  id, 
  type, 
  name, 
  size = "md", 
  showLabel = false,
  className = ""
}: FavoriteButtonProps) => {
  const context = useContext(FavoritesContext);
  if (!context) {
    return null;
  }
  
  const { isFavorite, toggleFavorite } = context;
  const [isAnimating, setIsAnimating] = useState(false);
  const favorited = isFavorite(id, type);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAnimating(true);
    toggleFavorite(id, type, name);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-base",
    lg: "w-10 h-10 text-lg",
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center gap-1 rounded-lg transition-all
        ${favorited 
          ? "text-yellow-400 hover:text-yellow-300" 
          : "text-gray-500 hover:text-yellow-400"
        }
        ${isAnimating ? "scale-125" : "scale-100"}
        ${className}
      `}
      title={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <span className={sizeClasses[size]}>
        {favorited ? "⭐" : "☆"}
      </span>
      {showLabel && (
        <span className="text-xs">
          {favorited ? "Favorito" : "Favoritar"}
        </span>
      )}
    </button>
  );
};

// Favorites Filter Props
export interface FavoritesFilterProps {
  type: FavoriteType;
  showOnlyFavorites: boolean;
  onToggle: (show: boolean) => void;
  className?: string;
}

// Favorites Filter Component
export const FavoritesFilter = ({ 
  type, 
  showOnlyFavorites, 
  onToggle,
  className = ""
}: FavoritesFilterProps) => {
  const context = useContext(FavoritesContext);
  if (!context) {
    return null;
  }
  
  const { getFavoritesByType } = context;
  const count = getFavoritesByType(type).length;

  return (
    <button
      onClick={() => onToggle(!showOnlyFavorites)}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
        ${showOnlyFavorites 
          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" 
          : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
        }
        ${className}
      `}
    >
      <span>{showOnlyFavorites ? "⭐" : "☆"}</span>
      <span>Favoritos</span>
      {count > 0 && (
        <span className="px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 text-xs">
          {count}
        </span>
      )}
    </button>
  );
};
