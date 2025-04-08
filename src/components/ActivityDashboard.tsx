// components/ActivityDashboard.tsx
interface ActivityDashboardProps {
  repositories: any[]; // Replace 'any[]' with the actual type if known
  commits: any[]; // Replace 'any[]' with the actual type if known
}

export const ActivityDashboard: React.FC<ActivityDashboardProps> = ({ repositories }) => {
    // Calculate various activity metrics
    console.log(repositories); // Use the 'repositories' prop to avoid the error
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {repositories.map((repo, index) => (
        <div key={index} className="activity-card p-4 border rounded shadow">
        <h3 className="font-bold text-lg">{repo.name}</h3>
        <p className="text-sm text-gray-600">{repo.description || "No description available"}</p>
        </div>
      ))}
    </div>
    );
  };