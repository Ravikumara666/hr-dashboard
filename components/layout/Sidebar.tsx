'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Star, Settings } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Employees', href: '/dashboard#employees', icon: Users },
  { name: 'Top Rated', href: '/dashboard#top', icon: Star },
  { name: 'Settings', href: '/dashboard#settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 dark:border-gray-700 p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">HR Dashboard</h2>
      <nav className="space-y-4">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-blue-100 dark:hover:bg-gray-800 ${
              pathname === href ? 'bg-blue-100 dark:bg-gray-800' : ''
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}