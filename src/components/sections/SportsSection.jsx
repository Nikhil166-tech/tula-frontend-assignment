import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, ArrowRight, Award, Compass, Zap } from 'lucide-react';
import { sportsList } from '../../data/tisData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function SportsSection({ onEnquireClick }) {
  const [selectedSport, setSelectedSport] = useState(sportsList[0]);

  return (
    <section id="sports" className="py-20 sm:py-32 bg-stone-50/60 dark:bg-[#0E1015] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-tis-teal/10 dark:bg-tis-teal/20 text-tis-teal dark:text-tis-teal-light text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-tis-teal/20">
              <Trophy className="w-3.5 h-3.5" />
              16+ Olympic & Field Disciplines
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 dark:text-white leading-tight">
              Sports? <span className="font-serif italic font-normal text-tis-crimson dark:text-red-400">Not just a facility.</span>
            </h2>

            <p className="mt-3 sm:mt-4 text-xl sm:text-3xl font-extrabold text-zinc-800 dark:text-zinc-200 font-display">
              At Tula's, it's the{' '}
              <span className="text-tis-teal dark:text-tis-teal-light underline decoration-tis-gold decoration-4 underline-offset-8">
                Foundation!
              </span>
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans px-2">
              From our equestrian polo arenas and 10m electronic rifle ranges to FIFA-standard football greens, every child trains daily under national certified NIS coaches.
            </p>
          </div>
        </AnimatedReveal>

        {/* Interactive Sport Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Sports Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 order-2 lg:order-1">
            {sportsList.map((sport, index) => {
              const isSelected = selectedSport.id === sport.id;
              return (
                <AnimatedReveal key={sport.id} delay={index * 0.04} direction="up">
                  <button
                    onClick={() => setSelectedSport(sport)}
                    className={`w-full text-left p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? 'bg-tis-crimson text-white border-tis-crimson shadow-glow-crimson scale-[1.02]'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 hover:border-tis-teal/50 text-zinc-800 dark:text-zinc-200 hover:shadow-md'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 sm:mb-3 relative">
                      <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-1.5 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded-md truncate max-w-[90%]">
                        {sport.category}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-xs sm:text-sm font-display tracking-tight leading-snug truncate">
                      {sport.title}
                    </h4>
                  </button>
                </AnimatedReveal>
              );
            })}
          </div>

          {/* Right Column: Active Spotlight Card */}
          <div className="lg:col-span-5 sticky top-24 order-1 lg:order-2">
            <motion.div
              key={selectedSport.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-5 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-xl overflow-hidden relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-4 sm:mb-6 shadow-md">
                <img
                  src={selectedSport.image}
                  alt={selectedSport.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-tis-gold text-zinc-950 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    {selectedSport.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-1.5">
                    {selectedSport.title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                {selectedSport.description}
              </p>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Award className="w-4 h-4 text-tis-crimson shrink-0" />
                  <span>Certified National/International NIS Coaches</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Zap className="w-4 h-4 text-tis-teal shrink-0" />
                  <span>Compulsory 2+ Daily Hours of Active Conditioning</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Compass className="w-4 h-4 text-tis-gold shrink-0" />
                  <span>State & National Level Tournament Representation</span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button
                  variant="primary"
                  onClick={onEnquireClick}
                  className="w-full justify-center text-xs sm:text-sm py-2.5 sm:py-3"
                >
                  Apply For Sports Scholarship
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
