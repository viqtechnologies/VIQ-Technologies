import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {Link} from "react-router-dom"
import {
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import aboutUs from "../assets/aboutus.png";
import aboutUs2 from "../assets/aboutus2.png";
const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Seamless IT Solutions",
      description:
        "Custom web, app, and cloud solutions tailored to your workflow.",
    },
    {
      icon: <Award className="w-4 h-4" />,
      title: "Future-Ready Tech Skills",
      description:
        "Learn to design, develop, and deploy scalable IT solutions for real businesses.",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Security-First Mindset",
      description:
        "VAPT and best practices that keep your infrastructure safe.",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Long-Term Partnerships",
      description:
        "Ongoing support, mentoring, and upgrades as your business scales.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Doubled from 0.2
        delayChildren: 0.2, // Doubled from 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // Doubled from 0.6
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.6, // Doubled from 0.8
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0, // Doubled from 0.5
        delay: 0.8, // Doubled from 0.4
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0, // Doubled from 0.5
        delay: 1.0 + i * 0.2, // Doubled from 0.5 + i * 0.1
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0, // Doubled from 0.5
        delay: 1.6, // Doubled from 0.8
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#F1F5F9] text-[#172033] h-auto lg:h-[600px] py-8 lg:py-0 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#1268B3]/10 blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#D9A52E]/10 blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl h-full flex items-center">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Image Section */}
          <div className="relative w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div className="relative group" variants={imageVariants}>
              {/* Main Large Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl transform transition-all duration-700 group-hover:scale-[1.02] border-2 border-[#1268B3]/20"
                variants={imageVariants}
              >
                <img
                  src={aboutUs}
                  alt="Professional team collaboration"
                  className="h-[250px] sm:h-[300px] lg:h-[400px] w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
              </motion.div>

              {/* Floating Small Image */}
              <motion.div
                className="absolute -bottom-4 lg:-bottom-3 -right-3 lg:-right-4 w-[45%] lg:w-[55%] rounded-xl lg:rounded-2xl bg-white p-1.5 lg:p-1 shadow-xl transform transition-all duration-700 hover:scale-105 hover:rotate-1 border border-[#1268B3]/20"
                variants={imageVariants}
                transition={{ delay: 0.4 }}
              >
                <img
                  src={aboutUs2}
                  alt="Innovation and technology"
                  className="h-24 sm:h-32 lg:h-36 w-full rounded-lg lg:rounded-xl object-cover"
                />
              </motion.div>

              {/* Activity Badge */}
              <motion.div
                className="absolute top-3 lg:top-4 -left-2 lg:-left-3 rounded-xl lg:rounded-2xl bg-[#0A2540] border border-[#D9A52E]/40 px-2 lg:px-3 py-1.5 lg:py-2 shadow-lg flex items-center gap-2 transform transition-all duration-500 hover:scale-105 animate-pulse-slow"
                variants={badgeVariants}
              >
                <div className="flex h-7 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-[#D9A52E] text-[#0A2540] text-xs lg:text-sm font-bold shadow-lg">
                  <Zap className="w-3 h-3 lg:w-4 lg:h-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[9px] lg:text-[10px] font-semibold text-slate-300 uppercase tracking-wide">
                    Execution
                  </p>
                  <p className="text-[10px] lg:text-xs font-bold text-[#D9A52E]">
                    Agile Development
                  </p>
                </div>
              </motion.div>

              {/* Success Badge */}
              <motion.div
                className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-3 lg:left-4 rounded-lg lg:rounded-xl bg-[#1268B3] px-2 lg:px-3 py-1.5 lg:py-2 shadow-lg transform transition-all duration-500 hover:scale-105"
                variants={badgeVariants}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-1.5 lg:gap-2 text-white">
                  <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-[10px] lg:text-xs font-bold">
                    500+ Projects
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              className="inline-block mb-2 lg:mb-3 px-3 lg:px-4 py-1.5 lg:py-2 bg-[#1268B3]/10 border border-[#1268B3]/30 backdrop-blur-sm rounded-full"
              variants={itemVariants}
            >
              <p className="text-sm lg:text-xl font-bold uppercase tracking-wider text-[#1268B3] flex items-center gap-1.5 lg:gap-2">
                About Us
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] leading-tight mb-2 lg:mb-3 "
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              From Concept to Code:{" "}
              
              <span className="text-[#1268B3]">
                Your Digital Future Starts Here
              </span>
            </motion.h2>

            <motion.p
              className="text-sm lg:text-base text-[#172033]/80 mb-2 lg:mb-3 leading-relaxed text-justify"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              VIQ Technologies is a leading IT solutions and development company
              specializing in Cybersecurity, Cloud Computing, Web Development,
              Artificial Intelligence (AI), Machine Learning (ML), and Custom
              Software Development. We empower businesses with secure, scalable,
              and innovative digital solutions designed to meet today's
              fast-changing technology needs.
            </motion.p>

            {/* Interactive Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-3 mb-4 lg:mb-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureItemVariants}
                  className={`group relative flex items-start gap-2 lg:gap-2.5 p-2.5 lg:p-3 rounded-xl transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? "bg-white border-2 border-[#1268B3] shadow-md scale-105"
                      : "bg-white/70 hover:bg-white border border-[#172033]/10"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={`flex-shrink-0 h-8 w-8 lg:h-9 lg:w-9 flex items-center justify-center rounded-lg transition-all duration-500 ${
                      activeFeature === index
                        ? "bg-[#1268B3] text-white shadow-md scale-110"
                        : "bg-[#F1F5F9] text-[#1268B3] group-hover:bg-[#1268B3] group-hover:text-white"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs lg:text-sm font-bold text-[#172033] mb-0.5">
                      {feature.title}
                    </p>
                    <p className="text-[10px] lg:text-xs text-[#172033]/80 leading-relaxed text-justify">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2.5 lg:gap-3"
              variants={buttonVariants}
            >
              <Link to="/contact">
                <button className="group px-5 lg:px-6 py-2.5 lg:py-3 bg-[#1268B3] hover:bg-[#0A2540] text-white rounded-xl font-bold text-xs lg:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get Started
                  <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-[#1268B3] rounded-xl font-bold text-xs lg:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-[#1268B3] hover:bg-[#1268B3]/5">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
