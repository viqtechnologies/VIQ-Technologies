// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Maximize2, X } from "lucide-react";
// import "swiper/css";
// import "swiper/css/navigation";

// // Import images from assets/gallery/
// import img1 from "../assets/office/office1.jpeg";
// import img2 from "../assets/office/office2.jpg";
// import img3 from "../assets/office/office2.png";
// import img4 from "../assets/office/office4.png";
// import img5 from "../assets/office/office5.png";
// import img6 from "../assets/office/office6.png";
// import img7 from "../assets/office/office7.png";
// import img8 from "../assets/office/office8.png";
// import img9 from "../assets/office/office9.png";
// import img10 from "../assets/office/office10.png";

// const Gallery = () => {
//   const [selectedImg, setSelectedImg] = useState(null);
//   const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

//   return (
//     <section className="py-10 bg-gradient-to-br from-gray-100 to-blue-200">
//       <div className="max-w-7xl mx-auto px-4 mb-10">
//         <h2 className="text-4xl font-bold text-center mb-8 text-blue-900 ">
//           A Glimpse Into Our Workplace
//         </h2>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           navigation
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="mySwiper"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group overflow-hidden rounded-xl shadow-md h-100">
//                 {/* Image */}
//                 <img
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay with Zoom Button */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                   <button
//                     onClick={() => setSelectedImg(img)}
//                     className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform scale-50 group-hover:scale-100"
//                   >
//                     <Maximize2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* --- Simple Zoom Modal --- */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
//           onClick={() => setSelectedImg(null)}
//         >
//           {/* Close Button */}
//           <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
//             <X size={40} />
//           </button>

//           {/* Large Image */}
//           <img
//             src={selectedImg}
//             alt="Zoomed"
//             className="max-w-full h-[80vh] rounded-lg shadow-2xl animate-in zoom-in duration-300"
//           />
//         </div>
//       )}

//       {/* Swiper Custom Arrow Styles */}
//       <style>{`
//         .swiper-button-next, .swiper-button-prev {
//           background-color: white;
//           width: 40px !important;
//           height: 40px !important;
//           border-radius: 50%;
//           color: #2563eb !important;
//           box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
//         }
//         .swiper-button-next:after, .swiper-button-prev:after {
//           font-size: 18px !important;
//           font-weight: bold;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import images from assets/gallery/
import img1 from "../assets/office/office1.jpeg";
import img2 from "../assets/office/office2.jpg";
import img3 from "../assets/office/office2.png";
import img4 from "../assets/office/office4.png";
import img5 from "../assets/office/office5new.jpg";
import img6 from "../assets/office/office6.png";
import img7 from "../assets/office/office7.png";
import img8 from "../assets/office/office8new.jpg";
import img9 from "../assets/office/office9new.jpg";
import img10 from "../assets/office/office10new.jpg";
import img11 from "../assets/office/office11.jpg";
import img12 from "../assets/office/office12.jpg";
import img13 from "../assets/office/office13.jpg";
import img14 from "../assets/office/office14.jpg";
import img15 from "../assets/office/office15.jpg";
import img16 from "../assets/office/office16.jpg";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isAutoplayActive, setIsAutoplayActive] = useState(false);

  const images = [
    img11 , img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,img15,img16,
    img10,
    img12,
    img13,
    img14,
  ];

  // Handle Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay Logic
  useEffect(() => {
    if (!isAutoplayActive) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [itemsPerPage, maxIndex, isAutoplayActive]);

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-100 to-blue-50 overflow-hidden"
      onMouseEnter={() => setIsAutoplayActive(true)}
      onTouchStart={() => setIsAutoplayActive(true)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            A Glimpse Into Our Workplace
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group/slider">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="relative group overflow-hidden rounded-xl shadow-md h-80">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => setSelectedImg(img)}
                        className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform scale-50 group-hover:scale-100"
                      >
                        <Maximize2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
            <X size={40} />
          </button>
          <img
            src={selectedImg}
            alt="Zoomed"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;