import React from 'react';
import { Home, Utensils, HeartPulse, Music, Mountain, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function CampusLifeSection() {
  const facilities = [
    {
      icon: Home,
      title: "Co-Ed Boarding Houses",
      desc: "Separate, secure residential wings for boys and girls with climate-controlled suites, study lounges, and resident house masters.",
      tag: "Safe & Cozy"
    },
    {
      icon: Utensils,
      title: "Nutritious Multi-Cuisine Dining",
      desc: "Wholesome 5-course daily meals formulated by clinical nutritionists to fuel growing athletic bodies and sharp minds.",
      tag: "Pure & Organic"
    },
    {
      icon: HeartPulse,
      title: "24/7 Medical Infirmary",
      desc: "Fully equipped in-house healthcare center with qualified resident nurses, doctor on-campus, and emergency hospital tie-ups.",
      tag: "Round-the-Clock"
    },
    {
      icon: Music,
      title: "Performing Arts & Drama",
      desc: "Soundproof music studios, classical Indian instrument chambers, contemporary dance halls, and outdoor amphitheatre.",
      tag: "Creative Expression"
    },
    {
      icon: Mountain,
      title: "Himalayan Outdoor Excursions",
      desc: "Weekend trekking, nature conservation drives, camping, and white-water rafting under certified outdoor survival instructors.",
      tag: "Adventure & Grit"
    },
    {
      icon: ShieldCheck,
      title: "Multi-Tier Campus Security",
      desc: "350+ AI-enabled CCTV cameras, biometric security access, perimeter patrols, and zero-compromise child safeguarding protocols.",
      tag: "360° Safety"
    }
  ];

  return (
    <section id="boarding-life" className="py-24 sm:py-32 bg-stone-50/60 dark:bg-[#0E1015] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="Boarding & Pastoral Care"
            badgeVariant="teal"
            title="A Nurturing Himalayan"
            highlight="Home Away From Home"
            subtitle="Life at Tula's International School is designed to foster camaraderie, independence, and emotional well-being across our 22-acre sanctuary."
          />
        </AnimatedReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <AnimatedReveal key={fac.title} delay={idx * 0.08} direction="up" className="h-full">
                <div className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-tis-teal/10 dark:bg-tis-teal/20 flex items-center justify-center text-tis-teal dark:text-tis-teal-light group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 bg-tis-crimson/10 dark:bg-tis-crimson/20 px-2.5 py-1 rounded-full">
                        {fac.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white mb-2">
                      {fac.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
