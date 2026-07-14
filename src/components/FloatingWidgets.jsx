import React from "react";
import { Phone, Calendar, MessageSquare, Download, X } from "lucide-react";
import ContactForm from "./ContactForm";
import InquiriesDashboard from "./InquiriesDashboard";
import { IoLogoWhatsapp } from "react-icons/io";

export default function FloatingWidgets({ showFloatingCta, isBookingModalOpen, setIsBookingModalOpen, isBrochureModalOpen, setIsBrochureModalOpen, isAdminDashboardOpen, setIsAdminDashboardOpen, inquiryCount, onRefreshInquiries, scrollToContact, }) {
    return (<>
      {/* 1. Sticky Floating Actions Widgets (Appears post-35% scroll) */}
      {showFloatingCta && (<div className="fixed bottom-14 left-6 z-40 flex flex-col sm:flex-row items-center gap-3 bg-white/95 backdrop-blur-md p-2 rounded-full border border-royal-gold/30 shadow-2xl animate-slide-up" id="sticky-floating-cta-panel">
          <div className="px-4 hidden md:flex flex-col leading-none">
            <span className="font-serif text-[11px] font-bold text-charcoal">MRCL Luxury Villas</span>
            <span className="text-[8px] font-sans font-bold text-luxury-red uppercase tracking-wider mt-0.5">Pre-Launch Sizing</span>
          </div>
          <button onClick={scrollToContact} className="bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all flex items-center justify-center gap-0 hover:gap-1.5 gold-shine-effect cursor-pointer group overflow-hidden">
            <Calendar className="w-0 opacity-0 scale-0 group-hover:w-3.5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
            <span>Book Visit</span>
          </button>
          {/* <button onClick={() => setIsBrochureModalOpen(true)} className="bg-royal-gold hover:bg-royal-gold-light text-white font-sans text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all flex items-center justify-center gap-0 hover:gap-1.5 cursor-pointer group overflow-hidden">
            <Download className="w-0 opacity-0 scale-0 group-hover:w-3.5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
            <span>Brochure</span>
          </button> */}
        </div>)}

      {/* 2. Floating WhatsApp and Phone direct widget (Bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="sticky-contact-nodes">
        <a href="tel:+919071415999" className="w-12 h-12 hover:w-28 bg-white hover:bg-soft-white text-luxury-red rounded-full shadow-2xl border border-royal-gold/30 flex items-center justify-center gap-0 hover:gap-1.5 transition-all duration-300 group overflow-hidden" title="Direct Phone Line" id="floating-call-btn">
          
          <span className="font-serif text-xs font-bold tracking-widest text-luxury-red transition-all duration-300"><Phone /></span>
        </a>
        <a href="https://wa.me/919071415999" target="_blank" rel="noreferrer" className="w-12 h-12 hover:w-28 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center gap-0 hover:gap-1.5 transition-all duration-300 group overflow-hidden relative" title="Direct WhatsApp Chat" id="floating-whatsapp-btn">
          {/* <span className="absolute right-14 bg-charcoal text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-royal-gold/20 pointer-events-none">
           
          </span> */}
          
          <span className="font-sans text-xs font-bold tracking-widest text-white uppercase transition-all duration-300"><IoLogoWhatsapp className="w-8 h-8" /></span>
        </a>
      </div>

      {/* 3. Book Site Visit Dialog Modal */}
      {isBookingModalOpen && (<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-royal-gold/25 animate-scale-up">
            <button onClick={() => setIsBookingModalOpen(false)} className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-luxury-red transition-colors z-10" id="close-booking-modal">
              <X className="w-5 h-5"/>
            </button>
            <ContactForm title="Arrange Chauffeur Visit" subtitle="Submit details below to schedule custom site tours of MRCL Villa sanctuaries." onSuccess={() => setIsBookingModalOpen(false)} idPrefix="modal-booking"/>
          </div>
        </div>)}

      {/* 4. Download Brochure Dialog Modal */}
      {isBrochureModalOpen && (<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-royal-gold/25 animate-scale-up">
            <button onClick={() => setIsBrochureModalOpen(false)} className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-luxury-red transition-colors z-10" id="close-brochure-modal">
              <X className="w-5 h-5"/>
            </button>
            <ContactForm title="Download Digital Brochure" subtitle="Review full RERA site layouts, dimensions, floorplans, and current pricing options." isBrochureDownloadMode={true} onSuccess={() => setIsBrochureModalOpen(false)} idPrefix="modal-brochure"/>
          </div>
        </div>)}

      {/* 5. Administrative Lead Inquiries Dashboard Console */}
      <InquiriesDashboard isOpen={isAdminDashboardOpen} onClose={() => setIsAdminDashboardOpen(false)} onRefresh={onRefreshInquiries}/>
    </>);
}
