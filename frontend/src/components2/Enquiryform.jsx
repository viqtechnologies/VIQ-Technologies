// EnquiryFormModal.jsx
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Apipath.jsx";
import { toast } from "react-hot-toast";
import {
  X,
  User,
  Mail,
  Phone,
  FileQuestion,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

const EnquiryFormModal = ({ isOpen, onClose }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    queryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        contact: "",
        queryType: "",
        message: "",
      });
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSuccess(true);
  //   }, 1000);
  // };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     const res = await fetch(`${BASE_URL}/api/enquiry/submit`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to submit enquiry");
//     }

//     setIsSuccess(true);
//   } catch (error) {
//     console.error("Enquiry submit error:", error);
//     alert("Failed to submit enquiry. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };




// const handleSubmit = async (e) => {
//   e.preventDefault();

//   setIsSubmitting(true);

//   try {
//     // ✅ Email Validation API
//     const emailResponse = await fetch(
//       `https://apilayer.net/api/check?access_key=e9b841ebac6611b0b7fc7fdc4683a021&email=${formData.email}`,
//     );

//     const emailData = await emailResponse.json();

//     console.log(emailData);

//     // ❌ Invalid/Fake Email
//     if (
//       !emailData.format_valid ||
//       !emailData.mx_found ||
//       !emailData.smtp_check
//     ) {
//       toast.error("Please enter a real existing email");

//       setIsSubmitting(false);
//       return;
//     }

//     // ✅ Submit Form
//     const res = await fetch(`${BASE_URL}/api/enquiry/submit`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to submit enquiry");
//     }

//     setIsSuccess(true);
//   } catch (error) {
//     console.error("Enquiry submit error:", error);

//     toast.error("Failed to submit enquiry. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    // ── Verify Email First ──────────────────────────
    const verifyRes = await fetch(
      `${BASE_URL}/api/verify-email?email=${encodeURIComponent(formData.email)}`,
    );

    const verifyData = await verifyRes.json();

    console.log("Email Verification:", verifyData);

    if (!verifyRes.ok) {
      throw new Error(
        verifyData.message || "Email verification service unavailable",
      );
    }

    if (!verifyData.valid) {
      toast.error("Please enter a real valid email address");
      return;
    }

    // ── Submit Enquiry ──────────────────────────────
    const res = await fetch(`${BASE_URL}/api/enquiry/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to submit enquiry");
    }

    toast.success("Enquiry submitted successfully");
    setIsSuccess(true);
  } catch (error) {
    console.error("Submit Error:", error);

    toast.error(error.message || "Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden border border-slate-200"
      >
        {/* Scrollable inner wrapper with top/bottom padding */}
        <div className="max-h-[90vh] overflow-y-auto no-scrollbar">
          {/* Success View */}
          {isSuccess ? (
            <div className="mt-5 flex flex-col items-center justify-center px-6 text-center space-y-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0A2540]">
                Enquiry Submitted!
              </h2>
              <p className="text-[#172033]">
                We have received your details and will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-2 mb-5 bg-[#1268B3] hover:bg-[#0A2540] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-[#0A2540] px-6 py-4 flex justify-between items-center">
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  Enquire Now
                </h2>
                <button
                  onClick={onClose}
                  className="text-slate-200 hover:text-[#D9A52E] hover:bg-[#1268B3]/30 rounded-full p-1 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#172033] block ml-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1268B3] pointer-events-none"
                      size={18}
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-[#172033] focus:ring-2 focus:ring-[#1268B3] focus:border-[#1268B3] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#172033] block ml-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1268B3] pointer-events-none"
                      size={18}
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-[#172033] focus:ring-2 focus:ring-[#1268B3] focus:border-[#1268B3] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Contact Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact"
                    className="text-sm font-semibold text-[#172033] block ml-1"
                  >
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1268B3] pointer-events-none"
                      size={18}
                    />
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-[#172033] focus:ring-2 focus:ring-[#1268B3] focus:border-[#1268B3] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Query For Select */}
                <div className="space-y-1">
                  <label
                    htmlFor="queryType"
                    className="text-sm font-semibold text-[#172033] block ml-1"
                  >
                    Query For <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FileQuestion
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1268B3] pointer-events-none"
                      size={18}
                    />
                    <select
                      id="queryType"
                      name="queryType"
                      required
                      value={formData.queryType}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-[#172033] focus:ring-2 focus:ring-[#1268B3] focus:border-[#1268B3] outline-none transition-all bg-white appearance-none cursor-pointer"
                    >
                      <option value="service">Services</option>
                      <option value="project">Project</option>
                      <option value="career">Career</option>
                      <option value="courses">Courses</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[#172033] block ml-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-3 text-[#1268B3] pointer-events-none"
                      size={18}
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your query..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-[#172033] focus:ring-2 focus:ring-[#1268B3] focus:border-[#1268B3] outline-none transition-all resize-none placeholder:text-gray-400"
                    ></textarea>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/3 bg-[#F1F5F9] hover:bg-slate-200 text-[#172033] font-semibold py-3 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 bg-[#1268B3] hover:bg-[#0A2540] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryFormModal;
