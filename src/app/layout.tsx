import type { Metadata } from "next";
import "./globals.css";
import GlassLayout from "@/components/ui/GlassLayout";

export const metadata: Metadata = {
  title: "Rubi-Notes - Knight Club Progression",
  description: "Database completa para Knight Club (Solo) no servidor Rubinot - Hunts, Tasks, Bosses e Tools.",
  keywords: ["Tibia", "Rubinot", "Knight", "Club", "Guide", "Hunts", "Progression"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-[var(--bg-primary)] text-[var(--glass-text-primary)] min-h-screen`}>
        <GlassLayout>
          {children}
        </GlassLayout>
      </body>
    </html>
  );
}
