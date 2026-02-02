import Link from "next/link";

interface EquipmentItem {
  name: string;
  defense?: number;
  armor?: number;
  slots: number;
  bonus?: string;
  drop?: string;
  quest?: string;
  recommended?: boolean;
}

interface SetByLevel {
  range: string;
  helmet: EquipmentItem[];
  armor: EquipmentItem[];
  legs: EquipmentItem[];
  boots: EquipmentItem[];
  shield: EquipmentItem[];
  amulet: EquipmentItem[];
  ring: EquipmentItem[];
}

const sets: SetByLevel[] = [
  {
    range: "Level 8-50",
    helmet: [
      { name: "Zaoan Helmet", armor: 9, slots: 1, bonus: "Physical +5%", drop: "Lizards (Zao)", recommended: true },
      { name: "Demon Helmet", armor: 10, slots: 2, bonus: "-", drop: "Demons", quest: "Annihilator" },
      { name: "Royal Helmet", armor: 9, slots: 0, bonus: "-", drop: "Dragons, DLs" },
    ],
    armor: [
      { name: "Magic Plate Armor", armor: 17, slots: 2, bonus: "-", drop: "Dragons, Demons", recommended: true },
      { name: "Blue Robe", armor: 11, slots: 0, bonus: "-", drop: "Warlocks" },
      { name: "Knight Armor", armor: 12, slots: 0, bonus: "-", drop: "Knights, Heroes" },
    ],
    legs: [
      { name: "Dwarven Legs", armor: 7, slots: 0, bonus: "Physical +3%", drop: "Dwarfs", recommended: true },
      { name: "Zaoan Legs", armor: 8, slots: 0, bonus: "Physical +2%", drop: "Lizards (Zao)" },
      { name: "Knight Legs", armor: 8, slots: 0, bonus: "-", drop: "Knights" },
    ],
    boots: [
      { name: "Soft Boots", armor: 0, slots: 0, bonus: "Fast Regeneration", quest: "Enchanted Boots", recommended: true },
      { name: "Boots of Haste", armor: 0, slots: 1, bonus: "Speed +20", drop: "Demons, DLs" },
      { name: "Steel Boots", armor: 3, slots: 0, bonus: "-", drop: "Dwarfs" },
    ],
    shield: [
      { name: "Mastermind Shield", defense: 37, slots: 1, bonus: "-", drop: "Demons, Warlocks", recommended: true },
      { name: "Demon Shield", defense: 35, slots: 0, bonus: "-", drop: "Demons" },
      { name: "Blessed Shield", defense: 40, slots: 0, bonus: "-", quest: "Inquisition" },
    ],
    amulet: [
      { name: "Werewolf Amulet", armor: 3, slots: 0, bonus: "Physical +6%", drop: "Werecreatures", recommended: true },
      { name: "Platinum Amulet", armor: 2, slots: 0, bonus: "-", drop: "Various" },
      { name: "Stone Skin Amulet", armor: 0, slots: 0, bonus: "Physical/Death protect", drop: "Various" },
    ],
    ring: [
      { name: "Club Ring", armor: 0, slots: 0, bonus: "Club +4", drop: "NPC", recommended: true },
      { name: "Ring of Healing", armor: 0, slots: 0, bonus: "Faster regen", drop: "Various" },
      { name: "Life Ring", armor: 0, slots: 0, bonus: "HP regen", drop: "Various" },
    ],
  },
  {
    range: "Level 50-100",
    helmet: [
      { name: "Zaoan Helmet", armor: 9, slots: 1, bonus: "Physical +5%", drop: "Lizards", recommended: true },
      { name: "Depth Galea", armor: 8, slots: 2, bonus: "-", drop: "Deeplings" },
      { name: "Warrior Helmet", armor: 9, slots: 0, bonus: "-", drop: "Various" },
    ],
    armor: [
      { name: "Ornate Chestplate", armor: 15, slots: 2, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Magic Plate Armor", armor: 17, slots: 2, bonus: "-", drop: "Various" },
      { name: "Prismatic Armor", armor: 14, slots: 2, bonus: "Physical +5%", quest: "Ferumbras' Ascension" },
    ],
    legs: [
      { name: "Ornate Legs", armor: 8, slots: 1, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Zaoan Legs", armor: 8, slots: 0, bonus: "Physical +2%", drop: "Lizards" },
      { name: "Dwarven Legs", armor: 7, slots: 0, bonus: "Physical +3%", drop: "Dwarfs" },
    ],
    boots: [
      { name: "Depth Calcei", armor: 2, slots: 1, bonus: "Speed +15", drop: "Deeplings", recommended: true },
      { name: "Soft Boots", armor: 0, slots: 0, bonus: "Fast Regeneration", quest: "Enchanted Boots" },
      { name: "Boots of Haste", armor: 0, slots: 1, bonus: "Speed +20", drop: "Various" },
    ],
    shield: [
      { name: "Ornate Shield", defense: 39, slots: 2, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Mastermind Shield", defense: 37, slots: 1, bonus: "-", drop: "Various" },
      { name: "Prismatic Shield", defense: 38, slots: 1, bonus: "Physical +5%", drop: "Various" },
    ],
    amulet: [
      { name: "Werewolf Amulet", armor: 3, slots: 0, bonus: "Physical +6%", drop: "Werecreatures", recommended: true },
      { name: "Foxtail Amulet", armor: 2, slots: 0, bonus: "Speed +15", drop: "Werefoxes" },
      { name: "Gill Necklace", armor: 0, slots: 0, bonus: "Drowning immune", drop: "Quaras" },
    ],
    ring: [
      { name: "Club Ring", armor: 0, slots: 0, bonus: "Club +4", drop: "NPC", recommended: true },
      { name: "Prismatic Ring", armor: 0, slots: 0, bonus: "Physical +4%", drop: "Various" },
      { name: "Ring of Blue Plasma", armor: 0, slots: 0, bonus: "Mana +25", drop: "Various" },
    ],
  },
  {
    range: "Level 100-200",
    helmet: [
      { name: "Cobra Hood", armor: 10, slots: 2, bonus: "Club +4, Life Leech +5%", drop: "Cobra Bastion", recommended: true },
      { name: "Lion Spangenhelm", armor: 10, slots: 2, bonus: "Sword/Axe/Club +3", drop: "Lion Sanctuary" },
      { name: "Zaoan Helmet", armor: 9, slots: 1, bonus: "Physical +5%", drop: "Lizards" },
    ],
    armor: [
      { name: "Ornate Chestplate", armor: 15, slots: 2, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Prismatic Armor", armor: 14, slots: 2, bonus: "Physical +5%", quest: "Various" },
      { name: "Gnome Armor", armor: 14, slots: 3, bonus: "-", quest: "Warzone" },
    ],
    legs: [
      { name: "Ornate Legs", armor: 8, slots: 1, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Fabulous Legs", armor: 9, slots: 2, bonus: "-", quest: "Ferumbras' Ascension" },
      { name: "Prismatic Legs", armor: 8, slots: 1, bonus: "Physical +4%", drop: "Various" },
    ],
    boots: [
      { name: "Pair of Dreamwalkers", armor: 3, slots: 2, bonus: "Speed +20", drop: "Nightmare creatures", recommended: true },
      { name: "Depth Calcei", armor: 2, slots: 1, bonus: "Speed +15", drop: "Deeplings" },
      { name: "Guardian Boots", armor: 3, slots: 1, bonus: "Physical +3%", drop: "Various" },
    ],
    shield: [
      { name: "Ornate Shield", defense: 39, slots: 2, bonus: "-", drop: "Deeplings", recommended: true },
      { name: "Prismatic Shield", defense: 38, slots: 1, bonus: "Physical +5%", drop: "Various" },
      { name: "Lion Shield", defense: 40, slots: 2, bonus: "-", drop: "Lion Sanctuary" },
    ],
    amulet: [
      { name: "Collar of Red Plasma", armor: 0, slots: 0, bonus: "Sword/Axe/Club +4", drop: "Ferumbras' Ascension", recommended: true },
      { name: "Werewolf Amulet", armor: 3, slots: 0, bonus: "Physical +6%", drop: "Werecreatures" },
      { name: "Sleep Shawl", armor: 0, slots: 0, bonus: "Paralysis -15%", drop: "Nightmare creatures" },
    ],
    ring: [
      { name: "Prismatic Ring", armor: 0, slots: 0, bonus: "Physical +4%", drop: "Various", recommended: true },
      { name: "Ring of Red Plasma", armor: 0, slots: 0, bonus: "Sword/Axe/Club +4", drop: "Various" },
      { name: "Club Ring", armor: 0, slots: 0, bonus: "Club +4", drop: "NPC" },
    ],
  },
  {
    range: "Level 200-300",
    helmet: [
      { name: "Cobra Hood", armor: 10, slots: 2, bonus: "Club +4, Life Leech +5%", drop: "Cobra Bastion", recommended: true },
      { name: "Lion Spangenhelm", armor: 10, slots: 2, bonus: "Club +3", drop: "Lion Sanctuary" },
      { name: "Falcon Coif", armor: 10, slots: 2, bonus: "Mana Leech +3%", drop: "Falcon Bastion" },
    ],
    armor: [
      { name: "Falcon Plate", armor: 17, slots: 3, bonus: "Physical +8%", drop: "Oberon", recommended: true },
      { name: "Gnome Armor", armor: 14, slots: 3, bonus: "-", quest: "Warzone" },
      { name: "Lion Plate", armor: 16, slots: 2, bonus: "Physical +6%", drop: "Lion Sanctuary" },
    ],
    legs: [
      { name: "Fabulous Legs", armor: 9, slots: 2, bonus: "-", quest: "Ferumbras' Ascension", recommended: true },
      { name: "Ornate Legs", armor: 8, slots: 1, bonus: "-", drop: "Deeplings" },
      { name: "Soulful Legs", armor: 10, slots: 2, bonus: "-", drop: "Soul War" },
    ],
    boots: [
      { name: "Pair of Dreamwalkers", armor: 3, slots: 2, bonus: "Speed +20", drop: "Nightmares", recommended: true },
      { name: "Falcon Greaves", armor: 4, slots: 1, bonus: "Speed +25", drop: "Falcon Bastion" },
      { name: "Cobra Boots", armor: 3, slots: 2, bonus: "-", drop: "Cobra Bastion" },
    ],
    shield: [
      { name: "Falcon Shield", defense: 43, slots: 2, bonus: "-", drop: "Falcon Bastion", recommended: true },
      { name: "Lion Shield", defense: 40, slots: 2, bonus: "-", drop: "Lion Sanctuary" },
      { name: "Ornate Shield", defense: 39, slots: 2, bonus: "-", drop: "Deeplings" },
    ],
    amulet: [
      { name: "Collar of Red Plasma", armor: 0, slots: 0, bonus: "Club +4", drop: "Various", recommended: true },
      { name: "Pendant of Prosperity", armor: 0, slots: 0, bonus: "Loot +5%", drop: "Various" },
      { name: "Werewolf Amulet", armor: 3, slots: 0, bonus: "Physical +6%", drop: "Werecreatures" },
    ],
    ring: [
      { name: "Ring of Red Plasma", armor: 0, slots: 0, bonus: "Club +4", drop: "Various", recommended: true },
      { name: "Prismatic Ring", armor: 0, slots: 0, bonus: "Physical +4%", drop: "Various" },
      { name: "Ring of Souls", armor: 0, slots: 0, bonus: "Magic Level +2", drop: "Soul War" },
    ],
  },
  {
    range: "Level 300-500",
    helmet: [
      { name: "Cobra Hood", armor: 10, slots: 2, bonus: "Club +4, Life Leech +5%", drop: "Cobra Bastion", recommended: true },
      { name: "Falcon Coif", armor: 10, slots: 2, bonus: "Mana Leech +3%", drop: "Falcon Bastion" },
      { name: "Soulshell", armor: 12, slots: 2, bonus: "-", drop: "Soul War" },
    ],
    armor: [
      { name: "Falcon Plate", armor: 17, slots: 3, bonus: "Physical +8%", drop: "Oberon", recommended: true },
      { name: "Soulmantle", armor: 18, slots: 3, bonus: "-", drop: "Soul War" },
      { name: "Lion Plate", armor: 16, slots: 2, bonus: "Physical +6%", drop: "Lion Sanctuary" },
    ],
    legs: [
      { name: "Soulful Legs", armor: 10, slots: 2, bonus: "-", drop: "Soul War", recommended: true },
      { name: "Fabulous Legs", armor: 9, slots: 2, bonus: "-", quest: "Ferumbras' Ascension" },
      { name: "Falcon Legs", armor: 9, slots: 2, bonus: "-", drop: "Falcon Bastion" },
    ],
    boots: [
      { name: "Soulshroud", armor: 4, slots: 2, bonus: "Speed +25", drop: "Soul War", recommended: true },
      { name: "Falcon Greaves", armor: 4, slots: 1, bonus: "Speed +25", drop: "Falcon Bastion" },
      { name: "Pair of Dreamwalkers", armor: 3, slots: 2, bonus: "Speed +20", drop: "Nightmares" },
    ],
    shield: [
      { name: "Falcon Shield", defense: 43, slots: 2, bonus: "-", drop: "Falcon Bastion", recommended: true },
      { name: "Soulbastion", defense: 45, slots: 2, bonus: "-", drop: "Soul War" },
      { name: "Lion Shield", defense: 40, slots: 2, bonus: "-", drop: "Lion Sanctuary" },
    ],
    amulet: [
      { name: "Collar of Red Plasma", armor: 0, slots: 0, bonus: "Club +4", drop: "Various", recommended: true },
      { name: "Amulet of Soul War", armor: 5, slots: 0, bonus: "-", drop: "Soul War" },
      { name: "Pendant of Prosperity", armor: 0, slots: 0, bonus: "Loot +5%", drop: "Various" },
    ],
    ring: [
      { name: "Ring of Red Plasma", armor: 0, slots: 0, bonus: "Club +4", drop: "Various", recommended: true },
      { name: "Ring of Souls", armor: 0, slots: 0, bonus: "-", drop: "Soul War" },
      { name: "Prismatic Ring", armor: 0, slots: 0, bonus: "Physical +4%", drop: "Various" },
    ],
  },
];

const slotColors: Record<number, string> = {
  0: "text-gray-500",
  1: "text-blue-400",
  2: "text-purple-400",
  3: "text-amber-400",
};

export default function SetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2">🛡️ Sets Recomendados</h1>
        <p className="text-gray-500">Equipamentos completos para Knight Club por range de level</p>
      </div>

      {/* Legend */}
      <div className="card-glow p-4 mb-8">
        <h3 className="font-semibold mb-3">📋 Legenda de Slots de Imbuement</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="text-gray-500">0 slots</span>
          <span className="text-blue-400">● 1 slot</span>
          <span className="text-purple-400">●● 2 slots</span>
          <span className="text-amber-400">●●● 3 slots</span>
          <span className="ml-4 text-amber-400">⭐ = Recomendado</span>
        </div>
      </div>

      {/* Sets by Level Range */}
      {sets.map((set) => (
        <section key={set.range} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800">
              {set.range}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Helmet */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>🪖</span> Helmet
              </h3>
              {set.helmet.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                    <span className={slotColors[item.slots]}>{'●'.repeat(item.slots) || '-'}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Arm: {item.armor} | {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Armor */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>🦺</span> Armor
              </h3>
              {set.armor.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                    <span className={slotColors[item.slots]}>{'●'.repeat(item.slots) || '-'}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Arm: {item.armor} | {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Legs */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>👖</span> Legs
              </h3>
              {set.legs.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                    <span className={slotColors[item.slots]}>{'●'.repeat(item.slots) || '-'}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Arm: {item.armor} | {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Boots */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>👢</span> Boots
              </h3>
              {set.boots.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                    <span className={slotColors[item.slots]}>{'●'.repeat(item.slots) || '-'}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Arm: {item.armor} | {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Shield */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>🛡️</span> Shield
              </h3>
              {set.shield.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                    <span className={slotColors[item.slots]}>{'●'.repeat(item.slots) || '-'}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Def: {item.defense} | {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Amulet */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>📿</span> Amulet
              </h3>
              {set.amulet.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>

            {/* Ring */}
            <div className="card-glow">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span>💍</span> Ring
              </h3>
              {set.ring.map((item: any) => (
                <div key={item.name} className={`p-2 rounded mb-2 ${item.recommended ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-[#1e1e2e]'}`}>
                  <div className="flex items-center justify-between">
                    <span className={item.recommended ? 'text-amber-400 font-semibold' : ''}>
                      {item.recommended && '⭐ '}{item.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.bonus !== '-' ? item.bonus : 'Sem bônus'}
                  </div>
                  <div className="text-xs text-gray-600">{item.drop || item.quest}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Tip */}
      <div className="card-glow p-6 mt-8">
        <h3 className="font-semibold text-lg mb-2">💡 Dicas de Imbuement</h3>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• <strong>Helmet:</strong> Vampirism (Life Leech) ou Void (Mana Leech)</li>
          <li>• <strong>Armor:</strong> Proteção elemental conforme hunt (Fire, Ice, Earth, Energy)</li>
          <li>• <strong>Weapon:</strong> Vampirism + Void + Strike (se 3 slots)</li>
          <li>• <strong>Shield:</strong> Proteção elemental secundária</li>
          <li>• <strong>Prioridade:</strong> Vampirism (Helmet/Weapon) → Proteção (Armor) → Critical (Weapon)</li>
        </ul>
      </div>
    </div>
  );
}
