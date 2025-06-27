'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface User {
  email: string;
  token?: string;
  role?: string;
}

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

interface AppContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
  bookmarks: number[];
  setBookmarks: (bookmarks: number[]) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterDepartment: string;
  setFilterDepartment: (dept: string) => void;
  filterRating: string;
  setFilterRating: (rating: string) => void;
  departments: string[];
  fetchEmployees: () => Promise<void>;
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
  filteredEmployees: Employee[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const generateMockData = useCallback((userData: any[]): Employee[] => {
    return userData.map(user => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      image: user.image,
      address: user.address,
      department: departments[Math.floor(Math.random() * departments.length)],
      rating: Math.floor(Math.random() * 5) + 1,
      projects: Math.floor(Math.random() * 10) + 1,
      feedback: Math.floor(Math.random() * 20) + 5,
    }));
  }, []);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/users?limit=20');
      const data = await res.json();
      const mockEmployees = generateMockData(data.users);
      setEmployees(mockEmployees);
    } catch (err) {
      console.error('Error loading employees', err);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  }, [generateMockData]);

  const toggleBookmark = useCallback((id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  }, []);

  const isBookmarked = useCallback((id: number) => bookmarks.includes(id), [bookmarks]);

  // Filter employees based on search and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = searchTerm === '' || 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === '' || employee.department === filterDepartment;
    const matchesRating = filterRating === '' || employee.rating === parseInt(filterRating);
    
    return matchesSearch && matchesDepartment && matchesRating;
  });

  const value: AppContextType = {
    darkMode, setDarkMode,
    user, setUser,
    employees, setEmployees,
    bookmarks, setBookmarks,
    currentPage, setCurrentPage,
    loading, setLoading,
    searchTerm, setSearchTerm,
    filterDepartment, setFilterDepartment,
    filterRating, setFilterRating,
    departments,
    fetchEmployees,
    toggleBookmark,
    isBookmarked,
    filteredEmployees,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};