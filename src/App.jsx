import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { setEnquirySubmitted } from "./store/enquirySlice";

// Import Custom Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import RightInquirySidebar from "./components/RightInquirySidebar";

// Import New Modular Page Sections
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HighlightsSection from "./components/HighlightsSection";
import LifestyleSection from "./components/LifestyleSection";
import PrivacySection from "./components/PrivacySection";
import LocationSection from "./components/LocationSection";
import SouthBangaloreSection from "./components/SouthBangaloreSection";
import WhySection from "./components/WhySection";
import AmenitiesSection from "./components/AmenitiesSection";
import InvestmentSection from "./components/InvestmentSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactForm";

export default function App() {
  const isEnquirySubmitted = useSelector((state) => state.enquiry.isEnquirySubmitted);
  const dispatch = useDispatch();

  // Modal & Drawer State managers
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(0);

  // Layout-specific interactive States
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Load local storage inquiries counts to bind indicators
  const refreshInquiryCount = () => {
    const existing = localStorage.getItem("mrcl_inquiries");
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        setInquiryCount(parsed.length);
      } catch (e) {
        setInquiryCount(0);
      }
    } else {
      setInquiryCount(0);
    }
  };

  useEffect(() => {
    refreshInquiryCount();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollPercent(progress);

      if (window.scrollY > window.innerHeight * 0.35) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };

    window.addEventListener("mrcl_inquiries_updated", refreshInquiryCount);
    window.addEventListener("scroll", handleScroll);

    // Prevent body scrolling if enquiry form is not submitted
    if (!isEnquirySubmitted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener("mrcl_inquiries_updated", refreshInquiryCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEnquirySubmitted]);

  return (
    <>
      {!isEnquirySubmitted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl relative z-[10000] max-h-screen overflow-y-auto custom-scrollbar">
            <ContactForm
              title="Welcome to MRCL"
              subtitle="Please submit an enquiry to access the site."
              onSuccess={() => dispatch(setEnquirySubmitted(true))}
            />
          </div>
        </div>
      )}

      <div className="bg-white min-h-screen relative font-sans text-charcoal flex flex-col justify-between" id="applet-root">
      <Helmet>
        <title>
          Premium Luxury 4 BHK Independent Villas for Sale in Bannerghatta,
          South Bangalore | MRCL Infrastructure
        </title>

        <meta
          name="description"
          content="MRCL Infrastructure offers premium 4BHK independent luxury houses and villas for sale in Bannerghatta, South Bangalore. Find your dream home today."
        />

        <meta
          name="keywords"
          content="Luxury Villas Bannerghatta, 4BHK Villas Bangalore, Independent Villas South Bangalore, Premium Villas Bangalore, MRCL Infrastructure"
        />

        <meta name="author" content="MRCL Infrastructure" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Premium Luxury 4 BHK Independent Villas for Sale in Bannerghatta, South Bangalore"
        />

        <meta
          property="og:description"
          content="Discover premium 4BHK luxury independent villas by MRCL Infrastructure in Bannerghatta, South Bangalore."
        />
      </Helmet>

      {/* 1. Scroll Progress Top Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-luxury-red via-royal-gold to-luxury-red z-[100] transition-all duration-100"
        style={{ width: `${scrollPercent}%` }}
        id="scroll-progress-indicator"
      />

      {/* 2. Sticky Glassmorphism Header */}
      <Navbar
        onOpenBookingModal={scrollToContact}
        onOpenInquiriesDashboard={() => setIsAdminDashboardOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* 3. Reusable Modular Layout Sections */}
      <HeroSection onScrollToContact={scrollToContact} />
      
      <AboutSection />
      
      <HighlightsSection />
      
      <LifestyleSection />
      
      <PrivacySection />
      
      <LocationSection />
      
      <SouthBangaloreSection />
      
      <WhySection />
      
      <AmenitiesSection />
      
      <InvestmentSection />
      
      <TestimonialsSection />
      
      <FaqSection />
      
      <ContactSection />

      {/* 4. Minimal Luxury Footer */}
      <Footer onOpenBookingModal={scrollToContact} />

      {/* 5. Floating widgets and dialog controls */}
      <FloatingWidgets
        showFloatingCta={showFloatingCta}
        isBookingModalOpen={isBookingModalOpen}
        setIsBookingModalOpen={setIsBookingModalOpen}
        isBrochureModalOpen={isBrochureModalOpen}
        setIsBrochureModalOpen={setIsBrochureModalOpen}
        isAdminDashboardOpen={isAdminDashboardOpen}
        setIsAdminDashboardOpen={setIsAdminDashboardOpen}
        inquiryCount={inquiryCount}
        onRefreshInquiries={refreshInquiryCount}
        scrollToContact={scrollToContact}
      />

      {/* 6. Premium sliding right-side inquiry form */}
      <RightInquirySidebar />

    </div>
    </>
  );
}
