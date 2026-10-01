import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
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
          ? 'glass-nav border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm py-2'
          : 'bg-white/95 dark:bg-[#0B0D11]/95 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
            <span className="font-display font-black text-sm sm:text-lg text-tis-gold tracking-tighter">TIS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-xl tracking-tight text-zinc-900 dark:text-white leading-tight">
              Tula's <span className="text-tis-crimson dark:text-red-400">International</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-tis-gold dark:text-tis-gold-light truncate">
              The Modern Gurukul • Dehradun
            </span>
          </div>
        </a>

        {/* Desktop Group (Links + Divider + CTAs) - Visible ONLY on lg screens (>= 1024px) */}
        <div className="hidden lg:flex items-center">
          <nav className="flex items-center gap-4 xl:gap-6 mr-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-tis-crimson dark:hover:text-red-400 transition-colors relative py-1 px-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-tis-crimson dark:bg-tis-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Visual Vertical Divider */}
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mr-5" />

          {/* Desktop Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="outline"
              size="sm"
              onClick={onEnquireClick}
              className="border-tis-teal text-tis-teal hover:bg-tis-teal hover:text-white text-xs px-3.5 py-1.5"
            >
              Enquire
            </Button>

            <Button
              variant="primary"
              size="sm"
              href="#admissions"
              icon={ArrowUpRight}
              className="text-xs px-4 py-1.5"
            >
              Apply 2026
            </Button>
          </div>
        </div>

        {/* Mobile / Tablet Controls - Visible ONLY on < lg screens (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 dark:bg-zinc-900/98 border-b border-zinc-200 dark:border-zinc-800 px-5 py-5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-tis-crimson py-2.5 px-2 rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-800/60 border-b border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-400 text-xs font-bold">›</span>
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full justify-center text-sm py-2.5"
                >
                  Enquire for Admission
                </Button>
                <Button
                  variant="outline"
                  href="#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center text-sm py-2.5"
                >
                  Admissions Prospectus & Forms
                </Button>
                <a
                  href={`tel:${schoolInfo.admissionsHelpline}`}
                  className="mt-1 text-center text-xs font-bold text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-2 py-2 rounded-xl bg-stone-100 dark:bg-zinc-800"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-tis-crimson" />
                  <span>Admissions Helpline: {schoolInfo.admissionsHelpline}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
