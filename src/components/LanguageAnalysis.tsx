// components/LanguageAnalysis.tsx
import { Repository } from '../types/github';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface LanguageAnalysisProps {
  repositories: Repository[];
}

export const LanguageAnalysis = ({ repositories }: LanguageAnalysisProps) => {
  const languageStats = repositories.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const data = Object.entries(languageStats).map(([name, value]) => ({
    name,
    value
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};