import React from "react";
import { Compass } from "lucide-react";
import { southBangaloreTimeline } from "../types";
export default function SouthBangaloreSection() {
    return (<section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="south-bangalore">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Large Left Header Column */}
        <div className="lg:col-span-5" id="south-bangalore-header">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Regional Dominance
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mt-2 tracking-tight leading-tight">
            Why Everyone <br />
            Wants <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-red to-royal-gold">
              South Bangalore.
            </span>
          </h2>
          <p className="text-sm text-charcoal/70 font-sans mt-4 leading-relaxed">
            Unlike congested commercial sectors in Northern and Eastern Bangalore corridors, South Bangalore remains the city's premium residential sanctuary, combining old tree canopies with modern multi-lane infrastructure.
          </p>
          
          <div className="mt-6 p-4 rounded-xl border border-royal-gold/25 bg-royal-gold/5 text-xs font-semibold font-sans text-royal-gold tracking-wider flex items-center gap-2">
            <Compass className="w-5 h-5 text-luxury-red animate-spin-slow"/>
            <span>THE ULTIMATE RESIDENTIAL HIERARCHY</span>
          </div>
        </div>

        {/* Timeline Process Column */}
        <div className="lg:col-span-7 flex flex-col gap-6" id="south-bangalore-timeline-list">
          {southBangaloreTimeline.map((item, idx) => (<div key={item.id} className="flex gap-4 items-start relative group" id={`timeline-node-${item.id}`}>
              {/* Timeline visual bar */}
              <div className="flex flex-col items-center flex-shrink-0 mt-1.5">
                <div className="w-5 h-5 rounded-full border border-royal-gold bg-white group-hover:bg-luxury-red transition-colors flex items-center justify-center text-[10px] font-bold text-royal-gold group-hover:text-white font-numbers">
                  {idx + 1}
                </div>
                {idx < southBangaloreTimeline.length - 1 && (<div className="w-[1px] h-20 bg-gradient-to-b from-royal-gold to-platinum"/>)}
              </div>

              {/* Text */}
              <div className="flex-1 pb-4 bg-soft-white border border-royal-gold/10 p-4 rounded-xl group-hover:border-royal-gold/30 transition-colors">
                <h4 className="font-serif text-base font-bold text-charcoal group-hover:text-luxury-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] font-semibold text-royal-gold font-sans uppercase tracking-widest mt-0.5">
                  {item.subtitle}
                </p>
                <p className="text-xs text-charcoal/65 font-sans mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>))}
        </div>

      </div>
    </section>);
}
