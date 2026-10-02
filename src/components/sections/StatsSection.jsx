import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { stats } from '../../data/tisData';
import AnimatedReveal from '../animation/AnimatedReveal';
import { TrendingUp } from 'lucide-react';

function CounterItem({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if stat.value is a numeric string (e.g., "22+", "16+", "12+", "98.4%", "100%", "1:8")
    const rawVal = stat.value;
    if (rawVal.includes(":")) {
      setDisplayValue(rawVal);
      return;
    }

    const num = parseFloat(rawVal.replace(/[^0-9.]/g, ''));
    const suffix = rawVal.replace(/[0-9.]/g, '');
    let start = 0;
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    const increment = num / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplayValue(num % 1 === 0 ? `${num}${suffix}` : `${num.toFixed(1)}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(num % 1 === 0 ? `${Math.floor(start)}${suffix}` : `${start.toFixed(1)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div
      ref={ref}
      className="relative h-full p-5 sm:p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Background hover subtle glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-tis-crimson/5 dark:bg-tis-crimson/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-tis-gold-dark dark:text-tis-gold bg-tis-gold/10 dark:bg-tis-gold/20 px-2 py-0.5 rounded-full">
            Benchmark
          </span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-500 opacity-80 group-hover:scale-110 transition-transform" />
        </div>

        <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-zinc-950 dark:text-white group-hover:text-tis-crimson dark:group-hover:text-red-400 transition-colors">
          {displayValue}
        </div>

        <h4 className="mt-2.5 text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 leading-snug">
          {stat.label}
        </h4>
      </div>

      <p className="mt-3 text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
        {stat.detail}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-100/70 dark:bg-[#0A0D12] border-y border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {stats.map((stat, index) => (
            <AnimatedReveal
              key={stat.label}
              delay={index * 0.07}
              direction="up"
              className="h-full"
            >
              <CounterItem stat={stat} index={index} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
