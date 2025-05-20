import React, { useState } from 'react';
import { 
  Code, Database, Server, 
  Hash, BarChart2, Wrench, 
  GitBranch, Briefcase 
} from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
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
      icon: <Code className="mr-2" size={20} />,
      skills: [
        { name: "Python", level: 80 },
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Solidity", level: 75 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      name: "Blockchain",
      icon: <Hash className="mr-2" size={20} />,
      skills: [
        { name: "Smart Contracts", level: 85 },
        { name: "Cryptography", level: 80 },
        { name: "Hedera Hashgraph", level: 75 },
        { name: "DLTs", level: 85 }
      ]
    },
    {
      name: "Business Intelligence",
      icon: <BarChart2 className="mr-2" size={20} />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "DAX", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "ETL", level: 75 }
      ]
    },
    {
      name: "Tools",
      icon: <Wrench className="mr-2" size={20} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Postman", level: 80 },
        { name: "JIRA", level: 75 },
        { name: "Google Cloud", level: 70 },
        { name: "Project IDX", level: 75 },
        { name: "Beyond Compare", level: 70 },
        { name: "Microsoft Office", level: 80 }
      ]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="mr-2" size={20} />,
      skills: [
        { name: "Bitbucket", level: 80 },
        { name: "SourceTree", level: 75 },
        { name: "AWS CodePipeline", level: 70 }
      ]
    },
    {
      name: "Methodologies",
      icon: <Briefcase className="mr-2" size={20} />,
      skills: [
        { name: "Agile", level: 85 },
        { name: "SDLC", level: 80 },
        { name: "TDD", level: 75 },
        { name: "Object-Oriented Design", level: 80 }
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
                    className={`flex items-center w-full text-left px-6 py-4 transition-colors ${
                      activeCategory === index
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-9">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                {skillCategories[activeCategory].icon}
                <span className="ml-2">{skillCategories[activeCategory].name}</span>
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