import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";
import { testimonialsData } from "../types";
import UnknownImg from "../assets/images/unknown-img.jpg"
// Enhanced local details matching the image design structure (date, rating value)
const testimonialsMeta = [
    {
        ratingValue: "4.9",
        date: "12 Jun, 2026",
    },
    {
        ratingValue: "5.0",
        date: "28 May, 2026",
    },
    {
        ratingValue: "4.9",
        date: "18 Apr, 2026",
    },
];
export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoPlayRef = useRef(null);
    // Restart autoplay timer with a luxurious 10-second buffer
    const startAutoplay = () => {
        stopAutoplay();
        autoPlayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 10000);
    };
    const stopAutoplay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };
    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);
    // GSAP animation triggers on active index update
    useEffect(() => {
        // 1. Smoothly animate the quote container text with luxury fade/slide-up
        const quoteContainer = document.querySelector(".testimonial-quote-container");
        if (quoteContainer) {
            gsap.killTweensOf(quoteContainer);
            gsap.fromTo(quoteContainer, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        }
        // 2. Animate the active drop-cap letter with a elastic pop
        const dropCap = document.querySelector(".testimonial-dropcap");
        if (dropCap) {
            gsap.killTweensOf(dropCap);
            gsap.fromTo(dropCap, { scale: 0.7, opacity: 0, rotationY: -45 }, { scale: 1, opacity: 1, rotationY: 0, duration: 0.6, ease: "back.out(2)" });
        }
        // 3. Highlight pulse for the newly active avatar's gold border
        const activeRing = document.querySelector(".active-avatar-ring");
        if (activeRing) {
            gsap.killTweensOf(activeRing);
            gsap.fromTo(activeRing, { scale: 0.9, boxShadow: "0 0 0 0px rgba(197, 160, 89, 0)" }, { scale: 1, boxShadow: "0 0 0 8px rgba(197, 160, 89, 0.15)", duration: 0.5, ease: "back.out(1.8)" });
        }
    }, [activeIndex]);
    const handleReviewerClick = (index) => {
        stopAutoplay(); // Stop auto-sliding if the user manually curates their reading
        setActiveIndex(index);
        startAutoplay(); // Restart with fresh timer
    };
    // Helper to retrieve position parameters along the vertical convex arc
    const getPositionStyle = (idx) => {
        // Relative index tells us where it lies in relation to the active spotlight
        const positionIndex = (idx - activeIndex + testimonialsData.length) % testimonialsData.length;
        if (positionIndex === 0) {
            // Active Spotlight Position (Middle, pushed furthest right on the curve)
            return {
                top: "50%",
                left: "140px",
                transform: "translate(-50%, -50%)",
                zIndex: 30,
            };
        }
        else if (positionIndex === 1) {
            // Bottom Position (Recessed leftward)
            return {
                top: "82%",
                left: "45px",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
            };
        }
        else {
            // Top Position (Recessed leftward)
            return {
                top: "18%",
                left: "45px",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
            };
        }
    };
    // Safe separation of the first letter for drop cap rendering
    const activeQuote = testimonialsData[activeIndex].quote;
    const firstLetter = activeQuote.charAt(0);
    const restOfQuote = activeQuote.slice(1);
    return (<section className="py-24 bg-white border-t border-b border-royal-gold/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="testimonials">
      {/* Background ambient gold luxury aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl pointer-events-none"/>

      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Customer Reviews Section Header */}
        <div className="flex flex-col items-start">
          <div className="w-12 h-[3.5px] bg-luxury-red rounded-full mb-3"/>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Customer Reviews
          </h2>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-royal-gold mt-1">
            Resident C-Suite & Creative Circle Endorsements
          </span>
        </div>

        {/* Dynamic Split Layout matching image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-6 ml-15">
          
          {/* LEFT COLUMN: Handcrafted Interactive Curved Arc Selector (Desktop only, falls back elegantly on mobile) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[420px] hidden sm:block overflow-visible" id="arc-selector-container">
            
            {/* SVG dash path representing the luxurious gold curvature */}
            <svg viewBox="0 0 400 400" className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="goldArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15"/>
                  <stop offset="50%" stopColor="#C5A059" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.15"/>
                </linearGradient>
              </defs>
              <path d="M 45,75 Q 230,200 45,325" stroke="url(#goldArcGradient)" strokeWidth="1.8" strokeDasharray="6 6" fill="none"/>
            </svg>

            {/* Interactive nodes moving dynamically along the curve */}
            {testimonialsData.map((item, idx) => {
            const posStyle = getPositionStyle(idx);
            const isActive = idx === activeIndex;
            const meta = testimonialsMeta[idx];
            return (<button key={item.id} onClick={() => handleReviewerClick(idx)} style={posStyle} className="absolute flex items-center gap-4 transition-all duration-700 ease-in-out group focus:outline-none cursor-pointer">
                  {/* Avatar wrapper circle */}
                  <div className="relative flex-shrink-0">
                    {/* Glowing outer ring only for active item */}
                    {isActive && (<div className="active-avatar-ring absolute -inset-1.5 rounded-full border border-royal-gold/40 transition-all pointer-events-none"/>)}

                    <div className={`rounded-full overflow-hidden transition-all duration-500 shadow-md ${isActive
                    ? "w-14 h-14 ring-2 ring-royal-gold border-2 border-white"
                    : "w-10 h-10 ring-1 ring-royal-gold/30 border border-white grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"}`}>
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
                    </div>
                  </div>

                  {/* Name and Meta ratings beside the avatar */}
                  <div className="text-left select-none max-w-[240px]">
                    <h3 className={`font-serif transition-all duration-500 truncate ${isActive
                    ? "text-base sm:text-lg font-bold text-charcoal"
                    : "text-xs sm:text-sm font-medium text-charcoal/50 group-hover:text-charcoal"}`}>
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Star className={`w-3 h-3 fill-current ${isActive ? "text-luxury-red" : "text-royal-gold/60"}`}/>
                      <span className={`font-sans text-[10px] font-bold tracking-tight ${isActive ? "text-charcoal/70" : "text-charcoal/40"}`}>
                        {meta.ratingValue} <span className="font-normal text-charcoal/40">on {meta.date}</span>
                      </span>
                    </div>
                  </div>
                </button>);
        })}
          </div>

          {/* MOBILE REVIEWERS ROW: Horizontal elegant scroll selectors for narrow viewports */}
          <div className="sm:hidden flex flex-row items-center justify-center gap-3 py-2 border-b border-royal-gold/10 overflow-x-auto w-full">
            {testimonialsData.map((item, idx) => {
            const isActive = idx === activeIndex;
            const meta = testimonialsMeta[idx];
            return (<button key={`mobile-${item.id}`} onClick={() => handleReviewerClick(idx)} className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${isActive
                    ? "border-royal-gold/40 bg-royal-gold/5"
                    : "border-royal-gold/10 bg-transparent opacity-60"}`}>
                  <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover border border-royal-gold/25" referrerPolicy="no-referrer"/>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-charcoal truncate max-w-[90px]">{item.name}</p>
                    <div className="flex items-center gap-0.5 text-[9px] text-charcoal/60">
                      <Star className="w-2.5 h-2.5 fill-current text-luxury-red"/>
                      <span>{meta.ratingValue}</span>
                    </div>
                  </div>
                </button>);
        })}
          </div>

          {/* RIGHT COLUMN: Elegant Blockquote Area matching the screenshot styling */}
          <div className="lg:col-span-7 flex flex-col justify-center relative min-h-[220px]" id="quote-display-box">
            
            {/* Elegant double open quotes decorative element */}
            <span className="text-royal-gold/10 font-serif text-[10rem] md:text-[13rem] absolute -top-16 -left-6 sm:-left-10 select-none leading-none pointer-events-none">
              “
            </span>

            {/* Quote container with animations */}
            <div className="testimonial-quote-container relative z-10 pl-2 sm:pl-4">
              
              {/* Actual Quote text featuring Drop Cap */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal/90 italic leading-relaxed text-left">
                <span className="testimonial-dropcap font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-luxury-red mr-3 float-left leading-[0.8] mt-1 select-none transition-transform">{firstLetter}</span>{restOfQuote}
              </blockquote>

              {/* Speaker Role Identity */}
              <div className="mt-8 flex flex-col items-start">
                <span className="w-8 h-[1px] bg-royal-gold mb-3"/>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-luxury-red">
                  — {testimonialsData[activeIndex].role}
                </p>
                <p className="font-serif text-[11px] text-charcoal/45 mt-0.5 italic">
                  Premium Villa Owner, Gated Sanctuary Cohort
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>);
}
