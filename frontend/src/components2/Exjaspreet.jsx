import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Expertise = ({ expertise }) => {
  const bgImages = [
    "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOfKER2wccz8_UMtG0Jk4uQH2TgkUuHQhGT08EkFTOk=",
    "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2b3BzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  ];

  const tags = ["Security", "Infrastructure", "Stack", "Strategy"];

  return (
    <>
      <section
        className="relative py-15 px-6 md:px-12 bg-white overflow-hidden"
        style={{ fontFamily: "'Calibri', 'Candara', 'Segoe UI', sans-serif" }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            {/* <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                Technical Proficiencies
              </h2>
            </div> */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <span className="h-8 w-1.5 bg-blue-600 rounded-full"></span>
                Technical Proficiencies
              </h2>
            </div>

            {/* Custom Slider Controls */}
            <div className="flex gap-3">
              <button className="exp-prev bg-white border border-gray-200 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button className="exp-next bg-white border border-gray-200 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Slider Implementation */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".exp-prev",
              nextEl: ".exp-next",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="exp-swiper !pb-16"
          >
            {expertise.map((exp, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="group relative bg-[#f3f4f6] p-8 rounded-[2.5rem] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.2)] hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full border border-gray-100">
                  {/* Hover Background Image Overlay */}
                  <div
                    className="absolute inset-0 z-0 transition-opacity duration-700 bg-cover bg-center"
                    style={{
                      backgroundImage: `
      linear-gradient(rgba(37, 99, 235, 0.6), rgba(37, 99, 235, 0.6)),
      url(${bgImages[i]})
    `,
                    }}
                  ></div>

                  {/* Hover Border Left Accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-blue-600 transition-all duration-500 group-hover:h-full z-20"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500  group-hover:scale-105">
                        {React.cloneElement(exp.icon, {
                          size: 28,
                          className: "text-white",
                        })}
                      </div>
                      <span className="text-[10px]  uppercase tracking-widest  border-2 px-3 py-1 rounded-full border-blue-900 text-blue-700 transition-all bg-blue-300 shadow-sm">
                        {tags[i]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-100 mb-6 transition-colors group-hover:text-gray-900">
                      {exp.title}
                    </h3>

                    <ul className="space-y-3 mb-10 flex-grow">
                      {exp.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-lg text-gray-200 font-bold leading-tight flex items-start gap-2"
                        >
                          <span className="text-gray-100">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="relative py-15 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden w-full">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Label - Improved for Mobile scaling */}
          <div className="inline-block bg-blue-300 rounded-full px-6 py-2 mb-10">
            <p className="text-blue-900 text-sm md:text-lg font-semibold uppercase tracking-widest">
              Professional Vision
            </p>
          </div>

          {/* Main Statement - Added break-words to prevent horizontal scroll */}
          <blockquote className="text-justify text-lg md:text-3xl font-semibold leading-relaxed md:leading-snug text-white break-words">
            “Jaspreet Grewal is committed to strengthening digital ecosystems by
            integrating advanced cybersecurity practices, DevOps automation, and
            scalable cloud infrastructure to help organizations build secure and
            future-ready technology solutions, while driving operational
            excellence through high-performance architectures and strategic
            innovation that safeguard critical data assets against the evolving
            complexities of the global threat landscape.”
          </blockquote>

          {/* Divider */}
          <div className="mt-10 flex justify-center">
            <div className="h-[2px] w-16 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Pagination Dot Styling */}
      <style jsx="true">{`
        .exp-swiper .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </>
  );
};

export default Expertise;
