// import React from "react";
// import { MapPin, Calendar } from "lucide-react";

// // Placeholder imports - Update these paths with your actual image files
// import ctVisit from "../assets/events/ct2.jpg";
// import asCollegeMou from "../assets/events/as.jpg";
// import kcwVisit from "../assets/events/kcw.jpg";
// import diwaliCelebration from "../assets/events/diwali.jpg";
// import gcgMou from "../assets/events/gcg.png";
// import mouct from "../assets/events/mouct.png"
// import sdp from "../assets/events/sdp.png"
// const Events = () => {
//   const eventData = [
//     {
//       id: 1,
//       location: "Ansh InfoTech, Ludhiana",
//       title: "CT University Directors Visit",
//       image: ctVisit,
//       description:
//         "We were honored to host <b>Mr. Pankaj Jain</b> (Director, TPC) and <b>Mr. Gaurav Kapoor</b> (Deputy Director, TPC) from CT University at our office. The visit focused on strengthening industry-academic ties and exploring advanced training methodologies for upcoming drives.",
//     },
//     {
//       id: 2,
//       location: "AS College, Khanna",
//       title: "MOU Signing ",
//       image: asCollegeMou,
//       description:
//         "A milestone collaboration was established as AS College, Khanna, officially signed an MOU with ANSH InfoTech. The agreement was formalized by AIT Directors, <b> Ashish Jalota</b> and <b> Anshu Aneja</b>, aiming to provide students with high-end technical certifications and industrial exposure.",
//     },
//     {
//       id: 3,
//       location: "Ansh InfoTech, Ludhiana",
//       title: "KCW Industrial Visit",
//       image: kcwVisit,
//       description:
//         "Students & Facilities from <b>Khalsa College for Women (KCW)</b> participated in a comprehensive industrial visit at ANSH InfoTech. The session offered students a deep dive into professional software development environments, UI/UX workflows, and the practical application of modern tech stacks.",
//     },
//     {
//       id: 4,
//       location: "AIT Office",
//       title: "Diwali 2025 Celebration",
//       image: diwaliCelebration,
//       description:
//         "The spirit of light and togetherness was celebrated at ANSH InfoTech during our <b>Diwali 2025</b> festivities. The event featured team-building activities, traditional décor, and a reflection on our yearly achievements, fostering a vibrant and positive work culture.",
//     },
//     {
//       id: 5,
//       location: "GCG College, Ludhiana",
//       title: "MOU Signing",
//       image: gcgMou,
//       description:
//         "ANSH InfoTech and <b> GCG </b> officially entered into a strategic partnership through an MOU signing, with <b> Ashish Jalota & Anshu Aneja (Directors of ANSH InfoTech) </b> signing the agreement. This initiative is designed to empower female students with industry-ready skills, internships, and specialized placement assistance in the IT sector.",
//     },

//     {
//       id: 6,
//       location: "CT, University",
//       title: "MOU Signing",
//       image: mouct,
//       description:
//         "ANSH InfoTech and <b>CT University</b> formalized a strategic partnership through an MOU signing ceremony, with <b>Anshu Aneja (Director of ANSH InfoTech)</b> signing the agreement. This collaboration focuses on enhancing students industry readiness through training, internships, and dedicated placement support.",
//     },
//     {
//       id: 7,
//       location: "SDP, Ludhiana",
//       title: "SDP Industrial Visit",
//       image: sdp,
//       description:
//         "Students and faculty from <b>SDP college for Women, Ludhiana</b> visited the ANSH InfoTech office for an industrial visit . The visit provided them with valuable exposure to a professional IT working environment, where they learned about real-world projects, development processes, and industry practices. ",
//     },
//   ];

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             Events & Collaborations
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             <span className="font-medium">
//               Glimpses of our vibrant journey: From strategic academic
//               partnerships and industrial visits to cultural celebrations that
//               define our core values.
//             </span>
//           </p>
//         </div>

//         {/* Professional Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {eventData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
//             >
//               {/* Image Section */}
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
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

//                 {/* Event Title */}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p
//                   className="text-gray-500 text-sm leading-relaxed line-clamp-7 text-justify"
//                   dangerouslySetInnerHTML={{ __html: item.description }}
//                 ></p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;

import React from "react";
import { MapPin } from "lucide-react";
import ctVisit from "../assets/events/ct23.webp";
import asCollegeMou from "../assets/events/as.jpg";
import kcwVisit from "../assets/events/kcw.jpg";
import diwaliCelebration from "../assets/events/diwali.jpg";
import gcgMou from "../assets/events/gcg.png";
import mouct from "../assets/events/mouct.png";
import sdp from "../assets/events/sdp.png";
import mmu from "../assets/events/mmu.png";
import fresco from "../assets/events/fresco.png";

const Events = () => {
  const eventData = [
    {
      id: 1,
      location: "Ansh InfoTech, Ludhiana",
      title: "CT University Directors Visit",
      image: ctVisit,
    },
    {
      id: 2,
      location: "AS College, Khanna",
      title: "MOU Signing Ceremony",
      image: asCollegeMou,
    },
    {
      id: 3,
      location: "Ansh InfoTech, Ludhiana",
      title: "KCW Industrial Visit",
      image: kcwVisit,
    },
    {
      id: 4,
      location: "AIT Office",
      title: "Diwali 2025 Celebration",
      image: diwaliCelebration,
    },
    {
      id: 5,
      location: "GCG College, Ludhiana",
      title: "Strategic MOU Signing",
      image: gcgMou,
    },
    {
      id: 6,
      location: "CT University",
      title: "Academic Partnership MOU",
      image: mouct,
    },
    {
      id: 7,
      location: "SDP, Ludhiana",
      title: "SDP Industrial Visit",
      image: sdp,
    },
    {
      id: 8,
      location: "MMU , Mulana",
      title: "CTF Competition at MMU",
      image: mmu,
    },
    {
      id: 9,
      location: "ANSH InfoTech, Ludhiana",
      title: "Fresco 2025 Celebration",
      image: fresco,
    },
  ];

  const renderDescription = (item) => {
    // LinkedIn Mention Components
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
    const AnshuAneja = (
      <a
        href="https://www.linkedin.com/in/anshuaneja/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold"
      >
        Anshu Aneja
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

    if (item.title === "CT University Directors Visit") {
      return (
        <p>
          We were honored to host{" "}
          <span className="font-bold text-blue-600">Mr. Pankaj Jain</span>{" "}
          (Director, TPC) and{" "}
          <span className="font-bold text-blue-600">Mr. Gaurav Kapoor</span>{" "}
          (Deputy Director, TPC) from{" "}
          <span className="font-bold text-blue-600">CT University</span> at
          our office. The visit focused on strengthening industry-academic ties
          and exploring advanced training methodologies.
        </p>
      );
    }

    if (item.title === "MOU Signing Ceremony") {
      return (
        <p>
          A milestone collaboration was established as{" "}
          <span className="font-bold text-blue-600">AS College, Khanna</span>{" "}
          officially signed an MOU with ANSH InfoTech. The agreement was
          formalized by AIT Directors, {AshishJalota} and {AnshuAneja}, aiming
          to provide students with high-end technical certifications and
          industrial exposure.
        </p>
      );
    }

    if (item.title === "KCW Industrial Visit") {
      return (
        <p>
          Students & Faculty from{" "}
          <span className="font-bold text-blue-600">
            Khalsa College for Women (KCW)
          </span>{" "}
          participated in a comprehensive industrial visit at ANSH InfoTech. The
          session offered a deep dive into professional software development
          environments, UI/UX workflows, and the practical application of modern
          tech stacks.
        </p>
      );
    }

    if (item.title === "Diwali 2025 Celebration") {
      return (
        <p>
          The spirit of light and togetherness was celebrated at ANSH InfoTech
          during our{" "}
          <span className="font-bold text-blue-600">Diwali 2025</span>{" "}
          festivities. The event featured team-building activities and a
          reflection on our yearly achievements, fostering a vibrant work
          culture.
        </p>
      );
    }

    if (item.title === "Strategic MOU Signing") {
      return (
        <p>
          ANSH InfoTech and{" "}
          <span className="font-bold text-blue-600">
            Government College for Girls
          </span>{" "}
          officially entered into a strategic partnership. The MOU was signed by{" "}
          {AshishJalota} & {AnshuAneja} (Directors of ANSH InfoTech) to empower
          female students with industry-ready skills and specialized placement
          assistance.
        </p>
      );
    }

    if (item.title === "Academic Partnership MOU") {
      return (
        <p>
          ANSH InfoTech and{" "}
          <span className="font-bold text-blue-600">CT University</span>{" "}
          formalized a strategic partnership through an MOU signing ceremony,
          with {AnshuAneja} (Director of ANSH Infotech) signing the agreement. This collaboration focuses on
          enhancing students industry readiness through training and
          internships.
        </p>
      );
    }

    if (item.title === "SDP Industrial Visit") {
      return (
        <p>
          Students and faculty from{" "}
          <span className="font-bold text-blue-600">
            SDP College for Women, Ludhiana
          </span>{" "}
          visited the ANSH InfoTech office. The visit provided valuable exposure
          to a professional IT working environment, covering real-world projects
          and modern development processes.
        </p>
      );
    }

    

    if (item.title === "CTF Competition at MMU") {
      return (
        <p>
          ANSH InfoTech organized a CTF competition at Maharishi Markandeshwar
          University (MMU), Mullana, hosted by {AshishJalota} and{" "}
          {JaspreetSingh}. The event provided students with hands-on exposure to
          real-world security challenges, strengthening their analytical
          thinking, problem-solving skills and cyber defense techniques.
        </p>
      );
    }


     if (item.title === "Fresco 2025 Celebration") {
       return (
         <p>
           The <span className="font-bold text-blue-600">ANSH InfoTech Team</span>{" "}
           celebrated Fresco 2025 with enthusiasm and team spirit. The
           event brought together our professionals for an evening of
           celebration, collaboration. The gathering highlighted our strong work
           culture and commitment to growth, reinforcing the values that drive
           innovation and teamwork.
         </p>
       );
     }

    return (
      <p>
        Collaborative event held at {item.location} focusing on industry growth.
      </p>
    );
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Events & Collaborations
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            <span className="font-medium">
              Glimpses of our vibrant journey: From strategic academic
              partnerships and industrial visits to cultural celebrations.
            </span>
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 "
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <MapPin size={16} className="shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-widest">
                    {item.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
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

export default Events;