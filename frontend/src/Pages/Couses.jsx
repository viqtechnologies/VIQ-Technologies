import React, { useState } from "react";
import {
  Code,
  Shield,
  Brain,
  Database,
  Smartphone,
  Cloud,
  Layout,
  TrendingUp,
  Server,
  Lock,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import EnquiryFormModal from "../components2/Enquiryform.jsx";
import EnrollCourseForm from "../components2/Enrollcourseform.jsx";
// === Course Data ===
const courses = [
  {
    id: 1,
    title: "Cybersecurity ",
    category: "Security",
    description:
      "Our comprehensive Cybersecurity program is an essential, industry-focused course designed to prepare professionals for real-world cyber defense challenges. This program covers the complete spectrum of digital security, from foundational network security concepts to advanced threat detection and robust incident response strategies. Learners gain crucial hands-on exposure to enterprise security environments, emphasizing proactive security practices like vulnerability assessment and risk management. Participants master how to analyze and respond effectively to major cyber threats such as malware and ransomware, ensuring preparedness for data breaches. Practical labs and real-world case studies guarantee job-ready skills. Completing this training equips candidates for high-demand roles like SOC Analyst and Cybersecurity Engineer, helping organizations build resilient, secure digital ecosystems and advance their career in cybersecurity.",
    features: [
      "Network Security Fundamentals",
      "SOC Operations & Monitoring",
      "Threat Intelligence Analysis",
      "Risk & Compliance Management",
      "Incident Response Planning",
      "VAPT Services",
      "Firewall & IDS/IPS Configuration",
      "Cloud Security Basics",
      "Real-World Security Case Studies",
    ],
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Artificial Intelligence & Machine Learning",
    category: "Data & AI",
    description:
      "Our AI/ML course provides the skills to build intelligent, data-driven systems powering modern businesses. This program introduces core machine learning concepts, advancing into deep learning, neural networks, and real-world AI applications. Learners gain hands-on experience working with structured and unstructured data, training powerful predictive models. The course focuses on practical implementation using Python and leading AI frameworks like TensorFlow and PyTorch. Emphasis is placed on applying AI solutions to solve business challenges, including automation, customer analytics, and forecasting. Participants also address essential ethical AI practices and responsible data usage. Graduates are prepared for roles such as Machine Learning Engineer, AI Developer, or Data Scientist, ready to lead enterprise-level AI initiatives.",
    features: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Python for AI Development",
      "TensorFlow & PyTorch",
      "Model Training & Evaluation",
      "AI in Business Applications",
      "Data Preprocessing Techniques",
      "Ethical AI Practices",
    ],
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    category: "Development",
    description:
      "Our Full Stack Web Development program provides comprehensive, end-to-end training to meet the evolving demands of startups and enterprises. This course focuses on building modern, responsive, and scalable web applications using industry-standard technologies. Learners establish strong foundations in frontend development, backend logic, database design, and API integration. The curriculum emphasizes clean code architecture, performance optimization, and secure development practices. Real-world projects simulate professional workflows, enabling learners to master version control, deployment, and collaborative development. By the program's conclusion, participants are fully capable of developing complete web solutions, from user interfaces to server-side logic. This course rigorously prepares candidates for roles such as Full Stack Developer, Frontend Engineer, or Backend Developer in professional software teams.",
    features: [
      "HTML, CSS & JavaScript",
      "React.js Frontend Development",
      "Node.js & Express Backend",
      "MongoDB Database Design",
      "RESTful API Development",
      "Authentication & Authorization",
      "Responsive Web Design",
      "Performance Optimization",
      "Deployment & Hosting",
    ],
    icon: <Code className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-100",
  },
  {
    id: 4,
    title: "Data Science",
    category: "Data & AI",
    description:
      "Our Data Science program empowers learners to transform raw data into meaningful insights that drive business decisions. This essential course strategically combines statistics, programming, and analytical thinking to solve real-world problems. Learners develop deep expertise in data cleaning, exploratory analysis, predictive modeling, and visualization. The program focuses heavily on practical business use cases, enabling candidates to interpret data trends, build robust forecasting models, and communicate insights effectively to stakeholders. With an enterprise-oriented curriculum, this course prepares graduates for critical, data-driven roles such as Data Scientist, Business Analyst, or Analytics Consultant. Learners gain the necessary confidence to work with large datasets and directly support strategic decision-making in modern organizations.",
    features: [
      "Python & R Programming",
      "Data Cleaning & Wrangling",
      "Statistical Analysis",
      "Exploratory Data Analysis",
      "Data Visualization Techniques",
      "Predictive Modeling",
      "Business Data Insights",
      "Big Data Fundamentals",
      "Industry Use Cases",
    ],
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-100",
  },
  {
    id: 5,
    title: "Ethical Hacking",
    category: "Security",
    description:
      "Our Ethical Hacking course trains learners to proactively identify and exploit system vulnerabilities to strengthen security defenses. This comprehensive program focuses on offensive security techniques used by professional penetration testers and security auditors. Participants gain essential hands-on experience using industry-standard tools to rigorously test networks, applications, and wireless systems. The curriculum emphasizes responsible hacking practices, meticulous documentation, and reporting aligned with enterprise security standards. By understanding attacker methodologies, graduates are prepared to proactively identify cyber threats, effectively reduce attack surfaces, and significantly improve an organization's overall security posture. This course prepares candidates for high-demand roles in penetration testing, vulnerability assessment, cybersecurity consulting, and security operations, making them valuable assets to modern security-driven organizations.",
    features: [
      "Ethical Hacking Fundamentals",
      "Penetration Testing Techniques",
      "Kali Linux Tools",
      "Web Application Security",
      "Network Vulnerability Scanning",
      "Exploitation Methods",
      "Wireless Security",
      "Bug Bounty Basics",
      "Security Reporting & Audits",
    ],
    icon: <Lock className="w-8 h-8 text-red-600" />,
    color: "bg-red-100",
  },
  {
    id: 6,
    title: "Data Analytics",
    category: "Data & AI",
    description:
      "Our Data Analytics course focuses on transforming data into actionable insights that support business growth and operational efficiency. This program teaches learners how to analyze trends, create interactive dashboards, and generate data-driven reports using industry-standard analytics tools and methodologies. Participants gain valuable hands-on experience with SQL, data visualization platforms, spreadsheets, and business intelligence (BI) concepts commonly used in modern organizations. The course emphasizes data storytelling, enabling learners to present insights clearly to decision-makers. This program prepares professionals to support strategic planning, performance tracking, and data-driven decision-making. Graduates are well prepared for roles such as Data Analyst, Business Intelligence Analyst, Reporting Specialist, or Analytics Executive, making them valuable contributors to corporate analytics and BI teams.",
    features: [
      "Advanced SQL Queries",
      "Power BI Dashboards",
      "Tableau Visualizations",
      "Business Intelligence Concepts",
      "Data Reporting Techniques",
      "Trend & KPI Analysis",
      "Excel for Analytics",
      "Data Storytelling",
      "Corporate Case Studies",
    ],
    icon: <BarChart3 className="w-8 h-8 text-cyan-600" />,
    color: "bg-cyan-100",
  },
  {
    id: 7,
    title: "App Development",
    category: "Development",
    description:
      "Our App Development program prepares learners to build modern, high-performance mobile applications for both Android and iOS platforms. This essential course focuses on cross-platform development techniques that significantly reduce development time while ensuring excellent user experience (UX). Learners gain extensive hands-on experience in mobile UI/UX design, API integration, state management, and performance optimization using industry-standard frameworks. The curriculum also covers rigorous application testing, debugging, security best practices, and the full deployment process for major app stores. Graduates are capable of contributing to professional development teams, building business-critical mobile solutions, and supporting digital transformation initiatives across modern enterprises. This training provides the skills needed for success in professional mobile application development.",
    features: [
      "Flutter Development",
      "Custom Mobile Applications",
      "Cross-Platform Apps",
      "Mobile UI/UX Design",
      "API Integration",
      "State Management",
      "App Performance Optimization",
      "Testing & Debugging",
      "App Store Deployment",
    ],
    icon: <Smartphone className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-100",
  },
  {
    id: 8,
    title: "DevOps Engineering",
    category: "Development",
    description:
      "Our DevOps Engineering course is designed to significantly improve collaboration between development and operations teams. This focused program emphasizes automation, continuous integration (CI/CD), and scalable infrastructure management. Learners gain extensive hands-on experience with automation tools, CI/CD practices, infrastructure as code, containerization, and orchestration Shutterstock . The course utilizes industry-standard DevOps platforms and cloud services, covering essential topics like cloud deployment, configuration management, and version control. Strong emphasis is placed on monitoring, logging, performance optimization, security integration, and effective release management practices used in real-world IT environments. Graduates are prepared to support highly reliable, efficient, and scalable software delivery pipelines in enterprise organizations.",
    features: [
      "DevOps Fundamentals",
      "CI/CD Pipeline Design",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "Automation Tools",
      "Monitoring & Logging",
      "Cloud Deployment",
      "Release Management",
    ],
    icon: <Server className="w-8 h-8 text-slate-600" />,
    color: "bg-slate-100",
  },
  {
    id: 9,
    title: "Cloud Computing",
    category: "Development",
    description:
      "Our Cloud Computing course equips learners with the skills required to design, deploy, and manage scalable cloud infrastructure. This program focuses on cloud platforms that power modern digital businesses.\n\nLearners gain hands-on experience with cloud architecture, security best practices, and migration strategies. The course prepares professionals to manage high-availability systems and optimize cloud costs.\n\nGraduates are ready to work in cloud engineering and infrastructure roles across industries.",
    features: [
      "AWS Core Services",
      "Microsoft Azure Fundamentals",
      "Cloud Architecture Design",
      "Serverless Computing",
      "Cloud Security Best Practices",
      "Storage & Networking",
      "Cost Optimization",
      "Cloud Migration Strategies",
      "High Availability Systems",
    ],
    icon: <Cloud className="w-8 h-8 text-sky-600" />,
    color: "bg-sky-100",
  },
  {
    id: 10,
    title: "Digital Marketing",
    category: "Marketing",
    description:
      "The Digital Marketing course is designed to help businesses grow their online presence through data-driven strategies. This program covers SEO, paid advertising, content marketing, and analytics.\n\nLearners gain hands-on experience in planning and executing digital campaigns while measuring performance and ROI. The course prepares professionals to manage brand visibility and customer acquisition across digital platforms.\n\nGraduates are ready for roles in digital marketing and growth strategy.",
    features: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Advertising",
      "Content Marketing Strategy",
      "Google Analytics",
      "Conversion Rate Optimization",
      "Email Marketing",
      "Brand Growth Techniques",
      "Marketing Performance Tracking",
    ],
    icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
    color: "bg-pink-100",
  },
  {
    id: 11,
    title: "Graphic Designing",
    category: "Design",
    description:
      "Our Graphic Designing course blends creativity with professional branding requirements. This program helps learners develop strong visual communication skills for digital and print media.\n\nParticipants learn industry-standard design tools, typography, color theory, and branding principles. The course emphasizes creating designs that enhance brand identity and user engagement.\n\nGraduates are prepared for creative roles in design agencies, marketing teams, and digital platforms.",
    features: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI Design Principles",
      "Visual Branding",
      "Typography Basics",
      "Color Theory",
      "Creative Design Workflow",
      "Social Media Creatives",
      "Brand Identity Design",
    ],
    icon: <Layout className="w-8 h-8 text-yellow-600" />,
    color: "bg-yellow-100",
  },
];


const categories = [
  "All",
  "Development",
  "Data & AI",
  "Security",
  "Marketing",
  "Design",
];

const Courses = () => {
const [isEnrollOpen, setIsEnrollOpen] = useState(false);
const [selectedCourse, setSelectedCourse] = useState("");
    
  const handleFormOpen = () => setIsEnquiryOpen(true);
  const handleFormClose = () => setIsEnquiryOpen(false);
const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All");


const openEnrollForm = (courseName) => {
  setSelectedCourse(courseName);
  setIsEnrollOpen(true);
};

const closeEnrollForm = () => {
  setIsEnrollOpen(false);
};


  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="py-8 bg-[#FFFFFF] w-full" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header Section === */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-2">
            Explore Our <span className="text-[#1268B3]">ED-Tech Courses</span>
          </h1>
          <p className="text-[#172033] max-w-2xl mx-auto text-lg">
            Accelerate your career with our hands-on training programs designed
            by industry experts. Real-world projects, certified mentors, and
            100% placement assistance.
          </p>
        </div>

        <div
          className="
    flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12
  "
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
        px-3 py-1.5 
        sm:px-4 sm:py-2 
        md:px-6 md:py-2
        rounded-full 
        text-xs sm:text-sm 
        font-semibold 
        transition-all duration-300 
        border
        ${
          activeCategory === category
            ? "bg-[#0A2540] text-white border-[#0A2540] shadow-md scale-105"
            : "bg-[#F1F5F9] text-[#172033] border-slate-200 hover:bg-[#1268B3] hover:text-white hover:border-[#1268B3]"
        }
      `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* === Course Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="group bg-[#F1F5F9] rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1268B3] flex flex-col h-full"
            >
              <div className="p-8 flex flex-col h-full">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-[#0A2540]/10 text-[#1268B3] transition-all duration-300">
                    {course.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-[#0A2540] text-white rounded-full uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:text-[#1268B3] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#172033] mb-6 flex-grow leading-relaxed text-justify">
                  {course.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-[#172033] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D9A52E] mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button
                    onClick={() => openEnrollForm(course.title)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-[#1268B3] text-[#1268B3] font-bold text-sm hover:bg-[#1268B3] hover:text-white hover:border-[#1268B3] transition-all duration-300 flex items-center justify-center group/btn"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* === Bottom CTA === */}
        <div className="mt-16 text-center bg-[#0A2540] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#1268B3] rounded-full opacity-40 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Not sure which path to choose?
            </h2>
            <p className="font-medium text-lg text-[#F1F5F9] mb-8 max-w-5xl mx-auto text-justify">
              Our career counselors work closely with you to understand your
              skills, interests, and career goals. Through personalized guidance
              and industry insights, they help you identify your strengths and
              choose the most suitable course for long-term success. Whether you
              aim to enter tech, advance your current role, or switch careers,
              our expert counselors ensure you make informed decisions aligned
              with market demand and future opportunities.{" "}
            </p>
            <button
              onClick={handleFormOpen}
              className="bg-[#D9A52E] text-[#0A2540] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Counseling
            </button>
          </div>
        </div>
      </div>
      <EnquiryFormModal isOpen={isEnquiryOpen} onClose={handleFormClose} />

      <EnrollCourseForm
        isOpen={isEnrollOpen}
        onClose={closeEnrollForm}
        selectedCourse={selectedCourse}
      />
    </section>
  );
};

export default Courses;
