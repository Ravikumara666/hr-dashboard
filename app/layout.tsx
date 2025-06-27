import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'HR Dashboard',
  description: 'Employee management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex bg-white text-gray-900 dark:bg-black dark:text-white">
        <AppProvider>
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Navbar />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
