
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import CountUp from "./Countup"; // Make sure this path is correct
import Hero from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      y: -4,
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      y: -2,
      scale: 0.98,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-[#FFFFFF] text-[#172033] py-8 md:py-14 px-4 sm:px-3 lg:px-3">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#172033] leading-tight"
                variants={titleVariants}
              >
                Empowering Futures with{" "}
                <span className="text-[#1268B3]">Technology</span> &{" "}
                <span className="text-[#D9A52E]">Innovation</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-[#172033]/80 leading-relaxed text-justify"
                variants={itemVariants}
              >
                VIQ Technologies delivers cutting-edge IT services and
                industry-ready training in
                <span className="font-semibold text-[#1268B3] text-justify">
                  {" "}
                  Cybersecurity, Cloud Computing, Artificial Intelligence,
                  Machine Learning, Web Development and Digital Marketing
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link to="/contact">
                <motion.button
                  className="bg-[#1268B3] hover:bg-[#0A2540] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Book a Meeting
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  className="border-2 border-[#1268B3] text-[#1268B3] hover:bg-[#1268B3]/10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image Breadcrumb */}
          <div className="lg:w-1/2 relative">
            <motion.div
              className="relative max-w-lg mx-auto"
              variants={itemVariants}
            >
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1268B3]/20"
                variants={imageVariants}
              >
                <motion.img
                  src={Hero}
                  alt="Tech Innovation"
                  className="w-full h-64 md:h-80 object-cover"
                  animate={floatVariants.animate}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
              </motion.div>

              {/* Floating Image 1 */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white"
                variants={imageVariants}
                animate={floatVariants.animate}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={Hero2}
                  alt="Tech Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A2540]/90 text-white p-2 md:p-3 border-t border-[#D9A52E]">
                  <div className="font-bold text-sm md:text-base text-[#D9A52E]">
                    Expert Team
                  </div>
                  <div className="text-xs md:text-sm text-slate-100">50+ Professionals</div>
                </div>
              </motion.div>

              {/* Floating Image 2 */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-36 h-36 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white"
                variants={imageVariants}
                animate={floatVariants.animate}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={Hero3}
                  alt="Training Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A2540]/90 text-white p-2 md:p-3 border-t border-[#D9A52E]">
                  <div className="font-bold text-sm md:text-base text-[#D9A52E]">
                    Hands-on Experience
                  </div>
                  <div className="text-xs md:text-sm text-slate-100">Smart Tech Solutions</div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <motion.div
                className="absolute -z-10 w-48 h-48 md:w-72 md:h-72 bg-[#1268B3]/10 rounded-full -top-6 -right-6 md:-top-10 md:-right-10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -z-10 w-40 h-40 md:w-64 md:h-64 bg-[#D9A52E]/10 rounded-full -bottom-4 -left-4 md:-bottom-8 md:-left-8 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;