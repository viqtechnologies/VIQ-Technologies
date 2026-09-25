import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Palette,
  Wrench,
  Rocket,
  CheckCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const processes = [
  {
    num: "01",
    title: "Discover",
    icon: Search,
    description:
      "We begin by understanding your business needs, challenges, and goals. Our team conducts detailed research, market analysis, and competitor study to discover opportunities that align with your vision.",
  },
  {
    num: "02",
    title: "Define",
    icon: FileText,
    description:
      "Once the objectives are clear, we define the roadmap with precise requirements, technology stacks, and timelines. This ensures a structured approach to your project's success.",
  },
  {
    num: "03",
    title: "Design",
    icon: Palette,
    description:
      "Our experts create intuitive and user-friendly designs focused on performance, security, and scalability — whether it's a website, app, cloud solution, or AI/ML model interface.",
  },
  {
    num: "04",
    title: "Develop",
    icon: Wrench,
    description:
      "We transform ideas into reality with robust development in web technologies, mobile apps, AI/ML models, cloud integration, and cybersecurity frameworks. Every solution is built to be secure, scalable, and future-ready.",
  },
  {
    num: "05",
    title: "Deploy",
    icon: Rocket,
    description:
      "Our team ensures smooth deployment with cloud hosting, server configuration, and security implementations, making your solution live and optimized for real-world performance.",
  },
  {
    num: "06",
    title: "Deliver",
    icon: CheckCircle,
    description:
      "We deliver high-quality, fully tested, and result-driven solutions. Beyond delivery, we provide continuous support, maintenance, and upgrades to help your business grow seamlessly.",
  },
];

const Our6Process = () => {
  const [activeProcess, setActiveProcess] = useState(null);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full px-5 py-2 text-sm font-semibold mb-4 border border-blue-200 shadow-sm"
        >
          <Sparkles size={16} />
          Our Methodology
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
          Our 6-D Process
        </h2>

        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          A proven methodology to transform your vision into reality through
          systematic excellence
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {processes.map((process, idx) => {
          const Icon = process.icon;
          const isActive = activeProcess === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setActiveProcess(idx)}
              onMouseLeave={() => setActiveProcess(null)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-lg border-l-5 border-blue-500  cursor-pointer transition-all duration-300 ${
                isActive
                  ? "border-blue-500 shadow-xl shadow-blue-200/40 scale-[1.02]"
                  : "border-blue-100 hover:border-blue-300"
              }`}
            >
    

              {/* Number Badge */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-4 -right-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-blue-500/40"
                      : "bg-white text-blue-600 border-2 border-blue-200"
                  }`}
                >
                  {process.num}
                </div>
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-2.5 lg:p-3 rounded-xl mb-4 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-md shadow-blue-500/20"
                    : "bg-gradient-to-br from-blue-100 to-cyan-100"
                }`}
              >
                <Icon
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-blue-600"
                  }`}
                  size={24}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3">
                {process.title}
              </h3>

              {/* Description */}
              <p
                className={`text-slate-600 leading-relaxed text-sm lg:text-sm transition-all duration-300 line-clamp-4 ${
                  isActive ? "text-slate-700" : ""
                }`}
              >
                {process.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 flex items-center gap-1.5 text-blue-600 font-semibold text-sm"
              >
                Learn More <ChevronRight size={16} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Our6Process;
