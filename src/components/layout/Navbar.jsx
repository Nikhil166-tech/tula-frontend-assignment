import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, GraduationCap, PhoneCall } from 'lucide-react';
import { navigationLinks, schoolInfo } from '../../data/tisData';
import ThemeToggle from '../animation/ThemeToggle';
import Button from '../ui/Button';

export default function Navbar({ onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm py-2.5'
          : 'bg-white/95 dark:bg-[#0B0D11]/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="font-display font-black text-lg text-tis-gold tracking-tighter">TIS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-zinc-900 dark:text-white leading-tight">
              Tula's <span className="text-tis-crimson dark:text-red-400">International</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-tis-gold dark:text-tis-gold-light">
              The Modern Gurukul • Dehradun
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-tis-crimson dark:hover:text-red-400 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tis-crimson dark:bg-tis-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA cluster */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <Button
            variant="outline"
            size="sm"
            onClick={onEnquireClick}
            className="border-tis-teal text-tis-teal hover:bg-tis-teal hover:text-white"
          >
            Enquire
          </Button>

          <Button
            variant="primary"
            size="sm"
            href="#admissions"
            icon={ArrowUpRight}
          >
            Apply 2026
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 dark:bg-zinc-900/98 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-zinc-800 dark:text-zinc-200 hover:text-tis-crimson py-1 border-b border-zinc-100 dark:border-zinc-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full justify-center"
                >
                  Enquire Now
                </Button>
                <Button
                  variant="outline"
                  href="#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Admissions Form
                </Button>
                <a
                  href={`tel:${schoolInfo.admissionsHelpline}`}
                  className="mt-2 text-center text-xs font-bold text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-tis-crimson" />
                  Helpline: {schoolInfo.admissionsHelpline}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
