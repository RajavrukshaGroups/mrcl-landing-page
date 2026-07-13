import React, { useState } from "react";
import { VILLA_LIVING } from "../constants";
import LivingRoom from "../assets/images/villa_living_1783595217244.jpg"
export default function AboutSection() {
    const [activeAboutIndex, setActiveAboutIndex] = useState(0);
    const aboutTimeline = [
        {
            title: "Structural Quality",
            subtitle: "Grade-A FE550 Steel & M35 Concrete",
            desc: "We utilize double-reinforced foundation layers and premium cement brands to ensure structural lifespans exceeding 100 years. Every slab undergoes strict laboratory humidity and crush reviews.",
            metric: "100% Core Grade"
        },
        {
            title: "Total Transparency",
            subtitle: "Escrow Locked & Live Camera Streams",
            desc: "Buyer capital is locked in dedicated project escrows strictly mapped to construction milestones. Homebuyers can monitor their villa concrete casting live via our 24/7 client web portals.",
            metric: "Real-time Auditing"
        },
        {
            title: "Modern Design",
            subtitle: "Passive Airflow & Double Volume",
            desc: "Our architectural blueprints leverage the Bernoulli venturi effect for natural, continuous cooling, paired with gorgeous floor-to-ceiling high-contrast solar glass and gold mullion alignments.",
            metric: "Award-Winning Form"
        },
        {
            title: "Customer First",
            subtitle: "Bespoke Curation Consultation",
            desc: "From selecting your private elevator brand to custom sizing your backyard deck, our architects allocate up to 100 hours of design alterations to make your villa truly yours.",
            metric: "Tailored Curation"
        },
        {
            title: "Active Sustainability",
            subtitle: "Net-Zero Ready Operations",
            desc: "Every villa is equipped with smart water recycling, organic waste digesters, dedicated roof solar provisions, and a high-voltage dual EV fast charger ready in your private garage.",
            metric: "Eco-Luxury Certified"
        }
    ];
    return (<section className="py-24 bg-soft-white border-t border-b border-royal-gold/10 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Image Left */}
        <div className="lg:col-span-6" id="about-visual">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-royal-gold/25 shadow-xl group">
            <img src={LivingRoom} alt="Luxury Lobby Architecture Design" className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105" referrerPolicy="no-referrer"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"/>
            
            <div className="absolute bottom-6 left-6 text-white max-w-sm">
              <h4 className="font-serif text-lg font-bold">Uncompromising Quality</h4>
              <p className="text-xs text-platinum/90 font-sans mt-1">
                Every building block undergoes five separate tiers of structural integrity testing before installation.
              </p>
            </div>
          </div>
        </div>

        {/* Content Right with Interactive Timeline */}
        <div className="lg:col-span-6 flex flex-col gap-6" id="about-narrative">
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
              MRCL Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
              Building Trust Through <br />
              Luxury Living
            </h2>
            <p className="text-xs text-charcoal/75 font-sans mt-2 leading-relaxed">
              We believe that premium homes are not merely structural enclosures; they represent a secure multi-generational vault of memories and family prosperity. Click the tenets below to audit our transparency.
            </p>
          </div>

          {/* Interactive tenets list */}
          <div className="flex flex-col gap-3" id="about-interactive-tabs">
            {aboutTimeline.map((item, idx) => {
            const isActive = activeAboutIndex === idx;
            return (<div key={item.title} onClick={() => setActiveAboutIndex(idx)} className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-white border-royal-gold shadow-md translate-x-2"
                    : "bg-white/40 border-platinum/60 hover:bg-white hover:border-royal-gold/30"}`}>
                  <div className="flex justify-between items-center">
                    <h4 className={`font-serif text-sm font-bold ${isActive ? "text-luxury-red" : "text-charcoal"}`}>
                      {item.title}
                    </h4>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isActive ? "bg-royal-gold/15 text-royal-gold" : "bg-platinum/40 text-charcoal/80"}`}>
                      {item.metric}
                    </span>
                  </div>

                  {isActive && (<div className="mt-2.5 pt-2.5 border-t border-platinum/50 animate-fade-in text-xs font-sans text-charcoal/70 leading-relaxed">
                      <p className="font-bold text-charcoal/85 mb-1">{item.subtitle}</p>
                      {item.desc}
                    </div>)}
                </div>);
        })}
          </div>
        </div>

      </div>
    </section>);
}
