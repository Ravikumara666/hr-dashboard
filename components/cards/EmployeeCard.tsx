'use client';
import { useApp } from '@/context/AppContext';
import StarRating from '@/components/ui/StarRating';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import Link from 'next/link';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  address: {
    city: string;
    state: string;
  };
  department: string;
  rating: number;
  projects: number;
  feedback: number;
}

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const { toggleBookmark, isBookmarked } = useApp();
  const bookmarked = isBookmarked(employee.id);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 relative group hover:shadow-lg transition-shadow">
      <Link href={`/employee/${employee.id}`}>
        <img
          src={employee.image}
          alt={employee.firstName}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 mx-auto mb-2 cursor-pointer"
        />
        <h3 className="text-lg font-bold text-center cursor-pointer hover:text-blue-600">
          {employee.firstName} {employee.lastName}
        </h3>
      </Link>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">{employee.department}</p>
      <StarRating rating={employee.rating} />
      <p className="text-xs text-center text-gray-400 mt-2">
        {employee.projects} Projects • {employee.feedback} Feedback
      </p>

      <button
        onClick={() => toggleBookmark(employee.id)}
        className="absolute top-3 right-3 text-blue-500 hover:scale-110 transition"
      >
        {bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
      </button>
    </div>
  );
}