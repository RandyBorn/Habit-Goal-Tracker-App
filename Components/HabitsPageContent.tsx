// components/HabitsPageContent.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHabits } from "@/Components/HabitsProvider";
import { Habit } from "@/lib/habbits";
import { HabitsTable } from "@/Components/HabitsTable";
import { HabitForm } from "@/Components/HabitForm";

export function HabitsPageContent() {
  const { habits, addHabit, updateHabit, deleteHabit } = useHabits();

  const [form, setForm] = useState<Habit>({
    id: "",
    name: "",
    category: "",
    frequency: "",
    description: "",
    progress: 0,
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim()) return;

    if (editingId) {
      updateHabit(editingId, form);
      setEditingId(null);
    } else {
      addHabit({ ...form, id: Date.now().toString() });
    }

    setForm({
      id: "",
      name: "",
      category: "",
      frequency: "",
      description: "",
      progress: 0,
    });
  }

  function handleEdit(id: string) {
    const habit = habits.find((h) => h.id === id);
    if (!habit) return;
    setEditingId(id);
    setForm(habit);
  }

  function handleDelete(id: string) {
    if (!confirm("Diesen Habit wirklich löschen?")) return;
    deleteHabit(id);
    if (editingId === id) {
      setEditingId(null);
      setForm({
        id: "",
        name: "",
        category: "",
        frequency: "",
        description: "",
        progress: 0,
      });
    }
  }

  function handleCancel() {
    setEditingId(null);
    setForm({
      id: "",
      name: "",
      category: "",
      frequency: "",
      description: "",
      progress: 0,
    });
  }

  return (
    <div>
      <header className="page-header">
        <h2>Habits</h2>
      </header>

      <section className="card">
        <h3>{editingId ? "Habit bearbeiten" : "Neuen Habit hinzufügen"}</h3>
        <HabitForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitLabel={editingId ? "Speichern" : "Hinzufügen"}
          showCancel={!!editingId}
          onCancel={handleCancel}
        />
      </section>

      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h3>Alle Habits</h3>
        <HabitsTable
          habits={habits}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
    </div>
  );
}
