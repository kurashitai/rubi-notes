import { CreatureRecord } from "./creatures";

export interface BossRecord extends CreatureRecord {
  isBoss: true;
}

export const bossesDb: BossRecord[] = [];

export const bossesBySlug: Record<string, BossRecord> = Object.fromEntries(
  bossesDb.map((boss) => [boss.slug, boss])
);
