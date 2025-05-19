import React from "react";
import { BookOpen, Code, Database, Network } from "lucide-react";

const About: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Network size={24} />,
      title: "Blockchain Technology",
      description:
        "Research and development in blockchain technologies, smart contracts, and decentralized applications.",
    },
    {
      icon: <Database size={24} />,
      title: "Data Visualization",
      description:
        "Creating interactive dashboards and reports using Power BI with advanced DAX calculations.",
    },
    {
      icon: <Code size={24} />,
      title: "Software Engineering",
      description:
        "Developing scalable applications with JavaScript, React, Python, and database integration.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Research & Innovation",
      description:
        "Exploring advancements in DLTs and their practical applications in enterprise solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Research & Development Innovator at IIT Madras
            </h3>
            <p className="text-gray-300 mb-6">
              As a Project Associate in the CSE department at IIT Madras, I work
              in the
              <strong>
                {" "}
                Centre for Cybersecurity, Trust and Reliability (CyStar) lab
              </strong>
              . My focus is on blockchain technology and distributed ledger
              technologies (DLTs), contributing to innovative solutions that
              enhance security, transparency, and efficiency in data management.
            </p>
            <p className="text-gray-300 mb-6">
              My work involves researching and developing blockchain-based
              applications that optimize complex business processes,
              implementing smart contracts, and ensuring data integrity through
              cryptographic techniques.
            </p>
            <p className="text-gray-300">
              With a strong foundation in software engineering and hands-on
              experience in both Salesforce and blockchain technologies, I excel
              at translating complex business requirements into scalable,
              user-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-4 text-blue-400">
                  {area.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
