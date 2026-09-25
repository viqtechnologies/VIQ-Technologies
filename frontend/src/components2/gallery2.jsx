// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import {
//   Calendar,
//   MapPin,
//   Award,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// // Import your assets
// import img1 from "../assets/hero1.jpg";
// import img2 from "../assets/hero1.jpg";

// const WorkshopsDrives = () => {
//   const slides = [
//     {
//       id: 1,
//       type: "Workshop",
//       title: "Full Stack Web Mastery",
//       description:
//         "A deep dive into MERN stack development. Participants learned to build scalable APIs and responsive front-ends from scratch during this intensive 2-day session.",
//       date: "Oct 12, 2024",
//       location: "Seminar Hall A",
//       image: img1,
//     },
//     {
//       id: 2,
//       type: "Internship Drive",
//       title: "Tech-Giant Recruitment 2024",
//       description:
//         "Over 20+ companies participated in this drive, offering internship roles in AI, Cloud Computing, and DevOps. Successfully placed 50+ students on Day 1.",
//       date: "Nov 05, 2024",
//       location: "Placement Cell",
//       image: img2,
//     },
//     {
//       id: 3,
//       type: "Workshop",
//       title: "UI/UX Design Thinking",
//       description:
//         "Focused on user-centric design principles and Figma prototyping. Industry experts shared insights on creating intuitive digital experiences for modern users.",
//       date: "Dec 02, 2024",
//       location: "Design Lab",
//       image: img1,
//     },
//   ];

//   return (
//     <section className="py-10 md:py-10 bg-gray-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         {/* <div className="text-center md:text-left mb-5 md:mb-5">
//           <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
//             ANSH INFOTECH: EVENTS & CAREER OPPORTUNITIES
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
//             Workshops & Talent Acquisition Drives
//           </h2>
//           <div className="w-30 h-1 bg-blue-500 mx-60  mt-4 rounded-full"></div>
//         </div> */}

//         <div className="text-center mb-6 md:mb-8">
//           <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
//             ANSH INFOTECH: EVENTS & CAREER OPPORTUNITIES
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mt-2">
//             Development Workshops & Talent Acquisition Drives
//           </h2>
//           {/* The line separator is now responsive and centrally aligned */}
//           <div className="w-20 max-w-full h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Main Slider Container */}
//         <div className="relative group">
//           {/* Custom Navigation Buttons - Left and Right */}
//           <button className="prev-btn absolute left-[-10px] md:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white p-2 md:p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
//             <ChevronLeft size={28} />
//           </button>

//           <button className="next-btn absolute right-[-10px] md:right-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white p-2 md:p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
//             <ChevronRight size={28} />
//           </button>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay, EffectFade]}
//             effect="fade"
//             navigation={{
//               prevEl: ".prev-btn",
//               nextEl: ".next-btn",
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             loop={true}
//             className="rounded-2xl md:rounded-3xl shadow-2xl bg-white overflow-hidden border border-gray-100"
//           >
//             {slides.map((slide) => (
//               <SwiperSlide key={slide.id}>
//                 <div className="flex flex-col md:flex-row min-h-fit md:min-h-[400px]">
//                   {/* 30% Image Section */}
//                   <div className="md:w-[35%] w-full relative h-[250px] md:h-auto overflow-hidden">
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                     {/* Type Badge - Top Right of Image */}
//                     <div className="absolute top-4 right-4 z-10">
//                       <span
//                         className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg backdrop-blur-md border
//                         ${
//                           slide.type === "Workshop"
//                             ? "bg-blue-600/90 text-white border-blue-400"
//                             : "bg-indigo-600/90 text-white border-indigo-400"
//                         }`}
//                       >
//                         <Award size={14} /> {slide.type}
//                       </span>
//                     </div>
//                   </div>

//                   {/* 70% Content Section */}
//                   <div className="md:w-[65%] w-full p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
//                     <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-6">
//                       <div className="flex items-center text-gray-500 font-medium text-xs md:text-sm gap-2">
//                         <Calendar size={16} className="text-blue-600" />
//                         {slide.date}
//                       </div>
//                       <div className="flex items-center text-gray-500 font-medium text-xs md:text-sm gap-2">
//                         <MapPin size={16} className="text-blue-600" />
//                         {slide.location}
//                       </div>
//                     </div>

//                     <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                       {slide.title}
//                     </h3>

//                     <p className="mt-3 md:mt-6 text-gray-600 text-sm md:text-lg leading-relaxed">
//                       {slide.description}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx="true">{`
//         .swiper-pagination-bullet-active {
//           background: #2563eb !important;
//           width: 24px !important;
//           border-radius: 5px !important;
//         }
//         .swiper-pagination {
//           bottom: 15px !important;
//         }
//         @media (max-width: 768px) {
//           .swiper-pagination {
//             bottom: 5px !important;
//           }
//           /* Hide navigation buttons on mobile for better UX, touch swipe is enough */
//           .prev-btn,
//           .next-btn {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WorkshopsDrives;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import your assets
// import img1 from "../assets/hero1.jpg";
// import img2 from "../assets/hero1.jpg";

// const WorkshopsDrives = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "Workshop on Future of IT",
//       college: "CT University, Ludhiana",
//       description: "Interactive session with insights and practical examples.",
//       image: img1,
//     },
//     {
//       id: 2,
//       title: "Workshop on Artificial Intelligence",
//       college: "GNA University, Phagwara",
//       description: "Focused session on emerging AI technologies and trends.",
//       image: img2,
//     },
//     {
//       id: 3,
//       title: "Workshop on Technology Trends",
//       college: "SLIET, Longowal",
//       description: "Deep dive into modern framework and industrial standards.",
//       image: img1,
//     },
//     {
//       id: 4,
//       title: "Workshop on Cloud Computing",
//       college: "LPU, Jalandhar",
//       description: "Hands-on training on MERN stack and cloud deployment.",
//       image: img2,
//     },
//   ];

//   return (
//     <section className="py-10 bg-white overflow-hidden">
//       <div className="max-w-8xl mx-auto px-6 md:px-12">
//         {/* Header from Image */}
//         <div className="text-center mb-5">
//           <span className="text-blue-700 font-bold text-lg">ANSH INFOTECH: EVENTS & CAREER OPPORTUNITIES</span>
//           <h2 className="text-3xl md:text-3xl font-bold text-gray-900 tracking-tight">
//             Development Workshops & Talent Acquisition Drives
//           </h2>
//           <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-3 rounded-full"></div>
//         </div>

//         {/* Main Slider Container */}
//         <div className="relative group">
//           {/* Side Navigation - Left */}
//           <button className="workshop-prev absolute left-[-20px] md:left-[-50px] top-[40%] -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100">
//             <ChevronLeft size={30} />
//           </button>

//           {/* Side Navigation - Right */}
//           <button className="workshop-next absolute right-[-20px] md:right-[-50px] top-[40%] -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100">
//             <ChevronRight size={30} />
//           </button>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             // 3 Slides at a time on Desktop
//             slidesPerView={1}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }, // Show 3 cards
//             }}
//             navigation={{
//               prevEl: ".workshop-prev",
//               nextEl: ".workshop-next",
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             // Autoslide every 5 seconds
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="pb-16"
//           >
//             {slides.map((slide) => (
//               <SwiperSlide key={slide.id}>
//                 {/* Individual Card - Matching Image Style */}
//                 <div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col group/card">
//                   {/* Image with extreme rounded corners */}
//                   <div className="overflow-hidden rounded-[2rem] h-60 md:h-64 mb-6">
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
//                     />
//                   </div>

//                   {/* Text Content */}
//                   <div className="px-3 pb-6 flex-grow">
//                     <h3 className="text-2xl font-bold text-gray-900 leading-tight">
//                       {slide.title}
//                     </h3>

//                     <p className="text-lg font-bold text-gray-900 mt-2">
//                       @ {slide.college}
//                     </p>

//                     <p className="mt-4 text-gray-500 text-base leading-relaxed line-clamp-2">
//                       {slide.description}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx="true">{`
//         .swiper-pagination-bullet-active {
//           background: #2563eb !important;
//           width: 25px !important;
//           border-radius: 5px !important;
//         }
//         .swiper-pagination {
//           bottom: 5px !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WorkshopsDrives;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import your assets
// import img1 from "../assets/hero1.jpg";
// import img2 from "../assets/hero1.jpg";

// const WorkshopsDrives = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "Workshop on Future of IT",
//       college: "CT University, Ludhiana",
//       description: "Interactive session with insights and practical examples.",
//       image: img1,
//     },
//     {
//       id: 2,
//       title: "Workshop on Artificial Intelligence",
//       college: "GNA University, Phagwara",
//       description:
//         "Focused session on emerging AI technologies and trends. This covers deep learning and neural networks.",
//       image: img2,
//     },
//     {
//       id: 3,
//       title: "Workshop on Technology Trends",
//       college: "SLIET, Longowal",
//       description: "Deep dive into modern framework and industrial standards.",
//       image: img1,
//     },
//     {
//       id: 4,
//       title: "Workshop on Cloud Computing",
//       college: "LPU, Jalandhar",
//       description: "Hands-on training on MERN stack and cloud deployment.",
//       image: img2,
//     },
//   ];

//   return (
//     <section className="py-10 bg-gray-50 overflow-hidden">
//       <div className="max-w-8xl mx-auto px-6 md:px-12">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">
//             ANSH INFOTECH: EVENTS & CAREER OPPORTUNITIES
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
//             Development Workshops & Talent Acquisition Drives
//           </h2>
//           <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Slider Container */}
//         <div className="relative group">
//           {/* Custom Navigation - Positioned for symmetry */}
//           <button className="workshop-prev absolute left-[-20px] md:left-[-55px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-100">
//             <ChevronLeft size={28} />
//           </button>

//           <button className="workshop-next absolute right-[-20px] md:right-[-55px] top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-100">
//             <ChevronRight size={28} />
//           </button>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 }, // Fixed 3 cards on desktop
//             }}
//             navigation={{
//               prevEl: ".workshop-prev",
//               nextEl: ".workshop-next",
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             autoplay={{
//               delay: 5000, // 5 seconds
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             // This ensures all slides take up the full height of the container
//             autoHeight={false}
//             className="pb-16 !flex"
//           >
//             {slides.map((slide) => (
//               <SwiperSlide key={slide.id} className="!h-auto flex">
//                 {/*
//                    h-full: Makes card take full height of slide
//                    flex-col: Allows us to push content
//                 */}
//                 <div className="bg-white rounded-[2.5rem] p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col w-full group/card">
//                   {/* Fixed Image Height for uniformity */}
//                   <div className="overflow-hidden rounded-[2rem] h-60 min-h-[15rem] mb-6">
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
//                     />
//                   </div>

//                   {/* Content Area - flex-grow ensures this stretches to fill height */}
//                   <div className="px-2 flex flex-col flex-grow">
//                     {/* line-clamp-2 ensures titles take up the same vertical space (max 2 lines) */}
//                     <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2 min-h-[3.5rem]">
//                       {slide.title}
//                     </h3>

//                     <p className="text-lg font-bold text-blue-600 mt-2">
//                       @ {slide.college}
//                     </p>

//                     <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
//                       {slide.description}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx="true">{`
//         /* Target swiper-wrapper to ensure children (slides) are equal height */
//         .swiper-wrapper {
//           display: flex !important;
//         }

//         .swiper-pagination-bullet-active {
//           background: #2563eb !important;
//           width: 30px !important;
//           border-radius: 5px !important;
//         }

//         .swiper-pagination {
//           bottom: 0px !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WorkshopsDrives;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// // Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import your assets (Ensure these paths are correct in your project)
// import img1 from "../assets/hero1.jpg";
// // Using the same images for demonstration as per your original code
// const img2 = img1;

// const WorkshopsDrives = () => {
//   const navigate = useNavigate();

//   // Updated Data for the 4 specific slides
//   const slides = [
//     {
//       id: 1,
//       title: "Workshops",
//       path: "/workshop",
//       description:
//         "Expert-led immersive sessions focused on building real-world technical expertise.",
//       image: img1,
//       color: "bg-blue-600",
//     },
//     {
//       id: 2,
//       title: "Internship Drive",
//       path: "/internship",
//       description:
//         "Career-focused internship drives designed to connect students with real-world industry opportunities.",
//       image: img2,
//       color: "bg-green-600",
//     },
//     {
//       id: 3,
//       title: "Events",
//       path: "/events",
//       description:
//         "Signature events with top colleges, respected dignitaries, and unforgettable cultural experiences.",
//       image: img1,
//       color: "bg-purple-600",
//     },
//     {
//       id: 4,
//       title: "Newsroom",
//       path: "/newspaper",
//       description:
//         "Our achievements, press coverage, and educational highlights featured across leading media platforms.",
//       image: img2,
//       color: "bg-orange-600",
//     },
//   ];

//   return (
//     <section className="py-15 bg-gray-50 overflow-hidden">
//       <div className="max-w-9xl mx-auto px-6 md:px-12">
//         {/* Header Section */}
//         <div className="text-center mb-5">
//           <span className="text-blue-700 font-bold text-xl sm:text-2xl lg:text-3xl uppercase">
//             Ansh InfoTech's Portfolio
//           </span>

//           <div className="w-24 h-1.5 bg-gray-900 mx-auto mt-2 rounded-full"></div>
//         </div>

//         {/* Slider Container */}
//         <div className="relative group">
//           {/* Navigation Buttons */}
//           <button className="workshop-prev absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full shadow-2xl text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-100">
//             <ChevronLeft size={24} />
//           </button>

//           <button className="workshop-next absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full shadow-2xl text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-100">
//             <ChevronRight size={24} />
//           </button>

//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={25}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2.5 },
//               1024: { slidesPerView: 4 }, // All 4 visible on large screens
//             }}
//             navigation={{
//               prevEl: ".workshop-prev",
//               nextEl: ".workshop-next",
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             autoplay={{
//               delay: 4500,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="pb-16"
//           >
//             {slides.map((slide) => (
//               <SwiperSlide key={slide.id} className="h-full">
//                 <div
//                   onClick={() => navigate(slide.path)}
//                   className="bg-white rounded-[2rem] p-4 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full group/card cursor-pointer transform hover:-translate-y-3"
//                 >
//                   {/* Image Container */}
//                   <div className="relative overflow-hidden rounded-[1.5rem] h-48 mb-6">
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
//                     />
//                     {/* Overlay on hover */}
//                     <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
//                   </div>

//                   {/* Content Area */}
//                   <div className="px-2 flex flex-col flex-grow">
//                     <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
//                       {slide.title}
//                     </h3>

//                     <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
//                       {slide.description}
//                     </p>

//                     {/* Bottom Action Link */}
//                     <div className="mt-auto flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover/card:gap-3 gap-2 transition-all duration-300">
//                       Explore Now
//                       <ArrowRight size={18} />
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Global CSS for Custom Swiper Dots */}
//       <style jsx="true">{`
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #cbd5e1;
//           opacity: 1;
//         }
//         .swiper-pagination-bullet-active {
//           background: #2563eb !important;
//           width: 35px !important;
//           border-radius: 5px !important;
//           transition: all 0.3s ease-in-out;
//         }
//         .swiper-pagination {
//           bottom: 0px !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WorkshopsDrives;



import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your assets
import img1 from "../assets/workshops/aman.jpg";
import img2 from "../assets/drive/ggidrive.jpg";
import img3 from "../assets/events/as.jpg";
import img4 from "../assets/news/asnews.png";

const WorkshopsDrives = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Workshops",
      path: "/workshop",
      description:
        "Expert-led immersive sessions focused on building real-world technical expertise.",
      image: img1,
    },
    {
      id: 2,
      title: "Internship Drive",
      path: "/internship",
      description:
        "Career-focused internship drives designed to connect students with real-world industry opportunities.",
      image: img2,
    },
    {
      id: 3,
      title: "Events",
      path: "/events",
      description:
        "Signature events with top colleges, respected dignitaries, and unforgettable cultural experiences.",
      image: img3,
    },
    {
      id: 4,
      title: "Newsroom",
      path: "/newspaper",
      description:
        "Our achievements, press coverage, and educational highlights featured across leading media platforms.",
      image: img4,
    },
  ];

  return (
    <section className="py-15 bg-gray-50 overflow-hidden">
      <div className="max-w-9xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="text-blue-700 font-bold text-xl sm:text-2xl lg:text-3xl uppercase">
            Ansh InfoTech's Portfolio
          </span>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Navigation Buttons (No Shadows) */}
          <button className="workshop-prev absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-200">
            <ChevronLeft size={24} />
          </button>

          <button className="workshop-next absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 border border-gray-200">
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1} // Shows partial slide on mobile to indicate it's a slider
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".workshop-prev",
              nextEl: ".workshop-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-8 md:pb-16"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="h-auto">
                <div
                  onClick={() => navigate(slide.path)}
                  /* Added overflow-hidden here to clip the image corners */
                  className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden transition-all duration-500 flex flex-col h-full group/card cursor-pointer"
                >
                  {/* 1. Image Container: No padding, no margin-top/sides */}
                  <div className="relative h-56 w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                      /* Removed p-1 and object-top to fill space perfectly */
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover/card:bg-blue-600/5 transition-colors duration-300" />
                  </div>

                  {/* 2. Content Area: Padding added here so text doesn't touch edges */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
                      {slide.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-justify">
                      {slide.description}
                    </p>

                    {/* Action Link */}
                    <div className="mt-auto flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider gap-2">
                      Explore Now
                      <ArrowRight
                        size={18}
                        className="group-hover/card:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS for Justification and Custom Pagination */}
      <style jsx="true">{`
        /* Forces all slides to be the same height as the tallest card */
        .swiper-wrapper {
          display: flex !important;
          align-items: stretch;
        }
        .swiper-slide {
          height: auto !important;
          display: flex;
        }
        .swiper-slide > div {
          width: 100%;
        }

        /* Pagination Dots */
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 35px !important;
          border-radius: 5px !important;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
        @media (max-width: 1112px) {
          .swiper-pagination {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkshopsDrives;