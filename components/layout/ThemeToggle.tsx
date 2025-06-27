'use client';
import { Moon, Sun } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useApp();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
    >
      {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>
  );
}