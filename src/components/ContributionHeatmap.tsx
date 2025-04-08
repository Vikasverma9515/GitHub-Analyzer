// components/ContributionHeatmap.tsx
import { Commit } from '../types/github';
import { format } from 'date-fns';

export const ContributionHeatmap = ({ commits }: { commits: Commit[] }) => {
  const commitsByDay = commits.reduce<Record<string, number>>((acc, commit) => {
    const date = format(new Date(commit.commit.author.date), 'yyyy-MM-dd');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Generate calendar grid
  const generateCalendarData = () => {
    // Implementation for calendar grid
    console.log('Generating calendar data...', commitsByDay);
  };

  // Generate calendar data
  generateCalendarData();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Contribution Calendar</h3>
      {/* Render calendar grid */}
    </div>
  );
};