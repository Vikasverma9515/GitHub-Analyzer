// components/BackgroundElements.tsx
import { FaGithub, FaCode, FaBug, FaCodeBranch, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-200/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 5 === 0 && <FaGithub size={30} />}
          {i % 5 === 1 && <FaCode size={30} />}
          {i % 5 === 2 && <FaBug size={30} />}
          {i % 5 === 3 && <FaCodeBranch size={30} />}
          {i % 5 === 4 && <FaStar size={30} />}
        </motion.div>
      ))}
    </div>
  );
};