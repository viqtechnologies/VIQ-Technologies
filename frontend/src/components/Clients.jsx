// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import badge from "../assets/logoclients.jpg"

// import proforge from '../assets/clients/proforge.png'
// import proforge2 from "../assets/clients/proforge2.png";
// import holistic from "../assets/clients/holistic3.png"
// import zeetsamachar from "../assets/clients/zeetsamachar.jpg"
// import anand from "../assets/clients/anand2.png"
// import rinn from "../assets/clients/rinn3.png"
// const clients = [
//   {
//     name: "Patronage Health Services",
//     role: "Healthcare & Digital Wellness",
//     logo:proforge,
//     rating: 5,
//     quote:
//       "ANSH InfoTech's expertise in data security and compliance was crucial. They enabled us to successfully launch a sophisticated digital health platform that both our patients and doctors trust and rely on daily.",
//   },
//   {
//     name: "Proforge International",
//     role: "Global Manufacturing & Engineering",
//     logo: proforge2,
//     rating: 5,
//     quote:
//       "They delivered secure, scalable solutions that modernized our global operations, giving us real-time visibility and control across our international plants and complex supply chain.",
//   },
//   {
//     name: "Holistic Biosciences",
//     role: "Life Sciences & R&D",
//     logo: holistic,
//     rating: 5,
//     quote:
//       "We needed absolute security for our R&D and clinical data. ANSH InfoTech provided robust, specialized data protection systems that fully support our sensitive clinical trial processes and regulatory mandates.",
//   },
//   {
//     name: "Sewak Machines",
//     role: "Industrial Automation & IoT",
//     logo: badge,
//     rating: 5,
//     quote:
//       "The team delivered reliable IoT systems and clean machine dashboards that streamlined our operations. Their quick support was vital in minimizing operational downtime when it mattered most.",
//   },
//   {
//     name: "Anand Feed Mills",
//     role: "Agriculture & Supply Chain Tech",
//     logo: anand,
//     rating: 5,
//     quote:
//       "The custom solution brought unparalleled efficiency to our production. We now have real-time tracking and logistics planning, which has significantly reduced waste and improved our overall supply chain performance.",
//   },
//   {
//     name: "Rinn Samadhan",
//     role: "Fintech & Lending Services",
//     logo: rinn,
//     rating: 5,
//     quote:
//       "ANSH InfoTech is our trusted partner for secure transaction processing and compliance. Their VAPT services ensure our digital lending platform is not only safe but also fully compliant and trustworthy for all our users.",
//   },
//   {
//     name: "Zeet Samachar",
//     role: "Financial Consulting & Auditing",
//     logo: zeetsamachar,
//     rating: 5,
//     quote:
//       "Their agile approach, clear communication, and strong technical depth made them the ideal tech partner for integrating our complex data systems with seamless reporting and auditing tools.",
//   },
// ];
// const slideVariants = {
//   enter: { opacity: 0, x: 40, scale: 0.95 },
//   center: { opacity: 1, x: 0, scale: 1 },
//   exit: { opacity: 0, x: -40, scale: 0.95 },
// };

// const WhatOurClientsSay = () => {
//   const [index, setIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   // Auto-advance every 5 seconds
//   useEffect(() => {
//     if (!autoPlay) return;

//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % clients.length);
//     }, 5000);
//     return () => clearInterval(id);
//   }, [autoPlay]);

//   const current = clients[index];

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % clients.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + clients.length) % clients.length);
//   };

//   return (
//     <section className=" relative bg-gradient-to-b from-gray-300 via-slate-50 to-blue-200 py-2 sm:py-2 lg:py-2 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top,_#60a5fa_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_55%)]" />

//       {/* Floating elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-5 sm:mb-5">

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
//           >
//             What Our Clients Says
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-2 text-base sm:text-lg text-gray-800 font-semibold max-w-3xl mx-auto"
//           >
//             Discover how organizations across industries transform their digital
//             landscape with ANSH InfoTech
//           </motion.p>
//         </div>

//         {/* Main Slider Container - Increased height */}
//         <div className="max-w-6xl mx-auto relative mb-10">

//           <div className="relative bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-3xl shadow-2xl shadow-blue-100/50 p-6 sm:p-10 min-h-[380px] sm:min-h-[420px] flex items-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current.name}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="w-full"
//               >
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
//                   {/* Client Logo & Info */}
//                   <div className="flex-shrink-0">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className="relative group"
//                     >
//                       <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-blue-100 bg-white shadow-lg flex items-center justify-center p-4">
//                         <img
//                           src={current.logo}
//                           alt={current.name}
//                           className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//                         />
//                       </div>
//                       <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg border border-blue-100">

//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Testimonial Content */}
//                   <div className="flex-1">
//                     <div className="relative">
//                       <Quote
//                         className="absolute -top-6 -left-4 text-blue-100"
//                         size={40}
//                       />
//                       <p className="text-lg sm:text-xl text-slate-700 leading-relaxed pl-4 relative z-10 mb-6">
//                         "{current.quote}"
//                       </p>
//                     </div>

//                     <div className="border-t border-slate-100 pt-6">
//                       <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
//                         {current.name}
//                       </h3>
//                       <p className="text-blue-600 font-medium mt-1">
//                         {current.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Controls */}
//             <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-blue-100 ">
//               <button
//                 onClick={handlePrev}
//                 onMouseEnter={() => setAutoPlay(false)}
//                 onMouseLeave={() => setAutoPlay(true)}
//                 className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               {/* Enhanced Dots */}
//               <div className="flex items-center gap-2">
//                 {clients.map((c, i) => (
//                   <button
//                     key={c.name}
//                     onClick={() => {
//                       setIndex(i);
//                       setAutoPlay(false);
//                       setTimeout(() => setAutoPlay(true), 3000);
//                     }}
//                     onMouseEnter={() => setAutoPlay(false)}
//                     onMouseLeave={() => setAutoPlay(true)}
//                     className="flex flex-col items-center"
//                   >
//                     <div
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         i === index
//                           ? "w-8 bg-gradient-to-r from-blue-600 to-cyan-500"
//                           : "w-3 bg-blue-200 hover:bg-blue-300"
//                       }`}
//                     />
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={handleNext}
//                 onMouseEnter={() => setAutoPlay(false)}
//                 onMouseLeave={() => setAutoPlay(true)}
//                 className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhatOurClientsSay;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, CheckCircle2 } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Assets
import proforge from "../assets/clients/proforge.png";
import proforge2 from "../assets/clients/proforge2.png";
import holistic from "../assets/clients/holistic3.png";
import zeetsamachar from "../assets/clients/zeetsamachar.jpg";
import anand from "../assets/clients/anand2.png";
import rinn from "../assets/clients/rinn3.png";
import badge from "../assets/logoclients.jpg";
import bg1 from "../assets/clients/bg11.avif";
import bg2 from "../assets/clients/bg2.avif";
import bg3 from "../assets/clients/bg3.avif";
import bg4 from "../assets/clients/bg4.avif";
import bg5 from "../assets/clients/bg5.avif";
import bg6 from "../assets/clients/bg6.webp";
import bg7 from "../assets/clients/bg7.avif";

const WhatOurClientsSay = () => {
  const clients = [
    {
      name: "Patronage Health Services",
      role: "Healthcare & Digital Wellness",
      logo: proforge,
      bgImage: bg1,
      quote:
        "VIQ Technologies's expertise in data security and compliance was crucial. They enabled us to successfully launch a sophisticated digital health platform that both our patients and doctors trust and rely on daily.",
    },
    {
      name: "Proforge International",
      role: "Global Manufacturing & Engineering",
      logo: proforge2,
      bgImage: bg2,
      quote:
        "They delivered secure, scalable solutions that modernized our global operations, giving us real-time visibility and control across our international plants and complex supply chain.",
    },
    {
      name: "Holistic Biosciences",
      role: "Life Sciences & R&D",
      logo: holistic,
      bgImage: bg3,
      quote:
        "We needed absolute security for our R&D and clinical data. VIQ Technologies provided robust, specialized data protection systems that fully support our sensitive clinical trial processes and regulatory mandates.",
    },
    // {
    //   name: "Sewak Machines",
    //   role: "Industrial Automation & IoT",
    //   logo: badge,
    //   bgImage: bg4,
    //   quote:
    //     "The team delivered reliable IoT systems and clean machine dashboards that streamlined our operations. Their quick support was vital in minimizing operational downtime when it mattered most.",
    // },
    {
      name: "Anand Feed Mills",
      role: "Agriculture & Supply Chain Tech",
      logo: anand,
      bgImage: bg5,
      quote:
        "The custom solution brought unparalleled efficiency to our production. We now have real-time tracking and logistics planning, which has significantly reduced waste and improved our overall supply chain performance.",
    },
    {
      name: "Rinn Samadhan",
      role: "Fintech & Lending Services",
      logo: rinn,
      bgImage: bg6,
      quote:
        "VIQ Technologies is our trusted partner for secure transaction processing and compliance. Their VAPT services ensure our digital lending platform is not only safe but also fully compliant and trustworthy for all our users.",
    },
    {
      name: "Zeet Samachar",
      role: "Financial Consulting & Auditing",
      logo: zeetsamachar,
      bgImage: bg7,
      quote:
        "Their agile approach, clear communication, and strong technical depth made them the ideal tech partner for integrating our complex data systems with seamless reporting and auditing tools.",
    },
  ];

  return (
    <section className="relative py-15 bg-[#F1F5F9] text-[#172033] overflow-hidden">
      {/* MODERN BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1268B3]/5 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D9A52E]/5 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* SECTION HEADER - ULTRA MODERN */}
        <div className="flex flex-col items-center text-center gap-6 mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#1268B3]/10 border border-[#1268B3]/30 text-[#1268B3] text-xs sm:text-sm font-bold tracking-wide mb-5">
              <CheckCircle2 size={16} />
              TRUSTED BY INDUSTRY LEADERS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172033] leading-tight tracking-tight">
              What Our Clients <span className="text-[#D9A52E]">Say</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#172033]/80 text-base sm:text-lg md:text-xl max-w-3xl font-medium"
          >
            Discover how organizations across industries transform their digital
            landscape with VIQ Technologies
          </motion.p>
        </div>

        {/* SWIPER CAROUSEL */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-24"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative border border-[#1268B3]/20 hover:border-[#1268B3] rounded-[2rem] p-10 h-full flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-500"
                style={{
                  backgroundImage: `url(${client.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/*  Simple Deep Blue Overlay */}
                <div className="absolute inset-0 bg-[#0A2540]/90 rounded-[2rem]"></div>

                {/* TOP SECTION */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#D9A52E] text-[#D9A52E]"
                        />
                      ))}
                    </div>
                    <Quote
                      size={20}
                      className="text-[#D9A52E] transition-colors"
                    />
                  </div>

                  <p className="text-[#F1F5F9] text-md leading-[1.6] font-semibold mb-8 text-justify">
                    "{client.quote}"
                  </p>
                </div>

                {/* CLIENT INFO */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden group-hover:border-[#D9A52E] transition-colors">
                      <img
                        src={client.logo}
                        alt={client.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain transition-all duration-500 p-1"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {client.name}
                    </h4>
                    <p className="text-[#D9A52E] text-sm font-bold uppercase tracking-widest mt-1">
                      {client.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODERN PAGINATION CUSTOMIZATION */}
      <style jsx="true">{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          height: 4px !important;
          width: 24px !important;
          border-radius: 2px !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #1268B3 !important;
          width: 48px !important;
        }
      `}</style>
    </section>
  );
};

export default WhatOurClientsSay;
