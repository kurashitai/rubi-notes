"use client";

export default function SearchTrigger() {
  return (
    <button 
       className="lg:hidden text-gray-400 hover:text-white"
       onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
    >
      🔍
    </button>
  );
}
