import React, { useState } from 'react';

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Solidity", level: 75 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      name: "Blockchain",
      skills: [
        { name: "Smart Contracts", level: 85 },
        { name: "Cryptography", level: 80 },
        { name: "Hedera Hashgraph", level: 75 },
        { name: "DLTs", level: 85 },
        { name: "Web3.js/Ethers.js", level: 70 }
      ]
    },
    {
      name: "Business Intelligence",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "DAX", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "ETL Processes", level: 75 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      name: "Tools & Methods",
      skills: [
        { name: "Git/Version Control", level: 85 },
        { name: "Agile/SDLC", level: 80 },
        { name: "JIRA", level: 75 },
        { name: "Google Cloud", level: 70 },
        { name: "TDD/Object-Oriented Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`block w-full text-left px-6 py-4 transition-colors ${
                      activeCategory === index 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {skillCategories[activeCategory].name}
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;