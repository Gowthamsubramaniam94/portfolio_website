import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { ThemeMode } from '../../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-secondary-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;