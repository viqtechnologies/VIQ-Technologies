import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

const Biography = ({ certifications }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
            <span className="h-8 w-1.5 bg-blue-600 rounded-full"></span>
            Professional Journey
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-[16px] text-justify">
            <p>
              Jaspreet Grewal brings over 4+ years of experience with ANSH
              InfoTech, leading technology strategy, cybersecurity initiatives,
              and engineering operations. He holds a{" "}
              <strong>Master of Computer Applications (MCA) </strong>
              from I.K. Gujral Punjab Technical University and has developed
              strong expertise in cybersecurity, DevOps engineering, cloud
              infrastructure, and enterprise deployments.
            </p>
            <p>
              Under his leadership, ANSH InfoTech continues to deliver
              innovative and secure IT solutions while maintaining strong
              standards in cybersecurity, cloud infrastructure, and engineering
              excellence. His core focus includes{" "}
              <strong>
                Vulnerability Assessment and Penetration Testing (VAPT) web
                application security, cloud-based infrastructure, and DevSecops
                implementation.
              </strong>
            </p>
            <p>
              He has designed and implemented modern CI/CD pipelines and
              automated deployment frameworks using platforms such as{" "}
              <strong>
                {" "}
                AWS, Linux environments, Docker, GitHub, GitLab, and Jenkins
              </strong>
              , enabling secure and efficient software delivery. In addition to
              his technical leadership, Jaspreet actively contributes to the
              cybersecurity community. He has earned professional certifications
              from globally recognized organizations including
              <strong>
                {" "}
                Google Cybersecurity, IBM Cybersecurity Analyst, AWS Solutions
                Architect, and Burp Suite Professional (PortSwigger)
              </strong>
              , along with hands-on training through TryHackMe and exposure to
              security platforms such as Qualys and EC-Council.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 mt-10 flex items-center gap-3 text-justify">
            <Award className="text-blue-600" /> Certifications & Community
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-600 font-semibold text-sm">
                  {cert}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Academic Excellence
            </p>
            <p className="text-blue-600 font-bold">MCA | I.K. Gujral PTU</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Biography;
