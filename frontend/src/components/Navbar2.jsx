// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import Logo from "../assets/logonavbar1.png";
import EnquiryFormModal from "../components2/Enquiryform.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleFormOpen = () => setIsEnquiryOpen(true);
  const handleFormClose = () => setIsEnquiryOpen(false);

  return (
    <>
      <nav className="bg-[#FFFFFF] shadow-md w-full sticky top-0 z-40 border-b border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* =========================
                Logo + V Education Services
            ========================== */}
            <div className="flex-shrink-0 flex items-center">

              {/* V-IQ Technologies Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="V-IQ Technologies"
                  className="h-12 w-auto lg:h-16"
                />
              </Link>

              {/* Divider */}
              <div className="hidden sm:block h-10 w-px bg-gray-300 mx-4"></div>

              {/* V Education Services */}
              <div className="hidden sm:flex items-center gap-2">
                <GraduationCap
                  className="w-7 h-7 text-[#1268B3]"
                  strokeWidth={2.5}
                />

                <span className="text-[#1268B3] font-bold text-base lg:text-lg whitespace-nowrap">
                  A unit of VEducation Services
                </span>
              </div>

            </div>

            {/* =========================
                Desktop Navigation
            ========================== */}
            <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">

              {/* Home */}
              <Link
                to="/"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                About
              </Link>

              {/* Services */}
              <Link
                to="/services"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Services
              </Link>

              {/* Courses */}
              <Link
                to="/courses"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Courses
              </Link>

              {/* Blogs - currently disabled */}
              {/* 
              <Link
                to="/blog"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Blogs
              </Link>
              */}

              {/* Career - currently disabled */}
              {/* 
              <Link
                to="/career"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Career
              </Link>
              */}

              {/* FAQ */}
              <Link
                to="/faq"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                FAQ's
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="text-[#172033] hover:text-[#1268B3] font-bold text-base xl:text-lg transition-colors"
              >
                Contact
              </Link>

              {/* Enquire Now */}
              <button
                onClick={handleFormOpen}
                className="cursor-pointer active:scale-95 text-white bg-[#1268B3] px-5 py-2.5 rounded-lg font-bold text-base xl:text-lg hover:bg-[#0A2540] shadow-md hover:shadow-lg transition whitespace-nowrap"
              >
                Enquire Now
              </button>

            </div>

            {/* =========================
                Mobile Menu Button
            ========================== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-[#172033] hover:text-[#1268B3] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>

          </div>

          {/* =========================
              Mobile Menu
          ========================== */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-[#F1F5F9]">

              {/* Mobile V Education Services */}
              <div className="sm:hidden flex items-center gap-2 px-4 py-4 border-b border-[#F1F5F9]">
                <GraduationCap
                  className="w-6 h-6 text-[#1268B3]"
                  strokeWidth={2.5}
                />

                <span className="text-[#1268B3] font-bold text-base">
                 A unit of VEducation Services
                </span>
              </div>

              <div className="flex flex-col space-y-1 pt-2">

                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  About
                </Link>

                {/* Services */}
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Services
                </Link>

                {/* Courses */}
                <Link
                  to="/courses"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Courses
                </Link>

                {/* Blogs - currently disabled */}
                {/* 
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Blogs
                </Link>
                */}

                {/* Career - currently disabled */}
                {/* 
                <Link
                  to="/career"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Career
                </Link>
                */}

                {/* FAQ */}
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  FAQ's
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-[#172033] hover:text-[#1268B3] px-4 py-3 hover:bg-[#F1F5F9] rounded font-semibold transition"
                >
                  Contact
                </Link>

                {/* Enquire Now */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleFormOpen();
                  }}
                  className="mx-4 mt-4 bg-[#1268B3] text-white font-bold py-3 rounded-lg hover:bg-[#0A2540] active:scale-95 transition"
                >
                  Enquire Now
                </button>

              </div>
            </div>
          )}

        </div>
      </nav>

      {/* =========================
          Global Enquiry Modal
      ========================== */}
      <EnquiryFormModal
        isOpen={isEnquiryOpen}
        onClose={handleFormClose}
      />
    </>
  );
};

export default Navbar;
