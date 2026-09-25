// import React, { useState } from "react";
// import {
//   Shield,ArrowLeftRight,Bolt, TabletSmartphone,Cloudy,
//   Zap,
//   ShieldCheck,
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
//   Lock,
//   Activity,
//   Home,
//   ChevronRight,
//   Globe,
//   Bold,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const VaptServices = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const expertiseAreas = [
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Network Security Testing",
//       description:
//         "Cybercriminals frequently enter through network flaws. To find vulnerabilities in firewalls, routers, and other network devices, we offer comprehensive network scans and penetration tests. This guarantees that your networks, both internal and external, are safe from unwanted access.",
//     },
//     {
//       icon: <Activity className="w-8 h-8" />,
//       title: "Web Application Security Testing",
//       description:
//         "Although web applications are essential to corporate operations, they are frequently vulnerable to threats such as SQL injection and cross-site scripting (XSS). To identify and fix these flaws and protect your digital assets and sensitive client information, we simulate real-world attacks.",
//     },
//     {
//       icon: <TabletSmartphone className="w-8 h-8" />,
//       title: "Mobile Application Security Testing",
//       description:
//         "Ensuring mobile security is crucial given the rise in the use of mobile apps. We examine mobile apps for possible security flaws and offer practical suggestions to improve app security on the iOS and Android operating systems.",
//     },
//     {
//       icon: <Cloudy className="w-8 h-8" />,
//       title: "Cloud Security Assessment",
//       description:
//         "Scalability is a benefit of cloud systems; however, there may be special security threats. By analyzing your cloud architecture, we identify potential data breaches, unsafe APIs, and configuration errors. This keeps your cloud activities safe without sacrificing effectiveness.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Expert team",
//       description:
//         "certified security experts with a wealth of knowledge in cybersecurity and ethical hacking.",
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Tailored solutions",
//       description:
//         "Tailored testing according to your risk profile, infrastructure, and sector.",
//     },
//     {
//       icon: <Bolt className="w-8 h-8" />,
//       title: "Advanced Tools",
//       description:
//         "Applying the most recent techniques and technologies to ensure thorough and precise testing.",
//     },
//     {
//       icon: <ArrowLeftRight className="w-8 h-8" />,
//       title: "Actionable Insights",
//       description:
//         "Detailed suggestions to improve your security architecture and reduce risks. ",
//     },
//     {
//       icon: <Repeat className="w-8 h-8" />,
//       title: "Continuous Support ",
//       description:
//         "Continuous support to ensure strong security even after testing is over. ",
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
//                 <span className="text-white font-semibold">VAPT Services</span>
//               </li>
//             </ol>
//           </nav>

//           {/* Hero Content */}
//           <div className="text-center">
//             <div className="flex items-center justify-center sm:gap-3 ">
//               <Shield className="h-14 w-14 hidden lg:block" />
//               <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight">
//                 Expert VAPT Services for Complete Cybersecurity Protection
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="bg-white shadow-md sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
//             {["overview", "services", "why choose us"].map((tab) => (
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
//               <p className=" mb-6 text-gray-700 text-xl leading-relaxed text-justify">
//                 Businesses now have to deal with a growing array of
//                 cyberthreats, from ransomware attacks to data breaches, in the
//                 current digital era. Maintaining company operations depends on
//                 your IT infrastructure being secure, which is not merely a need.
//                 Vulnerability assessment and penetration testing, or{" "}
//                 <a
//                   href="https://www.anshinfotech.org/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   VAPT services
//                 </a>{" "}
//                 are essential in this situation. With the use of our
//                 professional VAPT Services, businesses may find weaknesses,
//                 reduce risks, and fortify their cybersecurity architecture
//                 overall.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 What Are VAPT Services?
//               </h2>
//               <p className="mb-6 text-gray-700 text-xl leading-relaxed  text-justify">
//                 VAPT Services integrate penetration testing (PT) and
//                 vulnerability assessment (VA), two essential security
//                 techniques. While penetration testing replicates actual breaches
//                 to analyze how these vulnerabilities may be exploited,
//                 vulnerability assessments methodically search systems, networks,
//                 and applications for possible flaws. By working together, these
//                 services give companies a comprehensive view of their security
//                 posture and empower them to take proactive measures before a
//                 danger arises.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Importance of VAPT Services for Your Business
//               </h2>
//               <p className="mb-6 text-gray-700 text-xl leading-relaxed text-justify">
//                 Traditional security measures are sometimes insufficient to fend
//                 off sophisticated assaults, and cyber dangers are always
//                 changing. They offer a number of important advantages: <br />
//                 <span className="font-bold ">• Identify Weak Points:</span>{" "}
//                 Businesses are able to effectively prioritize and fix security
//                 gaps by identifying vulnerabilities in their systems, networks,
//                 and applications. <br className="mb-4" />{" "}
//                 <span className="font-bold"> • Prevent Financial Loss:</span>{" "}
//                 Due to data loss, outages, and legal repercussions, security
//                 breaches can cause large financial losses. These losses can be
//                 prevented with proper cybersecurity measures. <br />{" "}
//                 <span className="font-bold"> • Enhance Compliance:</span> Many
//                 sectors have rules like GDPR, HIPAA, and ISO 27001 that must be
//                 followed. Frequent assessments guarantee that your company
//                 satisfies these requirements. <br />{" "}
//                 <span className="font-bold">• Strengthen Customer Trust:</span>{" "}
//                 Proactive security measures establish confidence and trust by
//                 assuring partners and clients that their data is secure.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 How Our VAPT Services Work
//               </h2>
//               <p className=" mb-6 text-gray-700 text-xl leading-relaxed text-justify ">
//                 Our methodical approach to VAPT Services guarantees that no
//                 security detail is missed:
//                 <br /> <span className="font-bold">
//                   • Initial Assessment:
//                 </span>{" "}
//                 being aware of your company demands, legal regulations, and IT
//                 infrastructure.
//                 <br />
//                 <span className="font-bold">
//                   • Vulnerability Identification:{" "}
//                 </span>
//                 Finding possible flaws with manual methods and sophisticated
//                 tools.
//                 <br /> <span className="font-bold">
//                   • Penetration Testing:
//                 </span>{" "}
//                 Evaluating the exploitability of vulnerabilities by simulating
//                 attacks.
//                 <br /> <span className="font-bold">• Reporting:</span>{" "}
//                 delivering a thorough report that includes conclusions, risk
//                 assessments, and recommendations ranked in order of importance.{" "}
//                 <br /> <span className="font-bold">• Remediation Support:</span>{" "}
//                 assisting your IT staff in strengthening security measures and
//                 addressing weaknesses.
//               </p>

//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed text-justify ">
//                 Our services at  VIQ Technologies are made to give companies strong
//                 cybersecurity defense. We make sure your IT infrastructure is
//                 safe, compliant, and resistant to changing cyberthreats by
//                 detecting weaknesses, modeling actual assaults, and providing
//                 workable remedies. For skilled VAPT services that protect your
//                 digital assets and let your company run{" "}
//                 <a
//                   href="https://en.wikipedia.org/wiki/Confident_Music_for_Confident_People"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   confidently
//                 </a>{" "}
//                 in the rapidly evolving digital world of today, rely on ANSH
//                 InfoTech.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Expertise Section - Increased height */}
//         {activeTab === "services" && (
//           <div className="space-y-12 animate-fade-in">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Comprehensive VAPT Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Our group provides customized VAPT Services that are intended to
//                 address all facets of the digital ecosystem of your company. Our
//                 strategy is comprehensive, expert, and customized to meet your
//                 company's needs:
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
//                 Why Choose Our VAPT Services
//               </h2>
//               <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//                 Your cybersecurity posture might be greatly impacted by your
//                 choice of VAPT Services supplier. Here's why our customers have
//                 faith in us
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

// export default VaptServices;




import React, { useState } from "react";
import {
  Shield,
  Activity,
  Globe,
  TabletSmartphone,
  Cloudy,
  Database,
  FileCheck,
  Search,
  CheckCircle,
  Zap,
  Target,
  Users,
  FileText,
  Lock,
  ChevronRight,
  Home,
  Phone,
  Settings,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";


const VaptServices = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data mapping based on your content
  const services = [
    {
      title: "Network VAPT (Internal & External)",
      icon: <Globe className="w-8 h-8" />,
      points: [
        "Open ports and insecure services",
        "Firewall and IDS/IPS misconfigurations",
        "Weak network segmentation",
        "Privilege escalation paths",
      ],
      impact: "Reduced lateral movement risk and hardened network security.",
    },
    {
      title: "Web Application VAPT",
      icon: <Activity className="w-8 h-8" />,
      points: [
        "SQL Injection, XSS, CSRF (OWASP Top 10)",
        "Broken authentication & access control",
        "Insecure file handling",
        "Business logic vulnerabilities",
      ],
      impact:
        "Protection against application-layer attacks and data compromise.",
    },
    {
      title: "Mobile Application Security Testing",
      icon: <TabletSmartphone className="w-8 h-8" />,
      points: [
        "Static and dynamic analysis",
        "Insecure data storage and encryption flaws",
        "Reverse engineering and tampering risks",
        "Insecure API communication",
      ],
      impact: "Secure mobile applications and enhanced user trust.",
    },
    {
      title: "Cloud Security Assessment",
      icon: <Cloudy className="w-8 h-8" />,
      points: [
        "Misconfigured cloud services (AWS, Azure, GCP)",
        "Excessive IAM permissions",
        "Publicly exposed storage and databases",
        "Insecure CI/CD pipelines",
      ],
      impact: "Reduced risk of cloud breaches caused by misconfiguration.",
    },
    {
      title: "API Penetration Testing",
      icon: <Database className="w-8 h-8" />,
      points: [
        "Broken authentication & authorization",
        "Excessive data exposure",
        "Rate limiting and abuse vulnerabilities",
        "Injection and logic flaws",
      ],
      impact: "Secure integrations and protected data exchange.",
    },
    {
      title: "Compliance-Oriented VAPT",
      icon: <FileCheck className="w-8 h-8" />,
      points: ["ISO 27001", "PCI DSS", "HIPAA", "SOC 2"],
      impact:
        "Faster audits, reduced compliance gaps, and improved security posture.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Scoping & Threat Modeling", icon: <Search /> },
    {
      step: "02",
      title: "Automated Vulnerability Scanning",
      icon: <Settings />,
    },
    { step: "03", title: "Manual Penetration Testing", icon: <Target /> },
    {
      step: "04",
      title: "Exploit Validation & Impact Analysis",
      icon: <Zap />,
    },
    { step: "05", title: "CVSS-Based Risk Rating", icon: <Scale /> },
    {
      step: "06",
      title: "Detailed Reporting & Remediation Guidance",
      icon: <FileText />,
    },
    { step: "07", title: "Optional Re-Testing", icon: <CheckCircle /> },
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
                  <Home className="w-4 h-4" />
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
                <span className="text-white font-semibold">VAPT Services</span>
              </li>
            </ol>
          </nav>
          <div className="text-center">
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Achieve Digital Resilience: End-to-End VAPT & Security Assurance
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {["overview", "services", "why choose us", "our process"].map(
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
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            <div className="bg-white border-b-4 border-blue-600 shadow-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Vulnerability Assessment & Penetration Testing (VAPT)
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-6">
                VAPT is a structured security testing process that evaluates the
                effectiveness of your existing security controls. This combined
                approach delivers a realistic risk profile, not just a checklist
                of issues.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 text-xl mb-2">
                    Vulnerability Assessment (VA)
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Systematic identification of known vulnerabilities,
                    misconfigurations, and exposure points.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 text-xl mb-2">
                    Penetration Testing (PT)
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Controlled exploitation of vulnerabilities to determine real
                    business impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-100 shadow-md rounded-xl p-10">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Who Needs VAPT Services?
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                If security matters to your business, VAPT is non-negotiable. It
                is essential for:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" /> Enterprises
                  & growing startups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" /> SaaS and
                  product-based companies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" /> E-commerce
                  platforms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" /> FinTech,
                  Healthcare, and EdTech
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" /> Businesses
                  preparing for audits or funding
                </li>
              </ul>
            </div>
            <div className="mt-12 bg-blue-600 rounded-xl p-10 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Secure Your Organization with  VIQ Technologies
              </h3>
              <p className="text-lg mb-8 text-blue-50">
                Cyber threats are constantly evolving. Your security strategy
                should evolve faster.
              </p>
              <div className="bg-white text-blue-900 p-6 rounded-lg inline-block shadow-xl">
                <p className="text-lg font-bold leading-relaxed">
                  Partner with VIQ Technologies to identify vulnerabilities and
                  secure your digital assets.
                  <Phone className="inline-block mx-2 text-blue-600" />
                  Contact us today to schedule your VAPT assessment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES TAB */}
        {activeTab === "services" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Our Advanced VAPT Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 shadow-md rounded-xl p-8 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      {s.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-lg mb-6 flex-grow">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">●</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-bold text-lg text-justify">
                      Business Impact:{" "}
                      <span className="font-medium">{s.impact}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY CHOOSE US TAB */}
        {activeTab === "why choose us" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            <div className="bg-white border-b-4 border-blue-600 shadow-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Why Choose  VIQ Technologies?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
                {[
                  "Certified and experienced testers",
                  "Manual testing beyond automated tools",
                  "Risk-based vulnerability prioritization",
                  "Clear, actionable reports",
                  "Ethical and confidential testing",
                  "Post-assessment remediation support",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg font-semibold text-blue-900"
                  >
                    <Users className="w-6 h-6 text-blue-600" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-10 border border-blue-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                VAPT Deliverables
              </h3>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                What you receive after our assessment:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Executive summary for leadership
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Detailed technical vulnerability report
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> Proof
                  of Concept (PoC) for critical findings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span> CVSS
                  severity scoring
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>{" "}
                  Step-by-step remediation recommendations
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* OUR PROCESS TAB */}
        {activeTab === "our process" && (
          <div className="space-y-8 animate-fade-in max-w-7xl mx-auto pb-12">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Our VAPT Testing Methodology
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white border border-blue-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 font-bold text-4xl mb-4 opacity-30">
                    {step.step}
                  </div>
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-blue-900 text-lg">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-xl text-center mt-10">
              <p className="text-xl italic">
                "This hybrid methodology minimizes false positives and focuses
                on exploitable, high-risk vulnerabilities."
              </p>
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

export default VaptServices;
