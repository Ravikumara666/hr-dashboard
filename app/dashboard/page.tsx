'use client';
import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import EmployeeCard from '@/components/cards/EmployeeCard';
import SearchFilter from '@/components/filters/SearchFilter';
import PerformanceCard from '@/components/cards/PerformanceCard';
import { Users, Star, Briefcase, MessageSquare } from 'lucide-react';

export default function DashboardPage() {
  const { filteredEmployees, employees, fetchEmployees, loading } = useApp();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Calculate stats
  const totalEmployees = employees.length;
  const avgRating = employees.length > 0 
    ? (employees.reduce((acc, emp) => acc + emp.rating, 0) / employees.length).toFixed(1)
    : '0';
  const totalProjects = employees.reduce((acc, emp) => acc + emp.projects, 0);
  const totalFeedback = employees.reduce((acc, emp) => acc + emp.feedback, 0);

  return (
    <div className="space-y-6">
      {/* Performance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PerformanceCard 
          title="Total Employees" 
          value={totalEmployees.toString()} 
          icon={Users}
          color="bg-blue-500"
        />
        <PerformanceCard 
          title="Average Rating" 
          value={avgRating} 
          icon={Star}
          color="bg-yellow-500"
        />
        <PerformanceCard 
          title="Total Projects" 
          value={totalProjects.toString()} 
          icon={Briefcase}
          color="bg-green-500"
        />
        <PerformanceCard 
          title="Total Feedback" 
          value={totalFeedback.toString()} 
          icon={MessageSquare}
          color="bg-purple-500"
        />
      </div>

      <SearchFilter />
      
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading employees...</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No employees found matching your criteria.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
}