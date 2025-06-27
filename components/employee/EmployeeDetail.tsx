'use client';

import StarRating from '@/components/ui/StarRating';

interface Employee {
  image: string;
  firstName: string;
  lastName: string;
  department: string;
  rating: number;
  email: string;
  phone: string;
  projects: string | number;
  feedback: string;
  address?: {
    city: string;
    state: string;
  };
}

interface EmployeeDetailProps {
  employee: Employee;
}

export default function EmployeeDetail({ employee }: EmployeeDetailProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-6 items-center">
        <img
          src={employee.image}
          alt={employee.firstName}
          className="w-24 h-24 rounded-full object-cover border-4 border-purple-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{employee.firstName} {employee.lastName}</h2>
          <p className="text-gray-500 dark:text-gray-400">{employee.department}</p>
          <StarRating rating={employee.rating} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><strong>Email:</strong> {employee.email}</div>
        <div><strong>Phone:</strong> {employee.phone}</div>
        <div><strong>Projects:</strong> {employee.projects}</div>
        <div><strong>Feedback:</strong> {employee.feedback}</div>
        <div><strong>Location:</strong> {employee.address?.city}, {employee.address?.state}</div>
      </div>
    </div>
  );
}
