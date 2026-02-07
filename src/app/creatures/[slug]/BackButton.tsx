"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackButton() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  let href = "/creatures";
  let label = "Voltar para Criaturas";

  if (from === "bestiary") {
    href = "/bestiary";
    label = "Voltar para Bestiário";
  }

  return (
    <Link
      href={href}
      className="glass-btn-primary px-8 py-3 rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2 font-semibold text-white shadow-lg shadow-[var(--glass-rubi-primary)]/20"
    >
      <span>←</span> {label}
    </Link>
  );
}
