import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/tisData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#0B0D11] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeVariant="crimson"
            title="Everything You Need to Know About"
            highlight="Admissions & Life at TIS"
            subtitle="Clear answers to common questions asked by prospective parents and boarding guardians."
          />
        </AnimatedReveal>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <AnimatedReveal key={faq.question} delay={idx * 0.08} direction="up">
                <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-stone-50/70 dark:bg-zinc-900/60 overflow-hidden transition-colors">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white font-display">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-1 rounded-full bg-white dark:bg-zinc-800 shadow-xs shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-tis-crimson dark:text-red-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans border-t border-zinc-200/40 dark:border-zinc-800/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
