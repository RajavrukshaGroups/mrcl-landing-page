import React from "react";
import { VILLA_BEDROOM } from "../constants";
import VillaBedroom from '../assets/images/villa_bedroom_1783595246365.jpg'
export default function PrivacySection() {
    return (<section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="independent-villas-split">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content Column */}
        <div className="lg:col-span-5 flex flex-col gap-6" id="split-villas-text">
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
              Absolute Privacy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
              No Shared Walls. <br />
              100% Personal Freedom.
            </h2>
            <p className="text-xs text-charcoal/70 font-sans mt-2 leading-relaxed">
              Row houses and twin villas compromise your acoustic and personal boundary space. At MRCL, your villa is completely decoupled from adjacent properties, with your own perimeter columns, independent plumbing stacks, and private wrap-around soil beds.
            </p>
          </div>

          {/* Float content cards list */}
          <div className="flex flex-col gap-3.5" id="split-villas-floating-highlights">
            {[
            { title: "Designer Bathrooms", desc: "Equipped with gold-trimmed Hansgrohe fittings and large format vitrified mirrors." },
            { title: "Premium Clubhouse & Fitness", desc: "A private sanctuary hosting high-tech gyms, squash rooms, and lounges." },
            { title: "Secure Safe Gated Sanctum", desc: "Multi-layered perimeter active sensors, thermal cameras, and biometric locks." }
        ].map((feat, idx) => (<div key={feat.title} className="p-4 rounded-xl border border-royal-gold/15 bg-soft-white hover:border-royal-gold/35 transition-colors flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-royal-gold/10 border border-royal-gold/30 text-royal-gold text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal">{feat.title}</h4>
                  <p className="text-[11px] text-charcoal/65 font-sans mt-0.5">{feat.desc}</p>
                </div>
              </div>))}
          </div>
        </div>

        {/* Image & Floating Overlays Column */}
        <div className="lg:col-span-7 relative h-[350px] sm:h-[450px]" id="split-villas-visual">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-royal-gold/20 shadow-2xl">
            <img src={VillaBedroom} alt="Independent Premium Architectural Villa Design" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"/>
          </div>

          {/* Parallax Hover Floating Card 1 */}
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-royal-gold/35 shadow-xl max-w-[200px] hidden sm:flex flex-col gap-1.5 animate-bounce-slow">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-royal-gold font-sans">
              Wide Roads
            </span>
            <p className="text-[10px] text-charcoal/70 leading-relaxed font-sans">
              Spacious 40-foot main thoroughfares with concrete pavers and pedestrian walks.
            </p>
          </div>

          {/* Parallax Hover Floating Card 2 */}
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-royal-gold/35 shadow-xl max-w-[200px] hidden sm:flex flex-col gap-1.5 animate-bounce-slow-delayed">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-luxury-red font-sans">
              Green Spaces
            </span>
            <p className="text-[10px] text-charcoal/70 leading-relaxed font-sans">
              Over 45% open landscaping with custom flower bed gardens and stone reflection pathways.
            </p>
          </div>
        </div>

      </div>
    </section>);
}
