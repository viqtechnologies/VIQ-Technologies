import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logonavbar1.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    // { name: "Blog", href: "/blog" },
    // { name: "Career", href: "/career" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];


  const services = [
    {
      name: "Web Development",
      targetLink:
        "/website/web-development-services-mern-stack-wordpress-development-company",
    },
    {
      name: "Mobile App Development",
      targetLink:
        "/app/mobile-app-development-services-android-flutter-app-development-company",
    },
    {
      name: "VAPT Services",
      targetLink:
        "/vapt/achieve-digital-resilience-end-to-end-vapt-security-assurance",
    },
    {
      name: "Digital Marketing",
      targetLink:
        "/digitalmarketing/digital-marketing-service-grow-your-business-in-the-online-world",
    },
    
    {
      name: "Data Analytics",
      targetLink:
        "/dataanalytics/data-analytics-services-power-bi-tableau-consulting-company",
    },
    {
      name: "Research & Development",
      targetLink:
        "/research/research-development-strategies-to-transform-your-business",
    },
  ];


  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      href: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: "fab fa-google",
      href: "https://share.google/zEKwb6roKNyPtxeBW",
      label: "Google",
    },
    {
      icon: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/company/viqtechnologies/",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/viqtechnologies",
      label: "Instagram",
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [isVisible]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style>
        {`
        @keyframes bgMove {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        .animate-bg {
          animation: bgMove 20s ease infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.float-bounce {
  animation: floatBounce 3s ease-in-out infinite;
}

        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .before-animation {
          opacity: 0;
        }

      `}
      </style>

      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-[#0A2540] text-[#F1F5F9]"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40 animate-bg pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1268B3] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D9A52E] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Stats */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-fade-in-left" : "before-animation"
              }`}
            >
              <img
                src={Logo}
                alt="AIT Logo"
                className="w-30 h-auto float-bounce transition-transform duration-300 hover:scale-105 filter invert brightness-0"
              />
              <p className="text-[#F1F5F9] text-md leading-relaxed">
                Leading the way in innovative technology solutions, delivering
                excellence and transforming businesses through cutting-edge IT
                services.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div
              className={`${
                isVisible ? "animate-fade-in-up delay-100" : "before-animation"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#D9A52E] mb-6 relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#D9A52E] to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      isVisible ? "animate-fade-in-right" : "before-animation"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center text-[#F1F5F9] text-md transition-all duration-300 hover:text-[#D9A52E] hover:translate-x-1"
                    >
                      <span className="mr-2 text-[#D9A52E] text-xl transition-transform duration-300 group-hover:translate-x-1">
                        ›
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div
              className={`${
                isVisible ? "animate-fade-in-up delay-200" : "before-animation"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#D9A52E] mb-6 relative pb-3">
                Our Services
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#D9A52E] to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className={`flex items-center text-[#F1F5F9] text-md transition-colors duration-300 hover:text-[#D9A52E] cursor-pointer ${
                      isVisible ? "animate-fade-in-left" : "before-animation"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <span className="text-[#D9A52E] text-2xl mr-3">›</span>

                    <a href={service.targetLink} className="hover:text-[#D9A52E] transition-colors">{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get In Touch */}
            <div
              className={`${
                isVisible
                  ? "animate-fade-in-right delay-300"
                  : "before-animation"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#D9A52E] mb-6 relative pb-3">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#D9A52E] to-transparent"></span>
              </h3>
              <div className="space-y-5">
                <div
                  className={`flex gap-3 transition-transform duration-300 hover:translate-x-1 ${
                    isVisible
                      ? "animate-fade-in-up delay-400"
                      : "before-animation"
                  }`}
                >
                  <i className="fas fa-map-marker-alt text-[#D9A52E] text-lg mt-1 min-w-5"></i>

                  <p className="text-[#F1F5F9] text-md leading-relaxed space-y-3 marker:text-xl">
                    SCF2, 2nd floor, GTB market Khanna, Punjab
                  </p>
                </div>

                <div
  className={`flex flex-col gap-3 transition-transform duration-300 hover:translate-x-1 ${
    isVisible
      ? "animate-fade-in-up delay-500"
      : "before-animation"
  }`}
>
  {/* First Number */}
  <div className="flex items-center gap-3">
    <i className="fas fa-phone-alt text-[#D9A52E] text-lg min-w-5"></i>

    <a
      href="tel:+917986067505"
      className="text-[#F1F5F9] text-md transition-colors duration-300 hover:text-[#D9A52E]"
    >
      +91-79860 67505
    </a>
  </div>

  {/* Second Number */}
  <div className="flex items-center gap-3">
    <i className="fas fa-phone-alt text-[#D9A52E] text-lg min-w-5"></i>

    <a
      href="tel:+918968092326"
      className="text-[#F1F5F9] text-md transition-colors duration-300 hover:text-[#D9A52E]"
    >
      +91-89680 92326
    </a>
  </div>
</div>
                <div
                  className={`flex gap-3 items-center transition-transform duration-300 hover:translate-x-1 ${
                    isVisible
                      ? "animate-fade-in-up delay-600"
                      : "before-animation"
                  }`}
                >
                  <i className="fas fa-envelope text-[#D9A52E] text-lg min-w-5"></i>
                  <a
                    href="mailto:viqtechnologies@gmail.com"
                    className="text-[#F1F5F9] text-md transition-colors duration-300 hover:text-[#D9A52E]"
                  >
                    viqtechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-[#1268B3]/20 border border-[#1268B3]/40 flex items-center justify-center text-[#D9A52E] transition-all duration-300 hover:bg-[#D9A52E] hover:text-[#0A2540] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D9A52E]/30 ${
                      isVisible ? "animate-scale-in" : "before-animation"
                    }`}
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`relative z-10 border-t border-[#D9A52E]/30 ${
            isVisible ? "animate-fade-in-up delay-500" : "before-animation"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 text-center">
            <a
              href="https://www.anshinfotech.org/"
              target="_blank"
              className="text-[#F1F5F9] text-sm hover:text-[#D9A52E] transition-colors"
            >
              © VIQ Technologies <span>- All Rights Reserved</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
