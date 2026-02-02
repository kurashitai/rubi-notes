import Link from "next/link";
import { questsDatabase } from "@/data/quests";

export default function QuestsPage() {
  const quests = Object.values(questsDatabase);

  const statusColors = {
    "Essencial": "text-green-400 bg-green-900/20 border-green-900",
    "Recomendada": "text-blue-400 bg-blue-900/20 border-blue-900",
    "Opcional": "text-gray-400 bg-gray-800/20 border-gray-700",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Quests & Acessos</h1>
        <p className="text-gray-400 max-w-2xl">
          Guias de acesso para liberar hunts, bosses diários e imbuements. 
          Focados na realidade do Rubinot (rates e mecânicas facilitadas quando aplicável).
        </p>
      </div>

      <div className="grid gap-6">
        {quests.map((quest) => (
          <Link 
            href={`/quests/${quest.slug}`} 
            key={quest.slug}
            className="card-glow block hover:border-purple-500/50 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Left Info */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {quest.name}
                  </h2>
                  <span className={`px-2 py-0.5 text-xs border rounded ${statusColors[quest.status]}`}>
                    {quest.status}
                  </span>
                  <span className="text-xs text-gray-500 bg-[#14141f] px-2 py-0.5 rounded">
                    Lvl {quest.levelRequired}+
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <span>🗝️</span>
                    <span>Libera: <span className="text-gray-300">{quest.bossesUnlocked.length} Bosses</span></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚔️</span>
                    <span>Hunts: <span className="text-gray-300">{quest.huntsUnlocked.join(", ") || "Nenhuma"}</span></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>Duração: <span className="text-gray-300">{quest.length}</span></span>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="hidden md:block text-gray-600 group-hover:text-purple-400 text-2xl">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
