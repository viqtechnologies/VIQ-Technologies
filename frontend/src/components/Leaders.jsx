// // src/components/Director.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import director1 from "../assets/ashish.jpg";
// import director2 from "../assets/Ansh.jpg";
// import director3 from "../assets/jaspreetcto.png";

// const directors = [
//   {
//     id: 1,
//     name: "Ashish Jalota",
//     role: "Founder of ANSH InfoTech",
//     img: director1,
//     linkedin: "https://www.linkedin.com/in/ashishjalota/",
//     description:
//       "Ashish Jalota is the founder of ANSH InfoTech, a growing digital and IT solutions company known for delivering innovative technology, web development, and digital services. With a strong background in software development and digital strategy, he leads with a clear vision to provide result-oriented and client-focused solutions.",
//     tagline: ["Leadership", "Strategy", "Vision"],
//   },
//   {
//     id: 2,
//     name: "Anshu Aneja",
//     role: "Director of ANSH InfoTech",
//     img: director2,
//     linkedin: "https://www.linkedin.com/in/anshuaneja/",
//     description:
//       "Anshu Aneja, Director of ANSH InfoTech, is a dynamic leader known for building strong processes, driving innovation, and guiding the company toward sustainable growth. With a strategic mindset and focus on operational excellence, he helps shape ANSH InfoTech into a modern, future-ready organization.",

//     tagline: ["Inspire", "Lead", "Achieve"],
//   },
//   {
//     id: 3,
//     name: "Jaspreet Singh",
//     role: "CTO at ANSH InfoTech",
//     img: director3,
//     linkedin: "https://www.linkedin.com/in/jaspreet-infosec/",
//     description:
//       "Jaspreet is the Chief Technical Officer (CTO) at ANSH InfoTech, specializing in cybersecurity, DevOps, and cloud technologies. He leads technical strategy, oversees operations, and drives key technology decisions while managing technical teams and employees. With 4+ years of experience, he manages end-to-end project execution across global engagements, ensuring efficient delivery and high-quality outcomes.",
//     tagline: ["Build", "Optimize", "Deliver"],
//   },
// ];

// const Director = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-200 via-gray-200 to-blue-300 py-10 sm:py-10 lg:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-10 sm:mb-14"
//         >
//           <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 leading-tight">
//             The Leaders Behind Our Journey
//           </h2>

//           <p className="mt-3 font-semibold text-sm sm:text-xl text-gray-800 max-w-2xl mx-auto">
//             Visionary minds guiding ANSH InfoTech with innovation, integrity,
//             and a commitment to meaningful digital impact.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {directors.map((director, index) => (
//             <motion.article
//               key={director.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className="group relative bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl shadow-sm hover:shadow-xl border-3 hover:border-blue-500 transition-all duration-300 overflow-hidden"
//             >
//               <div className="p-5 sm:p-6 lg:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
//                 {/* Image */}
//                 <div className=" mt-10 w-full sm:w-32 md:w-36 aspect-[4/5] rounded-2xl overflow-hidden border border-blue-100 shadow-md shadow-blue-100 flex-shrink-0">
//                   <img
//                     src={director.img}
//                     alt={director.name}
//                     className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900 ">
//                     {director.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm font-medium text-blue-700 mb-3">
//                     {director.role}
//                   </p>

//                   <p className="text-sm text-slate-800 leading-relaxed mb-4 font-semibold text-justify">
//                     {director.description}
//                   </p>

//                   <div className="flex items-center justify-between gap-3">
//                     <a
//                       href={director.linkedin}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
//                     >
//                       <span>View LinkedIn Profile</span>
//                       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-[10px] group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                         in
//                       </span>
//                     </a>
//                     <span className=" font-semibold sm:flex gap-1 text-[11px] uppercase tracking-wide text-slate-700">
//                       {director.tagline.map((word, i) => (
//                         <span key={i}>
//                           {word}
//                           {i !== director.tagline.length - 1 && " · "}
//                         </span>
//                       ))}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Director;




// src/components/Director.jsx

// import React from "react";
// import { motion } from "framer-motion";
// import director1 from "../assets/ashish.jpg";
// import director2 from "../assets/Ansh.jpg";
// import director3 from "../assets/jaspreetcto.png";

// const directors = [
//   {
//     id: 1,
//     name: "Ashish Jalota",
//     role: "Founder of ANSH InfoTech",
//     img: director1,
//     linkedin: "https://www.linkedin.com/in/ashishjalota/",
//     description:
//       "Ashish Jalota is the founder of ANSH InfoTech, a growing digital and IT solutions company known for delivering innovative technology, web development, and digital services. With a strong background in software development and digital strategy, he leads with a clear vision to provide result-oriented and client-focused solutions.",
//     tagline: ["Leadership", "Strategy", "Vision"],
//   },
//   {
//     id: 2,
//     name: "Anshu Aneja",
//     role: "Director of ANSH InfoTech",
//     img: director2,
//     linkedin: "https://www.linkedin.com/in/anshuaneja/",
//     description:
//       "Anshu Aneja, Director of ANSH InfoTech, is a dynamic leader known for building strong processes, driving innovation, and guiding the company toward sustainable growth. With a strategic mindset and focus on operational excellence, he helps shape ANSH InfoTech into a modern, future-ready organization.",

//     tagline: ["Inspire", "Lead", "Achieve"],
//   },
//   {
//     id: 3,
//     name: "Jaspreet Singh",
//     role: "CTO at ANSH InfoTech",
//     img: director3,
//     linkedin: "https://www.linkedin.com/in/jaspreet-infosec/",
//     description:
//       "Jaspreet is the Chief Technical Officer (CTO) at ANSH InfoTech, specializing in cybersecurity, DevOps, and cloud technologies. He leads technical strategy, oversees operations, and drives key technology decisions while managing technical teams and employees. With 4+ years of experience, he manages end-to-end project execution across global engagements, ensuring efficient delivery and high-quality outcomes.",
//     tagline: ["Build", "Optimize", "Deliver"],
//   },
// ];

// const Director = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-200 via-gray-200 to-blue-300 py-10 sm:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-10 sm:mb-14"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 leading-tight">
//             The Leaders Behind Our Journey
//           </h2>

//           <p className="mt-3 font-semibold text-sm sm:text-xl text-gray-800 max-w-2xl mx-auto">
//             Visionary minds guiding ANSH InfoTech with innovation, integrity,
//             and a commitment to meaningful digital impact.
//           </p>
//         </motion.div>

//         {/* Cards Container: Changed to flex-wrap with justify-center */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {directors.map((director, index) => (
//             <motion.article
//               key={director.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               /* Added w-full and md:w for 2-column look, max-w to prevent stretching */
//               className="group relative bg-white/90 backdrop-blur-sm border-3 border-blue-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:max-w-[600px]"
//             >
//               <div className="p-5 sm:p-6 lg:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
//                 {/* Image */}
//                 <div className="mt-2 w-full sm:w-32 md:w-36 aspect-[4/5] rounded-2xl overflow-hidden border border-blue-100 shadow-md flex-shrink-0">
//                   <img
//                     src={director.img}
//                     alt={director.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">
//                     {director.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm font-medium text-blue-700 mb-3">
//                     {director.role}
//                   </p>

//                   <p className="text-sm text-slate-800 leading-relaxed mb-4 font-semibold text-justify">
//                     {director.description}
//                   </p>

//                   <div className="flex items-center justify-between gap-3 mt-auto">
//                     <a
//                       href={director.linkedin}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
//                     >
//                       <span>View LinkedIn Profile</span>
//                       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-[10px] group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                         in
//                       </span>
//                     </a>
//                     <span className="font-semibold hidden sm:flex gap-1 text-[11px] uppercase tracking-wide text-slate-700">
//                       {director.tagline.map((word, i) => (
//                         <span key={i}>
//                           {word}
//                           {i !== director.tagline.length - 1 && " · "}
//                         </span>
//                       ))}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Director;



// src/components/Director.jsx
import React from "react";
import { motion } from "framer-motion";
import director1 from "../assets/ashish.jpg";
import director2 from "../assets/vishal.png";
import director3 from "../assets/jaspreetcto.png";

const directors = [
  {
    id: 1,
    name: "Vishal Sharma",
    role: "Director of VIQ Technologies",
    img: director2,
    linkedin: "#",
    description:
    "Vishal Sharma is a Director at VIQ Technologies with 20+ years of professional experience in Sales, Marketing, Education Consultancy, and Career Counselling. He has established strong associations with colleges and universities across Punjab, Haryana, Himachal Pradesh, Uttarakhand, Rajasthan, Jammu & Kashmir, and Bangalore. His expertise in the education sector focuses on strategic partnerships, student guidance, and career-oriented solutions.",
      tagline: ["Leadership", "Strategy", "Vision"],
  },
 
  {
    id: 2,
   name: "Ashish Jalota",
    role: "Adviser of VIQ Technologies",
    img: director1,
    linkedin: "https://www.linkedin.com/in/ashishjalota/",
    description:
    "Ashish Jalota is an IT professional with 20+ years of experience in the technology industry. He is the Founder & CEO of ANSH InfoTech, Ludhiana, Co-Founder of Ashrith Consulting Private Limited, and an Advisor at VIQ Technologies. His expertise includes Software Testing and Digital Marketing. He has conducted technical talks, workshops, and professional sessions at various universities, colleges, and the Indian Army on topics including Cybersecurity, Cloud Computing, DevOps, Digital Marketing, and AI/ML, sharing industry knowledge and practical insights with students and professionals.",
      tagline: ["Leadership", "Strategy", "Vision"],
  },
];

const Director = () => {
  return (
    <section className="bg-[#F1F5F9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blue/White Themed Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] leading-tight">
            The Leaders Behind Our Journey
          </h2>

          <p className="mt-3 font-semibold text-sm sm:text-xl text-[#172033] max-w-2xl mx-auto">
            Visionary minds guiding VIQ Technologies with innovation, integrity,
            and a commitment to meaningful digital impact.
          </p>
        </motion.div>
        {/* 100% Responsive Flex Container: Centers the 3rd card automatically */}
        <div className="flex flex-wrap justify-center gap-10">
          {directors.map((director, index) => (
            <motion.article
              key={director.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFFFF] border border-slate-200 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:border-[#1268B3] transition-all duration-500 w-full lg:w-[calc(50%-2rem)] max-w-[550px] overflow-hidden group"
            >
              <div className="flex flex-col h-full p-8 md:p-10">
                {/* Image & Title Section: Vertical Layout */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#F1F5F9] shadow-xl mb-6 transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={director.img}
                      alt={director.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-1">
                    {director.name}
                  </h3>
                  <p className="text-[#1268B3] font-bold text-sm md:text-base uppercase tracking-widest">
                    {director.role}
                  </p>
                </div>

                {/* Description: High Contrast for Readability */}
                <div className="flex-grow">
                  <p className="text-[#172033] leading-relaxed text-center text-justify text-[15px] md:text-[16px] font-medium opacity-90 mb-8">
                    {director.description}
                  </p>
                </div>

                {/* Footer: Contains Tagline & LinkedIn */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Restored Original Tagline Content */}
                    <div className="font-bold text-[11px] md:text-[12px] uppercase tracking-widest text-[#D9A52E] flex gap-1">
                      {director.tagline.map((word, i) => (
                        <span key={i}>
                          {word}
                          {i !== director.tagline.length - 1 && " · "}
                        </span>
                      ))}
                    </div>

                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-[#1268B3] hover:text-[#0A2540] transition-colors group/link"
                    >
                      <span>LinkedIn</span>
                      <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#0A2540] text-white group-hover/link:bg-[#1268B3] transition-all">
                        <span className="text-[10px] font-black">in</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Director;
