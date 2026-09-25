// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   BarChart3,
//   Settings,
//   Newspaper,
//   Stethoscope,
//   ExternalLink,
//   CheckCircle2,
// } from "lucide-react";

// const projects = [
//   {
//     title: "Sewak Machines",
//     category: "Industrial E-Commerce Ecosystem",
//     description:
//       "A robust, high-performance digital marketplace engineered for heavy-duty industrial machinery. Features high-torque transaction processing, complex inventory architecture, and enterprise-grade scalability for global sales.",
//     features: [
//       "Heavy Machinery Catalog",
//       "B2B Transaction Flow",
//       "Bulk Order Logic",
//     ],
//     icon: <ShoppingCart className="w-8 h-8" />,
//     color: "bg-blue-900",
//   },
//   {
//     title: "Anand Feed Mills",
//     category: "ERP & Order Management System",
//     description:
//       "An advanced architectural solution featuring 6 specialized analytical dashboards. Streamlines the entire supply chain from raw material procurement to real-time logistics tracking and automated fulfillment.",
//     features: [
//       "6 Role-Based Dashboards",
//       "Real-time Fleet Tracking",
//       "Automated Invoicing",
//     ],
//     icon: <BarChart3 className="w-8 h-8" />,
//     color: "bg-blue-800",
//   },
//   {
//     title: "Proforge International",
//     category: "Global Manufacturing Portal",
//     description:
//       "A sophisticated digital presence for international manufacturing excellence. Optimized for technical precision, showcasing global compliance standards and high-fidelity engineering capabilities.",
//     features: [
//       "Global Supply Chain Integration",
//       "Technical Compliance Hub",
//       "Precision UI Design",
//     ],
//     icon: <Settings className="w-8 h-8" />,
//     color: "bg-blue-700",
//   },
//   {
//     title: "Zeet Samachar",
//     category: "Digital Media & News Infrastructure",
//     description:
//       "A high-traffic news dissemination engine capable of handling concurrent data streams. Integrated with a custom CMS for rapid editorial deployment and real-time audience engagement analytics.",
//     features: [
//       "Low-Latency Delivery",
//       "Dynamic Content CMS",
//       "High-Volume Traffic Scaling",
//     ],
//     icon: <Newspaper className="w-8 h-8" />,
//     color: "bg-blue-600",
//   },
//   {
//     title: "Patronage Health Services",
//     category: "Healthcare Management Intelligence",
//     description:
//       "A mission-critical healthcare platform focused on patient-centric care pathways. Designed with stringent data integrity protocols and seamless clinical workflow automation.",
//     features: [
//       "Patient Record Encryption",
//       "Clinical Workflow Automation",
//       "Resource Allocation",
//     ],
//     icon: <Stethoscope className="w-8 h-8" />,
//     color: "bg-blue-500",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-20 bg-slate-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-2"
//           >
//             Our Portfolio
//           </motion.h2>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
//           >
//             Ansh Infotech{" "}
//             <span className="text-blue-600">Engineering Excellence</span>
//           </motion.h1>
//           <p className="text-slate-600 max-w-2xl mx-auto text-lg">
//             Deploying high-impact digital solutions that drive operational
//             efficiency and market dominance.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
//             >
//               <div
//                 className={`${project.color} text-white p-3 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 {project.icon}
//               </div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-blue-600 font-semibold text-sm mb-4 uppercase tracking-wider italic">
//                 {project.category}
//               </p>

//               <p className="text-slate-600 mb-6 leading-relaxed">
//                 {project.description}
//               </p>

//               <div className="space-y-3 mb-8">
//                 {project.features.map((feature, fIndex) => (
//                   <div
//                     key={fIndex}
//                     className="flex items-center text-slate-700 text-sm"
//                   >
//                     <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
//                     {feature}
//                   </div>
//                 ))}
//               </div>

              
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-20 bg-blue-900 rounded-3xl p-10 text-center text-white"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to build your enterprise solution?
//           </h2>
//           <p className="text-blue-100 mb-8 max-w-xl mx-auto">
//             Contact Ansh Infotech today for a technical consultation on your
//             next digital transformation.
//           </p>
//           <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
//             Start a Project
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  BarChart3,
  Settings,
  Newspaper,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    title: "Sewak Machines",
    category: "Industrial E-Commerce Ecosystem",
    description:
      "A robust, high-performance digital marketplace engineered for heavy-duty industrial machinery. Features high-torque transaction processing, complex inventory architecture, and enterprise-grade scalability for global sales.",
    features: [
      "Heavy Machinery Catalog",
      "B2B Transaction Flow",
      "Bulk Order Logic",
    ],
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-blue-900 to-blue-700",
  },
  {
    title: "Anand Feed Mills",
    category: "ERP & Order Management System",
    description:
      "An advanced architectural solution featuring 6 specialized analytical dashboards. Streamlines the entire supply chain from raw material procurement to real-time logistics tracking and automated fulfillment.",
    features: [
      "6 Role-Based Dashboards",
      "Real-time Fleet Tracking",
      "Automated Invoicing",
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-blue-800 to-sky-600",
  },
  {
    title: "Proforge International",
    category: "Global Manufacturing Portal",
    description:
      "A sophisticated digital presence for international manufacturing excellence. Optimized for technical precision, showcasing global compliance standards and high-fidelity engineering capabilities.",
    features: [
      "Global Supply Chain Integration",
      "Technical Compliance Hub",
      "Precision UI Design",
    ],
    icon: <Settings className="w-8 h-8" />,
    color: "from-blue-700 to-cyan-500",
  },
  {
    title: "Zeet Samachar",
    category: "Digital Media & News Infrastructure",
    description:
      "A high-traffic news dissemination engine capable of handling concurrent data streams. Integrated with a custom CMS for rapid editorial deployment and real-time audience engagement analytics.",
    features: [
      "Low-Latency Delivery",
      "Dynamic Content CMS",
      "High-Volume Traffic Scaling",
    ],
    icon: <Newspaper className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Patronage Health Services",
    category: "Healthcare Management Intelligence",
    description:
      "A mission-critical healthcare platform focused on patient-centric care pathways. Designed with stringent data integrity protocols and seamless clinical workflow automation.",
    features: [
      "Patient Record Encryption",
      "Clinical Workflow Automation",
      "Resource Allocation",
    ],
    icon: <Stethoscope className="w-8 h-8" />,
    color: "from-blue-500 to-emerald-500",
  },
];

const Projects = () => {
  return (
    <section className="py-20 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-blue-200 bg-white/60 text-blue-900 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
          >
            Our Portfolio
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            ANSH InfoTech{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Deploying high-impact digital solutions that drive operational
            efficiency and market dominance.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* glow border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

              <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className={`
                      inline-flex items-center justify-center rounded-2xl p-3
                      bg-gradient-to-br ${project.color} text-white
                      shadow-lg shadow-blue-900/20
                      group-hover:scale-110 group-hover:rotate-1
                      transition-transform duration-300
                    `}
                  >
                    {project.icon}
                  </div>
                  <span className="hidden md:inline-flex px-3 py-1 text-[11px] rounded-full border border-blue-100 text-blue-700 bg-blue-50/70 font-semibold tracking-wide">
                    Case Study
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-semibold text-xs md:text-sm mb-4 uppercase tracking-wider italic">
                  {project.category}
                </p>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-[15px]">
                  {project.description}
                </p>

                {/* Features as interactive pills */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-[13px] font-medium group-hover:border-blue-300 group-hover:bg-blue-50/70 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* subtle bottom line accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 flex justify-center">
            <div className="w-full max-w-3xl h-32 bg-gradient-to-r from-blue-500/30 via-sky-400/30 to-indigo-500/30 blur-3xl rounded-3xl" />
          </div>

          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 text-center text-white shadow-2xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/20 blur-3xl -translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-400/20 blur-3xl translate-x-5 translate-y-5" />

            <h2 className="relative text-2xl sm:text-3xl font-bold mb-4">
              Ready to build your enterprise solution?
            </h2>
            <p className="relative text-blue-100 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Contact Ansh Infotech today for a technical consultation on your
              next digital transformation.
            </p>

            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 opacity-70 blur-sm" />
              <button className="relative inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-blue-50 transition-colors shadow-lg shadow-slate-950/40 active:scale-95">
                <span>Start a Project</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
