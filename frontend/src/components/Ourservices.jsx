import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const ServicesHero = () => {
  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1585247226801-bc613c441316?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Website Development",
      description:
        "Build a powerful online presence with our expert website development services. We design fast, responsive, and user-friendly websites that engage visitors and drive business growth.",
      path: "/website/web-development-services-mern-stack-wordpress-development-company",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1769293785689-f8f17e6cb4e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "VAPT Services",
      description:
        "Protect your business from cyber threats with our advanced Vulnerability Assessment and Penetration Testing. Identify, analyze, and fix security gaps before hackers exploit them. Stay secure, stay ahead.",
      path: "/vapt/achieve-digital-resilience-end-to-end-vapt-security-assurance",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Digital Marketing Services",
      description:
        "Empower your brand with smart digital marketing strategies that attract, engage, and convert customers through SEO, social media, and performance marketing.",
      path: "/digitalmarketing/digital-marketing-service-grow-your-business-in-the-online-world",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
      title: "Mobile App Development",
      description:
        "Build seamless mobile experiences with our expert app development. From concept to launch, we deliver intuitive, high-performing apps that grow your business on iOS and Android.",
      path: "/app/mobile-app-development-services-android-flutter-app-development-company",
    },
    {
      id: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Data Analytics",
      description:
        "Turn data into decisions with our Data Analytics services. Gain actionable insights, optimize strategies, and accelerate business growth effortlessly.",
      path: "/dataanalytics/data-analytics-services-power-bi-tableau-consulting-company",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1587955415524-bb264e518428?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc2VhcmNoJTIwYW5kJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      title: "Research and Development",
      description:
        "Driving innovation through AI and ML research, we develop intelligent solutions that enhance efficiency, predict trends, and transform data into actionable insights for smarter decision-making.",
      path: "/research/research-development-strategies-to-transform-your-business",
    },
  ];

return (
  <div className="min-h-screen bg-[#FFFFFF] text-[#172033] py-12 px-4 sm:px-6 lg:px-8">
    {/* Hero Header */}
    <div className="max-w-8xl mx-auto mb-8 text-center">
      <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] mb-4">
        Our <span className="text-[#1268B3]">Services</span>
      </h1>
      <p className="text-lg font-medium text-[#172033]/80 max-w-3xl mx-auto">
        Explore our wide range of innovative IT services designed to drive
        growth, efficiency, and digital transformation at VIQ Technologies
      </p>
    </div>

    {/* Services Grid */}
    <div className="max-w-8xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#F1F5F9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#172033]/10 hover:border-[#1268B3] transition-all duration-300 group flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-50 overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-[#0A2540] group-hover:text-[#1268B3] transition-colors mb-2">
                {service.title}
              </h3>

              <p className="text-[#172033]/80 text-base leading-relaxed mb-6 text-justify">
                {service.description}
              </p>

              {/* Read More Button */}
              <div className="mt-auto">
                <Link to={service.path}>
                  <motion.button
                    className="inline-flex px-4 py-2 cursor-pointer active:scale-80 rounded-xl bg-[#1268B3] hover:bg-[#0A2540] items-center text-white font-semibold transition-colors duration-200 shadow-md"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/services">
          <motion.button
            className="px-6 py-3 active:scale-80 cursor-pointer rounded-xl bg-[#0A2540] text-[#D9A52E] font-bold shadow-lg hover:bg-[#1268B3] hover:text-white transition-colors duration-200 float-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Services
          </motion.button>
        </Link>
      </div>
    </div>
  </div>
);

};

export default ServicesHero;
