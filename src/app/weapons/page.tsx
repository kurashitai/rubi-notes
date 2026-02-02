import Link from "next/link";

interface Weapon {
  name: string;
  level: number;
  attack: number;
  slots: number;
  type: string;
  element: string;
  elementBonus?: number;
  recommended?: boolean;
}

const weapons: Record<string, Weapon[]> = {
  "Level 8-50": [
    { name: "Morning Star", level: 0, attack: 25, slots: 0, type: "1-hand", element: "Physical" },
    { name: "Furry Club", level: 20, attack: 31, slots: 0, type: "1-hand", element: "Physical" },
    { name: "Diamond Sceptre", level: 25, attack: 34, slots: 0, type: "1-hand", element: "Physical" },
    { name: "Spiked Squelcher", level: 30, attack: 41, slots: 3, type: "2-hand", element: "Physical" },
    { name: "Deepling Squelcher", level: 48, attack: 44, slots: 2, type: "1-hand", element: "Physical", recommended: true },
  ],
  "Level 50-100": [
    { name: "Moohtant Cudgel", level: 60, attack: 47, slots: 3, type: "2-hand", element: "Physical" },
    { name: "Onyx Flail", level: 65, attack: 43, slots: 1, type: "1-hand", element: "Physical" },
    { name: "Blessed Sceptre", level: 75, attack: 46, slots: 2, type: "1-hand", element: "Physical" },
    { name: "Arcane Staff", level: 75, attack: 49, slots: 2, type: "2-hand", element: "Physical" },
    { name: "Ornate Mace", level: 90, attack: 48, slots: 2, type: "1-hand", element: "Physical", recommended: true },
  ],
  "Level 100-200": [
    { name: "Mycological Mace", level: 120, attack: 50, slots: 2, type: "1-hand", element: "Physical" },
    { name: "Umbral Hammer", level: 120, attack: 51, slots: 2, type: "2-hand", element: "Physical" },
    { name: "Maimer", level: 150, attack: 51, slots: 2, type: "1-hand", element: "Physical", recommended: true },
    { name: "Jungle Flail", level: 150, attack: 52, slots: 3, type: "2-hand", element: "Physical" },
  ],
  "Level 200-300": [
    { name: "Mace of Destruction", level: 200, attack: 52, slots: 3, type: "1-hand", element: "Physical", recommended: true },
    { name: "Hammer of Destruction", level: 200, attack: 54, slots: 3, type: "2-hand", element: "Physical" },
    { name: "Cobra Club", level: 220, attack: 52, slots: 2, type: "1-hand", element: "Fire", elementBonus: 5 },
    { name: "Mortal Mace", level: 220, attack: 52, slots: 2, type: "1-hand", element: "Death", elementBonus: 5 },
    { name: "Resizer", level: 230, attack: 54, slots: 2, type: "2-hand", element: "Ice", elementBonus: 6 },
    { name: "Lion Hammer", level: 270, attack: 53, slots: 2, type: "1-hand", element: "Earth", elementBonus: 5 },
    { name: "Eldritch Warmace", level: 270, attack: 55, slots: 2, type: "2-hand", element: "Fire", elementBonus: 6 },
  ],
  "Level 300-500": [
    { name: "Falcon Mace", level: 300, attack: 54, slots: 2, type: "1-hand", element: "Energy", elementBonus: 6, recommended: true },
    { name: "Soulcrusher", level: 400, attack: 55, slots: 2, type: "1-hand", element: "Ice", elementBonus: 7, recommended: true },
    { name: "Soulmaimer", level: 400, attack: 56, slots: 3, type: "2-hand", element: "Energy", elementBonus: 7 },
  ],
};

const elementColors: Record<string, string> = {
  Physical: "text-gray-300",
  Fire: "text-orange-400",
  Ice: "text-cyan-400",
  Earth: "text-lime-400",
  Energy: "text-purple-400",
  Death: "text-gray-500",
};

const elementIcons: Record<string, string> = {
  Physical: "⚔️",
  Fire: "🔥",
  Ice: "❄️",
  Earth: "🌿",
  Energy: "⚡",
  Death: "💀",
};

export default function WeaponsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold mb-2">⚔️ Armas de Club</h1>
        <p className="text-gray-500">Progressão completa de armas de Club para Knight (Level 8-500)</p>
      </div>

      {/* Weapons by Level Range */}
      {Object.entries(weapons).map(([range, weaponList]) => (
        <section key={range} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-purple-600/30 border border-purple-500/50">
              {range}
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-700">
                  <th className="pb-3 pr-4">Arma</th>
                  <th className="pb-3 px-4">Level</th>
                  <th className="pb-3 px-4">Ataque</th>
                  <th className="pb-3 px-4">Slots</th>
                  <th className="pb-3 px-4">Tipo</th>
                  <th className="pb-3 px-4">Elemento</th>
                </tr>
              </thead>
              <tbody>
                {weaponList.map((weapon) => (
                  <tr
                    key={weapon.name}
                    className={`border-b border-gray-800 hover:bg-purple-600/10 transition-colors ${
                      weapon.recommended ? "bg-amber-500/10" : ""
                    }`}
                  >
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        {weapon.recommended && <span className="text-amber-400">⭐</span>}
                        <span className={weapon.recommended ? "text-amber-400 font-semibold" : ""}>
                          {weapon.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-purple-400">{weapon.level}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{weapon.attack}</td>
                    <td className="py-3 px-4">{weapon.slots}</td>
                    <td className="py-3 px-4 text-gray-400">{weapon.type}</td>
                    <td className="py-3 px-4">
                      <span className={`flex items-center gap-1 ${elementColors[weapon.element]}`}>
                        {elementIcons[weapon.element]} {weapon.element}
                        {weapon.elementBonus && (
                          <span className="text-xs text-gray-500">+{weapon.elementBonus}</span>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Elemental Weapons Guide */}
      <section className="mt-12">
        <div className="card-glow p-6">
          <h3 className="font-semibold text-lg mb-4">🎯 Guia de Armas Elementais</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🔥 Fire</span>
                <span className="text-gray-500">→ Usar em Winter Court</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">❄️ Ice</span>
                <span className="text-gray-500">→ Usar em Summer Court, Oramond</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lime-400">🌿 Earth</span>
                <span className="text-gray-500">→ Usar em Draken Walls</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">⚡ Energy</span>
                <span className="text-gray-500">→ Usar em Winter Court</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">💀 Death</span>
                <span className="text-gray-500">→ Usar em Weretigers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="mt-6">
        <div className="card-glow p-4">
          <p className="text-sm text-gray-500">
            <span className="text-amber-400">⭐</span> = Arma recomendada para o range de level
          </p>
        </div>
      </section>
    </div>
  );
}
