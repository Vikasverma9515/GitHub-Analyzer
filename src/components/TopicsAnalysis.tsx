// components/TopicsAnalysis.tsx
export const TopicsAnalysis = ({ repositories }: { repositories: { topics: string[] }[] }) => {
    const topics = repositories.reduce((acc, repo) => {
      repo.topics.forEach((topic: string) => {
        acc[topic] = (acc[topic] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Popular Topics</h3>
        <ul>
          {Object.entries(topics).map(([topic, count]) => (
            <li key={topic} className="mb-2">
              {topic}: {count}
            </li>
          ))}
        </ul>
      </div>
    );
  };