import React from "react";
import DashboardMetrics from "./DashboardMetrics";
export default function InvestmentSection() {
    return (<section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="investment">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Financially Sound
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1 tracking-tight">
            Calculated Capital Growth
          </h2>
          <p className="text-xs text-charcoal/65 font-sans mt-2 leading-relaxed">
            Monitor real-time appreciation trajectories, expected localized rental yields, and structural land value multiplier curves.
          </p>
        </div>

        {/* Dashboard Metrics */}
        <DashboardMetrics />

      </div>
    </section>);
}
