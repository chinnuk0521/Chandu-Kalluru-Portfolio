import React, { useState } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
};

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      title: "Project Associate - Research & Development",
      company: "Indian Institute of Technology, Madras (CyStar Lab)",
      location: "Chennai, Tamil Nadu, India",
      period: "January 2025 - Present",
      type: "Full-time",
      description: [
        "Lead research on Blockchain Technology and Distributed Ledger Technologies (DLTs).",
        "Design and deploy Smart Contracts for enterprise use cases.",
        "Implement cryptographic techniques for data integrity and security.",
        "Mentor 4 interns across different Blockchain Research Projects.",
        "Collaborate with Cross-Functional Teams to develop innovative solutions.",
      ],
      skills: [
        "Blockchain",
        "DLTs",
        "Smart Contracts",
        "Cryptography",
        "Hedera Hashgraph",
      ],
    },
    {
      title: "Power BI Developer",
      company: "Freelance",
      location: "Remote",
      period: "May 2023 - Present",
      type: "Freelance",
      description: [
        "Developed and deployed dynamic Power BI dashboards to analyze business performance, sales trends, and financial metrics.",
        "Integrated multiple data sources, including SQL databases, Excel, and cloud platforms.",
        "Created custom DAX measures to enhance analytical capabilities and deliver accurate insights.",
        "Optimized data models and reports for performance efficiency and seamless user experience.",
        "Automated reporting processes, reducing manual effort and enhancing real-time decision-making.",
      ],
      skills: ["Power BI", "DAX", "Data Modeling", "ETL", "Data Visualization"],
    },
    {
      title: "Software Engineer",
      company: "Crystal Lotus Solutions",
      location: "Bengaluru, Karnataka, India",
      period: "June 2024 - December 2024",
      type: "Full-time",
      description: [
        "Developed applications using Python, SQL & JavaScript with clean, scalable code.",
        "Designed and optimized ETL pipelines and performed data transformation and validation.",
        "Improved business processes by 20% and reduced system downtime by 30%.",
        "Managed deployments using Git, Bitbucket, and SourceTree.",
        "Built backend services and integrated databases (Microsoft SQL Server).",
      ],
      skills: ["JavaScript", "Python", "SQL", "ETL", "Git", "Bitbucket"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`block w-full text-left px-6 py-4 transition-colors ${
                      activeTab === index
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <p className="font-medium">{exp.title}</p>
                    <p className="text-sm opacity-80">{exp.company}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="bg-gray-900 p-8 rounded-lg">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    activeTab === index
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3 text-gray-200">
                      Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-gray-200">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
