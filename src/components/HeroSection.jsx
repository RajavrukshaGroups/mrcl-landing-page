import React from "react";
import { VILLA_EXTERIOR } from "../constants";
import { 
  Sofa, 
  Home, 
  MapPin, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Key, 
  Landmark, 
  Users, 
  Shield 
} from "lucide-react";
import HeroImage from "../assets/images/hero-img.jpeg";
import { TbLaurelWreathFilled } from "react-icons/tb";
import VillaExt from '../assets/images/villa_exterior_1783595201071.jpg'


export default function HeroSection({ onScrollToContact }) {
  return (
    <header className="relative min-h-screen pt-24 sm:pt-28 pb-10 flex flex-col justify-between bg-white px-4 sm:px-6 lg:px-8 overflow-hidden" id="hero">
      
      {/* Subtle luxury light leaks */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal-gold/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      {/* Background elegant golden waves (replicated from mockup) */}
      

      {/* Desktop Full-Bleed Right Column (Hidden on mobile/tablet) */}
      <div className="hidden lg:block absolute right-0 top-20 bottom-0 object-fill w-full h-[100vh] z-0 overflow-hidden" id="desktop-hero-visual">
        
        {/* Physical Villa High-Res Image */}
        <img 
          src={HeroImage} 
          alt="MRCL Premium 4 BHK Villa Exterior" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-105" 
          referrerPolicy="no-referrer"
        />

        

        {/* Top-Right: Premium Gold RERA APPROVED Badge */}
        <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-royal-gold/25 shadow-lg flex items-center gap-3 z-20">
          <TbLaurelWreathFilled className="w-9 h-9 text-royal-gold" />
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-black text-royal-gold tracking-widest leading-none">RERA</span>
            <span className="text-[7.5px] font-black text-royal-gold/90 tracking-wider uppercase leading-none mt-1">APPROVED</span>
          </div>
        </div>

        {/* Bottom-Right: Floating Translucent "Actual Villa" Card */}
        <div className="absolute bottom-32 right-8 bg-[#111111]/90 backdrop-blur-md rounded-2xl p-3 border border-royal-gold/25 flex items-center gap-3 shadow-2xl max-w-[260px] z-20 transition-all duration-300 hover:scale-[1.03]">
          <img 
            src={VillaExt} 
            alt="Actual Villa Thumbnail" 
            className="w-12 h-12 rounded-lg object-cover border border-royal-gold/20 flex-shrink-0" 
          />
          <div className="flex flex-col text-left">
            <span className="text-white text-[10px] font-bold uppercase tracking-widest font-sans">Actual Villa</span>
            <span className="text-white/60 text-[9px] font-sans mt-0.5">MRCL OakHaven Villa</span>
          </div>
          <button 
            onClick={onScrollToContact}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-charcoal ml-2 cursor-pointer transition-all hover:bg-royal-gold hover:text-white flex-shrink-0"
            aria-label="View actual villa"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Structural Container */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-4">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-5 flex flex-col items-start gap-3.5 sm:gap-4 text-left" id="hero-narrative">
            
            {/* Tagline */}
            <div className="flex items-center gap-2.5">
              <div className="w-5 sm:w-7 h-[1.5px] bg-royal-gold/50" />
              <span className="text-[10px] sm:text-xs font-bold text-luxury-red uppercase tracking-[0.2em] font-sans">
                Premium 4 BHK Independent Villas
              </span>
              <div className="w-5 sm:w-7 h-[1.5px] bg-royal-gold/50" />
            </div>

            {/* Main Luxury Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#111111] leading-[1.12] tracking-tight mt-1">
              Luxury Living <br />
              <span className="text-luxury-red">Begins Here</span>
              <span className="text-royal-gold font-serif font-black">.</span>
            </h1>

            {/* Rhombus Ornament */}
            <div className="my-1 flex items-center gap-2">
              <div className="w-15 sm:w-20 h-[1.5px] bg-royal-gold/50" />
              <div className="w-2.5 h-2.5 border border-royal-gold rotate-45 relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-royal-gold" />
              </div>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-md text-left">
              Discover premium 4 BHK independent villas in South Bangalore designed for modern families seeking elegance, privacy, and exceptional connectivity.
            </p>

            {/* Desktop Stats Widget (Hidden on Mobile, placed down below the image for better mobile flow) */}
            <div className="hidden lg:grid bg-white rounded-2xl border border-royal-gold/15 shadow-xl p-5 grid-cols-3 gap-2 mt-4 w-full max-w-lg">
              
              {/* 25+ Amenities */}
              <div className="flex flex-col items-center text-center border-r border-royal-gold/10 px-1 py-1">
                <div className="w-10 h-10 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-2 shadow-sm">
                  <Sofa className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="font-serif text-xl sm:text-2xl font-black text-charcoal leading-none">25+</span>
                <span className="text-[9px] font-extrabold text-luxury-red uppercase tracking-wider mt-2.5 leading-tight">
                  Luxury Amenities
                </span>
              </div>

              {/* 4 BHK Villas */}
              <div className="flex flex-col items-center text-center border-r border-royal-gold/10 px-1 py-1">
                <div className="w-10 h-10 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-2 shadow-sm">
                  <Home className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="font-serif text-xl sm:text-2xl font-black text-luxury-red leading-none">4 BHK</span>
                <span className="text-[9px] font-extrabold text-charcoal/70 uppercase tracking-wider mt-2.5 leading-tight">
                  Premium Villas
                </span>
              </div>

              {/* E-City Location */}
              <div className="flex flex-col items-center text-center px-1 py-1">
                <div className="w-10 h-10 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-2 shadow-sm">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="font-serif text-xl sm:text-2xl font-black text-luxury-red leading-none">Bannerughatta</span>
                <span className="text-[9px] font-extrabold text-luxury-red uppercase tracking-wider mt-2.5 leading-tight">
                  Prime Location
                </span>
              </div>
            </div>

            {/* Desktop Action Buttons (Hidden on Mobile) */}
            {/* <div className="hidden lg:flex flex-wrap items-center gap-5 mt-6" id="hero-action-buttons-desktop">
              <button 
                onClick={onScrollToContact} 
                className="bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full transition-all flex items-center gap-2 group shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore The Villas</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button 
                onClick={onScrollToContact} 
                className="flex items-center gap-3.5 group text-charcoal hover:text-luxury-red font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-royal-gold/40 flex items-center justify-center bg-white shadow-md group-hover:bg-royal-gold/10 transition-colors">
                  <Play className="w-3.5 h-3.5 text-royal-gold fill-current ml-0.5" />
                </div>
                <span className="group-hover:translate-x-0.5 transition-transform">Watch Video Tour</span>
              </button>
            </div> */}

            {/* Mobile/Tablet Action Buttons (Shown on lg:hidden, placed right under narrative) */}
            {/* <div className="lg:hidden flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-5 w-full" id="hero-action-buttons-mobile">
              <button 
                onClick={onScrollToContact} 
                className="w-full sm:w-auto bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full transition-all flex items-center justify-center gap-2 group shadow-md cursor-pointer"
              >
                <span>Explore The Villas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onScrollToContact} 
                className="w-full sm:w-auto flex items-center justify-center gap-3 group text-charcoal hover:text-luxury-red font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer py-2 bg-white sm:bg-transparent border border-royal-gold/25 sm:border-transparent rounded-full"
              >
                <div className="w-9 h-9 rounded-full border border-royal-gold/40 flex items-center justify-center bg-white shadow-sm">
                  <Play className="w-3 h-3 text-royal-gold fill-current ml-0.5" />
                </div>
                <span>Watch Video Tour</span>
              </button>
            </div> */}

          </div>

          {/* Mobile/Tablet Image Container (Shown on lg:hidden) */}
          <div className="lg:hidden col-span-1 flex flex-col items-center w-full mt-6" id="hero-visual-mobile">
            <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-royal-gold/15">
              <img 
                src={VillaExt} 
                alt="MRCL Premium 4 BHK Villa" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Elegant dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/45 via-transparent to-transparent pointer-events-none" />

              {/* RERA Approved Badge Inside Mobile Image */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-royal-gold/25 shadow-md flex items-center gap-1.5 z-20">
                <svg viewBox="0 0 64 64" className="w-5 h-5 text-royal-gold" fill="currentColor">
                  <polygon points="32,18 34.5,23 40,23.5 36,27 37.5,32.5 32,29.5 26.5,32.5 28,27 24,23.5 29.5,23" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[9px] font-black text-royal-gold tracking-widest leading-none">RERA</span>
                  <span className="text-[5.5px] font-black text-royal-gold/90 tracking-wider uppercase leading-none mt-0.5">APPROVED</span>
                </div>
              </div>

              {/* Floating "Actual Villa" Card Inside Mobile Image */}
              <div className="absolute bottom-3 right-3 bg-[#111111]/90 backdrop-blur-sm rounded-xl p-2 border border-royal-gold/20 flex items-center gap-2 shadow-xl max-w-[210px] z-20">
                <img 
                  src={VillaExt} 
                  alt="Villa Thumbnail" 
                  className="w-8 h-8 rounded-md object-cover border border-royal-gold/20 flex-shrink-0" 
                />
                <div className="flex flex-col text-left">
                  <span className="text-white text-[8px] font-bold uppercase tracking-wider font-sans">Actual Villa</span>
                  <span className="text-white/60 text-[7px] font-sans">MRCL OakHaven Villa</span>
                </div>
                <button 
                  onClick={onScrollToContact}
                  className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-charcoal ml-2 cursor-pointer flex-shrink-0"
                  aria-label="View villa details"
                >
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Stats Widget (Shown on lg:hidden right below mobile image) */}
            <div className="bg-white rounded-2xl border border-royal-gold/15 shadow-md p-4 grid grid-cols-3 gap-1.5 w-full mt-4">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center text-center border-r border-royal-gold/10 px-0.5 py-0.5">
                <div className="w-8 h-8 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-1.5 shadow-sm">
                  <Sofa className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
                <span className="font-serif text-lg font-black text-charcoal leading-none">25+</span>
                <span className="text-[8px] font-extrabold text-luxury-red uppercase tracking-wider mt-1.5 leading-tight">
                  Luxury Amenities
                </span>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center text-center border-r border-royal-gold/10 px-0.5 py-0.5">
                <div className="w-8 h-8 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-1.5 shadow-sm">
                  <Home className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
                <span className="font-serif text-lg font-black text-luxury-red leading-none">4 BHK</span>
                <span className="text-[8px] font-extrabold text-charcoal/70 uppercase tracking-wider mt-1.5 leading-tight">
                  Premium Villas
                </span>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center text-center px-0.5 py-0.5">
                <div className="w-8 h-8 rounded-full bg-soft-white border border-royal-gold/20 flex items-center justify-center text-royal-gold mb-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
                <span className="font-serif text-lg font-black text-luxury-red leading-none">Bannerughatta</span>
                <span className="text-[8px] font-extrabold text-luxury-red uppercase tracking-wider mt-1.5 leading-tight">
                  Prime Location
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Feature Bar (Matches bronze-dark mockup container perfectly) */}
        <div className="w-full mt-2 md:mt-3 mb-2" id="hero-feature-bar">
          <div className="bg-[#1C1814] border border-royal-gold/25 rounded-3xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 items-center">
              
              {/* 1. BMRDA Approved */}
              <div className="flex items-center gap-3 pl-1">
                <div className="flex-shrink-0 text-royal-gold">
                  <ShieldCheck className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">BMRDA</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Approved</span>
                </div>
              </div>

              {/* 2. RERA Registered */}
              <div className="flex items-center gap-3 pl-1 lg:border-l lg:border-royal-gold/15 lg:pl-5">
                <div className="flex-shrink-0 text-royal-gold">
                  <FileText className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">RERA</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Registered</span>
                </div>
              </div>

              {/* 3. Ready to Move In */}
              <div className="flex items-center gap-3 pl-1 lg:border-l lg:border-royal-gold/15 lg:pl-5">
                <div className="flex-shrink-0 text-royal-gold">
                  <Key className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25] -rotate-45" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">Ready to</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Move In</span>
                </div>
              </div>

              {/* 4. 70% Bank Loan */}
              <div className="flex items-center gap-3 pl-1 lg:border-l lg:border-royal-gold/15 lg:pl-5">
                <div className="flex-shrink-0 text-royal-gold">
                  <Landmark className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">70%</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Bank Loan</span>
                </div>
              </div>

              {/* 5. Premium Community */}
              <div className="flex items-center gap-3 pl-1 lg:border-l lg:border-royal-gold/15 lg:pl-5">
                <div className="flex-shrink-0 text-royal-gold">
                  <Users className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">Premium</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Community</span>
                </div>
              </div>

              {/* 6. 24/7 Security */}
              <div className="flex items-center gap-3 pl-1 lg:border-l lg:border-royal-gold/15 lg:pl-5">
                <div className="flex-shrink-0 text-royal-gold">
                  <Shield className="w-6 sm:w-7 h-6 sm:h-7 stroke-[1.25]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[13px] sm:text-sm font-extrabold text-white tracking-wide leading-none">24/7</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/50 mt-1 leading-none">Security</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
