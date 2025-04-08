// components/FloatingIcons.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaCodeBranch, FaStar, FaDatabase } from 'react-icons/fa';

export const FloatingIcons = () => {
  const icons = [
    { Icon: FaGithub, size: 40 },
    { Icon: FaCode, size: 35 },
    { Icon: FaCodeBranch, size: 30 },
    { Icon: FaCodeBranch, size: 35 },
    { Icon: FaStar, size: 30 },
    { Icon: FaDatabase, size: 35 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const { Icon, size } = icons[i % icons.length];
        const randomX = Math.random() * 100; // percentage
        const randomY = Math.random() * 100; // percentage
        
        return (
          <motion.div
            key={i}
            className="absolute text-purple-600/20"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};