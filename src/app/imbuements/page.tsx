"use client";

import { useState } from "react";
import Link from "next/link";
import LootImage from "@/app/components/LootImage";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

interface ImbuementData {
  id: string;
  name: string;
  category: "Elemental Damage" | "Skill Boost" | "Utility" | "Elemental Protection";
  tier: 3;
  effect: string;
  slots: string[];
  materials: { item: string; amount: number; source: string }[];
  recommended: "Essencial" | "Situacional" | "Opcional";
}

const imbuements: ImbuementData[] = [
  // Elemental Damage
  { id: "scorch", name: "Scorch (Fire)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico vira Fire Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Green Dragon Leather", amount: 25, source: "Dragon" }, { item: "Red Dragon Leather", amount: 10, source: "Dragon Lord" }, { item: "Hardened Bone", amount: 5, source: "Hellspawn" }], recommended: "Situacional" },
  { id: "venom", name: "Venom (Earth)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico vira Earth Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Piece of Swamplurker Skin", amount: 25, source: "Swamplurker" }, { item: "Broken Shamanic Staff", amount: 20, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }], recommended: "Situacional" },
  { id: "frost", name: "Frost (Ice)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico vira Ice Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Winter Wolf Fur", amount: 25, source: "Winter Wolf" }, { item: "Thick Fur", amount: 15, source: "Mammoth" }, { item: "Deepling Warts", amount: 10, source: "Deepling" }], recommended: "Situacional" },
  { id: "electrify", name: "Electrify (Energy)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico vira Energy Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Wool", amount: 20, source: "Sheep" }, { item: "Crawler Head Plating", amount: 15, source: "Crawler" }, { item: "Wyrm Scale", amount: 10, source: "Wyrm" }], recommended: "Situacional" },
  { id: "reap", name: "Reap (Death)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico vira Death Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Flask of Embalming Fluid", amount: 25, source: "Mummy" }, { item: "Gloom Wolf Fur", amount: 20, source: "Gloom Wolf" }, { item: "Mystical Hourglass", amount: 5, source: "Ghastly Dragon" }], recommended: "Situacional" },

  // Skill Boost
  { id: "bash", name: "Bash (Club)", category: "Skill Boost", tier: 3, effect: "+4 Club Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Cyclops Toe", amount: 25, source: "Cyclops" }, { item: "Ogre Nose Ring", amount: 25, source: "Ogre Brute" }, { item: "Warmaster's Wristguards", amount: 5, source: "Draken Warmaster" }], recommended: "Situacional" },
  { id: "chop", name: "Chop (Axe)", category: "Skill Boost", tier: 3, effect: "+4 Axe Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Orc Tooth", amount: 25, source: "Orc" }, { item: "Battle Stone", amount: 25, source: "War Golem" }, { item: "Moohtant Horn", amount: 5, source: "Moohtant" }], recommended: "Situacional" },
  { id: "slash", name: "Slash (Sword)", category: "Skill Boost", tier: 3, effect: "+4 Sword Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Lion's Mane", amount: 25, source: "Lion" }, { item: "Mooh'tah Shell", amount: 25, source: "Mooh'tah Warrior" }, { item: "War Crystal", amount: 5, source: "War Golem" }], recommended: "Situacional" },
  { id: "blockade", name: "Blockade (Shield)", category: "Skill Boost", tier: 3, effect: "+4 Shielding", slots: ["Shield", "Armor"], materials: [{ item: "Piece of Scarab Shell", amount: 20, source: "Scarab" }, { item: "Brimstone Shell", amount: 25, source: "Brimstone Bug" }, { item: "Frazzle Skin", amount: 5, source: "Frazzlemaw" }], recommended: "Situacional" },
  { id: "precision", name: "Precision (Dist)", category: "Skill Boost", tier: 3, effect: "+4 Distance Fighting", slots: ["Helmet", "Bow/Xbow"], materials: [{ item: "Elven Scouting Glass", amount: 25, source: "Elf Scout" }, { item: "Elven Hoof", amount: 20, source: "Forest Fury" }, { item: "Metal Spike", amount: 10, source: "War Golem" }], recommended: "Situacional" },
  { id: "epiphany", name: "Epiphany (Magic)", category: "Skill Boost", tier: 3, effect: "+4 Magic Level", slots: ["Helmet"], materials: [{ item: "Elvish Talisman", amount: 25, source: "Elf Arcanist" }, { item: "Broken Shamanic Staff", amount: 15, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }], recommended: "Situacional" },

  // Utility (Core)
  { id: "strike", name: "Strike (Critical)", category: "Utility", tier: 3, effect: "+50% Crit Damage, 10% Chance", slots: ["Melee Weapon", "Bow/Xbow"], materials: [{ item: "Protective Charm", amount: 20, source: "Amazon" }, { item: "Sabretooth", amount: 25, source: "Mutated Tiger" }, { item: "Vexclaw Talon", amount: 5, source: "Vexclaw" }], recommended: "Essencial" },
  { id: "vampirism", name: "Vampirism (Life)", category: "Utility", tier: 3, effect: "25% Life Leech", slots: ["Melee Weapon", "Armor"], materials: [{ item: "Vampire Teeth", amount: 25, source: "Vampire" }, { item: "Bloody Pincers", amount: 15, source: "Blood Crab" }, { item: "Piece of Dead Brain", amount: 5, source: "Blightwalker" }], recommended: "Essencial" },
  { id: "void", name: "Void (Mana)", category: "Utility", tier: 3, effect: "8% Mana Leech", slots: ["Melee Weapon", "Helmet"], materials: [{ item: "Rope Belt", amount: 25, source: "Nomad" }, { item: "Silencer Claws", amount: 25, source: "Silencer" }, { item: "Some Grimeleech Wings", amount: 5, source: "Grimeleech" }], recommended: "Essencial" },
  { id: "swiftness", name: "Swiftness (Speed)", category: "Utility", tier: 3, effect: "+30 Speed", slots: ["Boots"], materials: [{ item: "Damselfly Wing", amount: 15, source: "Damselfly" }, { item: "Compass", amount: 25, source: "Pirate" }, { item: "Waspoid Wing", amount: 20, source: "Waspoid" }], recommended: "Opcional" },
  { id: "featherweight", name: "Featherweight (Cap)", category: "Utility", tier: 3, effect: "+15% Capacity", slots: ["Backpack"], materials: [{ item: "Fairy Wings", amount: 20, source: "Fairy" }, { item: "Little Bowl of Myrrh", amount: 10, source: "Putrid Mummy" }, { item: "Goosebump Leather", amount: 5, source: "Undead Elite Gladiator" }], recommended: "Opcional" },

  // Elemental Protection
  { id: "dragon-hide", name: "Dragon Hide (Fire Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Fire Protection", slots: ["Armor", "Shield"], materials: [{ item: "Green Dragon Leather", amount: 25, source: "Dragon" }, { item: "Red Dragon Leather", amount: 10, source: "Dragon Lord" }, { item: "Hardened Bone", amount: 5, source: "Hellspawn" }], recommended: "Situacional" },
  { id: "quara-scale", name: "Quara Scale (Ice Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Ice Protection", slots: ["Armor", "Shield"], materials: [{ item: "Winter Wolf Fur", amount: 25, source: "Winter Wolf" }, { item: "Thick Fur", amount: 15, source: "Mammoth" }, { item: "Deepling Warts", amount: 10, source: "Deepling" }], recommended: "Situacional" },
  { id: "snake-skin", name: "Snake Skin (Earth Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Earth Protection", slots: ["Armor", "Shield"], materials: [{ item: "Piece of Swamplurker Skin", amount: 25, source: "Swamplurker" }, { item: "Broken Shamanic Staff", amount: 20, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }], recommended: "Situacional" },
  { id: "cloud-fabric", name: "Cloud Fabric (Energy Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Energy Protection", slots: ["Armor", "Shield"], materials: [{ item: "Wool", amount: 20, source: "Sheep" }, { item: "Crawler Head Plating", amount: 15, source: "Crawler" }, { item: "Wyrm Scale", amount: 10, source: "Wyrm" }], recommended: "Situacional" },
  { id: "lich-shroud", name: "Lich Shroud (Death Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Death Protection", slots: ["Armor", "Shield"], materials: [{ item: "Flask of Embalming Fluid", amount: 25, source: "Mummy" }, { item: "Gloom Wolf Fur", amount: 20, source: "Gloom Wolf" }, { item: "Mystical Hourglass", amount: 5, source: "Ghastly Dragon" }], recommended: "Situacional" },
  { id: "demon-presence", name: "Demon Presence (Holy Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Holy Protection", slots: ["Armor", "Shield"], materials: [{ item: "Cultish Robe", amount: 25, source: "Cult" }, { item: "Cultish Mask", amount: 25, source: "Cult" }, { item: "Hellspawn Tail", amount: 20, source: "Hellspawn" }], recommended: "Situacional" },
];

const categoryIcons: Record<ImbuementData["category"], string> = {
  "Utility": "⚡",
  "Skill Boost": "📈",
  "Elemental Damage": "🔥",
  "Elemental Protection": "🛡️"
};

const categoryColors: Record<ImbuementData["category"], string> = {
  "Utility": "from-blue-500 to-cyan-500",
  "Skill Boost": "from-purple-500 to-pink-500",
  "Elemental Damage": "from-red-500 to-orange-500",
  "Elemental Protection": "from-green-500 to-emerald-500"
};

const recBadgeColor: Record<string, string> = {
  "Essencial": "bg-green-500/20 text-green-400 border-green-500/30",
  "Situacional": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Opcional": "bg-gray-500/20 text-gray-400 border-gray-500/30"
};

export default function ImbuementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Utility", "Skill Boost", "Elemental Damage", "Elemental Protection"];
  
  const filteredImbuements = imbuements.filter(imbue => {
    const matchesCategory = selectedCategory === "all" || imbue.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      imbue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      imbue.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
      imbue.materials.some(m => m.source.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome items={[{ label: "Imbuements" }]} />

      <div className="mb-8 mt-6">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3 bg-gradient-to-r from-[var(--glass-rubi-primary)] to-[var(--glass-accent-glow)] bg-clip-text text-transparent">
          <span>💎</span> Imbuements
        </h1>
        <p className="text-[var(--glass-text-secondary)] text-lg">
          Guia completo de imbuements Tier 3 para Knights.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 grid md:grid-cols-2 gap-4 glass-panel p-4">
        <div>
          <input
            type="text"
            placeholder="Buscar imbuements, efeitos ou criaturas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-input w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === "all"
                ? "glass-btn-primary"
                : "glass-btn hover:text-white"
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === cat
                  ? "glass-btn-primary"
                  : "glass-btn hover:text-white"
              }`}
            >
              <span>{categoryIcons[cat as keyof typeof categoryIcons]}</span>
              {cat.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Imbuements Grid - Cards (Mobile) / Table (Desktop) */}
      <div className="space-y-8">
        {categories.map((cat) => {
          const items = filteredImbuements.filter(i => i.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat}>
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColors[cat as keyof typeof categoryColors]} flex items-center justify-center text-xl shadow-lg`}>
                  {categoryIcons[cat as keyof typeof categoryIcons]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--glass-text-primary)]">{cat}</h2>
                  <p className="text-sm text-[var(--glass-text-muted)]">{items.length} imbuements</p>
                </div>
              </div>

              {/* Cards Layout (Mobile) */}
              <div className="md:hidden space-y-3">
                {items.map((imbue) => (
                  <div key={imbue.id} className="glass-card p-4">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-[var(--glass-text-primary)]">{imbue.name}</h3>
                          {imbue.recommended && (
                            <span className={`glass-badge ${recBadgeColor[imbue.recommended]}`}>
                              {imbue.recommended}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[var(--glass-text-secondary)]">{imbue.effect}</p>
                      </div>
                    </div>

                    {/* Slots */}
                    <div className="mb-3">
                      <p className="text-xs text-[var(--glass-text-muted)] mb-1">Equipamento:</p>
                      <div className="flex flex-wrap gap-1">
                        {imbue.slots.map(slot => (
                          <span key={slot} className="px-2 py-1 bg-[var(--glass-bg-hover)] rounded border border-[var(--glass-border)] text-xs text-[var(--glass-text-secondary)]">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Materials */}
                    <div>
                      <p className="text-xs text-[var(--glass-text-muted)] mb-2">Materiais:</p>
                      <div className="space-y-2">
                        {imbue.materials.map((mat, i) => (
                          <div key={i} className="flex items-center gap-2 bg-[var(--glass-bg)] p-2 rounded border border-[var(--glass-border)]">
                            <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-[var(--glass-bg-hover)] rounded border border-[var(--glass-border)]">
                              <LootImage 
                                src={`${BASE_WIKI_URL}/items/rubinot/${mat.item.toLowerCase().replace(/ /g, "-").replace(/'/g, "").replace(/\./g, "")}.gif`} 
                                alt={mat.item}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-[var(--glass-text-secondary)] truncate">
                                <span className="text-[var(--glass-accent-glow)] font-bold">{mat.amount}x</span> {mat.item}
                              </p>
                              <p className="text-xs text-[var(--glass-text-muted)]">
                                📍 {mat.source}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Layout (Desktop) */}
              <div className="hidden md:block rounded-xl overflow-hidden border border-[var(--glass-border)] glass-card">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[var(--glass-bg-hover)] text-[var(--glass-text-secondary)] uppercase text-xs border-b border-[var(--glass-border)]">
                    <tr>
                      <th className="px-4 py-3 w-[20%]">Nome</th>
                      <th className="px-4 py-3 w-[20%]">Efeito</th>
                      <th className="px-4 py-3 w-[15%]">Equipamento</th>
                      <th className="px-4 py-3 w-[45%]">Materiais Necessários</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--glass-border)]">
                    {items.map((imbue) => (
                      <tr key={imbue.id} className="hover:bg-[var(--glass-bg-hover)] transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[var(--glass-text-primary)]">{imbue.name}</span>
                            {imbue.recommended && (
                              <span className={`glass-badge ${recBadgeColor[imbue.recommended]}`}>
                                {imbue.recommended}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-[var(--glass-text-secondary)] text-xs">
                          {imbue.effect}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {imbue.slots.map(slot => (
                              <span key={slot} className="px-2 py-0.5 bg-[var(--glass-bg)] rounded border border-[var(--glass-border)] text-xs text-[var(--glass-text-muted)] whitespace-nowrap">
                                {slot}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-2">
                            {imbue.materials.map((mat, i) => (
                              <div key={i} className="flex items-center gap-1.5 bg-[var(--glass-bg)] pr-2 rounded border border-[var(--glass-border)]" title={`Drop: ${mat.source}`}>
                                <div className="w-6 h-6 flex items-center justify-center shrink-0 bg-[var(--glass-bg-hover)] rounded-l">
                                  <LootImage 
                                    src={`${BASE_WIKI_URL}/items/rubinot/${mat.item.toLowerCase().replace(/ /g, "-").replace(/'/g, "").replace(/\./g, "")}.gif`} 
                                    alt={mat.item}
                                    className="w-5 h-5 object-contain"
                                  />
                                </div>
                                <span className="text-xs text-[var(--glass-text-secondary)]">
                                  <span className="text-[var(--glass-accent-glow)] font-bold">{mat.amount}</span> {mat.item.split(' ').slice(-1)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {filteredImbuements.length === 0 && (
        <div className="text-center py-12 text-[var(--glass-text-muted)]">
          Nenhum imbuement encontrado com os filtros selecionados.
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-12 glass-card p-6">
        <h2 className="text-xl font-bold mb-4 text-[var(--glass-text-primary)]">💡 Dicas de Imbuement</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-[var(--glass-bg-hover)] rounded-lg border border-[var(--glass-border)]">
            <h3 className="font-bold text-green-400 mb-2">⭐ Essenciais</h3>
            <p className="text-sm text-[var(--glass-text-secondary)]">
              Strike (Critical), Vampirism (Life Leech) e Void (Mana Leech) são os mais importantes para Knights. Priorize materiais caros como Vexclaw Talon e Silencer Claws.
            </p>
          </div>
          <div className="p-4 bg-[var(--glass-bg-hover)] rounded-lg border border-[var(--glass-border)]">
            <h3 className="font-bold text-amber-400 mb-2">💰 Farming de Materiais</h3>
            <p className="text-sm text-[var(--glass-text-secondary)]">
              Materiais raros dropam de criaturas específicas: Vexclaw Talon (Vexclaw), Silencer Claws (Silencer), Grimeleech Wings (Grimeleech). Use Prey de Loot para maximizar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
