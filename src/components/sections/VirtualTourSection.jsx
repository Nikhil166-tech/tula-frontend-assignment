import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Eye, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function VirtualTourSection({ onEnquireClick }) {
  const zones = [
    {
      id: "academic",
      title: "Academic Complex & STEAM Labs",
      badge: "Intellectual Hub",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      desc: "Smart digital classrooms, high-end robotics & IoT workshops, astronomy observatory, and digital research libraries.",
      features: ["Acoustically treated smart classrooms", "Apple Mac graphic design labs", "Fully equipped physics, chemistry & bio labs"]
    },
    {
      id: "sports-complex",
      title: "Olympic Sports & Aquatics Arena",
      badge: "Athletic Foundation",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1000&auto=format&fit=crop",
      desc: "Heated semi-Olympic swimming pool, indoor 10m shooting range, squash courts, and synthetic tennis grounds.",
      features: ["FINA-standard all-weather indoor pool", "Electronic Swiss shooting targets", "Synthetic floodlit basketball & tennis courts"]
    },
    {
      id: "equestrian",
      title: "Equestrian Center & Stables",
      badge: "Polo & Riding",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop",
      desc: "Thoroughbred horses, dedicated show-jumping courses, and experienced polo trainers teaching horsemanship.",
      features: ["Dedicated dressage and show-jumping rings", "On-campus veterinarian supervision", "Certified equestrian instructors"]
    },
    {
      id: "gurukul",
      title: "Gurukul Amphitheatre & Greens",
      badge: "Cultural Heartland",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      desc: "Open-air marble amphitheatre framed by the majestic Himalayas for morning assemblies, debates, and musical soirées.",
      features: ["1000+ seater open-air amphitheatre", "Lush botanical gardens & meditation groves", "Vedic chant and yoga sanctuary"]
    }
  ];

  const [activeZone, setActiveZone] = useState(zones[0]);

  return (
    <section id="campus" className="py-24 sm:py-32 bg-white dark:bg-[#0B0D11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="22-Acre Valley Sanctuary"
            badgeVariant="gold"
            title="Explore the TIS"
            highlight="Campus Experience"
            subtitle="Take an interactive tour of our 22-acre campus set against the picturesque backdrop of the Shivalik hills in Dehradun."
          />
        </AnimatedReveal>

        {/* Zone Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {zones.map((zone) => {
            const isSelected = activeZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-tis-crimson text-white shadow-glow-crimson scale-105'
                    : 'bg-stone-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700'
                }`}
              >
                {zone.title.split('&')[0]}
              </button>
            );
          })}
        </div>

        {/* Interactive Spotlight Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50 dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-zinc-800 shadow-xl overflow-hidden"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 bg-tis-crimson/10 dark:bg-tis-crimson/20 px-3 py-1 rounded-full">
                    {activeZone.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 dark:text-white mt-3">
                    {activeZone.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  {activeZone.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {activeZone.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-tis-teal shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    onClick={onEnquireClick}
                  >
                    Schedule Physical Campus Visit
                  </Button>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] border border-zinc-200 dark:border-zinc-700 group">
                  <img
                    src={activeZone.image}
                    alt={activeZone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-tis-gold" />
                      Dhoolkot, Dehradun Campus
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px]">
                      22-Acre Green Foothills
                    </span>
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
