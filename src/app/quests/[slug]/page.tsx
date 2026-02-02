import Link from "next/link";
import { notFound } from "next/navigation";
import { questsDatabase } from "@/data/quests";

export default async function QuestDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quest = questsDatabase[slug];

  if (!quest) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/quests" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
          ← Voltar para Quests
        </Link>
        
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {quest.name}
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 text-sm mt-4">
          <div className="bg-[#1e1e2e] px-3 py-1.5 rounded border border-purple-500/20 text-purple-200">
            🎯 Nível Mínimo: <span className="font-bold text-white">{quest.levelRequired}</span>
          </div>
          <div className="bg-[#1e1e2e] px-3 py-1.5 rounded border border-blue-500/20 text-blue-200">
            ⏱️ Duração: <span className="font-bold text-white">{quest.length}</span>
          </div>
          <div className="bg-[#1e1e2e] px-3 py-1.5 rounded border border-green-500/20 text-green-200">
            🏷️ Tipo: <span className="font-bold text-white">{quest.type}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - Steps */}
        <div className="lg:col-span-2 space-y-8">
          <section className="card-glow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2">
              <span>🗺️</span> Passo a Passo (Spoiler)
            </h2>
            
            <div className="space-y-8">
              {quest.steps.map((step, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-800 hover:border-purple-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#14141f] border-2 border-purple-500"></div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  
                  <div className="space-y-2 text-gray-300">
                    {step.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>

                  {step.coordinates && (
                    <div className="mt-3 inline-block px-2 py-1 bg-black/40 rounded text-xs font-mono text-green-400 border border-green-900/30">
                      📍 {step.coordinates}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {quest.videoGuide && (
            <section className="card-glow bg-red-900/10 border-red-900/30">
              <h3 className="text-lg font-bold text-red-400 mb-2">🎥 Precisa de vídeo?</h3>
              <p className="text-gray-400 text-sm mb-3">Algumas quests são complexas demais para texto apenas.</p>
              <a 
                href={quest.videoGuide} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
              >
                <span>Assistir Guia Completo</span>
              </a>
            </section>
          )}
        </div>

        {/* Sidebar - Rewards */}
        <div className="space-y-6">
          <section className="card-glow border-amber-500/20">
            <h2 className="text-lg font-bold mb-4 text-amber-400 flex items-center gap-2">
              <span>🏆</span> Recompensas
            </h2>
            <ul className="space-y-2 text-sm text-gray-300">
              {quest.rewards.map((reward, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  {reward}
                </li>
              ))}
            </ul>
          </section>

          <section className="card-glow border-red-500/20">
            <h2 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
              <span>☠️</span> Bosses Liberados
            </h2>
            <div className="flex flex-wrap gap-2">
              {quest.bossesUnlocked.map((boss, i) => (
                <span key={i} className="px-2 py-1 bg-red-900/20 text-red-300 text-xs rounded border border-red-900/50">
                  {boss}
                </span>
              ))}
            </div>
          </section>

          <section className="card-glow border-purple-500/20">
            <h2 className="text-lg font-bold mb-4 text-purple-400 flex items-center gap-2">
              <span>⚔️</span> Hunts Liberadas
            </h2>
            <div className="flex flex-col gap-2">
              {quest.huntsUnlocked.map((hunt, i) => (
                <Link 
                  key={i} 
                  href={`/hunts/${hunt.toLowerCase().replace(/ /g, "-")}`}
                  className="px-3 py-2 bg-purple-900/20 text-purple-300 text-sm rounded border border-purple-900/50 hover:bg-purple-900/40 transition-colors flex justify-between items-center"
                >
                  {hunt}
                  <span className="text-xs">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(questsDatabase).map((slug) => ({ slug }));
}
