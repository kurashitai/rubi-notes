import Link from "next/link";
import LootImage from "@/app/components/LootImage";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

interface Weapon {
  name: string;
  level: number;
  atk: string;
  def: string;
  slots: number;
  element?: string;
  elementDmg?: string;
  obtain: string;
}

const weapons: Weapon[] = [
  // Physical
  { name: "Mace", level: 8, atk: "16", def: "11", slots: 0, obtain: "Rookgaard Shop" },
  { name: "Morning Star", level: 20, atk: "25", def: "11", slots: 0, obtain: "Loots (Rotworm)" },
  { name: "Clerical Mace", level: 20, atk: "28", def: "15", slots: 0, obtain: "Loots (Ghoul)" },
  { name: "Furry Club", level: 20, atk: "31", def: "16", slots: 1, obtain: "Market / Mammoth" },
  { name: "Dragon Hammer", level: 25, atk: "32", def: "20", slots: 0, obtain: "Dragons" },
  { name: "Skull Staff", level: 30, atk: "36", def: "12", slots: 1, obtain: "Necromancers" },
  { name: "Deepling Squelcher", level: 48, atk: "44", def: "26", slots: 2, obtain: "Deeplings" },
  { name: "Ornate Mace", level: 50, atk: "37", def: "13", slots: 3, obtain: "Market (Barato)" },
  { name: "Cranial Basher", level: 60, atk: "44", def: "20", slots: 2, obtain: "Medusa" },
  { name: "Heavy Mace", level: 70, atk: "49", def: "15", slots: 2, obtain: "Wereboar" },
  { name: "Arcane Staff", level: 75, atk: "50", def: "30", slots: 2, obtain: "POI Quest" },
  { name: "Blessed Sceptre", level: 75, atk: "47", def: "21", slots: 3, obtain: "Arena Quest" },
  { name: "Obsidian Truncheon", level: 100, atk: "50", def: "30", slots: 3, obtain: "INQ Quest" },
  { name: "Myco. Mace", level: 120, atk: "50", def: "31", slots: 3, obtain: "Market" },
  { name: "Umbral Mace", level: 120, atk: "51", def: "32", slots: 1, obtain: "Warzone" },
  { name: "Mace of Dest.", level: 200, atk: "53", def: "32", slots: 3, obtain: "Tokens" },
  { name: "Umbral Master Mace", level: 250, atk: "55", def: "33", slots: 3, obtain: "Roshamuul" },
  { name: "Falcon Mace", level: 300, atk: "58", def: "35", slots: 2, element: "Energy", elementDmg: "+8%", obtain: "Oberon" },

  // Elemental - Ice
  { name: "Resizer", level: 200, atk: "52", def: "31", slots: 2, element: "Ice", elementDmg: "41 Phy + 11 Ice", obtain: "Cults of Tibia" },
  { name: "Soulcrusher", level: 400, atk: "54", def: "33", slots: 3, element: "Ice", elementDmg: "44 Phy + 10 Ice", obtain: "Soul War" },

  // Elemental - Energy
  { name: "Lion Hammer", level: 270, atk: "54", def: "33", slots: 3, element: "Energy", elementDmg: "44 Phy + 10 Energy", obtain: "Drume" },
  { name: "Gnome Club", level: 250, atk: "52", def: "32", slots: 2, element: "Energy", elementDmg: "44 Phy + 8 Energy", obtain: "Warzone 4-6" },

  // Elemental - Fire
  { name: "Cobra Club", level: 220, atk: "53", def: "32", slots: 2, element: "Fire", elementDmg: "43 Phy + 10 Fire", obtain: "Scarlett" },

  // Elemental - Death
  { name: "Mortal Mace", level: 220, atk: "52", def: "32", slots: 2, element: "Death", elementDmg: "42 Phy + 10 Death", obtain: "Grave Danger" },
  { name: "Soulmaimer", level: 400, atk: "56", def: "34", slots: 3, element: "Death", elementDmg: "44 Phy + 12 Death", obtain: "Soul War" },
];

export default function WeaponsPage() {
  const physical = weapons.filter((w) => !w.element);
  const elemental = weapons.filter((w) => w.element);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome items={[{ label: "Armas" }]} />

      {/* Header */}
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          <span>⚔️</span> Armas (Club)
        </h1>
        <p className="text-[var(--glass-text-secondary)]">
          Progressão recomendada de armas para Knight Club.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Physical Weapons */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--glass-text-primary)]">
            <span>🔨</span> Dano Físico
          </h2>
          <div className="space-y-3">
            {physical.map((weapon, i) => (
              <div key={i} className="glass-card p-3 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-[var(--glass-bg-hover)] rounded-lg flex items-center justify-center shrink-0 border border-[var(--glass-border)]">
                  <LootImage 
                    src={`${BASE_WIKI_URL}/items/rubinot/${weapon.name.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}.gif`} 
                    alt={weapon.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[var(--glass-text-primary)] text-sm">{weapon.name}</h3>
                    <span className="text-xs glass-badge px-2 py-0.5">Lvl {weapon.level}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-[var(--glass-text-muted)] mt-1">
                    <span>Atk: <span className="text-[var(--glass-text-secondary)]">{weapon.atk}</span></span>
                    <span>Def: <span className="text-[var(--glass-text-secondary)]">{weapon.def}</span></span>
                    <span>Slots: <span className="text-[var(--glass-rubi-primary)]">{weapon.slots}</span></span>
                  </div>
                  <div className="text-xs text-[var(--glass-text-muted)] mt-1 italic opacity-80">
                    Obter: {weapon.obtain}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Elemental Weapons */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--glass-accent-glow)]">
            <span>⚡</span> Elementais (Mid/Late Game)
          </h2>
          <div className="space-y-3">
            {elemental.map((weapon, i) => (
              <div key={i} className={`glass-card p-3 flex items-center gap-4 hover:scale-[1.02] transition-transform border-l-4 ${
                weapon.element === "Ice" ? "border-l-cyan-500" :
                weapon.element === "Fire" ? "border-l-red-500" :
                weapon.element === "Energy" ? "border-l-purple-500" :
                weapon.element === "Death" ? "border-l-gray-500" :
                "border-l-[var(--glass-border)]"
              }`}>
                <div className="w-12 h-12 bg-[var(--glass-bg-hover)] rounded-lg flex items-center justify-center shrink-0 border border-[var(--glass-border)]">
                   <LootImage 
                    src={`${BASE_WIKI_URL}/items/rubinot/${weapon.name.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}.gif`} 
                    alt={weapon.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[var(--glass-text-primary)] text-sm">{weapon.name}</h3>
                    <span className="text-xs glass-badge px-2 py-0.5">Lvl {weapon.level}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-[var(--glass-text-muted)] mt-1">
                    <span>Atk: <span className="text-[var(--glass-text-secondary)]">{weapon.atk}</span></span>
                    <span className={`px-1.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                      weapon.element === "Ice" ? "bg-cyan-500/20 text-cyan-300" :
                      weapon.element === "Fire" ? "bg-red-500/20 text-red-300" :
                      weapon.element === "Energy" ? "bg-purple-500/20 text-purple-300" :
                      weapon.element === "Death" ? "bg-gray-500/20 text-gray-300" :
                      "bg-gray-700"
                    }`}>
                      {weapon.element}
                    </span>
                    <span>Slots: <span className="text-[var(--glass-rubi-primary)]">{weapon.slots}</span></span>
                  </div>
                   <div className="text-xs text-[var(--glass-text-secondary)] mt-1 font-mono">
                    {weapon.elementDmg}
                  </div>
                  <div className="text-xs text-[var(--glass-text-muted)] mt-1 italic opacity-80">
                    Obter: {weapon.obtain}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
