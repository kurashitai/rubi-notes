"use client";

import { useState, useEffect } from "react";
import CommandBar from "./CommandBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FavoritesProvider } from "@/hooks/useFavorites";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FavoritesProvider>
      {/* Command Bar Global (Cmd+K) */}
      <CommandBar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </FavoritesProvider>
  );
}
