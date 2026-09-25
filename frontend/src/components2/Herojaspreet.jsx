import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Hero = ({ navigate, ctoImage }) => (
  <>
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-semibold"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <span className="text-blue-600 font-bold tracking-tighter text-xl">
          ANSH InfoTech
        </span>
      </div>
    </nav>
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1  rounded-[2.5rem] rotate-0 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-blue-900"></div>
              <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] bg-white rounded-[2rem] overflow-hidden shadow-2xl ">
                <img
                  src={ctoImage}
                  alt="Jaspreet Grewal"
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Jaspreet <span className="text-blue-600">Grewal</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-500 mb-6 flex items-center gap-3">
              Chief Technology Officer (CTO)
              <span className="h-px w-12 bg-blue-400 hidden sm:block"></span>
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
                Cybersecurity
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
                DevOps
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
                Cloud Architect
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-widest">
                Penetration Tester
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8 text-justify lg:text-left">
              Jaspreet Grewal is the Chief Technology Officer (CTO) at ANSH
              InfoTech, bringing over 4+ years of experience with the
              organization in leading technology strategy, cybersecurity
              initiatives, and engineering operations. He plays a key role in
              driving innovation while ensuring the successful delivery of
              secure, scalable, and high-performance technology solutions for
              both domestic and international clients.
            </p>
            <a
              href="https://www.linkedin.com/in/jaspreet-infosec/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Connect on LinkedIn <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
