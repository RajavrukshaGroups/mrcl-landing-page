import React, { useState, useEffect } from "react";
import { X, Trash2, Download, Calendar, MessageSquare, Shield, Check } from "lucide-react";
export default function InquiriesDashboard({ isOpen, onClose, onRefresh }) {
    const [inquiries, setInquiries] = useState([]);
    const loadInquiries = () => {
        const existingInquiriesStr = localStorage.getItem("mrcl_inquiries");
        if (existingInquiriesStr) {
            setInquiries(JSON.parse(existingInquiriesStr));
        }
        else {
            setInquiries([]);
        }
    };
    useEffect(() => {
        if (isOpen) {
            loadInquiries();
        }
    }, [isOpen]);
    const handleDelete = (id) => {
        const updated = inquiries.filter((inq) => inq.id !== id);
        localStorage.setItem("mrcl_inquiries", JSON.stringify(updated));
        setInquiries(updated);
        onRefresh();
    };
    const handleClearAll = () => {
        if (window.confirm("Are you sure you want to delete all luxury villa inquiries? This cannot be undone.")) {
            localStorage.removeItem("mrcl_inquiries");
            setInquiries([]);
            onRefresh();
        }
    };
    const handleExportJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `MRCL_Luxury_Inquiries_${new Date().toISOString().split("T")[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300" id="inquiries-admin-modal-overlay">
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-royal-gold/25 animate-slide-left relative" id="inquiries-admin-container">
        {/* Header */}
        <div className="p-6 border-b border-royal-gold/20 flex items-center justify-between bg-soft-white">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-luxury-red"/>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal">
                VVIP Inquiries Desk
              </h3>
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-royal-gold">
                Internal Administrative Console
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-charcoal/60 hover:text-luxury-red transition-colors" id="close-admin-panel">
            <X className="w-5 h-5"/>
          </button>
        </div>

        {/* Content Panel */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5" id="inquiries-list-scroll">
          {inquiries.length === 0 ? (<div className="flex flex-col items-center justify-center text-center py-20 gap-4">
              <div className="w-12 h-12 rounded-full border border-royal-gold/30 flex items-center justify-center bg-soft-white text-royal-gold/50 text-xl font-bold">
                Ø
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-charcoal">No Inquiries Found</h4>
                <p className="text-xs text-charcoal/60 font-sans max-w-xs mt-1 leading-relaxed">
                  Submit the "Book Site Visit" or "Download Brochure" forms to see submissions populate in real time with absolute structural audit tracking.
                </p>
              </div>
            </div>) : (<>
              <div className="flex items-center justify-between text-xs font-semibold font-sans uppercase tracking-wider text-charcoal/60 border-b border-platinum pb-2">
                <span>Active Leads ({inquiries.length})</span>
                <span className="text-[9px] font-bold text-luxury-red bg-luxury-red/10 px-2 py-0.5 rounded">
                  Secure Storage Active
                </span>
              </div>

              <div className="flex flex-col gap-4" id="inquiries-leads-grid">
                {inquiries.map((inq) => (<div key={inq.id} className="p-4 rounded-xl border border-royal-gold/15 bg-soft-white hover:border-royal-gold/30 transition-all flex flex-col gap-2.5 relative group">
                    {/* Delete single button */}
                    <button onClick={() => handleDelete(inq.id)} className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-luxury-red/10 text-charcoal/40 hover:text-luxury-red opacity-0 group-hover:opacity-100 transition-opacity" title="Remove Lead Record">
                      <Trash2 className="w-3.5 h-3.5"/>
                    </button>

                    {/* Name & Badge */}
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center text-[10px] font-bold text-royal-gold uppercase">
                        {inq.name.slice(0, 2)}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold font-sans text-charcoal flex items-center gap-1.5">
                          {inq.name}
                        </h5>
                        <p className="text-[9px] text-charcoal/50 font-sans">
                          Submitted: {new Date(inq.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                        </p>
                      </div>
                    </div>

                    {/* Contact Stats */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-sans text-charcoal/85 border-t border-b border-platinum/40 py-2 mt-1">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-charcoal/40 block">Email</span>
                        <a href={`mailto:${inq.email}`} className="hover:text-luxury-red font-medium">
                          {inq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-charcoal/40 block">Phone</span>
                        <a href={`tel:${inq.phone}`} className="hover:text-luxury-red font-bold">
                          {inq.phone}
                        </a>
                      </div>
                    </div>

                    {/* Meta Values */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-charcoal text-white px-2 py-0.5 rounded">
                        {inq.villaType}
                      </span>
                      {inq.brochureRequested && (<span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-luxury-red text-white px-2 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-2.5 h-2.5"/>
                          <span>Brochure Req</span>
                        </span>)}
                      {inq.visitDate && (<span className="text-[9px] font-sans font-bold uppercase tracking-wider bg-royal-gold text-white px-2 py-0.5 rounded flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5"/>
                          <span>Visit: {inq.visitDate}</span>
                        </span>)}
                    </div>

                    {/* Customer message */}
                    {inq.message && (<div className="text-[10px] bg-white border border-platinum p-2 rounded-md font-sans text-charcoal/70 italic flex gap-1 items-start mt-1">
                        <MessageSquare className="w-3 h-3 text-royal-gold mt-0.5 flex-shrink-0"/>
                        <span>"{inq.message}"</span>
                      </div>)}
                  </div>))}
              </div>
            </>)}
        </div>

        {/* Footer Actions */}
        {inquiries.length > 0 && (<div className="p-6 border-t border-royal-gold/20 bg-soft-white flex items-center gap-3 justify-end">
            <button onClick={handleClearAll} className="text-xs font-bold font-sans uppercase tracking-widest text-luxury-red border border-luxury-red/25 hover:bg-luxury-red/10 py-3.5 px-4 rounded-lg flex items-center gap-2 transition-all cursor-pointer">
              <Trash2 className="w-3.5 h-3.5"/>
              <span>Clear All</span>
            </button>
            <button onClick={handleExportJSON} className="text-xs font-bold font-sans uppercase tracking-widest text-white bg-royal-gold hover:bg-royal-gold-light py-3.5 px-4 rounded-lg flex items-center gap-2 transition-all gold-shine-effect cursor-pointer">
              <Download className="w-3.5 h-3.5"/>
              <span>Export Lead Logs</span>
            </button>
          </div>)}
      </div>
    </div>);
}
