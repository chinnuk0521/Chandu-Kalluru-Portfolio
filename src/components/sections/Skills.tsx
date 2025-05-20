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
    icon: React.ReactNode;
  }[];
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming",
      icon: <Code className="mr-2" size={20} />,
      skills: [
        { name: "Python", icon: <Code size={24} /> },
        { name: "React", icon: <Code size={24} /> },
        { name: "JavaScript", icon: <Code size={24} /> },
        { name: "TypeScript", icon: <Code size={24} /> },
        { name: "Solidity", icon: <Code size={24} /> },
        { name: "HTML5", icon: <Code size={24} /> },
        { name: "CSS3", icon: <Code size={24} /> },
        { name: "SQL", icon: <Database size={24} /> }
      ]
    },
    {
      name: "Blockchain",
      icon: <Hash className="mr-2" size={20} />,
      skills: [
        { name: "Smart Contracts", icon: <Hash size={24} /> },
        { name: "Cryptography", icon: <Hash size={24} /> },
        { name: "Hedera Hashgraph", icon: <Hash size={24} /> },
        { name: "DLTs", icon: <Hash size={24} /> }
      ]
    },
    {
      name: "Business Intelligence",
      icon: <BarChart2 className="mr-2" size={20} />,
      skills: [
        { name: "Power BI", icon: <BarChart2 size={24} /> },
        { name: "DAX", icon: <BarChart2 size={24} /> },
        { name: "Data Modeling", icon: <BarChart2 size={24} /> },
        { name: "ETL", icon: <BarChart2 size={24} /> }
      ]
    },
    {
      name: "Tools",
      icon: <Wrench className="mr-2" size={20} />,
      skills: [
        { name: "Git", icon: <GitBranch size={24} /> },
        { name: "Postman", icon: <Wrench size={24} /> },
        { name: "JIRA", icon: <Wrench size={24} /> },
        { name: "Google Cloud", icon: <Server size={24} /> },
        { name: "Project IDX", icon: <Wrench size={24} /> },
        { name: "Beyond Compare", icon: <Wrench size={24} /> },
        { name: "Microsoft Office", icon: <Briefcase size={24} /> }
      ]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="mr-2" size={20} />,
      skills: [
        { name: "Bitbucket", icon: <GitBranch size={24} /> },
        { name: "SourceTree", icon: <GitBranch size={24} /> },
        { name: "AWS CodePipeline", icon: <GitBranch size={24} /> }
      ]
    },
    {
      name: "Methodologies",
      icon: <Briefcase className="mr-2" size={20} />,
      skills: [
        { name: "Agile", icon: <Briefcase size={24} /> },
        { name: "SDLC", icon: <Briefcase size={24} /> },
        { name: "TDD", icon: <Briefcase size={24} /> },
        { name: "Object-Oriented Design", icon: <Briefcase size={24} /> }
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
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-2 text-gray-300">{skill.name}</span>
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
