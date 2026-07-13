import React from "react";
import BentoGridWhy from "./BentoGridWhy";
export default function WhySection() {
    return (<section className="py-24 bg-soft-white border-t border-b border-royal-gold/10 px-4 sm:px-6 lg:px-8" id="why-mrcl">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Architectural Prestige
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
            The MRCL Infrastructure Standard
          </h2>
          <p className="text-xs text-charcoal/65 font-sans mt-2 leading-relaxed">
            Explore why our enclaves command the highest customer retention rates and outstanding land valuation margins in South Bangalore.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGridWhy />

      </div>
    </section>);
}
