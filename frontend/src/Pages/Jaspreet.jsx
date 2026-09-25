// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Cloud,
//   Terminal,
//   Users,
//   Award,
//   ExternalLink,
//   CheckCircle2,
//   ArrowLeft,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import ctoImage from "../assets/jaspreetcto.png"; // Adjust path as needed

// const AboutCTO = () => {
//   const navigate = useNavigate();

//   const expertise = [
//     {
//       title: "Cybersecurity",
//       icon: <ShieldCheck className="text-blue-600" size={28} />,
//       items: [
//         "Vulnerability Assessment (VAPT)",
//         "Web & Network Security",
//         "Security Audits & Threat Analysis",
//         "Ethical Hacking Research",
//       ],
//     },
//     {
//       title: "DevOps & Cloud",
//       icon: <Cloud className="text-blue-600" size={28} />,
//       items: [
//         "CI/CD Pipeline Design",
//         "DevSecOps Implementation",
//         "AWS Infrastructure Deployment",
//         "Docker & Linux Server Management",
//       ],
//     },
//     {
//       title: "Platforms",
//       icon: <Terminal className="text-blue-600" size={28} />,
//       items: [
//         "AWS Cloud",
//         "GitHub / GitLab",
//         "Jenkins & Docker",
//         "Burp Suite Pro & Qualys",
//       ],
//     },
//     {
//       title: "Leadership",
//       icon: <Users className="text-blue-600" size={28} />,
//       items: [
//         "Global Client Engagement",
//         "Team Management",
//         "Tech Strategy & Architecture",
//         "Project Lifecycle Delivery",
//       ],
//     },
//   ];

//   const certifications = [
//     "Google Cybersecurity Professional",
//     "IBM Cybersecurity Analyst",
//     "AWS Solutions Architect",
//     "Burp Suite Professional (PortSwigger)",
//     "TryHackMe Cybersecurity Training",
//     "EC-Council & Qualys Security Exposure",
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans">
//       {/* Navigation Header */}
//       <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-semibold"
//           >
//             <ArrowLeft size={20} /> Back
//           </button>
//           <span className="text-blue-600 font-bold tracking-tighter text-xl">
//             ANSH InfoTech
//           </span>
//         </div>
//       </nav>
//       {/* Hero Section */}
//       <section className="relative pt-12 pb-20 overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10 hidden lg:block"></div>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
//             {/* Image Container */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="lg:w-1/3 flex justify-center"
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] rotate-0 group-hover:rotate-0 transition-transform duration-500"></div>
//                 <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
//                   <img
//                     src={ctoImage}
//                     alt="Jaspreet Grewal"
//                     className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Title & Fast Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="lg:w-2/3"
//             >
//               <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//                 Jaspreet <span className="text-blue-600">Grewal</span>
//               </h1>
//               <p className="text-xl md:text-2xl font-bold text-gray-500 mb-6 flex items-center gap-3">
//                 Chief Technology Officer (CTO)
//                 <span className="h-px w-12 bg-blue-400 hidden sm:block"></span>
//               </p>
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
//                   Cybersecurity
//                 </span>
//                 <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
//                   DevOps
//                 </span>
//                 <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
//                   Cloud Architect
//                 </span>
//               </div>
//               <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8 text-justify lg:text-left">
//                 Leading technology strategy and cybersecurity initiatives with
//                 over 4+ years of expertise. Focused on delivering secure,
//                 scalable, and high-performance IT solutions for global
//                 enterprises.
//               </p>
//               <a
//                 href="https://www.linkedin.com/in/jaspreet-infosec/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
//               >
//                 Connect on LinkedIn <ExternalLink size={18} />
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Biography Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-5 gap-16 items-start">
//             <div className="lg:col-span-3">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
//                 <span className="h-8 w-1.5 bg-blue-600 rounded-full"></span>
//                 Professional Journey
//               </h2>
//               <div className="space-y-6 text-gray-700 leading-relaxed text-[16px]">
//                 <p>
//                   Jaspreet Grewal brings over 4+ years of experience with ANSH
//                   InfoTech, leading technology strategy, cybersecurity
//                   initiatives, and engineering operations. He holds a{" "}
//                   <strong>Master of Computer Applications (MCA)</strong>
//                   from I.K. Gujral Punjab Technical University and has developed
//                   strong expertise in cybersecurity, DevOps engineering, and
//                   cloud infrastructure.
//                 </p>
//                 <p>
//                   At ANSH InfoTech, he manages the full lifecycle of technology
//                   projects—from architecture to deployment. His core focus
//                   includes{" "}
//                   <strong>
//                     Vulnerability Assessment and Penetration Testing (VAPT)
//                   </strong>
//                   , securing government platforms, and strengthening the
//                   security posture of financial institutions.
//                 </p>
//                 <p>
//                   Jaspreet is a strong advocate for automation, having designed
//                   modern CI/CD pipelines using AWS, Docker, and Jenkins. He
//                   actively contributes to the cybersecurity community by
//                   organizing <strong>Capture The Flag (CTF)</strong> events,
//                   promoting ethical hacking and hands-on security learning.
//                 </p>
//               </div>
//             </div>

//             <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                 <Award className="text-blue-600" /> Certifications & Community
//               </h3>
//               <div className="space-y-4">
//                 {certifications.map((cert, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <CheckCircle2
//                       className="text-blue-500 mt-1 flex-shrink-0"
//                       size={18}
//                     />
//                     <span className="text-gray-600 font-semibold text-sm">
//                       {cert}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
//                   Academic Excellence
//                 </p>
//                 <p className="text-blue-600 font-bold">MCA | I.K. Gujral PTU</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Expertise Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
//               Core Expertise
//             </h2>
//             <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {expertise.map((exp, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -10 }}
//                 className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col h-full"
//               >
//                 <div className="mb-6 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center">
//                   {exp.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   {exp.title}
//                 </h3>
//                 <ul className="space-y-3 mt-auto">
//                   {exp.items.map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="text-sm text-gray-500 font-medium leading-tight flex gap-2"
//                     >
//                       <span className="text-blue-400">•</span> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Statement */}
//       <section className="py-20 bg-blue-600 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
//         </div>
//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <h2 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6">
//             Professional Vision
//           </h2>
//           <blockquote className="text-2xl md:text-4xl font-extrabold text-white leading-tight italic">
//             "Jaspreet Grewal is committed to strengthening digital ecosystems by
//             integrating advanced cybersecurity practices and DevOps automation
//             to help organizations build secure and future-ready technology
//             solutions."
//           </blockquote>
//           <div className="mt-10 h-1 w-20 bg-white/30 mx-auto rounded-full"></div>
//         </div>
//       </section>

//       {/* Footer Branding */}
//       <footer className="py-10 bg-white border-t border-gray-100 text-center">
//         <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
//           Build · Optimize · Deliver
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default AboutCTO;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Cloud, Terminal, Users } from "lucide-react";
import ctoImage from "../assets/jaspreetcto.png";

// Import separated components
import Hero from "../components2/Herojaspreet";
import Biography from "../components2/biojaspreet";
import Expertise from "../components2/Exjaspreet";

const AboutCTO = () => {
  const navigate = useNavigate();

  const expertise = [
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="text-blue-600" size={28} />,
      items: [
        "Vulnerability Assessment (VAPT)",
        "Web Application & Network Security",
        "Security Audits & Threat Analysis",
        "Ethical Hacking & Security Research",
        "Secure SDLC & DevSecOps Integration",
      ],
    },
    {
      title: "DevOps & Cloud Engineering",
      icon: <Cloud className="text-blue-600" size={28} />,
      items: [
        "CI/CD Pipeline Design & Automation",
        "DevOps & DevSecops Implementation",
        "Cloud Infrastructure Deployment",
        "Docker Containerization",
        "Linux Server Mangement",
      ],
    },
    {
      title: "Platforms & Technologies",
      icon: <Terminal className="text-blue-600" size={28} />,
      items: [
        "AWS Cloud Platform",
        "GitHub & GitLab",
        "Jenkins CI/CDr",
        "Burp Suite Professional",
        "Qualys Security Tools",
      ],
    },
    {
      title: "Leadership & Operations",
      icon: <Users className="text-blue-600" size={28} />,
      items: [
        "Managing Development Teams",
        "Client Engagement",
        "Technology Strategy & Architecture",
        "Project Planing & Delivery",
        "Cross-Functional Leadership & Scalability",
      ],
    },
  ];

  const certifications = [
    "Google Cybersecurity Professional",
    "IBM Cybersecurity Analyst",
    "AWS Solutions Architect",
    "Burp Suite Professional (PortSwigger)",
    "TryHackMe Cybersecurity Training",
    "EC-Council & Qualys Security Exposure",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Hero navigate={navigate} ctoImage={ctoImage} />
      <Biography certifications={certifications} />
      <Expertise expertise={expertise} />
    </div>
  );
};

export default AboutCTO;