import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';

export default function QuickContactBar({ onEnquireClick }) {
  return (
    <div className="bg-tis-crimson text-white text-xs py-2 px-4 sm:px-8 border-b border-tis-crimson-dark/40 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Admissions Helpline & Location */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <a
            href={`tel:${schoolInfo.admissionsHelpline}`}
            className="flex items-center gap-1.5 font-semibold hover:text-tis-gold-light transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-tis-gold" />
            <span>Admissions Helpline: {schoolInfo.admissionsHelpline}</span>
          </a>

          <a
            href={`mailto:${schoolInfo.email}`}
            className="hidden md:flex items-center gap-1.5 text-red-100 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-tis-gold" />
            <span>{schoolInfo.email}</span>
          </a>

          <span className="hidden lg:flex items-center gap-1.5 text-red-200">
            <MapPin className="w-3.5 h-3.5 text-tis-gold" />
            <span>Dehradun, Uttarakhand (Modern Gurukul)</span>
          </span>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-tis-gold-light font-medium uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> CBSE Affiliated Class IV–XII
          </span>
          <button
            onClick={onEnquireClick}
            className="bg-tis-gold hover:bg-tis-gold-light text-zinc-950 font-bold px-3 py-1 rounded-full text-[11px] uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
