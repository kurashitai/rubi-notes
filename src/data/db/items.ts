export interface ItemRecord {
  id: string;
  name: string;
  slug: string;
  category?: string | null;
}

export const itemsDb: ItemRecord[] = [];
