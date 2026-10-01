import React from 'react';
import { BookOpen, GraduationCap, Laptop, Microscope, Globe2, Award, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function AcademicsSection({ onEnquireClick }) {
  const wings = [
    {
      wing: "Primary Wing",
      grades: "Classes IV – V",
      focus: "Foundational Curiosity & Holistic Literacy",
      desc: "Activity-based experiential pedagogy stimulating imagination, linguistic proficiency, and joyful mathematical reasoning in a gentle Gurukul atmosphere.",
      subjects: ["English & Hindi Literature", "Foundation Mathematics", "Environmental Sciences", "Performing Arts & Yoga"]
    },
    {
      wing: "Middle Wing",
      grades: "Classes VI – VIII",
      focus: "Critical Inquiry & Hands-On Science",
      desc: "Transitioning to conceptual mastery. Students engage in design thinking, coding, French/German/Sanskrit language choices, and introductory laboratory investigations.",
      subjects: ["STEAM & Coding Fundamentals", "Integrated Sciences", "Social Studies & Civics", "Foreign Language Electives"]
    },
    {
      wing: "Secondary Wing",
      grades: "Classes IX – X",
      focus: "CBSE Board Rigour & Leadership",
      desc: "Structured academic preparation for CBSE All India Secondary School Examinations alongside career profiling and state-level science exhibitions.",
      subjects: ["Physics, Chemistry & Biology", "Standard & Basic Mathematics", "Information Technology", "Social Sciences & Ethics"]
    },
    {
      wing: "Senior Secondary",
      grades: "Classes XI – XII",
      focus: "University Gateways & Pre-College Mastery",
      desc: "Tailored streams in Science (PCM/PCB), Commerce, and Humanities with integrated coaching for JEE, NEET, CUET, SAT, and foreign university portfolios.",
      subjects: ["Science: PCM / PCB with Biotech/AI", "Commerce: Accounts, Business, Economics", "Humanities: Pol Science, Psychology, History", "SAT / IELTS / CUET Prep Cells"]
    }
  ];

  return (
    <section id="academics" className="py-24 sm:py-32 bg-white dark:bg-[#0B0D11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <SectionHeading
            badge="Academic Architecture"
            badgeVariant="crimson"
            title="Rigorous CBSE Excellence with"
            highlight="Global Outlook"
            subtitle="Accredited by the Central Board of Secondary Education, New Delhi. Delivering 100% first-division results and admissions to elite universities globally."
          />
        </AnimatedReveal>

        {/* 4 Wings Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wings.map((wing, idx) => (
            <AnimatedReveal key={wing.wing} delay={idx * 0.1} direction="up" className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-stone-50/80 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between hover:shadow-card-elevated dark:hover:shadow-card-dark transition-all duration-300 group hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 bg-tis-crimson/10 dark:bg-tis-crimson/20 px-3 py-1 rounded-full">
                      {wing.grades}
                    </span>
                    <GraduationCap className="w-5 h-5 text-tis-gold" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white">
                    {wing.wing}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-tis-teal dark:text-tis-teal-light">
                    {wing.focus}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {wing.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                    Core Curriculum:
                  </span>
                  <ul className="space-y-1">
                    {wing.subjects.map((sub) => (
                      <li key={sub} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 font-medium">
                        <span className="w-1 h-1 rounded-full bg-tis-gold" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Global University Placements Banner */}
        <AnimatedReveal delay={0.2} className="mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-tis-crimson-deep p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-tis-gold text-xs font-bold uppercase tracking-wider mb-4">
                <Globe2 className="w-4 h-4" />
                Global University Placements & Career Counseling
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
                From Dehradun Valley to Top Universities Worldwide
              </h3>
              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                Our in-house Career Guidance Cell partners with international admission directors. TIS graduates are currently studying across prestigious institutions including Imperial College London, Stanford University, University of Toronto, IITs, NLU, and AIIMS.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  variant="gold"
                  onClick={onEnquireClick}
                >
                  Download Academic Prospectus
                </Button>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
