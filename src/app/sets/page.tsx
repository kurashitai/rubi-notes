import Link from "next/link";
import LootImage from "@/app/components/LootImage";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

interface SetItem {
  name: string;
  slot: "Helmet" | "Armor" | "Legs" | "Boots" | "Shield" | "Amulet" | "Ring";
  level: number;
  stats: string;
  resist?: string;
  imbueSlots: number;
  obtain: string;
}

const equipment: SetItem[] = [
  // Helmets
  { name: "Soldier Helmet", slot: "Helmet", level: 8, stats: "Arm: 5", imbueSlots: 0, obtain: "Loots / Shop" },
  { name: "Dark Helmet", slot: "Helmet", level: 20, stats: "Arm: 6", imbueSlots: 0, obtain: "Rotworms" },
  { name: "Crusader Helmet", slot: "Helmet", level: 40, stats: "Arm: 8", imbueSlots: 0, obtain: "Quest (Dwarf Mines)" },
  { name: "Zaoan Helmet", slot: "Helmet", level: 50, stats: "Arm: 9, Phy +5%", imbueSlots: 1, obtain: "WOTE Quest" },
  { name: "Prismatic Helmet", slot: "Helmet", level: 150, stats: "Arm: 9, Phy +5%", imbueSlots: 1, obtain: "Warzone" },
  { name: "Terra Helmet", slot: "Helmet", level: 230, stats: "Arm: 9, Earth +5%", imbueSlots: 2, obtain: "Oberon / Market" },
  { name: "Cobra Hood", slot: "Helmet", level: 270, stats: "Arm: 10, Skill +2", imbueSlots: 2, obtain: "Scarlett" },
  { name: "Falcon Coif", slot: "Helmet", level: 300, stats: "Arm: 10, Phy +3%, Fire +10%", imbueSlots: 2, obtain: "Oberon" },

  // Armors
  { name: "Plate Armor", slot: "Armor", level: 8, stats: "Arm: 10", imbueSlots: 0, obtain: "Loots / Shop" },
  { name: "Knight Armor", slot: "Armor", level: 20, stats: "Arm: 12", imbueSlots: 0, obtain: "Quest / Cyclops" },
  { name: "Golden Armor", slot: "Armor", level: 40, stats: "Arm: 14", imbueSlots: 0, obtain: "Warlord Arena / BK Quest" },
  { name: "Dragon Scale Mail", slot: "Armor", level: 50, stats: "Arm: 15", imbueSlots: 0, obtain: "Dragons / Hydras" },
  { name: "Magic Plate Armor", slot: "Armor", level: 80, stats: "Arm: 16", imbueSlots: 1, obtain: "ANI Quest" },
  { name: "Prismatic Armor", slot: "Armor", level: 120, stats: "Arm: 15, Phy +5%, Speed +15", imbueSlots: 1, obtain: "Warzone" },
  { name: "Ornate Chestplate", slot: "Armor", level: 200, stats: "Arm: 16, Phy +8%, Shield +3", imbueSlots: 2, obtain: "Market (Loot)" },
  { name: "Falcon Plate", slot: "Armor", level: 300, stats: "Arm: 18, Phy +12%, Shield +4", imbueSlots: 2, obtain: "Oberon" },
  { name: "Lion Plate", slot: "Armor", level: 270, stats: "Arm: 17, Phy +10%, Skill +3", imbueSlots: 2, obtain: "Drume" },

  // Legs
  { name: "Plate Legs", slot: "Legs", level: 8, stats: "Arm: 7", imbueSlots: 0, obtain: "Loots / Shop" },
  { name: "Knight Legs", slot: "Legs", level: 20, stats: "Arm: 8", imbueSlots: 0, obtain: "Quest / Giant Spider" },
  { name: "Zaoan Legs", slot: "Legs", level: 50, stats: "Arm: 8, Phy +2%", imbueSlots: 0, obtain: "Mission 7 WOTE / Loot" },
  { name: "Dwarven Legs", slot: "Legs", level: 40, stats: "Arm: 7, Phy +3%", imbueSlots: 0, obtain: "Quest (Hidden)" },
  { name: "Ornate Legs", slot: "Legs", level: 185, stats: "Arm: 8, Phy +5%", imbueSlots: 0, obtain: "Market (Loot)" },
  { name: "Fabulous Legs", slot: "Legs", level: 225, stats: "Arm: 9, Phy +4%, Fire +2%, Skill +2", imbueSlots: 0, obtain: "Oberon / Market" },
  { name: "Falcon Greaves", slot: "Legs", level: 300, stats: "Arm: 10, Phy +7%, Ice +7%", imbueSlots: 0, obtain: "Oberon" },

  // Boots
  { name: "Leather Boots", slot: "Boots", level: 8, stats: "Arm: 1", imbueSlots: 0, obtain: "Basic" },
  { name: "Boots of Haste", slot: "Boots", level: 20, stats: "Speed +20", imbueSlots: 0, obtain: "Necromancers / Quest" },
  { name: "Guardian Boots", slot: "Boots", level: 70, stats: "Arm: 3, Phy +2%, Holy -2%", imbueSlots: 0, obtain: "Market" },
  { name: "Depth Calcei", slot: "Boots", level: 150, stats: "Arm: 3, Phy +5%, Water -5%", imbueSlots: 0, obtain: "Deeplings" },
  { name: "Cobra Boots", slot: "Boots", level: 220, stats: "Arm: 3, Speed +15, Skill +1", imbueSlots: 0, obtain: "Scarlett" },
  { name: "Pair of Dreamwalkers", slot: "Boots", level: 250, stats: "Speed +20, Skill +1, Energy/Earth prot", imbueSlots: 0, obtain: "Dream Courts" },

  // Shields
  { name: "Dwarven Shield", slot: "Shield", level: 8, stats: "Def: 26", imbueSlots: 0, obtain: "Quest / Rotworm" },
  { name: "Dragon Shield", slot: "Shield", level: 25, stats: "Def: 31", imbueSlots: 0, obtain: "Dragons" },
  { name: "Tower Shield", slot: "Shield", level: 30, stats: "Def: 32", imbueSlots: 0, obtain: "Quest (Kazordoon)" },
  { name: "Medusa Shield", slot: "Shield", level: 40, stats: "Def: 33", imbueSlots: 0, obtain: "Necromancers" },
  { name: "Vampire Shield", slot: "Shield", level: 45, stats: "Def: 34", imbueSlots: 0, obtain: "Vampires" },
  { name: "Demon Shield", slot: "Shield", level: 60, stats: "Def: 35", imbueSlots: 1, obtain: "Quest / Demons" },
  { name: "Mastermind Shield", slot: "Shield", level: 80, stats: "Def: 37", imbueSlots: 1, obtain: "INQ / Demons" },
  { name: "Ornate Shield", slot: "Shield", level: 130, stats: "Def: 36, Phy +5%", imbueSlots: 1, obtain: "Market (Loot)" },
  { name: "Prismatic Shield", slot: "Shield", level: 150, stats: "Def: 37, Phy +4%, Speed +15", imbueSlots: 1, obtain: "Warzone" },
  { name: "Gnome Shield", slot: "Shield", level: 200, stats: "Def: 38, Phy +6%, Energy +8%, Ice -2%", imbueSlots: 1, obtain: "Warzone 4-6" },
  { name: "Falcon Shield", slot: "Shield", level: 300, stats: "Def: 39, Phy +10%, Fire +10%", imbueSlots: 1, obtain: "Oberon" },
  { name: "Lion Shield", slot: "Shield", level: 270, stats: "Def: 39, Phy +5%, Earth/Ice +5%, Skill +3", imbueSlots: 1, obtain: "Drume" },
];

export default function SetsPage() {
  const grouped = {
    Helmet: equipment.filter(i => i.slot === "Helmet"),
    Armor: equipment.filter(i => i.slot === "Armor"),
    Legs: equipment.filter(i => i.slot === "Legs"),
    Boots: equipment.filter(i => i.slot === "Boots"),
    Shield: equipment.filter(i => i.slot === "Shield"),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome items={[{ label: "Sets e Equipamentos" }]} />

      {/* Header */}
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          <span>🛡️</span> Sets e Equipamentos
        </h1>
        <p className="text-[var(--glass-text-secondary)]">
          Guia de equipamentos defensivos e utilitários para Knight.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(grouped).map(([slot, items]) => (
          <section key={slot}>
            <h2 className="text-xl font-bold mb-4 text-[var(--glass-text-primary)] border-b border-[var(--glass-border)] pb-2 flex items-center gap-2">
              <span className="text-[var(--glass-rubi-primary)]">
                {slot === "Helmet" && "🪖"}
                {slot === "Armor" && "🦺"}
                {slot === "Legs" && "👖"}
                {slot === "Boots" && "👢"}
                {slot === "Shield" && "🛡️"}
              </span>
              {slot}s
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <div key={i} className="glass-card p-3 flex items-start gap-4 hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 bg-[var(--glass-bg-hover)] rounded-lg flex items-center justify-center shrink-0 border border-[var(--glass-border)] mt-1">
                    <LootImage 
                      src={`${BASE_WIKI_URL}/items/rubinot/${item.name.toLowerCase().replace(/ /g, "-").replace(/'/g, "").replace(/\./g, "")}.gif`} 
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1 gap-2">
                      <h3 className="font-bold text-[var(--glass-text-primary)] text-sm truncate">{item.name}</h3>
                      <span className="text-[10px] glass-badge px-1.5 py-0.5 whitespace-nowrap">
                        Lvl {item.level}
                      </span>
                    </div>
                    
                    <div className="text-xs text-[var(--glass-text-secondary)] mb-1 font-medium">
                      {item.stats}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs mt-2">
                      <span className="text-[var(--glass-text-muted)] italic truncate max-w-[120px]" title={item.obtain}>
                        📍 {item.obtain}
                      </span>
                      {item.imbueSlots > 0 && (
                        <div className="flex gap-0.5" title={`${item.imbueSlots} Slot(s) de Imbuement`}>
                          {Array(item.imbueSlots).fill(0).map((_, idx) => (
                            <span key={idx} className="w-2 h-2 rounded-full bg-[var(--glass-rubi-primary)] shadow-[0_0_5px_var(--glass-rubi-primary)]"></span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
