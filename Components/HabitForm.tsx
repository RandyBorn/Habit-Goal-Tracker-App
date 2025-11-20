// components/HabitForm.tsx
"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { Habit } from "@/lib/habbits";

interface HabitFormProps {
  form: Habit;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitLabel: string;
  showCancel?: boolean;
  onCancel?: () => void;
}

export function HabitForm({
  form,
  onChange,
  onSubmit,
  submitLabel,
  showCancel = false,
  onCancel,
}: HabitFormProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Kategorie</label>
          <input
            id="category"
            name="category"
            value={form.category}
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="progress">Fortschritt (%)</label>
          <input
            id="progress"
            name="progress"
            type="number"
            min={0}
            max={100}
            value={form.progress}
            onChange={onChange}
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
          onChange={onChange}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn">
          {submitLabel}
        </button>
        {showCancel && onCancel && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Abbrechen
          </button>
        )}
      </div>
    </form>
  );
}
