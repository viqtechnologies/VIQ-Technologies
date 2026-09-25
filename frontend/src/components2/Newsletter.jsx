import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Zap,
  Bot,
  ExternalLink,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your assets
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero1.jpg";

const AiNewsSlider = () => {
  const aiNews = [
    {
      id: 1,
      tag: "Innovation",
      title: "Autonomous Customer Support Agents",
      description:
        " VIQ Technologies developed a suite of AI Agents for a leading retail brand, reducing response times by 90% using autonomous intent recognition and resolution.",
      image: img1,
      icon: <Bot className="text-blue-500" size={20} />,
    },
    {
      id: 2,
      tag: "Enterprise",
      title: "Smart Supply Chain Optimization",
      description:
        "Our latest AI Agents now handle real-time inventory tracking and predictive ordering for manufacturing plants, minimizing human error in logistics.",
      image: img2,
      icon: <Zap className="text-yellow-500" size={20} />,
    },
    {
      id: 3,
      tag: "Development",
      title: "Multi-Agent Systems (MAS) for Devs",
      description:
        "We've launched a platform where developers can build 'Agent Squads'—multiple AI agents that collaborate to write, test, and deploy code automatically.",
      image: img1,
      icon: <Cpu className="text-purple-500" size={20} />,
    },
    {
      id: 4,
      tag: "Real-World",
      title: "AI-Driven Healthcare Scheduling",
      description:
        "A real-world implementation of our scheduling agents in local clinics has automated 100% of patient bookings and follow-up reminders.",
      image: img2,
      icon: <Bot className="text-green-500" size={20} />,
    },
  ];

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-gray-900 font-bold tracking-widest uppercase text-xl flex justify-center items-center gap-2">
            <Cpu className="text-blue-700" size={20} />  VIQ Technologies: NEWS SECTION
          </span>
         
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider Container with Side Navigation */}
        <div className="relative group">
          {/* Custom Side Navigation Buttons */}
          <button className="news-prev-btn absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100">
            <ChevronLeft size={28} />
          </button>

          <button className="news-next-btn absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100">
            <ChevronRight size={28} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            navigation={{
              prevEl: ".news-prev-btn",
              nextEl: ".news-next-btn",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {aiNews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group/card">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover/card:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Case Study <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx="true">{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 28px !important;
          border-radius: 5px !important;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default AiNewsSlider;
