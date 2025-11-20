// components/HabitsTable.tsx
"use client";

import React from "react";
import { Habit } from "@/lib/habbits";

interface HabitsTableProps {
  habits: Habit[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitsTable({ habits, onEdit, onDelete }: HabitsTableProps) {
  if (habits.length === 0) {
    return <p>Noch keine Habits. Lege oben deinen ersten an.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Kategorie</th>
          <th>Frequenz</th>
          <th>Fortschritt</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        {habits.map((h) => (
          <tr key={h.id}>
            <td>{h.name}</td>
            <td>{h.category}</td>
            <td>{h.frequency}</td>
            <td>{h.progress}%</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onEdit(h.id)}
              >
                Ansehen / Bearbeiten
              </button>{" "}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(h.id)}
              >
                Löschen
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
