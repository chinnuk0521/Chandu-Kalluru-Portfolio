import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-blue-500">Chandu Kalluru</p>
            <p className="text-sm text-gray-400 mt-1">Research & Development Innovator | Blockchain Engineer | Data Visualization Expert</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/chandu-kalluru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Chandu Kalluru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;