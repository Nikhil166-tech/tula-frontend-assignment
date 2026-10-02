import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Phone } from 'lucide-react';
import { faqs, schoolInfo } from '../../data/tisData';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const filteredFaqs = faqs.filter(f =>
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-[#080A0F] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeVariant="crimson"
            title="Everything You Need to Know About"
            highlight="Admissions & Life at TIS"
            subtitle="Clear answers to common questions asked by prospective parents and boarding guardians."
          />
        </AnimatedReveal>

        {/* Instant Search Bar */}
        <div className="mt-10 sm:mt-12 max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Gurukul, CBSE, safety, fees, sports)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-stone-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-tis-crimson/50 transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-8 space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <AnimatedReveal key={faq.question} delay={idx * 0.05} direction="up">
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-tis-crimson/40 bg-stone-50/90 dark:bg-zinc-900 shadow-md ring-1 ring-tis-crimson/20'
                      : 'border-zinc-200/80 dark:border-zinc-800 bg-stone-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}>
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white font-display">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-xs shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-tis-crimson dark:text-red-400" />
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
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans border-t border-zinc-200/50 dark:border-zinc-800/80">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedReveal>
              );
            })
          ) : (
            <div className="text-center py-8 text-sm text-zinc-500">
              No matching questions found. Feel free to contact our admissions helpline directly.
            </div>
          )}
        </div>

        {/* Quick Contact Box for Unanswered Questions */}
        <div className="mt-12 p-6 rounded-3xl bg-stone-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
              Have specific questions about admissions?
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Our academic counselors are available 9:00 AM – 6:00 PM IST.
            </p>
          </div>

          <a
            href={`tel:${schoolInfo.admissionsHelpline}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tis-teal text-white text-xs font-bold shadow-sm hover:bg-tis-teal-dark transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {schoolInfo.admissionsHelpline}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
