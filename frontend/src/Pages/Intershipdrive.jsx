// import React from "react";
// import { MapPin } from "lucide-react";

// import ggi from "../assets/drive/ggidrive.jpg"
// import pcte from "../assets/drive/pctedrive.jpg"
// import sbssu from "../assets/drive/sbssu.png"
// import ct from "../assets/drive/ct.png"
// const InternshipDrive = () => {

//   const driveData = [
//     {
//       id: 1,
//       location: "GGI, Ludhiana",
//       company: "Intership Drive 2025",
//       image: ggi,
//       description:
//         "Our recruitment team visited our partner campus, Gulzar Group of Institutions, to conduct a placement drive aimed at identifying promising talent. The drive witnessed enthusiastic participation from students. Several candidates were shortlisted after a structured evaluation process.",
//     },
//     {
//       id: 2,
//       location: "PCTE, Ludhiana",
//       company: "Placement Drive 2024",
//       image: pcte,
//       description:
//         "ANSH InfoTech conducted a successful Internship & Placement Drive at its partner campus, PCTE Ludhiana. The drive saw enthusiastic participation from students, where talented candidates were evaluated and shortlisted. Selected students were offered opportunities to work on real-world, industry-level projects using modern technologies.",
//     },
//     {
//       id: 3,
//       location: "SBSSU, Ferozepur",
//       company: "Placement Drive 2025",
//       image: sbssu,
//       description:
//         "ANSH InfoTech conducted a successful Placement Drive 2025 at its partner campus SBSSU Ferozepur, where students were evaluated and selected for internship opportunities. The drive aimed to identify talented individuals and provide them with industry-focused exposure and real-world project experience.",
//     },
//     {
//       id: 4,
//       location: "CT, University",
//       company: "Placement Drive 2024",
//       image: ct,
//       description:
//        "ANSH InfoTech proudly participated in the Mega Job Fair organized by CT University We were invited to connect with enthusiastic students exploring opportunities in Cyber Security, Cloud Computing, Data Science, Data Analytics, Digital Marketing, Web Development, Artificial Intelligence, and Machine Learning."
//        },
//   ];

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             Our Internship / Placement Drives
//           </h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             <span className="font-medium">
//               Connecting talent with opportunity: Take a look at our recruitment
//               drives conducted across various prestigious colleges and
//               universities to build the next generation of tech leaders.
//             </span>
//           </p>
//         </div>

//         {/* Professional Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {driveData.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
//             >
//               {/* Image Section */}
//               <div className="h-60 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.location}
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

//                 {/* Drive Title */}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {item.company}
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

// export default InternshipDrive;

import React from "react";
import { MapPin } from "lucide-react";

import ggi from "../assets/drive/ggidrive.jpg";
import pcte from "../assets/drive/pctedrive.jpg";
import sbssuImg from "../assets/drive/sbssu.png"; 
import ct from "../assets/drive/ct.png";
import dav from "../assets/drive/dav.jpeg";


const InternshipDrive = () => {
  const driveData = [
    {
      id: 1,
      location: "GGI, Ludhiana",
      company: "Internship Drive 2025",
      image: ggi,
    },
    {
      id: 2,
      location: "PCTE, Ludhiana",
      company: "Placement Drive 2024",
      image: pcte,
    },
    {
      id: 3,
      location: "SBSSU, Ferozepur",
      company: "Placement Drive 2025",
      image: sbssuImg,
    },
    {
      id: 4,
      location: "CT University, Ludhiana",
      company: "Placement Drive 2025",
      image: ct,
    },
    {
      id: 5,
      location: "DAV University, Jalandhar",
      company: "Internship Drive 2025",
      image: dav,
    },
  ];

  const renderDescription = (item) => {
    // Shared Person Components
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
        className="text-blue-600 font-semibold "
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

    if (item.location === "GGI, Ludhiana") {
      return (
        <p>
          Our recruitment team, led by {AshishJalota} (CEO of ANSH InfoTech) and{" "}
          {JaspreetSingh} (CTO of ANSH InfoTech), visited our partner campus,
          Gulzar Group of Institutions, to conduct a placement drive aimed at
          identifying promising talent. The drive witnessed enthusiastic
          participation from students, and several candidates were shortlisted
          after a structured evaluation process.
        </p>
      );
    }

    if (item.location === "PCTE, Ludhiana") {
      return (
        <p>
          ANSH InfoTech conducted a successful Internship & Placement Drive at
          Punjab College of Technical Education. Under the supervision
          of {AnshuAneja} & {AshishJalota} (Directors of ANSH InfoTech) and their
          technical team, talented candidates were evaluated and offered
          opportunities to work on real-world, industry-level projects using
          modern technologies.
        </p>
      );
    }

    if (item.location === "SBSSU, Ferozepur") {
      return (
        <p>
          ANSH InfoTech conducted a successful Placement Drive 2025 at Shaheed
          Bhagat Singh State University. The drive was led by {AshishJalota}
          (CEO of ANSH Infotech) and {JaspreetSingh} (CTO of ANSH InfoTech),
          along with the recruitment team, focusing on identifying talented
          individuals to provide them with industry-focused exposure and
          real-world project experience in AI and Software Development.
        </p>
      );
    }

    if (item.location === "CT University, Ludhiana") {
      return (
        <p>
          ANSH InfoTech proudly participated in the Mega Job Fair at CT
          University. The event was led by {AshishJalota} (CEO of ANSH InfoTech)
          and {JaspreetSingh} (CTO of ANSH InfoTech), along with the recruitment
          team. They connected with students exploring opportunities in Cyber
          Security, Cloud Computing, Data Science, and AI/ML, helping bridge the
          gap between academic learning and industry exposure.
        </p>
      );
    }

    if (item.location === "DAV University, Jalandhar") {
      return (
        <p>
          ANSH InfoTech successfully conducted the Internship Drive 2025 at DAV
          University, Jalandhar. Under the leadership of {AshishJalota} (CEO of
          ANSH InfoTech), along with their expert technical team.
          Selected candidates received exciting opportunities to gain hands-on
          industry experience and work on real-world projects involving advanced
          technologies across multiple domains.
        </p>
      );
    }

    // Default
    return <p>{item.location} hosted a successful drive with ANSH InfoTech.</p>;
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Internship / Placement Drives
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            <span className="font-medium">
              Connecting talent with opportunity: Take a look at our recruitment
              drives conducted across various prestigious colleges and
              universities to build the next generation of tech leaders.
            </span>
          </p>
        </div>

        {/* Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {driveData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.location}
                  className="w-full h-full object-cover object-[center_40%] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Location */}
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <MapPin size={16} className="shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-widest">
                    {item.location}
                  </span>
                </div>

                {/* Drive Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.company}
                </h3>

                {/* Description - Now using the render function */}
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

export default InternshipDrive;