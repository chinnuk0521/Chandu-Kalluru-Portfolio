import { useState } from 'react';

// Skill category type definition
type SkillCategory = {
  name: string;
  iconUrl: string;
  skills: {
    name: string;
    iconUrl: string;
  }[];
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  // Skill categories with real icons from icons8.com
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming",
      iconUrl: "https://img.icons8.com/color/48/000000/source-code.png",
      skills: [
        { name: "Python", iconUrl: "https://img.icons8.com/color/48/000000/python.png" },
        { name: "React", iconUrl: "https://img.icons8.com/color/48/000000/react-native.png" },
        { name: "JavaScript", iconUrl: "https://img.icons8.com/color/48/000000/javascript.png" },
        { name: "TypeScript", iconUrl: "https://img.icons8.com/color/48/000000/typescript.png" },
        { name: "Solidity", iconUrl: "https://img.icons8.com/color/48/000000/ethereum.png" },
        { name: "HTML5", iconUrl: "https://img.icons8.com/color/48/000000/html-5.png" },
        { name: "CSS3", iconUrl: "https://img.icons8.com/color/48/000000/css3.png" },
        { name: "SQL", iconUrl: "https://img.icons8.com/color/48/000000/sql.png" }
      ]
    },
    {
      name: "Blockchain",
      iconUrl: "https://img.icons8.com/color/48/000000/blockchain-technology.png",
      skills: [
        { name: "Smart Contracts", iconUrl: "https://img.icons8.com/color/48/000000/smart-contract.png" },
        { name: "Cryptography", iconUrl: "https://img.icons8.com/color/48/000000/encryption.png" },
        { name: "Hedera Hashgraph", iconUrl: "https://img.icons8.com/color/48/000000/blockchain.png" },
        { name: "DLTs", iconUrl: "https://img.icons8.com/color/48/000000/distributed-ledger.png" }
      ]
    },
    {
      name: "Business Intelligence",
      iconUrl: "https://img.icons8.com/color/48/000000/business-report.png",
      skills: [
        { name: "Power BI", iconUrl: "https://img.icons8.com/color/48/000000/power-bi.png" },
        { name: "DAX", iconUrl: "https://img.icons8.com/color/48/000000/formula.png" },
        { name: "Data Modeling", iconUrl: "https://img.icons8.com/color/48/000000/data-configuration.png" },
        { name: "ETL", iconUrl: "https://img.icons8.com/color/48/000000/data-transfer.png" }
      ]
    },
    {
      name: "Tools",
      iconUrl: "https://img.icons8.com/color/48/000000/maintenance.png",
      skills: [
        { name: "Git", iconUrl: "https://img.icons8.com/color/48/000000/git.png" },
        { name: "Postman", iconUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
        { name: "JIRA", iconUrl: "https://img.icons8.com/color/48/000000/jira.png" },
        { name: "Google Cloud", iconUrl: "https://img.icons8.com/color/48/000000/google-cloud.png" },
        { name: "Project IDX", iconUrl: "https://img.icons8.com/color/48/000000/code-folder.png" },
        { name: "Beyond Compare", iconUrl: "https://img.icons8.com/color/48/000000/compare.png" },
        { name: "Microsoft Office", iconUrl: "https://img.icons8.com/color/48/000000/microsoft-office-2019.png" }
      ]
    },
    {
      name: "Version Control",
      iconUrl: "https://img.icons8.com/color/48/000000/merge-git.png",
      skills: [
        { name: "Bitbucket", iconUrl: "https://img.icons8.com/color/48/000000/bitbucket.png" },
        { name: "SourceTree", iconUrl: "https://img.icons8.com/color/48/000000/sourcetree.png" },
        { name: "AWS CodePipeline", iconUrl: "https://img.icons8.com/color/48/000000/amazon-web-services.png" }
      ]
    },
    {
      name: "Methodologies",
      iconUrl: "https://img.icons8.com/color/48/000000/workflow.png",
      skills: [
        { name: "Agile", iconUrl: "https://img.icons8.com/color/48/000000/agile.png" },
        { name: "SDLC", iconUrl: "https://img.icons8.com/color/48/000000/development-skill.png" },
        { name: "TDD", iconUrl: "https://img.icons8.com/color/48/000000/test-tube.png" },
        { name: "Object-Oriented Design", iconUrl: "https://img.icons8.com/color/48/000000/object.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        {/* Mobile View - Dropdown for Categories */}
        <div className="md:hidden mb-6">
          <select 
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activeCategory}
            onChange={(e) => setActiveCategory(Number(e.target.value))}
          >
            {skillCategories.map((category, index) => (
              <option key={index} value={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Sidebar - Hidden on Mobile */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex items-center w-full text-left px-4 py-3 transition-colors ${
                      activeCategory === index
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <img 
                      src={category.iconUrl} 
                      alt={`${category.name} icon`}
                      className="w-6 h-6 mr-3 flex-shrink-0"
                    />
                    <span className="truncate">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Display */}
          <div className="flex-1 md:w-3/4 lg:w-4/5">
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                <img 
                  src={skillCategories[activeCategory].iconUrl}
                  alt={`${skillCategories[activeCategory].name} icon`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3"
                />
                <span>{skillCategories[activeCategory].name}</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center bg-gray-700 p-3 sm:p-4 md:p-5 rounded-lg hover:bg-gray-600 transition-colors shadow-md aspect-square"
                  >
                    <div className="mb-2 sm:mb-3 flex items-center justify-center h-10 sm:h-12">
                      <img 
                        src={skill.iconUrl} 
                        alt={`${skill.name} icon`}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <span className="text-white text-center font-medium text-sm sm:text-base">{skill.name}</span>
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