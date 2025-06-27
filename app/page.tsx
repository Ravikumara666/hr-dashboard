'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const { user } = useApp();
  const router = useRouter();

  useEffect(() => {
    // Optional: auto-redirect after 2s
    const timeout = setTimeout(() => {
      router.replace(user ? '/dashboard' : '/auth');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white transition-all duration-300">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to the HR Dashboard 🚀
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Manage employees, performance, bookmarks, and more with smart filters, beautiful UI, and real-time updates.
        </p>

        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => router.push('/dashboard')}>
            Go to Dashboard
          </Button>
          <Button variant="secondary" onClick={() => router.push('/auth')}>
            Login
          </Button>
        </div>

        <p className="mt-10 text-sm opacity-70">Redirecting automatically in a few seconds...</p>
      </div>
    </div>
  );
}
