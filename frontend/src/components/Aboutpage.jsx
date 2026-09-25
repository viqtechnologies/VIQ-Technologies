// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Shield,
//   Cloud,
//   Code,
//   Brain,
//   Target,
//   Eye,
//   Search,
//   FileText,
//   Palette,
//   Wrench,
//   Rocket,
//   CheckCircle,
//   ChevronRight,
//   Sparkles,
//   Building2,
// } from "lucide-react";



// export default function About() {
//   const [activeProcess, setActiveProcess] = useState(null);
//   const [hoveredService, setHoveredService] = useState(null);

//   return (
//     <div className="bg-gradient-to-br from-gray-300 to-blue-900 ">
//       {/* Enhanced Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.4, 0.3],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             scale: [1.1, 1, 1.1],
//             opacity: [0.4, 0.3, 0.4],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-32 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />

//         {/* Animated Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
//                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
//               backgroundSize: "80px 80px",
//             }}
//           />
//         </div>
//       </div>

//       {/* Floating Particles */}
//       <div className="fixed inset-0 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               y: [null, Math.random() * -100],
//               x: [null, Math.random() * 50 - 25],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Fixed Who Are We, Mission & Vision Section - RESPONSIVE */}
//       <div className="relative bg-gradient-to-b from-gray-200 to-blue-200 py-5 sm:py-5 md:py-5 min-h-[auto] h-auto">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-8 sm:mb-12"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//               <span className="text-slate-900">Our</span>{" "}
//               <span className="text-blue-700">Foundation</span>
//             </h2>
//             <p className="text-sm sm:text-xl text-gray-800">
//               Guided by purpose, driven by innovation, and strengthened by a
//               relentless pursuit of excellence.
//             </p>
//           </motion.div>

//           {/* Responsive Grid - Stacks on mobile */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
//             {/* Who Are We */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               whileHover={{ y: -4 }}
//               className="group relative bg-white/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-5 border-blue-500  transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/40 h-full"
//             >
//               <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-5 rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-28 sm:group-hover:h-28"></div>

//               <div className="relative">
//                 <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   <div className="bg-gradient-to-br from-pink-600 to-rose-600 p-2 sm:p-3 rounded-xl shadow-md shadow-cyan-500/20 flex-shrink-0">
//                     <Building2 className="text-white" size={18} />
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">
//                     Who Are We
//                   </h3>
//                 </div>

//                 <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full mb-3 sm:mb-4"></div>

//                 <p className="font-semibold text-gray-800 leading-relaxed text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-10 text-justify">
//                   ANSH InfoTech is a leading IT solutions and development
//                   company specializing in Cybersecurity, Cloud Computing, Web
//                   Development, Artificial Intelligence (AI), Machine Learning
//                   (ML), and Custom Software Development. We empower businesses
//                   with secure, scalable, and innovative digital solutions
//                   designed to meet today's fast-changing technology needs.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Mission */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               whileHover={{ y: -4 }}
//               className="group relative bg-white/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-5 border-blue-500  transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/40 h-full"
//             >
//               <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-28 sm:group-hover:h-28"></div>

//               <div className="relative">
//                 <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 sm:p-3 rounded-xl shadow-md shadow-blue-500/20 flex-shrink-0">
//                     <Target className="text-white" size={18} />
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">
//                     Our Mission
//                   </h3>
//                 </div>

//                 <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-3 sm:mb-4"></div>

//                 <p className="font-semibold text-gray-800 leading-relaxed text-xs sm:text-sm line-clamp-10 text-justify">
//                   At ANSH InfoTech, our mission is to empower individuals and
//                   businesses with innovative IT solutions and future-ready
//                   skills. We aim to bridge the gap between technology and growth
//                   by delivering excellence in Cybersecurity, Cloud Computing,
//                   Artificial Intelligence, Machine Learning, Web Development,
//                   and Software Solutions.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               whileHover={{ y: -4 }}
//               className="group relative bg-white/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-5 border-blue-500 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/40 h-full"
//             >
//               <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-5 rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24 sm:group-hover:w-28 sm:group-hover:h-28"></div>

//               <div className="relative">
//                 <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 sm:p-3 rounded-xl shadow-md shadow-indigo-500/20 flex-shrink-0">
//                     <Eye className="text-white" size={18} />
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">
//                     Our Vision
//                   </h3>
//                 </div>

//                 <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full mb-3 sm:mb-4"></div>

//                 <p className="font-semibold text-gray-800 leading-relaxed text-xs sm:text-sm line-clamp-10 text-justify">
//                   Our vision at ANSH InfoTech is to revolutionize the digital
//                   landscape by empowering individuals and businesses with
//                   cutting-edge technologies and future-ready skills. We aspire
//                   to be a trusted global partner in innovation, driving progress
//                   through advanced solutions in Artificial Intelligence, Machine
//                   Learning, Cybersecurity, and Cloud Computing.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import React from "react";
import { Eye, Target, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* Fixed Who Are We, Mission & Vision Section - RESPONSIVE */}
      <div className="relative bg-[#F1F5F9] py-12 min-h-[auto] h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#172033]">Our</span>{" "}
              <span className="text-[#0A2540]">Foundation</span>
            </h2>
            <p className="text-sm sm:text-xl text-[#172033]">
              Guided by purpose, driven by innovation, and strengthened by a
              relentless pursuit of excellence.
            </p>
          </div>

          {/* Responsive Grid - Stacks on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Who Are We */}
            <div className="group relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-4 border-[#1268B3] h-full">
              <div className="relative">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-[#1268B3] p-2 sm:p-3 rounded-xl shadow-md flex-shrink-0">
                    <Building2 className="text-white" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] leading-tight">
                    Who Are We
                  </h3>
                </div>

                <div className="w-10 sm:w-12 h-1 bg-[#D9A52E] rounded-full mb-3 sm:mb-4"></div>

                <p className="font-medium text-[#172033] leading-relaxed text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-10 text-justify">
                  VIQ Technologies is a leading IT solutions and development
                  company specializing in Cybersecurity, Cloud Computing, Web
                  Development, Artificial Intelligence (AI), Machine Learning
                  (ML), and Custom Software Development. We empower businesses
                  with secure, scalable, and innovative digital solutions
                  designed to meet today's fast-changing technology needs.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-4 border-[#1268B3] h-full">
              <div className="relative">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-[#0A2540] p-2 sm:p-3 rounded-xl shadow-md flex-shrink-0">
                    <Target className="text-white" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] leading-tight">
                    Our Mission
                  </h3>
                </div>

                <div className="w-10 sm:w-12 h-1 bg-[#D9A52E] rounded-full mb-3 sm:mb-4"></div>

                <p className="font-medium text-[#172033] leading-relaxed text-xs sm:text-sm line-clamp-10 text-justify">
                  At VIQ Technologies, our mission is to empower individuals and
                  businesses with innovative IT solutions and future-ready
                  skills. We aim to bridge the gap between technology and growth
                  by delivering excellence in Cybersecurity, Cloud Computing,
                  Artificial Intelligence, Machine Learning, Web Development,
                  and Software Solutions.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-[#FFFFFF] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-t-4 border-[#1268B3] h-full">
              <div className="relative">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-[#1268B3] p-2 sm:p-3 rounded-xl shadow-md flex-shrink-0">
                    <Eye className="text-white" size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] leading-tight">
                    Our Vision
                  </h3>
                </div>

                <div className="w-10 sm:w-12 h-1 bg-[#D9A52E] rounded-full mb-3 sm:mb-4"></div>

                <p className="font-medium text-[#172033] leading-relaxed text-xs sm:text-sm line-clamp-10 text-justify">
                  Our vision at VIQ Technologies is to revolutionize the digital
                  landscape by empowering individuals and businesses with
                  cutting-edge technologies and future-ready skills. We aspire
                  to be a trusted global partner in innovation, driving progress
                  through advanced solutions in Artificial Intelligence, Machine
                  Learning, Cybersecurity, and Cloud Computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
