// components/AchievementBadges.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Repository, Commit } from '../types/github';
import { Achievement } from '../types/github';
import { 
  FaStar, FaCode, FaTrophy, FaFire, 
//   FaBug, FaCodeBranch, FaUserFriends, FaRocket 
} from 'react-icons/fa';

interface AchievementBadgesProps {
  repositories: Repository[];
  commits: Commit[];
  user: any; // GitHub user data
}

export const AchievementBadges = ({ repositories, commits }: AchievementBadgesProps) => {
  const [selectedBadge, setSelectedBadge] = useState<Achievement | null>(null);

  const calculateAchievements = (): Achievement[] => {
    const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalCommits = commits.length;
    const totalRepos = repositories.length;
    
    return [
      // Repository Achievements
      {
        id: 'repo-creator',
        name: 'Repository Pioneer',
        description: 'Created multiple repositories',
        icon: 'FaCode',
        level: getRepoLevel(totalRepos),
        criteria: `Created ${totalRepos} repositories`,
        progress: Math.min((totalRepos / 30) * 100, 100),
        isEarned: totalRepos >= 5
      },
      
      // Star Achievements
      {
        id: 'star-collector',
        name: 'Star Collector',
        description: 'Repositories earned stars from the community',
        icon: 'FaStar',
        level: getStarLevel(totalStars),
        criteria: `Earned ${totalStars} stars`,
        progress: Math.min((totalStars / 100) * 100, 100),
        isEarned: totalStars >= 10
      },

      // Commit Achievements
      {
        id: 'consistent-coder',
        name: 'Consistent Coder',
        description: 'Regular code contributions',
        icon: 'FaFire',
        level: getCommitLevel(totalCommits),
        criteria: `Made ${totalCommits} commits`,
        progress: Math.min((totalCommits / 1000) * 100, 100),
        isEarned: totalCommits >= 100
      },

      // Language Achievements
      {
        id: 'polyglot',
        name: 'Code Polyglot',
        description: 'Uses multiple programming languages',
        icon: 'FaCode',
        level: getLanguageLevel(repositories),
        criteria: 'Uses multiple programming languages',
        progress: getLanguageProgress(repositories),
        isEarned: getUniqueLanguages(repositories).length >= 3
      },
      
      // ... more achievements
    ];
  };

  const getRepoLevel = (count: number): Achievement['level'] => {
    if (count >= 30) return 'platinum';
    if (count >= 20) return 'gold';
    if (count >= 10) return 'silver';
    return 'bronze';
  };

  const getStarLevel = (stars: number): Achievement['level'] => {
    if (stars >= 1000) return 'platinum';
    if (stars >= 100) return 'gold';
    if (stars >= 50) return 'silver';
    return 'bronze';
  };

  const getCommitLevel = (commits: number): Achievement['level'] => {
    if (commits >= 1000) return 'platinum';
    if (commits >= 500) return 'gold';
    if (commits >= 100) return 'silver';
    return 'bronze';
  };

  const getLanguageLevel = (repos: Repository[]): Achievement['level'] => {
    const languages = getUniqueLanguages(repos);
    if (languages.length >= 8) return 'platinum';
    if (languages.length >= 6) return 'gold';
    if (languages.length >= 4) return 'silver';
    return 'bronze';
  };

  const getUniqueLanguages = (repos: Repository[]): string[] => {
    return [...new Set(repos.map(repo => repo.language).filter(Boolean))];
  };

  const getLanguageProgress = (repos: Repository[]): number => {
    const languages = getUniqueLanguages(repos);
    return Math.min((languages.length / 8) * 100, 100);
  };

  const getLevelColor = (level: Achievement['level']): string => {
    switch (level) {
      case 'platinum': return 'bg-gradient-to-r from-purple-400 to-purple-600';
      case 'gold': return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'silver': return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 'bronze': return 'bg-gradient-to-r from-orange-300 to-orange-500';
    }
  };

  const achievements = calculateAchievements();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6">Achievements</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className={`relative cursor-pointer rounded-lg p-4 ${
              achievement.isEarned 
                ? getLevelColor(achievement.level)  
                : 'bg-gray-100'       
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedBadge(achievement)}
          >
            <div className="text-center">
              <div className={`text-4xl mb-2 ${
                achievement.isEarned ? 'text-white' : 'text-gray-400' 
              }`}>
                {getIconComponent(achievement.icon)}
              </div>
              <h4 className={`font-semibold ${
                achievement.isEarned ? 'text-white' : 'text-gray-500'
              }`}>
                {achievement.name}
              </h4>
              {achievement.isEarned && (
                <div className="text-sm text-white opacity-80">
                  {achievement.level.toUpperCase()}
                </div>
              )}
            </div>
            
            <div className="mt-2 bg-white/30 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2"
                style={{ width: `${achievement.progress}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl p-6 max-w-md m-4"
              onClick={e => e.stopPropagation()}
            >
              <div className={`text-6xl mb-4 ${
                getLevelColor(selectedBadge.level)
              } p-4 rounded-full inline-block`}>
                {getIconComponent(selectedBadge.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedBadge.name}</h3>
              <p className="text-gray-600 mb-4">{selectedBadge.description}</p>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Progress</div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${getLevelColor(selectedBadge.level)} rounded-full h-2`}
                    style={{ width: `${selectedBadge.progress}%` }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Criteria:</strong> {selectedBadge.criteria}
              </div>
              <button
                className="mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 text-amber-50"
                onClick={() => setSelectedBadge(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper function to render icons
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FaStar': return <FaStar />;
    case 'FaCode': return <FaCode />;
    case 'FaFire': return <FaFire />;
    // ... add more icons as needed
    default: return <FaTrophy />;
  }
};