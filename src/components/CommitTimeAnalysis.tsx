// components/CommitTimeAnalysis.tsx
interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

export const CommitTimeAnalysis = ({ commits }: { commits: Commit[] }) => {
    const hourlyCommits = commits.reduce((acc: Record<number, number>, commit) => {
      const hour = new Date(commit.commit.author.date).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});
  
    const data = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      commits: hourlyCommits[i] || 0
    }));
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Commit Time Distribution</h3>
        <ul>
          {data.map(({ hour, commits }) => (
            <li key={hour}>
              Hour {hour}: {commits} commits
            </li>
          ))}
        </ul>
      </div>
    );
  };