// import React, { useState } from "react";
// import {
//   Sparkles,
//   Zap,
//   Shield,
//   Users,
//   TrendingUp,
//   Code,
//   CheckCircle,
//   Clock,
//   DollarSign,
//   Target,
//   Repeat,
//   Search,
//   Scale,
//   Brain, // For AI/ML Research
//   Beaker, // For R&D Experiments
//   Home,
//   ChevronRight,
//   Globe,
//   BadgeIndianRupee,
//   Handshake,
// } from "lucide-react";
// import {Link} from 'react-router-dom'
// const ResearchAndDevelopment = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "AI & Machine Learning Research",
//       description:
//         "Cutting-edge research in neural networks, generative AI, reinforcement learning, and transformer models for intelligent automation.",
//     },
//     {
//       icon: <Beaker className="w-8 h-8" />,
//       title: "Prototyping & Proof of Concepts",
//       description:
//         "Rapid development of minimum viable products, technology validation, and experimental solutions for emerging technologies.",
//     },
//     {
//       icon: <Sparkles className="w-8 h-8" />,
//       title: "Data Science Innovation",
//       description:
//         "Advanced statistical modeling, anomaly detection, natural language processing, and computer vision research initiatives.",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Algorithm Optimization",
//       description:
//         "Performance tuning, parallel computing, distributed systems, and algorithmic efficiency improvements for production-scale deployment.",
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Emerging Technology Exploration",
//       description:
//         "Research into quantum computing, blockchain, edge AI, Web3, metaverse technologies, and next-generation computing paradigms.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Innovation Pipeline Management",
//       description:
//         "Technology roadmapping, IP development, patent strategy, and commercialization pathways from research to market-ready solutions.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Innovation and Product Improvement",
//       description:
//         "Constant R&D keeps your brand competitive and relevant by facilitating the development of new goods and the improvement of current offerings.",
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Increased Revenue",
//       description:
//         "New goods and services frequently create new sources of income, which propel company expansion. ",
//     },
//     {
//       icon: <BadgeIndianRupee className="w-8 h-8" />,
//       title: "Efficiency and Cost Savings",
//       description:
//         "Technology-driven solutions and streamlined procedures save operating expenses while increasing output.",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Enhanced Reputation",
//       description:
//         "Businesses that are commended for their dedication to innovation frequently see increases in consumer loyalty and brand credibility. ",
//     },
//     {
//       icon: <Handshake className="w-8 h-8" />,
//       title: "Long-Term Sustainability",
//       description:
//         "Businesses may secure long-term success by predicting future trends and adjusting to shifts in the market.",
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
//                   AI & Machine Learning Research
//                 </span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3 mb-6">
//               <Sparkles className="h-14 w-14 hidden lg:block" />
//               <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
//                 Research & Development Strategies to Transform Your Business
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
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
//                 In the rapidly evolving technology landscape, continuous
//                 Innovation is no longer optional in the fast-paced economic
//                 world of today; it is necessary. Prioritizing{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   className="text-blue-600 hover:underline"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   research & development
//                 </a>{" "}
//                 (R&D) helps businesses create innovative goods, stay ahead of
//                 the competition, and adapt to changing market conditions.
//                 Putting the proper R&D methods into practice may revolutionize
//                 your company, increase productivity, and promote long-term
//                 success.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 The Importance of Research & Development
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 The foundation of innovation is research and development. It
//                 enables companies to investigate novel concepts, enhance current
//                 goods, and develop solutions that satisfy changing consumer
//                 demands. Businesses that spend money on R&D frequently see
//                 improvements in productivity, market share, and brand awareness.
//                 Businesses can predict trends, maintain an advantage over
//                 rivals, and lower the risks of market disruption by consistently
//                 innovating.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Key Research & Development Strategies
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Businesses should use a systematic approach to research &
//                 development in order to maximize its benefits. Here are a few
//                 crucial methods
//                 <br />
//                 <br />
//                 <span className="font-bold">1. Define Clear Goals:</span>{" "}
//                 Research & development success starts with well-defined goals.
//                 Every R&D effort will be in line with the company's overarching
//                 vision if quantifiable targets are established. Having specific
//                 goals helps to optimize effect and efficiently allocate
//                 resources, whether the focus is on expanding into new areas,
//                 improving current services, or introducing new goods.
//                 <br />
//                 <br />{" "}
//                 <span className="font-bold">
//                   2. Invest in Talent and Collaboration:{" "}
//                 </span>
//                 Business change requires a robust R&D staff. Employing talented
//                 engineers, researchers, and innovators guarantees that your
//                 business has the know-how to create ground-breaking solutions.
//                 Furthermore, encouraging departmental teamwork promotes idea
//                 exchange and speeds up innovation. In order to enhance their
//                 capacities and obtain new insights, many organizations also
//                 collaborate with academic institutions, research centers, or
//                 industry professionals.
//                 <br />
//                 <br />{" "}
//                 <span className="font-bold">
//                   3. Embrace Technology and Data:
//                 </span>
//                 Technology and insights derived from data are key components of
//                 modern research and development. Cutting-edge technologies like
//                 machine learning, artificial intelligence, and predictive
//                 analytics may increase accuracy, save costs, and speed up
//                 product development. Businesses may make well-informed choices,
//                 streamline operations, and spot fresh possibilities instantly
//                 when they use data efficiently. <br />
//                 <br />
//                 <span className="font-bold">
//                   4. Encourage Experimentation and Risk-Taking:
//                 </span>{" "}
//                 An atmosphere that promotes experimentation is conducive to
//                 innovation. Businesses need to foster an environment where
//                 making mistakes is normal and failure is viewed as a teaching
//                 moment. Research & development teams may hone concepts and
//                 create novel, workable solutions by using iterative testing,
//                 prototyping, and feedback loops.
//                 <br />
//                 <br />{" "}
//                 <span className="font-bold">
//                   5. Monitor Market Trends and Customer Needs:
//                 </span>
//                 A customer-centric R&D strategy is effective. Businesses may
//                 anticipate changes and create goods that satisfy new wants by
//                 having a solid understanding of customer behavior and market
//                 trends. Research & development initiatives are kept current and
//                 effective by routinely gathering input, doing surveys, and
//                 examining rival tactics.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed mb-8 text-justify">
//                 Research & development, in our opinion at  VIQ Technologies, is the
//                 foundation of both innovation and corporate expansion. We turn
//                 concepts into workable solutions that provide quantifiable
//                 outcomes by utilizing cutting-edge technologies, data-driven
//                 insights, and a group of knowledgeable professionals. Our {""}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Dedication"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >dedication
//                 </a>{" "}
//                 to ongoing innovation guarantees that our clients maintain a
//                 competitive edge, adjust to shifting market conditions, and
//                 experience long-term success. With  VIQ Technologies's emphasis on
//                 R&D, your company is prepared to seize new chances, boost
//                 productivity, and experience sustained expansion.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Expertise Section - Increased height */}
//         {activeTab === "expertise" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Key Expertise Areas
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Technical research and innovation acumen essential for
//                 breakthrough success
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
//                 Benefits of Implementing Strong Research & Development
//                 Strategies
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 There are several benefits for companies of all sizes when they
//                 invest in research and development
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

// export default ResearchAndDevelopment;

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  CheckCircle,
  Clock,
  Target,
  Repeat,
  Search,
  Brain,
  Beaker,
  Home,
  ChevronRight,
  BadgeIndianRupee,
  Handshake,
  Lightbulb,
  Microscope,
  Phone,
  Cpu,
  Database,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResearchAndDevelopment = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const whyChooseUs = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI & ML Expertise",
      description:
        "Our team specializes in neural networks, generative AI, and transformer models to keep your business at the forefront of the intelligence revolution.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Intellectual Property & IP Security",
      description:
        "We prioritize the security of your innovations, providing robust frameworks for patent strategy and intellectual property development.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Data-Driven Market Analysis",
      description:
        "Every research project is backed by extensive data analytics and market trend forecasting to ensure commercial viability.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Prototyping & PoC",
      description:
        "Minimize time-to-market with our rapid development of Minimum Viable Products (MVPs) and technical proof-of-concepts.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Ecosystem",
      description:
        "We act as an extension of your team, fostering a culture of co-innovation and transparent communication throughout the R&D lifecycle.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Innovation Growth",
      description:
        "Our R&D strategies are designed not just for discovery, but for scaling solutions that drive sustainable revenue and efficiency.",
    },
  ];

  const industries = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Tech & Software SaaS",
      description:
        "Developing next-gen algorithms and AI-driven features for software products and cloud-native platforms.",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Healthcare & Biotech",
      description:
        "Researching predictive diagnostics, medical imaging AI, and secure data management for the health sector.",
    },
    {
      icon: <BadgeIndianRupee className="w-8 h-8" />,
      title: "Fintech & Banking",
      description:
        "Implementing fraud detection models, blockchain research, and automated financial advisory systems.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce & Retail",
      description:
        "Innovating in personalized recommendation engines, supply chain optimization, and computer vision for retail.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Manufacturing & Industry 4.0",
      description:
        "Advancing IoT research, predictive maintenance, and robotic automation for modern manufacturing units.",
    },
  ];

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      step: "01",
      title: "Discovery & Opportunity Mapping",
      description:
        "We identify market gaps and technical challenges, aligning R&D goals with your long-term business objectives.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      step: "02",
      title: "Conceptualization & Ideation",
      description:
        "Our experts brainstorm innovative solutions, applying design thinking to map out potential technical architectures.",
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      step: "03",
      title: "Prototyping & Experimentation",
      description:
        "We build functional prototypes and conduct rigorous experiments to validate the core technology and feasibility.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      step: "04",
      title: "Testing & Validation",
      description:
        "Comprehensive testing ensures the solution meets performance benchmarks, security standards, and user needs.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      step: "05",
      title: "Refinement & Optimization",
      description:
        "Based on testing data, we fine-tune algorithms and system performance to ensure industrial-grade reliability.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      step: "06",
      title: "Commercialization & Scaling",
      description:
        "We assist in transitioning the research outcome into a market-ready product, including documentation and deployment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-cyan-200">
      {/* Hero Section */}
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
                  Research & Development
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Research Development Strategies to Transform your Business
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

      <div className="max-w-6xl mx-auto px-6 py-10">
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in pb-12">
            {/* Header Section */}
            <div className="bg-white border-b-4 border-blue-600 shadow-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Future-Ready Innovation through Strategic Research & Development
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                At  VIQ Technologies, our Research & Development division is
                committed to transforming innovative concepts into scalable
                AI-driven solutions. In today’s rapidly evolving digital
                landscape, continuous innovation is essential. We enable
                organizations to gain a competitive edge by leveraging
                Artificial Intelligence, Machine Learning models, advanced data
                analytics, and intelligent automation systems. Our team
                specializes in developing optimized algorithms, training
                predictive models, implementing deep learning architectures, and
                deploying high-performance computing frameworks. With a strong
                focus on data-driven decision-making, model scalability, and
                system efficiency, our R&D strategy ensures sustainable growth,
                adaptability to dynamic market trends, and measurable
                technological impact.
              </p>
            </div>

            {/* Core R&D Pillars */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Research Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Artificial Intelligence & ML Research
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  We push the boundaries of machine learning to create
                  intelligent systems that learn, adapt, and solve complex
                  problems autonomously.
                </p>
                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Focus Areas:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Generative
                      AI & LLM Fine-tuning
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Computer
                      Vision & Image Recognition
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Predictive
                      Analytics & Forecasting
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> NLP (Natural
                      Language Processing)
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Outcome: Superior automation and intelligent
                    decision-making.
                  </p>
                </div>
              </div>

              {/* Technical Strategy Card */}
              <div className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Technological Innovation & IP
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                  Strategic exploration of next-gen technologies to build a
                  defensive moat around your business offerings and intellectual
                  property.
                </p>
                <div className="space-y-4 mb-6">
                  <p className="font-bold text-blue-700 text-lg">
                    Innovation Goals:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Blockchain &
                      Web3 Research
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Edge
                      Computing & IoT Integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span> Performance
                      Algorithm Optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">●</span>{" "}
                      Patent-worthy Technical Discovery
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-blue-50">
                  <p className="text-blue-800 font-semibold bg-blue-50 p-3 rounded-lg text-lg text-justify">
                    Outcome: Market leadership and high-value asset creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Capabilities Section */}
            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Data-Driven AI & Deep Learning Solutions
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-lg mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Concept Feasibility Studies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> Rapid
                  Prototype Development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Technical Debt Assessment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Advanced Algorithmic Engineering
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Product Performance Benchmarking
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Emerging Tech Implementation
                </li>
              </ul>
              <p className="text-center text-blue-800 font-medium text-lg italic">
                We bridge the gap between academic research and commercial
                software excellence.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Accelerate Your Innovation Journey
              </h3>
              <p className="text-lg mb-8 text-blue-50">
                Partner with  VIQ Technologies to leverage cutting-edge R&D
                strategies and AI-driven growth.
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block">
                <p className="text-lg font-bold">
                  Ready to transform your technical vision into reality?
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact our R&D specialists today.
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
                Why Choose  VIQ Technologies for R&D?
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                We combine technical rigour with business acumen to deliver
                research that drives ROI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all hover:-translate-y-2 border-l-5 border-blue-500"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-15 h-15 rounded-xl flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold text-justify">
                    {item.description}
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
                Industries Transforming via R&D
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Our innovation lab provides cross-sector research to solve niche
                industry challenges.
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
                The Lifecycle of Innovation
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                A systematic, scientific approach to research that ensures every
                experiment leads to progress.
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

export default ResearchAndDevelopment;
