
// import React, { useEffect, useRef, useState } from "react";
// import Website from '../assets/services/website.jpg'
// import Cyber from '../assets/services/cyber.jpg'
// import Digitalmarketing from '../assets/services/digitalmarketing.jpg'
// import Mobileapp from '../assets/services/mobileapp.jpg'
// import Dataanalytics from '../assets/services/dataanalytics.jpg'
// import Research from '../assets/services/research.png'
// import {Link} from 'react-router-dom'
//  import EnquiryFormModal from "../components2/Enquiryform";

// const Services = () => {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const servicesRef = useRef(null);
// const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

//   const handleFormOpen = () => setIsEnquiryOpen(true);
//   const handleFormClose = () => setIsEnquiryOpen(false);

//   const services = [
//     {
//       title: "Website Development",
//       description:
//         "Build a powerful online presence with our expert website development services. We design fast, responsive, and user-friendly websites that engage visitors and drive business growth.",
//       image: Website,
//       link: "/website",
//     },
//     {
//       title: "VAPT Services",
//       description:
//         "Protect your business from cyber threats with our advanced Vulnerability Assessment and Penetration Testing. Identify, analyze, and fix security gaps before hackers exploit them.",
//       image: Cyber,
//       link: "/vapt",
//     },
//     {
//       title: "Digital Marketing Services",
//       description:
//         "Empower your brand with smart digital marketing strategies that attract, engage, and convert customers through SEO, social media, and performance marketing",
//       image: Digitalmarketing,
//       link: "/digitalmarketing",
//     },
//     {
//       title: "Mobile App Development",
//       description:
//         "Build seamless mobile experiences with our expert app development. From concept to launch, we deliver intuitive, high-performing apps that grow your business on iOS and Android.",
//       image: Mobileapp,
//       link: "/app",
//     },
//     {
//       title: "Data Analytics",
//       description:
//         "Turn data into decisions with our Data Analytics services. Gain actionable insights, optimize strategies, and accelerate business growth effortlessly.",
//       image: Dataanalytics,
//       link: "/dataanalytics",
//     },
//     {
//       title: "Research & Development",
//       description:
//         "Driving innovation through AI and ML research, we develop intelligent solutions that enhance efficiency, predict trends, and transform data into actionable insights.",
//       image: Research,
//       link:"/research"
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.dataset.index);
//             if (!visibleCards.includes(index)) {
//               setVisibleCards((prev) => [...prev, index]);
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = document.querySelectorAll(".service-card");
//     cards.forEach((card) => observer.observe(card));

//     return () => {
//       cards.forEach((card) => observer.unobserve(card));
//     };
//   }, [visibleCards]);

//   return (
//     <>
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-fade-in-down {
//           animation: fadeInDown 0.8s ease-out forwards;
//         }

//         .card-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .card-hidden {
//           opacity: 0;
//           transform: translateY(40px);
//         }
//       `}</style>

//       <section
//         ref={servicesRef}
//         className="bg-gradient-to-br from-gray-300 via-white to-blue-200 py-10 px-6"
//         id="services"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-16 animate-fade-in-down">
//             <h2 className="text-5xl font-bold text-blue-900"> Our Services</h2>
//             <p className="text-2xl text-blue-700 font-semibold mb-6">
//               We provide a wide range of Services
//             </p>
//             <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-4 text-justify">
//               At ANSH Info Tech, we blend innovation, technology, and expertise
//               to help businesses thrive in the digital era. From web development
//               to AI-driven solutions and cybersecurity, we deliver reliable,
//               scalable, and future-ready IT services. We focus on creating
//               tailored digital experiences that solve real business challenges
//               and accelerate growth. Our team combines creative thinking with
//               advanced engineering to ensure every project exceeds expectations.
//               With a commitment to quality, transparency, and long-term
//               partnerships, we empower brands to stay ahead in a rapidly
//               evolving tech landscape.
//             </p>
//             <button
//               onClick={handleFormOpen}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Book Appointment
//             </button>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 data-index={index}
//                 className={`service-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-blue-100 ${
//                   visibleCards.includes(index) ? "card-visible" : "card-hidden"
//                 }`}
//                 style={{
//                   transitionDelay: visibleCards.includes(index)
//                     ? `${index * 0.1}s`
//                     : "0s",
//                 }}
//               >
//                 {/* Image Section */}
//                 <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center  overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                   <h4 className="text-xl font-bold text-blue-900 mb-3">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed text-sm text-justify">
//                     {service.description}
//                   </p>

//                   <Link
//                     to={service.link}
//                     className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 group"
//                   >
//                     Learn More
//                     <span className="transform transition-transform duration-300 group-hover:translate-x-1">
//                       →
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="relative mt-15 mb-5 px-4">
//           {/* Glow / Accent Background */}
//           <div className="absolute inset-0 flex justify-center">
//             <div className="w-full max-w-5xl h-40 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 blur-3xl rounded-3xl pointer-events-none" />
//           </div>

//           <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl px-6 sm:px-10 pt-10 pb-8 text-center shadow-2xl border border-white/10 overflow-hidden group backdrop-blur-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.7)]">
//             <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
//               How can we help you?
//             </h3>

//             <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6 text-justify">
//               We're here to answer your questions and provide the right IT
//               solutions for your business. Whether you need expertise in web
//               development, AI, cybersecurity, or IT consulting, our team is
//               always ready to assist you. We focus on understanding your goals
//               and crafting tailored, future-ready strategies that truly make an
//               impact. With a commitment to innovation, professionalism, and
//               long-term reliability, we ensure that you receive the guidance and
//               support you need at every step of your digital journey.
//             </p>

//             {/* CTA + secondary action */}
//             <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link to="/contact">
//                 <button className="relative float-bounce inline-flex items-center justify-center gap-2 px-7 py-3.5 cursor-pointer rounded-2xl text-sm sm:text-base font-semibold text-blue-900 bg-gradient-to-r from-white via-slate-100 to-blue-100 shadow-lg shadow-slate-900/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.85)] active:scale-95 transition-all duration-300">
//                   <span>Get in touch</span>
//                   <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white text-lg text-xs group-hover:translate-x-0.5 transition-transform">
//                     →
//                   </span>
//                   {/* Button glow */}
//                   <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <EnquiryFormModal isOpen={isEnquiryOpen} onClose={handleFormClose} />
//     </>
//   );
// };

// export default Services;


import React, { useEffect, useRef, useState } from "react";
import Website from "../assets/services/website.jpg";
import Cyber from "../assets/services/cyber.jpg";
import Digitalmarketing from "../assets/services/digitalmarketing.jpg";
import Mobileapp from "../assets/services/mobileapp.jpg";
import Dataanalytics from "../assets/services/dataanalytics.jpg";
import Research from "../assets/services/research.png";
import { Link } from "react-router-dom";
import EnquiryFormModal from "../components2/Enquiryform";

// simple slugify helper
const stringToSlug = (str) => {
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
    .trim()
    .replace(/\s+/g, "-") // spaces to -
    .replace(/-+/g, "-"); // collapse dashes
};

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const servicesRef = useRef(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleFormOpen = () => setIsEnquiryOpen(true);
  const handleFormClose = () => setIsEnquiryOpen(false);

  const rawServices = [
    {
      title: "Website Development",
      pageTitle:
        "Web Development Services | MERN Stack & WordPress Development Company",
      description:
        "Build a powerful online presence with our expert website development services. We design fast, responsive, and user-friendly websites that engage visitors and drive business growth.",
      image: Website,
      baseLink: "/website",
    },
    {
      title: "VAPT Services",
      pageTitle:
        "Achieve Digital Resilience: End-to-End VAPT & Security Assurance",
      description:
        "Protect your business from cyber threats with our advanced Vulnerability Assessment and Penetration Testing. Identify, analyze, and fix security gaps before hackers exploit them.",
      image: Cyber,
      baseLink: "/vapt",
    },
    {
      title: "Digital Marketing Services",
      pageTitle:
        "Digital Marketing Service: Grow Your Business in the Online World",
      description:
        "Empower your brand with smart digital marketing strategies that attract, engage, and convert customers through SEO, social media, and performance marketing",
      image: Digitalmarketing,
      baseLink: "/digitalmarketing",
    },
    {
      title: "Mobile App Development",
      pageTitle:
        "Mobile App Development Services | Android & Flutter App Development Company",
      description:
        "Build seamless mobile experiences with our expert app development. From concept to launch, we deliver intuitive, high-performing apps that grow your business on iOS and Android.",
      image: Mobileapp,
      baseLink: "/app",
    },
    {
      title: "Data Analytics",
      pageTitle:
        "Data Analytics Services | Power BI & Tableau Consulting Company",
      description:
        "Turn data into decisions with our Data Analytics services. Gain actionable insights, optimize strategies, and accelerate business growth effortlessly.",
      image: Dataanalytics,
      baseLink: "/dataanalytics",
    },
    {
      title: "Research & Development",
      pageTitle: "Research & Development Strategies to Transform Your Business",
      description:
        "Driving innovation through AI and ML research, we develop intelligent solutions that enhance efficiency, predict trends, and transform data into actionable insights.",
      image: Research,
      baseLink: "/research",
    },
  ];

  // derive final services with URL slugs
  const services = rawServices.map((service) => {
    const pageSlug = stringToSlug(service.pageTitle);
    return {
      ...service,
      pageSlug,
      // final URL that will appear in the browser
      link: `${service.baseLink}/${pageSlug}`,
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [visibleCards]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-hidden {
          opacity: 0;
          transform: translateY(40px);
        }
      `}</style>

      <section
        ref={servicesRef}
        className="bg-[#FFFFFF] py-10 px-6"
        id="services"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-5xl font-bold text-[#0A2540]"> Our Services</h2>
            <p className="text-2xl text-[#1268B3] font-semibold mb-6">
              We provide a wide range of Services
            </p>
            <p className="text-[#172033] text-lg max-w-7xl mx-auto leading-relaxed mb-4 text-justify">
              At VIQ Technologies, we blend innovation, technology, and expertise
              to help businesses thrive in the digital era. From web development
              to AI-driven solutions and cybersecurity, we deliver reliable,
              scalable, and future-ready IT services. We focus on creating
              tailored digital experiences that solve real business challenges
              and accelerate growth. Our team combines creative thinking with
              advanced engineering to ensure every project exceeds expectations.
              With a commitment to quality, transparency, and long-term
              partnerships, we empower brands to stay ahead in a rapidly
              evolving tech landscape.
            </p>
            <button
              onClick={handleFormOpen}
              className="bg-[#1268B3] hover:bg-[#0A2540] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Appointment
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`service-card bg-[#F1F5F9] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200 hover:border-[#1268B3] ${
                  visibleCards.includes(index) ? "card-visible" : "card-hidden"
                }`}
                style={{
                  transitionDelay: visibleCards.includes(index)
                    ? `${index * 0.1}s`
                    : "0s",
                }}
              >
                {/* Image Section */}
                <div className="h-48 bg-[#0A2540]/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#0A2540] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-[#172033] leading-relaxed text-sm text-justify">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-4 text-[#1268B3] font-bold hover:text-[#0A2540] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Learn More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="relative mt-15 mb-5 px-4">
          {/* Glow / Accent Background */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-full max-w-9xl h-40 bg-[#1268B3]/20 blur-3xl rounded-3xl pointer-events-none" />
          </div>

          <div className="relative max-w-9xl mx-auto bg-[#0A2540] rounded-3xl px-6 sm:px-10 pt-10 pb-8 text-center shadow-2xl border border-white/10 overflow-hidden group backdrop-blur-lg transition-transform duration-500 hover:-translate-y-1">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              How can we help you?
            </h3>

            <p className="text-[#F1F5F9] text-base sm:text-lg max-w-9xl mx-auto leading-relaxed mb-6 text-justify">
              We're here to answer your questions and provide the right IT
              solutions for your business. Whether you need expertise in web
              development, AI, cybersecurity, or IT consulting, our team is
              always ready to assist you. We focus on understanding your goals
              and crafting tailored, future-ready strategies that truly make an
              impact. With a commitment to innovation, professionalism, and
              long-term reliability, we ensure that you receive the guidance and
              support you need at every step of your digital journey.
            </p>

            {/* CTA + secondary action */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <button className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 cursor-pointer rounded-2xl text-sm sm:text-base font-bold text-[#0A2540] bg-[#D9A52E] hover:bg-yellow-400 shadow-lg active:scale-95 transition-all duration-300">
                  <span>Get in touch</span>
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#0A2540] text-white text-xs group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <EnquiryFormModal isOpen={isEnquiryOpen} onClose={handleFormClose} />
    </>
  );
};

export default Services;

