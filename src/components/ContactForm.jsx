// import React, { useState } from "react";
// import { CheckCircle, ArrowRight, Loader2, Download, Calendar } from "lucide-react";
// export default function ContactForm({ title = "Own Your Dream Villa Today", subtitle = "Enquire now for direct developer pricing and exclusive launch benefits.", isBrochureDownloadMode = false, onSuccess, idPrefix = "inline", }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         villaType: "4 BHK Regal Villa (3,200 sq.ft)",
//         visitDate: "",
//         brochureRequested: isBrochureDownloadMode,
//         message: "",
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSuccess, setIsSuccess] = useState(false);
//     const validateForm = () => {
//         const tempErrors = {};
//         if (!formData.name.trim())
//             tempErrors.name = "Full name is required";
//         if (!formData.email.trim()) {
//             tempErrors.email = "Email address is required";
//         }
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Please enter a valid email address";
//         }
//         if (!formData.phone.trim()) {
//             tempErrors.phone = "Phone number is required";
//         }
//         else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ""))) {
//             tempErrors.phone = "Please enter a valid 10-digit phone number";
//         }
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!validateForm())
//             return;
//         setIsSubmitting(true);
//         // Simulate luxury API submission delay
//         setTimeout(() => {
//             const existingInquiriesStr = localStorage.getItem("mrcl_inquiries");
//             const inquiries = existingInquiriesStr ? JSON.parse(existingInquiriesStr) : [];
//             const newInquiry = {
//                 id: `inq-${Date.now()}`,
//                 name: formData.name,
//                 email: formData.email,
//                 phone: formData.phone,
//                 villaType: formData.villaType,
//                 visitDate: formData.visitDate || undefined,
//                 brochureRequested: formData.brochureRequested || isBrochureDownloadMode,
//                 message: formData.message || undefined,
//                 timestamp: new Date().toISOString(),
//             };
//             inquiries.unshift(newInquiry);
//             localStorage.setItem("mrcl_inquiries", JSON.stringify(inquiries));
//             // Trigger custom global event to sync navbar/indicators
//             window.dispatchEvent(new Event("mrcl_inquiries_updated"));
//             setIsSubmitting(false);
//             setIsSuccess(true);
//             if (onSuccess) {
//                 setTimeout(() => onSuccess(), 1500);
//             }
//         }, 1200);
//     };
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors((prev) => ({ ...prev, [name]: "" }));
//         }
//     };
//     return (<div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-royal-gold/25 relative overflow-hidden" id={`${idPrefix}-contact-card-wrapper`}>
//       {/* Decorative luxury absolute accent bars */}
//       <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-luxury-red via-royal-gold to-luxury-red"/>

//       {isSuccess ? (<div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in" id={`${idPrefix}-form-success-panel`}>
//           <div className="w-16 h-16 bg-royal-gold/10 text-royal-gold rounded-full flex items-center justify-center mb-6 border border-royal-gold/30">
//             <CheckCircle className="w-10 h-10 animate-scale-up"/>
//           </div>
//           <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
//             {isBrochureDownloadMode ? "Brochure Access Ready" : "Site Visit Scheduled"}
//           </h3>
//           <p className="text-sm text-charcoal/70 font-sans max-w-sm mb-6 leading-relaxed">
//             {isBrochureDownloadMode
//                 ? "Your premium digital brochure has been processed. A VIP Sales Manager will email you the full technical drawing packages shortly."
//                 : "Thank you for choosing MRCL. A personal chauffeur-driven concierge luxury coordinator will call you in the next 15 minutes to finalize travel arrangements."}
//           </p>
//           {isBrochureDownloadMode && (<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all gold-shine-effect" id={`${idPrefix}-download-direct-pdf`}>
//               <Download className="w-4 h-4"/>
//               <span>Download Digital Copy</span>
//             </a>)}
//         </div>) : (<form onSubmit={handleSubmit} className="flex flex-col gap-5" id={`${idPrefix}-contact-form`}>
//           <div>
//             <h3 className="font-serif text-2xl font-bold text-charcoal tracking-tight">
//               {title}
//             </h3>
//             <p className="text-xs text-charcoal/65 font-sans mt-1 leading-relaxed">
//               {subtitle}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Full Name */}
//             <div className="flex flex-col gap-1.5">
//               <label htmlFor={`${idPrefix}-name-input`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80">
//                 Full Name <span className="text-luxury-red">*</span>
//               </label>
//               <input type="text" id={`${idPrefix}-name-input`} name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 bg-soft-white border ${errors.name ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`} placeholder="Lord / Lady Name"/>
//               {errors.name && (<span className="text-[10px] font-semibold text-luxury-red">{errors.name}</span>)}
//             </div>

//             {/* Email Address */}
//             <div className="flex flex-col gap-1.5">
//               <label htmlFor={`${idPrefix}-email-input`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80">
//                 Email Address <span className="text-luxury-red">*</span>
//               </label>
//               <input type="email" id={`${idPrefix}-email-input`} name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 bg-soft-white border ${errors.email ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`} placeholder="name@luxurymail.com"/>
//               {errors.email && (<span className="text-[10px] font-semibold text-luxury-red">{errors.email}</span>)}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Phone Number */}
//             <div className="flex flex-col gap-1.5">
//               <label htmlFor={`${idPrefix}-phone-input`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80">
//                 Contact Number <span className="text-luxury-red">*</span>
//               </label>
//               <input type="tel" id={`${idPrefix}-phone-input`} name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-3 bg-soft-white border ${errors.phone ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`} placeholder="+91 98765 43210"/>
//               {errors.phone && (<span className="text-[10px] font-semibold text-luxury-red">{errors.phone}</span>)}
//             </div>

//             {/* Villa Layout Sizing */}
//             <div className="flex flex-col gap-1.5">
//               <label htmlFor={`${idPrefix}-villa-type-select`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80">
//                 Villa Classification
//               </label>
//               <select id={`${idPrefix}-villa-type-select`} name="villaType" value={formData.villaType} onChange={handleInputChange} className="w-full px-4 py-3 bg-soft-white border border-platinum hover:border-royal-gold/50 rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all">
//                 <option value="4 BHK Regal Villa (3,200 sq.ft)">
//                   4 BHK Regal Villa (3,200 sq.ft)
//                 </option>
//                 <option value="4 BHK Imperial Villa (4,500 sq.ft)">
//                   4 BHK Imperial Villa (4,500 sq.ft)
//                 </option>
//                 <option value="4 BHK Presidential Villa (6,000 sq.ft)">
//                   4 BHK Presidential Villa (6,000 sq.ft)
//                 </option>
//               </select>
//             </div>
//           </div>

//           {/* Date of Visit (Optional, unless booking site visit) */}
//           <div className="flex flex-col gap-1.5 group/date">
//             <label htmlFor={`${idPrefix}-visit-date-input`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80 flex items-center gap-0 group-hover/date:gap-1 transition-all duration-300 cursor-pointer">
//               <Calendar className="w-0 opacity-0 scale-0 group-hover/date:w-3.5 group-hover/date:opacity-100 group-hover/date:scale-100 transition-all duration-300 text-royal-gold flex-shrink-0"/>
//               <span>Preferred Site Visit Date (Optional)</span>
//             </label>
//             <input type="date" id={`${idPrefix}-visit-date-input`} name="visitDate" value={formData.visitDate} onChange={handleInputChange} min={new Date().toISOString().split("T")[0]} className="w-full px-4 py-3 bg-soft-white border border-platinum hover:border-royal-gold/50 rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all"/>
//           </div>

//           {/* Personal message/special request */}
//           <div className="flex flex-col gap-1.5">
//             <label htmlFor={`${idPrefix}-message-input`} className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80">
//               Bespoke Custom Requests / Message
//             </label>
//             <textarea id={`${idPrefix}-message-input`} name="message" value={formData.message} onChange={handleInputChange} rows={2} className="w-full px-4 py-3 bg-soft-white border border-platinum hover:border-royal-gold/50 rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all resize-none" placeholder="E.g., Require central elevator, Vastu direction requirements, etc."/>
//           </div>

//           {/* Luxury Action Button */}
//           <button type="submit" disabled={isSubmitting} className="w-full bg-luxury-red hover:bg-luxury-red-light disabled:bg-luxury-red/50 text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-0 hover:gap-2 mt-2 gold-shine-effect cursor-pointer group" id={`${idPrefix}-contact-submit-button`}>
//             {isSubmitting ? (<>
//                 <Loader2 className="w-4 h-4 animate-spin"/>
//                 <span>Authenticating Request...</span>
//               </>) : isBrochureDownloadMode ? (<>
//                 <Download className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
//                 <span>Request Exclusive Brochure</span>
//               </>) : (<>
//                 <span>Arrange Chauffeur Visit</span>
//                 <ArrowRight className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0"/>
//               </>)}
//           </button>

//           {/* Regulatory details */}
//           <div className="text-[9px] font-sans text-charcoal/40 text-center leading-relaxed">
//             By submitting, you agree to receive automated VVIP concierge scheduling calls. Your privacy is structurally locked.
//           </div>
//         </form>)}
//     </div>);
// }

import React, { useState } from "react";
import { CheckCircle, ArrowRight, Loader2, Download } from "lucide-react";
export default function ContactForm({
  title = "Schedule a Private Tour",
  subtitle = "Enquire now for direct developer pricing and exclusive launch benefits.",
  isBrochureDownloadMode = false,
  onSuccess,
  idPrefix = "inline",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    villaType: "4 BHK Regal Villa (3,200 sq.ft)",
    brochureRequested: isBrochureDownloadMode,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (
      formData.phone.trim().startsWith("0") ||
      formData.phone.trim().startsWith("+0")
    ) {
      tempErrors.phone = "Phone number cannot start with 0";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // const response = await fetch("http://localhost:5000/api/enquiry", {
      const response = await fetch(
        "https://api.mrclinfrastructure.com/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }

      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      if (onSuccess) {
        setTimeout(() => onSuccess(), 1500);
      }

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  return (
    <div
      className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-royal-gold/25 relative overflow-hidden"
      id={`${idPrefix}-contact-card-wrapper`}
    >
      {/* Decorative luxury absolute accent bars */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-luxury-red via-royal-gold to-luxury-red" />

      {isSuccess ? (
        <div
          className="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in"
          id={`${idPrefix}-form-success-panel`}
        >
          <div className="w-16 h-16 bg-royal-gold/10 text-royal-gold rounded-full flex items-center justify-center mb-6 border border-royal-gold/30">
            <CheckCircle className="w-10 h-10 animate-scale-up" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
            {isBrochureDownloadMode
              ? "Brochure Access Ready"
              : "Site Visit Scheduled"}
          </h3>
          <p className="text-sm text-charcoal/70 font-sans max-w-sm mb-6 leading-relaxed">
            {isBrochureDownloadMode
              ? "Your premium digital brochure has been processed. A VIP Sales Manager will email you the full technical drawing packages shortly."
              : "Thank you for choosing MRCL. A personal chauffeur-driven concierge luxury coordinator will call you in the next 15 minutes to finalize travel arrangements."}
          </p>
          {isBrochureDownloadMode && (
            <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all gold-shine-effect"
              id={`${idPrefix}-download-direct-pdf`}
            >
              <Download className="w-4 h-4" />
              <span>Download Digital Copy</span>
            </a>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          id={`${idPrefix}-contact-form`}
        >
          <div>
            <h3 className="font-serif text-2xl font-bold text-charcoal tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-charcoal/65 font-sans mt-1 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${idPrefix}-name-input`}
                className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80"
              >
                Full Name <span className="text-luxury-red">*</span>
              </label>
              <input
                type="text"
                id={`${idPrefix}-name-input`}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-soft-white border ${errors.name ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-[10px] font-semibold text-luxury-red">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`${idPrefix}-email-input`}
                className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80"
              >
                Email Address <span className="text-luxury-red">*</span>
              </label>
              <input
                type="email"
                id={`${idPrefix}-email-input`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-soft-white border ${errors.email ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
                placeholder="name@luxurymail.com"
              />
              {errors.email && (
                <span className="text-[10px] font-semibold text-luxury-red">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={`${idPrefix}-phone-input`}
              className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80"
            >
              Contact Number <span className="text-luxury-red">*</span>
            </label>
            <input
              type="tel"
              id={`${idPrefix}-phone-input`}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-soft-white border ${errors.phone ? "border-luxury-red" : "border-platinum hover:border-royal-gold/50"} rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
              placeholder="98765 43210"
            />
            {errors.phone && (
              <span className="text-[10px] font-semibold text-luxury-red">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Personal message/special request */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={`${idPrefix}-message-input`}
              className="text-[10px] font-bold uppercase tracking-widest text-charcoal/80"
            >
              Bespoke Custom Requests / Message
            </label>
            <textarea
              id={`${idPrefix}-message-input`}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-4 py-3 bg-soft-white border border-platinum hover:border-royal-gold/50 rounded-lg text-sm font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all resize-none"
              placeholder="E.g., Require central elevator, Vastu direction requirements, etc."
            />
          </div>

          {/* Luxury Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-luxury-red hover:bg-luxury-red-light disabled:bg-luxury-red/50 text-white font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-0 hover:gap-2 mt-2 gold-shine-effect cursor-pointer group"
            id={`${idPrefix}-contact-submit-button`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating Request...</span>
              </>
            ) : isBrochureDownloadMode ? (
              <>
                <Download className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0" />
                <span>Request Exclusive Brochure</span>
              </>
            ) : (
              <>
                <span>Arrange Chauffeur Visit</span>
                <ArrowRight className="w-0 opacity-0 scale-0 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex-shrink-0" />
              </>
            )}
          </button>

          {/* Regulatory details */}
          <div className="text-[9px] font-sans text-charcoal/40 text-center leading-relaxed">
            By submitting, you agree to receive automated VVIP concierge
            scheduling calls. Your privacy is structurally locked.
          </div>
        </form>
      )}
    </div>
  );
}
