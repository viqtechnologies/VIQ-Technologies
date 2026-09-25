// import React, { useState, useEffect } from "react";
// import { motion, useSpring, useMotionValue } from "framer-motion";

// const CursorWrapper = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

  
//   const springConfig = { stiffness: 200, damping: 30, mass: 0.5 };
//   const cursorX = useSpring(mouseX, springConfig);
//   const cursorY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!isVisible) setIsVisible(true);
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     const handleMouseLeaveWindow = () => setIsVisible(false);
//     const handleMouseEnterWindow = () => setIsVisible(true);

//     window.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseleave", handleMouseLeaveWindow);
//     document.addEventListener("mouseenter", handleMouseEnterWindow);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseleave", handleMouseLeaveWindow);
//       document.removeEventListener("mouseenter", handleMouseEnterWindow);
//     };
//   }, [isVisible, mouseX, mouseY]);

//   return (
//     <>
     
//       <style>
//         {`
//           @media (max-width: 1024px) {
//             .custom-cursor { display: none !important; }
//           }
//         `}
//       </style>

     
//       <motion.div
//         className="custom-cursor fixed top-0 left-0 w-6 h-6 border border-blue-500 rounded-full pointer-events-none z-[99999] bg-blue-500/5"
//         style={{
//           x: cursorX,
//           y: cursorY,
//           translateX: "-50%",
//           translateY: "-50%",
//           opacity: isVisible ? 1 : 0,
//         }}
        
//       />

//       {children}
//     </>
//   );
// };

// export default CursorWrapper;




import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../Apipath.jsx";
const CursorWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 30, mass: 0.5 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [isVisible, mouseX, mouseY]);



  // GLOBAL API WARMUP
  useEffect(() => {
    const cached = sessionStorage.getItem("server-status");

    // already cached
    if (cached) {
      console.log("Cached:", cached);
      return;
    }

    const warmupServer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}`);

        console.log("Server Response:", res.data);

        sessionStorage.setItem("server-status", res.data);
      } catch (error) {
        console.log(error);
      }
    };

    warmupServer();
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 1024px) {
            .custom-cursor {
              display: none !important;
            }
          }
        `}
      </style>

      <motion.div
        className="custom-cursor fixed top-0 left-0 w-6 h-6 border border-[#1268B3] rounded-full pointer-events-none z-[99999] bg-[#1268B3]/15 shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {children}
    </>
  );
};

export default CursorWrapper;

