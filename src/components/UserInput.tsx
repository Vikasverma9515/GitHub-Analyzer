// src/components/UserInput.tsx
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface UserInputProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export const UserInput = ({ onSearch, isLoading }: UserInputProps) => {
  const [username, setUsername] = useState('');

  return (
    <div className="flex gap-2 mb-4 shadow-2xs p-4 rounded-md border-2 border-blue-500 bg-blue-50"> 
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        onClick={() => onSearch(username)}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Search'}
      </Button>
    </div>
  );
};