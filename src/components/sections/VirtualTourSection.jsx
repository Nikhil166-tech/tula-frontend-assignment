import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle2 } from 'lucide-react';
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
      desc: "Smart digital classrooms, high-end robotics & IoT workshops, astronomy observatory, and digital research libraries overlooking lush greenery.",
      features: ["Acoustically treated smart classrooms", "Apple Mac graphic design labs", "Fully equipped physics, chemistry & bio labs"],
      hotspots: [
        { label: "AI & Robotics Lab", x: "30%", y: "45%" },
        { label: "Central Library", x: "65%", y: "38%" },
        { label: "Smart Classrooms", x: "48%", y: "60%" }
      ]
    },
    {
      id: "sports-complex",
      title: "Olympic Sports & Aquatics Arena",
      badge: "Athletic Foundation",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1000&auto=format&fit=crop",
      desc: "Heated semi-Olympic swimming pool, indoor 10m shooting range, squash courts, and synthetic tennis grounds.",
      features: ["FINA-standard all-weather indoor pool", "Electronic Swiss shooting targets", "Synthetic floodlit basketball & tennis courts"],
      hotspots: [
        { label: "Heated 25m Pool", x: "42%", y: "50%" },
        { label: "10m Shooting Arena", x: "70%", y: "35%" },
        { label: "ITF Tennis Courts", x: "25%", y: "65%" }
      ]
    },
    {
      id: "equestrian",
      title: "Equestrian Center & Stables",
      badge: "Polo & Riding",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop",
      desc: "Thoroughbred horses, dedicated show-jumping courses, and experienced polo trainers teaching horsemanship.",
      features: ["Dedicated dressage and show-jumping rings", "On-campus veterinarian supervision", "Certified equestrian instructors"],
      hotspots: [
        { label: "Dressage Ring", x: "50%", y: "55%" },
        { label: "Stable Blocks", x: "25%", y: "40%" },
        { label: "Polo Practice Turf", x: "75%", y: "60%" }
      ]
    },
    {
      id: "gurukul",
      title: "Gurukul Amphitheatre & Greens",
      badge: "Cultural Heartland",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      desc: "Open-air marble amphitheatre framed by the majestic Himalayas for morning assemblies, debates, and musical soirées.",
      features: ["1000+ seater open-air amphitheatre", "Lush botanical gardens & meditation groves", "Vedic chant and yoga sanctuary"],
      hotspots: [
        { label: "Open Amphitheatre", x: "52%", y: "48%" },
        { label: "Meditation Pavilion", x: "28%", y: "35%" },
        { label: "Botanical Nursery", x: "78%", y: "65%" }
      ]
    }
  ];

  const [activeZone, setActiveZone] = useState(zones[0]);
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section id="campus" className="py-20 sm:py-32 bg-white dark:bg-[#080A0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="22-Acre Valley Sanctuary"
            badgeVariant="gold"
            title="Explore the TIS"
            highlight="Campus Experience"
            subtitle="Take an interactive virtual walkthrough of our 22-acre campus set against the picturesque backdrop of the Shivalik hills in Dehradun."
          />
        </AnimatedReveal>

        {/* Zone Selector Pills */}
        <div className="mt-10 sm:mt-12 flex justify-center overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 gap-1.5">
            {zones.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => {
                    setActiveZone(zone);
                    setActiveHotspot(null);
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-tis-crimson text-white shadow-glow-crimson'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {zone.title.split('&')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Zone Showcase */}
        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50/80 dark:bg-zinc-900/60 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-zinc-800 shadow-xl overflow-hidden"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 bg-tis-crimson/10 dark:bg-tis-crimson/25 px-3 py-1 rounded-full">
                    {activeZone.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-zinc-950 dark:text-white mt-3 leading-tight">
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

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    onClick={onEnquireClick}
                    className="shadow-glow-crimson"
                  >
                    Schedule Campus Visit
                  </Button>

                  <a
                    href="https://goo.gl/maps/dehradun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-tis-crimson" />
                    <span>View on Google Earth</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Image with Interactive Hotspots */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-zinc-200 dark:border-zinc-700 group">
                  <img
                    src={activeZone.image}
                    alt={activeZone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Interactive Hotspot pins */}
                  {activeZone.hotspots.map((h) => (
                    <div
                      key={h.label}
                      style={{ left: h.x, top: h.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin"
                    >
                      <button
                        onClick={() => setActiveHotspot(activeHotspot === h.label ? null : h.label)}
                        className="relative flex items-center justify-center w-7 h-7 rounded-full bg-tis-crimson text-white shadow-glow-crimson hover:scale-125 transition-transform"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-white relative z-10" />
                      </button>

                      {/* Tooltip */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-lg pointer-events-none transition-opacity duration-200 opacity-90 sm:opacity-0 group-hover/pin:opacity-100">
                        {h.label}
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-tis-gold" />
                      Dhoolkot, Dehradun Foothills
                    </span>
                    <span className="bg-tis-teal/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold">
                      Click pins to explore
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
