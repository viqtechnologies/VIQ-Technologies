// import React from "react";
// import { MapPin, Newspaper as NewsIcon } from "lucide-react";

// import news1 from "../assets/news/sggs.jpg";
// import news2 from "../assets/news/mla.jpg";
// import news3 from "../assets/news/asgi.png";
// import news4 from "../assets/news/askhanna.png";
// import news5 from "../assets/news/modern.png"
// import news6 from "../assets/news/gcg.png"
// import news7 from "../assets/news/mata.png"
// import news8 from "../assets/news/ggne.png"
// import news9 from "../assets/news/pimt.png"
// const Newspaper = () => {
//   const newspaperData = [
//     {
//       id: 1,
//       location: "SGGSWU Campus",
//       title: "SGGSWU Inauguration & Innovation Club",
//       image: news1,
//       description:
//         "ANSH InfoTech was proud to be part of the <b>SGGSWU Inauguration</b> ceremony and the launch of the <b>Innovation Club</b>. This initiative aims to foster a spirit of research, creativity, and entrepreneurship among the students of Sri Guru Granth Sahib World University.",
//     },
//     {
//       id: 2,
//       location: "AIT Office, Ludhiana",
//       title: "Dignitaries Visit AIT Office",
//       image: news2,
//       description:
//         "We were honored to welcome <b>MLA Kulwant Singh Sidhu</b> and <b>Deputy Mayor Prince Johar</b> to our AIT office. The visit involved discussions regarding the enhancement of technical education and creating better employment opportunities for the youth in the IT sector.",
//     },
//     {
//       id: 3,
//       location: "AS Group of Institutions",
//       title: "Impact Lecture Series",
//       image: news3,
//       description:
//         "As part of the <b>Impact Lecture Series</b> at AS Group of Institutions, our experts shared valuable industry insights. The session focused on bridging the gap between academic learning and industrial requirements for future engineers.",
//     },
//     {
//       id: 4,
//       location: "AS College, Khanna",
//       title: "Digital Marketing Workshop",
//       image: news4,
//       description:
//         "A comprehensive <b>Digital Marketing Workshop</b> was conducted at AS College, Khanna. The workshop provided students with hands-on knowledge about digital marketing, social media strategies, and online branding for businesses.",
//     },
//     {
//       id: 5,
//       location: "Modern Group of Colleges, Mukerian",
//       title: "AI/ML Seminar",
//       image: news5,
//       description:
//         "A specialized seminar on <b>AI/ML</b> was conducted by ANSH InfoTech at Modern Group of Colleges. The session focused on the growing industry demand for <b>Python programming</b> and the role of AI in shaping future technical careers.",
//     },
//     {
//       id: 6,
//       location: "Government College for Girls",
//       title: "Cyber Security Workshop",
//       image: news6,
//       description:
//         "A comprehensive <b>Cyber Security Workshop</b> was conducted at GCG to raise awareness about online safety and digital threats.The workshop Led by <b>Ashish Jalota (CEO ANSH InfoTech)</b> and <b>Jaspreet Singh(Cyber Security Expert)</b>, the session provided students with practical tips for securing their personal information in the digital world.",
//     },
//     {
//       id: 7,
//       location: "Mata Gujri College, Fatehgarh Sahib",
//       title: "Interactive Session on AI",
//       image: news7,
//       description:
//         "An interactive session on <b>Artificial Intelligence and Deep Learning</b> was held at Mata Gujri College. The technical team from ANSH InfoTech, featuring <b>Ashish Jalota (CEO ANSH InfoTech)</b> and <b>Mohammad Fazal Zaman</b>, provided hands-on experience and discussed real-world applications of AI with students.",
//     },
//     {
//       id: 8,
//       location: "GGNIMT, Ludhiana",
//       title: "Cyber Security Workshop at GGNIMT",
//       image: news8,
//       description:
//         "A technical workshop on <b>Cyber Security</b> was held at Gujranwala Guru Nanak Institute of Management & Technology Ludhiana. The session focused on <b>online safety and digital security</b>, with the college director honoring the ANSH InfoTech team for their contribution to technical literacy.",
//     },

//   ];

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             News & Updates
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             <span className="font-medium">
//               Catch up on our latest media coverage, high-profile visits, and
//               contributions to the academic and social community through our
//               outreach programs.
//             </span>
//           </p>
//         </div>

//         {/* Professional Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {newspaperData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
//             >
//               {/* Image Section */}
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
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

//                 {/* News Title */}
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

// export default Newspaper;



import React from "react";
import { MapPin } from "lucide-react";

import news1 from "../assets/news/sggs.jpg";
import news2 from "../assets/news/mla.jpg";
import news3 from "../assets/news/asgi.png";
import news4 from "../assets/news/askhanna.png";
import news5 from "../assets/news/modern.png";
import news6 from "../assets/news/gcg.png";
import news7 from "../assets/news/mata.png";
import news8 from "../assets/news/ggne.png";
 import news9 from "../assets/news/ascollege1.jpg";

const Newspaper = () => {
  const newspaperData = [
    {
      id: 1,
      location: "SGGSWU Campus",
      title: "SGGSWU Inauguration & Innovation Club",
      image: news1,
    },
    {
      id: 2,
      location: "AIT Office, Ludhiana",
      title: "Dignitaries Visit AIT Office",
      image: news2,
    },
    {
      id: 3,
      location: "AS Group of Institutions",
      title: "Impact Lecture Series",
      image: news3,
    },
    {
      id: 4,
      location: "AS College, Khanna",
      title: "Digital Marketing Workshop",
      image: news4,
    },
    {
      id: 5,
      location: "Modern Group of College, Mukerian",
      title: "AI/ML Seminar",
      image: news5,
    },
    {
      id: 6,
      location: "Government College for Girls",
      title: "Cyber Security Workshop",
      image: news6,
    },
    {
      id: 7,
      location: "MGC, Fatehgarh Sahib",
      title: "Interactive Session on AI",
      image: news7,
    },
    {
      id: 8,
      location: "GGNIMT, Ludhiana",
      title: "Cyber Security Workshop at GGNIMT",
      image: news8,
    },
    {
      id: 9,
      location: "AS College, Khanna",
      title: "Cyber Security Workshop at AS College",
      image: news9,
    },
  ];

  const renderDescription = (item) => {
    // Helper for blue text (replaces the old <b> tag)
    const Highlight = ({ children }) => (
      <span className="text-blue-600 font-medium">{children}</span>
    );

    // Linked Names (Same as Internship Drive)
    const AshishJalota = (
      <a
        href="https://www.linkedin.com/in/ashishjalota/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium"
      >
        Ashish Jalota
      </a>
    );
    const JaspreetSingh = (
      <a
        href="https://www.linkedin.com/in/jaspreet-infosec/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium"
      >
        Jaspreet Singh
      </a>
    );

    switch (item.id) {
      case 1:
        return (
          <p>
            ANSH InfoTech was proud to be part of the{" "}
            <Highlight>SGGSWU Inauguration</Highlight> ceremony and the launch
            of the <Highlight>Innovation Club</Highlight>. This initiative aims
            to foster a spirit of research, creativity, and entrepreneurship
            among the students of Sri Guru Granth Sahib World University.
          </p>
        );
      case 2:
        return (
          <p>
            We were honored to welcome{" "}
            <Highlight>MLA Kulwant Singh Sidhu</Highlight> and{" "}
            <Highlight>Deputy Mayor Prince Johar</Highlight> to our AIT office.
            The visit involved discussions regarding the enhancement of
            technical education and creating better employment opportunities for
            the youth in the IT sector, fostering innovation and long-term
            industry collaboration.
          </p>
        );
      case 3:
        return (
          <p>
            As part of the <Highlight>Impact Lecture Series</Highlight> at{" "}
            <Highlight>AS Group of Institutions</Highlight>, our experts shared
            valuable industry insights. The session focused on bridging the gap
            between academic learning and industrial requirements for future
            engineers, equipping students with practical knowledge, career
            guidance, and real-world exposure.
          </p>
        );
      case 4:
        return (
          <p>
            A comprehensive <Highlight>Digital Marketing Workshop</Highlight>{" "}
            was conducted at <Highlight>AS College, Khanna</Highlight>. The workshop provided students
            with hands-on knowledge about digital marketing, social media
            strategies, and online branding for businesses.
          </p>
        );
      case 5:
        return (
          <p>
            A specialized seminar on <Highlight>AI/ML</Highlight> was conducted
            by ANSH InfoTech at<Highlight> Modern Group of Colleges</Highlight>.
            The session focused on the growing industry demand for{" "}
            <Highlight>Python programming</Highlight> and the role of AI in
            shaping future technical careers, preparing students to excel in
            emerging technology-driven industries.
          </p>
        );
      case 6:
        return (
          <p>
            A comprehensive <Highlight>Cyber Security Workshop</Highlight> was
            conducted at Government College for Girls to raise awareness about
            online safety and digital threats. Led by {AshishJalota} (CEO ANSH
            InfoTech) and {JaspreetSingh} (CTO of ANSH InfoTech), the session
            provided students with practical tips to strengthen their digital
            security awareness.
          </p>
        );
      case 7:
        return (
          <p>
            An interactive session on{" "}
            <Highlight>Artificial Intelligence and Deep Learning</Highlight> was
            held at Mata Gujri College. The technical team from ANSH InfoTech,
            featuring {AshishJalota} and <Highlight>{JaspreetSingh}</Highlight>,
            provided hands-on experience and discussed real-world applications
            of AI, highlighting emerging industry trends, career opportunities,
            and practical implementation strategies for students.
          </p>
        );
      case 8:
        return (
          <p>
            A technical workshop on <Highlight>Cyber Security</Highlight> was
            held at Gujranwala Guru Nanak Institute of Management & Technology
            Ludhiana. The session focused on{" "}
            <Highlight>online safety and digital security</Highlight>, with the
            college director honoring the team for their contribution,
            recognizing their efforts in promoting cybersecurity awareness and
            responsible digital practices among students.
          </p>
        );

      case 9:
        return (
          <p>
            A comprehensive workshop on <Highlight>Cyber Security</Highlight>{" "}
            was conducted at A.S. College, Khanna, 
            Led by
            <Highlight> {AshishJalota}</Highlight> and{" "}
            <Highlight>{JaspreetSingh} </Highlight>
            from ANSH InfoTech, the session focused on{" "}
            
              online safety, digital hygiene, and navigating modern cyber
              threats
            
            . College Secretary Ajay Sood honored the team for their valuable
            contribution to student awareness.
          </p>
        );
      default:
        return (
          <p>{item.location} hosted a successful event with ANSH InfoTech.</p>
        );
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            News & Updates
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            <span className="font-medium">
              Catch up on our latest media coverage, high-profile visits, and
              contributions to the academic and social community through our
              outreach programs.
            </span>
          </p>
        </div>

        {/* Professional Grid (Same as Internship Drive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newspaperData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-70 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Location */}
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <MapPin size={16} className="shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-widest">
                    {item.location}
                  </span>
                </div>

                {/* News Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description - Using the blue highlight logic */}
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

export default Newspaper;