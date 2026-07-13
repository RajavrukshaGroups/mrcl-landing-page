// import React, { useState, useEffect } from "react";
// import { locationFeatures } from "../types";
// import { MapPin, Navigation, Info, CheckCircle2 } from "lucide-react";
// export default function MapInteractive() {
//     const [selectedHotspot, setSelectedHotspot] = useState(locationFeatures[2]); // Default ECity Metro
//     const [hoveredHotspot, setHoveredHotspot] = useState(null);
//     const [shouldAnimate, setShouldAnimate] = useState(false);
//     useEffect(() => {
//         setShouldAnimate(true);
//     }, []);
//     const getCategoryColor = (cat) => {
//         switch (cat) {
//             case "it_park":
//                 return "bg-charcoal text-white border-royal-gold/30";
//             case "connectivity":
//                 return "bg-luxury-red text-white border-royal-gold/30";
//             case "health":
//                 return "bg-[#0d6efd] text-white border-royal-gold/10";
//             case "education":
//                 return "bg-[#198754] text-white border-royal-gold/10";
//             case "leisure":
//                 return "bg-[#6f42c1] text-white border-royal-gold/10";
//             default:
//                 return "bg-royal-gold text-white";
//         }
//     };
//     const getCategoryLabel = (cat) => {
//         return cat.replace("_", " ").toUpperCase();
//     };
//     return (<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="map-interactive-grid">
//       {/* Sidebar Details Panel */}
//       <div className="lg:col-span-4 flex flex-col gap-6" id="map-panel-sidebar">
//         <div>
//           <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
//             Micro-Market Hub
//           </span>
//           <h3 className="font-serif text-3xl font-bold text-charcoal mt-1 tracking-tight">
//             Perfect Electronic City Ingress
//           </h3>
//           <p className="text-xs text-charcoal/70 font-sans mt-2 leading-relaxed">
//             Nestled inside a premium low-density enclave, MRCL Villas offers immediate bypass entry onto high-speed highways, bypass lanes, and the elevated expressway.
//           </p>
//         </div>

//         {/* Selected Landmark Card */}
//         <div className="p-5 rounded-xl border border-royal-gold/30 bg-soft-white shadow-md relative overflow-hidden transition-all duration-300" id="map-selected-feature-card">
//           <div className="absolute top-0 right-0 bg-royal-gold/15 text-royal-gold px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-bl-lg">
//             {getCategoryLabel(selectedHotspot.category)}
//           </div>

//           <div className="flex items-center gap-2.5">
//             <div className={`p-2 rounded-lg ${getCategoryColor(selectedHotspot.category)}`}>
//               <Navigation className="w-4 h-4 rotate-45"/>
//             </div>
//             <div>
//               <h4 className="font-serif text-lg font-bold text-charcoal">
//                 {selectedHotspot.name}
//               </h4>
//               <p className="text-xs font-semibold text-luxury-red font-sans">
//                 Just {selectedHotspot.distance} Commute Sizing
//               </p>
//             </div>
//           </div>

//           <p className="text-xs text-charcoal/70 font-sans mt-4 leading-relaxed border-t border-platinum/60 pt-3">
//             {selectedHotspot.category === "connectivity"
//             ? "Enables rapid bypass avoiding localized signals, seamlessly connecting your garage to key arteries in South Bangalore."
//             : selectedHotspot.category === "it_park"
//                 ? "Home to global IT conglomerates. Drive to work under 10 minutes or use corporate luxury shuttle lines."
//                 : "Guarantees premium convenience for your family's personal lifestyle, medical backup, and elite education."}
//           </p>

//           <div className="flex items-center gap-1.5 mt-4 text-[10px] font-bold text-royal-gold font-sans uppercase tracking-widest">
//             <CheckCircle2 className="w-3.5 h-3.5"/>
//             <span>Chauffeur Service Map Integrated</span>
//           </div>
//         </div>

//         {/* Categories legend */}
//         <div className="grid grid-cols-2 gap-2 text-[10px] font-sans font-bold uppercase tracking-wider">
//           <div className="flex items-center gap-1.5 text-charcoal">
//             <span className="w-2.5 h-2.5 rounded-full bg-charcoal inline-block"/>
//             <span>IT PARKS</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-luxury-red">
//             <span className="w-2.5 h-2.5 rounded-full bg-luxury-red inline-block"/>
//             <span>CONNECTIVITY</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-[#0d6efd]">
//             <span className="w-2.5 h-2.5 rounded-full bg-[#0d6efd] inline-block"/>
//             <span>HEALTHCARE</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-[#198754]">
//             <span className="w-2.5 h-2.5 rounded-full bg-[#198754] inline-block"/>
//             <span>ACADEMIES</span>
//           </div>
//         </div>
//       </div>

//       {/* Vector Styled Map Canvas */}
//       <div className="lg:col-span-8" id="map-canvas-container">
//         <div className="relative aspect-video w-full rounded-2xl bg-charcoal border border-royal-gold/30 shadow-2xl overflow-hidden" style={{ backgroundImage: "radial-gradient(circle, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 100%)" }} id="map-canvas-body">
//           {/* Grid lines to make it look like a high-tech architectural blueprint */}
//           <div className="absolute inset-0 opacity-15" style={{
//             backgroundImage: "linear-gradient(to right, #C9A227 1px, transparent 1px), linear-gradient(to bottom, #C9A227 1px, transparent 1px)",
//             backgroundSize: "40px 40px"
//         }}/>

//           {/* Animated Connecting SVG Golden Paths */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
//             {locationFeatures.map((feat) => {
//             const isSelected = selectedHotspot.id === feat.id;
//             const isHovered = hoveredHotspot === feat.id;
//             const pathId = `path-${feat.id}`;
//             // Coordinates mapped to SVG 100x100 scale (percentages)
//             const startX = 50; // Center MRCL
//             const startY = 50;
//             const endX = feat.coords.x;
//             const endY = feat.coords.y;
//             return (<g key={pathId}>
//                   {/* Glowing background line underactive */}
//                   {(isSelected || isHovered) && (<line x1={startX} y1={startY} x2={endX} y2={endY} stroke="#C9A227" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeOpacity="0.4" className="animate-pulse"/>)}
//                   {/* Draw main line */}
//                   <line x1={startX} y1={startY} x2={endX} y2={endY} stroke={isSelected ? "#C9A227" : "#C9A227"} strokeWidth={isSelected ? "2" : "1"} vectorEffect="non-scaling-stroke" strokeOpacity={isSelected ? "0.9" : "0.45"} strokeDasharray={isSelected ? "5, 5" : "none"} className={isSelected ? "animate-dash" : ""} style={{
//                     strokeDasharray: isSelected ? "8, 4" : "none",
//                     animation: isSelected ? "dash 20s linear infinite" : "none"
//                 }}/>
//                 </g>);
//         })}
//           </svg>

//           {/* Center Marker: MRCL Luxury Villas */}
//           <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 select-none" style={{ left: "50%", top: "50%" }} id="map-center-mrcl-marker">
//             {/* Double Pulsing golden ring - Centered on the pin */}
//             <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-royal-gold/25 rounded-full animate-ping pointer-events-none"/>
//             <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-royal-gold/10 rounded-full animate-ping pointer-events-none duration-1000"/>

//             {/* Red Circle pin */}
//             <div className="relative w-10 h-10 rounded-full bg-luxury-red border-2 border-royal-gold flex items-center justify-center shadow-lg cursor-pointer">
//               <MapPin className="w-5 h-5 text-royal-gold animate-bounce"/>
//             </div>

//             {/* Label positioned below the center without shifting the center height */}
//             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white/95 text-[10px] font-extrabold uppercase tracking-widest text-luxury-red px-2.5 py-1 rounded shadow-md border border-royal-gold/40 whitespace-nowrap">
//               MRCL VILLAS
//             </div>
//           </div>

//           {/* Floating Feature Markers */}
//           {locationFeatures.map((feat) => {
//             const isSelected = selectedHotspot.id === feat.id;
//             const isHovered = hoveredHotspot === feat.id;
//             return (<button key={feat.id} onClick={() => setSelectedHotspot(feat)} onMouseEnter={() => setHoveredHotspot(feat.id)} onMouseLeave={() => setHoveredHotspot(null)} className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col items-center group cursor-pointer" style={{ left: `${feat.coords.x}%`, top: `${feat.coords.y}%` }} id={`map-hotspot-${feat.id}`}>
//                 {/* Node Dot */}
//                 <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md border transition-all duration-300 ${isSelected
//                     ? "bg-royal-gold scale-125 border-white ring-4 ring-royal-gold/20"
//                     : isHovered
//                         ? "bg-royal-gold-light scale-110 border-white"
//                         : "bg-charcoal border-royal-gold/50 hover:bg-royal-gold"}`}>
//                   <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-charcoal" : "bg-royal-gold"}`}/>
//                 </div>

//                 {/* Floating details badge */}
//                 <div className={`absolute bottom-7 bg-white/95 border border-royal-gold/20 px-2.5 py-1.5 rounded shadow-lg flex flex-col items-center pointer-events-none transition-all duration-300 min-w-[110px] text-center z-30 ${isSelected || isHovered
//                     ? "opacity-100 translate-y-0 scale-100"
//                     : "opacity-0 translate-y-2 scale-90"}`}>
//                   <span className="text-[9px] font-extrabold text-charcoal leading-tight">
//                     {feat.name}
//                   </span>
//                   <span className="text-[8px] font-bold text-luxury-red mt-0.5 font-sans">
//                     ⏱️ {feat.distance}
//                   </span>
//                   {/* Downward pointing arrow */}
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-white border-b border-r border-royal-gold/20 rotate-45"/>
//                 </div>
//               </button>);
//         })}

//           {/* Map Compass/Instruction Rose overlay */}
//           <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-[9px] font-bold text-royal-gold/70 tracking-widest font-sans uppercase">
//             <Info className="w-3.5 h-3.5"/>
//             <span>Interactive map: click nodes to calculate routes</span>
//           </div>
//         </div>
//       </div>
//     </div>);
// }


import React, { useState, useEffect } from "react";
import { locationFeatures } from "../types";
import { MapPin, Navigation, Info, CheckCircle2 } from "lucide-react";
import wiproRouteMap from "../assets/images/wipro_route_map_1783922010578.jpg";
import metroRouteMap from "../assets/images/metro_route_map_1783922038638.jpg";
import niceroadRouteMap from "../assets/images/niceroad_route_map_1783922435376.jpg";
import techmahindraRouteMap from "../assets/images/techmahindra_route_map_1783922825436.jpg";
import neomallRouteMap from "../assets/images/neomall_route_map_1783923345516.jpg";
import narayanaRouteMap from "../assets/images/narayana_health_city_route_map_1783923645898.jpg";
import sherwoodRouteMap from "../assets/images/sherwood_route_map_1783923734786.jpg";
import treamisRouteMap from "../assets/images/treamis_route_map_1783923866219.jpg";
import expresswayRouteMap from "../assets/images/expressway_route_map_1783923989795.jpg";

export default function MapInteractive() {
    const [selectedHotspot, setSelectedHotspot] = useState(locationFeatures[2]); // Default ECity Metro
    const [hoveredHotspot, setHoveredHotspot] = useState(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    useEffect(() => {
        setShouldAnimate(true);
    }, []);
    const getCategoryColor = (cat) => {
        switch (cat) {
            case "it_park":
                return "bg-[#1a73e8] text-white border-transparent";
            case "connectivity":
                return "bg-[#f2994a] text-white border-transparent";
            case "health":
                return "bg-[#e91e63] text-white border-transparent";
            case "education":
                return "bg-[#0f9d58] text-white border-transparent";
            case "leisure":
                return "bg-[#9b51e0] text-white border-transparent";
            default:
                return "bg-[#1a73e8] text-white";
        }
    };
    const getCategoryLabel = (cat) => {
        return cat.replace("_", " ").toUpperCase();
    };
    return (<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="map-interactive-grid">
      {/* Sidebar Details Panel */}
      <div className="lg:col-span-4 flex flex-col gap-6" id="map-panel-sidebar">
        <div>
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Micro-Market Hub
          </span>
          <h3 className="font-serif text-3xl font-bold text-charcoal mt-1 tracking-tight">
            Perfect Electronic City Ingress
          </h3>
          <p className="text-xs text-charcoal/70 font-sans mt-2 leading-relaxed">
            Nestled inside a premium low-density enclave, MRCL Villas offers immediate bypass entry onto high-speed highways, bypass lanes, and the elevated expressway.
          </p>
        </div>

        {/* Selected Landmark Card */}
        <div className="p-5 rounded-xl border border-royal-gold/30 bg-soft-white shadow-md relative overflow-hidden transition-all duration-300" id="map-selected-feature-card">
          <div className="absolute top-0 right-0 bg-royal-gold/15 text-royal-gold px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-bl-lg">
            {getCategoryLabel(selectedHotspot.category)}
          </div>

          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${getCategoryColor(selectedHotspot.category)}`}>
              <Navigation className="w-4 h-4 rotate-45"/>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                {selectedHotspot.name}
              </h4>
              <p className="text-xs font-semibold text-luxury-red font-sans">
                Just {selectedHotspot.distance} ({selectedHotspot.time}) Commute
              </p>
            </div>
          </div>

          <p className="text-xs text-charcoal/70 font-sans mt-4 leading-relaxed border-t border-platinum/60 pt-3">
            {selectedHotspot.category === "connectivity"
            ? "Enables rapid bypass avoiding localized signals, seamlessly connecting your garage to key arteries in South Bangalore."
            : selectedHotspot.category === "it_park"
                ? "Home to global IT conglomerates. Drive to work under 10 minutes or use corporate luxury shuttle lines."
                : "Guarantees premium convenience for your family's personal lifestyle, medical backup, and elite education."}
          </p>

          {/* Exact Travel Mode Breakdowns */}
          <div className="mt-4 pt-4 border-t border-platinum/60" id="travel-durations-breakdown">
            <h5 className="text-[10px] font-extrabold text-charcoal tracking-wider uppercase mb-2">
              ⏱️ Exact Travel Durations:
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-charcoal/[0.03] hover:bg-charcoal/[0.07] transition-all p-2 rounded-lg border border-charcoal/5 flex flex-col gap-0.5">
                <span className="text-[9px] font-extrabold text-charcoal/60 uppercase tracking-wider">
                  🚗 Driving
                </span>
                <span className="font-semibold text-charcoal">
                  {selectedHotspot.durations.driving}
                </span>
              </div>
              <div className="bg-charcoal/[0.03] hover:bg-charcoal/[0.07] transition-all p-2 rounded-lg border border-charcoal/5 flex flex-col gap-0.5">
                <span className="text-[9px] font-extrabold text-charcoal/60 uppercase tracking-wider">
                  🚲 Cycling
                </span>
                <span className="font-semibold text-charcoal">
                  {selectedHotspot.durations.cycling}
                </span>
              </div>
              <div className="bg-charcoal/[0.03] hover:bg-charcoal/[0.07] transition-all p-2 rounded-lg border border-charcoal/5 flex flex-col gap-0.5">
                <span className="text-[9px] font-extrabold text-charcoal/60 uppercase tracking-wider">
                  🚶 Walking
                </span>
                <span className="font-semibold text-charcoal">
                  {selectedHotspot.durations.walking}
                </span>
              </div>
              {selectedHotspot.durations.transit ? (
                <div className="bg-charcoal/[0.03] hover:bg-charcoal/[0.07] transition-all p-2 rounded-lg border border-charcoal/5 flex flex-col gap-0.5">
                  <span className="text-[9px] font-extrabold text-charcoal/60 uppercase tracking-wider">
                    🚌 Transit / Shuttle
                  </span>
                  <span className="font-semibold text-charcoal">
                    {selectedHotspot.durations.transit}
                  </span>
                </div>
              ) : (
                <div className="bg-charcoal/[0.01] p-2 rounded-lg border border-charcoal/[0.02] flex items-center justify-center">
                  <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-wider">
                    🚫 Transit N/A
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Google Maps Route Display if available */}
          {["it-park-1", "metro", "nice-road", "it-park-2", "mall", "hospital", "school-2", "school-1", "expressway"].includes(selectedHotspot.id) && (
            <div className="mt-4 pt-4 border-t border-platinum/60" id="google-maps-verified-route-container">
              <span className="text-[10px] font-extrabold text-luxury-red tracking-wider uppercase block mb-2">
                📍 Verified Google Maps Route:
              </span>
              <div className="rounded-xl overflow-hidden border border-royal-gold/20 shadow-inner relative group cursor-pointer bg-charcoal/5 p-1">
                <img 
                  src={
                    selectedHotspot.id === "it-park-1" 
                      ? wiproRouteMap 
                      : selectedHotspot.id === "metro" 
                        ? metroRouteMap 
                        : selectedHotspot.id === "nice-road"
                          ? niceroadRouteMap
                          : selectedHotspot.id === "it-park-2"
                            ? techmahindraRouteMap
                            : selectedHotspot.id === "mall"
                              ? neomallRouteMap
                              : selectedHotspot.id === "hospital"
                                ? narayanaRouteMap
                                : selectedHotspot.id === "school-2"
                                  ? sherwoodRouteMap
                                  : selectedHotspot.id === "school-1"
                                    ? treamisRouteMap
                                    : expresswayRouteMap
                  } 
                  alt={`${selectedHotspot.name} Route Map`} 
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  id="verified-route-image"
                />
                <div className="absolute bottom-3 right-3 bg-charcoal/85 backdrop-blur-xs text-white text-[8px] font-mono px-2 py-0.5 rounded border border-royal-gold/20 font-bold uppercase tracking-wide shadow-md">
                  {selectedHotspot.id === "it-park-1" 
                    ? "9.1 km | 22 Min" 
                    : selectedHotspot.id === "metro" 
                      ? "10.7 km | 28 Min" 
                      : selectedHotspot.id === "nice-road"
                        ? "10.5 km | 26 Min"
                        : selectedHotspot.id === "it-park-2"
                          ? "13.1 km | 32 Min"
                          : selectedHotspot.id === "mall"
                            ? "12.4 km | 27 Min"
                            : selectedHotspot.id === "hospital"
                              ? "13.4 km | 28 Min"
                              : selectedHotspot.id === "school-2"
                                ? "9.0 km | 16 Min"
                                : selectedHotspot.id === "school-1"
                                  ? "5.9 km | 14 Min"
                                  : "10.6 km | 26 Min"}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-1.5 mt-4 text-[10px] font-bold text-royal-gold font-sans uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5"/>
            <span>Chauffeur Service Map Integrated</span>
          </div>
        </div>

        {/* Categories legend */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-sans font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-charcoal">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1a73e8] inline-block"/>
            <span>IT PARKS</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#f2994a]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f2994a] inline-block"/>
            <span>CONNECTIVITY</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#e91e63]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e91e63] inline-block"/>
            <span>HEALTHCARE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#0f9d58]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0f9d58] inline-block"/>
            <span>ACADEMIES</span>
          </div>
        </div>
      </div>

      {/* Vector Styled Map Canvas */}
      <div className="lg:col-span-8" id="map-canvas-container">
        <div className="relative aspect-video w-full rounded-2xl bg-[#f5f5f2] border border-[#dadce0] shadow-xl overflow-hidden" id="map-canvas-body">
          {/* Subtle light terrain coordinates lines */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
            backgroundImage: "radial-gradient(#dadce0 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px"
          }}/>

          {/* Real Schematic Map Vector Layer (Roads, Lakes, Sectors) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100 select-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Water Bodies (Lakes) styled like standard Google Maps water */}
            <path d="M 22 62 C 25 60, 32 64, 34 70 C 32 76, 24 78, 21 72 Z" fill="#aad3df" fillOpacity="1" stroke="#8dbcd1" strokeWidth="0.4" />
            <path d="M 78 28 C 82 25, 86 28, 88 33 C 84 36, 79 34, 78 28 Z" fill="#aad3df" fillOpacity="1" stroke="#8dbcd1" strokeWidth="0.4" />

            {/* NICE Expressway (Thick Orange/Yellow highway with grey casings) */}
            <path d="M -5 12 C 10 16, 15 20, 15 22 C 15 30, 8 70, 8 110" fill="none" stroke="#f6b26b" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M -5 12 C 10 16, 15 20, 15 22 C 15 30, 8 70, 8 110" fill="none" stroke="#ffe082" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M -5 12 C 10 16, 15 20, 15 22 C 15 30, 8 70, 8 110" fill="none" stroke="#ffffff" strokeWidth="0.4" strokeDasharray="1.5, 1.5" strokeLinecap="round" strokeOpacity="0.9" />

            {/* National Highway 44 (Elevated Expressway North-West to South-East) */}
            <path d="M 35 -10 L 75 110" fill="none" stroke="#f6b26b" strokeWidth="3.6" strokeLinecap="round" />
            <path d="M 35 -10 L 75 110" fill="none" stroke="#ffe082" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 35 -10 L 75 110" fill="none" stroke="#ffffff" strokeWidth="0.4" strokeDasharray="2, 2" strokeLinecap="round" strokeOpacity="0.9" />

            {/* Local Minor Streets / Secondary Arterials (Dual stroke for beautiful margins) */}
            {/* Street 1: NICE Road Junction to Phase 1 Tech Zone */}
            <path d="M 15 22 Q 22 35, 20 48 T 32 35 Q 40 30, 48 25" fill="none" stroke="#dadce0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 15 22 Q 22 35, 20 48 T 32 35 Q 40 30, 48 25" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" />
            
            {/* Street 2: Neeladri Road (Tech Mahindra through MRCL Villas to Treamis) */}
            <path d="M 8 48 C 15 48, 35 52, 50 50 C 60 48, 68 42, 72 40 C 76 38, 78 48, 80 55" fill="none" stroke="#dadce0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 8 48 C 15 48, 35 52, 50 50 C 60 48, 68 42, 72 40 C 76 38, 78 48, 80 55" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" />

            {/* Street 3: Central Ingress/E-City Phase 1 Boulevard */}
            <path d="M 32 35 C 38 42, 45 45, 50 50 C 45 62, 40 70, 38 80" fill="none" stroke="#dadce0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 32 35 C 38 42, 45 45, 50 50 C 45 62, 40 70, 38 80" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 50 50 Q 58 62, 62 72" fill="none" stroke="#dadce0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 50 50 Q 58 62, 62 72" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" />

            {/* Street 4: Elevated Expressway Bypass loop to Narayana Health */}
            <path d="M 55 15 C 58 22, 52 35, 50 50" fill="none" stroke="#dadce0" strokeWidth="1.0" strokeLinecap="round" strokeDasharray="1, 1" />
            <path d="M 55 15 C 58 22, 52 35, 50 50" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 48 25 C 58 28, 62 48, 62 72" fill="none" stroke="#dadce0" strokeWidth="1.0" strokeLinecap="round" />
            <path d="M 48 25 C 58 28, 62 48, 62 72" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeLinecap="round" />

            {/* Sector Blocks / Landmarks zones styled after standard Google Maps land-uses */}
            <rect x="16" y="30" width="18" height="12" rx="2" fill="#e8ece9" stroke="#d3dad6" strokeWidth="0.4" />
            <text x="17" y="40" fill="#5f6368" fontSize="1.3" fontFamily="sans-serif" fontWeight="bold">PHASE 1 TECH ZONE</text>

            <rect x="68" y="24" width="16" height="12" rx="2" fill="#e8ece9" stroke="#d3dad6" strokeWidth="0.4" />
            <text x="69" y="34" fill="#5f6368" fontSize="1.3" fontFamily="sans-serif" fontWeight="bold">PHASE 2 TECH PARK</text>

            <rect x="42" y="44" width="16" height="12" rx="3" fill="#e1f5fe" stroke="#b3e5fc" strokeWidth="0.5" />
            <text x="43" y="54" fill="#0288d1" fontSize="1.3" fontFamily="sans-serif" fontWeight="extrabold">MRCL SECTOR</text>

            <rect x="58" y="68" width="18" height="12" rx="2" fill="#fce4ec" stroke="#f8bbd0" strokeWidth="0.4" />
            <text x="59" y="78" fill="#c2185b" fontSize="1.3" fontFamily="sans-serif" fontWeight="bold">HEALTH CITY ZONE</text>

            {/* Background Labels */}
            <text x="4" y="16" fill="#5f6368" fontSize="1.3" fontFamily="sans-serif" fontWeight="bold" transform="rotate(72 4 16)">NICE ROAD</text>
            <text x="43" y="10" fill="#5f6368" fontSize="1.3" fontFamily="sans-serif" fontWeight="bold" transform="rotate(70 43 10)">NH-44 HIGHWAY</text>
            <text x="14" y="53" fill="#70757a" fontSize="1.1" fontFamily="sans-serif">Neeladri Rd</text>
            <text x="70" y="44" fill="#70757a" fontSize="1.1" fontFamily="sans-serif">Treamis Rd</text>

            {/* Modern Google Maps Style Compass Widget */}
            <g transform="translate(92, 12) scale(0.55)">
              <circle r="8" fill="#ffffff" stroke="#dadce0" strokeWidth="0.8" />
              <polygon points="0,-6 2,0 0,-1.5" fill="#ea4335" />
              <polygon points="0,-6 -2,0 0,-1.5" fill="#c5221f" />
              <polygon points="0,6 2,0 0,1.5" fill="#bdc1c6" />
              <polygon points="0,6 -2,0 0,1.5" fill="#e8eaed" />
              <text x="-1.8" y="-9" fill="#3c4043" fontSize="3" fontFamily="sans-serif" fontWeight="bold">N</text>
            </g>
          </svg>

          {/* Animated Connecting SVG Google Maps Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            {locationFeatures.map((feat) => {
              const isSelected = selectedHotspot.id === feat.id;
              const isHovered = hoveredHotspot === feat.id;
              const pathId = `path-${feat.id}`;
              const startX = 50; // Center MRCL
              const startY = 50;
              const endX = feat.coords.x;
              const endY = feat.coords.y;
              
              if (!isSelected && !isHovered) {
                return (
                  <g key={pathId}>
                    <line 
                      x1={startX} 
                      y1={startY} 
                      x2={endX} 
                      y2={endY} 
                      stroke="#bdc1c6" 
                      strokeWidth="1" 
                      strokeDasharray="2, 3" 
                      vectorEffect="non-scaling-stroke" 
                      strokeOpacity="0.4" 
                    />
                  </g>
                );
              }

              return (
                <g key={pathId}>
                  {/* Glowing background aura */}
                  <line 
                    x1={startX} 
                    y1={startY} 
                    x2={endX} 
                    y2={endY} 
                    stroke="#1a73e8" 
                    strokeWidth="5" 
                    vectorEffect="non-scaling-stroke" 
                    strokeOpacity="0.2" 
                    className="animate-pulse"
                  />
                  {/* Thick route outer casing */}
                  <line 
                    x1={startX} 
                    y1={startY} 
                    x2={endX} 
                    y2={endY} 
                    stroke="#1557b0" 
                    strokeWidth="3.2" 
                    vectorEffect="non-scaling-stroke" 
                    strokeOpacity="0.85" 
                    strokeLinecap="round"
                  />
                  {/* Active Google Blue core */}
                  <line 
                    x1={startX} 
                    y1={startY} 
                    x2={endX} 
                    y2={endY} 
                    stroke="#1a73e8" 
                    strokeWidth="1.8" 
                    vectorEffect="non-scaling-stroke" 
                    strokeOpacity="1.0" 
                    strokeLinecap="round"
                  />
                  {/* Dash flow direction overlay */}
                  <line 
                    x1={startX} 
                    y1={startY} 
                    x2={endX} 
                    y2={endY} 
                    stroke="#ffffff" 
                    strokeWidth="0.8" 
                    vectorEffect="non-scaling-stroke" 
                    strokeOpacity="0.8" 
                    strokeDasharray="4, 6" 
                    strokeLinecap="round"
                    style={{
                      animation: "dash 15s linear infinite"
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Marker: MRCL Luxury Villas */}
          <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 select-none" style={{ left: "50%", top: "50%" }} id="map-center-mrcl-marker">
            {/* Double Pulsing Google Red/Blue aura rings */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#ea4335]/20 rounded-full animate-ping pointer-events-none"/>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-[#1a73e8]/10 rounded-full animate-ping pointer-events-none duration-1000"/>

            {/* Red Circle pin */}
            <div className="relative w-9 h-9 rounded-full bg-[#ea4335] border-2 border-white flex items-center justify-center shadow-md cursor-pointer">
              <MapPin className="w-5 h-5 text-white animate-bounce"/>
            </div>

            {/* Label positioned below */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white text-[10px] font-extrabold uppercase tracking-widest text-[#ea4335] px-2 py-0.5 rounded shadow border border-neutral-200 whitespace-nowrap">
              MRCL VILLAS
            </div>
          </div>

          {/* Floating Feature Markers with Category-coded pin dots */}
          {locationFeatures.map((feat) => {
            const isSelected = selectedHotspot.id === feat.id;
            const isHovered = hoveredHotspot === feat.id;
            
            // Map categories to Google Map pin hex codes
            const getMapPinColor = (cat) => {
              switch (cat) {
                case "it_park": return "#1a73e8"; // Blue
                case "connectivity": return "#f2994a"; // Orange
                case "health": return "#e91e63"; // Pink-Red
                case "education": return "#0f9d58"; // Green
                case "leisure": return "#9b51e0"; // Purple
                default: return "#1a73e8";
              }
            };
            const pinColor = getMapPinColor(feat.category);

            return (
              <button 
                key={feat.id} 
                onClick={() => setSelectedHotspot(feat)} 
                onMouseEnter={() => setHoveredHotspot(feat.id)} 
                onMouseLeave={() => setHoveredHotspot(null)} 
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col items-center group cursor-pointer" 
                style={{ left: `${feat.coords.x}%`, top: `${feat.coords.y}%` }} 
                id={`map-hotspot-${feat.id}`}
              >
                {/* Node Dot formatted exactly like standard Google pin anchors */}
                <div 
                  className="w-4.5 h-4.5 rounded-full flex items-center justify-center shadow border-2 transition-all duration-300"
                  style={{
                    backgroundColor: pinColor,
                    borderColor: "#ffffff",
                    transform: isSelected ? "scale(1.25)" : isHovered ? "scale(1.15)" : "scale(1)",
                    boxShadow: isSelected ? `0 0 8px ${pinColor}` : "0 1px 3px rgba(0,0,0,0.3)"
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"/>
                </div>

                {/* Floating details badge */}
                <div className={`absolute bottom-7 bg-white border border-neutral-200 px-2.5 py-1.5 rounded shadow-lg flex flex-col items-center pointer-events-none transition-all duration-300 min-w-[110px] text-center z-30 ${isSelected || isHovered
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-90"}`}>
                  <span className="text-[9px] font-extrabold text-[#3c4043] leading-tight">
                    {feat.name}
                  </span>
                  <span className="text-[8px] font-extrabold text-[#1a73e8] mt-1 font-sans flex items-center justify-center gap-1">
                    <span>📍 {feat.distance}</span>
                    <span className="text-neutral-300">|</span>
                    <span>⏱️ {feat.time}</span>
                  </span>
                  {/* Downward pointing arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-white border-b border-r border-neutral-200 rotate-45"/>
                </div>
              </button>
            );
          })}

          {/* Map Compass/Instruction Rose overlay in standard gray */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-[9px] font-bold text-neutral-500 tracking-widest font-sans uppercase">
            <Info className="w-3.5 h-3.5 text-[#1a73e8]"/>
            <span>Interactive map: click nodes to calculate routes</span>
          </div>
        </div>
      </div>
    </div>);
}
