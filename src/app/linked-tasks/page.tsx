"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { linkedTasksDatabase, LinkedTask } from "@/data/linked-tasks";
import { roomRewards } from "@/data/room-rewards";
import { BreadcrumbWithHome } from "@/components/ui/breadcrumb";

// Definindo as abas (Salas)
const rooms: { id: LinkedTask["room"]; label: string; icon: string }[] = [
  { id: "Lothlorien", label: "Lothlorien Room (#1-#20)", icon: "🌿" },
  { id: "Executioner", label: "Executioner's Room (#21-#40)", icon: "⚔️" },
  { id: "Morgul", label: "Morgul's Room (#41-#60)", icon: "💀" },
  { id: "Corrupted", label: "Corrupted Room (#61-#78)", icon: "👹" },
  { id: "N'Zoth", label: "N'Zoth's Room (#79-#94)", icon: "🐙" },
];

const BASE_WIKI_URL = "https://wiki.rubinot.com";

export default function LinkedTasksPage() {
  const [activeTab, setActiveTab] = useState<LinkedTask["room"]>("Lothlorien");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeLinkedTaskTab") as LinkedTask["room"];
    if (savedTab && rooms.some((r) => r.id === savedTab)) {
      setActiveTab(savedTab);
    }
    setIsLoaded(true);
  }, []);

  const handleTabChange = (tab: LinkedTask["room"]) => {
    setActiveTab(tab);
    localStorage.setItem("activeLinkedTaskTab", tab);
  };

  if (!isLoaded) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8 h-16 w-1/3 bg-gray-800 rounded animate-pulse"></div>
            <div className="flex gap-2 mb-8 border-b border-gray-700/50 pb-2">
                 {[1,2,3,4,5].map(i => <div key={i} className="h-10 w-32 bg-gray-800 rounded-t-lg"></div>)}
             </div>
             <div className="space-y-4">
                 {[1,2,3].map(i => <div key={i} className="h-32 w-full bg-gray-800 rounded-lg"></div>)}
             </div>
        </div>
    );
  }

  const filteredTasks = linkedTasksDatabase.filter((task) => task.room === activeTab);
  const currentRewards = roomRewards[activeTab] || [];

  const randomRewards = currentRewards.filter(r => r.type === "Random");
  const guaranteedRewards = currentRewards.filter(r => r.type === "Guaranteed");
  const npcRewards = currentRewards.filter(r => r.type === "NPC");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadcrumbWithHome items={[{ label: "Linked Tasks" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span>📜</span> Linked Tasks Guide
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Guia completo das tasks de acesso e progressão do Rubinot.
          Complete as tasks para ganhar Task Coins, Exp e itens exclusivos.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700/50 pb-2">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => handleTabChange(room.id)}
            className={`px-4 py-2 rounded-t-lg transition-colors flex items-center gap-2 font-semibold ${
              activeTab === room.id
                ? "bg-[#2a2a3e] text-purple-400 border-b-2 border-purple-500"
                : "bg-[#1e1e2e] text-gray-400 hover:bg-[#252535] hover:text-gray-200"
            }`}
          >
            <span>{room.icon}</span>
            {room.label}
          </button>
        ))}
      </div>

      {/* Room Rewards Section */}
      {currentRewards.length > 0 && (
        <div className="mb-12 space-y-8">
          {/* Random Rewards */}
          {randomRewards.length > 0 && (
            <section className="bg-[#1e1e2e]/50 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                <span>🎁</span> Recompensas Aleatórias da Sala
                <span className="text-xs font-normal text-gray-500 bg-[#14141f] px-2 py-1 rounded ml-2">Ao completar todas as tasks</span>
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {randomRewards.map((reward, i) => (
                  <div key={i} className="flex flex-col items-center w-28 group">
                    <div className="w-16 h-16 bg-[#14141f] rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-purple-500/50 transition-colors mb-2">
                      <img 
                        src={`${BASE_WIKI_URL}${reward.image}`} 
                        alt={reward.name}
                        className="max-w-[48px] max-h-[48px]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.opacity = "0.3";
                        }}
                      />
                    </div>
                    <span className="text-xs text-center text-gray-400 group-hover:text-gray-200 leading-tight">{reward.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Guaranteed Rewards */}
          {guaranteedRewards.length > 0 && (
            <section className="bg-[#1e1e2e]/50 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>✅</span> Recompensa Garantida
                <span className="text-xs font-normal text-gray-500 bg-[#14141f] px-2 py-1 rounded ml-2">Sempre entregue</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {guaranteedRewards.map((reward, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#14141f] p-3 rounded-lg border border-gray-700">
                    <img 
                      src={`${BASE_WIKI_URL}${reward.image}`} 
                      alt={reward.name}
                      className="w-10 h-10"
                    />
                    <span className="text-sm font-semibold text-gray-200">{reward.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NPC Trade */}
          {npcRewards.length > 0 && (
            <section className="bg-[#1e1e2e]/50 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span>💰</span> Troca com NPC da Sala
                <span className="text-xs font-normal text-gray-500 bg-[#14141f] px-2 py-1 rounded ml-2">Use Task Coins</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {npcRewards.map((reward, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#14141f] px-3 py-2 rounded border border-gray-800 hover:border-amber-500/30 transition-colors" title={reward.name}>
                    <img 
                      src={`${BASE_WIKI_URL}${reward.image}`} 
                      alt={reward.name}
                      className="w-6 h-6"
                    />
                    <span className="text-xs text-gray-400">{reward.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Tasks List */}
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4">Lista de Tasks</h2>
      <div className="grid gap-4">
        {filteredTasks.map((task) => {
          // Define se o card é clicável
          const isLink = !!task.bestHuntSlug;
          const CardContent = (
            <>
              {/* Image */}
              <div className={`shrink-0 w-24 h-24 bg-[#14141f] rounded-lg flex items-center justify-center border border-gray-800 relative group transition-colors ${isLink ? 'group-hover:border-purple-500' : ''}`}>
                <div className="absolute top-1 left-2 text-xs font-mono text-purple-500/80 bg-black/50 px-1 rounded">{task.id}</div>
                <img 
                  src={`${BASE_WIKI_URL}${task.image}`} 
                  alt={task.name}
                  className="max-w-[64px] max-h-[64px] object-contain transition-transform group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/placeholder-monster.png"; 
                    (e.target as HTMLImageElement).style.opacity = "0.5";
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h3 className={`text-xl font-bold text-white ${isLink ? 'group-hover:text-purple-400 transition-colors' : ''}`}>
                    {task.name}
                  </h3>
                  {isLink && (
                    <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full animate-pulse shadow-glow">
                      Ver Hunt
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-400 mb-2">
                  <span className="text-purple-400 font-semibold">{task.killsRequired.toLocaleString()}</span> kills necessários
                </div>
                
                {/* Monsters Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {task.monsters.map((monster, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-[#2a2a3e] px-2 py-1 rounded text-gray-300 border border-gray-700/50 hover:border-purple-500/50 transition-colors cursor-default"
                    >
                      {monster}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div className="w-full md:w-1/3 bg-[#14141f]/50 p-3 rounded-lg border border-gray-800/50">
                <span className="text-xs font-semibold text-gray-500 uppercase mb-2 block text-center md:text-left">Recompensas da Task</span>
                <ul className="space-y-1.5">
                  {task.rewards.map((reward, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      {reward.type === "first" ? (
                        <span className="text-green-500 mt-0.5 text-xs shrink-0" title="Primeira Conclusão">★</span>
                      ) : (
                        <span className="text-red-500 mt-0.5 text-xs shrink-0" title="Repetível">↻</span>
                      )}
                      <span className={`leading-tight ${reward.type === "first" ? "text-green-400" : "text-red-400/80"}`}>
                        {reward.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link Indicator Arrow (Mobile/Desktop) */}
              {isLink && (
                <div className="absolute top-4 right-4 text-gray-600 group-hover:text-purple-400 transition-colors text-xl">
                  ↗
                </div>
              )}
            </>
          );

          // Renderiza Link ou Div dependendo se tem hunt associada
          return isLink ? (
            <Link 
              key={task.id}
              href={`/hunts/${task.bestHuntSlug}`}
              className="card-glow flex flex-col md:flex-row gap-6 p-4 items-center bg-[#1e1e2e] relative group cursor-pointer hover:border-purple-500/50 transition-all"
            >
              {CardContent}
            </Link>
          ) : (
            <div 
              key={task.id} 
              className="card-glow flex flex-col md:flex-row gap-6 p-4 items-center bg-[#1e1e2e] relative opacity-90"
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      {/* Footer Video Link */}
      <div className="mt-12 text-center p-8 bg-[#1e1e2e] rounded-xl border border-red-900/30">
        <h3 className="text-xl font-bold mb-2 text-white">Precisa de ajuda visual?</h3>
        <p className="text-gray-400 mb-4">Confira a playlist completa com guias de todas as tasks.</p>
        <a 
          href="https://www.youtube.com/playlist?list=PLYm8Djxjd-5vE4vTnDtIk750bZ3gmTQ19" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
        >
          <span>📺</span> Assistir Playlist no YouTube
        </a>
      </div>
    </div>
  );
}
