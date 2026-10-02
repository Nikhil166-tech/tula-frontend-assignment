import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Compass, Sun } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "gurukul",
      tabLabel: "Modern Gurukul Ethos",
      title: "The Modern Gurukul Ethos",
      subtitle: "Character • Self-Reliance • Timeless Values",
      desc: "Inspired by the sacred Guru-Shishya tradition of ancient India, TIS provides an inspiring sanctuary where mentors walk alongside students. It is an education that sharpens intellectual acuity while instilling humility, integrity, and deep reverence for nature.",
      icon: Compass,
      points: [
        "Daily morning mindfulness, yogic practices & Sanskrit shlokas amidst Shivalik hills",
        "Harmonious living with peers from 20+ Indian states and overseas cultures",
        "Community service, organic farming & ecological stewardship programs"
      ],
      stats: [
        { label: "Daily Mindfulness", value: "30 Mins" },
        { label: "Value System", value: "Guru-Shishya" },
        { label: "Campus Diversity", value: "20+ States" }
      ],
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "pastoral",
      tabLabel: "Pastoral & Residential Care",
      title: "Warm Pastoral & Residential Care",
      subtitle: "A Loving Home Away From Home",
      desc: "Boarding at TIS is not mere accommodation; it is an extended family. Live-in house masters, resident academic tutors, and compassionate wardens provide round-the-clock emotional safety and physical nurturing.",
      icon: HeartHandshake,
      points: [
        "Unmatched 1:8 mentor-to-student pastoral attention ratio",
        "Wholesome multi-cuisine dining curated by clinical dieticians & organic kitchens",
        "Round-the-clock medical infirmary with resident nurses and emergency tie-ups"
      ],
      stats: [
        { label: "Pastoral Ratio", value: "1:8" },
        { label: "Medical Support", value: "24/7 In-House" },
        { label: "Nutritious Meals", value: "5 Daily" }
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop"
    },
    {
      id: "innovation",
      tabLabel: "21st-Century Innovation Labs",
      title: "21st-Century Innovation & STEAM",
      subtitle: "Robotics • AI • Design Thinking",
      desc: "Rooted in timeless culture, TIS students actively engineer tomorrow. State-of-the-art AI incubators, 3D printing suites, digital research media hubs, and astronomy clubs nurture visionary creators and scientists.",
      icon: ShieldCheck,
      points: [
        "Integrated CBSE curriculum enriched with hands-on STEAM problem solving",
        "State and national robotics championship accolades & patent mentorship",
        "Dedicated innovation makerspace with drone tech and IoT prototyping kits"
      ],
      stats: [
        { label: "STEAM Labs", value: "High-Tech" },
        { label: "Robotics Ranks", value: "State Tops" },
        { label: "Coding Program", value: "Classes IV–XII" }
      ],
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=900&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-[#080A0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="About Tula's International School"
            badgeVariant="gold"
            title="The Confluence of Tradition &"
            highlight="Modern Excellence"
            subtitle="Under the visionary leadership of Rishabh Educational Trust since 2012, TIS has pioneered a transformative boarding school model nestled in the serene foothills of Dehradun."
          />
        </AnimatedReveal>

        {/* Tab Navigation with Full Labels and Icons */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-full overflow-x-auto no-scrollbar gap-1">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 relative whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillarTab"
                      className="absolute inset-0 bg-tis-crimson rounded-xl -z-0"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10 shrink-0" />
                  <span className="relative z-10">{pillar.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-stone-50/80 dark:bg-zinc-900/60 p-6 sm:p-10 lg:p-12 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-xl"
            >
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tis-gold/15 dark:bg-tis-gold/25 text-tis-gold-dark dark:text-tis-gold-light text-xs font-bold uppercase tracking-wider mb-3">
                    <Sun className="w-3.5 h-3.5" />
                    {pillars[activeTab].subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black font-display text-zinc-950 dark:text-white leading-tight">
                    {pillars[activeTab].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {pillars[activeTab].desc}
                </p>

                {/* Key Points */}
                <div className="space-y-3 pt-2">
                  {pillars[activeTab].points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-tis-teal shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Stat Badges */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {pillars[activeTab].stats.map((st, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                      <p className="text-sm sm:text-base font-black text-tis-crimson dark:text-red-400 font-display">
                        {st.value}
                      </p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tight mt-0.5">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-zinc-200 dark:border-zinc-700 shadow-2xl group">
                  <img
                    src={pillars[activeTab].image}
                    alt={pillars[activeTab].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-zinc-900 dark:text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-tis-gold" />
                      Dehradun Campus Environment
                    </span>
                    <span className="text-[11px] text-tis-crimson dark:text-red-400 font-bold">Class IV – XII</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
