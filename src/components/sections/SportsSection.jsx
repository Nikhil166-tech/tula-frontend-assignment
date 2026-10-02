import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';
import { sportsList } from '../../data/tisData';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function SportsSection({ onEnquireClick }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSport, setActiveSport] = useState(sportsList[0]);

  const categories = ["All", "Precision & Focus", "Equestrian Excellence", "Aquatics", "Olympic Disciplines", "Field Sports"];

  const filteredSports = selectedCategory === "All"
    ? sportsList
    : sportsList.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <section id="sports" className="py-20 sm:py-32 bg-stone-100/60 dark:bg-[#0A0D12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tis-teal/10 dark:bg-tis-teal/20 text-tis-teal dark:text-tis-teal-light text-xs font-bold uppercase tracking-wider mb-4 border border-tis-teal/25">
              <Trophy className="w-4 h-4 text-tis-gold" />
              16+ Olympic & Field Disciplines
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 dark:text-white leading-[1.15]">
              Sports? <span className="font-serif italic font-normal text-tis-crimson dark:text-red-400">Not just an extracurricular.</span>
            </h2>

            <p className="mt-3 text-2xl sm:text-4xl font-extrabold text-zinc-800 dark:text-zinc-200 font-display">
              At Tula's, it's the{' '}
              <span className="text-tis-teal dark:text-tis-teal-light underline decoration-tis-gold decoration-4 underline-offset-8">
                Foundation!
              </span>
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans px-2">
              Every student engages in 2 compulsory hours of daily athletic training under NIS-certified national coaches across Olympic equestrian, archery, 10m rifle shooting, and FIFA greens.
            </p>
          </div>
        </AnimatedReveal>

        {/* Category Pills Filter */}
        <div className="flex justify-center overflow-x-auto no-scrollbar pb-2 mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-sm gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-tis-crimson text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Sport Explorer Grid & Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Sports Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 order-2 lg:order-1">
            {filteredSports.map((sport, index) => {
              const isSelected = activeSport.id === sport.id;
              return (
                <AnimatedReveal key={sport.id} delay={index * 0.04} direction="up">
                  <button
                    onClick={() => setActiveSport(sport)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-tis-crimson text-white border-tis-crimson shadow-glow-crimson ring-2 ring-tis-crimson/50 scale-[1.02]'
                        : 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800 hover:border-tis-teal/60 text-zinc-900 dark:text-zinc-100 hover:shadow-card-elevated'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 relative w-full">
                      <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-md truncate max-w-[90%]">
                        {sport.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-black text-xs sm:text-sm font-display tracking-tight leading-snug truncate">
                        {sport.title}
                      </h4>
                      <p className={`text-[10px] sm:text-[11px] mt-1 truncate ${isSelected ? 'text-zinc-200' : 'text-zinc-500 dark:text-zinc-400'}`}>
                        {sport.stats?.arena || 'Olympic Arena'}
                      </p>
                    </div>
                  </button>
                </AnimatedReveal>
              );
            })}
          </div>

          {/* Right: Active Spotlight Card with Detailed Facility Specs */}
          <div className="lg:col-span-5 sticky top-24 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSport.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl overflow-hidden relative"
              >
                {/* Visual Banner */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-5 shadow-lg group">
                  <img
                    src={activeSport.image}
                    alt={activeSport.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-tis-gold text-zinc-950 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                      {activeSport.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-2">
                      {activeSport.title}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {activeSport.description}
                </p>

                {/* Facility Metrics Badges */}
                <div className="grid grid-cols-3 gap-2.5 my-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/60 text-center">
                    <span className="text-[10px] font-bold text-zinc-400 block uppercase">Coach Ratio</span>
                    <span className="text-xs sm:text-sm font-black text-tis-crimson dark:text-red-400 font-display">
                      {activeSport.stats?.coachRatio || '1:6'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/60 text-center">
                    <span className="text-[10px] font-bold text-zinc-400 block uppercase">Standard</span>
                    <span className="text-xs sm:text-sm font-black text-tis-teal dark:text-tis-teal-light font-display">
                      Olympic
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-zinc-800/60 text-center">
                    <span className="text-[10px] font-bold text-zinc-400 block uppercase">Daily Drill</span>
                    <span className="text-xs sm:text-sm font-black text-tis-gold-dark dark:text-tis-gold font-display">
                      2 Hours
                    </span>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-2.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-tis-crimson shrink-0" />
                    <span>Certified NIS / International Coaching Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-tis-teal shrink-0" />
                    <span>State & National Level Tournament Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-tis-gold shrink-0" />
                    <span>{activeSport.stats?.award || 'Excellence in Interschool Meets'}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <Button
                    variant="primary"
                    onClick={onEnquireClick}
                    className="w-full justify-center text-xs sm:text-sm py-3 shadow-glow-crimson"
                  >
                    Apply For Sports Scholarship
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
