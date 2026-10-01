import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote, CheckCircle, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: "The Modern Gurukul Ethos",
      subtitle: "Character • Self-Reliance • Timeless Values",
      desc: "Inspired by the sacred Guru-Shishya tradition of ancient India, TIS provides an atmosphere where mentors walk alongside students. It is an education that sharpens intellect while cultivating humility, integrity, and reverence for nature.",
      icon: Compass,
      points: [
        "Daily morning mindfulness, yogic practices & Sanskrit shlokas",
        "Living in harmony with peers from across 20+ Indian states and abroad",
        "Community service, environmental stewardship & animal welfare"
      ],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop"
    },
    {
      title: "Warm Pastoral & Residential Care",
      subtitle: "A Loving Home Away From Home",
      desc: "Boarding at TIS is not mere accommodation; it is an extended family. Live-in house masters, resident tutors, and compassionate wardens provide 24/7 emotional and physical nurturing.",
      icon: HeartHandshake,
      points: [
        "1:8 mentor-to-student pastoral attention ratio",
        "Nutritious, hygienic multi-cuisine dining curated by clinical dieticians",
        "Dedicated round-the-clock medical infirmary with visiting paediatricians"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop"
    },
    {
      title: "21st-Century Innovation Labs",
      subtitle: "Robotics • STEAM • Design Thinking",
      desc: "While rooted in cultural roots, TIS students build the future. High-tech AI labs, 3D printing suites, and astronomy observatories nurture visionary inventors and creators.",
      icon: ShieldCheck,
      points: [
        "Integrated CBSE curriculum enriched with experiential STEAM problem solving",
        "State and national robotics championship accolades",
        "Dedicated innovation makerspace with drone tech and IoT kits"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-[#0B0D11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="About Tula's International School"
            badgeVariant="gold"
            title="The Confluence of Tradition &"
            highlight="Modern Excellence"
            subtitle="Under the visionary leadership of Rishabh Educational Trust since 2012, TIS has pioneered a transformative boarding school model nestled in the serene foothills of Dehradun."
          />
        </AnimatedReveal>

        {/* Tab Navigation (Scrollable & Responsive on mobile) */}
        <div className="mt-10 sm:mt-12 flex justify-center overflow-x-auto no-scrollbar px-1">
          <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-stone-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 max-w-full">
            {pillars.map((pillar, idx) => (
              <button
                key={pillar.title}
                onClick={() => setActiveTab(idx)}
                className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 relative whitespace-nowrap shrink-0 ${
                  activeTab === idx
                    ? 'text-white shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activePillarTab"
                    className="absolute inset-0 bg-tis-crimson rounded-xl -z-0"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}</span>
              </button>
            ))}
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
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-stone-50 dark:bg-zinc-900/60 p-5 sm:p-10 rounded-3xl border border-zinc-200/80 dark:border-zinc-800"
            >
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-tis-crimson dark:text-red-400">
                    {pillars[activeTab].subtitle}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold font-display text-zinc-900 dark:text-white mt-1">
                    {pillars[activeTab].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {pillars[activeTab].desc}
                </p>

                <div className="space-y-2.5 pt-1 sm:pt-2">
                  {pillars[activeTab].points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-tis-teal shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[4/3] border-2 border-white dark:border-zinc-700">
                  <img
                    src={pillars[activeTab].image}
                    alt={pillars[activeTab].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] sm:text-xs font-semibold">
                    Tula's International School Campus • Dehradun Foothills
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Authentic Student & Mentor Quotes from TIS */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatedReveal delay={0.1}>
            <div className="p-6 sm:p-8 rounded-3xl bg-tis-crimson text-white relative overflow-hidden shadow-xl">
              <Quote className="w-10 h-10 text-white/20 absolute top-5 right-5" />
              <p className="text-lg sm:text-xl font-bold font-serif italic leading-relaxed pr-6">
                “We feel supported in what we do and nudged further to do more.”
              </p>
              <div className="mt-5 pt-4 border-t border-white/20">
                <p className="font-display font-extrabold text-xs sm:text-sm text-tis-gold">
                  Holistic Development Ethos
                </p>
                <p className="text-[11px] sm:text-xs text-red-100">
                  Music, Art, Sports, & Experiential Academics at TIS
                </p>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className="p-6 sm:p-8 rounded-3xl bg-tis-teal text-white relative overflow-hidden shadow-xl">
              <Quote className="w-10 h-10 text-white/20 absolute top-5 right-5" />
              <p className="text-lg sm:text-xl font-bold font-serif italic leading-relaxed pr-6">
                “Tula's helped me thrive and become the best version of myself.”
              </p>
              <div className="mt-5 pt-4 border-t border-white/20">
                <p className="font-display font-extrabold text-xs sm:text-sm text-tis-gold">
                  Pastoral Empowerment
                </p>
                <p className="text-[11px] sm:text-xs text-teal-100">
                  Confidence, Empathy & Moral Clarity forged in the Himalayas
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
