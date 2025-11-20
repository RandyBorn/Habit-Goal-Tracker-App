// components/HabitsProvider.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { habits as initialHabits, Habit } from "@/lib/habbits";

interface HabitsContextValue {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  updateHabit: (id: string, habit: Habit) => void;
  deleteHabit: (id: string) => void;
}

const HabitsContext = createContext<HabitsContextValue | null>(null);

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  function addHabit(habit: Habit) {
    setHabits((prev) => [...prev, habit]);
  }

  function updateHabit(id: string, updated: Habit) {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...updated } : h)));
  }

  function deleteHabit(id: string) {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }

  return (
    <HabitsContext.Provider
      value={{ habits, addHabit, updateHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  const ctx = useContext(HabitsContext);
  if (!ctx) {
    throw new Error(
      "useHabits muss innerhalb von HabitsProvider verwendet werden"
    );
  }
  return ctx;
}
