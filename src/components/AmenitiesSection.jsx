import React from "react";
import AmenitiesCircular from "./AmenitiesCircular";
import { VILLA_CLUBHOUSE } from "../constants";
export default function AmenitiesSection() {
    return (<section className="py-24 bg-charcoal text-white px-4 sm:px-6 lg:px-8 overflow-hidden" id="amenities">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-royal-gold">
            World-Class Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1 tracking-tight">
            A Private Sanctuary of Leisure
          </h2>
          <p className="text-xs text-platinum/70 font-sans mt-2 leading-relaxed">
            Indulge in 25+ curated masterclass amenities structured within our grand central clubhouse domain. Complete with concierge hosts and dedicated operations staff.
          </p>
        </div>

        {/* Interactive circular amenities layout */}
        <AmenitiesCircular clubhouseImage={VILLA_CLUBHOUSE}/>

      </div>
    </section>);
}
