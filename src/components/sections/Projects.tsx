import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  image: string;
  tags: string[];
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [subFilter, setSubFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      title: "Blockchain Research at IIT Madras",
      category: "blockchain",
      description: "Leading research on blockchain technology and distributed ledger technologies, focusing on implementing smart contracts and optimizing blockchain protocols for enterprise solutions.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Blockchain", "Smart Contracts", "DLTs", "Research"]
    },
    {
      title: "Call Centre Trend Analysis",
      category: "data",
      description: "Developed interactive Power BI dashboards to analyze call center performance, including call volume trends, customer satisfaction scores, and agent KPIs like response times and issue resolution rates.",
      image: "https://images.pexels.com/photos/7947961/pexels-photo-7947961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Power BI", "DAX", "Data Analysis", "Visualization"]
    },
    {
      title: "Customer Churn Analysis",
      category: "data",
      description: "Created a customer churn prediction model with Power BI, analyzing key factors contributing to customer attrition and evaluating the impact of retention strategies on reducing churn rates.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Power BI", "Data Modeling", "Predictive Analytics"]
    },
    {
      title: "Sales Data ETL Pipeline",
      category: "data",
      subCategory: "pipeline",
      description: "Designed and implemented an ETL pipeline for processing sales data, using Python, Pandas, and SQL to extract data from multiple sources, transform it for analysis, and load it into a data warehouse.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Python", "ETL", "Data Engineering", "SQL", "Pandas"]
    },
    {
      title: "Movie Streaming ETL",
      category: "data",
      subCategory: "pipeline",
      description: "Built a scalable ETL pipeline for a movie streaming platform that processes user behavior data, content metadata, and viewing statistics to generate insights for content recommendation algorithms.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Python", "Apache Airflow", "ETL", "Big Data", "Analytics"]
    },
    {
      title: "Voting Application",
      category: "development",
      subCategory: "frontend",
      description: "Developed a secure blockchain-based voting application using React, TypeScript, and Vite that ensures transparent and tamper-proof election processes with real-time result tracking.",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TypeScript", "Vite", "Blockchain", "Web3.js"]
    },
    {
      title: "TDL Manager",
      category: "development",
      subCategory: "frontend",
      description: "Created a decentralized task management application built with React, TypeScript, and Vite that uses blockchain technology to provide verifiable task completion and secure data storage.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TypeScript", "Vite", "Blockchain", "Smart Contracts"]
    },
    {
      title: "Multiplayer Snake Game",
      category: "development",
      subCategory: "fullstack",
      description: "Built an interactive multiplayer snake game using TypeScript, React, JavaScript, HTML, and CSS on the frontend with Supabase for real-time backend services, user authentication, and leaderboards.",
      image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["TypeScript", "React", "JavaScript", "Supabase", "Real-time", "Multiplayer"]
    }
  ];

  // Filter by main category
  const categoryFilteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // Apply subcategory filter if applicable
  const filteredProjects = subFilter === 'all'
    ? categoryFilteredProjects
    : categoryFilteredProjects.filter(project => project.subCategory === subFilter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'data', name: 'Data Analytics' },
    { id: 'development', name: 'Development' }
  ];

  // Subcategories for each main category
  const subcategories = {
    data: [
      { id: 'all', name: 'All Data Analytics' },
      { id: 'pipeline', name: 'Data Pipelines' }
    ],
    development: [
      { id: 'all', name: 'All Development' },
      { id: 'frontend', name: 'Frontend' },
      { id: 'fullstack', name: 'Full Stack' }
    ]
  };

  // Handle main category change
  const handleCategoryChange = (categoryId: string) => {
    setFilter(categoryId);
    setSubFilter('all'); // Reset subcategory filter when changing main category
  };

  // Render subcategory filters if applicable for the selected main category
  const renderSubcategoryFilters = () => {
    if (filter === 'data' || filter === 'development') {
      return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {subcategories[filter as keyof typeof subcategories].map(subcat => (
            <button
              key={subcat.id}
              onClick={() => setSubFilter(subcat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                subFilter === subcat.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {subcat.name}
            </button>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {renderSubcategoryFilters()}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Learn more <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;