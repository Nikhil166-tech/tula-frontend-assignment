import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Shield, Compass, Award, Trophy } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection({ onEnquireClick }) {
  // Activity bubbles inspired by TIS homepage
  const activities = [
    { title: "Archery", label: "Precision", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop", position: "top-12 left-4 sm:left-12", delay: 0 },
    { title: "Polo & Riding", label: "Courage", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop", position: "top-20 right-4 sm:right-16", delay: 0.2 },
    { title: "Air Rifle", label: "Focus", image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400&auto=format&fit=crop", position: "bottom-24 left-6 sm:left-20", delay: 0.4 },
    { title: "Aquatics", label: "Endurance", image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=400&auto=format&fit=crop", position: "bottom-20 right-6 sm:right-24", delay: 0.6 }
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 sm:pt-8 pb-16 sm:pb-20 bg-gradient-to-b from-stone-50 via-white to-stone-50/50 dark:from-[#0B0D11] dark:via-[#11141A] dark:to-[#0B0D11]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-tis-crimson/10 via-tis-gold/10 to-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Activity Bubbles (Desktop & Tablet) */}
      <div className="hidden lg:block absolute inset-0 max-w-7xl mx-auto pointer-events-none">
        {activities.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: item.delay }}
            className={`absolute ${item.position} pointer-events-auto`}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4.5 + idx,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="group relative flex items-center gap-3 p-2 pr-4 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-700 shadow-card-elevated dark:shadow-card-dark hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-full object-cover border-2 border-tis-gold"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-tis-crimson dark:text-red-400 block">
                  {item.label}
                </span>
                <span className="text-xs font-extrabold text-zinc-900 dark:text-white block font-display">
                  {item.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-tis-crimson/10 dark:bg-tis-crimson/20 border border-tis-crimson/20 text-tis-crimson dark:text-red-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 shadow-sm max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-tis-gold shrink-0" />
          <span className="truncate">Ranked #1 Boarding School in Dehradun • 2026–27 Open</span>
        </motion.div>

        {/* Core Slogan Headline: "LET'S DO it with Tulas" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-1 sm:space-y-2"
        >
          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase font-display text-zinc-800 dark:text-zinc-200">
            LET'S DO <span className="italic font-serif text-tis-teal dark:text-tis-teal-light">it</span>
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">with</span>{' '}
            <span className="relative inline-block text-tis-crimson">
              Tula's
              {/* Hand-drawn Golden Scribble Accent */}
              <svg
                className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-6 text-tis-gold"
                viewBox="0 0 268 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9.5C50 2 110 5 152 2.5C194 0 266 5 266 5C170 8 70 10 27 12C112 14 238 9 238 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle / Core School Vision */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 sm:mt-8 text-sm sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-sans text-balance px-2"
        >
          Established under the aegis of <strong className="text-zinc-900 dark:text-white font-semibold">Rishabh Educational Trust</strong> to impart holistic education through <span className="text-tis-teal dark:text-tis-teal-light font-semibold">seamless opportunities</span>. Where ancient Gurukul values unite with Olympic-grade sports, CBSE brilliance, and global ambition.
        </motion.p>

        {/* Mobile Horizontal Activity Chips (shown on mobile & tablet) */}
        <div className="lg:hidden mt-6 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
          {activities.map((act) => (
            <div
              key={act.title}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-xs shrink-0"
            >
              <img src={act.image} alt={act.title} className="w-5 h-5 rounded-full object-cover" />
              <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                {act.title}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onEnquireClick}
            icon={ArrowRight}
            className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base shadow-glow-crimson"
          >
            Enquire for Admission
          </Button>

          <Button
            variant="white"
            size="lg"
            href="#campus"
            icon={Play}
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
          >
            Explore 22-Acre Campus
          </Button>
        </motion.div>

        {/* Quick Highlights / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 shadow-xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-tis-crimson/10 dark:bg-tis-crimson/20 flex items-center justify-center text-tis-crimson dark:text-red-400 shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-black text-zinc-900 dark:text-white leading-tight">100% Boarding</p>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Pastoral Care</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 shadow-xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-tis-teal/10 dark:bg-tis-teal/20 flex items-center justify-center text-tis-teal dark:text-tis-teal-light shrink-0">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-black text-zinc-900 dark:text-white leading-tight">16+ Sports</p>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Olympic Standard</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 shadow-xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-tis-gold/15 dark:bg-tis-gold/20 flex items-center justify-center text-tis-gold-dark dark:text-tis-gold-light shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-black text-zinc-900 dark:text-white leading-tight">22+ Acres</p>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Foothill Campus</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 shadow-xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs font-black text-zinc-900 dark:text-white leading-tight">1:8 Mentoring</p>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Teacher Ratio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
