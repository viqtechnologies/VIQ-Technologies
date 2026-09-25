


import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../Apipath.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async () => {
  //   if (!formData.name.trim()) {
  //     toast.error("Please enter your name");
  //     return;
  //   }
  //   if (!formData.email.trim()) {
  //     toast.error("Please enter your email");
  //     return;
  //   }
  //   if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     toast.error("Please enter a valid email address");
  //     return;
  //   }
  //   if (!formData.contact.trim()) {
  //     toast.error("Please enter your contact number");
  //     return;
  //   }
  //   if (!formData.address.trim()) {
  //     toast.error("Please enter your address");
  //     return;
  //   }
  //   if (!formData.message.trim()) {
  //     toast.error("Please enter your message");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const response = await fetch(`${BASE_URL}/api/contact/submit`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success("Message sent successfully! We'll get back to you soon.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         contact: "",
  //         address: "",
  //         message: "",
  //       });
  //     } else {
  //       toast.error(
  //         data.message || "Failed to send message. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Network error. Please check your connection and try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const handleSubmit = async () => {
  //   if (!formData.name.trim()) {
  //     toast.error("Please enter your name");
  //     return;
  //   }

  //   if (!formData.email.trim()) {
  //     toast.error("Please enter your email");
  //     return;
  //   }

  //   // Email format validation
  //   if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     toast.error("Please enter a valid email address");
  //     return;
  //   }

  //   if (!formData.contact.trim()) {
  //     toast.error("Please enter your contact number");
  //     return;
  //   }

  //   if (!formData.address.trim()) {
  //     toast.error("Please enter your address");
  //     return;
  //   }

  //   if (!formData.message.trim()) {
  //     toast.error("Please enter your message");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     //  Real Email Validation API
  //     const emailResponse = await fetch(
  //       `https://apilayer.net/api/check?access_key=e9b841ebac6611b0b7fc7fdc4683a021&email=${formData.email}`,
  //     );

  //     const emailData = await emailResponse.json();

  //     console.log(emailData);

  //     //  Invalid Email
  //    if (
  //      !emailData.format_valid ||
  //      !emailData.mx_found ||
  //      !emailData.smtp_check
  //    ) {
  //      toast.error("Please enter a real existing email");
  //      setLoading(false);
  //      return;
  //    }

  //     //  Submit Form
  //     const response = await fetch(`${BASE_URL}/api/contact/submit`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success("Message sent successfully! We'll get back to you soon.");

  //       setFormData({
  //         name: "",
  //         email: "",
  //         contact: "",
  //         address: "",
  //         message: "",
  //       });
  //     } else {
  //       toast.error(
  //         data.message || "Failed to send message. Please try again.",
  //       );
  //     }
  //   } catch (error) {
  //     console.error(error);

  //     toast.error("Email validation or network error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.contact.trim()) {
      toast.error("Please enter your contact number");
      return;
    }

    if (!formData.address.trim()) {
      toast.error("Please enter your address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setLoading(true);

    try {
      // ✅ Verify Email First
      const verifyRes = await fetch(
        `${BASE_URL}/api/verify-email?email=${encodeURIComponent(formData.email)}`,
      );

      const verifyData = await verifyRes.json();

      console.log("Email Verification:", verifyData);

      if (!verifyRes.ok) {
        throw new Error(verifyData.message || "Email verification failed");
      }

      if (!verifyData.valid) {
        toast.error("Please enter a real existing email");
        return;
      }

      // ✅ Submit Contact Form
      const response = await fetch(`${BASE_URL}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FFFFFF] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#0A2540] mb-3">
            Get In Touch
          </h2>
          <p className="text-[#172033] max-w-2xl mx-auto text-xl">
            Have a project in mind or need IT support? Reach out to VIQ Technologies - our team will connect with you shortly.
          </p>
        </div>

        {/* Top Grid: Both containers will be same height due to grid stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-stretch">
          <div className="bg-[#0A2540] text-white rounded-2xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
            <div className="space-y-8 text-md">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#1268B3] flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>

                <div>
                  <p className="font-semibold text-[#D9A52E] mb-2 text-lg">
                    Location
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F1F5F9] hover:text-[#D9A52E]"
                  >
                    VIQ Technologies, SCF2, 2nd floor, GTB Market, Khanna, Punjab
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#1268B3] flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#D9A52E] mb-1 text-lg">
                    Email
                  </p>
                  <a
                    href="mailto:viqtechnologies@gmail.com"
                    className="text-[#F1F5F9] hover:text-[#D9A52E]"
                  >
                    viqtechnologies@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#1268B3] flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#D9A52E] mb-1 text-lg">
                    Call
                  </p>
                  <a
                    href="tel:+917986067505"
                    className="block text-[#F1F5F9] hover:text-[#D9A52E]"
                  >
                    +91-7986067505
                  </a>
                  <a
                    href="tel:+918968092326"
                    className="block text-[#F1F5F9] hover:text-[#D9A52E]"
                  >
                    +91-8968092326
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#F1F5F9] border border-slate-200 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-6">
              Send Us a Message
            </h3>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#172033] mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#172033] mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#172033] mb-1">
                    Contact <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#172033] mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#172033] mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm resize-none bg-white text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-lg bg-[#1268B3] text-white hover:bg-[#0A2540] transition-colors disabled:bg-blue-300"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Map (Full Width) */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <div className="w-full h-96 md:h-[450px]">
            <iframe
              title="VIQ Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.658143845226!2d76.22542767537172!3d30.69989317460004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910115af575ebf3%3A0xad9b666eab24b436!2sVIQ%20Technologies!5e0!3m2!1sen!2sin!4v1789539852066!5m2!1sen!2sin"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;








