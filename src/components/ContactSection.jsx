// import React from "react";
// import { CheckCircle2 } from "lucide-react";
// import ContactForm from "./ContactForm";
// import { VILLA_EXTERIOR } from "../constants";
// export default function ContactSection() {
//     return (<section className="py-24 bg-soft-white border-t border-royal-gold/25 relative overflow-hidden px-4 sm:px-6 lg:px-8" id="contact">
//       <div className="absolute inset-0 pointer-events-none opacity-5">
//         <img src={VILLA_EXTERIOR} alt="Watermarked Background Villa" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
//       </div>

//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
//         {/* Narrative Column */}
//         <div className="lg:col-span-6 flex flex-col gap-6" id="final-cta-narrative">
//           <div>
//             <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red bg-white px-2 py-0.5 rounded border border-royal-gold/15">
//               Limited Supply Curation
//             </span>
//             <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mt-2.5 tracking-tight leading-tight">
//               Own Your <br />
//               Dream Villa Today
//             </h2>
//             <p className="text-sm text-charcoal/70 font-sans mt-3 leading-relaxed max-w-md">
//               Secure pre-launch capital advantages and choice layout alignments. Schedule your private luxury shuttle tour and walkthrough of our active structural sites and mockup villas.
//             </p>
//           </div>

//           {/* Quick benefits check lists */}
//           <div className="flex flex-col gap-3 text-xs font-bold font-sans text-charcoal/80">
//             <div className="flex items-center gap-2.5">
//               <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
//               <span>Complimentary VVIP chauffeur travel pick-up & drop</span>
//             </div>
//             <div className="flex items-center gap-2.5">
//               <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
//               <span>Zero-brokerage direct developer booking priority</span>
//             </div>
//             <div className="flex items-center gap-2.5">
//               <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
//               <span>Complete RERA technical documents pack upon verification</span>
//             </div>
//           </div>

//           {/* Direct Telephone */}
//           <div className="flex flex-col gap-1 pt-4 border-t border-platinum/70 max-w-sm">
//             <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest">VIP Direct Hotline</span>
//             <a href="tel:+918989399899" className="font-serif text-xl font-bold text-luxury-red hover:text-royal-gold transition-colors">
//               +91 898 939 9899
//             </a>
//           </div>
//         </div>

//         {/* Form Column */}
//         <div className="lg:col-span-6" id="final-cta-form-col">
//           <ContactForm idPrefix="inline-final"/>
//         </div>

//       </div>
//     </section>);
// }
import React from "react";
import { CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";
import { VILLA_EXTERIOR } from "../constants";
import Villa from '../assets/images/villa_exterior_1783595201071.jpg'
export default function ContactSection() {
    return (<section className="py-24 bg-soft-white border-t border-royal-gold/25 relative overflow-hidden px-4 sm:px-6 lg:px-8" id="contact">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <img src={Villa} alt="Watermarked Background Villa" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Narrative Column */}
        <div className="lg:col-span-6 flex flex-col gap-6" id="final-cta-narrative">
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red bg-white px-2 py-0.5 rounded border border-royal-gold/15">
              Limited Supply Curation
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mt-2.5 tracking-tight leading-tight">
              Own Your <br />
              Luxury Villa Today
            </h2>
            <p className="text-sm text-charcoal/70 font-sans mt-3 leading-relaxed max-w-md">
              Secure pre-launch capital advantages and choice layout alignments. Schedule your private luxury shuttle tour and walkthrough of our active structural sites and mockup villas.
            </p>
          </div>

          {/* Quick benefits check lists */}
          <div className="flex flex-col gap-3 text-xs font-bold font-sans text-charcoal/80">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
              <span>Complimentary VVIP chauffeur travel pick-up & drop</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
              <span>Zero-brokerage direct developer booking priority</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-royal-gold"/>
              <span>Complete RERA technical documents pack upon verification</span>
            </div>
          </div>

          {/* Direct Telephone */}
          <div className="flex flex-col gap-1 pt-4 border-t border-platinum/70 max-w-sm">
            <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest">VIP Direct Hotline</span>
            <a href="tel:+918989399899" className="font-serif text-xl font-bold text-luxury-red hover:text-royal-gold transition-colors">
              +91 898 939 9899
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-6" id="final-cta-form-col">
          <ContactForm idPrefix="inline-final"/>
        </div>

      </div>
    </section>);
}
