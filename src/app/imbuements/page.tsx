import Link from "next/link";
import LootImage from "@/app/components/LootImage";

const BASE_WIKI_URL = "https://wiki.rubinot.com";

interface ImbuementData {
  id: string;
  name: string;
  category: "Elemental Damage" | "Skill Boost" | "Utility" | "Elemental Protection";
  tier: 3;
  effect: string;
  slots: string[];
  materials: { item: string; amount: number; source: string }[];
}

const imbuements: ImbuementData[] = [
  // Elemental Damage
  { id: "scorch", name: "Scorch (Fire)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico viram Fire Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Green Dragon Leather", amount: 25, source: "Dragon" }, { item: "Red Dragon Leather", amount: 10, source: "Dragon Lord" }, { item: "Hardened Bone", amount: 5, source: "Hellspawn" }] },
  { id: "venom", name: "Venom (Earth)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico viram Earth Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Piece of Swamplurker Skin", amount: 25, source: "Swamplurker" }, { item: "Broken Shamanic Staff", amount: 20, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }] },
  { id: "frost", name: "Frost (Ice)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico viram Ice Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Winter Wolf Fur", amount: 25, source: "Winter Wolf" }, { item: "Thick Fur", amount: 15, source: "Mammoth" }, { item: "Deepling Warts", amount: 10, source: "Deepling" }] },
  { id: "electrify", name: "Electrify (Energy)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico viram Energy Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Wool", amount: 20, source: "Sheep" }, { item: "Crawler Head Plating", amount: 15, source: "Crawler" }, { item: "Wyrm Scale", amount: 10, source: "Wyrm" }] },
  { id: "reap", name: "Reap (Death)", category: "Elemental Damage", tier: 3, effect: "50% do dano físico viram Death Damage + 10% Extra", slots: ["Melee Weapon"], materials: [{ item: "Flask of Embalming Fluid", amount: 25, source: "Mummy" }, { item: "Gloom Wolf Fur", amount: 20, source: "Gloom Wolf" }, { item: "Mystical Hourglass", amount: 5, source: "Ghastly Dragon" }] },

  // Skill Boost
  { id: "bash", name: "Bash (Club)", category: "Skill Boost", tier: 3, effect: "+4 Club Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Cyclops Toe", amount: 25, source: "Cyclops" }, { item: "Ogre Nose Ring", amount: 25, source: "Ogre Brute" }, { item: "Warmaster's Wristguards", amount: 5, source: "Draken Warmaster" }] },
  { id: "chop", name: "Chop (Axe)", category: "Skill Boost", tier: 3, effect: "+4 Axe Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Orc Tooth", amount: 25, source: "Orc" }, { item: "Battle Stone", amount: 25, source: "War Golem" }, { item: "Moohtant Horn", amount: 5, source: "Moohtant" }] },
  { id: "slash", name: "Slash (Sword)", category: "Skill Boost", tier: 3, effect: "+4 Sword Fighting", slots: ["Helmet", "Melee Weapon"], materials: [{ item: "Lion's Mane", amount: 25, source: "Lion" }, { item: "Mooh'tah Shell", amount: 25, source: "Mooh'tah Warrior" }, { item: "War Crystal", amount: 5, source: "War Golem" }] },
  { id: "blockade", name: "Blockade (Shield)", category: "Skill Boost", tier: 3, effect: "+4 Shielding", slots: ["Shield", "Armor"], materials: [{ item: "Piece of Scarab Shell", amount: 20, source: "Scarab" }, { item: "Brimstone Shell", amount: 25, source: "Brimstone Bug" }, { item: "Frazzle Skin", amount: 5, source: "Frazzlemaw" }] },
  { id: "precision", name: "Precision (Dist)", category: "Skill Boost", tier: 3, effect: "+4 Distance Fighting", slots: ["Helmet", "Bow/Xbow"], materials: [{ item: "Elven Scouting Glass", amount: 25, source: "Elf Scout" }, { item: "Elven Hoof", amount: 20, source: "Forest Fury" }, { item: "Metal Spike", amount: 10, source: "War Golem" }] },
  { id: "epiphany", name: "Epiphany (Magic)", category: "Skill Boost", tier: 3, effect: "+4 Magic Level", slots: ["Helmet"], materials: [{ item: "Elvish Talisman", amount: 25, source: "Elf Arcanist" }, { item: "Broken Shamanic Staff", amount: 15, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }] },

  // Utility (Core)
  { id: "strike", name: "Strike (Critical)", category: "Utility", tier: 3, effect: "+50% Crit Damage, 10% Chance", slots: ["Melee Weapon", "Bow/Xbow"], materials: [{ item: "Protective Charm", amount: 20, source: "Amazon" }, { item: "Sabretooth", amount: 25, source: "Mutated Tiger" }, { item: "Vexclaw Talon", amount: 5, source: "Vexclaw" }] },
  { id: "vampirism", name: "Vampirism (Life)", category: "Utility", tier: 3, effect: "25% Life Leech", slots: ["Melee Weapon", "Armor"], materials: [{ item: "Vampire Teeth", amount: 25, source: "Vampire" }, { item: "Bloody Pincers", amount: 15, source: "Blood Crab" }, { item: "Piece of Dead Brain", amount: 5, source: "Blightwalker" }] },
  { id: "void", name: "Void (Mana)", category: "Utility", tier: 3, effect: "8% Mana Leech", slots: ["Melee Weapon", "Helmet"], materials: [{ item: "Rope Belt", amount: 25, source: "Nomad" }, { item: "Silencer Claws", amount: 25, source: "Silencer" }, { item: "Some Grimeleech Wings", amount: 5, source: "Grimeleech" }] },
  { id: "swiftness", name: "Swiftness (Speed)", category: "Utility", tier: 3, effect: "+30 Speed", slots: ["Boots"], materials: [{ item: "Damselfly Wing", amount: 15, source: "Damselfly" }, { item: "Compass", amount: 25, source: "Pirate" }, { item: "Waspoid Wing", amount: 20, source: "Waspoid" }] },
  { id: "featherweight", name: "Featherweight (Cap)", category: "Utility", tier: 3, effect: "+15% Capacity", slots: ["Backpack"], materials: [{ item: "Fairy Wings", amount: 20, source: "Fairy" }, { item: "Little Bowl of Myrrh", amount: 10, source: "Putrid Mummy" }, { item: "Goosebump Leather", amount: 5, source: "Undead Elite Gladiator" }] },

  // Elemental Protection
  { id: "dragon-hide", name: "Dragon Hide (Fire Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Fire Protection", slots: ["Armor", "Shield"], materials: [{ item: "Green Dragon Leather", amount: 25, source: "Dragon" }, { item: "Red Dragon Leather", amount: 10, source: "Dragon Lord" }, { item: "Hardened Bone", amount: 5, source: "Hellspawn" }] },
  { id: "quara-scale", name: "Quara Scale (Ice Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Ice Protection", slots: ["Armor", "Shield"], materials: [{ item: "Winter Wolf Fur", amount: 25, source: "Winter Wolf" }, { item: "Thick Fur", amount: 15, source: "Mammoth" }, { item: "Deepling Warts", amount: 10, source: "Deepling" }] },
  { id: "snake-skin", name: "Snake Skin (Earth Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Earth Protection", slots: ["Armor", "Shield"], materials: [{ item: "Piece of Swamplurker Skin", amount: 25, source: "Swamplurker" }, { item: "Broken Shamanic Staff", amount: 20, source: "Orc Shaman" }, { item: "Strand of Medusa Hair", amount: 5, source: "Medusa" }] },
  { id: "cloud-fabric", name: "Cloud Fabric (Energy Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Energy Protection", slots: ["Armor", "Shield"], materials: [{ item: "Wool", amount: 20, source: "Sheep" }, { item: "Crawler Head Plating", amount: 15, source: "Crawler" }, { item: "Wyrm Scale", amount: 10, source: "Wyrm" }] },
  { id: "lich-shroud", name: "Lich Shroud (Death Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Death Protection", slots: ["Armor", "Shield"], materials: [{ item: "Flask of Embalming Fluid", amount: 25, source: "Mummy" }, { item: "Gloom Wolf Fur", amount: 20, source: "Gloom Wolf" }, { item: "Mystical Hourglass", amount: 5, source: "Ghastly Dragon" }] },
  { id: "demon-presence", name: "Demon Presence (Holy Prot)", category: "Elemental Protection", tier: 3, effect: "+15% Holy Protection", slots: ["Armor", "Shield"], materials: [{ item: "Cultish Robe", amount: 25, source: "Cult" }, { item: "Cultish Mask", amount: 25, source: "Cult" }, { item: "Hellspawn Tail", amount: 20, source: "Hellspawn" }] },
];

export default function ImbuementsPage() {
  const categories = ["Utility", "Skill Boost", "Elemental Damage", "Elemental Protection"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>💎</span> Imbuements
        </h1>
        <p className="text-gray-400">
          Tabela completa de imbuements poderosos (Tier 3).
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat) => {
          const items = imbuements.filter(i => i.category === cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="rounded-lg overflow-hidden border border-gray-700 bg-[#1e1e2e]">
              <div className="bg-[#2a2a3e] px-4 py-3 border-b border-gray-700">
                <h2 className="text-lg font-bold text-white">{cat}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#14141f] text-gray-400 uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 w-[20%]">Nome</th>
                      <th className="px-4 py-3 w-[25%]">Efeito (Powerful)</th>
                      <th className="px-4 py-3 w-[20%]">Equipamento</th>
                      <th className="px-4 py-3 w-[35%]">Materiais Necessários</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {items.map((imbue) => (
                      <tr key={imbue.id} className="hover:bg-[#252535] transition-colors">
                        <td className="px-4 py-3 font-semibold text-purple-300">
                          {imbue.name}
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          {imbue.effect}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {imbue.slots.map(slot => (
                              <span key={slot} className="px-2 py-0.5 bg-black/40 rounded border border-gray-700 text-xs text-gray-400 whitespace-nowrap">
                                {slot}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-3">
                            {imbue.materials.map((mat, i) => (
                              <div key={i} className="flex items-center gap-1.5 bg-black/20 pr-2 rounded border border-gray-800" title={`Drop: ${mat.source}`}>
                                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                   <LootImage 
                                      src={`${BASE_WIKI_URL}/items/rubinot/${mat.item.toLowerCase().replace(/ /g, "-").replace(/'/g, "").replace(/\./g, "")}.gif`} 
                                      alt={mat.item}
                                      className="w-5 h-5 object-contain"
                                   />
                                </div>
                                <span className="text-xs text-gray-300">
                                  <span className="text-purple-400 font-bold">{mat.amount}</span> {mat.item.split(' ').slice(-1)} {/* Nome curto */}
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
    </div>
  );
}
