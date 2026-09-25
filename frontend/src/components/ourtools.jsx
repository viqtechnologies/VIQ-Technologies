// OurTools.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  Layers,
  Bot,
  Wrench,
  Database,
  Cloud,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  TrendingUp,
  MessageSquareCode,
} from "lucide-react";

import aircrack from "../assets/cybertools/Aircrack.jpg"
import burp from "../assets/cybertools/burpsuitepro.webp"
import kali from "../assets/cybertools/kali.png"
import metasploit from "../assets/cybertools/metasploit.png"
import nessus from "../assets/cybertools/nessus.png"
import nmap from "../assets/cybertools/nmap.png"
import parrot from "../assets/cybertools/Parrot.png"
import snort from "../assets/cybertools/Snort.jpg"
import tor from "../assets/cybertools/torbrowser.png"
import wireshark from "../assets/cybertools/wireshark.png"


import googleads from "../assets/dmtools/googleads.png"
import googleanalytics from "../assets/dmtools/googleanalytics.png"
import searchconsole from "../assets/dmtools/googlesearch.png"
import hubspot from "../assets/dmtools/hubsport.png"
import mailchimp from "../assets/dmtools/mailchimp.png"
import metap from "../assets/dmtools/metaads.png"
import semrush from "../assets/dmtools/sem.png"

// === DATA WITH REAL IMAGE URLS ===
const toolsData = {
  programming: [
    {
      name: "C++",
      tag: "System",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },

    {
      name: "Java",
      tag: "Enterprise",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      tag: "AI/ML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      tag: "Web",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      tag: "Web",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ],
  frameworks: [
    {
      name: "React",
      tag: "Frontend",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },

    {
      name: "Django",
      tag: "Backend",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Spring",
      tag: "Backend",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Next.js",
      tag: "Fullstack",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ],
  ai_ml: [
    {
      name: "TensorFlow",
      tag: "Library",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      tag: "Library",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Pandas",
      tag: "Data",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "Scikit",
      tag: "Learning",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },

    {
      name: "OpenCV",
      tag: "Vision",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
  ],
  databases: [
    {
      name: "MySQL",
      tag: "Relational",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      tag: "Relational",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      tag: "NoSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },

    {
      name: "Firebase",
      tag: "Realtime",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Oracle",
      tag: "Enterprise",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
  ],
  cloud: [
    {
      name: "AWS",
      tag: "Platform",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      tag: "Microsoft",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      tag: "GCP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      tag: "Container",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      tag: "Orchestration",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ],

  cyber_security: [
    {
      name: "Burp Suite",
      tag: "Web Security",
      img: burp,
    },
    {
      name: "Aircrack-ng",
      tag: "WiFi Auditing",
      img: aircrack,
    },
    {
      name: "Kali Linux",
      tag: "Pentesting OS",
      img: kali,
    },
    {
      name: "Metasploit",
      tag: "Exploitation",
      img: metasploit,
    },
    {
      name: "Nessus",
      tag: "Vulnerability",
      img: nessus,
    },
    {
      name: "Nmap",
      tag: "Scanning",
      img: nmap,
    },
    {
      name: "Parrot OS",
      tag: "Security OS",
      img: parrot,
    },
    {
      name: "Snort",
      tag: "IDS / IPS",
      img: snort,
    },
    {
      name: "Tor Browser",
      tag: "Anonymity",
      img: tor,
    },{
      name:"wireshark",
      tag:"network security",
      img:wireshark
    }
  ],

  digital_marketing: [
    {
      name: "Google Ads",
      tag: "PPC Advertising",
      img: googleads,
    },
    {
      name: "Google Analytics",
      tag: "Web Analytics",
      img: googleanalytics,
    },
    {
      name: "Search Console",
      tag: "SEO Monitoring",
      img: searchconsole,
    },
    {
      name: "HubSpot",
      tag: "CRM & Inbound",
      img: hubspot,
    },
    {
      name: "Mailchimp",
      tag: "Email Marketing",
      img: mailchimp,
    },
    {
      name: "Meta Ads",
      tag: "Social Ads",
      img: metap,
    },
    {
      name: "Semrush",
      tag: "SEO & Content",
      img: semrush,
    },
  ],

};

const categories = [
  {
    id: "programming",
    label: "Programming",
    icon: <MessageSquareCode size={20} />,
  },
  { id: "frameworks", label: "Frameworks", icon: <Layers size={20} /> },
  { id: "ai_ml", label: "AI & ML", icon: <Bot size={20} /> },
  {
    id: "cyber_security",
    label: "Cyber Security",
    icon: <ShieldHalf size={20} />,
  },
  { id: "databases", label: "Databases", icon: <Database size={20} /> },
  { id: "cloud", label: "Cloud", icon: <Cloud size={20} /> },
  {
    id: "digital_marketing",
    label: "Digital Marketing",
    icon: <TrendingUp size={20} />,
  },
];

const OurTools = () => {
  const [activeTab, setActiveTab] = useState("programming");
  const [isHovered, setIsHovered] = useState(false);

  const categoryScrollRef = useRef(null);
  const toolsScrollRef = useRef(null);

  // --- Category Scroll Logic ---
  const scrollCategories = (direction) => {
    const container = categoryScrollRef.current;
    if (container) {
      const scrollAmount = 200;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  // --- Auto-Scroll Logic for Tools ---
  useEffect(() => {
    const container = toolsScrollRef.current;
    let scrollInterval;

    if (container && !isHovered) {
      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "auto" }); // Instant reset to create loop
        } else {
          container.scrollBy({ left: 1.5, behavior: "auto" }); // Smooth glide
        }
      }, 20);
    }
    return () => clearInterval(scrollInterval);
  }, [activeTab, isHovered]);

  // Reset tool scroll when active tab changes
  useEffect(() => {
    if (toolsScrollRef.current) {
      toolsScrollRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, [activeTab]);

  // --- Manual Tool Navigation ---
  const scrollTools = (direction) => {
    const container = toolsScrollRef.current;
    if (container) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#F1F5F9] text-[#172033] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="flex justify-center items-center gap-3 mb-3 md:mb-4">
            <span className="p-2 bg-[#1268B3]/10 border border-[#1268B3]/30 rounded-full text-[#1268B3]">
              <Cpu className="w-6 h-6 md:w-7 md:h-7" />
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#172033] mb-3 md:mb-4">
            Technologies We <span className="text-[#D9A52E]">Master</span>
          </h2>
          <p className="text-[#172033]/80 max-w-2xl mx-auto text-sm md:text-lg">
            We train you on the latest and most in-demand technologies.
          </p>
        </div>

        {/* ==================== CATEGORIES SLIDER ==================== */}
        <div className="relative mb-8 md:mb-12 max-w-5xl mx-auto group/cat">
          {/* Left Arrow (Desktop Only) */}
          <button
            onClick={() => scrollCategories("left")}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-2 rounded-full shadow-md text-[#0A2540] hover:bg-[#1268B3] hover:text-white transition-all opacity-0 group-hover/cat:opacity-100 hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Categories Container */}
          <div
            ref={categoryScrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth px-2 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveTab(cat.id)}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 rounded-xl border transition-all duration-300 min-w-[140px] md:min-w-[180px] justify-center cursor-pointer select-none
                  ${
                    activeTab === cat.id
                      ? "bg-[#0A2540] border-[#0A2540] text-[#D9A52E] shadow-lg scale-105 font-bold"
                      : "bg-white border-gray-200 text-[#172033] hover:border-[#1268B3] hover:text-[#1268B3]"
                  }
                `}
              >
                {/* Responsive Icon Size */}
                {React.cloneElement(cat.icon, {
                  size:
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? 18
                      : 20,
                })}
                <span className="font-bold text-sm md:text-lg">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={() => scrollCategories("right")}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-2 rounded-full shadow-md text-[#0A2540] hover:bg-[#1268B3] hover:text-white transition-all opacity-0 group-hover/cat:opacity-100 hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* ==================== TOOLS SLIDER (IMAGES) ==================== */}
        <div
          className="relative group px-0 md:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)} // Pause on mobile touch
          onTouchEnd={() => setIsHovered(false)} // Resume on touch release
        >
          {/* Left Arrow (Desktop Only) */}
          <button
            onClick={() => scrollTools("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg text-[#0A2540] hover:bg-[#1268B3] hover:text-white transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrolling Container */}
          <div
            ref={toolsScrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-10 pt-4 px-2 md:px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicated data for infinite loop illusion */}
            {[
              ...toolsData[activeTab],
              ...toolsData[activeTab],
              ...toolsData[activeTab],
            ].map((tool, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] bg-white rounded-2xl p-4 md:p-6 border border-[#172033]/10 shadow-sm hover:shadow-xl hover:border-[#1268B3] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer group/card"
              >
                {/* Image Container with Hover Effect */}
                <div className="h-16 w-16 md:h-24 md:w-24 mb-4 md:mb-6 relative flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
                  {/* Background Blob */}
                  <div className="absolute inset-0 bg-[#1268B3]/10 rounded-full blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

                  {/* Real Logo Image */}
                  <img
                    loading="lazy"
                    decoding="async"
                    src={tool.img}
                    alt={tool.name}
                    className="w-full h-full object-contain relative z-10 select-none p-1"
                  />
                </div>

                <h3 className="text-base md:text-lg font-bold text-[#172033] mb-1 group-hover/card:text-[#1268B3] transition-colors">
                  {tool.name}
                </h3>
                <span className="text-xs md:text-sm font-semibold text-[#D9A52E] uppercase tracking-wide">
                  {tool.tag}
                </span>
              </div>
            ))}

            {(!toolsData[activeTab] || toolsData[activeTab].length === 0) && (
              <div className="w-full text-center text-[#172033]/50 py-10">
                No tools listed yet.
              </div>
            )}
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={() => scrollTools("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg text-[#0A2540] hover:bg-[#1268B3] hover:text-white transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTools;
