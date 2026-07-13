import React, { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
export default function DashboardMetrics() {
    const [activeTerm, setActiveTerm] = useState("5year");
    const [statSatisfaction, setStatSatisfaction] = useState(0);
    const [statQuality, setStatQuality] = useState(0);
    const [statAppreciation, setStatAppreciation] = useState(0);
    // Smooth counting statistics trigger
    useEffect(() => {
        const duration = 1500;
        const steps = 60;
        const stepTime = duration / steps;
        let stepCount = 0;
        const timer = setInterval(() => {
            stepCount++;
            setStatSatisfaction(Math.min(Math.round((95 / steps) * stepCount), 95));
            setStatQuality(Math.min(Math.round((100 / steps) * stepCount), 100));
            setStatAppreciation(Math.min(Math.round((145 / steps) * stepCount), 145)); // represents 14.5%
            if (stepCount >= steps) {
                clearInterval(timer);
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, []);
    // Return calculation points for ROI based on active term
    const getRoiPoints = () => {
        if (activeTerm === "5year") {
            // 5 points mapping to coordinates (X, Y) in our SVG canvas
            // Y represents inverse scale (lower Y is higher value)
            return {
                path: "M 50 160 L 150 140 L 250 110 L 350 70 L 450 30",
                values: ["₹1.8 Cr", "₹2.2 Cr", "₹2.7 Cr", "₹3.3 Cr", "₹4.1 Cr"],
                years: ["Launch (Y0)", "Year 1", "Year 2", "Year 3", "Year 5"],
                roiPct: "127% Net Capital Growth"
            };
        }
        else {
            return {
                path: "M 50 170 L 150 150 L 250 120 L 350 85 L 450 15",
                values: ["₹1.8 Cr", "₹2.5 Cr", "₹3.8 Cr", "₹5.9 Cr", "₹8.5 Cr"],
                years: ["Launch (Y0)", "Year 2", "Year 5", "Year 8", "Year 10"],
                roiPct: "372% Net Capital Growth"
            };
        }
    };
    const currentRoi = getRoiPoints();
    return (<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in" id="roi-dashboard-root">
      {/* Metrics Sidebar Column */}
      <div className="lg:col-span-5 flex flex-col gap-6" id="roi-sidebar">
        <div>
          <span className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red">
            Investment Portfolio
          </span>
          <h3 className="font-serif text-3xl font-bold text-charcoal mt-1 tracking-tight">
            Sophisticated Wealth Multiplier
          </h3>
          <p className="text-xs text-charcoal/70 font-sans mt-2 leading-relaxed">
            Independent villa plots in gated, highly connected South Bangalore pockets act as a bulletproof generational asset class. Protect your capital while capitalizing on high organic land appreciation.
          </p>
        </div>

        {/* Counter Blocks Row */}
        <div className="grid grid-cols-3 gap-3" id="roi-counters-row">
          <div className="bg-soft-white border border-royal-gold/15 p-3.5 rounded-xl text-center flex flex-col items-center">
            <span className="font-numbers text-2xl font-bold text-luxury-red leading-none">
              {statSatisfaction}%
            </span>
            <span className="text-[9px] font-sans font-bold text-charcoal/60 uppercase tracking-wider mt-1.5 leading-tight">
              Customer Satisfaction
            </span>
          </div>

          <div className="bg-soft-white border border-royal-gold/15 p-3.5 rounded-xl text-center flex flex-col items-center">
            <span className="font-numbers text-2xl font-bold text-luxury-red leading-none">
              {statQuality}%
            </span>
            <span className="text-[9px] font-sans font-bold text-charcoal/60 uppercase tracking-wider mt-1.5 leading-tight">
              Quality Construction
            </span>
          </div>

          <div className="bg-soft-white border border-royal-gold/15 p-3.5 rounded-xl text-center flex flex-col items-center">
            <span className="font-numbers text-2xl font-bold text-luxury-red leading-none">
              {(statAppreciation / 10).toFixed(1)}%
            </span>
            <span className="text-[9px] font-sans font-bold text-charcoal/60 uppercase tracking-wider mt-1.5 leading-tight">
              Y-O-Y Land Growth
            </span>
          </div>
        </div>

        {/* Dynamic ROI Info Card */}
        <div className="p-4 rounded-xl border border-royal-gold/20 bg-royal-gold/5 flex gap-3 items-start">
          <div className="p-2 bg-royal-gold text-white rounded-lg flex-shrink-0 mt-0.5">
            <TrendingUp className="w-4 h-4"/>
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-charcoal uppercase tracking-wider">
              {currentRoi.roiPct}
            </h4>
            <p className="text-[11px] text-charcoal/70 font-sans mt-1 leading-relaxed">
              Based on the current Electronic City sector infrastructure integration of Metro routes, NICE road flyovers, and luxury residential supply deficits.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Chart Box */}
      <div className="lg:col-span-7" id="roi-chart-box">
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-royal-gold/25 shadow-xl relative overflow-hidden flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-platinum/50">
            <div>
              <h4 className="font-serif text-lg font-bold text-charcoal">
                Capital Appreciation Curve
              </h4>
              <p className="text-[10px] font-sans font-semibold text-charcoal/50 uppercase tracking-wider">
                Initial Investment ₹1.80 Crores Base Valuation
              </p>
            </div>

            {/* Toggle buttons */}
            <div className="flex bg-soft-white border border-platinum p-1 rounded-lg self-start">
              <button onClick={() => setActiveTerm("5year")} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md transition-all cursor-pointer ${activeTerm === "5year"
            ? "bg-royal-gold text-white shadow-sm"
            : "text-charcoal/60 hover:text-luxury-red"}`}>
                5 Year Term
              </button>
              <button onClick={() => setActiveTerm("10year")} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md transition-all cursor-pointer ${activeTerm === "10year"
            ? "bg-royal-gold text-white shadow-sm"
            : "text-charcoal/60 hover:text-luxury-red"}`}>
                10 Year Term
              </button>
            </div>
          </div>

          {/* SVG Drawn Vector Chart */}
          <div className="relative aspect-video w-full border-l border-b border-platinum/75" id="roi-chart-canvas-wrapper">
            <svg viewBox="0 0 500 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Horizontal Help Lines */}
              <line x1="0" y1="40" x2="500" y2="40" stroke="#EAEAEA" strokeWidth="0.5" strokeDasharray="4"/>
              <line x1="0" y1="80" x2="500" y2="80" stroke="#EAEAEA" strokeWidth="0.5" strokeDasharray="4"/>
              <line x1="0" y1="120" x2="500" y2="120" stroke="#EAEAEA" strokeWidth="0.5" strokeDasharray="4"/>
              <line x1="0" y1="160" x2="500" y2="160" stroke="#EAEAEA" strokeWidth="0.5" strokeDasharray="4"/>

              {/* Dynamic Path drawing itself */}
              <path d={currentRoi.path} fill="none" stroke="#8C1D18" strokeWidth="3.5" strokeLinecap="round" className="transition-all duration-700 ease-out" id="chart-curve-line"/>

              {/* Data Node Points & Price Tags */}
              {currentRoi.values.map((val, idx) => {
            const pointX = 50 + idx * 100;
            // Parse Y position from path points
            const pathParts = currentRoi.path.split(" ");
            // Points reside at indices: [2], [5], [8], [11], [14] for Y values
            const pointY = parseFloat(pathParts[2 + idx * 3]);
            return (<g key={`${activeTerm}-node-${idx}`} className="animate-fade-in">
                    {/* Pulsing ring */}
                    <circle cx={pointX} cy={pointY} r="7" fill="#C9A227" fillOpacity="0.3" className="animate-pulse"/>
                    {/* Anchor Dot */}
                    <circle cx={pointX} cy={pointY} r="4" fill="#8C1D18" stroke="#FFFFFF" strokeWidth="1.5"/>
                    
                    {/* Price Value Tag */}
                    <text x={pointX} y={pointY - 14} textAnchor="middle" fill="#1A1A1A" className="font-numbers text-[9px] font-bold">
                      {val}
                    </text>

                    {/* Timeline Text */}
                    <text x={pointX} y="192" textAnchor="middle" fill="#777777" className="font-sans text-[8px] font-bold tracking-wider uppercase">
                      {currentRoi.years[idx]}
                    </text>
                  </g>);
        })}
            </svg>

            {/* Background watermarked grid stats label */}
            <div className="absolute top-4 left-4 bg-soft-white border border-platinum px-2 py-1 rounded text-[8px] font-semibold text-charcoal/50 tracking-wider">
              VALUATION ESCALATION MODEL
            </div>
          </div>

          {/* ROI Table Summary footer */}
          <div className="grid grid-cols-2 gap-4 text-xs font-sans text-charcoal border-t border-platinum/50 pt-3">
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold text-charcoal/50 uppercase tracking-widest">Expected Rental Yield</span>
              <span className="font-bold text-luxury-red mt-0.5">5.8% - 6.2% Net Per Annum</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-semibold text-charcoal/50 uppercase tracking-widest">Self-Sustaining Equity</span>
              <span className="font-bold text-luxury-red mt-0.5">Instant Leverageable Asset</span>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
