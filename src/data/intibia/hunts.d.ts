export interface Monster {
  name: string;
  hp: number;
  exp: number;
  damage: string;
  armor: number;
  speed: number;
  weaknesses: Record<string, number>;
  immunities: string[];
  resistances: Record<string, number>;
  abilities: string[];
  bestiaryKills: number;
  bestiaryClass: "Trivial" | "Easy" | "Medium" | "Hard" | "Challenging";
  charmPoints: number;
  occurrence: "Common" | "Uncommon" | "Rare" | "Very Rare";
  location: string[];
  loot: Array<{ item: string; chance: string; value: string }>;
}
