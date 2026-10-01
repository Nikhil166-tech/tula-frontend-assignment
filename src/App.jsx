import React, { useState } from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { ThemeProvider } from './hooks/useTheme';
import ScrollProgress from './components/animation/ScrollProgress';
import CustomCursor from './components/animation/CustomCursor';
import QuickContactBar from './components/layout/QuickContactBar';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import SportsSection from './components/sections/SportsSection';
import AcademicsSection from './components/sections/AcademicsSection';
import CampusLifeSection from './components/sections/CampusLifeSection';
import VirtualTourSection from './components/sections/VirtualTourSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import AdmissionCTASection from './components/sections/AdmissionCTASection';
import Footer from './components/layout/Footer';
import EnquiryModal from './components/ui/EnquiryModal';
import { schoolInfo } from './data/tisData';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <ThemeProvider>
      {/* 1. Standout Feature: Scroll Progress Bar */}
      <ScrollProgress />

      {/* 2. Standout Feature: Interactive Custom Mouse Cursor (disabled automatically on touch/mobile) */}
      <CustomCursor />

      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D11] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden pb-14 md:pb-0">
        {/* Top Contact Bar */}
        <QuickContactBar onEnquireClick={() => setEnquiryModalOpen(true)} />

        {/* Main Navbar */}
        <Navbar onEnquireClick={() => setEnquiryModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection onEnquireClick={() => setEnquiryModalOpen(true)} />

          {/* Key Stats Counter Section */}
          <StatsSection />

          {/* The Modern Gurukul Story & Philosophy */}
          <AboutSection />

          {/* Sports Foundation & 16+ Disciplines */}
          <SportsSection onEnquireClick={() => setEnquiryModalOpen(true)} />

          {/* CBSE Curriculum & Academic Architecture */}
          <AcademicsSection onEnquireClick={() => setEnquiryModalOpen(true)} />

          {/* Boarding Life & Pastoral Care */}
          <CampusLifeSection />

          {/* 22-Acre Campus & Virtual Tour Explorer */}
          <VirtualTourSection onEnquireClick={() => setEnquiryModalOpen(true)} />

          {/* Verified Community Testimonials */}
          <TestimonialsSection />

          {/* Admission & General FAQs */}
          <FAQSection />

          {/* High-Converting Admission Form */}
          <AdmissionCTASection />
        </main>

        {/* Institutional Footer */}
        <Footer onEnquireClick={() => setEnquiryModalOpen(true)} />

        {/* Floating WhatsApp Action Button */}
        <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
          <a
            href="https://api.whatsapp.com/send?phone=919837983791&text=Hello%20Tula's%20International%20School,%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* Mobile-Only Sticky Bottom Conversion Bar (Official TIS Mobile Feature) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 p-2 flex items-center gap-2 shadow-2xl">
          <a
            href={`tel:${schoolInfo.admissionsHelpline}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-tis-teal text-white text-xs font-bold shadow-sm active:scale-98 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Helpline</span>
          </a>

          <button
            onClick={() => setEnquiryModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-tis-crimson text-white text-xs font-bold shadow-sm active:scale-98 transition-transform"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Interactive Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
