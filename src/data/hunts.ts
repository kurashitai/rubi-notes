import { huntsDatabaseIntibia } from "./hunts-intibia";
import { huntsDatabaseBatch1 } from "./hunts-batch1";
import { huntsDatabaseExtra } from "./hunts-extra";
import { huntsDatabaseMissing } from "./hunts-missing";
import { huntsDatabaseFinal } from "./hunts-final-batch";
import { extraHuntsV2 } from "./hunts-extra-v2";

export const RUBINOT_LOOT_RATE = 2.5;
export const RUBINOT_BESTIARY_RATE = 2; // 2x bestiary

export interface Monster {
  name: string;
  hp: number;
  exp: number;
  damage: string;
  weaknesses: Record<string, number>;
  immunities: string[];
  bestiaryKills: number; // kills base
  loot: { item: string; chance: string; value: string; discard?: boolean }[];
  ignore?: boolean;
  ignoreReason?: string;
}

export interface HuntData {
  slug: string;
  name: string;
  tier: string;
  levelRange: string;
  location: string;
  rawExp: string;
  baseProfit: number;
  weakness: string;
  access: {
    quest?: string;
    questLink?: string;
    requirements?: string[];
    howToGet: string[];
    coordinates?: string;
  };
  monsters: Monster[];
  recommendedSet: {
    weapon: string;
    weaponLevel: number;
    helmet: string;
    armor: string;
    legs: string;
    boots: string;
    shield: string;
    amulet: string;
    ring: string;
  };
  imbuements: {
    weapon: string[];
    armor: string[];
    helmet: string[];
  };
  charms: string[];
  rotation?: string[];
  dangers: string[];
  tips: string[];
  alternatives: string[];
  videoGuide?: string;
  groupVersion?: string;
}

export const huntsDatabase: Record<string, HuntData> = {
  ...huntsDatabaseIntibia,
  ...huntsDatabaseBatch1,
  ...huntsDatabaseExtra,
  ...huntsDatabaseMissing,
  ...huntsDatabaseFinal,
  ...extraHuntsV2,
};
