// src/components/ProfileCard.tsx
import { GitHubUser } from '../types/github';
import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding, FaGithub } from 'react-icons/fa';
import { format } from 'date-fns';

interface ProfileCardProps {
  user: GitHubUser;
}

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={user.avatar_url} 
            alt={user.name} 
            className="w-32 h-32 rounded-full border-4 border-purple-100"
          />
        </div>

        {/* User Info */}
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <a 
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 flex items-center justify-center md:justify-start gap-1 mb-2"
          >
            <FaGithub />
            @{user.login}
          </a>
          
          {user.bio && (
            <p className="text-gray-700 mb-4">
              {user.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{user.public_repos}</div>
              <div className="text-sm text-gray-600">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{user.followers}</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{user.following}</div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            {user.location && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <FaMapMarkerAlt />
                <span>{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <FaLink />
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
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <FaTwitter />
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
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <FaBuilding />
                <span>{user.company}</span>
              </div>
            )}
          </div>

          {/* Joined Date */}
          <div className="mt-4 text-sm text-gray-500">
            Joined GitHub on {format(new Date(user.created_at), 'MMMM dd, yyyy')}
          </div>
        </div>
      </div>
    </div>
  );
};