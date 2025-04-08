// components/RepoSizeAnalysis.tsx
import { Repository } from '../types/github';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const RepoSizeAnalysis = ({ repositories }: { repositories: Repository[] }) => {
  const data = repositories
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .map(repo => ({
      name: repo.name,
      size: repo.size / 1024 // Convert to MB
    }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Top 10 Largest Repositories</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="size" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};