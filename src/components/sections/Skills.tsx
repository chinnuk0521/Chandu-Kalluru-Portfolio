import React, { useState } from 'react';

type Skill = {
  name: string;
  iconUrl: string;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming",
      icon: <i className="fas fa-code"></i>,
      skills: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg" },
      ],
    },
    {
      name: "Blockchain",
      icon: <i className="fas fa-lock"></i>,
      skills: [
        { name: "Smart Contracts", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/ethereum.svg" },
        { name: "Cryptography", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons/icons/bitcoin.svg" },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
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
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="md:col-span-9">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                {skillCategories[activeCategory].icon}
                <span className="ml-2">{skillCategories[activeCategory].name}</span>
              </h3>

              <div className="flex flex-wrap gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-24 h-24 bg-gray-700 rounded-full shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-110"
                  >
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-12 h-12 mt-4"
                    />
                    <p className="text-sm text-gray-300 mt-2">{skill.name}</p>
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