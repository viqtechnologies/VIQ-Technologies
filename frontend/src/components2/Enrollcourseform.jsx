

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Apipath.jsx";

const EnrollCourseForm = ({ isOpen, onClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "", // Added field
    stream: "", // Added field
    interest: selectedCourse || "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      interest: selectedCourse || "",
    }));
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess("");

  //   try {
  //     const res = await axios.post(
  //       `${BASE_URL}/api/enroll/enroll-course`,
  //       formData,
  //     );

  //     setSuccess("Enrollment request sent successfully!");

  //     // Reset the form including new fields
  //     setFormData({
  //       name: "",
  //       email: "",
  //       contact: "",
  //       college: "", // Reset field
  //       stream: "", // Reset field
  //       interest: selectedCourse || "",
  //       message: "",
  //     });

  //     // Auto close after 2 seconds
  //     setTimeout(() => {
  //       onClose();
  //       setSuccess("");
  //     }, 2000);
  //   } catch (err) {
  //     setError("Failed to send enrollment request. Try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setError("");
  //   setSuccess("");

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
  //       setError("Please enter a real existing email");
  //       setLoading(false);
  //       return;
  //     }

  //     // ✅ Submit Enrollment Form
  //     const res = await axios.post(
  //       `${BASE_URL}/api/enroll/enroll-course`,
  //       formData,
  //     );

  //     setSuccess("Enrollment request sent successfully!");

  //     // ✅ Reset Form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       contact: "",
  //       college: "",
  //       stream: "",
  //       interest: selectedCourse || "",
  //       message: "",
  //     });

  //     // ✅ Auto Close Modal
  //     setTimeout(() => {
  //       onClose();
  //       setSuccess("");
  //     }, 2000);
  //   } catch (err) {
  //     console.error(err);

  //     setError("Failed to send enrollment request. Try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

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
        setError("Please enter a real existing email");
        return;
      }

      // ✅ Submit Enrollment Form
      await axios.post(`${BASE_URL}/api/enroll/enroll-course`, formData);

      setSuccess("Enrollment request sent successfully!");

      // ✅ Reset Form
      setFormData({
        name: "",
        email: "",
        contact: "",
        college: "",
        stream: "",
        interest: selectedCourse || "",
        message: "",
      });

      // ✅ Auto Close Modal
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 2000);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to send enrollment request. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      {/* Increased max-width slightly to accommodate more fields better */}
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto no-scrollbar border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-[#0A2540] mb-4">
          Enroll in <span className="text-[#1268B3]">{selectedCourse}</span>
        </h2>

        {success && (
          <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.contact}
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College/University Name"
            required
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.college}
            onChange={handleChange}
          />

          <input
            type="text"
            name="stream"
            placeholder="Stream/Branch (e.g. CSE, BCA)"
            required
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.stream}
            onChange={handleChange}
          />

          <input
            type="text"
            name="interest"
            readOnly
            className="w-full border border-slate-300 p-3 rounded-lg bg-[#F1F5F9] text-[#172033] cursor-not-allowed font-medium"
            value={formData.interest}
          />

          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            rows="3"
            className="w-full border border-slate-300 p-3 rounded-lg text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1268B3]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1268B3] hover:bg-[#0A2540] text-white py-3 rounded-lg font-bold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit Enrollment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollCourseForm;