import React, { useState, useEffect } from "react";
import { amenitiesData } from "../types";
import { Sparkles, Info } from "lucide-react";
import Clubhouse from '../assets/images/villa_clubhouse_1783595232510.jpg'
export default function AmenitiesCircular({ clubhouseImage }) {
    const [activeAmenity, setActiveAmenity] = useState(amenitiesData[0]); // Default to Infinity Pool
    const [rotationOffset, setRotationOffset] = useState(0);
    // Slow orbital rotation animation effect for background rings
    useEffect(() => {
        const interval = setInterval(() => {
            setRotationOffset((prev) => (prev + 0.15) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);
    return (<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="amenities-dark-root">
      {/* Narrative Side Column */}
      <div className="lg:col-span-4 flex flex-col gap-6" id="amenities-narrative">
        <div>
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-royal-gold">
            The Elite Clubhouse
          </span>
          <h3 className="font-serif text-3xl font-bold text-white mt-1 tracking-tight">
            Club Pavilions Curation
          </h3>
          <p className="text-xs text-platinum/70 font-sans mt-2 leading-relaxed">
            Spanning over 15,000 sq.ft of pure modern architectural luxury, the central clubhouse serves as the focal social sanctuary for MRCL residents.
          </p>
        </div>

        {/* Selected Amenity Info Display Panel */}
        <div className="p-6 rounded-xl border border-royal-gold/30 bg-charcoal/80 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300" id="amenity-detail-panel">
          {/* Subtle top indicator */}
          <div className="absolute top-0 left-0 w-16 h-[2px] bg-royal-gold"/>

          <div className="flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label="amenity-icon">
              {activeAmenity.icon}
            </span>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                {activeAmenity.name}
              </h4>
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-royal-gold">
                MRCL Grand Amenity
              </p>
            </div>
          </div>

          <p className="text-xs text-platinum/75 font-sans mt-4 leading-relaxed">
            {activeAmenity.description} Designed to world-class hospitality standards with natural stone floor finishes, custom designer layouts, and active service staff.
          </p>

          <div className="flex items-center gap-1.5 mt-5 text-[9px] font-bold text-royal-gold/80 font-sans uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-royal-gold animate-spin"/>
            <span>Reserved for Residents</span>
          </div>
        </div>

        {/* Info node */}
        <div className="flex items-start gap-2 text-[10px] text-platinum/40 font-sans mt-2 italic">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5"/>
          <span>Hover or tap the orbiting icons to explore the specifications of each world-class amenity.</span>
        </div>
      </div>

      {/* Orbit/Circle Core Layout Container */}
      <div className="lg:col-span-8 flex justify-center" id="amenities-circle-canvas">
        <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center" id="circular-orbit-stage">
          
          {/* Outer Orbit Line with rotating dash offset */}
          <div className="absolute inset-0 rounded-full border border-royal-gold/20 pointer-events-none" style={{ transform: `rotate(${rotationOffset}deg)` }}/>
          {/* Inner Helper Ring */}
          <div className="absolute w-[80%] h-[80%] rounded-full border border-royal-gold/10 pointer-events-none"/>

          {/* Central Visual: Glowing Clubhouse Image and Ring */}
          <div className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full border-2 border-royal-gold/40 shadow-[0_0_30px_rgba(201,162,39,0.25)] overflow-hidden z-20 bg-charcoal">
            <img src={Clubhouse} alt="MRCL Premium Clubhouse" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" referrerPolicy="no-referrer"/>
            {/* Soft inner vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"/>
            <div className="absolute bottom-3 left-0 w-full text-center">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-royal-gold font-sans bg-charcoal/80 px-2 py-0.5 rounded border border-royal-gold/30">
                Clubhouse
              </span>
            </div>
          </div>

          {/* Orbiting Amenity Hotspot Nodes */}
          {amenitiesData.map((amenity) => {
            const isSelected = activeAmenity.id === amenity.id;
            // Calculate orbital coordinates mathematically (angles from 0 to 315 deg)
            const angleRad = (amenity.angle * Math.PI) / 180;
            const orbitRadius = 140; // in pixels (for small screen layout, will scale)
            const orbitRadiusSm = 175; // in pixels (for larger screens)
            // We can style using custom CSS variables or calculate and inline them
            return (<button key={amenity.id} onMouseEnter={() => setActiveAmenity(amenity)} onClick={() => setActiveAmenity(amenity)} className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex flex-col items-center justify-center transition-all duration-500 z-30 focus:outline-none cursor-pointer ${isSelected
                    ? "bg-royal-gold border-white text-charcoal scale-125 shadow-[0_0_20px_rgba(201,162,39,0.7)]"
                    : "bg-charcoal border-royal-gold/40 hover:bg-royal-gold/20 hover:border-royal-gold text-white"}`} style={{
                    // Position mathematically
                    transform: `translate(${Math.cos(angleRad) * orbitRadius}px, ${Math.sin(angleRad) * orbitRadius}px)`,
                }} id={`amenity-orbit-${amenity.id}`}>
                {/* Responsive Position Overrides */}
                <span className="text-xl sm:text-2xl" role="img" aria-label={amenity.name}>
                  {amenity.icon}
                </span>

                {/* Micro tooltip label indicator */}
                <span className={`absolute -bottom-5 text-[8px] font-extrabold tracking-widest uppercase text-center font-sans transition-all min-w-[80px] ${isSelected ? "text-royal-gold opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"}`}>
                  {amenity.name.split(" ")[0]}
                </span>
              </button>);
        })}
        </div>
      </div>
    </div>);
}
