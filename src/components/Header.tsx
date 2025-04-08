// components/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCode, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                  GitHub Analyzer
                </span>
                <span className="text-xs text-gray-500">Profile Analysis Tool</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="/" label="Home" />
              {/* <NavLink href="/features" label="Features" /> */}
              <NavLink href="/about" label="About" />
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/vikasverma9515"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r bg-black text-white"
              >
                <FaGithub />
                <span>GitHub</span>
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-700" />
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <MobileNavLink 
                    href="/" 
                    label="Home" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  {/* <MobileNavLink 
                    href="/features" 
                    label="Features" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  /> */}
                  <MobileNavLink 
                    href="/about" 
                    label="About" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/vikasverma9515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-black text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Desktop NavLink component
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    to={href}
    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: { 
  href: string; 
  label: string;
  onClick: () => void;
}) => (
  <Link
    to={href}
    onClick={onClick}
    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-center text-lg py-2 hover:bg-purple-50/50 rounded-lg"
  >
    {label}
  </Link>
);