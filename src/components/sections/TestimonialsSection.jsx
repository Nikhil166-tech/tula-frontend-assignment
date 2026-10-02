import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';

export default function TestimonialsSection() {
  const [filter, setFilter] = useState('all');

  const testimonialsList = [
    {
      type: 'parents',
      quote: "Sending our son Kabir to Tula's was the best decision of our lives. The transformation from an introverted boy to a confident house captain and state-level archer was breathtaking. The Gurukul values are evident in every conversation.",
      author: "Dr. Rajesh & Sunita Oberoi",
      role: "Parents of Kabir (Class XI)",
      location: "New Delhi",
      avatar: "RO",
      tag: "Parent Perspective"
    },
    {
      type: 'parents',
      quote: "The warmth of pastoral care at TIS is incomparable. The house parents don't just supervise; they nurture like family. My daughter never felt homesick for a single day, and the equestrian program gave her remarkable poise.",
      author: "Ananya Singhal",
      role: "Parent of Rhea (Class VIII)",
      location: "Mumbai",
      avatar: "AS",
      tag: "Parent Perspective"
    },
    {
      type: 'alumni',
      quote: "TIS gave me an unshakeable moral compass and the confidence to question, build, and lead. Today at Imperial College London, I rely constantly on the self-discipline and problem-solving mindset I forged on Dehradun's fields.",
      author: "Arjun Verma",
      role: "Alumnus (Batch 2022) | Imperial College London",
      location: "United Kingdom",
      avatar: "AV",
      tag: "Global Alumni"
    },
    {
      type: 'students',
      quote: "Waking up to the morning Shivalik mist, doing pranayama, and spending two hours daily at the rifle shooting range gave me focus I never knew I possessed. My mentors here believe in me more than I did myself.",
      author: "Devansh Mehra",
      role: "Head Boy (Class XII - PCM)",
      location: "Chandigarh",
      avatar: "DM",
      tag: "Current Boarder"
    },
    {
      type: 'alumni',
      quote: "From mentoring in the high-tech AI lab to representing Uttarakhand in national debates, Tula's gave me a complete launchpad. I secured direct admission to Stanford with a full merit fellowship.",
      author: "Pooja Hegde",
      role: "Alumna (Batch 2023) | Stanford University",
      location: "California, USA",
      avatar: "PH",
      tag: "Global Alumni"
    },
    {
      type: 'parents',
      quote: "The transparency and communication from the Head of School and resident mentors are exceptional. The balanced diet, sports, and stellar CBSE prep have brought out my son's true potential.",
      author: "Col. Vikramjeet Randhawa",
      role: "Parent of Samar (Class IX)",
      location: "Dehradun",
      avatar: "VR",
      tag: "Parent Perspective"
    }
  ];

  const filteredItems = filter === 'all'
    ? testimonialsList
    : testimonialsList.filter(t => t.type === filter);

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-stone-100/60 dark:bg-[#0A0D12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="Voices of Our Community"
            badgeVariant="gold"
            title="Trusted by Discerning Parents &"
            highlight="Thriving Alumni"
            subtitle="Discover what parents, boarders, and graduates share about their transformative journey at Tula's International School."
          />
        </AnimatedReveal>

        {/* Filter Pills */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 shadow-sm gap-1">
            {[
              { id: 'all', label: 'All Testimonials' },
              { id: 'parents', label: 'Parents' },
              { id: 'students', label: 'Boarders' },
              { id: 'alumni', label: 'Global Alumni' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-tis-crimson text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.author}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                <Quote className="w-10 h-10 text-tis-gold/20 dark:text-tis-gold/10 absolute top-6 right-6" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider text-tis-teal dark:text-tis-teal-light bg-tis-teal/10 dark:bg-tis-teal/20 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tis-crimson to-tis-crimson-dark text-white font-black text-xs flex items-center justify-center shadow-xs">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="font-black text-xs sm:text-sm text-zinc-950 dark:text-white font-display">
                        {item.author}
                      </h4>
                      <p className="text-[11px] font-semibold text-tis-crimson dark:text-red-400">
                        {item.role}
                      </p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0" title="Verified Community Review">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
