'use client';
import { useApp } from '@/context/AppContext';

export default function SearchFilter() {
  const {
    searchTerm,
    setSearchTerm,
    filterDepartment,
    setFilterDepartment,
    filterRating,
    setFilterRating,
    departments,
  } = useApp();

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search employees..."
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={filterDepartment}
        onChange={(e) => setFilterDepartment(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      <select
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Ratings</option>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
    </div>
  );
}