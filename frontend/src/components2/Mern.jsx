import React from "react";
import { Code2, Layers, MonitorSmartphone, ShieldCheck } from "lucide-react";

const AN_BLUE = "text-blue-600";
const AN_DARK_BLUE = "text-gray-900";
const AN_LIGHT_BLUE = "bg-blue-50";

const MernStackContentSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-blue-100 to-gray-50/30 py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className={`text-2xl md:text-3xl font-bold tracking-tight ${AN_DARK_BLUE} mb-2`}
          >
            MERN Stack Website Development
          </h2>
          <div className="relative">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We are experts in developing MERN Stack apps for companies looking
              for innovative online applications. MongoDB, Express.js, React.js,
              and Node.js, or MERN for short, is a potent mix that makes it
              possible to create dynamic, scalable, and high-performing online
              apps.
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start ">
          {/* Text Content Column */}
          <div className="space-y-4 mt-3">
            <div className="rounded-2xl p-5 shadow-sm bg-white border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 mt-3">
                Why Choose Our MERN Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Single-page applications with flawless user interfaces for
                    smooth, app-like experiences. Our MERN Stack engineers are
                    capable of creating dependable single-page applications
                    (SPAs) with flawless user interfaces.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    MERN-based applications optimized for speed, security, and
                    long-term maintainability. Our proficiency with the MERN
                    Stack enables us to create online applications that are
                    quick, safe, and simple to maintain.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Whether they involve interactive dashboards, real-time data
                    updates, or unique web solutions, we ensure seamless
                    performance across all platforms efficiently.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Clients receive robust applications that not only meet their
                    business goals but also adapt easily to future needs,
                    ensuring your digital solutions are future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Cards Column */}
          <div className="space-y-4">
            <div className="text-center mb-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Key Capabilities
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Comprehensive MERN stack solutions
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center transition-colors duration-300">
                      <MonitorSmartphone
                        className={`w-5 h-5 ${AN_BLUE} text-white transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold ${AN_DARK_BLUE} mb-1`}
                    >
                      Dependable SPAs
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Single-page applications with flawless user interfaces for
                      smooth, app-like experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center transition-colors duration-300">
                      <ShieldCheck
                        className={`w-5 h-5 ${AN_BLUE} text-white transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold ${AN_DARK_BLUE} mb-1`}
                    >
                      Quick, Safe & Maintainable
                    </h3>
                    <p className="text-gray-700 text-sm">
                      MERN-based applications optimized for speed, security, and
                      long-term maintainability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center transition-colors duration-300">
                      <Layers
                        className={`w-5 h-5 ${AN_BLUE} text-white transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold ${AN_DARK_BLUE} mb-1`}
                    >
                      Real-time & Cross-platform
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Interactive dashboards, real-time data updates, and unique
                      web solutions that perform seamlessly across platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative flex items-start space-x-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center transition-colors duration-300">
                      <Code2
                        className={`w-5 h-5 ${AN_BLUE} text-white transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-base font-semibold ${AN_DARK_BLUE} mb-1`}
                    >
                      Future-ready Architecture
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Robust, adaptable applications designed to meet current
                      business goals and scale with future requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MernStackContentSection;
