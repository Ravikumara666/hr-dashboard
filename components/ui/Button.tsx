'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false }: ButtonProps) {
  const base = 'px-4 py-2 rounded-lg font-semibold text-sm';
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-400',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} transition disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}