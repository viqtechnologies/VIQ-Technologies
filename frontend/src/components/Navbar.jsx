// import React from "react";
// import { Phone, Mail, Linkedin, Instagram, Youtube } from "lucide-react";

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-blue-600 text-white py-2">
//         <div
//           className="
//             max-w-7xl mx-auto 
//             px-2 sm:px-4 lg:px-8 
//             flex items-center justify-between 
//             gap-2
//             text-[10px] xs:text-[11px] sm:text-xs md:text-sm
//           "
//         >
//           {/* Left side: contact */}
//           <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
//             <a
//               href="mailto:anshinfotech1@gmail.com"
//               className="
//                 flex items-center gap-1 sm:gap-2 
                
//                 transition-colors transition-transform duration-200
//                 max-w-[120px] xs:max-w-[150px] sm:max-w-none
//               "
//             >
//               <Mail size={16} className="shrink-0" />
//               {/* hide text on very small, show from sm */}
//               <span className=" sm:inline truncate">
//                 anshinfotech1@gmail.com
//               </span>
//             </a>
//             <a
//               href="tel:+7652983770"
//               className="
//                 flex items-center gap-1 sm:gap-2 
                 
//                 transition-colors transition-transform duration-200
//                 max-w-[110px] xs:max-w-[130px] sm:max-w-none
//               "
//             >
//               <Phone size={16} className="shrink-0" />
//               <span className=" sm:inline truncate">+91-76529 83770</span>
//             </a>
//           </div>

//           {/* Right side: social icons */}
//           <div className="flex items-center  sm:gap-3">
//             <button
//               aria-label="LinkedIn"
//               className="p-2 rounded-full hover:bg-white/50 transition-colors duration-200"
//             >
//               <Linkedin size={16} className=" transition-colors duration-200" />
//             </button>
//             <button
//               aria-label="Instagram"
//               className="p-2 rounded-full hover:bg-white/50 transition-colors duration-200"
//             >
//               <Instagram
//                 size={16}
//                 className=" transition-colors duration-200"
//               />
//             </button>
//             <button
//               aria-label="YouTube"
//               className="p-2 rounded-full hover:bg-white/50 transition-colors duration-200"
//             >
//               <Youtube size={16} className=" transition-colors duration-200" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Phone, Mail } from "lucide-react";

// const socialLinks = [
//   {
//     icon: "fab fa-facebook-f",
//     href: "https://www.facebook.com/p/ANSH-InfoTech-61553099870712/",
//     label: "Facebook",
//   },
//   {
//     icon: "fab fa-google",
//     href: "https://www.google.com/search?rlz=1C1ONGR_enIN1120IN1120&sxsrf=AE3TifMBYROZR6v3y9KTOR0I6Y7lubSXZg:1760426130263&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9lcRk0uv3m6eGsR9Y_g0K0Y8NFNQLG2ejIghYnwcaPoYZJM0qD1rUnytEreFGRyc1qPOljwOeB06pYw8aJZmcjjfBpq&q=ANSH+InfoTech+Reviews",
//     label: "Google",
//   },
//   {
//     icon: "fab fa-linkedin-in",
//     href: "https://www.linkedin.com/company/ansh-infotech1/posts/?feedView=all",
//     label: "LinkedIn",
//   },
//   {
//     icon: "fab fa-instagram",
//     href: "https://www.instagram.com/anshinfotech/",
//     label: "Instagram",
//   },
// ];

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-blue-600 text-white py-1">
//         <div
//           className="
//             max-w-7xl mx-auto 
//             px-2 sm:px-4 lg:px-8 
//             flex items-center justify-between 
//             gap-2
//             text-[10px] xs:text-[11px] sm:text-xs md:text-sm
//           "
//         >
//           {/* Left side: contact */}
//           <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
//             <a
//               href="mailto:contact@anshinfotech.org"
//               className="
//                 flex items-center gap-1 sm:gap-2 
//                 transition-colors transition-transform duration-200
//                 max-w-[120px] xs:max-w-[150px] sm:max-w-none
//               "
//             >
//               <Mail size={16} className="shrink-0" />
//               <span className="sm:inline truncate">
//                 viqtechnologies@gmail.com
//               </span>
//             </a>

//             <a
//               href="tel:+918427899400"
//               className="
//                 flex items-center gap-1 sm:gap-2 
//                 transition-colors transition-transform duration-200
//                 max-w-[110px] xs:max-w-[130px] sm:max-w-none
//               "
//             >
//               <Phone size={16} className="shrink-0" />
//               <span className="sm:inline truncate">+91-79860 67505</span>
//             </a>
//           </div>

//           {/* Right side: social icons (Font Awesome) */}
//           <div className="flex items-center sm:gap-3">
//             {socialLinks.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={item.label}
//                 className="
//                   p-2 rounded-full 
//                   hover:bg-white/50 
//                   transition-colors duration-200
//                 "
//               >
//                 <i
//                   className={`${item.icon} h-5 w-5 text-center text-sm sm:text-base`}
//                 ></i>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { Phone, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: "fab fa-google",
    href: "https://www.google.com/",
    label: "Google",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/viqtechnologies",
    label: "Instagram",
  },
];

const Navbar = () => {
  return (
    <>
      {/* Deep Blue (#0A2540) Top Bar with Gold (#D9A52E) Accents */}
      <div className="bg-[#0A2540] text-[#F1F5F9] py-1.5 border-b border-[#D9A52E]/50 shadow-md">
        <div
          className="
            max-w-7xl mx-auto 
            px-2 sm:px-4 lg:px-8 
            flex items-center justify-between 
            gap-2
            text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium
          "
        >
          {/* Left side: contact */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <a
              href="mailto:viqtechnologies@gmail.com"
              className="
                flex items-center gap-1.5 sm:gap-2 
                transition-colors duration-200
                hover:text-[#D9A52E]
                max-w-[120px] xs:max-w-[150px] sm:max-w-none
              "
            >
              <Mail size={15} className="shrink-0 text-[#D9A52E]" />
              <span className="sm:inline truncate">
                viqtechnologies@gmail.com
              </span>
            </a>

            <a
              href="tel:+917986067505"
              className="
                flex items-center gap-1.5 sm:gap-2 
                transition-colors duration-200
                hover:text-[#D9A52E]
                max-w-[110px] xs:max-w-[130px] sm:max-w-none
              "
            >
              <Phone size={15} className="shrink-0 text-[#D9A52E]" />
              <span className="sm:inline truncate">+91-79860 67505</span>
            </a>
          </div>

          {/* Right side: social icons (Font Awesome) */}
          <div className="flex items-center sm:gap-3">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="
                  p-1.5 sm:p-2 rounded-full 
                  text-[#F1F5F9] hover:text-[#D9A52E] hover:bg-[#1268B3]/30 
                  transition-all duration-200
                "
              >
                <i
                  className={`${item.icon} h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-center text-sm sm:text-base`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
