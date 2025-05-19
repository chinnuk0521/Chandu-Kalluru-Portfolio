import React from "react";

const Research: React.FC = () => {
  return (
    <section id="Research" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research Publications & Collaborations
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Current Research Focus
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-gray-200">
                Blockchain Technology & DLTs
              </h4>
              <p className="text-gray-400 mb-4">
                Leading research on optimizing blockchain protocols and
                implementing secure smart contracts for enterprise solutions.
                Exploring innovative applications of Hedera Hashgraph and other
                distributed ledger technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  DLT Optimization
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Smart Contracts
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Protocol Design
                </span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-gray-200">
                Data Analytics & Visualization
              </h4>
              <p className="text-gray-400 mb-4">
                Developing advanced data visualization techniques for blockchain
                analytics and business intelligence. Creating innovative
                approaches to represent complex blockchain data structures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Data Modeling
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Visual Analytics
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  BI Solutions
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Research Contributions
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-gray-200">
                Ongoing Projects
              </h4>
              <ul className="space-y-5 text-gray-400">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Developing scalable blockchain solutions for enterprise
                    applications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Implementing advanced cryptographic techniques for data
                    security
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Researching optimization methods for DLT consensus
                    mechanisms
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-gray-200">
                Research Impact
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Mentored 4 research interns in blockchain technology
                    projects
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Contributed to multiple enterprise blockchain
                    implementations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Developed innovative data visualization techniques for
                    blockchain analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
