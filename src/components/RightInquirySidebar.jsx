import React, { useState, useEffect } from "react";
import {
  X,
  MessageSquare,
  Loader2,
  CheckCircle,
  User,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function RightInquirySidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Auto-slide out after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email ID is required";
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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!validateForm()) return;

  //     setIsSubmitting(true);
  //     setTimeout(() => {
  //       const existingInquiriesStr = localStorage.getItem("mrcl_inquiries");
  //       const inquiries = existingInquiriesStr ? JSON.parse(existingInquiriesStr) : [];
  //       const newInquiry = {
  //         id: `inq-${Date.now()}`,
  //         name: formData.name,
  //         email: formData.email,
  //         phone: formData.phone,
  //         brochureRequested: false,
  //         message: formData.message || undefined,
  //         timestamp: new Date().toISOString(),
  //       };
  //       inquiries.unshift(newInquiry);
  //       localStorage.setItem("mrcl_inquiries", JSON.stringify(inquiries));

  //       // Trigger global update event to refresh metrics and navbar counts
  //       window.dispatchEvent(new Event("mrcl_inquiries_updated"));

  //       setIsSubmitting(false);
  //       setIsSuccess(true);

  //       // Reset form on success after 3 seconds
  //       setTimeout(() => {
  //         setIsSuccess(false);
  //         setFormData({ name: "", email: "", phone: "", message: "" });
  //       }, 3000);
  //     }, 1200);
  //   };
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
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send enquiry");
      }

      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
        setIsOpen(false);
        setIsCompleted(true);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return null;
  }

  return (
    <div className="fixed top-28 right-0 z-40 font-sans pointer-events-none">
      <AnimatePresence>
        {!isOpen ? (
          /* Small Floating Sticky Launcher Tab */
          <motion.button
            key="launcher"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto bg-luxury-red hover:bg-luxury-red-light text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-4 rounded-l-xl shadow-2xl flex items-center gap-2 cursor-pointer gold-shine-effect border-l border-y border-royal-gold/30"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            id="sidebar-inquiry-launcher"
          >
            <MessageSquare className="w-4 h-4 rotate-90 text-royal-gold" />
            <span>Enquire Now</span>
          </motion.button>
        ) : (
          /* Beautiful Full Sliding Drawer Form Panel */
          <motion.div
            key="drawer"
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="pointer-events-auto w-[310px] sm:w-[340px] bg-white h-[calc(100vh-10rem)] max-h-[520px] rounded-l-2xl shadow-2xl border-l border-y border-royal-gold/30 flex flex-col overflow-hidden relative"
            id="sidebar-inquiry-drawer"
          >
            {/* Top luxury gold bar accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-luxury-red via-royal-gold to-luxury-red" />

            {/* Header */}
            <div className="p-4 border-b border-platinum/60 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-base font-bold text-charcoal tracking-tight">
                  Enquiry Form
                </h3>
                <p className="text-[9px] text-charcoal/60 mt-0.5 font-sans uppercase tracking-widest font-semibold">
                  Direct Developer Channel
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-soft-white text-charcoal/50 hover:text-luxury-red transition-all cursor-pointer"
                title="Minimize Form"
                id="sidebar-inquiry-close-btn"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-2 py-8 animate-fade-in">
                  <div className="w-12 h-12 bg-royal-gold/10 text-royal-gold rounded-full flex items-center justify-center mb-4 border border-royal-gold/20">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-charcoal mb-2">
                    Request Transmitted
                  </h4>
                  <p className="text-xs text-charcoal/70 leading-relaxed max-w-[220px]">
                    Your VIP concierge ticket has been locked. A direct
                    developer representative will contact you in 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-charcoal/70 flex items-center gap-1">
                      <User className="w-3 h-3 text-royal-gold" />
                      <span>
                        Full Name <span className="text-luxury-red">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-3 py-2 bg-soft-white border ${errors.name ? "border-luxury-red" : "border-platinum hover:border-royal-gold/40"} rounded-lg text-xs font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
                      id="sidebar-name-input"
                    />
                    {errors.name && (
                      <span className="text-[9px] font-medium text-luxury-red">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-charcoal/70 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-royal-gold" />
                      <span>
                        Email ID <span className="text-luxury-red">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@luxurymail.com"
                      className={`w-full px-3 py-2 bg-soft-white border ${errors.email ? "border-luxury-red" : "border-platinum hover:border-royal-gold/40"} rounded-lg text-xs font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
                      id="sidebar-email-input"
                    />
                    {errors.email && (
                      <span className="text-[9px] font-medium text-luxury-red">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-charcoal/70 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-royal-gold" />
                      <span>
                        Phone Number <span className="text-luxury-red">*</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="98765 43210"
                      className={`w-full px-3 py-2 bg-soft-white border ${errors.phone ? "border-luxury-red" : "border-platinum hover:border-royal-gold/40"} rounded-lg text-xs font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all`}
                      id="sidebar-phone-input"
                    />
                    {errors.phone && (
                      <span className="text-[9px] font-medium text-luxury-red">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-charcoal/70 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-royal-gold" />
                      <span>Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Type your bespoke requests here..."
                      className="w-full px-3 py-2 bg-soft-white border border-platinum hover:border-royal-gold/40 rounded-lg text-xs font-sans focus:outline-none focus:ring-1 focus:ring-royal-gold transition-all resize-none"
                      id="sidebar-message-input"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-red hover:bg-luxury-red-light disabled:bg-luxury-red/50 text-white font-sans text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-1 gold-shine-effect cursor-pointer group"
                    id="sidebar-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-royal-gold" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Footer Regulatory line */}
            <div className="p-3 bg-soft-white border-t border-platinum/60 text-center text-[8px] text-charcoal/40 leading-normal">
              🛡️ Direct developer line. Your data is structurally locked.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
