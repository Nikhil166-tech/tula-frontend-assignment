import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Mail, User, BookOpen, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from './Button';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    state: '',
    otp: '',
    agree: true
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
      alert('Please enter the 4-digit code (e.g. 1234)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOtpSent(false);
    setOtpVerified(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      grade: '',
      state: '',
      otp: '',
      agree: true
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col"
          >
            {/* Top decorative header */}
            <div className="bg-gradient-to-r from-tis-crimson via-tis-crimson-dark to-tis-teal px-5 sm:px-6 py-4 sm:py-5 text-white relative shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 text-tis-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                Admissions Session 2026 – 2027
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">Tula's International School</h3>
              <p className="text-xs text-red-100 mt-0.5">
                The Modern Gurukul • Class IV to XII Boarding Education
              </p>
            </div>

            <div className="p-4 sm:p-8 overflow-y-auto flex-grow">
              {submitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white font-display">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-tis-crimson">{formData.name || 'Parent'}</span>. Our Admissions Counselor will contact you within 24 hours on <span className="font-semibold">{formData.phone}</span> with the prospectus.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Button variant="primary" onClick={handleReset} className="text-xs sm:text-sm py-2 px-6">
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                      Student / Parent Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="parent@example.com"
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          maxLength="10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit number"
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* OTP Verification Simulation */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-tis-aqua-soft/30 dark:bg-zinc-800/80 border border-tis-teal/20">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                        {otpVerified ? '✓ Phone Verified' : otpSent ? 'OTP sent to mobile' : 'Verify phone number with SMS'}
                      </span>
                      {!otpSent && !otpVerified && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          className="text-[11px] sm:text-xs font-bold text-tis-crimson hover:underline shrink-0"
                        >
                          Send OTP
                        </button>
                      )}
                    </div>
                    {otpSent && !otpVerified && (
                      <div className="mt-2 flex gap-2">
                        <input
                          type="text"
                          maxLength="4"
                          placeholder="Code (1234)"
                          value={formData.otp}
                          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          className="w-24 px-2 py-1 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-xs"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          className="px-2.5 py-1 rounded-lg bg-tis-teal text-white text-xs font-bold hover:bg-tis-teal-dark shrink-0"
                        >
                          Verify
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Grade & State Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        Grade / Class *
                      </label>
                      <div className="relative">
                        <BookOpen className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                        <select
                          required
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                        >
                          <option value="">Select Grade</option>
                          <option value="Class IV">Class IV (Primary)</option>
                          <option value="Class V">Class V</option>
                          <option value="Class VI">Class VI (Middle)</option>
                          <option value="Class VII">Class VII</option>
                          <option value="Class VIII">Class VIII</option>
                          <option value="Class IX">Class IX (Secondary)</option>
                          <option value="Class X">Class X</option>
                          <option value="Class XI">Class XI (Sr. Secondary)</option>
                          <option value="Class XII">Class XII</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        State / Residence *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                        <select
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson transition-all"
                        >
                          <option value="">Select State</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="Delhi NCR">Delhi NCR</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Punjab & Haryana">Punjab & Haryana</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="International NRI">International / NRI</option>
                          <option value="Other">Other State</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      id="modal-consent"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      required
                      className="mt-0.5 rounded text-tis-crimson focus:ring-tis-crimson"
                    />
                    <label htmlFor="modal-consent" className="text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                      I agree to receive the prospectus, admission schedule, and communications from Tula's International School, Dehradun.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full py-2.5 sm:py-3 text-xs sm:text-base shadow-lg"
                      disabled={loading}
                    >
                      {loading ? 'Submitting Details...' : 'Request Prospectus & Call Back'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
