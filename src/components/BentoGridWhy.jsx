import React from "react";
import gsap from "gsap";
import { bentoItems } from "../types";
import { Sparkles } from "lucide-react";
export default function BentoGridWhy() {
    const handleMouseEnter = (cardId) => {
        const card = document.querySelector(`#bento-card-${cardId}`);
        if (!card)
            return;
        // 1. Elevate the icon container's background, border, and shadows
        const iconContainer = card.querySelector(".bento-icon-container");
        if (iconContainer) {
            gsap.to(iconContainer, {
                scale: 1.15,
                backgroundColor: "rgba(201, 162, 39, 0.12)",
                borderColor: "rgba(201, 162, 39, 0.7)",
                boxShadow: "0 10px 25px -5px rgba(201, 162, 39, 0.15)",
                duration: 0.4,
                ease: "power2.out",
            });
        }
        // 2. Custom micro-animations for high-fidelity SVGs matching the card theme
        switch (cardId) {
            case "trusted": {
                const hook = card.querySelector(".svg-hook");
                const girder = card.querySelector(".svg-girder");
                const craneLine = card.querySelector(".svg-crane-line");
                const dots = card.querySelectorAll(".svg-dot");
                if (hook)
                    gsap.to(hook, { y: 2.5, duration: 0.4, ease: "power2.out" });
                if (craneLine)
                    gsap.to(craneLine, { scaleY: 1.12, transformOrigin: "center top", duration: 0.4, ease: "power2.out" });
                if (girder) {
                    gsap.to(girder, {
                        y: 2,
                        rotation: 4,
                        transformOrigin: "center top",
                        duration: 0.5,
                        ease: "power1.inOut"
                    });
                }
                gsap.fromTo(dots, { scale: 0.6, opacity: 0.3 }, { scale: 1.25, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" });
                break;
            }
            case "design": {
                const legL = card.querySelector(".svg-leg-l");
                const legR = card.querySelector(".svg-leg-r");
                const arc = card.querySelector(".svg-arc");
                const nib = card.querySelector(".svg-nib");
                if (legL)
                    gsap.to(legL, { rotation: -12, transformOrigin: "center top", duration: 0.45, ease: "back.out(1.5)" });
                if (legR)
                    gsap.to(legR, { rotation: 12, transformOrigin: "center top", duration: 0.45, ease: "back.out(1.5)" });
                if (nib)
                    gsap.to(nib, { y: -1.5, duration: 0.3, ease: "power2.out" });
                if (arc) {
                    gsap.fromTo(arc, { strokeDashoffset: "30" }, { strokeDashoffset: "0", duration: 0.6, ease: "power2.out" });
                }
                break;
            }
            case "connectivity": {
                const nodes = card.querySelectorAll(".svg-node");
                const signals = card.querySelectorAll(".svg-signal");
                gsap.fromTo(nodes, { scale: 0.8, fillOpacity: 0.1 }, { scale: 1.25, fillOpacity: 0.3, stagger: 0.08, duration: 0.4, ease: "back.out(2)" });
                gsap.fromTo(signals, { strokeDashoffset: "24", opacity: 0.3 }, { strokeDashoffset: "0", opacity: 1, duration: 0.8, ease: "power1.inOut", stagger: 0.15 });
                break;
            }
            case "appreciation": {
                const line = card.querySelectorAll(".svg-trend-line");
                const bars = card.querySelectorAll(".svg-bar");
                const star = card.querySelector(".svg-roi-star");
                gsap.fromTo(line, { strokeDashoffset: "30" }, { strokeDashoffset: "0", duration: 0.5, ease: "power1.out", stagger: 0.1 });
                gsap.fromTo(bars, { scaleY: 0.3, transformOrigin: "bottom center" }, { scaleY: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)" });
                if (star) {
                    gsap.fromTo(star, { scale: 0.5, opacity: 0, rotation: -45 }, { scale: 1.3, opacity: 1, rotation: 0, transformOrigin: "center", duration: 0.45, ease: "elastic.out(1.2, 0.4)", delay: 0.25 });
                }
                break;
            }
            case "support": {
                const bellDome = card.querySelector(".svg-bell-dome");
                const bellPush = card.querySelector(".svg-bell-push");
                const waves = card.querySelectorAll(".svg-sound");
                if (bellPush) {
                    gsap.timeline()
                        .to(bellPush, { y: 2.5, duration: 0.15, ease: "power1.in" })
                        .to(bellPush, { y: 0, duration: 0.15, ease: "power1.out" });
                }
                if (bellDome) {
                    gsap.timeline()
                        .to(bellDome, { rotation: -10, transformOrigin: "center bottom", duration: 0.12, ease: "power1.inOut" })
                        .to(bellDome, { rotation: 10, duration: 0.12, ease: "power1.inOut" })
                        .to(bellDome, { rotation: -5, duration: 0.1 })
                        .to(bellDome, { rotation: 0, duration: 0.1 });
                }
                gsap.fromTo(waves, { scale: 0.6, opacity: 0 }, { scale: 1.3, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power2.out", delay: 0.1 });
                break;
            }
            default:
                break;
        }
    };
    const handleMouseLeave = (cardId) => {
        const card = document.querySelector(`#bento-card-${cardId}`);
        if (!card)
            return;
        // 1. Reset the outer bento icon container back to calm state
        const iconContainer = card.querySelector(".bento-icon-container");
        if (iconContainer) {
            gsap.to(iconContainer, {
                scale: 1,
                backgroundColor: "rgb(249, 250, 251)", // soft-white
                borderColor: "rgba(201, 162, 39, 0.25)",
                boxShadow: "none",
                duration: 0.35,
                ease: "power2.out",
            });
        }
        // 2. Kill timelines and ease all internal SVGs back to rest state
        const elementsToReset = card.querySelectorAll(".svg-crane-line, .svg-hook, .svg-girder, .svg-dot, " +
            ".svg-nib, .svg-leg-l, .svg-leg-r, .svg-arc, " +
            ".svg-signal, .svg-node, " +
            ".svg-trend-line, .svg-bar, .svg-roi-star, " +
            ".svg-bell-dome, .svg-bell-push, .svg-sound");
        elementsToReset.forEach((el) => {
            gsap.killTweensOf(el);
            const isAnimatedGlow = el.classList.contains("svg-roi-star") || el.classList.contains("svg-sound");
            let targetDashOffset;
            if (el.classList.contains("svg-arc")) {
                targetDashOffset = "30";
            }
            else if (el.classList.contains("svg-signal")) {
                targetDashOffset = "24";
            }
            else if (el.classList.contains("svg-trend-line")) {
                targetDashOffset = "30";
            }
            gsap.to(el, {
                x: 0,
                y: 0,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                opacity: isAnimatedGlow ? 0 : 1,
                strokeDashoffset: targetDashOffset,
                duration: 0.35,
                ease: "power2.out",
            });
        });
    };
    const renderBentoSvg = (cardId) => {
        switch (cardId) {
            case "trusted":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Structural crane lines and foundation dots */}
            <path d="M4 22V6h10" strokeWidth="1" strokeDasharray="2 2"/>
            <path d="M14 6h6v4" className="svg-crane-line" strokeWidth="1"/>
            <path d="M20 10l-1 2h2z" className="svg-hook" fill="currentColor" fillOpacity="0.1"/>
            <path d="M14 14h10" className="svg-girder" strokeWidth="2.5"/>
            <path d="M16 14v4M22 14v4" className="svg-girder" strokeWidth="1"/>
            
            {/* Base anchor dots representing bulletproof legal and structural reviews */}
            <circle cx="4" cy="22" r="1.5" className="svg-dot" fill="currentColor"/>
            <circle cx="9" cy="22" r="1.5" className="svg-dot" fill="currentColor"/>
            <circle cx="14" cy="22" r="1.5" className="svg-dot" fill="currentColor"/>
          </svg>);
            case "design":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Architect luxury blueprint compass drafting tool */}
            <path d="M12 2v3" className="svg-nib" strokeWidth="2"/>
            <path d="M12 5L8 18" className="svg-leg-l" strokeWidth="2"/>
            <path d="M12 5l4 13" className="svg-leg-r" strokeWidth="2"/>
            <path d="M9.5 10h5" strokeWidth="1"/>
            
            {/* Beautiful precision arc representing award-winning forms */}
            <path d="M5 20c3 2 11 2 14 0" className="svg-arc" strokeWidth="1.2" strokeDasharray="30" strokeDashoffset="30"/>
            <circle cx="5" cy="20" r="1" fill="currentColor"/>
            <circle cx="19" cy="20" r="1" fill="currentColor"/>
          </svg>);
            case "connectivity":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Orbital concentric path for Electronic City corridor */}
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
            <path d="M3 12h18" className="svg-signal" strokeWidth="1.5" strokeDasharray="24" strokeDashoffset="24"/>
            <path d="M12 3v18" className="svg-signal" strokeWidth="1.5" strokeDasharray="24" strokeDashoffset="24"/>
            
            {/* Hub node connections */}
            <circle cx="12" cy="12" r="3" className="svg-node" fill="currentColor" fillOpacity="0.1"/>
            <circle cx="6" cy="12" r="2" className="svg-node" fill="currentColor"/>
            <circle cx="18" cy="12" r="2" className="svg-node" fill="currentColor"/>
            <circle cx="12" cy="6" r="2" className="svg-node" fill="currentColor"/>
            <circle cx="12" cy="18" r="2" className="svg-node" fill="currentColor"/>
          </svg>);
            case "appreciation":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Financial compound bar chart rising */}
            <rect x="3" y="16" width="3" height="5" rx="0.5" className="svg-bar" fill="currentColor" fillOpacity="0.1"/>
            <rect x="9" y="11" width="3" height="10" rx="0.5" className="svg-bar" fill="currentColor" fillOpacity="0.1"/>
            <rect x="15" y="6" width="3" height="15" rx="0.5" className="svg-bar" fill="currentColor" fillOpacity="0.1"/>
            
            {/* Dynamic rising trend lines */}
            <path d="M3 17l6-5 6-5 6-3" className="svg-trend-line" strokeWidth="2" strokeDasharray="30" strokeDashoffset="30"/>
            <path d="M17 4h4v4" className="svg-trend-line" strokeWidth="2" strokeDasharray="10" strokeDashoffset="10"/>
            
            {/* Star symbolizing elite high-yield ROI */}
            <path d="M21 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" className="svg-roi-star" fill="currentColor" stroke="none" opacity="0"/>
          </svg>);
            case "support":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Luxury concierge table bell represent direct property care */}
            <path d="M3 19h18" strokeWidth="2"/>
            <path d="M5 19c0-5 3-8 7-8s7 3 7 8" className="svg-bell-dome" fill="currentColor" fillOpacity="0.1"/>
            <path d="M12 11V8" className="svg-bell-push" strokeWidth="2"/>
            <circle cx="12" cy="7" r="1.5" className="svg-bell-push" fill="currentColor"/>
            
            {/* Radiant sounding waves popping out upon touch */}
            <path d="M8 5C7 6 6 8 6 10" className="svg-sound" opacity="0" strokeWidth="1"/>
            <path d="M16 5c1 1 2 3 2 5" className="svg-sound" opacity="0" strokeWidth="1"/>
            <path d="M5 3C3.5 5 2.5 8 2.5 11" className="svg-sound" opacity="0" strokeWidth="1"/>
            <path d="M19 3c1.5 2 2.5 5 2.5 8" className="svg-sound" opacity="0" strokeWidth="1"/>
          </svg>);
            default:
                return null;
        }
    };
    return (<div className="grid grid-cols-1 md:grid-cols-6 gap-6" id="bento-grid-container">
      {/* Dynamic Item 1 (Double size grid card for Developer Trust) */}
      <div className="md:col-span-3 lg:col-span-4 p-8 rounded-2xl border border-royal-gold/20 bg-white shadow-md relative overflow-hidden group hover:shadow-xl hover:border-royal-gold/45 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer" id="bento-card-trusted" onMouseEnter={() => handleMouseEnter("trusted")} onMouseLeave={() => handleMouseLeave("trusted")}>
        {/* Subtle absolute decorative numbers */}
        <span className="absolute top-4 right-8 font-numbers text-7xl font-extrabold text-royal-gold/10 select-none group-hover:scale-110 transition-transform duration-500">
          {bentoItems[0].num}
        </span>

        {/* Floating gradient border circle */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-gold/5 rounded-full blur-2xl group-hover:bg-royal-gold/10 transition-all duration-700"/>

        <div className="flex flex-col h-full justify-between gap-6 relative z-10">
          <div>
            <div className="bento-icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
              {renderBentoSvg("trusted")}
            </div>
            
            <h4 className="font-serif text-2xl font-bold text-charcoal mt-4 group-hover:text-luxury-red transition-colors">
              {bentoItems[0].title}
            </h4>
            <p className="text-xs font-semibold text-luxury-red font-sans uppercase tracking-wider mt-1">
              {bentoItems[0].subtitle}
            </p>
          </div>

          <p className="text-xs text-charcoal/70 font-sans leading-relaxed max-w-xl">
            {bentoItems[0].description} With multiple premium enclaves successfully commissioned in South Bangalore, MRCL stands for bulletproof legal title reviews, zero construction delays, and elite structural engineering parameters.
          </p>

          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-royal-gold font-sans">
            <Sparkles className="w-3.5 h-3.5"/>
            <span>Over 1,200 Happy Resident Units Delivered</span>
          </div>
        </div>
      </div>

      {/* Dynamic Item 2 (Award Winning Design) */}
      <div className="md:col-span-3 lg:col-span-2 p-8 rounded-2xl border border-royal-gold/20 bg-white shadow-md relative overflow-hidden group hover:shadow-xl hover:border-royal-gold/45 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer" id="bento-card-design" onMouseEnter={() => handleMouseEnter("design")} onMouseLeave={() => handleMouseLeave("design")}>
        <span className="absolute top-4 right-8 font-numbers text-7xl font-extrabold text-royal-gold/10 select-none group-hover:scale-110 transition-transform duration-500">
          {bentoItems[1].num}
        </span>

        <div className="flex flex-col h-full justify-between gap-6 relative z-10">
          <div>
            <div className="bento-icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
              {renderBentoSvg("design")}
            </div>

            <h4 className="font-serif text-xl font-bold text-charcoal mt-4 group-hover:text-luxury-red transition-colors">
              {bentoItems[1].title}
            </h4>
            <p className="text-[10px] font-semibold text-luxury-red font-sans uppercase tracking-wider mt-1">
              {bentoItems[1].subtitle}
            </p>
          </div>

          <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
            {bentoItems[1].description}
          </p>
        </div>
      </div>

      {/* Dynamic Item 3 (Prime Connectivity) */}
      <div className="md:col-span-2 p-8 rounded-2xl border border-royal-gold/20 bg-white shadow-md relative overflow-hidden group hover:shadow-xl hover:border-royal-gold/45 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer" id="bento-card-connectivity" onMouseEnter={() => handleMouseEnter("connectivity")} onMouseLeave={() => handleMouseLeave("connectivity")}>
        <span className="absolute top-4 right-8 font-numbers text-7xl font-extrabold text-royal-gold/10 select-none group-hover:scale-110 transition-transform duration-500">
          {bentoItems[2].num}
        </span>

        <div className="flex flex-col h-full justify-between gap-6 relative z-10">
          <div>
            <div className="bento-icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
              {renderBentoSvg("connectivity")}
            </div>

            <h4 className="font-serif text-xl font-bold text-charcoal mt-4 group-hover:text-luxury-red transition-colors">
              {bentoItems[2].title}
            </h4>
            <p className="text-[10px] font-semibold text-luxury-red font-sans uppercase tracking-wider mt-1">
              {bentoItems[2].subtitle}
            </p>
          </div>

          <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
            {bentoItems[2].description}
          </p>
        </div>
      </div>

      {/* Dynamic Item 4 (High Appreciation & ROI) */}
      <div className="md:col-span-2 p-8 rounded-2xl border border-royal-gold/20 bg-white shadow-md relative overflow-hidden group hover:shadow-xl hover:border-royal-gold/45 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer" id="bento-card-appreciation" onMouseEnter={() => handleMouseEnter("appreciation")} onMouseLeave={() => handleMouseLeave("appreciation")}>
        <span className="absolute top-4 right-8 font-numbers text-7xl font-extrabold text-royal-gold/10 select-none group-hover:scale-110 transition-transform duration-500">
          {bentoItems[3].num}
        </span>

        <div className="flex flex-col h-full justify-between gap-6 relative z-10">
          <div>
            <div className="bento-icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
              {renderBentoSvg("appreciation")}
            </div>

            <h4 className="font-serif text-xl font-bold text-charcoal mt-4 group-hover:text-luxury-red transition-colors">
              {bentoItems[3].title}
            </h4>
            <p className="text-[10px] font-semibold text-luxury-red font-sans uppercase tracking-wider mt-1">
              {bentoItems[3].subtitle}
            </p>
          </div>

          <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
            {bentoItems[3].description}
          </p>
        </div>
      </div>

      {/* Dynamic Item 5 (24/7 White-Glove Support) */}
      <div className="md:col-span-2 p-8 rounded-2xl border border-royal-gold/20 bg-white shadow-md relative overflow-hidden group hover:shadow-xl hover:border-royal-gold/45 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer" id="bento-card-support" onMouseEnter={() => handleMouseEnter("support")} onMouseLeave={() => handleMouseLeave("support")}>
        <span className="absolute top-4 right-8 font-numbers text-7xl font-extrabold text-royal-gold/10 select-none group-hover:scale-110 transition-transform duration-500">
          {bentoItems[4].num}
        </span>

        <div className="flex flex-col h-full justify-between gap-6 relative z-10">
          <div>
            <div className="bento-icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
              {renderBentoSvg("support")}
            </div>

            <h4 className="font-serif text-xl font-bold text-charcoal mt-4 group-hover:text-luxury-red transition-colors">
              {bentoItems[4].title}
            </h4>
            <p className="text-[10px] font-semibold text-luxury-red font-sans uppercase tracking-wider mt-1">
              {bentoItems[4].subtitle}
            </p>
          </div>

          <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
            {bentoItems[4].description}
          </p>
        </div>
      </div>
    </div>);
}
