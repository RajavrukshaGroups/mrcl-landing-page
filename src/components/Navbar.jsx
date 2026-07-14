import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import LogoImg from "../assets/images/logo-img.png"
import { Menu, X, Phone, Calendar } from "lucide-react";
export default function Navbar({ onOpenBookingModal, onOpenInquiriesDashboard, inquiryCount, }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const navLinks = [
        { label: "Lifestyle", href: "#lifestyle" },
        { label: "Villas", href: "#villas" },
        { label: "Amenities", href: "#amenities" },
        { label: "Location", href: "#location" },
        { label: "Investment", href: "#investment" },
        { label: "FAQs", href: "#faqs" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
            // Dynamic Section Active Tracking
            const sections = ["hero", "about", "villas", "lifestyle", "location", "amenities", "investment", "faqs"];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 160 && rect.bottom >= 160) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-royal-gold/20"
            : "bg-transparent py-5 border-b border-transparent"}`} id="main-navigation-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* MRCL Vector Logo */}
        <a href="#hero" className="flex items-center transition-opacity hover:opacity-90">
          <img src={LogoImg} alt="logo" className="w-full h-12 " />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (<a key={link.href} href={link.href} className={`font-sans text-xs font-semibold uppercase tracking-widest relative py-2 transition-colors duration-300 ${isActive ? "text-luxury-red" : "text-charcoal/70 hover:text-luxury-red"}`}>
                {link.label}
                {/* Active Underline Gold Accent Slide */}
                {isActive && (<span className="absolute bottom-0 left-0 w-full h-[2px] bg-royal-gold animate-fade-in"/>)}
              </a>);
        })}
        </div>

        {/* Desktop Action Buttons Group */}
        <div className="hidden md:flex items-center gap-4" id="nav-action-buttons">
          {/* Admin Inquiries Indicator if there are any submissions */}
          {inquiryCount > 0 && (<button onClick={onOpenInquiriesDashboard} className="relative p-2 rounded-full hover:bg-soft-white border border-royal-gold/30 transition-all flex items-center gap-1 group" title="View Client Inquiries (Admin Panel)" id="admin-inquiries-indicator">
              <span className="absolute -top-1 -right-1 bg-luxury-red text-white text-[10px] w-5 h-5 font-bold rounded-full flex items-center justify-center animate-pulse">
                {inquiryCount}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-luxury-red font-sans px-1 group-hover:text-royal-gold transition-colors">
                Inquiries
              </span>
            </button>)}

          <a href="tel:+919071415999" className="flex items-center gap-0 hover:gap-2 text-xs font-bold font-sans text-charcoal/80 hover:text-luxury-red transition-all duration-300 px-3 py-2 border border-charcoal/20 rounded-full bg-white/40 group overflow-hidden" id="nav-call-link">
            <Phone className="w-0 opacity-0 scale-0 group-hover:w-3.5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-luxury-red flex-shrink-0"/>
            <span>+91 907 141 5999</span>
          </a>

          <button onClick={onOpenBookingModal} className="bg-royal-gold hover:bg-royal-gold-light text-white font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-0 hover:gap-2 gold-shine-effect group overflow-hidden" id="nav-book-visit-btn">
            <Calendar className="w-0 opacity-0 scale-0 group-hover:w-3.5 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
            <span>Book Visit</span>
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex lg:hidden items-center gap-3">
          {inquiryCount > 0 && (<button onClick={onOpenInquiriesDashboard} className="relative p-2 rounded-full hover:bg-soft-white border border-royal-gold/35" id="mobile-inquiries-indicator">
              <span className="absolute -top-1 -right-1 bg-luxury-red text-white text-[9px] w-4.5 h-4.5 font-bold rounded-full flex items-center justify-center">
                {inquiryCount}
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-luxury-red font-sans px-1">Inquiries</span>
            </button>)}

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-charcoal hover:text-luxury-red transition-colors focus:outline-none" aria-label="Toggle Menu" id="mobile-menu-toggle">
            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {mobileMenuOpen && (<div className="lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-b border-royal-gold/20 shadow-xl py-6 px-4 flex flex-col gap-5 animate-slide-down" id="mobile-drawer-menu">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (<a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-sans text-sm font-semibold uppercase tracking-widest text-charcoal hover:text-luxury-red py-2 border-b border-soft-white">
                {link.label}
              </a>))}
          </div>

          <div className="flex flex-col gap-3 pt-3">
            <a href="tel:+919071415999" className="flex items-center justify-center gap-0 hover:gap-2 font-sans font-bold text-sm text-charcoal/80 py-3 border border-charcoal/20 rounded-full group transition-all duration-300">
              <Phone className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-luxury-red flex-shrink-0"/>
              <span>+91 907 141 5999</span>
            </a>
            <button onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
            }} className="w-full bg-royal-gold text-white font-sans font-bold uppercase tracking-widest text-xs py-4 rounded-full shadow-md text-center gold-shine-effect flex items-center justify-center gap-0 hover:gap-2 group transition-all duration-300">
              <Calendar className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
              <span>Book Site Visit</span>
            </button>
          </div>
        </div>)}
    </nav>);
}
