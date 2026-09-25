// import React, { useState } from "react";
// import {
//   Smartphone,Component,
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
//   Globe,
//   Scale,
//   Home,
//   ChevronRight,
//   BadgeIndianRupee,

// } from "lucide-react";
// import {Link} from 'react-router-dom'

// const MobileAppDevelopment = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Cross-Platform Development",
//       description:
//         "Professionals can create apps that work flawlessly on iOS and Android smartphones, cutting down on development expenses and expanding the user base. ",
//     },
//     {
//       icon: <Component className="w-8 h-8" />,
//       title: "UI/UX Design",
//       description:
//         "Designing an app's user interface and user experience is essential to its uptake and retention. Experts in mobile apps guarantee user-friendly, eye-catching, and captivating designs. ",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Performance Optimization",
//       description:
//         "Retaining users requires high-performance apps that load rapidly, function fluidly, and consume less power. ",
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Security Measures",
//       description:
//         "Because mobile applications handle sensitive data, developers put strong security measures in place to safeguard user data and adhere to legal requirements.",
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Integration Capabilities",
//       description:
//         "To guarantee a flawless experience, modern applications frequently need to interact with third-party tools, cloud services, or business systems that are already in place.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Strategic Planning",
//       description:
//         "Professionals assist in coordinating app development with overarching corporate objectives, guaranteeing measurable results.",
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Faster Time-to-Market",
//       description:
//         "Expert developers expedite the development process, enabling companies to release apps with speed and efficiency.",
//     },
//     {
//       icon: <BadgeIndianRupee className="w-8 h-8" />,
//       title: "Cost Efficiency",
//       description:
//         "Experts assist in lowering development costs by utilizing reusable frameworks and avoiding typical errors.",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Continuous Support",
//       description:
//         "Experts offer ongoing assistance to keep programs current and useful, from post-launch upgrades to troubleshooting and feature improvements.",
//     },
   
//   ];

  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
//       {/* Hero Section - Increased height */}
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
//                   Mobile App Development
//                 </span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3 ">
//               <Smartphone className="h-14 w-14 hidden lg:block" />
//               <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
//                 Mobile App Development Experts Driving Digital Transformation
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto ">
//             {["overview", "expertise", "benefits"].map((tab) => (
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
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Businesses are under tremendous pressure to innovate and remain
//                 ahead of the competition in the quickly changing digital world
//                 of today. Mobile technology is one of the most effective means
//                 of accomplishing this. One of the main forces behind digital
//                 transformation is{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   mobile app development
//                 </a>
//                 , which helps businesses increase consumer engagement, optimize
//                 processes, and open up new income sources. Leading the digital
//                 revolution instead of just following trends may be achieved by
//                 collaborating with skilled mobile app developers.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 The Importance of Mobile App Development in Modern Business
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Mobile applications are becoming a necessary component of
//                 corporate strategy, not simply an optional one. With billions of
//                 smartphone users globally, mobile app development enables
//                 companies to communicate with clients directly and provide
//                 individualized experiences that are unmatched by traditional
//                 channels. Mobile apps are influencing how companies engage with
//                 their customers, whether through corporate solutions,
//                 service-based apps, or e-commerce apps.
//                 <br /> <br /> Specialists are aware of the subtleties involved
//                 in making apps that are not only useful but also safe, scalable,
//                 and easy to use. Their knowledge guarantees that companies can
//                 use mobile technology to increase efficiency, enhance consumer
//                 happiness, and spur general expansion.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Driving Digital Transformation with Mobile Apps
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 To succeed in a society that prioritizes digitalization, digital
//                 transformation entails rethinking business models and procedures
//                 in addition to implementing new technology. Because it
//                 facilitates real-time communication, smooth transactions, and
//                 effective workflow management, mobile app development is
//                 essential to this shift.
//                 <br /> <br />
//                 Retail companies, for instance, may employ mobile applications
//                 to provide push alerts, loyalty plans, and customized shopping
//                 experiences. Mobile solutions may be used by healthcare
//                 practitioners for patient monitoring, telemedicine, and
//                 appointment booking. Financial firms may also employ mobile
//                 applications for client service, investment tracking, and secure
//                 banking. Mobile applications promote productivity, interaction,
//                 and creativity in each of these situations.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 The Role of Innovation in Mobile App Development
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 At the core of successful mobile app development is creativity.
//                 Apps nowadays are about more than simply functioning; they're
//                 about providing distinctive experiences that set a business
//                 apart. In order to develop more intelligent and engaging
//                 solutions, mobile applications are using technologies such as
//                 artificial intelligence (AI), augmented reality (AR), machine
//                 learning (ML), and the Internet of Things (IoT).
//                 <br /> <br />
//                 Applications with AI capabilities, for example, may give
//                 tailored suggestions; chatbots can enhance customer support; and
//                 applications with augmented reality capabilities can present
//                 engaging product experiences. Through the utilization of these
//                 state-of-the-art technology, mobile app development
//                 professionals enable companies to stay competitive in the
//                 digital age and innovate consistently.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Benefits of Collaborating with Mobile App Development Experts
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 There are several benefits to working with seasoned mobile app •
//                 development experts:
//                 <br />
//                 <span className="font-bold">• Strategic Planning:</span>{" "}
//                 Professionals assist in coordinating app development with
//                 overarching corporate objectives, guaranteeing quantifiable
//                 results.
//                 <br />{" "}
//                 <span className="font-bold">• Faster Time-to-Market:</span>{" "}
//                 Expert developers expedite the development process, enabling
//                 companies to release apps with speed and efficiency. <br />
//                 <span className="font-bold">• Cost Efficiency:</span> Experts
//                 assist in lowering development costs by utilizing reusable
//                 frameworks and avoiding typical errors.
//                 <br /> <span className="font-bold">
//                   • Continuous Support:
//                 </span>{" "}
//                 Experts offer continuing assistance to keep programs current and
//                 useful, from post-launch upgrades to troubleshooting and feature
//                 improvements.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 SEO-Friendly Mobile App Development
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Modern mobile app developers prioritize discoverability in
//                 addition to technological prowess. Potential customers may find
//                 applications more simply thanks to App Store Optimization (ASO)
//                 and SEO-friendly tactics, which increase downloads and user
//                 engagement. Experts in mobile app development optimize
//                 applications' exposure and reach in fiercely competitive
//                 marketplaces by adding pertinent keywords, improving user
//                 ratings, and optimizing metadata.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 At  VIQ Technologies, we focus on more than simply making
//                 applications; we enable companies to thrive in a cutthroat
//                 digital environment and accelerate digital transformation. Our
//                 team of skilled developers creates mobile solutions that are
//                 safe, scalable, and easy to use by fusing state-of-the-art
//                 technology, creative design, and industry best practices. You
//                 get a reliable partner committed to improving client
//                 interaction, streamlining corporate procedures, and opening up
//                 new growth{" "}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Prospect"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   prospects
//                 </a>{" "}
//                 when you choose  VIQ Technologies for your app development needs.
//                 Your company can take advantage of mobile technology's full
//                 potential to remain ahead of the curve and prosper in the
//                 digital age with our dedication to quality.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Expertise Section - Increased height */}
//         {activeTab === "expertise" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Key Expertise Areas in Mobile App Development
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Expert mobile app developers contribute a variety of technical
//                 know-how and business acumen that are essential for project
//                 success. Among the main areas of specialization are
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
//         {activeTab === "benefits" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Benefits of Collaborating with Mobile App Development Experts
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 There are several benefits to working with seasoned mobile app
//                 development experts
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

// export default MobileAppDevelopment;





import React, { useState } from "react";
import {
  Smartphone,
  Cpu,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  Sparkles,
  CheckCircle,
  Clock,
  Target,
  Search,
  Settings,
  Layers,
  Phone,
  Home,
  ChevronRight,
  Briefcase,
  BadgeIndianRupee,
  Layout,
  Globe,
  Database,
  SmartphoneNfc,
} from "lucide-react";
import { Link } from "react-router-dom";

const MobileAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skilled Android & Flutter Developers",
      description:
        "Our team consists of experts specialized in building high-quality mobile experiences using Java, Kotlin, and Dart.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Native and Cross-Platform Expertise",
      description:
        "Whether you need the raw power of Native Android or the efficiency of Flutter cross-platform, we have the expertise to deliver.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure, Scalable App Architecture",
      description:
        "We build apps with a focus on robust security and an architecture that grows seamlessly as your user base expands.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean, Maintainable Code",
      description:
        "Our developers follow industry best practices to ensure code is well-documented, clean, and easy to update in the future.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO-Friendly App Store Optimization (ASO)",
      description:
        "We optimize your app's metadata and store presence to ensure maximum visibility and organic downloads in the app stores.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Transparent Communication & Timely Delivery",
      description:
        "We value your time and maintain clear communication throughout the project, ensuring milestones are met on schedule.",
    },
  ];

  const industries = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Startups & SMEs",
      description:
        "Helping emerging businesses build MVPs and market-ready apps to establish a strong mobile presence.",
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: "E-commerce & Retail",
      description:
        "Creating seamless shopping experiences with secure payments and high-performance product catalogs.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "FinTech & Healthcare",
      description:
        "Building secure, compliant applications that handle sensitive financial and medical data with precision.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Education & EdTech",
      description:
        "Developing interactive learning platforms and student management apps for the modern digital classroom.",
    },
    {
      icon: <SmartphoneNfc className="w-8 h-8" />,
      title: "Logistics & On-Demand Services",
      description:
        "Creating real-time tracking, delivery management, and on-demand service apps for efficient operations.",
    },
  ];

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      step: "01",
      title: "Requirement Analysis & Strategy",
      description:
        "We begin by understanding your business goals and audience to create a strategic roadmap for your mobile application.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      step: "02",
      title: "UI/UX Design",
      description:
        "Our designers craft intuitive and visually appealing interfaces to ensure an exceptional user experience from the first tap.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      step: "03",
      title: "App Development (Android / Flutter)",
      description:
        "Our developers bring the designs to life using Android (Java/Kotlin) or Flutter, following an agile development cycle.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across multiple devices and OS versions ensures your app is bug-free, secure, and ready for the public.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      step: "05",
      title: "Deployment & Launch",
      description:
        "We handle the technicalities of Google Play Store and App Store submissions to ensure a smooth and successful launch.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      step: "06",
      title: "Maintenance & Support",
      description:
        "Post-launch, we provide continuous monitoring and regular updates to keep your app performing optimally at all times.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
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
                  Mobile App Development
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Mobile App Development Services | Android & Flutter App
              Development Company
            </h1>
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
                High-Performance, Scalable & Secure Mobile App Development
                Solutions
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                 VIQ Technologies is a reliable mobile app development company
                delivering robust, user-centric, and scalable mobile
                applications using Android (Java & Kotlin) and Flutter. We build
                secure, high-performance mobile apps that align with business
                objectives, enhance user engagement, and scale with growth. From
                startups to enterprises, our mobile solutions are designed to
                deliver seamless user experiences across platforms.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Android Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                  <Cpu className="w-6 h-6" /> Android App Development (Java &
                  Kotlin)
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We develop native Android applications using Java and Kotlin,
                  ensuring high performance, security, and compatibility across
                  devices.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our Android Development Services Include:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Custom
                      Android app development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Enterprise
                      and consumer apps
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> UI/UX-driven
                      Android applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Secure API
                      integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> App
                      optimization & performance tuning
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Google Play
                      Store deployment & support
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why Java & Kotlin?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Official
                      Android languages with long-term support
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> High
                      performance and stability
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Ideal for
                      complex, feature-rich applications
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Enterprise apps, fintech, healthcare, large-scale
                    Android solutions
                  </p>
                </div>
              </div>

              {/* Flutter Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                  <Smartphone className="w-6 h-6" /> Flutter App Development
                  (Cross-Platform)
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We offer Flutter app development services to build
                  cross-platform applications from a single codebase.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our Flutter Capabilities:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Cross-platform apps (Android & iOS)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Custom UI
                      with rich animations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      High-performance apps using Dart
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> API &
                      third-party integrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Rapid
                      development & faster time-to-market
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why Flutter?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Single
                      codebase for multiple platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Near-native
                      performance
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Cost-effective development
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Startups, MVPs, business apps, and cross-platform
                    solutions
                  </p>
                </div>
              </div>
            </div>

            {/* End-to-End Box */}
            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                End-to-End Mobile App Development Services
              </h3>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                Our mobile app development solutions include:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-lg mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> UI/UX
                  design & prototyping
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> Native
                  & cross-platform development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Backend & API integration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Database management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> App
                  testing & quality assurance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> App
                  Store & Play Store deployment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Maintenance & ongoing support
                </li>
              </ul>
              <p className="text-center text-blue-800 font-medium text-lg italic">
                We ensure apps are secure, scalable, and future-ready.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Launch Your Mobile App with  VIQ Technologies
              </h3>
              <p className="text-lg mb-8 text-blue-50">
                Looking for a trusted Android or Flutter app development
                company?
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
                <p className="text-lg font-bold leading-relaxed">
                   VIQ Technologies delivers feature-rich mobile applications that
                  drive growth and user engagement.
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact us today to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "why choose us" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose  VIQ Technologies?
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                We focus on building mobile apps that perform, engage, and scale
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

        {activeTab === "industries we serve" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Delivering excellence across diverse business sectors
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

        {activeTab === "our process" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Mobile App Development Process
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                This agile process ensures faster delivery and consistent
                quality
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

export default MobileAppDevelopment;
