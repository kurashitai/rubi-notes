import Link from "next/link";
import { imbuementsDatabase } from "@/data/imbuements";

export default function ImbuementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>💎</span> Imbuements Guide
        </h1>
        <p className="text-gray-400">
          Guia completo de Imbuements Tier 3 (Powerful). Essenciais para maximizar seu Knight.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {imbuementsDatabase.map((imbuement) => (
          <div key={imbuement.id} className="card-glow bg-[#1e1e2e] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">{imbuement.name}</h2>
                <div className="flex gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded border ${
                    imbuement.type === "Attack" ? "bg-red-900/30 border-red-600 text-red-400" :
                    imbuement.type === "Defense" ? "bg-blue-900/30 border-blue-600 text-blue-400" :
                    "bg-green-900/30 border-green-600 text-green-400"
                  }`}>
                    {imbuement.type}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-gray-800 border border-gray-600 text-gray-300">
                    Tier {imbuement.tier}
                  </span>
                  {imbuement.recommendation === "Essencial" && (
                    <span className="px-2 py-0.5 rounded bg-amber-900/30 border border-amber-600 text-amber-400">
                      ★ Essencial
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500 block mb-1">Slots</span>
                <div className="flex gap-1 justify-end">
                  {imbuement.slots.map(slot => (
                    <span key={slot} className="text-xs bg-[#14141f] px-1.5 py-0.5 rounded text-gray-400 border border-gray-700">
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#14141f] p-3 rounded-lg mb-4 border border-gray-700/50">
              <span className="text-gray-500 text-xs uppercase font-bold block mb-1">Efeito</span>
              <span className="text-purple-400 font-medium">{imbuement.effect}</span>
            </div>

            <div>
              <span className="text-gray-500 text-xs uppercase font-bold block mb-2">Materiais Necessários</span>
              <ul className="space-y-2">
                {imbuement.materials.map((mat, i) => (
                  <li key={i} className="flex justify-between items-center text-sm bg-black/20 p-2 rounded hover:bg-black/40 transition-colors">
                    <span className="text-gray-300">
                      <span className="text-purple-500 font-bold mr-2">{mat.amount}x</span>
                      {mat.item}
                    </span>
                    <span className="text-xs text-gray-500 italic">
                      Drop: {mat.creatureSource}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
