export interface Habit {
  id: string;
  name: string;
  category: string;
  frequency: string;
  description: string;
  progress: number; // percentage of completion
}

export const habits: Habit[] = [
  {
    id: "1",
    name: "1 Stunde coden",
    category: "Coding",
    frequency: "Täglich",
    description:
      "Jeden Tag mindestens eine Stunde an Projekten oder Übungen arbeiten.",
    progress: 70,
  },
  {
    id: "2",
    name: "30 Minuten lesen",
    category: "Persönliche Entwicklung",
    frequency: "Täglich",
    description:
      "Ein Buch oder Artikel zu Tech, Psychologie oder Business lesen.",
    progress: 40,
  },
  {
    id: "3",
    name: "Sport machen",
    category: "Gesundheit",
    frequency: "4x pro Woche",
    description: "Krafttraining und Cardio-Einheit.",
    progress: 55,
  },
  {
    id: "4",
    name: "Meditation",
    category: "Achtsamkeit",
    frequency: "Täglich",
    description: "10 Minuten Achtsamkeitsmeditation zur Stressreduktion.",
    progress: 80,
  },
  {
    id: "5",
    name: "Sprachen lernen",
    category: "Bildung",
    frequency: "4x pro Woche",
    description: "30 Minuten Vokabeln und Grammatik üben.",
    progress: 60,
  },
  {
    id: "6",
    name: "Gesunde Ernährung",
    category: "Gesundheit",
    frequency: "Täglich",
    description: "5 Portionen Obst und Gemüse essen.",
    progress: 50,
  },
  {
    id: "7",
    name: "Schlafroutine",
    category: "Gesundheit",
    frequency: "Täglich",
    description: "Jeden Tag zur gleichen Zeit ins Bett gehen und aufstehen.",
    progress: 75,
  },
  {
    id: "8",
    name: "Networking",
    category: "Karriere",
    frequency: "Wöchentlich",
    description: "Mit mindestens einer neuen Person in der Branche vernetzen.",
    progress: 30,
  },
  {
    id: "9",
    name: "Blog schreiben",
    category: "Persönliche Entwicklung",
    frequency: "1x pro Monat",
    description: "Einen Artikel zu einem Tech-Thema veröffentlichen.",
    progress: 20,
  },
  {
    id: "10",
    name: "Projekt abschließen",
    category: "Coding",
    frequency: "1x pro Quartal",
    description: "Ein größeres Coding-Projekt von Anfang bis Ende abschließen.",
    progress: 10,
  },
];
