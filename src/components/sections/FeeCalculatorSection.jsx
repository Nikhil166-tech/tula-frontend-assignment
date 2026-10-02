import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function FeeCalculatorSection({ onEnquireClick }) {
  const [selectedWing, setSelectedWing] = useState('middle');
  const [meritType, setMeritType] = useState('academic');
  const [boardingType, setBoardingType] = useState('full');

  const wingData = {
    primary: { name: "Classes IV - V (Primary)", baseTuition: 480000, baseBoarding: 240000 },
    middle: { name: "Classes VI - VIII (Middle)", baseTuition: 540000, baseBoarding: 260000 },
    secondary: { name: "Classes IX - X (Secondary)", baseTuition: 610000, baseBoarding: 280000 },
    senior: { name: "Classes XI - XII (Senior Secondary)", baseTuition: 680000, baseBoarding: 310000 }
  };

  const meritDiscounts = {
    none: { label: "Standard Admission", discountPct: 0 },
    academic: { label: "Academic Distinction (>90% or Olympiad Rank)", discountPct: 25 },
    sports: { label: "State / National Level Athlete", discountPct: 35 },
    defence: { label: "Armed Forces / Sibling Privilege", discountPct: 15 }
  };

  const currentWing = wingData[selectedWing];
  const currentMerit = meritDiscounts[meritType];

  const boardingMultiplier = boardingType === 'weekly' ? 0.85 : 1.0;
  const boardingCost = Math.round(currentWing.baseBoarding * boardingMultiplier);
  const tuitionDiscount = Math.round(currentWing.baseTuition * (currentMerit.discountPct / 100));
  const finalTuition = currentWing.baseTuition - tuitionDiscount;
  const totalAnnual = finalTuition + boardingCost;

  const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <section id="fee-calculator" className="py-20 sm:py-32 bg-stone-100/70 dark:bg-[#0A0D12] relative overflow-hidden border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <SectionHeading
            badge="Transparency & Merit Aid"
            badgeVariant="gold"
            title="Interactive Fee &"
            highlight="Scholarship Estimator"
            subtitle="Plan your child's holistic boarding education with full clarity. Estimate annual fees and see how academic and sports excellence qualify for generous merit scholarships."
          />
        </AnimatedReveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
            {/* Step 1: Grade Wing */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
                1. Select Academic Grade Wing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(wingData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedWing(key)}
                    className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-bold transition-all ${
                      selectedWing === key
                        ? 'border-tis-crimson bg-tis-crimson/5 dark:bg-tis-crimson/15 text-tis-crimson dark:text-red-400 shadow-sm ring-1 ring-tis-crimson/30'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <span>{data.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Merit & Talent Category */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
                2. Merit & Scholarship Eligibility
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(meritDiscounts).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setMeritType(key)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      meritType === key
                        ? 'border-tis-teal bg-tis-teal/5 dark:bg-tis-teal/15 text-tis-teal dark:text-tis-teal-light shadow-sm ring-1 ring-tis-teal/30'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{item.label}</p>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold mt-0.5 block">
                      {item.discountPct > 0 ? `Eligible for ~${item.discountPct}% Tuition Grant` : 'Base Fee Tier'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Boarding Preference */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
                3. Residential Boarding Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBoardingType('full')}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    boardingType === 'full'
                      ? 'border-tis-gold bg-tis-gold/10 text-tis-gold-dark dark:text-tis-gold-light ring-1 ring-tis-gold/40'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-black">Full 7-Day Boarding</p>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Complete Pastoral & Weekend Program</span>
                </button>

                <button
                  onClick={() => setBoardingType('weekly')}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    boardingType === 'weekly'
                      ? 'border-tis-gold bg-tis-gold/10 text-tis-gold-dark dark:text-tis-gold-light ring-1 ring-tis-gold/40'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-black">Weekly Boarding</p>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Monday–Friday (Home on Weekends)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-black uppercase tracking-wider text-tis-teal dark:text-tis-teal-light">
                  Estimated Annual Investment
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  AY 2026–27
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                  <span>Annual Academic Tuition</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{formatINR(currentWing.baseTuition)}</span>
                </div>

                {tuitionDiscount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>Merit Scholarship Grant ({currentMerit.discountPct}%)</span>
                    <span>- {formatINR(tuitionDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                  <span>Residential Boarding & 5-Course Meals</span>
                  <span className="font-bold text-zinc-900 dark:text-white">{formatINR(boardingCost)}</span>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 block">Total Net Investment</span>
                    <span className="text-[10px] text-zinc-400">Payable in quarterly / semi-annual terms</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-display text-tis-crimson dark:text-red-400">
                    {formatINR(totalAnnual)}
                  </div>
                </div>
              </div>

              {/* All-Inclusive Highlights */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-800/60 space-y-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  All-Inclusive Package Highlights:
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tis-teal shrink-0" />
                  <span>All 16+ Sports Coaching & Equestrian Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tis-teal shrink-0" />
                  <span>5 Fresh Organic Meals Daily & Evening Snacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tis-teal shrink-0" />
                  <span>24/7 Resident Infirmary, Laundry & Mentorship</span>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={onEnquireClick}
                className="w-full justify-center text-xs sm:text-sm py-3.5 shadow-glow-crimson"
                icon={ArrowRight}
              >
                Lock Scholarship & Apply Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
