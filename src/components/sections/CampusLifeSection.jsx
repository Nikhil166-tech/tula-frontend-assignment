import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Utensils, HeartPulse, Music, Mountain, ShieldCheck, Clock, Sun } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import { dailyRoutine } from '../../data/tisData';

export default function CampusLifeSection() {
  const [activeView, setActiveView] = useState('facilities'); // 'facilities' or 'routine'

  const facilities = [
    {
      icon: Home,
      title: "Co-Ed Boarding Houses",
      desc: "Separate, secure residential wings for boys and girls with climate-controlled suites, study lounges, and resident house masters.",
      tag: "Safe & Cozy",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Utensils,
      title: "Nutritious Multi-Cuisine Dining",
      desc: "Wholesome 5-course daily meals formulated by clinical nutritionists to fuel growing athletic bodies and sharp minds.",
      tag: "Pure & Organic",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: HeartPulse,
      title: "24/7 Medical Infirmary",
      desc: "Fully equipped in-house healthcare center with qualified resident nurses, doctor on-campus, and emergency hospital tie-ups.",
      tag: "Round-the-Clock",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Music,
      title: "Performing Arts & Drama",
      desc: "Soundproof music studios, classical Indian instrument chambers, contemporary dance halls, and outdoor amphitheatre.",
      tag: "Creative Expression",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Mountain,
      title: "Himalayan Outdoor Excursions",
      desc: "Weekend trekking, nature conservation drives, camping, and white-water rafting under certified outdoor survival instructors.",
      tag: "Adventure & Grit",
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: ShieldCheck,
      title: "Multi-Tier Campus Security",
      desc: "350+ AI-enabled CCTV cameras, biometric security access, perimeter patrols, and zero-compromise child safeguarding protocols.",
      tag: "360° Safety",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="boarding-life" className="py-20 sm:py-32 bg-stone-100/60 dark:bg-[#0A0D12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="Boarding & Pastoral Care"
            badgeVariant="teal"
            title="A Nurturing Himalayan"
            highlight="Home Away From Home"
            subtitle="Life at Tula's International School is designed to foster camaraderie, independence, and emotional well-being across our 22-acre sanctuary."
          />
        </AnimatedReveal>

        {/* View Mode Switcher: Facilities vs Day in the Life */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-sm gap-1">
            <button
              onClick={() => setActiveView('facilities')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'facilities'
                  ? 'bg-tis-teal text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Residential Pillars</span>
            </button>

            <button
              onClick={() => setActiveView('routine')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'routine'
                  ? 'bg-tis-crimson text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>A Day in the Life (Daily Routine)</span>
            </button>
          </div>
        </div>

        {/* Content View 1: Residential Facilities Grid */}
        <AnimatePresence mode="wait">
          {activeView === 'facilities' ? (
            <motion.div
              key="facilities"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <AnimatedReveal key={fac.title} delay={idx * 0.06} direction="up" className="h-full">
                    <div className="h-full rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={fac.image}
                          alt={fac.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                          {fac.tag}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="w-9 h-9 rounded-xl bg-tis-teal/10 dark:bg-tis-teal/20 flex items-center justify-center text-tis-teal dark:text-tis-teal-light shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-black font-display text-zinc-900 dark:text-white leading-tight">
                            {fac.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mt-2">
                          {fac.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </motion.div>
          ) : (
            /* Content View 2: A Day in the Life Timeline */
            <motion.div
              key="routine"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-950 dark:text-white">
                      The Boarder's Daily Rhythm
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Cultivating self-discipline, joy, and physical vitality through structured Gurukul living.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-tis-gold/15 text-tis-gold-dark dark:text-tis-gold-light text-xs font-bold">
                    <Sun className="w-4 h-4" />
                    <span>Holistic Schedule</span>
                  </div>
                </div>

                <div className="relative border-l-2 border-tis-teal/30 dark:border-tis-teal/20 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                  {dailyRoutine.map((item) => (
                    <div key={item.time} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-tis-teal border-4 border-white dark:border-zinc-900 shadow-sm group-hover:scale-125 transition-transform" />

                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                        <span className="text-xs font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 font-display">
                          {item.time}
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 w-fit">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
