import React from "react";
import gsap from "gsap";
import { highlightsData } from "../types";
export default function HighlightsSection() {
    const handleMouseEnter = (cardId) => {
        const card = document.querySelector(`#highlight-card-${cardId}`);
        if (!card)
            return;
        // 1. Elevate the icon container's background & border to represent prestige
        const iconContainer = card.querySelector(".icon-container");
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
        // 2. Handcrafted micro-animations for high-end SVG elements
        switch (cardId) {
            case "spacious": {
                // Expand the isometric walls and push scale/dimension markers outwards
                const wallLeft = card.querySelector(".svg-wall-left");
                const wallRight = card.querySelector(".svg-wall-right");
                const wallFloor = card.querySelector(".svg-wall-floor");
                const arrowX = card.querySelector(".svg-arrow-x");
                const arrowY = card.querySelector(".svg-arrow-y");
                if (wallLeft)
                    gsap.to(wallLeft, { x: -2, y: -1, duration: 0.4, ease: "power2.out" });
                if (wallRight)
                    gsap.to(wallRight, { x: 2, y: -1, duration: 0.4, ease: "power2.out" });
                if (wallFloor)
                    gsap.to(wallFloor, { scale: 1.08, transformOrigin: "center bottom", duration: 0.4, ease: "power2.out" });
                if (arrowX)
                    gsap.to(arrowX, { x: -4, duration: 0.4, ease: "back.out(2)" });
                if (arrowY)
                    gsap.to(arrowY, { y: 4, duration: 0.4, ease: "back.out(2)" });
                break;
            }
            case "garden": {
                // Grow leaves, sway stems, and blossom dynamic pollen dots
                const stem = card.querySelector(".svg-stem");
                const leafL = card.querySelector(".svg-leaf-l");
                const leafR = card.querySelector(".svg-leaf-r");
                const leafC = card.querySelector(".svg-leaf-c");
                const pollen = card.querySelectorAll(".svg-pollen");
                if (stem)
                    gsap.to(stem, { scaleY: 1.12, transformOrigin: "center bottom", duration: 0.4, ease: "back.out(1.5)" });
                if (leafL)
                    gsap.to(leafL, { scale: 1.25, rotation: -8, transformOrigin: "bottom right", duration: 0.5, ease: "elastic.out(1.2, 0.5)" });
                if (leafR)
                    gsap.to(leafR, { scale: 1.25, rotation: 8, transformOrigin: "bottom left", duration: 0.5, ease: "elastic.out(1.2, 0.5)" });
                if (leafC)
                    gsap.to(leafC, { y: -3, scale: 1.1, transformOrigin: "center bottom", duration: 0.4, ease: "back.out(2)" });
                gsap.fromTo(pollen, { y: 4, opacity: 0, scale: 0.3 }, { y: -8, opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" });
                break;
            }
            case "interiors": {
                // Spin sparkles, scale chandelier chain, and pulse glow rings
                const sparkles = card.querySelectorAll(".svg-sparkle");
                const glowRing = card.querySelector(".svg-glow-ring");
                const pendant = card.querySelector(".svg-pendant");
                if (glowRing) {
                    gsap.fromTo(glowRing, { scale: 0.8, opacity: 0 }, { scale: 1.4, opacity: 0.45, duration: 0.5, ease: "power2.out" });
                }
                if (pendant) {
                    gsap.to(pendant, {
                        rotation: 12,
                        transformOrigin: "center top",
                        duration: 0.3,
                        yoyo: true,
                        repeat: 1,
                        ease: "power1.inOut"
                    });
                }
                gsap.to(sparkles, {
                    scale: 1.3,
                    rotation: 90,
                    transformOrigin: "center",
                    stagger: 0.1,
                    duration: 0.4,
                    ease: "back.out(1.8)",
                });
                break;
            }
            case "balconies": {
                // Slowly rise sunset sun, sway clouds, and ripple water lines
                const sun = card.querySelector(".svg-sun");
                const cloudL = card.querySelector(".svg-cloud-l");
                const cloudR = card.querySelector(".svg-cloud-r");
                const waves = card.querySelectorAll(".svg-wave");
                if (sun)
                    gsap.to(sun, { y: -6, fillOpacity: 0.35, duration: 0.5, ease: "power2.out" });
                if (cloudL)
                    gsap.to(cloudL, { x: -3, duration: 0.4, ease: "power1.out" });
                if (cloudR)
                    gsap.to(cloudR, { x: 3, duration: 0.4, ease: "power1.out" });
                gsap.to(waves, {
                    x: 2,
                    yoyo: true,
                    repeat: 3,
                    stagger: 0.06,
                    duration: 0.15,
                    ease: "power1.inOut",
                });
                break;
            }
            case "independent": {
                // Expand horizontal column isolation gap and trigger center firewall shield pulse
                const colLeft = card.querySelector(".svg-col-left");
                const colRight = card.querySelector(".svg-col-right");
                const boundary = card.querySelector(".svg-boundary");
                const centerShield = card.querySelector(".svg-center-shield");
                if (colLeft)
                    gsap.to(colLeft, { x: -3, duration: 0.4, ease: "power2.out" });
                if (colRight)
                    gsap.to(colRight, { x: 3, duration: 0.4, ease: "power2.out" });
                if (boundary) {
                    gsap.fromTo(boundary, { strokeDashoffset: "20" }, { strokeDashoffset: "0", duration: 0.5, ease: "power1.out" });
                }
                if (centerShield) {
                    gsap.fromTo(centerShield, { scale: 0.7, opacity: 0 }, { scale: 1.15, opacity: 1, duration: 0.4, ease: "back.out(2)" });
                }
                break;
            }
            case "parking": {
                // Spin wheels, slide car forward, turn on glowing headlight rays
                const car = card.querySelector(".svg-car");
                const wheelF = card.querySelector(".svg-wheel-f");
                const wheelR = card.querySelector(".svg-wheel-r");
                const lightRay = card.querySelector(".svg-light-ray");
                const plugSpark = card.querySelector(".svg-plug-spark");
                if (car)
                    gsap.to(car, { x: 2, duration: 0.35, ease: "power2.out" });
                if (wheelF)
                    gsap.to(wheelF, { rotation: 360, transformOrigin: "center", duration: 0.5, ease: "power2.out" });
                if (wheelR)
                    gsap.to(wheelR, { rotation: 360, transformOrigin: "center", duration: 0.5, ease: "power2.out" });
                if (lightRay)
                    gsap.to(lightRay, { opacity: 1, scaleX: 1.2, transformOrigin: "left center", duration: 0.3, ease: "power1.out" });
                if (plugSpark) {
                    gsap.timeline()
                        .to(plugSpark, { y: -2, scale: 1.3, transformOrigin: "center", duration: 0.15 })
                        .to(plugSpark, { y: 0, scale: 1, duration: 0.15 });
                }
                break;
            }
            case "kitchen": {
                // Tilt wine glass gracefully, pop open cloche lid, release chef hat steam
                const wineGlass = card.querySelector(".svg-wine");
                const clocheLid = card.querySelector(".svg-cloche");
                const steam = card.querySelectorAll(".svg-steam");
                if (wineGlass) {
                    gsap.to(wineGlass, {
                        rotation: -14,
                        transformOrigin: "center bottom",
                        duration: 0.35,
                        ease: "power2.out"
                    });
                }
                if (clocheLid) {
                    gsap.to(clocheLid, {
                        y: -4,
                        rotation: 6,
                        transformOrigin: "right bottom",
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    });
                }
                gsap.fromTo(steam, { y: 4, opacity: 0, scaleY: 0.4 }, { y: -4, opacity: 1, scaleY: 1, stagger: 0.08, duration: 0.45, ease: "power1.out" });
                break;
            }
            case "ventilation": {
                // High-speed wind turbine spin and stream lines scanning across
                const fanBlades = card.querySelector(".svg-fan");
                const windStreams = card.querySelectorAll(".svg-wind");
                if (fanBlades) {
                    gsap.to(fanBlades, {
                        rotation: 360,
                        transformOrigin: "center",
                        duration: 0.8,
                        ease: "power1.out"
                    });
                }
                gsap.fromTo(windStreams, { strokeDashoffset: "24", opacity: 0.3 }, { strokeDashoffset: "0", opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" });
                break;
            }
            case "community": {
                // Gates open symmetrically, and back glow shines outwards
                const gateL = card.querySelector(".svg-gate-l");
                const gateR = card.querySelector(".svg-gate-r");
                const backGlow = card.querySelector(".svg-back-glow");
                const roof = card.querySelector(".svg-roof");
                if (gateL)
                    gsap.to(gateL, { x: -4, scaleX: 0.7, transformOrigin: "left center", duration: 0.45, ease: "power2.out" });
                if (gateR)
                    gsap.to(gateR, { x: 4, scaleX: 0.7, transformOrigin: "right center", duration: 0.45, ease: "power2.out" });
                if (roof)
                    gsap.to(roof, { y: -1.5, duration: 0.35, ease: "power1.out" });
                if (backGlow) {
                    gsap.fromTo(backGlow, { scale: 0.8, opacity: 0 }, { scale: 1.25, opacity: 0.4, duration: 0.4, ease: "back.out(2)" });
                }
                break;
            }
            default:
                break;
        }
    };
    const handleMouseLeave = (cardId) => {
        const card = document.querySelector(`#highlight-card-${cardId}`);
        if (!card)
            return;
        // 1. Reset the outer icon container back to calm slate state
        const iconContainer = card.querySelector(".icon-container");
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
        // 2. Kill active timelines and ease all internal SVGs back to their elegant rest positions
        const elementsToReset = card.querySelectorAll(".svg-wall-left, .svg-wall-right, .svg-wall-floor, .svg-arrow-x, .svg-arrow-y, " +
            ".svg-stem, .svg-leaf-l, .svg-leaf-r, .svg-leaf-c, .svg-pollen, " +
            ".svg-sparkle, .svg-glow-ring, .svg-pendant, " +
            ".svg-sun, .svg-cloud-l, .svg-cloud-r, .svg-wave, " +
            ".svg-col-left, .svg-col-right, .svg-boundary, .svg-center-shield, " +
            ".svg-car, .svg-wheel-f, .svg-wheel-r, .svg-light-ray, .svg-plug-spark, " +
            ".svg-wine, .svg-cloche, .svg-steam, " +
            ".svg-fan, .svg-wind, " +
            ".svg-gate-l, .svg-gate-r, .svg-back-glow, .svg-roof");
        elementsToReset.forEach((el) => {
            gsap.killTweensOf(el);
            const isHeaderGlow = el.classList.contains("svg-back-glow") || el.classList.contains("svg-center-shield");
            const isLightRay = el.classList.contains("svg-light-ray") || el.classList.contains("svg-steam") || el.classList.contains("svg-pollen");
            gsap.to(el, {
                x: 0,
                y: 0,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                opacity: isLightRay ? 0 : 1,
                fillOpacity: el.classList.contains("svg-sun") ? 0.1 : undefined,
                strokeDashoffset: el.classList.contains("svg-boundary") ? "20" : undefined,
                duration: 0.35,
                ease: "power2.out",
            });
        });
    };
    // Luxury blueprint-styled Custom SVGs for high-fidelity GSAP triggers
    const renderInteractiveSvg = (cardId) => {
        switch (cardId) {
            case "spacious":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Elegant Room Dimensions box isometric style */}
            <path d="M12 21l-8-4.5V8.5L12 4l8 4.5v8L12 21z" strokeDasharray="2 2" stroke="currentColor" strokeWidth="1" className="svg-wall-floor"/>
            <path d="M12 4v17" stroke="currentColor" strokeWidth="1" className="svg-wall-floor"/>
            <path d="M4 8.5L12 13l8-4.5" stroke="currentColor" strokeWidth="1" className="svg-wall-floor"/>
            
            {/* Wall outlines */}
            <path d="M4 16.5l8 4.5" className="svg-wall-left" strokeWidth="2"/>
            <path d="M12 21l8-4.5" className="svg-wall-right" strokeWidth="2"/>
            
            {/* Isometric architectural arrows */}
            <path d="M5 11l2.5-1.5M19 11l-2.5-1.5" className="svg-arrow-x" strokeWidth="2"/>
            <path d="M12 6.5l-2.5-1.5M12 6.5l2.5-1.5" className="svg-arrow-y" strokeWidth="2"/>
          </svg>);
            case "garden":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Planter stem */}
            <path d="M12 22V10" className="svg-stem" strokeWidth="2"/>
            <path d="M7 22h10" strokeWidth="1"/>
            
            {/* Hand-sculpted elegant leaves */}
            <path d="M12 14c-2.5-1-4-3.5-4-6s2.5-1 4 0" className="svg-leaf-l"/>
            <path d="M12 14c2.5-1 4-3.5 4-6s-2.5-1-4 0" className="svg-leaf-r"/>
            <path d="M12 10C12 7.5 11.5 5 12 3c.5 2 0 4.5 0 7z" className="svg-leaf-c" fill="currentColor" fillOpacity="0.1"/>

            {/* Rising pollen specs */}
            <circle cx="8" cy="4" r="1" className="svg-pollen" fill="currentColor" opacity="0"/>
            <circle cx="12" cy="2" r="1" className="svg-pollen" fill="currentColor" opacity="0"/>
            <circle cx="16" cy="5" r="1" className="svg-pollen" fill="currentColor" opacity="0"/>
          </svg>);
            case "interiors":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Chandelier or Crystal Pendant outline */}
            <path d="M12 2v4" className="svg-pendant" strokeWidth="2"/>
            <path d="M8 8h8" className="svg-pendant" strokeWidth="1"/>
            <path d="M12 8l-4 4h8l-4-4z" className="svg-pendant" fill="currentColor" fillOpacity="0.1"/>
            
            {/* Glow outer ring */}
            <circle cx="12" cy="12" r="5" className="svg-glow-ring" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0"/>
            
            {/* Sparkling stars */}
            <path d="M4 17l1.5-1.5L4 14l-1.5 1.5z" className="svg-sparkle" fill="currentColor"/>
            <path d="M20 7l1.5-1.5L20 4l-1.5 1.5z" className="svg-sparkle" fill="currentColor"/>
            <path d="M18 18l1-1-1-1-1 1z" className="svg-sparkle" fill="currentColor"/>
          </svg>);
            case "balconies":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Crescent sun setting */}
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" className="svg-sun" fill="currentColor" fillOpacity="0.1"/>
            
            {/* clouds drifting left and right */}
            <path d="M4 10c0-1.5 1-2.5 2.5-2.5S9 8.5 9 10" className="svg-cloud-l" strokeWidth="1"/>
            <path d="M15 8c0-1 1-2 2-2s2 1 2 2" className="svg-cloud-r" strokeWidth="1"/>
            
            {/* waves/breezes below balcony rail */}
            <path d="M2 13h20" className="svg-wave" strokeWidth="1.5"/>
            <path d="M4 16h16" className="svg-wave" strokeWidth="1"/>
            <path d="M7 19h10" className="svg-wave" strokeWidth="1"/>
          </svg>);
            case "independent":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Left structural block */}
            <g className="svg-col-left">
              <rect x="2" y="4" width="6" height="16" rx="1" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
              <path d="M2 8h6M2 12h6M2 16h6" strokeWidth="1"/>
            </g>

            {/* Right structural block */}
            <g className="svg-col-right">
              <rect x="16" y="4" width="6" height="16" rx="1" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
              <path d="M16 8h6M16 12h6M16 16h6" strokeWidth="1"/>
            </g>

            {/* Center fire-break boundary */}
            <path d="M12 2v20" className="svg-boundary" strokeWidth="1" strokeDasharray="3 3"/>
            <circle cx="12" cy="12" r="2.5" className="svg-center-shield" fill="currentColor" opacity="0"/>
          </svg>);
            case "parking":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Sports car profile */}
            <g className="svg-car">
              <path d="M4 14h16l1.5-3c0-1-.8-2-1.8-2H4.3C3.3 9 2.5 10 2.5 11L4 14z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05"/>
              <rect x="4" y="14" width="16" height="3" rx="0.5"/>
              
              {/* wheels */}
              <circle cx="7" cy="17" r="2" className="svg-wheel-f" fill="currentColor"/>
              <circle cx="17" cy="17" r="2" className="svg-wheel-r" fill="currentColor"/>
              
              {/* Glowing Headlamp rays */}
              <path d="M20 12l3-1.5M20 13.5l3.5.5" className="svg-light-ray" opacity="0" strokeWidth="1"/>
            </g>
            
            {/* EV charging plug outline */}
            <path d="M12 4l-2 3h4l-2 3" className="svg-plug-spark" strokeWidth="2"/>
          </svg>);
            case "kitchen":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Platter base */}
            <path d="M3 18h18" strokeWidth="2"/>
            
            {/* Cloche lid */}
            <path d="M6 18c0-4 3-7 6-7s6 3 6 7" className="svg-cloche" fill="currentColor" fillOpacity="0.1"/>
            <circle cx="12" cy="10" r="1" className="svg-cloche"/>

            {/* Wine Glass */}
            <g className="svg-wine">
              <path d="M14 18v-4m0 0a2.5 2.5 0 0 0-2.5-2.5h0A2.5 2.5 0 0 0 9 14"/>
              <path d="M9 14h5v-3H9v3z" fill="currentColor" fillOpacity="0.2"/>
            </g>

            {/* Rising gourmet steam waves */}
            <path d="M10 7C9.5 5.5 10 4.5 10.5 4" className="svg-steam" opacity="0" strokeWidth="1"/>
            <path d="M12 6.5c-.5-1.5 0-2.5.5-3" className="svg-steam" opacity="0" strokeWidth="1"/>
            <path d="M14 7c-.5-1.5 0-2.5.5-3" className="svg-steam" opacity="0" strokeWidth="1"/>
          </svg>);
            case "ventilation":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Minimal wind ring window */}
            <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="2 2"/>
            
            {/* Turbine Fan blades */}
            <g className="svg-fan">
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <path d="M12 12c.5-3 2.5-3 2.5 0s-2 3-2.5 3" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 12c-.5 3-2.5 3-2.5 0s2-3 2.5-3" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 12c-3-.5-3-2.5 0-2.5s3 2 3 2.5" fill="currentColor" fillOpacity="0.2"/>
              <path d="M12 12c3 .5 3 2.5 0 2.5s-3-2-3-2.5" fill="currentColor" fillOpacity="0.2"/>
            </g>

            {/* Breeze streams */}
            <path d="M4 8c2-1 4 1 6 0s4-1 6 0" className="svg-wind" strokeWidth="1" strokeDasharray="24" strokeDashoffset="24"/>
            <path d="M4 16c2-1 4 1 6 0s4-1 6 0" className="svg-wind" strokeWidth="1" strokeDasharray="24" strokeDashoffset="24"/>
          </svg>);
            case "community":
                return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-royal-gold">
            {/* Sunburst background glow */}
            <circle cx="12" cy="12" r="6" className="svg-back-glow" fill="currentColor" opacity="0"/>
            
            {/* Gated Arch / pillars roof */}
            <path d="M3 6h18M3 6l9-3 9 3" className="svg-roof" strokeWidth="2"/>
            <rect x="4" y="6" width="3" height="14" rx="0.5"/>
            <rect x="17" y="6" width="3" height="14" rx="0.5"/>
            
            {/* Left Gate swing */}
            <path d="M7 9h5v9H7V9z" className="svg-gate-l" fill="currentColor" fillOpacity="0.05"/>
            <path d="M7 12h5M7 15h5" className="svg-gate-l"/>

            {/* Right Gate swing */}
            <path d="M12 9h5v9h-5V9z" className="svg-gate-r" fill="currentColor" fillOpacity="0.05"/>
            <path d="M12 12h5M12 15h5" className="svg-gate-r"/>
          </svg>);
            default:
                return null;
        }
    };
    return (<section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="villas">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Architectural Mastery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
            A Symphony of Luxury Highlights
          </h2>
          <p className="text-xs text-charcoal/65 font-sans mt-2 leading-relaxed">
            Every detail is meticulously structured to optimize volume, sunlight ventilation, and personal privacy. Enjoy absolute architectural freedom.
          </p>
        </div>

        {/* Grid Layout 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="villas-highlights-grid">
          {highlightsData.map((card) => (<div key={card.id} className="p-6 rounded-2xl bg-white border border-royal-gold/15 shadow-sm hover:shadow-xl hover:border-royal-gold/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-3 group relative cursor-pointer" id={`highlight-card-${card.id}`} onMouseEnter={() => handleMouseEnter(card.id)} onMouseLeave={() => handleMouseLeave(card.id)}>
              {/* Micro gold top line glow */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-royal-gold group-hover:w-16 transition-all duration-300"/>

              <div className="icon-container w-12 h-12 rounded-xl bg-soft-white border border-royal-gold/25 flex items-center justify-center transition-all duration-300">
                <div id={`highlight-icon-${card.id}`} className="flex items-center justify-center">
                  {renderInteractiveSvg(card.id)}
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-luxury-red transition-colors">
                {card.title}
              </h3>
              
              <p className="text-xs text-charcoal/65 font-sans leading-relaxed">
                {card.description}
              </p>
            </div>))}
        </div>

      </div>
    </section>);
}
