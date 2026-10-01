import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';

export default function QuickContactBar({ onEnquireClick }) {
  return (
    <div className="bg-tis-crimson text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-8 border-b border-tis-crimson-dark/40 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Admissions Helpline */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <a
            href={`tel:${schoolInfo.admissionsHelpline}`}
            className="flex items-center gap-1.5 font-bold hover:text-tis-gold-light transition-colors truncate"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-tis-gold shrink-0" />
            <span className="truncate">
              <span className="hidden sm:inline">Admissions Helpline: </span>
              {schoolInfo.admissionsHelpline}
            </span>
          </a>

          <a
            href={`mailto:${schoolInfo.email}`}
            className="hidden md:flex items-center gap-1.5 text-red-100 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-tis-gold shrink-0" />
            <span>{schoolInfo.email}</span>
          </a>

          <span className="hidden lg:flex items-center gap-1.5 text-red-200">
            <MapPin className="w-3.5 h-3.5 text-tis-gold shrink-0" />
            <span>Dehradun, Uttarakhand (Modern Gurukul)</span>
          </span>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-tis-gold-light font-medium uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> CBSE Co-Ed Boarding
          </span>
          <button
            onClick={onEnquireClick}
            className="bg-tis-gold hover:bg-tis-gold-light text-zinc-950 font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
