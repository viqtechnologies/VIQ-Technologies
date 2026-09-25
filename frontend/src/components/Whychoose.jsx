import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  BadgeIndianRupee,
  Users,
  Clock,
  Target,
  Calendar,
} from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      icon: Palette,
      title: "Creative & Scalable Designs",
      description:
        "Our designs are not just visually stunning but also built to scale with your business growth. We create innovative solutions that adapt to your evolving needs.",
    },
    {
      icon: Users,
      title: "Expert Development Team",
      description:
        "Work with experienced developers who bring cutting-edge technical expertise and industry best practices to every project, ensuring high-quality deliverables.",
    },
    {
      icon: Clock,
      title: "24×7 Support",
      description:
        "Round-the-clock support means we're always here when you need us. Our dedicated team ensures your business runs smoothly without interruption.",
    },
    {
      icon: Target,
      title: "Result-Driven Approach",
      description:
        "We focus on measurable outcomes and tangible results. Every strategy is designed to drive growth, increase efficiency, and maximize your ROI.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Cost-Effective Solutions",
      description:
        "Get premium quality services without breaking the bank. We deliver exceptional value through efficient processes and smart resource management.",
    },
    {
      icon: Calendar,
      title: "On-Time Delivery",
      description:
        "We value your time and ensure all projects are completed efficiently, without compromising quality. Punctuality and precision are our commitments to you.",
    },
  ];

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/95 to-[#0A2540]/98"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Why Choose <span className="text-[#D9A52E]">Us?</span>
          </h2>
          <p className="text-[#F1F5F9] text-lg max-w-3xl mx-auto leading-relaxed">
            At <span className="font-bold text-[#D9A52E]">VIQ Technologies</span>, we
            blend innovation, expertise, and technology to deliver solutions
            that accelerate digital growth and business success. Our commitment
            to quality and client satisfaction makes us a trusted partner in the
            IT and digital services industry.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 border-[#1268B3]/20 hover:border-[#D9A52E]"
                >
                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#1268B3] text-white rounded-xl flex items-center justify-center mb-6 shadow-md"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#172033] mb-4 group-hover:text-[#1268B3] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-[#172033]/80 leading-relaxed text-justify">
                    {reason.description}
                  </p>

                  {/* Hover Indicator */}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
