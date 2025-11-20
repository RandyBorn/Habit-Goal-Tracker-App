// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { HabitsProvider } from "../Components/HabitsProvider";

export const metadata: Metadata = {
  title: "Habit & Goal Tracker",
  description: "Einfache Next.js App zum Verwalten von Gewohnheiten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <HabitsProvider>
          <div className="app">
            <aside className="sidebar">
              <h1 className="logo">Habit & Tracker</h1>
              <nav className="nav">
                <a href="/">Dashboard</a>
                <a href="/habits">Habits</a>
              </nav>
            </aside>
            <main className="main">{children}</main>
          </div>
        </HabitsProvider>
      </body>
    </html>
  );
}
