// import React, { useState } from "react";

// import {
//   Globe,TabletSmartphone, Handbag, BadgeIndianRupee ,
//   Zap,
//   Shield,
//   Users,
//   TrendingUp,
//   Code,
//   Sparkles,
//   CheckCircle,
//   Clock,
//   DollarSign,
//   Target,
//   Repeat,
//   Search,
//   Scale,
//   Home,
//   ChevronRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";


// const WebsiteDevelopment = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Custom Website Design",
//       description:
//         " We design aesthetically beautiful websites that complement your business identity and provide a user-friendly interface.",
//     },
//     {
//       icon: <TabletSmartphone className="w-8 h-8" />,
//       title: "Responsive Development",
//       description:
//         " Because our websites are totally responsive, they work and look great on PCs, tablets, and smartphones. ",
//     },
//     {
//       icon: <Handbag className="w-8 h-8" />,
//       title: "E-commerce Solutions",
//       description:
//         "We create e-commerce solutions that increase sales, from managing product catalogs to integrating secure payments. ",
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Content Management Systems (CMS)",
//       description:
//         "Using well-known CMS systems like WordPress, Joomla, and Drupal, we enable you to easily administer your website.",
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Website Maintenance & Support",
//       description:
//         "Our staff makes sure your website is always safe, current, and functional.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "SEO-Friendly Development",
//       description:
//         "Every website we design adheres to SEO best practices to increase your website's exposure and search engine reach.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Expert Team",
//       description:
//         "Our strategists, designers, and developers have years of expertise and a strong desire to provide successful digital solutions.",
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Tailored Solutions",
//       description:
//         " We reject the idea of a one-size-fits-all approach. All of the projects are tailored to your company's objectives and requirements.",
//     },
//     {
//       icon: <BadgeIndianRupee className="w-8 h-8" />,
//       title: "Cutting-Edge Technology Cost Efficiency",
//       description:
//         "To keep your website competitive, we keep up with the newest technologies and trends in web building. ",
//     },
//     {
//       icon: <Search className="w-8 h-8" />,
//       title: "SEO & Performance Focused",
//       description:
//         "We optimize every element of your website for optimal impact, from search engine optimization to loading speed. ",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Ongoing Support",
//       description:
//         "We provide ongoing upkeep and updates to make sure your website develops with your company. ",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Growth-Oriented Development",
//       description:
//         "Every solution is built with scalability and future growth in mind, enabling your digital presence to evolve seamlessly with your business.",
//     },
//   ];




//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
//       {/* Hero Section with Breadcrumb */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 relative">
//         <div className="max-w-6xl mx-auto">
//           {/* Professional Breadcrumb */}
//           <nav className="mb-8" aria-label="Breadcrumb">
//             <ol className="flex items-center space-x-2 text-sm">
//               <li className="flex items-center">
//                 <Link
//                   to="/"
//                   className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-200 group"
//                 >
//                   <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
//                   <span className="font-medium">Home</span>
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
//                 <Link
//                   to="/services"
//                   className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
//                 <span className="text-white font-semibold">
//                   Website Development
//                 </span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3">
//               <Globe className="h-14 w-14 hidden lg:block" />
//               <h1 className="sm:text-2xl md:text-4xl lg:text-4xl font-bold leading-tight">
//                 Website Development Experts Creating Engaging Experiences
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
//             {["overview", "Services", "Why Choose Us"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-3 px-2 border-b-2 font-semibold transition-colors capitalize whitespace-nowrap ${
//                   activeTab === tab
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-600 hover:text-blue-600"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
//         {/* Overview Section - Increased height */}
//         {activeTab === "overview" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="bg-white rounded-xl shadow-lg p-10 border-l-4 border-blue-600">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Introduction
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-1 text-justify">
//                 Having a strong online presence is now necessary in today's
//                 fast-paced digital environment. Websites that look great and
//                 work well on all devices are essential for companies of all
//                 sizes. The creation of digital experiences that capture
//                 audiences, encourage interaction, and turn visitors into devoted
//                 customers is our agency's area of expertise in website
//                 development. Our team of{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   website development
//                 </a>{" "}
//                 specialists creates websites that achieve your company
//                 objectives by fusing technological know-how, creativity, and
//                 industry best practices. We are aware that a website is a strong
//                 instrument for efficiently connecting with your audience,
//                 showcasing your goods and services, and representing your brand.
//                 It is more than simply a collection of pages.
//               </p>

//               <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-6">
//                 Crafting Engaging Digital Experiences
//               </h3>
//               <p className="text-gray-700 text-xl leading-relaxed mb-1 text-justify">
//                 Design and code alone are not enough to create a successful
//                 website. It involves creating captivating digital experiences
//                 that appeal to your target audience. User-centric design, simple
//                 navigation, quick loading times, and interactive elements that
//                 keep users interested are the main priorities of our website
//                 development specialists. Additionally, we incorporate analytics
//                 tools to track user activity, giving you insight into how users
//                 engage with your website and areas for development. We guarantee
//                 that your website consistently changes to satisfy the needs of
//                 your audience by fusing creativity with data-driven insights.
//               </p>

//               <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-6">
//                 MERN Stack Website Development
//               </h3>
//               <p className="text-gray-700 text-xl leading-relaxed mb-1 text-justify">
//                 We are experts in developing MERN Stack apps for companies
//                 looking for innovative online applications. MongoDB, Express.js,
//                 React.js, and Node.js, or MERN for short, is a potent mix that
//                 makes it possible to create dynamic, scalable, and
//                 high-performing online apps. Our MERN Stack engineers are
//                 capable of creating dependable single-page applications (SPAs)
//                 with flawless user interfaces. Our proficiency with the MERN
//                 Stack enables us to create online applications that are quick,
//                 safe, and simple to maintain, whether they involve interactive
//                 dashboards, real-time data updates, or unique web solutions. We
//                 guarantee that your digital solutions are future-ready and
//                 equipped to manage intricate company requirements by utilizing
//                 this cutting-edge technology.
//               </p>

//               <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-6">
//                 Bringing Your Vision to Life
//               </h3>
//               <p className="text-gray-700 text-xl leading-relaxed mb-1 text-justify">
//                 Collaboration is at the heart of our website development
//                 concept. From the first idea to the ultimate launch, we
//                 collaborate closely with you to make sure your website
//                 accurately reflects your brand and achieves your goals.
//                 Planning, creating, testing, and delivering aesthetically
//                 pleasing, completely functioning, and user experience-optimized
//                 websites are all part of our process. Our staff is prepared to
//                 produce outstanding outcomes whether you're wanting to create a
//                 new website from the start or remodel an existing one. In the
//                 congested digital market, we help your organization stand out by
//                 emphasizing interaction, usefulness, and performance.
//               </p>

//               <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-6">
//                 Conclusion
//               </h3>
//               <p className="text-gray-700 text-xl leading-relaxed mb-1 text-justify">
//                 The goal of  VIQ Technologies's website development services is to
//                 turn your online presence into a captivating, effective digital
//                 experience. Modern technology, innovative design, and
//                 user-centered solutions are all combined to create websites that
//                 are not only aesthetically pleasing but also productive. Whether
//                 it's a{" "}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Dynamics"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   dynamic
//                 </a>{" "}
//                 web application utilizing the MERN Stack, a responsive corporate
//                 website, or a strong e-commerce platform, our team makes sure
//                 every project is in line with your company objectives.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Expertise Section - Increased height */}
//         {activeTab === "Services" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Comprehensive Website Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 We provide a variety of website development services that are
//                 customized to meet the specific requirements of every customer
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {expertiseAreas.map((area, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
//                 >
//                   <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-2">
//                     {area.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-3">
//                     {area.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm font-semibold text-justify">
//                     {area.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Benefits Section - Increased height */}
//         {activeTab === "Why Choose Us" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Why Choose Our Website Development Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 The success of your online presence may be greatly impacted by
//                 your choice of website development partner. Here's why companies
//                 have faith in us
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
//                 >
//                   <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-3">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm font-semibold text-justify">
//                     {benefit.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WebsiteDevelopment;





import React, { useState } from "react";

import {
  Globe,
  TabletSmartphone,
  Handbag,
  BadgeIndianRupee,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  Sparkles,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Repeat,
  Search,
  Scale,
  Home,
  ChevronRight,
  Briefcase,
  Settings,
  Layers,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  const [activeTab, setActiveTab] = useState("overview");

 

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced MERN Stack & WordPress Developers",
      description:
        "Our team consists of skilled developers with deep expertise in MERN Stack and WordPress technologies, delivering professional solutions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom, Scalable, and Secure Solutions",
      description:
        "We build tailored solutions designed for growth, with robust security measures and scalable architecture to meet your evolving needs.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO-Optimized and Mobile-Friendly Websites",
      description:
        "Every website is built with SEO best practices and responsive design to ensure maximum visibility and optimal user experience across devices.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean, Maintainable, and Well-Documented Code",
      description:
        "We write clean, structured code following industry standards, making it easy to maintain, update, and scale your application.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery with Transparent Communication",
      description:
        "We value your time and maintain clear communication throughout the project, ensuring timely delivery without compromising quality.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Post-Launch Support and Maintenance",
      description:
        "Our commitment doesn't end at launch. We provide ongoing support, updates, and maintenance to ensure your website continues to perform optimally.",
    },
  ];

  const industries = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Startups & SMEs",
      description:
        "Helping startups and small-to-medium enterprises establish their digital presence with cost-effective, scalable web solutions.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "SaaS & IT Companies",
      description:
        "Building robust SaaS platforms and IT solutions with cutting-edge technologies for software and technology companies.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "E-commerce Businesses",
      description:
        "Creating powerful e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Healthcare & Education",
      description:
        "Developing secure, compliant web applications for healthcare providers and educational institutions with focus on data privacy.",
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: "Finance & Professional Services",
      description:
        "Building secure, reliable web solutions for financial institutions and professional service providers with emphasis on security and compliance.",
    },
    
  ];

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      step: "01",
      title: "Requirement Analysis & Planning",
      description:
        "We begin by understanding your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed project roadmap.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      step: "02",
      title: "UI/UX Design",
      description:
        "Our designers create intuitive, visually appealing interfaces that provide excellent user experiences. We focus on usability, accessibility, and modern design principles.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      step: "03",
      title: "Frontend & Backend Development",
      description:
        "Our developers bring designs to life using latest technologies. We build responsive frontends and robust backends that work seamlessly together.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      step: "04",
      title: "Quality Assurance & Testing",
      description:
        "Rigorous testing ensures your website is bug-free, secure, and performs optimally across all devices and browsers before launch.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      step: "05",
      title: "Deployment & Launch",
      description:
        "We handle the complete deployment process, ensuring smooth launch with minimal downtime and optimal configuration for performance.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      step: "06",
      title: "Ongoing Support & Maintenance",
      description:
        "Post-launch, we provide continuous support, regular updates, security patches, and performance optimization to keep your website running perfectly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Professional Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-200 group"
                >
                  <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
                <Link
                  to="/services"
                  className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
                <span className="text-white font-semibold">
                  Website Development
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center">
            <div className="flex items-center justify-center sm:gap-3">
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight  ">
                Web Development Services | MERN Stack & WordPress Development
                Company
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {[
              "overview",
              "why choose us",

              "industries we serve",
              "our process",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-2 border-b-2 font-semibold transition-colors capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            {/* Header Section */}
            <div className="bg-white border-b-4 border-blue-600 shadow-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Scalable, Secure & High-Performance Web Development Solutions
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                 VIQ Technologies is a professional web development company
                delivering modern, scalable, and result-driven websites using
                MERN Stack and WordPress technologies. We build high-performance
                web applications and business websites that are fast, secure,
                SEO-friendly, and conversion-focused. Whether you need a custom
                web application, a dynamic business website, or a content-driven
                WordPress platform, our development team delivers solutions
                tailored to your business goals.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* MERN Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  MERN Stack Web Development Services
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We specialize in MERN Stack (MongoDB, Express.js, React.js,
                  Node.js) development to build robust, scalable, and
                  interactive web applications.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our MERN Stack Capabilities:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Custom web
                      application development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Single Page
                      Applications (SPA)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> RESTful &
                      GraphQL API development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Real-time
                      applications (chat, dashboards)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Secure
                      authentication & authorization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Scalable
                      backend architecture
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why MERN Stack?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> High
                      performance and scalability
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Seamless
                      frontend and backend integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Ideal for
                      SaaS products and enterprise applications
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Startups, SaaS platforms, enterprise-grade
                    applications
                  </p>
                </div>
              </div>

              {/* WordPress Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  WordPress Web Development Services
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We offer custom WordPress development services for businesses
                  looking for flexibility, ease of management, and strong SEO
                  performance.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our WordPress Solutions Include:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Custom
                      WordPress website development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Theme
                      customization & development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Plugin
                      development & integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> WooCommerce
                      development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Website
                      migration & optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Speed,
                      security & SEO optimization
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why WordPress?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      User-friendly content management
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> SEO-friendly
                      architecture
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Cost-effective and scalable
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Business websites, blogs, eCommerce stores,
                    portfolios
                  </p>
                </div>
              </div>
            </div>

            {/* Full Stack Section */}
            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Full-Stack Web Development Services
              </h3>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                Our end-to-end web development services cover:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-lg mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> UI/UX
                  design & responsive layouts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Frontend development (React.js, HTML, CSS, JavaScript)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Backend development (Node.js, Express.js)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Database management (MongoDB, MySQL)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> API
                  integration & third-party services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Deployment, maintenance & support
                </li>
              </ul>
              <p className="text-center text-blue-800 font-medium text-lg italic  ">
                We ensure every website is optimized for speed, security,
                scalability, and search engines.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Build Your Website with  VIQ Technologies
              </h3>
              <p className="text-lg mb-8 text-blue-50">
                Looking for a reliable web development company for MERN Stack or
                WordPress development?
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
                <p className="text-lg font-bold leading-relaxed">
                   VIQ Technologies delivers future-ready web solutions that help
                  your business grow online.
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact us today to discuss your web development requirements.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        {activeTab === "why choose us" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose  VIQ Technologies for Web Development?
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                We focus on building websites that perform, convert, and scale
                with cutting-edge technologies and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold text-justify">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industries We Serve Section */}
        {activeTab === "industries we serve" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                No matter the industry, we build solutions aligned with your
                business needs and deliver excellence across all sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-3">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold text-justify">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Process Section */}
        {activeTab === "our process" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Web Development Process
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                This structured approach ensures timely delivery and
                high-quality output for every project we undertake
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-blue-500">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold text-justify">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WebsiteDevelopment;
