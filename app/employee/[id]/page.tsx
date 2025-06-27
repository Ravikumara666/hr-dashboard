'use client';
import { useParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import StarRating from '@/components/ui/StarRating';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EmployeeDetailPage() {
  const { id } = useParams();
  const { employees } = useApp();

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return (
      <div className="text-center py-10">
        <div className="text-gray-500 mb-4">Employee not found.</div>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-xl p-6">
      <Link 
        href="/dashboard" 
        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
      
      <div className="flex items-center gap-6 mb-6">
        <img
          src={employee.image}
          alt={employee.firstName}
          className="w-24 h-24 rounded-full object-cover border-4 border-purple-400"
        />
        <div>
          <h2 className="text-2xl font-bold">{employee.firstName} {employee.lastName}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{employee.department}</p>
          <StarRating rating={employee.rating} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="space-y-2">
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Projects:</strong> {employee.projects}</p>
        </div>
        <div className="space-y-2">
          <p><strong>Feedback:</strong> {employee.feedback}</p>
          <p><strong>Location:</strong> {employee.address?.city}, {employee.address?.state}</p>
          <p><strong>Rating:</strong> {employee.rating}/5 stars</p>
        </div>
      </div>
    </div>
  );
}