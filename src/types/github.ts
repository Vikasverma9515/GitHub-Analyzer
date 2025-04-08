// src/types/github.ts
export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
  }
  
  export interface Commit {
    sha: string;
    commit: {
      author: {
        date: string;
      };
    };
  }

// src/types/github.ts
export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
  created_at: string;
  
}

export interface Repository {
  // Add other properties here
  size: number; // Size of the repository in KB
}

// ... your existing Repository and Commit interfaces


export interface Repository {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string; // Added the missing property
  topics?: string[];
}

// types/achievements.ts
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  criteria: string;
  progress: number;
  isEarned: boolean;
}