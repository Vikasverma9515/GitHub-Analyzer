
// import { useState } from 'react';
// import { FaSearch, FaBook, FaCheck, FaChartLine, FaUser, FaMagic, FaChartBar } from 'react-icons/fa';
// import axios from 'axios';
// import { Commit, Repository } from '../types/github';
// import { UserInput } from '../components/UserInput';
// import { RepositoryList } from '../components/RepositoryList';
// import { CommitsChart } from '../components/CommitsChart';
// const Home = ()=> {
//   const [repositories, setRepositories] = useState<Repository[]>([]);
//   const [commits, setCommits] = useState<Commit[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (username: string) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Fetch repositories
//       const reposResponse = await axios.get(
//         `https://api.github.com/users/${username}/repos`
//       );
//       setRepositories(reposResponse.data);

//       // Fetch commits from the first 5 repositories (to avoid rate limiting)
//       const commitPromises = reposResponse.data
//         .slice(0, 5)
//         .map((repo: Repository) =>
//           axios.get(
//             `https://api.github.com/repos/${username}/${repo.name}/commits`
//           )
//         );

//       const commitResponses = await Promise.all(commitPromises);
//       const allCommits = commitResponses.flatMap((response) => response.data);
//       setCommits(allCommits);
//     } catch (err) {
//       setError('Error fetching GitHub data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };
// return (

//   <div className="container mx-auto p-6">
    

//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//           GitHub Profile Analyzer
//         </h1>
//         <p className="text-gray-600 text-lg mb-8">
//           Analyze GitHub profiles and visualize repository statistics
//         </p>
//       </div>

//       <UserInput onSearch={handleSearch} isLoading={isLoading} />

//       {error && <div className="text-red-500 mt-4">{error}</div>}

//       <div className="min-h-screen">
//   {/* Hero Section */}
//   <div className="text-center mb-2 pt-5">
//     <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
//       Discover insights, analyze repositories, and visualize your GitHub journey with our powerful analytics tool
//     </p>
//   </div>

//   {/* Features Cards */}
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-16">
//     {/* Repository Analysis Card */}
//     <div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all">
//       <div className="flex items-center mb-4">
//         <div className="p-3 bg-purple-100 rounded-lg">
//           <FaBook className="w-6 h-6 text-purple-600" />
//         </div>
//         <h3 className="text-xl font-semibold ml-4">Repository Insights</h3>
//       </div>
//       <p className="text-gray-600 mb-4">
//         Detailed analysis of your repositories including:
//       </p>
//       <ul className="space-y-2 text-gray-500">
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Star count and fork metrics
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Language distribution
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Activity timeline
//         </li>
//       </ul>
//     </div>

//     {/* Commit Analysis Card */}
//     <div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all">
//       <div className="flex items-center mb-4">
//         <div className="p-3 bg-blue-100 rounded-lg">
//           <FaChartLine className="w-6 h-6 text-blue-600" />
//         </div>
//         <h3 className="text-xl font-semibold ml-4">Commit Analytics</h3>
//       </div>
//       <p className="text-gray-600 mb-4">
//         Visualize your coding activity with:
//       </p>
//       <ul className="space-y-2 text-gray-500">
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Daily commit patterns
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Contribution heatmap
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Time-based trends
//         </li>
//       </ul>
//     </div>

//     {/* Profile Stats Card */}
//     <div className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all">
//       <div className="flex items-center mb-4">
//         <div className="p-3 bg-green-100 rounded-lg">
//           <FaUser className="w-6 h-6 text-green-600" />
//         </div>
//         <h3 className="text-xl font-semibold ml-4">Profile Statistics</h3>
//       </div>
//       <p className="text-gray-600 mb-4">
//         Comprehensive profile metrics including:
//       </p>
//       <ul className="space-y-2 text-gray-500">
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Contribution overview
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Popular repositories
//         </li>
//         <li className="flex items-center">
//           <FaCheck className="w-4 h-4 text-green-500 mr-2" />
//           Engagement metrics
//         </li>
//       </ul>
//     </div>
//   </div>

//   {/* How It Works Section */}
//   <div className="max-w-6xl mx-auto px-4 mb-16">
//     <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//       How It Works
//     </h2>
//     <div className="grid md:grid-cols-3 gap-8">
//       <div className="text-center">
//         <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <FaSearch className="w-8 h-8 text-purple-600" />
//         </div>
//         <h3 className="text-lg font-semibold mb-2">1. Enter Username</h3>
//         <p className="text-gray-600">
//           Simply enter any GitHub username to begin the analysis
//         </p>
//       </div>
//       <div className="text-center">
//         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <FaMagic className="w-8 h-8 text-blue-600" />
//         </div>
//         <h3 className="text-lg font-semibold mb-2">2. Generate Analysis</h3>
//         <p className="text-gray-600">
//           Our tool processes the profile data and creates visualizations
//         </p>
//       </div>
//       <div className="text-center">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <FaChartBar className="w-8 h-8 text-green-600" />
//         </div>
//         <h3 className="text-lg font-semibold mb-2">3. View Insights</h3>
//         <p className="text-gray-600">
//           Explore detailed analytics and download reports
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Call to Action */}
//   <div className="text-center mb-16">
//     <div className="glass-card max-w-3xl mx-auto p-8 rounded-2xl">
//       <h2 className="text-2xl font-bold mb-4">
//         Ready to Analyze Your GitHub Profile?
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Get started now and discover insights about your GitHub activity
//       </p>
//       <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
//         Try It Now
//       </button>
//     </div>
//   </div>
// </div>

//       {repositories.length > 0 && (
//         <>
//           <h2 className=" font-semibold mt-8 mb-4 text-black text-3xl">
//             Repositories
//           </h2>
//           <RepositoryList repositories={repositories} />

//           <h2 className="text-3xl font-semibold mt-8 mb-4 text-black">
//             Commit Activity
//           </h2>
//           <CommitsChart commits={commits} />
//         </>
//       )}
    
//   </div>

// );
// }
// export default Home;



// src/pages/Home.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaSearch, FaCode, FaChartLine, FaDatabase } from 'react-icons/fa';
// import { HiArrowRight } from 'react-icons/hi';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserInput } from '../components/UserInput';

// const Home = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async (username: string) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate search logic or API call
//       console.log(`Searching for GitHub user: ${username}`);
//     } catch (err) {
//       setError('Error occurred while searching. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 pt-20 pb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//             GitHub Profile Analyzer
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Transform your GitHub profile into meaningful insights. Analyze repositories, 
//             track contributions, and visualize your coding journey.
//           </p>
//           {/* <button
//             onClick={() => navigate('/analyze')}
//             className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full
//                      text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all
//                      flex items-center mx-auto"
//           >
//             Start Analysis
//             <HiArrowRight className="ml-2 w-5 h-5" />
//           </button> */}

          
//           <UserInput
//             onSearch={async (username: string) => {
//               setIsLoading(true);
//               setError(null);

//               try {
//                 // Simulate search logic or API call
//                 console.log(`Searching for GitHub user: ${username}`);
//                 // Perform any necessary data fetching or processing here
//                 await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
//                 navigate('/analyze', { state: { username } }); // Pass username to the analyze page
//               } catch (err) {
//                 setError('Error occurred while searching. Please try again.');
//               } finally {
//                 setIsLoading(false);
//               }
//             }}
//             isLoading={isLoading}
//           />

//            {error && <div className="text-red-500 mt-4">{error}</div>}


//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//           >
//             <FeatureCard
//               icon={<FaGithub className="w-8 h-8" />}
//               title="Repository Analytics"
//               description="Get detailed insights about your repositories, including stars, forks, and language statistics."
//               color="purple"
//             />
//             <FeatureCard
//               icon={<FaChartLine className="w-8 h-8" />}
//               title="Contribution Metrics"
//               description="Visualize your contribution patterns and coding activity over time."
//               color="blue"
//             />
//             <FeatureCard
//               icon={<FaCode className="w-8 h-8" />}
//               title="Code Analysis"
//               description="Understand your coding habits and language preferences across projects."
//               color="green"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//               Powerful Analytics at Your Fingertips
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <StatCard number="100+" label="Metrics Analyzed" />
//               <StatCard number="Real-time" label="Data Processing" />
//               <StatCard number="Unlimited" label="Profile Analysis" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-20 ">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl font-bold mb-6">
//               Ready to Analyze Your GitHub Profile?
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Get started now and discover insights about your GitHub activity
//             </p>
//             <button
//               onClick={() => navigate('/analyze')}
//               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full
//                        text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
//             >
//               Start Free Analysis
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className=" py-8">
//         <div className="container mx-auto px-4 text-center text-gray-600">
//           <p>Made with ❤️ by Vikas Verma</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // Helper Components
// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   color: string;
// }

// const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => (
//   <motion.div
//     whileHover={{ y: -5 }}
//     className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
//   >
//     <div className={`text-${color}-600 mb-4`}>{icon}</div>
//     <h3 className="text-xl font-semibold mb-3">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </motion.div>
// );

// interface StatCardProps {
//   number: string;
//   label: string;
// }

// const StatCard = ({ number, label }: StatCardProps) => (
//   <div className="bg-white p-6 rounded-2xl shadow-lg">
//     <div className="text-3xl font-bold text-purple-600 mb-2">{number}</div>
//     <div className="text-gray-600">{label}</div>
//   </div>
// );

// export default Home;



// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaChartLine, FaCode } from 'react-icons/fa';
// import { HiArrowRight } from 'react-icons/hi';
// import { useNavigate } from 'react-router-dom';
// import { UserInput } from '../components/UserInput';

// const Home = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSearch = async (username: string) => {
//     if (!username) {
//       setError("Please enter a GitHub username.");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       console.log(`Navigating to analysis page for: ${username}`);
//       navigate('/analyze', { state: { username } }); // Pass username to analyze page
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 pt-20 pb-16 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
//             GitHub Profile Analyzer
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Transform your GitHub profile into meaningful insights.
//           </p>

//           <UserInput onSearch={handleSearch} isLoading={isLoading} />

//           {error && <div className="text-red-500 mt-4">{error}</div>}
//         </motion.div>

        
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChartLine, FaCode } from 'react-icons/fa';
// import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { UserInput } from '../components/UserInput';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      navigate('/analyze', { state: { username } }); // Pass username to analyze page
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            GitHub Profile Analyzer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your GitHub profile into meaningful insights.
          </p>
          <UserInput onSearch={handleSearch} isLoading={isLoading} />
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <FeatureCard
              icon={<FaGithub className="w-8 h-8" />}
              title="Repository Analytics"
              description="Get insights on stars, forks, and language statistics."
              color="purple"
            />
            <FeatureCard
              icon={<FaChartLine className="w-8 h-8" />}
              title="Contribution Metrics"
              description="Visualize your contribution patterns and coding activity."
              color="blue"
            />
            <FeatureCard
              icon={<FaCode className="w-8 h-8" />}
              title="Code Analysis"
              description="Understand your coding habits and language preferences."
              color="green"
            />
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Analyze Your GitHub Profile?</h2>
            <p className="text-gray-600 mb-8">Get started now and discover insights about your GitHub activity</p>
            <button
              onClick={() => navigate('/analyze')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full
                       text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Start Free Analysis
            </button>
          </motion.div>
        </div>
      </div>

     
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className={`text-${color}-600 mb-4`}>{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Home;
