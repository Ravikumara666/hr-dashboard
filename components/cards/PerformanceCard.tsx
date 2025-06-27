'use client';

interface PerformanceCardProps {
  title: string;
  value: string;
  icon?: React.ElementType;
  color?: string;
}

export default function PerformanceCard({ title, value, icon: Icon, color = 'bg-blue-500' }: PerformanceCardProps) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl shadow-sm text-white ${color}`}>
      {Icon && <Icon className="w-6 h-6" />}
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}