import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqsData } from "../types";
export default function FaqSection() {
    const [activeFaqId, setActiveFaqId] = useState("faq-1");
    return (<section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="faqs">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Inquiry Clarifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-charcoal/65 font-sans mt-2 leading-relaxed">
            Review immediate answers regarding structural standards, customizations, escrows, and VVIP chauffeur visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4" id="faqs-accordion-list">
          {faqsData.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (<div key={faq.id} className="rounded-xl border border-royal-gold/15 bg-soft-white overflow-hidden transition-all duration-300" id={`faq-node-${faq.id}`}>
                <button onClick={() => setActiveFaqId(isOpen ? null : faq.id)} className="w-full px-6 py-4 flex items-center justify-between text-left font-serif text-sm sm:text-base font-bold text-charcoal focus:outline-none hover:text-luxury-red transition-colors cursor-pointer">
                  <span>{faq.question}</span>
                  {isOpen ? (<ChevronUp className="w-4 h-4 text-royal-gold flex-shrink-0"/>) : (<ChevronDown className="w-4 h-4 text-royal-gold flex-shrink-0"/>)}
                </button>

                {isOpen && (<div className="px-6 pb-5 pt-1.5 border-t border-platinum/40 animate-fade-in text-xs font-sans text-charcoal/70 leading-relaxed">
                    {faq.answer}
                  </div>)}
              </div>);
        })}
        </div>

      </div>
    </section>);
}
