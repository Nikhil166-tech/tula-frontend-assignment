import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-full border transition-all duration-300 ${
        isDark
          ? 'bg-zinc-800/90 border-zinc-700 text-amber-400 hover:bg-zinc-700 hover:border-amber-400/50 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
          : 'bg-stone-100 border-stone-200 text-zinc-700 hover:bg-stone-200 hover:text-tis-crimson hover:border-tis-crimson/30 shadow-sm'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -15, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 15, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
