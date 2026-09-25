// import React from "react";
// import { MapPin } from "lucide-react";

// import lkc from "../assets/workshops/lkcworkshop.jpg"
// import iet from "../assets/workshops/iet.jpg"
// import as from "../assets/workshops/as.jpg"
// import aryawomen from "../assets/workshops/aryawomen.jpg"
// import sdp from "../assets/workshops/sdpworksjop.jpg"
// import arya from "../assets/workshops/arya.png"
// import lpu from "../assets/workshops/lpu.png"
// import aman from "../assets/workshops/aman.jpg"
// import pimt from "../assets/workshops/pimt.jpg"
// import sbssu from "../assets/workshops/sbssu.png"
// import thapar from "../assets/workshops/thapar.png"
// const Workshop = () => {
//   const descriptionText =
//     "Ansh Infotech conducted a specialized technical workshop, providing students with deep industry insights and hands-on experience in emerging technologies.";

//   const workshopData = [
//     {
//       id: 1,
//       location: "LKC, Jalandhar",
//       topic: "AI Agents",
//       image: lkc,
//       description:
//         "<a href='https://ansh-infotech.netlify.app/'>Ansh Infotech</a>conducted a specialized workshop on AI Agents, focusing on building autonomous systems and their real-world industrial applications.",
//     },
//     {
//       id: 2,
//       location: "IET Bhaddal Ropar",
//       topic: "Generative AI",
//       image: iet,
//       description: descriptionText,
//     },
//     {
//       id: 3,
//       location: "AS Group of Institute",
//       topic: "AIML",
//       image: as,
//       description: descriptionText,
//     },
//     {
//       id: 4,
//       location: "Arya College for Women , Ludhiana",
//       topic: "Digital Marketing",
//       image: aryawomen,
//       description: descriptionText,
//     },
//     {
//       id: 5,
//       location: "BBSBEC, Bathinda",
//       topic: "Cyber Security",
//       image: lkc,
//       description: descriptionText,
//     },
//     {
//       id: 6,
//       location: "AS College, Khanna",
//       topic: "AI / ML",
//       image: lkc,
//       description: descriptionText,
//     },
//     {
//       id: 7,
//       location: "SDP-College, Ludhiana",
//       topic: "Digital Marketing & AI Marketing",
//       image: sdp,
//       description: descriptionText,
//     },
//     {
//       id: 8,
//       location: "Arya College, Ludhiana",
//       topic: "Cyber Security",
//       image: arya,
//       description: descriptionText,
//     },
//     {
//       id: 9,
//       location: "LPU, Punjab",
//       topic: "Cyber Security",
//       image: lpu,
//       description: descriptionText,
//     },
//     {
//       id: 10,
//       location: "Aman Bhalla , Pathankot",
//       topic: "AI Agents",
//       image: aman,
//       description: descriptionText,
//     },
//     {
//       id: 11,
//       location: "PIMT,Khanna",
//       topic: "Cyber Security",
//       image: pimt,
//       description: descriptionText,
//     },

//     {
//       id: 12,
//       location: "SBSSU, Ferozepur",
//       topic: "Digital Marketing & Generative AI",
//       image: sbssu,
//       description: descriptionText,
//     },
//     {
//       id: 13,
//       location: "Thapar Polytechnic College",
//       topic: "AI Agents",
//       image: thapar,
//       description: descriptionText,
//     },
//   ];

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             Our Workshops
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             <span className="font-medium">
//               Showcasing our journey: Browse through our impactful workshop
//               programs conducted for colleges, universities, and learners across
//               various institutions.
//             </span>
//           </p>
//         </div>

//         {/* Professional Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {workshopData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
//             >
//               {/* Image Section */}
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.topic}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* Content Section */}
//               <div className="p-8 flex flex-col flex-grow">
//                 {/* Location */}
//                 <div className="flex items-center gap-2 text-blue-600 mb-3">
//                   <MapPin size={16} className="shrink-0" />
//                   <span className="font-bold text-xs uppercase tracking-widest">
//                     {item.location}
//                   </span>
//                 </div>

//                 {/* Topic Title */}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Workshop on {item.topic}
//                 </h3>

//                 {/* Description - Fixed to 2 lines */}
//                 <p className="text-gray-500 text-sm leading-relaxed line-clamp-5 text-justify">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Workshop;






























import React from "react";
import { MapPin } from "lucide-react";

import lkc from "../assets/workshops/lkcworkshop.jpg";
import iet from "../assets/workshops/iet.jpg";
import as from "../assets/workshops/as.jpg";
import aryawomen from "../assets/workshops/aryawomen.jpg";
import sdp from "../assets/workshops/sdpworksjop.jpg";
import arya from "../assets/workshops/arya.png";
import lpu from "../assets/workshops/lpu.png";
import aman from "../assets/workshops/aman.jpg";
import pimt from "../assets/workshops/pimt.jpg";
import sbssu from "../assets/workshops/sbssu.png";
import thapar from "../assets/workshops/thapar.png";
import askhanna from "../assets/workshops/askhanna.jpg"
import bbsbec from "../assets/workshops/bbsbec.png"
import davjalandhar from "../assets/workshops/davjalandhar.png"
import ggiamritsar from "../assets/workshops/ggiamritsar.png"
import askhannac from "../assets/workshops/askhannac.png"


const Workshop = () => {
  const workshopData = [
    { id: 1, college: "LKC, Jalandhar", topic: "AI Agents", image: lkc },
    {
      id: 2,
      college: "IET Bhaddal",
      topic: "Generative AI",
      image: iet,
    },
    { id: 3, college: "AS Group of Institute", topic: "AI/ML", image: as },
    {
      id: 4,
      college: "Arya College for Women, Ludhiana",
      topic: "Digital Marketing",
      image: aryawomen,
    },
    {
      id: 5,
      college: "BBSBEC, Bathinda",
      topic: "Cyber Security",
      image: bbsbec,
    },
    { id: 6, college: "AS College, Khanna", topic: "AI/ML", image: askhanna },
    {
      id: 7,
      college: "SDP College, Ludhiana",
      topic: "Digital Marketing & AI Marketing",
      image: sdp,
    },
    {
      id: 8,
      college: "Arya College, Ludhiana",
      topic: "Cyber Security",
      image: arya,
    },
    { id: 9, college: "LPU, Jalandhar", topic: "Cyber Security", image: lpu },
    {
      id: 10,
      college: "Aman Bhalla Group of Institutes, Pathankot",
      topic: "AI Agents",
      image: aman,
    },
    {
      id: 11,
      college: "SBSSU, Ferozepur",
      topic: "Digital Marketing & Generative AI",
      image: sbssu,
    },
    {
      id: 12,
      college: "Thapar Polytechnic College",
      topic: "AI Agents",
      image: thapar,
    },
    {
      id: 13,
      college: "DAVIET , Jalandhar",
      topic: "AI Agents",
      image: davjalandhar,
    },
    {
      id: 14,
      college: "GGI, Amritsar",
      topic: "AI Agents",
      image: ggiamritsar,
    },
    {
      id: 15,
      college: "AS College, Khanna ",
      topic: "Cybersecurity",
      image: askhannac,
    },
  ];

  const renderDescription = (item) => {
    // Links and names for reuse
    const AshishJalota = (
      <a
        href="https://www.linkedin.com/in/ashishjalota/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Ashish Jalota
      </a>
    );
    const HaseenKumar = (
      <a
        href="https://www.linkedin.com/in/haseen-kumar-469766245/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Haseen Kumar
      </a>
    );
    const JaspreetSingh = (
      <a
        href="https://www.linkedin.com/in/jaspreet-infosec/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Jaspreet Singh
      </a>
    );
    const LuxmanChauhan = (
      <a
        href="https://www.linkedin.com/in/luxman-chauhaan-070729285/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Luxman Chauhan
      </a>
    );

    const AnshuAneja = (
      <a
        href="https://www.linkedin.com/in/anshuaneja/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Anshu Aneja
      </a>
    );

    const Tanvir = (
      <a
        href="https://www.linkedin.com/in/tanvir1804-/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold "
      >
        Tanvir
      </a>
    );

    if (item.college === "LKC, Jalandhar") {
      return (
        <>
          Lyallpur Khalsa College Jalandhar honoured {AshishJalota} (CEO of ANSH
          InfoTech) and {HaseenKumar} (Data Analyst). They conducted a
          highly impactful workshop on AI Agents, focusing on real-world
          applications and industry-driven innovation.
        </>
      );
    }

    if (item.college === "IET Bhaddal") {
      return (
        <p>
          The AIT team conducted an advanced workshop on Generative AI at IET
          Bhaddal, with expert guidance from {AshishJalota} (CEO of ANSH
          Infotech), {HaseenKumar} (Data Analyst), and {JaspreetSingh}{" "}
          (CTO of ANSH InfoTech), delivering deep insights into LLMs and creative AI
          technologies.
        </p>
      );
    }

    if (item.college === "AS Group of Institute") {
      return (
        <p>
          A specialized session on AI/ML was held for the students, where{" "}
          {AshishJalota} (CEO of ANSH InfoTech) and {LuxmanChauhan} (Sr. AI/ML Engineer) demonstrated the power of data-driven decision-making and
          modern machine learning algorithms.
        </p>
      );
    }

    // --- NEW UNIQUE CONTENT FOR REMAINING COLLEGES ---

    if (item.college === "Arya College for Women, Ludhiana") {
      return (
        <p>
          Arya college for women honoured, {AshishJalota} (CEO of ANSH
          InfoTech). After that , delivered a session on Digital Marketing
          strategies, focusing on personal branding, SEO, and the evolving
          landscape of social media business growth, inspiring students with
          practical industry insights.
        </p>
      );
    }

    if (item.college === "BBSBEC, Bathinda") {
      return (
        <p>
          During this intensive technical workshop, {JaspreetSingh} (CTO of ANSH
          InfoTech) along with {AnshuAneja} (Director of ANSH InfoTech) led a
          workshop on Cyber Security, teaching students about ethical hacking,
          network defense, and the critical importance of digital infrastructure
          protection in the modern era.
        </p>
      );
    }

    if (item.college === "AS College, Khanna") {
      return (
        <p>
          The AIT team successfully conducted an AI/ML workshop at AS College
          with the objective of providing students practical exposure to modern
          technologies. {LuxmanChauhan} (Sr. AI/ML Engineer) who explained core concepts
          of Artificial Intelligence and Machine Learning . Students were
          introduced to real-world use-cases and industry-relevant applications
          of AI/ML.
        </p>
      );
    }

    if (item.college === "SDP College, Ludhiana") {
      return (
        <p>
          Exploring the intersection of creativity and technology,{" "}
          {AshishJalota} (CEO of ANSH InfoTech) and {LuxmanChauhan} (Sr. AI/ML
          Engineer) conducted a workshop on how AI is revolutionizing Marketing,
          covering automated campaigns and data-backed consumer insights,
          strengthening marketing strategies with intelligent automation.
        </p>
      );
    }

    if (item.college === "Arya College, Ludhiana") {
      return (
        <p>
          Focusing on the dark side of the web, {Tanvir} (Cyber Security
          Expert), along with {AnshuAneja} (Director of ANSH InfoTech) and{" "}
          {AshishJalota}
          (CEO of ANSH InfoTech), conducted a comprehensive Cyber Security
          workshop. The session covered real-world cyber threats and ethical
          hacking concepts, enhancing participants’ awareness of digital
          security practices.
        </p>
      );
    }

    if (item.college === "LPU, Jalandhar") {
      return (
        <p>
          At one of India’s largest universities, the AIT team, led by{" "}
          {AshishJalota} , {AnshuAneja}(Directors of ANSH InfoTech) and{" "}
          {JaspreetSingh} (CTO of ANSH InfoTech), conducted an advanced Cyber
          Security workshop where students were exposed to cutting-edge cyber
          security frameworks, globally accepted standards, and long-term career
          prospects in the field of Information Security.
        </p>
      );
    }

    if (item.college === "Aman Bhalla Group of Institutes, Pathankot") {
      return (
        <p>
          The workshop at Aman Bhalla focused on the future of automation.{" "}
          {LuxmanChauhan} (Sr. AI/ML Engineer) along with {AshishJalota} (CEO of ANSH InfoTech) showcased how AI Agents can
          perform complex tasks autonomously, inspiring students to build their
          own intelligent systems.
        </p>
      );
    }

    

    if (item.college === "SBSSU, Ferozepur") {
      return (
        <p>
          A futuristic session on the fusion of Generative AI and Marketing.{" "}
          {AshishJalota} (CEO of ANSH InfoTech) along with {HaseenKumar} (Data Analyst) demonstrated how tools like ChatGPT and Midjourney are
          being used by global brands to reshape the digital marketing industry.
        </p>
      );
    }

    if (item.college === "Thapar Polytechnic College") {
      return (
        <p>
          The AIT team conducted an advanced workshop on AI agents at Thapar
          Polytechnic College, by the {AshishJalota} (CEO of ANSH InfoTech)
          along with {AnshuAneja} (director of Ansh InfoTech) providing
          participants with real-world insights into autonomous AI solutions and
          intelligent agent architectures.{" "}
        </p>
      );
    }

    if (item.college === "DAVIET , Jalandhar") {
      return (
        <p>
          At DAVIET, Jalandhar, a technical session on AI Agents was
          conducted by the AIT Team, led by {AnshuAneja} (Director of ANSH
          InfoTech) and {JaspreetSingh} (CTO of ANSH InfoTech). The session
          focused on autonomous agent architectures and their role in enterprise
          automation, offering students insights into the evolving landscape and
          future of AI.
        </p>
      );
    }

    if (item.college === "GGI, Amritsar") {
      return (
        <p>
          The AIT team conducted an insightful workshop at GGI Amritsar, where {" "}
          {AnshuAneja} (Director of ANSH InfoTech) and {JaspreetSingh} (CTO of
          ANSH InfoTech) demonstrated the practical implementation of AI Agents.
          The session bridged the gap between theoretical models and
          industry-ready autonomous systems, empowering students with
          cutting-edge technical expertise.
        </p>
      );
    }

    if (item.college === "AS College, Khanna ") {
      return (
        <p>
          Focusing on the domain of digital defense, {JaspreetSingh} (CTO of
          ANSH InfoTech), along with {AshishJalota} (CEO of ANSH InfoTech),
          delivered a workshop on Cybersecurity. The session emphasized areas
          such as VAPT, ethical hacking, price tampering prevention, and threat
          mitigation strategies, along with evolving security protocols for
          safeguarding modern today’s IT infrastructure.
        </p>
      );
    }

    // Default
    return (
      <>
        {item.college} successfully hosted a professional workshop on{" "}
        <b>{item.topic}</b>, providing students with hands-on exposure and
        practical industry knowledge.
      </>
    );
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Workshops
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="max-w-3xl mx-auto text-lg font-semibold text-gray-600">
            Showcasing our journey: Browse through our impactful workshop
            programs conducted for colleges and universities across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {workshopData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.topic}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="pt-8 pl-8 pr-8 pb-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <MapPin size={16} />
                  <span className="font-bold text-xs uppercase tracking-widest">
                    {item.college}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Workshop on {item.topic}
                </h3>

                <div className="text-gray-500 text-sm leading-relaxed text-justify">
                  {renderDescription(item)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshop;