import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolInfo } from '../../data/tisData';
import AnimatedReveal from '../animation/AnimatedReveal';
import Button from '../ui/Button';

export default function AdmissionCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    state: '',
    otp: '',
    consent: true
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (formData.otp.length >= 4) {
      setOtpVerified(true);
    } else {
      alert('Please enter a 4-digit code (e.g. 1234)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 700);
  };

  return (
    <section id="admissions" className="py-24 sm:py-32 bg-stone-100/70 dark:bg-[#07090D] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-tis-crimson/15 via-tis-teal/15 to-tis-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-crimson/10 dark:bg-tis-crimson/20 text-tis-crimson dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-tis-crimson/20">
              <Sparkles className="w-3.5 h-3.5 text-tis-gold" />
              Limited Residential Seats Available
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 dark:text-white leading-tight">
              Begin Your Journey with{' '}
              <span className="text-tis-crimson dark:text-red-400">Tula's International</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-sans">
              Schedule a personalized campus tour in Dehradun or request an official prospectus and fee schedule for Academic Session 2026–2027.
            </p>
          </div>
        </AnimatedReveal>

        {/* Contact + Form Card */}
        <AnimatedReveal delay={0.1}>
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-tis-crimson via-tis-crimson-dark to-zinc-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-tis-gold font-display font-black text-xl">
                    TIS
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-white">
                      Admissions Office
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-tis-gold">
                      Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>

                <p className="text-sm text-red-100 leading-relaxed font-sans">
                  Our admissions counselors are available Monday through Saturday (9:00 AM – 6:00 PM IST) to guide parents through criteria, entrance assessments, and scholarship opportunities.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/15 text-sm">
                  <a
                    href={`tel:${schoolInfo.admissionsHelpline}`}
                    className="flex items-center gap-3 text-white hover:text-tis-gold transition-colors font-semibold"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-tis-gold shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>Helpline: {schoolInfo.admissionsHelpline}</span>
                  </a>

                  <div className="flex items-center gap-3 text-red-100">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-tis-gold shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>Landline: 0135-2699444 / 2699666</span>
                  </div>

                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="flex items-center gap-3 text-white hover:text-tis-gold transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-tis-gold shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>{schoolInfo.email}</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/maBF8syXueQkw31E6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-red-100 hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-tis-gold shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs leading-relaxed">
                      Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/15 flex items-center gap-2 text-xs text-tis-gold">
                <ShieldCheck className="w-4 h-4" />
                <span>Managed by {schoolInfo.trust}</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white">
                    Application Request Received!
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-tis-crimson">{formData.name || 'Parent'}</span>. Our Admissions Team will contact you on <span className="font-bold">{formData.phone}</span> within 24 hours.
                  </p>
                  <div className="mt-6">
                    <Button
                      variant="primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-2xl font-black font-display text-zinc-900 dark:text-white">
                      Enquire for 2026–2027 Admissions
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Fill out the form below to receive the official prospectus and fee brochure.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Student / Parent Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength="10"
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                      />
                    </div>
                  </div>

                  {/* OTP Verification Box */}
                  <div className="p-3.5 rounded-xl bg-tis-aqua-soft/30 dark:bg-zinc-800/60 border border-tis-teal/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                      {otpVerified ? '✓ Mobile Verified Successfully' : otpSent ? 'SMS Code Sent' : 'Verify Mobile via One-Time Password'}
                    </span>
                    {!otpSent && !otpVerified && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="px-3 py-1.5 rounded-lg bg-tis-crimson text-white text-xs font-bold hover:bg-tis-crimson-dark transition-colors"
                      >
                        Send OTP
                      </button>
                    )}
                    {otpSent && !otpVerified && (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          maxLength="4"
                          placeholder="Code (1234)"
                          value={formData.otp}
                          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          className="w-24 px-2 py-1 rounded-md text-xs border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          className="px-2.5 py-1 rounded-md bg-tis-teal text-white text-xs font-bold hover:bg-tis-teal-dark"
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Grade & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Admission Grade *
                      </label>
                      <select
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                      >
                        <option value="">Select Grade</option>
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                        <option value="Class XI - Science">Class XI - Science (PCM/PCB)</option>
                        <option value="Class XI - Commerce">Class XI - Commerce</option>
                        <option value="Class XI - Humanities">Class XI - Humanities</option>
                        <option value="Class XII">Class XII</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                        State / Origin *
                      </label>
                      <select
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                      >
                        <option value="">Select State</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Bihar & Jharkhand">Bihar & Jharkhand</option>
                        <option value="International NRI">International NRI</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      id="section-consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      required
                      className="mt-1 rounded text-tis-crimson focus:ring-tis-crimson"
                    />
                    <label htmlFor="section-consent" className="text-xs text-zinc-600 dark:text-zinc-400">
                      I agree to receive the prospectus, admission guidelines, and communication from Tula's International School, Dehradun.
                    </label>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full py-3.5 shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing Application...' : 'Submit Admission Enquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
