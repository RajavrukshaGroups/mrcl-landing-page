import React from "react";
import MapInteractive from "./MapInteractive";
export default function LocationSection() {
    return (<section className="py-24 bg-soft-white border-t border-b border-royal-gold/15 px-4 sm:px-6 lg:px-8" id="location">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Prime Proximity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
            Bannerughatta Connectivity Masterplan
          </h2>
          <p className="text-xs text-charcoal/65 font-sans mt-2 leading-relaxed">
            Perfect local triangulation. Exit straight onto bypass lanes avoiding congested residential alleys. Drive to corporate blocks under 10 minutes.
          </p>
        </div>

        {/* Interactive map component */}
        <MapInteractive />

      </div>
    </section>);
}
