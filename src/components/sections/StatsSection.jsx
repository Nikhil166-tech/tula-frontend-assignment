import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/tisData';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50/80 dark:bg-[#0E1015] border-y border-zinc-200/80 dark:border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <AnimatedReveal
              key={stat.label}
              delay={index * 0.08}
              direction="up"
              className="h-full"
            >
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-tis-crimson dark:text-red-400 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <h4 className="mt-2 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                    {stat.label}
                  </h4>
                </div>
                <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                  {stat.detail}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
