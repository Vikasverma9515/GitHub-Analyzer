// src/components/RepositoryList.tsx
import { Repository } from "../types/github"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryList = ({ repositories }: RepositoryListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {repositories.map((repo) => (
        <Card key={repo.id}>
          <CardHeader>
            <CardTitle>
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-amber-50"
              >
                {repo.name}
              </a>
            </CardTitle>
            <CardDescription>{repo.language}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white">
              {repo.description || 'No description available'}
            </p>
            <p className="mt-2 text-sm text-amber-50">⭐ {repo.stargazers_count}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};