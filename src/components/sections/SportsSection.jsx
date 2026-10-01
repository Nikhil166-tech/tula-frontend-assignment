import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, ArrowRight, ShieldAlert, Award, Compass, Zap } from 'lucide-react';
import { sportsList } from '../../data/tisData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function SportsSection({ onEnquireClick }) {
  const [selectedSport, setSelectedSport] = useState(sportsList[0]);

  return (
    <section id="sports" className="py-24 sm:py-32 bg-stone-50/60 dark:bg-[#0E1015] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-teal/10 dark:bg-tis-teal/20 text-tis-teal dark:text-tis-teal-light text-xs font-bold uppercase tracking-wider mb-4 border border-tis-teal/20">
              <Trophy className="w-3.5 h-3.5" />
              16+ Olympic & Field Disciplines
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 dark:text-white leading-tight">
              Sports? <span className="font-serif italic font-normal text-tis-crimson dark:text-red-400">It's not just a facility.</span>
            </h2>

            <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-zinc-800 dark:text-zinc-200 font-display">
              At Tula's, it's the{' '}
              <span className="text-tis-teal dark:text-tis-teal-light underline decoration-tis-gold decoration-4 underline-offset-8">
                Foundation!
              </span>
            </p>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
              From our equestrian polo arenas and 10m electronic rifle ranges to FIFA-standard football greens, every child trains daily under national certified NIS coaches.
            </p>
          </div>
        </AnimatedReveal>

        {/* Interactive Sport Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sports Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sportsList.map((sport, index) => {
              const isSelected = selectedSport.id === sport.id;
              return (
                <AnimatedReveal key={sport.id} delay={index * 0.05} direction="up">
                  <button
                    onClick={() => setSelectedSport(sport)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? 'bg-tis-crimson text-white border-tis-crimson shadow-glow-crimson scale-[1.02]'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 hover:border-tis-teal/50 text-zinc-800 dark:text-zinc-200 hover:shadow-md'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
                      <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                        {sport.category}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm font-display tracking-tight leading-snug">
                      {sport.title}
                    </h4>
                  </button>
                </AnimatedReveal>
              );
            })}
          </div>

          {/* Right Column: Active Spotlight Card */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              key={selectedSport.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-xl overflow-hidden relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-md">
                <img
                  src={selectedSport.image}
                  alt={selectedSport.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-tis-gold text-zinc-950 text-xs font-black uppercase tracking-wider">
                    {selectedSport.category}
                  </span>
                  <h3 className="text-2xl font-black text-white font-display mt-2">
                    {selectedSport.title}
                  </h3>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                {selectedSport.description}
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Award className="w-4 h-4 text-tis-crimson shrink-0" />
                  <span>Certified National/International NIS Coaches</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Zap className="w-4 h-4 text-tis-teal shrink-0" />
                  <span>Compulsory 2+ Daily Hours of Active Physical Conditioning</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  <Compass className="w-4 h-4 text-tis-gold shrink-0" />
                  <span>State & National Level Tournament Representation</span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  onClick={onEnquireClick}
                  className="w-full justify-center"
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
