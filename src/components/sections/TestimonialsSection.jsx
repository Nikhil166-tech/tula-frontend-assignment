import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';
import { testimonials } from '../../data/tisData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-stone-50/70 dark:bg-[#0E1015] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="Voices of Our Community"
            badgeVariant="gold"
            title="Trusted by Discerning Parents &"
            highlight="Thriving Alumni"
            subtitle="Discover what parents, boarders, and graduates share about their transformative journey at Tula's International School."
          />
        </AnimatedReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <AnimatedReveal key={item.author} delay={idx * 0.12} direction="up" className="h-full">
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
                <Quote className="w-10 h-10 text-tis-gold/20 dark:text-tis-gold/10 absolute top-6 right-6" />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white font-display">
                      {item.author}
                    </h4>
                    <p className="text-xs font-semibold text-tis-crimson dark:text-red-400 mt-0.5">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {item.location}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
