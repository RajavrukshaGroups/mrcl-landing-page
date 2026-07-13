import React from "react";
import LogoImg from "../assets/images/logo.png";
export default function Logo({ className = "", showTagline = true }) {
    return (<div className={`flex items-center gap-0  ${className}`} id="mrcl-logo-container">
      {/* Dynamic Red Circle Vector Icon with Sweeping Double Arrow */}
      <img src={LogoImg} alt="logo" className="w-10 h-10 top-[-12px]" />

      {/* Brand Text Elements */}
      <div className="flex items-center gap-3" id="mrcl-logo-text-group">
        <div className="flex flex-col justify-center leading-none">
          <span className="font-serif text-2xl font-bold tracking-tight text-luxury-red leading-none">
            MRCL
          </span>
          <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-charcoal/80 mt-1 leading-none">
            Infrastructure
          </span>
        </div>

        {showTagline && (<>
            {/* Elegant vertical divider */}
            <div className="h-8 w-[1px] bg-charcoal/30 self-center hidden sm:block"/>
            
            {/* Slogan phrase */}
            <div className="hidden sm:flex flex-col justify-center leading-tight">
              <span className="font-sans font-bold text-xs text-charcoal/85 tracking-wide">
                Think Properties.
              </span>
              <span className="font-sans font-bold text-xs text-charcoal/85 tracking-wide">
                Think <span className="text-luxury-red">MRCL<span className="text-royal-gold">.</span></span>
              </span>
            </div>
          </>)}
      </div>
    </div>);
}
