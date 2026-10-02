import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Shield, Compass, Award, Trophy, X } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection({ onEnquireClick }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Activity badges with high-res relevant photography
  const activities = [
    {
      title: "Olympic Archery",
      label: "Precision & Poise",
      image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=400&auto=format&fit=crop",
      position: "top-10 left-2 xl:left-8",
      delay: 0
    },
    {
      title: "Horse Riding & Polo",
      label: "Courage & Grit",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop",
      position: "top-12 right-2 xl:right-8",
      delay: 0.15
    },
    {
      title: "10m Air Rifle",
      label: "Olympic Focus",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=400&auto=format&fit=crop",
      position: "top-[42%] left-2 xl:left-8",
      delay: 0.3
    },
    {
      title: "All-Weather Aquatics",
      label: "Stamina & Grace",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=400&auto=format&fit=crop",
      position: "top-[46%] right-2 xl:right-8",
      delay: 0.45
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-gradient-to-b from-stone-50 via-white to-stone-100/70 dark:from-[#080A0F] dark:via-[#0F1218] dark:to-[#080A0F]">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[850px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-tis-crimson/15 via-tis-gold/15 to-tis-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-tis-teal/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-80 h-80 bg-tis-crimson/10 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Activity Badges for Desktop with parallax float */}
      <div className="hidden lg:block absolute inset-0 max-w-7xl mx-auto pointer-events-none z-20">
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
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5 + idx * 0.7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="group relative flex items-center gap-3 p-2.5 pr-5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-700/80 shadow-card-elevated dark:shadow-card-dark hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded-full object-cover border-2 border-tis-gold/80 group-hover:border-tis-crimson transition-colors"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 block">
                  {item.label}
                </span>
                <span className="text-xs font-black text-zinc-900 dark:text-white block font-display">
                  {item.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full my-auto">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tis-crimson/10 dark:bg-tis-crimson/25 border border-tis-crimson/25 text-tis-crimson dark:text-red-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-tis-gold shrink-0 animate-pulse" />
          <span>Ranked #1 Boarding School in Dehradun • Admissions Open 2026–27</span>
        </motion.div>

        {/* Hero Slogan Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 sm:space-y-3"
        >
          <p className="text-sm sm:text-base md:text-lg font-black tracking-[0.25em] uppercase font-display text-tis-teal dark:text-tis-teal-light">
            The Modern Gurukul • Estd. 2012
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
            <span className="block text-zinc-900 dark:text-zinc-100">LET'S DO <span className="italic font-serif font-normal text-tis-teal dark:text-tis-teal-light">it</span></span>
            <span className="relative inline-block mt-1 sm:mt-2 text-tis-crimson">
              with Tula's
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
          className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-sans text-balance px-2"
        >
          Established under the aegis of <strong className="text-zinc-900 dark:text-white font-semibold">Rishabh Educational Trust</strong> to impart holistic education through <span className="text-tis-teal dark:text-tis-teal-light font-semibold">seamless opportunities</span>. Where ancient Gurukul values unite with Olympic-grade sports, CBSE brilliance, and global ambition.
        </motion.p>

        {/* Mobile Horizontal Activity Chips */}
        <div className="lg:hidden mt-6 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
          {activities.map((act) => (
            <div
              key={act.title}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-xs shrink-0"
            >
              <img src={act.image} alt={act.title} className="w-5 h-5 rounded-full object-cover" />
              <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                {act.title}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onEnquireClick}
            icon={ArrowRight}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base shadow-glow-crimson group"
          >
            <span>Enquire for Admission</span>
          </Button>

          <Button
            variant="white"
            size="lg"
            onClick={() => setVideoModalOpen(true)}
            icon={Play}
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base dark:bg-zinc-800 dark:text-white dark:border-zinc-700 hover:border-tis-teal"
          >
            Experience Campus Film
          </Button>

          <a
            href="#fee-calculator"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-tis-crimson dark:hover:text-white transition-colors py-2 px-3"
          >
            <span>Calculate Fees & Scholarship</span>
            <span className="text-tis-crimson">→</span>
          </a>
        </motion.div>

        {/* Quick Trust Highlights Banner - Refined Glass Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:border-tis-crimson/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-crimson/10 dark:bg-tis-crimson/20 flex items-center justify-center text-tis-crimson dark:text-red-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white leading-tight">100% Boarding</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Pastoral Care</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:border-tis-teal/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-teal/10 dark:bg-tis-teal/20 flex items-center justify-center text-tis-teal dark:text-tis-teal-light shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white leading-tight">16+ Sports</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Olympic Standard</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:border-tis-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-gold/15 dark:bg-tis-gold/20 flex items-center justify-center text-tis-gold-dark dark:text-tis-gold-light shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white leading-tight">22+ Acres</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Foothill Campus</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:border-purple-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white leading-tight">1:8 Mentoring</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Teacher Ratio</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video / Campus Reel Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
            >
              <div className="p-4 flex items-center justify-between border-b border-zinc-800 text-white">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-tis-crimson fill-tis-crimson" />
                  <span className="font-bold text-sm">Tula's International School • Campus Film</span>
                </div>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                  title="TIS Campus Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
                <span>Want to experience the campus in person? Schedule a physical visit with our admissions team.</span>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    setVideoModalOpen(false);
                    onEnquireClick();
                  }}
                >
                  Book Campus Visit
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
