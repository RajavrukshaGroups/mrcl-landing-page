import React, { useState, useEffect } from "react";
import { lifestyleSlides } from "../types";
import { ArrowLeft, ArrowRight, ShieldCheck, Paintbrush } from "lucide-react";
import Kitchen from "../assets/images/Kitchen.jpeg"
import Balcony from "../assets/images/Balcony.jpeg"
import Courtyard from "../assets/images/Courtyard.jpeg"
import livingImg from '../assets/images/Living.jpeg'
import bedroomImg from '../assets/images/Suite.jpeg'
import clubHouseImg from '../assets/images/Pathway.png'

export default function StickyLifestyle({ livingImage, bedroomImage, clubhouseImage, }) {
    const [activeIndex, setActiveIndex] = useState(0);
    // Map slide image names to our generated or premium stock CDN assets
    const getImageSrc = (imageName) => {
        switch (imageName) {
            case "living":
                return livingImg;
            case "bedroom":
                return bedroomImg;
            case "clubhouse":
                return clubHouseImg;
            case "kitchen":
                return Kitchen;
            case "garden":
                return Courtyard;
            case "balcony":
                return Balcony;
            default:
                return livingImage;
        }
    };
    const currentSlide = lifestyleSlides[activeIndex];
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % lifestyleSlides.length);
    };
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + lifestyleSlides.length) % lifestyleSlides.length);
    };
    // Autoplay slow slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);
    return (<div className="bg-charcoal text-white rounded-2xl border border-royal-gold/20 shadow-2xl overflow-hidden flex flex-col justify-between" id="lifestyle-showcase-container">
      {/* Horizontal Apple-style menu tab bar */}
      <div className="flex items-center overflow-x-auto justify-start md:justify-center border-b border-white/10 bg-black/40 py-4 px-4 sm:px-6 gap-6 sm:gap-8 scrollbar-none" id="lifestyle-tab-navigation">
        {lifestyleSlides.map((slide, idx) => {
            const isActive = activeIndex === idx;
            return (<button key={slide.id} onClick={() => setActiveIndex(idx)} className={`font-sans text-[10px] font-bold uppercase tracking-widest py-1.5 whitespace-nowrap transition-all duration-300 relative focus:outline-none cursor-pointer ${isActive ? "text-royal-gold scale-105" : "text-white/80 hover:text-white"}`} id={`lifestyle-tab-${slide.id}`}>
              {slide.title.replace("The Grand ", "").replace("Panoramic ", "")}
              {isActive && (<span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-royal-gold animate-scale-x"/>)}
            </button>);
        })}
      </div>

      {/* Main split display viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] sm:min-h-[480px]" id="lifestyle-viewport">
        
        {/* Dynamic Image Canvas (Left / Right depending on focus) */}
        <div className="lg:col-span-7 relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden group">
          <img src={getImageSrc(currentSlide.image)} alt={currentSlide.title} className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out scale-100 group-hover:scale-105" referrerPolicy="no-referrer" key={currentSlide.id} // forces reload with simple fading transitions
     style={{ animation: "fadeInScale 1s ease-out forwards" }}/>

          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-charcoal/20 pointer-events-none"/>

          {/* Left/Right floating controls */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button onClick={handlePrev} className="p-2.5 rounded-full bg-black/60 border border-white/20 hover:border-royal-gold hover:text-royal-gold transition-colors focus:outline-none cursor-pointer" aria-label="Previous Slide">
              <ArrowLeft className="w-4 h-4"/>
            </button>
            <button onClick={handleNext} className="p-2.5 rounded-full bg-black/60 border border-white/20 hover:border-royal-gold hover:text-royal-gold transition-colors focus:outline-none cursor-pointer" aria-label="Next Slide">
              <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>

        {/* Narrative and detail list panel */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-6" id="lifestyle-text-panel">
          <div className="flex flex-col gap-4 animate-fade-in" key={currentSlide.id}>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-royal-gold font-sans bg-royal-gold/10 px-2 py-0.5 rounded border border-royal-gold/20">
                {currentSlide.tagline}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
                {currentSlide.title}
              </h4>
            </div>

            <p className="text-xs text-platinum/80 font-sans leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Structured bullet lists matching Apple standard specifications */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10 text-xs font-sans text-platinum/70">
              <div className="flex items-center gap-2">
                <Paintbrush className="w-4 h-4 text-royal-gold"/>
                <span>Premium structural finishes curated in collaboration with elite decorators</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-royal-gold"/>
                <span>Structurally engineered for noise insulation and Vastu conformity</span>
              </div>
            </div>
          </div>

          {/* Staggered progress bullets */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
            <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase font-sans">
              ZONE {activeIndex + 1} OF {lifestyleSlides.length}
            </span>
            <div className="flex gap-1.5">
              {lifestyleSlides.map((_, idx) => (<button key={`dot-${idx}`} onClick={() => setActiveIndex(idx)} className={`h-1.5 rounded-full transition-all focus:outline-none cursor-pointer ${activeIndex === idx ? "w-6 bg-royal-gold" : "w-1.5 bg-white/20 hover:bg-white/40"}`}/>))}
            </div>
          </div>
        </div>

      </div>
    </div>);
}
