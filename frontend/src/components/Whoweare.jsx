import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Sparkles,
  Users,
  BarChart3,
} from "lucide-react";

const WhoWeAre = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // const highlights = [
  //   {
  //     icon: Sparkles,
  //     label: "11+ Years",
  //     title: "Proven IT Excellence",
  //     description:
  //       "ANSH InfoTech has grown into a trusted technology partner, delivering reliable, long‑term value for businesses worldwide.",
  //   },
  //   {
  //     icon: Cpu,
  //     label: "Smart Automation Solutions",
  //     title: "Advanced Engineering",
  //     description:
  //       "From AI/ML to complex systems, our engineers build future‑ready solutions tailored to your domain.",
  //   },
  //   {
  //     icon: Users,
  //     label: "Client‑First",
  //     title: "Collaborative Mindset",
  //     description:
  //       "Every engagement starts with your goals, challenges, and context so solutions align with real business needs.",
  //   },
  //   {
  //     icon: BarChart3,
  //     label: "Growth",
  //     title: "Measurable Outcomes",
  //     description:
  //       "Engagements are structured around clear KPIs, focusing on tangible business impact and sustainable growth.",
  //   },
  // ];


  const highlights = [
    {
      icon: Sparkles,
      label: "INNOVATION",
      title: "Technology That Moves Forward",
      description:
        "We combine modern technologies, creative thinking, and practical solutions to help businesses stay competitive in a rapidly evolving digital landscape..",
    },
    {
      icon: Cpu,
      label: "BUSINESS IMPACT",
      title: "Turning Technology Into Results",
      description:
        "We focus on measurable outcomes through efficient processes, data-driven decisions, and continuous optimization that helps businesses improve performance and scale confidently.",
    },
    {
      icon: Users,
      label: "Client-First",
      title: "Collaborative Mindset",
      description:
        "We work closely with clients to understand business objectives, technical challenges, and market demands, ensuring every solution is aligned with real-world enterprise needs.",
    },
    {
      icon: BarChart3,
      label: "Growth",
      title: "Measurable Outcomes",
      description:
        "Our delivery approach is focused on measurable results, using performance metrics and KPIs to ensure continuous improvement, operational efficiency, and sustainable business growth.",
    },
  ];


  return (
    <section className="relative overflow-hidden bg-[#F1F5F9] py-12 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center">
      {/* subtle glows */}
      <div className="pointer-events-none absolute -right-40 top-10 h-64 w-64 rounded-full bg-[#1268B3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#0A2540]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Left: text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              About VIQ Technologies
            </h2>
            <p className="mb-3 text-base font-semibold leading-relaxed text-[#172033] text-justify">
              VIQ Technologies is a technology-driven company focused on delivering innovative, reliable, and scalable digital solutions for modern businesses. We combine technical expertise, creative thinking, and industry knowledge to help organizations build stronger digital experiences and achieve their business goals.
            </p>

            <p className=" mb-3 text-base font-semibold leading-relaxed text-[#172033] text-justify">
              Our team specializes in web development, software solutions, AI-driven technologies, cloud services, and digital transformation. We focus on developing solutions that improve efficiency, simplify business operations, and support long-term growth.
            </p>
              <p className=" mb-3 text-base font-semibold leading-relaxed text-[#172033] text-justify">
           At VIQ Technologies, we believe in delivering technology that is practical, user-friendly, and aligned with our clients’ unique requirements. From concept to deployment, we work closely with businesses to understand their challenges and provide customized solutions that create meaningful value.
</p>
            <p className="text-base font-semibold leading-relaxed text-[#172033] text-justify">
              Driven by innovation, quality, and continuous improvement, VIQ Technologies aims to be a trusted technology partner for businesses looking to grow, adapt, and succeed in the digital world.
            </p>
          </motion.div>

          {/* Right: animated cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="h-full border-l-4 border-[#1268B3] rounded-xl"
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex h-full flex-col rounded-xl border border-slate-200 bg-[#FFFFFF] p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-[#1268B3] hover:shadow-md"
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                          scale: hoveredIndex === index ? 1.03 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1268B3] text-white shadow-md"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>

                      <span className="mb-1 text-xs font-bold uppercase tracking-wide text-[#D9A52E]">
                        {item.label}
                      </span>
                      <h3 className="mb-1.5 text-base font-semibold text-[#0A2540]">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#172033] text-justify">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;