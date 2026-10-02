import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/tisData';

export default function QuickContactBar({ onEnquireClick }) {
  return (
    <div className="bg-tis-crimson text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-8 border-b border-tis-crimson-dark/40 relative z-30 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Admissions Helpline & Location */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <a
            href={`tel:${schoolInfo.admissionsHelpline}`}
            className="flex items-center gap-1.5 font-bold hover:text-tis-gold-light transition-colors truncate"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-tis-gold shrink-0 animate-pulse" />
            <span className="truncate">
              <span className="hidden sm:inline text-red-100 font-medium">Admissions Helpline: </span>
              <span className="font-extrabold">{schoolInfo.admissionsHelpline}</span>
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

        {/* Right: Accreditations & Desktop Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-tis-gold-light font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-tis-gold shrink-0" />
            <span>CBSE Co-Ed Boarding</span>
          </span>

          <button
            onClick={onEnquireClick}
            className="hidden sm:inline-flex items-center gap-1 bg-tis-gold hover:bg-tis-gold-light text-zinc-950 font-black px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            <span>Enquire 2026</span>
          </button>
        </div>
      </div>
    </div>
  );
}
