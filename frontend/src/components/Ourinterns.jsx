import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Shield,
  Brain,
  ChevronsLeftRightEllipsis,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import JaspreetImg from "../assets/services/cyber.jpg";
import LuxmanImg from "../assets/services/dataanalytics.jpg";
import JainishImg from "../assets/services/dataanalytics.jpg";
import TanvirImg from "../assets/services/cyber.jpg";

const internMembers = [
  // {
  //   id: 1,
  //   name: "Sudhanshu",
  //   role: "Mobile App Developer Intern",
  //   desc: "Sudhanshu is a passionate mobile app developer intern with hands-on experience in building user-friendly Android and cross-platform applications. He focuses on performance optimization, intuitive UI/UX design, and scalable mobile solutions using modern app development frameworks and best coding practices.",
  //   image: JaspreetImg,
  //   icon: <ChevronsLeftRightEllipsis className="w-5 h-5" />,
  //   socials: { linkedin: "#" },
  // },
  {
    id: 1,
    name: "Vicky",
    role: "Cybersecurity Intern",
    desc: "Vicky is a dedicated cybersecurity intern with a strong interest in ethical hacking, network security, and vulnerability assessment. He actively works on identifying security risks, understanding cyber threats, and implementing basic security measures to help protect digital systems and sensitive data.",
    image: TanvirImg,
    icon: <Shield className="w-5 h-5" />,
    socials: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Anuj",
    role: "Web Developer Intern",
    desc: "Anuj is a motivated web developer intern skilled in building responsive and SEO-friendly websites. He works with modern front-end technologies to create clean layouts, optimize website performance, and deliver smooth user experiences across different devices and browsers.",
    image: LuxmanImg,
    icon: <ChevronsLeftRightEllipsis className="w-5 h-5" />,
    socials: { linkedin: "#" },
  },
  // {
  //   id: 4,
  //   name: "Vinay",
  //   role: "Web Developer Intern",
  //   desc: "Vinay is an enthusiastic web developer intern focused on modern web technologies and best development practices. He contributes to creating scalable web applications, improving website performance, and implementing clean, maintainable code with a strong focus on user experience and accessibility.",
  //   image: LuxmanImg,
  //   icon: <ChevronsLeftRightEllipsis className="w-5 h-5" />,
  //   socials: { linkedin: "#" },
  // },
  {
    id: 3,
    name: "Seajal",
    role: "AI & Machine Learning Intern",
    desc: "Seejal is an aspiring AI and Machine Learning intern with a keen interest in data-driven technologies, intelligent systems, and predictive models. She explores machine learning algorithms, data analysis techniques, and AI-based solutions to build smart, future-ready applications.",
    image: JainishImg,
    icon: <Brain className="w-5 h-5" />,
    socials: { linkedin: "#" },
  },
];

const Intern = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

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

  const maxIndex = Math.max(0, internMembers.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerPage, maxIndex]);

  return (
    <section className="py-12 bg-blue-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Meet Our Interns "Future Technology Innovators"
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto text-lg">
            Driven by curiosity and guided by expertise, our interns work across
            modern technologies including web development, mobile applications,
            cybersecurity, and AI/ML. They collaborate on live projects, apply
            industry best practices, and transform ideas into impactful digital
            experiences.{" "}
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group/slider">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden py-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {internMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white h-[400px] rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 flex flex-col items-center relative">
                    {/* Circular avatar */}
                    <div className="relative -mt-10 mb-4">
                      <div className="w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/200x200?text=Intern";
                          }}
                        />
                      </div>

                      {/* Optional overlay with Linkedin on hover */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={member.socials.linkedin}
                          className="text-white hover:text-blue-200 transition-colors p-2 bg-white/20 rounded-full backdrop-blur-sm"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-2 flex flex-col flex-grow text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-500 mb-3 uppercase tracking-wide">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4  text-justify">
                        {member.desc}
                      </p>
                    </div>

                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
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
    </section>
  );
};

export default Intern;
