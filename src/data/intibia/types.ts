export interface IntibiaHunt {
  id: string;
  title?: string | null;
  vocation?: string | null;
  teamSize?: string | null;
  teamTag?: string | null;
  minLevel?: number | null;
  maxLevel?: number | null;
  minProfitH?: number | null;
  maxProfitH?: number | null;
  minXpH?: number | null;
  maxXpH?: number | null;
  instructions?: string | null;
  centerCoordinates?: string | null;
  videoId?: string | null;
  dungeon?: any;
  requirements?: any[];
  sections?: any[];
  [key: string]: any;
}
