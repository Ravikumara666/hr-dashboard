// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl">Page not found.</p>
      <a
        href="/dashboard"
        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
