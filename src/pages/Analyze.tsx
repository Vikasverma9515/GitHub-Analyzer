import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { RepositoryList } from '../components/RepositoryList';
import { CommitsChart } from '../components/CommitsChart';
import { Repository, Commit, GitHubUser } from '../types/github';
import { UserInput } from '../components/UserInput';
import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding, FaGithub,  } from 'react-icons/fa';
import { format } from 'date-fns';
import { LanguageAnalysis } from '../components/LanguageAnalysis';
// import { RepoTrends } from '../components/RepoTrends';
// import { RepoSizeAnalysis } from '../components/RepoSizeAnalysis';
// import { CommitTimeAnalysis } from '../components/CommitTimeAnalysis';
// import { CollaborationNetwork } from '../components/CollaborationNetwork';
// import { TopicsAnalysis } from '../components/TopicsAnalysis';
// import { ActivityDashboard } from '../components/ActivityDashboard';
import { AchievementBadges } from '../components/AchievementBadges';
import { RepoTrends } from '../components/RepoTrends';
import { RepoSizeAnalysis } from '../components/RepoSizeAnalysis';

const Analyze = () => {
  const location = useLocation();
  const initialUsername = location.state?.username || '';

  const [username, setUsername] = useState<string>(initialUsername);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (username: string) => {
    if (!username.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Fetch user profile
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userResponse.data);

      // Fetch repositories
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepositories(repoResponse.data);

      // Fetch commits
      const commitPromises = repoResponse.data.slice(0, 5).map((repo: Repository) =>
        axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`)
      );

      const commitResponses = await Promise.all(commitPromises);
      const allCommits = commitResponses.flatMap((res) => res.data);
      setCommits(allCommits);
    } catch (err) {
      setError('Error fetching GitHub data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (newUsername: string) => {
    if (!newUsername.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }
    setUsername(newUsername);
    fetchData(newUsername);
  };

  useEffect(() => {
    if (username) {
      fetchData(username);
    }
  }, [username]);

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          GitHub Profile Analysis
        </h1>
        <div className="py-10">
          <UserInput onSearch={handleSearch} isLoading={isLoading} />
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>

      {isLoading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Fetching data...</p>
        </div>
      )}

      {!isLoading && user && (
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image and Basic Info */}
              <div className="md:w-1/3 text-center">
                <img
                  src={user.avatar_url}
                  alt={user.name}
                  className="w-48 h-48 rounded-full mx-auto border-4 border-purple-100"
                />
                <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 flex items-center justify-center gap-2 mt-2"
                >
                  <FaGithub />
                  @{user.login}
                </a>
              </div>

              {/* User Details */}
              <div className="md:w-2/3">
                {user.bio && (
                  <p className="text-gray-700 mb-6">{user.bio}</p>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">{user.public_repos}</div>
                    <div className="text-sm text-gray-600">Repositories</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">{user.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">{user.following}</div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-purple-600" />
                      {user.location}
                    </div>
                  )}
                  {user.blog && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaLink className="text-purple-600" />
                      <a
                        href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600"
                      >
                        {user.blog}
                      </a>
                    </div>
                  )}
                  {user.twitter_username && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaTwitter className="text-purple-600" />
                      <a
                        href={`https://twitter.com/${user.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600"
                      >
                        @{user.twitter_username}
                      </a>
                    </div>
                  )}
                  {user.company && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaBuilding className="text-purple-600" />
                      {user.company}
                    </div>
                  )}
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  Joined GitHub on {format(new Date(user.created_at), 'MMMM dd, yyyy')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && !error && repositories.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold mt-8">Repositories</h2>
          <RepositoryList repositories={repositories} />
           
           <div className="mt-8">
           <AchievementBadges 
        repositories={repositories}
        commits={commits}
        user={user}
      />
           </div>
          

          <h2 className="text-3xl font-semibold mt-8">Commit Activity</h2>
          <CommitsChart commits={commits} />
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <LanguageAnalysis repositories={repositories} />
         <RepoSizeAnalysis repositories={repositories} /> 
        {/* <RepoTrends repositories={repositories} /> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* <RepoSizeAnalysis repositories={repositories} /> */}
        {/* <CommitTimeAnalysis commits={commits} /> */}
      </div>

      {/* <div className="mt-8">
        <CollaborationNetwork repositories={repositories.map(repo => ({ ...repo, id: repo.id.toString(), collaborators: [] }))} />
      </div> */}
{/* 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <TopicsAnalysis repositories={repositories.map(repo => ({ ...repo, topics: repo.topics || [] }))} />
        <ActivityDashboard repositories={repositories} commits={commits} />
      </div> */}
        </>
      )}
    </div>

  );
};

export default Analyze;

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { RepositoryList } from '../components/RepositoryList';
// import { CommitsChart } from '../components/CommitsChart';
// import { Repository, Commit } from '../types/github';
// import { UserInput } from '../components/UserInput';

// const Analyze = () => {
//   const location = useLocation();
//   const initialUsername = location.state?.username || ''; // Fallback if state is missing

//   const [username, setUsername] = useState<string>(initialUsername);
//   const [repositories, setRepositories] = useState<Repository[]>([]);
//   const [commits, setCommits] = useState<Commit[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Function to fetch repositories and commits
//   const fetchData = async (username: string) => {
//     if (!username.trim()) return;

//     setIsLoading(true);
//     setError(null);

//     try {
//       console.log(`Fetching data for: ${username}`);

//       // Fetch repositories
//       const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
//       setRepositories(repoResponse.data);

//       // Fetch commits (limit to first 5 repos to avoid rate limits)
//       const commitPromises = repoResponse.data.slice(0, 5).map((repo: Repository) =>
//         axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`)
//       );

//       const commitResponses = await Promise.all(commitPromises);
//       const allCommits = commitResponses.flatMap((res) => res.data);
//       setCommits(allCommits);
//     } catch (err) {
//       setError('Error fetching GitHub data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle search from UserInput component
//   const handleSearch = (newUsername: string) => {
//     if (!newUsername.trim()) {
//       setError("Please enter a GitHub username.");
//       return;
//     }
//     setUsername(newUsername); // Update username state
//     fetchData(newUsername); // Fetch new data
//   };

//   // Fetch data when the page loads if there's an initial username
//   useEffect(() => {
//     if (username) {
//       fetchData(username);
//     }
//   }, [username]);

//   return (
//     <div className="container mx-auto p-6">
//       <div className="text-center mb-12">
        
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//           GitHub Profile Analysis
//         </h1>
//         <div className="py-10">
//         <UserInput onSearch={handleSearch} isLoading={isLoading} />
        
//         {error && <div className="text-red-500 mt-4">{error}</div>}

//         </div>
//         <p className="text-gray-600 text-lg">
//           {username ? `Analyzing GitHub profile: ` : 'Enter a GitHub username to analyze'}
//           {username && <strong>{username}</strong>}
//         </p>
//       </div>

//       {isLoading && <p className="text-center text-gray-600">Fetching data...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {!isLoading && !error && repositories.length > 0 && (
//         <>
//           <h2 className="text-3xl font-semibold mt-8">Repositories</h2>
//           <RepositoryList repositories={repositories} />

//           <h2 className="text-3xl font-semibold mt-8">Commit Activity</h2>
//           <CommitsChart commits={commits} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Analyze;
