import React, { useState } from 'react';
import { GraduationCap, Globe2, Building2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function AcademicsSection({ onEnquireClick }) {
  const [selectedWingIdx, setSelectedWingIdx] = useState(0);

  const wings = [
    {
      wing: "Primary Wing",
      grades: "Classes IV – V",
      focus: "Foundational Curiosity & Holistic Literacy",
      desc: "Activity-based experiential pedagogy stimulating imagination, linguistic proficiency, and joyful mathematical reasoning in a gentle, caring Gurukul atmosphere.",
      subjects: ["English & Hindi Literature", "Foundation Mathematics", "Environmental Sciences", "Performing Arts & Yoga", "Introductory ICT & Logic"],
      stats: { ratio: "1:8 Ratio", hours: "Experiential Projects", lead: "Mother-Teacher Concept" }
    },
    {
      wing: "Middle Wing",
      grades: "Classes VI – VIII",
      focus: "Critical Inquiry & Hands-On Science",
      desc: "Transitioning to conceptual mastery. Students engage in design thinking, AI coding, French/German/Sanskrit language choices, and introductory laboratory investigations.",
      subjects: ["STEAM & Coding Fundamentals", "Integrated Physics, Chem, Bio", "Social Sciences & Civics", "Foreign Language Electives", "Robotics & Innovation Lab"],
      stats: { ratio: "1:10 Ratio", hours: "Weekly STEAM Labs", lead: "Subject Specialists" }
    },
    {
      wing: "Secondary Wing",
      grades: "Classes IX – X",
      focus: "CBSE Board Rigour & Leadership",
      desc: "Structured academic preparation for CBSE All India Secondary School Examinations alongside career profiling, aptitude assessments, and state-level science exhibitions.",
      subjects: ["Physics, Chemistry & Biology", "Standard & Basic Mathematics", "Information Technology & AI", "Social Sciences & Ethics", "Remedial Doubt Clinics"],
      stats: { ratio: "100% 1st Div", hours: "Daily Prep Hour", lead: "Senior CBSE Mentors" }
    },
    {
      wing: "Senior Secondary",
      grades: "Classes XI – XII",
      focus: "University Gateways & Pre-College Mastery",
      desc: "Tailored streams in Science (PCM/PCB), Commerce, and Humanities with integrated coaching for JEE, NEET, CUET, SAT, and foreign university admissions portfolios.",
      subjects: ["Science: PCM / PCB with Biotech & AI", "Commerce: Accounts, Business, Economics", "Humanities: Pol Science, Psychology, History", "SAT / IELTS / CUET Prep Cells", "Ivy League Portfolio Curation"],
      stats: { ratio: "100% Admission", hours: "Entrance Coaching", lead: "Career Guidance Cell" }
    }
  ];

  const universities = [
    { name: "Imperial College London", rank: "Top 5 Global", country: "UK" },
    { name: "Stanford University", rank: "Ivy+ Tier", country: "USA" },
    { name: "University of Toronto", rank: "#1 in Canada", country: "Canada" },
    { name: "IIT Bombay & Delhi", rank: "Premier Engineering", country: "India" },
    { name: "AIIMS New Delhi", rank: "Top Medical", country: "India" },
    { name: "National University of Singapore", rank: "Top Asian Uni", country: "Singapore" }
  ];

  return (
    <section id="academics" className="py-20 sm:py-32 bg-white dark:bg-[#080A0F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-tis-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="Academic Architecture"
            badgeVariant="crimson"
            title="Rigorous CBSE Excellence with"
            highlight="Global Outlook"
            subtitle="Accredited by the Central Board of Secondary Education, New Delhi. Delivering 100% first-division results and admissions to elite universities worldwide."
          />
        </AnimatedReveal>

        {/* 4 Wings Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {wings.map((wing, idx) => {
            const isSelected = selectedWingIdx === idx;
            return (
              <AnimatedReveal key={wing.wing} delay={idx * 0.08} direction="up" className="h-full">
                <div
                  onClick={() => setSelectedWingIdx(idx)}
                  className={`cursor-pointer h-full p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between border relative group ${
                    isSelected
                      ? 'bg-stone-50 dark:bg-zinc-900 border-tis-crimson dark:border-tis-crimson shadow-card-elevated ring-1 ring-tis-crimson/30 -translate-y-1'
                      : 'bg-stone-50/70 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-black uppercase tracking-wider text-tis-crimson dark:text-red-400 bg-tis-crimson/10 dark:bg-tis-crimson/25 px-3 py-1 rounded-full">
                        {wing.grades}
                      </span>
                      <GraduationCap className={`w-5 h-5 transition-colors ${isSelected ? 'text-tis-crimson' : 'text-tis-gold'}`} />
                    </div>

                    <h3 className="text-xl font-black font-display text-zinc-950 dark:text-white">
                      {wing.wing}
                    </h3>

                    <p className="mt-1.5 text-xs font-bold text-tis-teal dark:text-tis-teal-light leading-snug">
                      {wing.focus}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {wing.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2.5">
                      Curriculum Modules:
                    </span>
                    <ul className="space-y-1.5">
                      {wing.subjects.slice(0, 3).map((sub) => (
                        <li key={sub} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-center gap-2 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-tis-gold shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Global University Placements Banner */}
        <AnimatedReveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-tis-crimson-deep p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-zinc-800">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-tis-gold text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md">
                <Globe2 className="w-4 h-4" />
                Global University Placements & Career Counseling
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display leading-tight">
                From Dehradun Valley to Top Ivy League & Premier Universities
              </h3>

              <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                Our in-house Career Guidance Cell partners with international admission directors and offers structured SAT/IELTS preparation, portfolio curation, and direct university placements across the UK, USA, Canada, and India.
              </p>

              {/* University Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
                  >
                    <div>
                      <Building2 className="w-4 h-4 text-tis-gold mb-1.5" />
                      <p className="font-extrabold text-xs text-white leading-tight">{uni.name}</p>
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-2 block">{uni.rank}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="gold"
                  onClick={onEnquireClick}
                  className="w-full sm:w-auto text-xs sm:text-sm py-3 px-6"
                >
                  Download Academic Prospectus
                </Button>

                <a
                  href="#admissions"
                  className="text-xs sm:text-sm font-bold text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  View CBSE Results & Merits →
                </a>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
