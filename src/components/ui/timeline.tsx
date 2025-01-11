import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
}

interface TimelineItemProps {
  year: string;
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-200">
      {children}
    </div>
  );
}

export function TimelineItem({ year, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        {year}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}