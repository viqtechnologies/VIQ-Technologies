// import React, { useState } from "react";
// import {
//   BarChart3,
//   BadgeIndianRupee,
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
//   Activity, 
//   Database, 
//   Home,
//   ChevronRight,
//   Globe,
//   CloudAlert,
//   ChartLine,
//   CircleGauge,
//   ClipboardList,
// } from "lucide-react"; <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 relative">
//   <div className="max-w-6xl mx-auto">
//     {/* Professional Breadcrumb */}
//     <nav className="mb-8" aria-label="Breadcrumb">
//       <ol className="flex items-center space-x-2 text-sm">
//         <li className="flex items-center">
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-200 group"
//           >
//             <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
//             <span className="font-medium">Home</span>
//           </Link>
//         </li>
//         <li className="flex items-center">
//           <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
//           <Link
//             to="/services"
//             className="text-blue-100 hover:text-white transition-colors duration-200 font-medium"
//           >
//             Services
//           </Link>
//         </li>
//         <li className="flex items-center">
//           <ChevronRight className="w-4 h-4 text-blue-300 mx-1" />
//           <span className="text-white font-semibold">Website Development</span>
//         </li>
//       </ol>
//     </nav>

//     {/* Hero Content */}
//     <div className="text-center">
//       <div className="flex items-center justify-center sm:gap-3 mb-6">
//         <Globe className="h-14 w-14 hidden lg:block" />
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Website Development Experts
//         </h1>
//       </div>
//       <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
//         Driving Digital Transformation Through Expert Web Solutions
//       </p>
//     </div>
//   </div>
// </div>;
// import {Link} from 'react-router-dom'
// const DataAnalyticsServices = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Enhanced Decision-Making",
//       description:
//         "Make well-informed choices based on solid information rather than conjecture. ",
//     },
//     {
//       icon: <Activity className="w-8 h-8" />,
//       title: "Increased Efficiency",
//       description:
//         "To save time and money, locate process bottlenecks and streamline processes. ",
//     },
//     {
//       icon: <ClipboardList className="w-8 h-8" />,
//       title: "Better Customer Understanding",
//       description:
//         "To provide individualized experiences, examine consumer behavior, preferences, and feedback. ",
//     },
//     {
//       icon: <CloudAlert className="w-8 h-8" />,
//       title: "Risk Mitigation",
//       description:
//         " Reduce operational risks and use predictive analytics to identify possible problems early. ",
//     },
//     {
//       icon: <ChartLine className="w-8 h-8" />,
//       title: "Revenue Growth",
//       description:
//         "To increase revenue, find new markets, improve product offers, and optimize pricing methods",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Expert Team",
//       description:
//         "Our analysts are proficient in data visualization, machine learning, and advanced analytics methodologies.",
//     },
//     {
//       icon: <CircleGauge className="w-8 h-8" />,
//       title: "Customized Solutions",
//       description:
//         "To ensure optimum effect, we customize our services to match your unique company needs",
//     },
//     {
//       icon: <BadgeIndianRupee className="w-8 h-8" />,
//       title: "Cutting-Edge Tools",
//       description:
//         "To deliver precise and fast insights, we make use of the newest analytics tools and technologies.",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Action-Oriented Approach",
//       description:
//         "We concentrate on insights that may be used right away to boost output and accomplish organizational objectives. ",
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
//                 <span className="text-white font-semibold">Data Analytics</span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3 ">
//               <BarChart3 className="h-14 w-14 hidden lg:block" />
//               <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
//                 Data Analytics Services for Actionable Insights and Results
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
//             {["overview", "benefits", "why choose us"].map((tab) => (
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
//                 Businesses are producing enormous volumes of data every second
//                 in the fast-paced digital world of today. The information
//                 supplied is extensive and intricate, ranging from industry
//                 trends to client interactions. However, without good analysis,
//                 raw data is not very useful. This is where{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   data analytics
//                 </a>{" "}
//                 is useful since it turns unprocessed data into insights that can
//                 be used to make better business decisions.
//                 <br /> <br /> With the aid of our services, businesses may
//                 better utilize their data to find opportunities, reveal hidden
//                 trends, and streamline processes. We make sure that every piece
//                 of data makes a significant contribution to the expansion of
//                 your company by fusing cutting-edge technologies, methodologies,
//                 and industry knowledge.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Why Businesses Need Data Analytics
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Today's businesses must contend with fierce competition and
//                 quickly shifting market dynamics. It might be dangerous to rely
//                 judgments only on gut feeling or insufficient knowledge. By
//                 using a fact-based approach, data analytics enables
//                 organizations to make well-informed decisions. Organizations may
//                 improve overall performance, reduce procedures, and predict
//                 consumer demands by evaluating both historical and current data.
//                 <br />
//                 <br />
//                 Additionally, companies gain the ability to precisely gauge the
//                 success of their plans. Data-driven insights show what works and
//                 what needs to be improved in marketing efforts, product
//                 launches, and operational efficiency. This guarantees effective
//                 resource allocation, optimizing return on investment.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Our Approach to Data Analytics Services
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 We use a methodical process to provide the most effective data
//                 analytics solutions. Every corporation can efficiently use data
//                 thanks to our services, which are made to accommodate companies
//                 of all sizes. This is how we go about it
//                 <br />
//                 <br />
//                 <span className="font-bold">
//                   • Data Collection and Integration
//                 </span>{" "}
//                 – We collect information from a variety of sources, such as
//                 operational databases, social media sites, CRM systems, and
//                 websites. Our group makes certain that the data is correct,
//                 clean, and prepared for analysis.
//                 <br />{" "}
//                 <span className="font-bold">
//                   • Data Analysis and Visualization
//                 </span>{" "}
//                 – We process and examine the data using cutting-edge analytical
//                 methods to find patterns, connections, and insights. Charts and
//                 dashboards are examples of visualizations that help stakeholders
//                 better grasp complicated data. <br />
//                 <span className="font-bold">• Predictive Analytics</span> –
//                 Businesses may anticipate future trends, consumer behavior, and
//                 market changes with the aid of our predictive models.
//                 Organizations are able to remain ahead of the competition and
//                 prepare strategically thanks to this proactive strategy. <br />
//                 <span className="font-bold">
//                   • Actionable Insights and Recommendations
//                 </span>{" "}
//                 – Actionable insights are the ultimate aim of data analytics. We
//                 offer precise suggestions that direct choices, enhance output,
//                 and produce quantifiable outcomes. <br />{" "}
//                 <span className="font-bold">
//                   • Continuous Monitoring and Optimization
//                 </span>{" "}
//                 – As markets change, so should your tactics. To guarantee
//                 continued development and progress, our staff constantly reviews
//                 analytics findings and modifies plans.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Our data analytics services at  VIQ Technologies enable companies to
//                 turn unprocessed data into insights that can be put to use. We
//                 assist businesses in making wise judgments, streamlining
//                 processes, and seizing{" "}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Expansion"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   expansion
//                 </a>{" "}
//                 prospects by utilizing cutting-edge technologies and
//                 knowledgeable tactics. Collaborate with  VIQ Technologies to fully
//                 utilize your data and provide quantifiable outcomes that advance
//                 your company.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Benefits Section - Increased height */}
//         {activeTab === "benefits" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Benefits of Data Analytics Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Businesses may benefit from investing in expert data analytics
//                 services in a number of ways
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
//         {activeTab === "why choose us" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Why Choose Our Data Analytics Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 To provide outstanding Data Analytics services, our team blends
//                 technical know-how, business acumen, and a client-focused
//                 mindset. What makes us unique is this
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

// export default DataAnalyticsServices;



import React, { useState } from "react";
import {
  BarChart3,
  PieChart,
  Database,
  TrendingUp,
  Shield,
  Activity,
  Settings,
  CheckCircle,
  Search,
  Users,
  Cloud,
  Globe,
  Home,
  ChevronRight,
  Phone,
  Layout,
  Briefcase,
  Sparkles,
  Zap,
  BadgeIndianRupee,
  Layers,Target
} from "lucide-react";
import { Link } from "react-router-dom";

const DataAnalyticsServices = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Certified Power BI & Tableau Professionals",
      description:
        "Our team consists of certified experts with deep experience in building complex BI solutions and advanced data models.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Dashboards Tailored to Business Goals",
      description:
        "We don't provide one-size-fits-all reports; every dashboard is custom-built to track the specific KPIs that matter to your growth.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure and Scalable BI Architecture",
      description:
        "We ensure your data environment is built on a robust, secure foundation that can handle increasing data volumes effortlessly.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance-Optimized Reports",
      description:
        "We specialize in DAX optimization and data blending to ensure your reports load fast and provide real-time responsiveness.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Ongoing Support and Enhancements",
      description:
        "Our commitment continues after deployment. We provide regular updates, performance tuning, and support for your evolving needs.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Value Focused",
      description:
        "We focus on delivering insight, accuracy, and tangible business value that helps you stay ahead of the competition.",
    },
  ];

  const industries = [
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: "Finance & Banking",
      description:
        "Managing complex financial datasets, risk analysis, and real-time transaction reporting.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Healthcare & Life Sciences",
      description:
        "Analyzing patient data, operational efficiency, and clinical trial outcomes with high security.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description:
        "Tracking customer behavior, inventory levels, and sales performance across multiple channels.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Manufacturing",
      description:
        "Optimizing supply chains, predictive maintenance, and production line efficiency tracking.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Education & EdTech",
      description:
        "Student performance analytics, enrollment trends, and learning management system reporting.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IT & SaaS Companies",
      description:
        "SaaS metric tracking, user engagement analysis, and cloud infrastructure cost optimization.",
    },
  ];

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      step: "01",
      title: "Business Requirement Analysis",
      description:
        "We start by understanding your specific business goals and the key questions your data needs to answer.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      step: "02",
      title: "Data Discovery & Integration",
      description:
        "We identify all data sources and build robust pipelines to integrate your data into a centralized environment.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      step: "03",
      title: "Data Modeling & Transformation",
      description:
        "Raw data is cleaned, structured, and transformed into a powerful model ready for advanced visualization.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      step: "04",
      title: "Dashboard & Report Development",
      description:
        "Our experts build interactive, visually compelling reports using Power BI or Tableau to reveal hidden insights.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      step: "05",
      title: "Validation & Performance Optimization",
      description:
        "We rigorously test for data accuracy and optimize the backend to ensure lightning-fast report performance.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      step: "06",
      title: "Deployment & User Training",
      description:
        "We handle the complete rollout and provide training to ensure your team can confidently make data-driven decisions.",
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
                <span className="text-white font-semibold">Data Analytics</span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Data Analytics Services | Power BI & Tableau Consulting Company
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
                Transform Data into Actionable Insights with Advanced Data
                Analytics
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                 VIQ Technologies is a trusted data analytics and business
                intelligence services provider, helping organizations convert
                raw data into meaningful insights using tools like Microsoft
                Power BI, Tableau, and advanced analytics platforms. We enable
                data-driven decision-making through interactive dashboards,
                real-time reporting, and scalable analytics solutions. Our
                services empower businesses to improve performance, identify
                trends, and gain a competitive edge.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Power BI Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Power BI Consulting & Development
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We deliver end-to-end Power BI solutions that provide
                  real-time, interactive, and visually compelling dashboards.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our Power BI Services Include:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Power BI
                      dashboard & report development
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Data
                      modeling & DAX optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Power BI
                      Embedded solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Real-time
                      analytics & live data connections
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Power BI
                      performance tuning
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Secure data
                      access & role-based security
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why Power BI?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Seamless
                      integration with Microsoft ecosystem
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Cost-effective enterprise analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Powerful
                      data visualization & AI capabilities
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Enterprises, SMEs, Microsoft-based environments
                  </p>
                </div>
              </div>

              {/* Tableau Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Tableau Consulting & Dashboard Development
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We offer Tableau development services to create advanced
                  visual analytics solutions.
                </p>

                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Our Tableau Capabilities:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Custom
                      Tableau dashboards & reports
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Advanced
                      data visualization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Tableau
                      Server & Tableau Cloud setup
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Performance
                      optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Data
                      blending & preparation
                    </li>
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="font-bold text-blue-700 text-lg mb-2">
                    Why Tableau?
                  </p>
                  <ul className="space-y-1 text-gray-700 text-lg mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Best-in-class data visualization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Handles
                      large and complex datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Highly
                      interactive analytics
                    </li>
                  </ul>
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Best for: Data-intensive organizations and advanced
                    analytics use cases
                  </p>
                </div>
              </div>
            </div>

            {/* Impact & Integration Section */}
            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Data Integration & Reporting Solutions
              </h3>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                We build reliable data pipelines and help businesses gain
                insights through:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-lg mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Databases (SQL, MySQL, PostgreSQL, Oracle)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Descriptive & diagnostic analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> Cloud
                  platforms (AWS, Azure, Google Cloud)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> Trend
                  analysis & KPI reporting
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> CRM,
                  ERP & third-party API integration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Real-time and historical reporting
                </li>
              </ul>
              <p className="text-center text-blue-800 font-medium text-lg italic">
                Business Impact: Better decisions backed by reliable data. We
                ensure data accuracy, consistency, and security.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Unleash the Power of Your Data
              </h3>
              <p className="text-lg mb-8 text-blue-50">
                Ready to transform your organizational decision-making with
                Power BI or Tableau?
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
                <p className="text-lg font-bold leading-relaxed">
                   VIQ Technologies delivers feature-rich analytics solutions that
                  drive value.
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact us today to discuss your data analytics requirements.
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
                Why Choose  VIQ Technologies for Data Analytics?
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                We focus on insight, accuracy, and business value through
                specialized BI expertise.
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

        {/* Industries Section */}
        {activeTab === "industries we serve" && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Helping diverse sectors gain a competitive edge through
                data-driven performance improvement.
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
                Our Data Analytics Methodology
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Our approach ensures insights that are actionable, not just
                visual.
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

export default DataAnalyticsServices;
