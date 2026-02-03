"use client";

import { useState, useRef, useEffect } from "react";

export interface MapMarker {
  x: number; // 0-100%
  y: number; // 0-100%
  label: string;
  type: "Start" | "Danger" | "Boss" | "Stairs";
  description?: string;
}

interface InteractiveMapProps {
  src: string;
  markers: MapMarker[];
  className?: string;
  enableZoom?: boolean;
}

const markerConfig = {
  Start: { color: "bg-green-500", icon: "🟢", border: "border-green-300" },
  Danger: { color: "bg-red-500", icon: "⚠️", border: "border-red-300" },
  Boss: { color: "bg-purple-600", icon: "👑", border: "border-purple-400" },
  Stairs: { color: "bg-blue-500", icon: "🪜", border: "border-blue-300" },
};

export default function InteractiveMap({ src, markers, className = "", enableZoom = true }: InteractiveMapProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  // Zoom Handler
  const handleWheel = (e: React.WheelEvent) => {
    if (!enableZoom) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.min(Math.max(1, scale * delta), 4);
    setScale(newScale);
  };

  // Drag Handler
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableZoom || scale === 1) return;
    isDragging.current = true;
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setPosition({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y
    });
  };

  const handleMouseUp = () => (isDragging.current = false);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl border border-gray-700 bg-[#14141f] group ${className}`}
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Zoom Controls */}
      {enableZoom && (
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-black/50 p-2 rounded backdrop-blur">
          <button onClick={() => setScale(s => Math.min(s + 0.5, 4))} className="text-white hover:text-purple-400">+</button>
          <button onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); }} className="text-xs text-gray-400">R</button>
          <button onClick={() => setScale(s => Math.max(1, s - 0.5))} className="text-white hover:text-purple-400">-</button>
        </div>
      )}

      {/* Map Layer */}
      <div 
        className="relative w-full h-full transition-transform duration-100 ease-out origin-center"
        style={{ 
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          cursor: scale > 1 ? (isDragging.current ? "grabbing" : "grab") : "default"
        }}
      >
        <img 
          src={src} 
          alt="Map" 
          className="w-full h-full object-contain pointer-events-none select-none"
          onError={(e) => (e.target as HTMLImageElement).src = '/images/placeholder-map.png'}
        />

        {/* Markers Layer */}
        {markers.map((marker, i) => {
          const config = markerConfig[marker.type];
          const isActive = activeMarker === i;

          return (
            <div
              key={i}
              className="absolute group/marker"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              {/* Pin */}
              <button
                onClick={() => setActiveMarker(isActive ? null : i)}
                className={`
                  relative -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full 
                  flex items-center justify-center text-xs shadow-lg transition-transform 
                  ${config.color} ${isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'}
                  border-2 ${config.border}
                `}
              >
                {config.icon}
              </button>

              {/* Tooltip */}
              <div className={`
                absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 
                bg-gray-900/95 text-white text-xs p-2 rounded border border-gray-700 
                backdrop-blur shadow-xl transition-opacity pointer-events-none z-40
                ${isActive ? 'opacity-100' : 'opacity-0 group-hover/marker:opacity-100'}
              `}>
                <strong className="block text-purple-300 mb-1">{marker.label}</strong>
                {marker.description && <p className="text-gray-400 leading-tight">{marker.description}</p>}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
