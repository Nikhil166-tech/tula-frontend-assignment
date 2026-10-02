import { Phone, Mail, MapPin, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { schoolInfo, navigationLinks } from '../../data/tisData';

export default function Footer({ onEnquireClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800 relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-zinc-800">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark flex items-center justify-center text-white shadow-lg">
                <span className="font-display font-black text-xl text-tis-gold">TIS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Tula's International School
                </h3>
                <p className="text-xs uppercase tracking-widest text-tis-gold font-semibold">
                  The Modern Gurukul • Dehradun
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              Established in 2012 under the aegis of <span className="text-zinc-200 font-semibold">{schoolInfo.trust}</span>. Tula's International School blends ancient Indian Gurukul ethos with modern 21st-century academics, 16+ sports, and world-class pastoral boarding.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-tis-teal-light" />
              <span>CBSE Affiliated • Co-Ed Residential Boarding • Class IV to XII</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore TIS
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-tis-gold-light transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onEnquireClick}
                  className="hover:text-tis-gold-light transition-colors text-tis-crimson dark:text-red-400 font-semibold"
                >
                  Online Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics & Sports */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Key Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>CBSE Primary & Middle Wing (IV–VIII)</li>
              <li>CBSE Secondary Wing (IX–X)</li>
              <li>Senior Secondary Science, Commerce & Arts</li>
              <li>16+ Sports & Horse Riding Club</li>
              <li>Integrated Robotics & Coding Labs</li>
              <li>Global University Advisory Cell</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Campus & Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tis-gold shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tis-gold-light transition-colors"
                >
                  Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tis-gold shrink-0" />
                <a href={`tel:${schoolInfo.admissionsHelpline}`} className="hover:text-white font-semibold">
                  +91-9837983791 (Admissions)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tis-teal-light shrink-0" />
                <span>Landline: 0135-2699444 / 666</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tis-gold shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white">
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Tula's International School, Dehradun. All Rights Reserved. Managed by {schoolInfo.trust}.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://tis.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 flex items-center gap-1">
              Official Portal <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-tis-crimson" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
