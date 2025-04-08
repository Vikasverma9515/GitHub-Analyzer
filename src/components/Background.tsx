// components/Background.tsx
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export const Background = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-30 mesh-gradient opacity-40" />

      {/* Grid Pattern */}
      <div className="fixed inset-0 -z-20 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(#4444 1px, transparent 1px),
                               linear-gradient(to right, #4444 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      {/* Floating GitHub Logos */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-800/5"
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
            <FaGithub size={Math.random() * 30 + 20} />
          </motion.div>
        ))}
      </div>

      {/* Light Effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/10 to-transparent" />
      </div>
    </>
  );
};