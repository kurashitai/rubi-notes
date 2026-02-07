// Batch de todas as hunts do Intibia (universo completo: 175 hunts)
// Gerado automaticamente a partir da API do Intibia
// Data: 2026-02-07

import intibiaHuntsRaw from "./intibia";
import type { HuntData, Monster } from "./hunts";

type IntibiaHunt = any;
const intibiaHunts = intibiaHuntsRaw as Record<string, IntibiaHunt>;

const stripHtml = (html?: string) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const formatPerHour = (value?: number) => {
  const v = value ?? 0;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}kk`;
  if (v >= 1_000) return `${Math.round(v / 1_000)}k`;
  return `${v}`;
};

const getTierFromXp = (xp?: number) => {
  const v = xp ?? 0;
  if (v >= 3_000_000) return "S";
  if (v >= 1_500_000) return "A";
  if (v >= 800_000) return "B";
  return "C";
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseEntranceDirections = (raw?: string) => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.blocks?.length) {
      const steps = parsed.blocks
        .map((block: { text?: string }) => stripHtml(block.text))
        .filter(Boolean);
      if (steps.length) return steps;
    }
  } catch {
    const fallback = stripHtml(raw);
    return fallback ? [fallback] : [];
  }
};

const buildMonsters = (hunt: any): Monster[] => {
  const creatures = hunt.sections?.flatMap((section: any) => section.creatures || []) ?? [];
  const unique = new Map<string, Monster>();
  for (const creature of creatures) {
    if (!creature?.title) continue;
    if (unique.has(creature.title)) continue;
    unique.set(creature.title, {
      name: creature.title,
      hp: creature.healthPoints ?? 0,
      exp: creature.xpPoints ?? 0,
      damage: "Unknown",
      weaknesses: {},
      immunities: [],
      bestiaryKills: 0,
      loot: [],
    });
  }
  return Array.from(unique.values());
};

const mapIntibiaHunt = (hunt: any): HuntData => {
  const name = hunt.title || hunt.dungeon?.title || "Hunt";
  const locationParts = [hunt.dungeon?.title, hunt.dungeon?.city?.name].filter(Boolean);
  const location = locationParts.length ? locationParts.join(" - ") : "Unknown";

  const howToGet = parseEntranceDirections(hunt.dungeon?.entranceDirections);
  if (!howToGet.length) howToGet.push("Veja detalhes no Intibia.");

  const instructionsText = stripHtml(hunt.instructions);
  const tips = instructionsText
    ? instructionsText.split(/\n|\.|\u2022|\*/).map((t) => t.trim()).filter(Boolean)
    : [];

  return {
    slug: `intibia-${hunt.id}-${slugify(name)}`,
    name,
    tier: getTierFromXp(hunt.maxXpH),
    levelRange: `${hunt.minLevel}-${hunt.maxLevel}`,
    location,
    rawExp: formatPerHour(hunt.maxXpH),
    baseProfit: Math.round(((hunt.maxProfitH ?? hunt.minProfitH ?? 0) as number) / 1000),
    weakness: "Unknown",
    access: {
      quest: hunt.dungeon?.accountStatus === "premium" ? "Premium Account" : "Free Access",
      requirements: hunt.requirements?.length
        ? hunt.requirements
            .map((r: any) => r?.description || r?.title || r?.name || "Requirement")
            .filter(Boolean)
        : undefined,
      howToGet,
      coordinates: hunt.centerCoordinates || hunt.dungeon?.entranceCoordinates,
    },
    monsters: buildMonsters(hunt),
    recommendedSet: {
      weapon: "-",
      weaponLevel: hunt.minLevel ?? 0,
      helmet: "-",
      armor: "-",
      legs: "-",
      boots: "-",
      shield: "-",
      amulet: "-",
      ring: "-",
    },
    imbuements: { weapon: [], armor: [], helmet: [] },
    charms: [],
    dangers: [],
    tips,
    alternatives: [],
    videoGuide: hunt.videoId ? `https://www.youtube.com/watch?v=${hunt.videoId}` : undefined,
    groupVersion: hunt.teamTag,
  };
};

export const huntsDatabaseIntibia: Record<string, HuntData> = Object.fromEntries(
  Object.values(intibiaHunts).map((hunt) => {
    const mapped = mapIntibiaHunt(hunt);
    return [mapped.slug, mapped];
  })
);

const intibiaKeys = Object.keys(huntsDatabaseIntibia);
if (intibiaKeys.length !== 175) {
  throw new Error(`Intibia HuntData count mismatch: expected 175, got ${intibiaKeys.length}`);
}
if (new Set(intibiaKeys).size !== intibiaKeys.length) {
  throw new Error("Intibia HuntData has duplicated slugs");
}

export default huntsDatabaseIntibia;
