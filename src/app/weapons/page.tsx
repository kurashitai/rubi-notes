import Link from "next/link";
import LootImage from "@/app/components/LootImage";

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>⚔️</span> Armas (Club)
        </h1>
        <p className="text-gray-400">
          Progressão recomendada de armas para Knight Club.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Physical Weapons */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-300">
            <span>🔨</span> Dano Físico
          </h2>
          <div className="space-y-3">
            {physical.map((weapon, i) => (
              <div key={i} className="card-glow bg-[#1e1e2e] p-3 rounded-lg border border-gray-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-black/40 rounded flex items-center justify-center shrink-0 border border-gray-700">
                  <LootImage 
                    src={`${BASE_WIKI_URL}/items/rubinot/${weapon.name.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}.gif`} 
                    alt={weapon.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-sm">{weapon.name}</h3>
                    <span className="text-xs bg-[#14141f] px-2 py-0.5 rounded text-gray-400">Lvl {weapon.level}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-400 mt-1">
                    <span>Atk: <span className="text-gray-200">{weapon.atk}</span></span>
                    <span>Def: <span className="text-gray-200">{weapon.def}</span></span>
                    <span>Slots: <span className="text-purple-400">{weapon.slots}</span></span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 italic">
                    Obter: {weapon.obtain}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Elemental Weapons */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-400">
            <span>⚡</span> Elementais (Mid/Late Game)
          </h2>
          <div className="space-y-3">
            {elemental.map((weapon, i) => (
              <div key={i} className="card-glow bg-[#1e1e2e] p-3 rounded-lg border border-purple-900/30 flex items-center gap-4">
                <div className="w-12 h-12 bg-black/40 rounded flex items-center justify-center shrink-0 border border-purple-900/50">
                   <LootImage 
                    src={`${BASE_WIKI_URL}/items/rubinot/${weapon.name.toLowerCase().replace(/ /g, "-").replace(/\./g, "")}.gif`} 
                    alt={weapon.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-sm">{weapon.name}</h3>
                    <span className="text-xs bg-[#14141f] px-2 py-0.5 rounded text-gray-400">Lvl {weapon.level}</span>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-400 mt-1">
                    <span>Atk: <span className="text-gray-200">{weapon.atk}</span></span>
                    <span className={`px-1.5 rounded bg-black/30 border ${
                      weapon.element === "Ice" ? "border-cyan-500 text-cyan-400" :
                      weapon.element === "Fire" ? "border-red-500 text-red-400" :
                      weapon.element === "Energy" ? "border-purple-500 text-purple-400" :
                      weapon.element === "Death" ? "border-gray-500 text-gray-300" :
                      "border-gray-700"
                    }`}>
                      {weapon.element}
                    </span>
                    <span>Slots: <span className="text-purple-400">{weapon.slots}</span></span>
                  </div>
                   <div className="text-xs text-gray-300 mt-1 font-mono">
                    {weapon.elementDmg}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 italic">
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
