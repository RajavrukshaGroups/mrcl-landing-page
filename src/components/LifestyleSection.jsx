import React from "react";
import StickyLifestyle from "./StickyLifestyle";
import { VILLA_LIVING, VILLA_BEDROOM, VILLA_CLUBHOUSE } from "../constants";

export default function LifestyleSection() {
    return (<section className="py-24 bg-charcoal text-white px-4 sm:px-6 lg:px-8" id="lifestyle">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Heading */}
        <div className="max-w-xl">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-royal-gold">
            Visual Narrative
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1 tracking-tight">
            Experience the Interior Lifestyle
          </h2>
          <p className="text-xs text-platinum/70 font-sans mt-2 leading-relaxed">
            Step inside a showcase of sophisticated interior craft. Swapping channels reveals custom designed spaces detailed to offer luxury rest and gourmet function.
          </p>
        </div>

        {/* Sticky lifestyle component */}
        <StickyLifestyle livingImage={VILLA_LIVING} bedroomImage={VILLA_BEDROOM} clubhouseImage={VILLA_CLUBHOUSE}/>

      </div>
    </section>);
}
