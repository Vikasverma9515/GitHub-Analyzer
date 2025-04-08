// // src/components/CommitsChart.tsx
// import { Commit } from "../types/github"
// import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { format, subDays, eachDayOfInterval } from 'date-fns';

// interface CommitsChartProps {
//   commits: Commit[];
// }

// export const CommitsChart = ({ commits }: CommitsChartProps) => {
//   // Process commits data
//   const today = new Date();
//   const thirtyDaysAgo = subDays(today, 30);

//   const commitsByDay = commits.reduce((acc, commit) => {
//     const date = format(new Date(commit.commit.author.date), 'yyyy-MM-dd');
//     acc[date] = (acc[date] || 0) + 1;
//     return acc;
//   }, {} as Record<string, number>);

//   // Create data for all days in the range
//   const chartData = eachDayOfInterval({
//     start: thirtyDaysAgo,
//     end: today,
//   }).map((date) => ({
//     date: format(date, 'yyyy-MM-dd'),
//     commits: commitsByDay[format(date, 'yyyy-MM-dd')] || 0,
//   }));

//   return (
//     <div className="h-[300px] w-full">
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={chartData}>
//           <XAxis 
//             dataKey="date" 
//             tickFormatter={(date) => format(new Date(date), 'MMM d')}
//           />
//           <YAxis />
//           <Tooltip />
//           <Area 
//             type="monotone" 
//             dataKey="commits" 
//             stroke="#8884d8" 
//             fill="#8884d8" 
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// src/components/CommitsChart.tsx
import { useState } from "react";
import { Commit } from "../types/github";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, subMonths, subYears, eachDayOfInterval, eachMonthOfInterval } from 'date-fns';
import { Button } from "./ui/button";

interface CommitsChartProps {
  commits: Commit[];
}

type TimeRange = '1M' | '3M' | '6M' | '1Y' | 'ALL';

export const CommitsChart = ({ commits }: CommitsChartProps) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1M');
  const [viewType, setViewType] = useState<'daily' | 'monthly'>('daily');

  const getStartDate = (range: TimeRange) => {
    const today = new Date();
    switch (range) {
      case '1M': return subMonths(today, 1);
      case '3M': return subMonths(today, 3);
      case '6M': return subMonths(today, 6);
      case '1Y': return subYears(today, 1);
      case 'ALL': return new Date(Math.min(...commits.map(c => new Date(c.commit.author.date).getTime())));
      default: return subMonths(today, 1);
    }
  };

  const processCommits = () => {
    const startDate = getStartDate(timeRange);
    const today = new Date();

    if (viewType === 'monthly') {
      const monthlyCommits = commits.reduce((acc, commit) => {
        const date = format(new Date(commit.commit.author.date), 'yyyy-MM');
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return eachMonthOfInterval({ start: startDate, end: today })
        .map(date => ({
          date: format(date, 'yyyy-MM'),
          commits: monthlyCommits[format(date, 'yyyy-MM')] || 0,
        }));
    }

    const dailyCommits = commits.reduce((acc, commit) => {
      const date = format(new Date(commit.commit.author.date), 'yyyy-MM-dd');
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return eachDayOfInterval({ start: startDate, end: today })
      .map(date => ({
        date: format(date, 'yyyy-MM-dd'),
        commits: dailyCommits[format(date, 'yyyy-MM-dd')] || 0,
      }));
  };

  const chartData = processCommits();

  // Removed unused getTooltipContent function

  const calculateStats = () => {
    const values = chartData.map(d => d.commits);
    return {
      total: values.reduce((a, b) => a + b, 0),
      average: Math.round(values.reduce((a, b) => a + b, 0) / values.length * 10) / 10,
      max: Math.max(...values),
    };
  };

  const stats = calculateStats();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="space-x-2">
          {(['1M', '3M', '6M', '1Y', 'ALL'] as TimeRange[]).map((range) => (
            <Button
              key={range}
            //   variant={timeRange === range ? "default" : "outline"}
              onClick={() => setTimeRange(range)}
              className="text-sm"
            >
              {range}
            </Button>
          ))}
        </div>
        <div className="space-x-2">
          <Button
            // variant={viewType === 'daily' ? "destructive" : "outline"}
            onClick={() => setViewType('daily')}
            className="text-sm"
          >
            Daily
          </Button>
          <Button
            // variant={viewType === 'monthly' ? "default" : "outline"}
            onClick={() => setViewType('monthly')}
            className="text-sm"
          >
            Monthly
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Total Commits</div>
          <div className="text-2xl font-bold text-purple-600">{stats.total}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Average per {viewType === 'daily' ? 'day' : 'month'}</div>
          <div className="text-2xl font-bold text-purple-600">{stats.average}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Most in a {viewType === 'daily' ? 'day' : 'month'}</div>
          <div className="text-2xl font-bold text-purple-600">{stats.max}</div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => 
                viewType === 'monthly' 
                  ? format(new Date(date), 'MMM yyyy')
                  : format(new Date(date), 'MMM d')
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(label) => 
                viewType === 'monthly'
                  ? format(new Date(label), 'MMMM yyyy')
                  : format(new Date(label), 'MMMM dd, yyyy')
              }
            />
            <Area
              type="monotone"
              dataKey="commits"
              stroke="#8884d8"
              fill="url(#colorGradient)"
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};