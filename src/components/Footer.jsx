import React from "react";
import Logo from "./Logo";
import LogoImg from "../assets/images/logo-img.png"
import { Mail, MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react";
export default function Footer({ onOpenBookingModal }) {
    const currentYear = new Date().getFullYear();
    return (<footer className="bg-white border-t border-royal-gold/20 pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer-grid">
          {/* Brand & Address Column */}
          <div className="flex flex-col gap-5" id="footer-col-brand">
            {/* <Logo showTagline={true}/> */}
            <img src={LogoImg} alt="logo" className="w-full h-12 " />
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed mt-2">
              MRCL Infrastructure Pvt Ltd is South Bangalore's premier luxury residential developer, combining structural transparency, Vastu-compliant architecture, and state-of-the-art civil engineering.
            </p>
            <div className="flex flex-col gap-3 mt-2 text-xs font-sans text-charcoal/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-red flex-shrink-0 mt-0.5"/>
                <span>
                  MRCL Infrastructure Pvt Ltd
                    #164, 1st Floor, 5th Main, 7th Cross,
                    Kengeri Satellite Town, Bengaluru - 560 060.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4" id="footer-col-links">
            <h4 className="font-serif text-sm font-bold tracking-wider text-luxury-red uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold font-sans uppercase tracking-widest text-charcoal/70">
              <a href="#about" className="hover:text-luxury-red transition-colors">
                About Developer
              </a>
              <a href="#lifestyle" className="hover:text-luxury-red transition-colors">
                Villa Interiors
              </a>
              <a href="#villas" className="hover:text-luxury-red transition-colors">
                Independent Luxury
              </a>
              <a href="#amenities" className="hover:text-luxury-red transition-colors">
                Clubhouse Amenities
              </a>
              <a href="#location" className="hover:text-luxury-red transition-colors">
                Location Map
              </a>
              <a href="#faqs" className="hover:text-luxury-red transition-colors">
                Client FAQs
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4" id="footer-col-contact">
            <h4 className="font-serif text-sm font-bold tracking-wider text-luxury-red uppercase">
              VIP Sales Liaison
            </h4>
            <div className="flex flex-col gap-3 text-xs font-sans text-charcoal/85">
              <div className="flex items-center gap-0 hover:gap-2 group transition-all duration-300">
                <Phone className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-royal-gold flex-shrink-0"/>
                <a href="tel:+918989399899" className="hover:text-luxury-red transition-colors">
                  +91 898 939 9899
                </a>
              </div>
              <div className="flex items-center gap-0 hover:gap-2 group transition-all duration-300">
                <Phone className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-royal-gold flex-shrink-0"/>
                <a href="tel:+919071415999" className="hover:text-luxury-red transition-colors">
                  +91 907 141 5999
                </a>
              </div>
              <div className="flex items-center gap-0 hover:gap-2 group transition-all duration-300">
                <Mail className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-royal-gold flex-shrink-0"/>
                <a href="mailto:info@mrclinfrastructure.com" className="hover:text-luxury-red transition-colors">
                  info@mrclinfrastructure.com
                </a>
              </div>
              <div className="flex items-center gap-0 hover:gap-2 group transition-all duration-300">
                <MessageSquare className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-royal-gold flex-shrink-0"/>
                <a href="https://wa.me/918989399899" target="_blank" rel="noreferrer" className="hover:text-luxury-red transition-colors font-bold text-luxury-red">
                  Chat with VIP Concierge
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Call-To-Action Column */}
          <div className="flex flex-col gap-4" id="footer-col-cta">
            <h4 className="font-serif text-sm font-bold tracking-wider text-luxury-red uppercase">
              Schedule Private Curation
            </h4>
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed">
              Book a bespoke showroom visit. We provide luxury private transport for your guided tour.
            </p>
            <button onClick={onOpenBookingModal} className="mt-2 bg-royal-gold hover:bg-royal-gold-light text-white font-sans text-[10px] font-bold uppercase tracking-widest py-3 px-4 rounded-md transition-all flex items-center justify-center gap-0 hover:gap-2 group gold-shine-effect" id="footer-book-btn">
              <span>Arrange Tour</span>
              <ArrowRight className="w-0 opacity-0 scale-0 group-hover:w-3.5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
            </button>
          </div>
        </div>

        {/* Thin Gold Divider */}
        <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"/>

        {/* Bottom Bar copyright & terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold font-sans uppercase tracking-widest text-charcoal/50">
          <div>
            © {currentYear} MRCL Infrastructure Pvt Ltd. All Rights Reserved.
          </div>
          {/* <div className="flex gap-5">
          <span className="hover:text-luxury-red cursor-pointer">PRICING POLICY</span>
          <span className="hover:text-luxury-red cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-luxury-red cursor-pointer">RERA NO: PRM/KA/RERA/1251/310/PR/090226</span>
        </div> */}
        </div>
      </div>
    </footer>);
}
