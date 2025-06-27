'use client';
import ThemeToggle from './ThemeToggle';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const { user } = useApp();
  
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-xl mb-4 shadow-sm">
      <h1 className="text-xl font-semibold">Welcome to HR Dashboard</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
          {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
        </div>
      </div>
    </header>
  );
}