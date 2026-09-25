import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Shield,
  Code,
  Smartphone,
  TrendingUp,
  Brain,
  Database,
  Cpu,BookOpen,Globe,
  Users,
  Lock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    question: "What services does VIQ Technologies provide?",
    answer:
      "VIQ Technologies offers end-to-end IT solutions including web and mobile app development, VAPT (Vulnerability Assessment & Penetration Testing), digital marketing, AI & ML solutions, and data analytics services to help businesses grow securely and efficiently.",
    icon: <Cpu className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "What is VAPT and why is it important for businesses?",
    answer:
      "VAPT (Vulnerability Assessment and Penetration Testing) helps identify security vulnerabilities in your systems before attackers do, ensuring your applications, networks, and data remain protected from cyber threats.",
    icon: <Shield className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "Does VIQ Technologies develop mobile applications?",
    answer:
      "Yes, VIQ Technologies develops custom mobile applications for Android and iOS, delivering scalable, secure, and user-friendly apps tailored to your business needs.",
    icon: <Smartphone className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "Can VIQ Technologies help with digital marketing?",
    answer:
      "Yes, VIQ Technologies provides digital marketing services such as SEO, social media marketing, paid campaigns, content strategy, and performance tracking to increase brand visibility and generate quality leads.",
    icon: <TrendingUp className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "What AI and Machine Learning solutions do you offer?",
    answer:
      "VIQ Technologies delivers AI & ML solutions including predictive analytics, intelligent automation, recommendation engines, and custom AI models to enhance decision-making and operational efficiency.",
    icon: <Brain className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "How can data analytics benefit my business?",
    answer:
      "Data analytics turns raw data into actionable insights, helping you improve performance, understand customer behavior, optimize operations, and drive sustainable business growth.",
    icon: <Database className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "Do you offer customized IT solutions?",
    answer:
      "Yes, VIQ Technologies designs fully customized IT solutions based on your business goals, industry standards, and technical requirements to ensure maximum efficiency and scalability.",
    icon: <Code className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "Is VIQ Technologies suitable for startups and small businesses?",
    answer:
      "Absolutely. VIQ Technologies works with startups, SMEs, and enterprises, offering flexible and cost-effective solutions that can scale as your business grows.",
    icon: <Users className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "How do you ensure the security of applications and data?",
    answer:
      "Security is built into every stage, from secure coding practices and regular testing to VAPT assessments and compliance checks, helping protect your applications and data from evolving threats.",
    icon: <Lock className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "Does VIQ Technologies provide industrial training or internships?",
    answer:"Yes, VIQ Technologies offers comprehensive industrial training and internship programs across multiple domains including Web Development (Full-Stack), AI & Machine Learning, Cybersecurity (VAPT), Data Science, App Development, and Digital Marketing. We provide hands-on experience with live projects and industrial simulations to bridge the gap between academic theory and high-demand industry requirements.",
      icon: <BookOpen className="h-5 w-5 text-[#1268B3]" />,
  },
  {
    question: "How can I get started with VIQ Technologies?",
    answer:
      "You can contact VIQ Technologies via the website, email, or phone. Share your requirements and the team will connect with you to discuss the best solution for your business.",
    icon: <MessageCircle className="h-5 w-5 text-[#1268B3]" />,
  },

  {
    question: "What are the available modes of training at VIQ Technologies?",
    answer:
      "To ensure maximum accessibility and flexibility, we provide hybrid learning models including both offline in-person sessions at our Ludhiana center and interactive online training for remote learners, both led by industry experts.",
    icon: <Globe className="h-5 w-5 text-[#1268B3]" />,
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const filteredFaqs = searchTerm
    ? faqs.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs;

  return (
    <section className="relative bg-[#FFFFFF] py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#1268B3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0A2540]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-[#0A2540] rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="h-8 w-8 text-[#D9A52E]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tight">
            Frequently Asked <span className="text-[#1268B3]">Questions</span>
          </h1>
          <p className="text-lg text-[#172033] max-w-2xl mx-auto leading-relaxed">
            Find comprehensive answers about VIQ Technologies's services, security
            protocols, and how we partner with businesses for digital
            transformation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F1F5F9] rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-slate-200">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="group">
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        className="w-full flex items-start justify-between gap-6 px-8 py-6 text-left hover:bg-slate-200/50 transition-all duration-200"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="flex-shrink-0 mt-1">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[#0A2540] mb-2 pr-8">
                              {item.question}
                            </h3>
                            <div
                              className={`text-[#172033] leading-relaxed transition-all duration-300 text-justify ${
                                isOpen
                                  ? "opacity-100 max-h-96"
                                  : "opacity-0 max-h-0 overflow-hidden"
                              }`}
                            >
                              {item.answer}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 ${
                            isOpen
                              ? "bg-[#1268B3] text-white rotate-180 border-[#1268B3]"
                              : "bg-white text-[#172033] border-slate-300 group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3]"
                          }`}
                        >
                          <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                        </div>
                      </button>
                      {index < filteredFaqs.length - 1 && (
                        <div
                          className={`transition-all duration-200 ${
                            isOpen ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <div className="h-px bg-slate-200 mx-8"></div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="px-8 py-12 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-2">
                    No results found
                  </h3>
                  <p className="text-[#172033]">
                    Try different keywords or browse all questions
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-[#1268B3] hover:text-[#0A2540] font-medium inline-flex items-center"
                  >
                    Clear search
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="px-8 py-8 bg-[#0A2540] text-white border-t border-[#1268B3]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Need personalized assistance?
                  </h4>
                  <p className="text-[#F1F5F9]">
                    Schedule a consultation with our experts for tailored
                    solutions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3
      bg-[#1268B3] hover:bg-[#0A2540] border border-[#1268B3] text-white font-semibold
      rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Contact Our Team
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>

                  <a
                    href="tel:+918427899400"
                    className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3
      bg-transparent border border-[#D9A52E] text-[#D9A52E] hover:bg-[#D9A52E] hover:text-[#0A2540] font-bold
      rounded-xl transition-all duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
