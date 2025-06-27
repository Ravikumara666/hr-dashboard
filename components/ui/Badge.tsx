'use client';

interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({ label, color = 'bg-blue-100 text-blue-700' }: BadgeProps) {
  return (
    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${color}`}>
      {label}
    </span>
  );
}