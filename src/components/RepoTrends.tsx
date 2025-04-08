// components/RepoTrends.tsx
import { Repository } from '../types/github';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

export const RepoTrends = ({ repositories }: { repositories: Repository[] }) => {
  const sortedRepos = repositories
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

  const data = sortedRepos.map(repo => ({
    date: format(new Date(repo.created_at), 'MMM yyyy'),
    stars: repo.stargazers_count,
    forks: repo.forks_count
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Repository Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="stars" stroke="#8884d8" />
          <Line type="monotone" dataKey="forks" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};