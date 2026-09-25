// import React, { useState } from "react";
// import {
//   TrendingUp,
//   Zap,
//   Shield,
//   Users,
//   Code,
//   Sparkles,SquarePen,
//   CheckCircle,BadgeIndianRupee,
//   Clock,
//   DollarSign,
//   Target,
//   Repeat,
//   Search,
//   Scale,
//   Megaphone, // For Digital Marketing
//   BarChart3, // For Analytics
//   Home,
//   ChevronRight,
//   Globe,
//   SearchCode,
//   Podcast,
//   MailCheck,
//   ChevronsLeftRightEllipsis,
// } from "lucide-react";
// import {Link} from 'react-router-dom'

// const DigitalMarketingServices = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <SearchCode className="w-8 h-8" />,
//       title: "Search Engine Optimization (SEO)",
//       description:
//         "The cornerstone of internet exposure is SEO. To guarantee that you rank better on search engines, our staff optimizes your website using the appropriate keywords, meta tags, and content techniques. Better interaction and more organic traffic are correlated with increased visibility. ",
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Pay-Per-Click (PPC) Advertising",
//       description:
//         "You may rapidly reach your audience with our PPC advertising. To gain clicks and turn them into devoted clients, we create highly targeted advertisements for social media channels and platforms like Google Ads.",
//     },
//     {
//       icon: <Podcast className="w-8 h-8" />,
//       title: "Social Media Marketing",
//       description:
//         "Social media is an effective technique for increasing engagement and brand exposure. To optimize your online effect, our professionals develop engaging content, manage focused campaigns, and track results on social media sites like Facebook, Instagram, LinkedIn, and Twitter. ",
//     },
//     {
//       icon: <Sparkles className="w-8 h-8" />,
//       title: "Content Marketing",
//       description:
//         "High-quality content increases audience trust and engagement. Our content marketing techniques, which include blogs, infographics, videos, and newsletters, guarantee that your brand message is understood by prospective buyers.",
//     },
//     {
//       icon: <MailCheck className="w-8 h-8" />,
//       title: "Email Marketing",
//       description:
//         "One of the best strategies for nurturing leads and keeping customers is still email marketing. Our campaigns yield quantifiable outcomes by emphasizing automation, timely communication, and customisation. ",
//     },
//     {
//       icon: <ChevronsLeftRightEllipsis className="w-8 h-8" />,
//       title: "Web Design & Development",
//       description:
//         "Online success depends on having a website that is both aesthetically pleasing and easy to use. We provide responsive web design and development as part of our digital marketing services, which guarantees that your website is optimized for both desktop and mobile customers.",
//     },

//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Analytics & Reporting",
//       description:
//         "The foundation of successful digital marketing is data-driven decision-making. To continually refine campaigns and enhance outcomes, we monitor performance indicators, examine user behavior, and offer comprehensive reports. ",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Expertise",
//       description:
//         "Years of expertise and industry knowledge are brought to the table by our team of professional digital marketers.",
//     },
//     {
//       icon: <SquarePen className="w-8 h-8" />,
//       title: "Customization",
//       description:
//         "We create plans that are specific to your target audience and goals. ",
//     },
//     {
//       icon: <BadgeIndianRupee className="w-8 h-8" />,
//       title: "Efficiency",
//       description:
//         "We save you time and money by centralizing all of your internet marketing activities. ",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Transparency",
//       description:
//         "You get concise, thorough information on the ROI and campaign performance. ",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Growth-focused",
//       description:
//         "Our digital marketing services are intended to support the growth and online success of your company. ",
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
//                   Digital Marketing
//                 </span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3 ">
//               <TrendingUp className="h-14 w-14 hidden lg:block" />
//               <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
//                 Expert Digital Marketing Services for Maximum Online Impact
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
//             {["overview", "services", "benefits"].map((tab) => (
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
//                 Having a strong online presence is now necessary in today's
//                 fast-paced digital environment. The correct{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   digital marketing services
//                 </a>{" "}
//                 may help you reach your audience, increase interaction, and
//                 generate income, regardless of whether your company is new,
//                 expanding, or well-known. Our specialty at is offering
//                 professional digital marketing services that are suited to your
//                 company's objectives and guarantee optimal effect across all
//                 online platforms.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Why Your Business Needs Professional Digital Marketing Services
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Effectively maintaining their internet presence is a challenge
//                 for many organizations. Your website, email campaigns, and
//                 social media accounts could not provide the desired outcomes if
//                 you don't have a clear plan. Professional digital marketing
//                 services can help in this situation. We assist you by utilizing
//                 cutting-edge technologies, data-driven tactics, and industry
//                 best practices. Increase brand visibility Attract and engage
//                 your target audience Generate high-quality leads Improve
//                 conversion rates Maximize return on investment (ROI) Our digital
//                 marketing services give you access to a committed staff that is
//                 committed to transforming your online endeavors into
//                 quantifiable economic success.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 How We Maximize Your Online Impact
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Our strategy for providing digital marketing services is
//                 straightforward yet efficient:
//                 <br /> <span className="font-bold">
//                   • Research & Strategy:
//                 </span>{" "}
//                 To develop a unique marketing strategy, we start by learning
//                 about your company, target market, and rivals.
//                 <br /> <span className="font-bold">• Execution:</span> We
//                 execute campaigns using a variety of media, guaranteeing unified
//                 brand identity and messaging.
//                 <br /> <span className="font-bold">• Optimization:</span> We
//                 adjust campaigns to enhance outcomes and optimize return on
//                 investment by regularly assessing performance.
//                 <br /> <span className="font-bold">• Reporting:</span> You get
//                 thorough reports that emphasize achievements, difficulties, and
//                 useful information. We guarantee that your digital marketing
//                 initiatives are powerful and visible throughout this process,
//                 resulting in actual business development.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Why Businesses Trust Us
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Our dedication to quality and results-oriented methodology are
//                 the reasons our clients pick us. We take great satisfaction in
//                 offering digital marketing services that are useful and
//                 efficient in addition to being theoretical. Our staff constantly
//                 goes above and beyond, whether the goal is to improve brand
//                 reputation, generate prospects, or increase website traffic.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Our digital marketing services at  VIQ Technologies are made to
//                 assist your company in succeeding in the constantly changing
//                 internet market. We provide{" "}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Solution"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   solutions
//                 </a>{" "}
//                 that increase exposure, engage your audience, and provide
//                 tangible outcomes by fusing strategy, creativity, and
//                 data-driven insights. By working with  VIQ Technologies, you may
//                 select a group dedicated to optimizing your online presence and
//                 making sure that each campaign advances your development and
//                 prosperity. With our skilled digital marketing services, we can
//                 assist you in changing your online presence and achieving
//                 quantifiable commercial results.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Expertise Section - Increased height */}
//         {activeTab === "services" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Our Comprehensive Digital Marketing Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Since every company is different, we provide a comprehensive
//                 range of digital marketing services that may be tailored to your
//                 requirements. Among our products are:
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
//                 Benefits of Choosing Our Digital Marketing Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Businesses of all sizes can benefit greatly from working with
//                 our team. Among the main advantages are
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

// export default DigitalMarketingServices;


import React, { useState } from "react";
import {
  Globe,
  SearchCode,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  Sparkles,
  CheckCircle,
  Clock,
  Target,
  Repeat,
  Search,
  Home,
  ChevronRight,
  Phone,
  BarChart3,
  MailCheck,
  Layout,
  Share2,
  FileText,
  Megaphone,
  SquarePen,
  MousePointer2,
  BadgeIndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketingServices = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "High-quality Backlinks",
      description: "High-quality backlinks via SEO Backlink Specialist methods",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Google My Business",
      description: "Google My Business optimization",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "SMO Tool Expertise",
      description: "SMO tools such as Buffer",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transparent Analytics",
      description: "Transparent analytics reports",
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: "E-commerce Promotions",
      description: "E-commerce promotions with Bing Ads & Performance Max",
    },
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Lead Nurturing",
      description: "Lead nurturing through HubSpot automation",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authority Building",
      description: "Authority building with SEO content",
    },
  ];

  const coreServices = [
    {
      icon: <SearchCode className="w-8 h-8" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "SEO is the foundation of all digital marketing services. It increases a website's rating in Google and other search engines. Keyword research, on-page optimization, technical SEO, backlink generation, and SEO-friendly content are all examples of effective digital marketing services. A structured Digital Marketing Service ensures that your website is quick, mobile responsive, and user-friendly.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing (SMM)",
      description:
        "Instagram, Facebook, LinkedIn, and YouTube are popular platforms with billions of users. A comprehensive digital marketing service monitors business pages, writes engaging articles, executes paid promotions, and interacts with followers. Modern Digital Marketing Services provide creatives, captions, reels, and stories to increase visibility and improve the online community.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Search Engine Marketing (SEM / PPC)",
      description:
        "Pay-per-click advertising provides quick visibility. Experts in digital marketing develop Google Ads and Bing Ads campaigns, produce compelling ad copy, implement conversion tracking, and optimize bidding techniques. These Digital Marketing Services are great for educational institutions, real estate firms, and IT organizations seeking speedy and qualified leads.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Marketing",
      description:
        "Content converts visitors into repeat buyers. Professional Digital Marketing Services create blog strategies, infographics, case studies, landing pages, and video scripts. A long-term Digital Marketing Service prioritizes topical authority, semantic SEO, and useful content updates to increase organic traffic.",
    },
    {
      icon: <MailCheck className="w-8 h-8" />,
      title: "Email Marketing & Automation",
      description:
        "Email remains one of the most effective conversion mediums. Our digital marketing services include newsletter creation, drip campaigns, HubSpot automation, Mailchimp setup, and lead nurturing. Such Digital Marketing Services keep your target audience engaged and informed about new offerings and upgrades.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Website Optimization",
      description:
        "A Digital Marketing Service is incomplete without a conversion-oriented website design. Wix, WordPress, Shopify, and WooCommerce are popular platforms among experts, as are heatmaps and A/B testing tools such as Hotjar and Clarity. These Digital Marketing Services optimize funnels and Core Web Vitals to enhance the user experience.",
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      step: "01",
      title: "Goals & SMART Objectives",
      description: "Understand the business's goals and SMART objectives.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      step: "02",
      title: "Website Audit",
      description:
        "Conduct a website audit for the Digital Marketing Services Roadmap.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      step: "03",
      title: "SEO & SEM Planning",
      description: "Create an SEO and SEM plan.",
    },
    {
      icon: <SquarePen className="w-8 h-8" />,
      step: "04",
      title: "Content Calendar",
      description:
        "Create a monthly content calendar with Digital Marketing Service.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      step: "05",
      title: "Lead Generation Ads",
      description: "Run social media ads to generate leads.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      step: "06",
      title: "Analytics Monitoring",
      description: "Monitor Google Analytics and Search Console reports.",
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      step: "07",
      title: "Continuous Optimization",
      description: "Continuously optimize your campaigns.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
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
                  Digital Marketing
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Digital Marketing Service: Grow Your Business in the Online World
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {["overview", "why choose us", "our services", "our process"].map(
              (tab) => (
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
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            {/* Header Section */}
            <div className="bg-white border-b-4 border-blue-600 shadow-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                What Are Digital Marketing Services?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
                To remain competitive in today's internet-driven world, every
                brand must have a strong digital presence. A well-planned
                Digital Marketing Service enables organizations to connect with
                the proper audience, produce high-quality leads, and grow their
                revenue. Digital Marketing Services mix creativity, technology,
                and analytics to drive measurable growth for startups, agencies,
                and established businesses.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Digital Marketing Services are a collection of online
                advertising operations that target clients via search engines,
                social media platforms, email, mobile apps, and websites. Unlike
                traditional advertising, digital marketing services provide
                two-way communication with users. Brands can watch user
                activity, understand interests, and optimize advertising in real
                time. This makes modern digital marketing services both cost
                effective and performance-driven.
              </p>
            </div>

            {/* Why Your Business Needs Section - Mirrored "Full Stack Section" */}
            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200 text-justify">
              <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Why Your Business Needs Digital Marketing Service
              </h3>

              <ul className="grid md:grid-cols-1 gap-y-5 text-gray-700 text-lg mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold mt-1">✓</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-blue-900">
                      Wider Reach –
                    </span>{" "}
                    With a skilled Digital Marketing Service, you may reach
                    customers across geographical limits.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold mt-1">✓</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-blue-900">
                      Better Targeting –
                    </span>{" "}
                    Advanced Digital Marketing Services use demographic and
                    interest-based filters to display advertisements exclusively
                    to potential buyers.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold mt-1">✓</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-blue-900">High ROI –</span>{" "}
                    A clever Digital Marketing Service avoids budget waste and
                    increases conversions.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold mt-1">✓</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-blue-900">
                      Brand Trust –
                    </span>{" "}
                    Continuous digital marketing services help to establish
                    market authority and reliability.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold mt-1">✓</span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-blue-900">
                      Performance Tracking –
                    </span>{" "}
                    Digital Marketing Service offers thorough analytics and
                    reporting.
                  </p>
                </li>
              </ul>

              <p className="text-center text-blue-800 font-medium text-lg italic border-t border-blue-200 pt-6">
                Digital Marketing Services provide two-way communication and
                real-time optimization.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Choose the Right Digital Marketing Services Partner
              </h3>
              <p className="text-lg mb-8 text-blue-50 max-w-4xl mx-auto">
                Selecting an experienced Digital Marketing Service agency is
                critical for attaining actual business success, and ANSH
                InfoTech is a reliable partner on this road.
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
                <p className="text-lg font-bold leading-relaxed">
                   VIQ Technologies's ethical and transparent services offer
                  long-term brand visibility and consistent lead creation.
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact us for a professional consultation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Tab (Benefits) */}
        {activeTab === "why choose us" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Benefits You Get from Our Digital Marketing Service
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                We combine technical expertise and strategic planning to drive
                measurable results
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

        {/* Our Services Tab (Core Components) */}
        {activeTab === "our services" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Core Components of Our Digital Marketing Service
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                A structured collection of online advertising operations that
                target clients where they are most active
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold text-justify">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Process Tab */}
        {activeTab === "our process" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                How We Execute Digital Marketing Service
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Our roadmap ensures every campaign is measurable,
                performance-driven, and cost-effective
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

export default DigitalMarketingServices;
