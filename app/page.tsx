"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useHabits } from "../Components/HabitsProvider";

interface HabitFormState {
  name: string;
  category: string;
  frequency: string;
  description: string;
  progress: number;
}

export default function HabitsPage() {
  const { habits, addHabit } = useHabits();

  const [form, setForm] = useState<HabitFormState>({
    name: "",
    category: "",
    frequency: "",
    description: "",
    progress: 0,
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "progress" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;

    setForm({
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
        <p>Liste aller Gewohnheiten + Formular zum Hinzufügen.</p>
      </header>

      {/* Formular */}
      <section className="card">
        <h3>Neuen Habit hinzufügen</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="z.B. 1 Stunde coden"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Kategorie</label>
              <input
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="z.B. Coding, Gesundheit"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="frequency">Frequenz</label>
              <input
                id="frequency"
                name="frequency"
                value={form.frequency}
                onChange={handleChange}
                placeholder="z.B. Täglich, 3x pro Woche"
              />
            </div>
            <div className="form-group">
              <label htmlFor="progress">Start-Fortschritt (%)</label>
              <input
                id="progress"
                name="progress"
                type="number"
                min={0}
                max={100}
                value={form.progress}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Beschreibung</label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              placeholder="Kurze Beschreibung der Gewohnheit..."
            />
          </div>

          <button type="submit" className="btn">
            Habit hinzufügen
          </button>
        </form>
      </section>

      {/* Tabelle */}
      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h3>Alle Habits</h3>
        {habits.length === 0 ? (
          <p>Noch keine Habits. Lege oben deinen ersten an.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Kategorie</th>
                <th>Frequenz</th>
                <th>Fortschritt</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id}>
                  <td>{habit.name}</td>
                  <td>{habit.category}</td>
                  <td>{habit.frequency}</td>
                  <td>{habit.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
