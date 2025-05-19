import React, { useEffect, useRef } from 'react';

type Achievement = {
  title: string;
  value: number;
  suffix: string;
  description: string;
};

const Achievements: React.FC = () => {
  const countersRef = useRef<HTMLDivElement>(null);
  const countersAnimated = useRef(false);
  
  const achievements: Achievement[] = [
    {
      title: "Data Migration Efficiency",
      value: 25,
      suffix: "%",
      description: "Enhanced through automated pipelines"
    },
    {
      title: "Business Process Improvement",
      value: 20,
      suffix: "%",
      description: "Through innovative software solutions"
    },
    {
      title: "Power BI Dashboard Accuracy",
      value: 90,
      suffix: "%+",
      description: "Delivering precise business insights"
    },
    {
      title: "Blockchain Interns Mentored",
      value: 4,
      suffix: "",
      description: "Guiding the next generation of innovators"
    },
    {
      title: "System Downtime Reduction",
      value: 30,
      suffix: "%",
      description: "Via optimized data services"
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const animateCounters = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !countersAnimated.current) {
        countersAnimated.current = true;
        
        const counters = document.querySelectorAll('.counter-value');
        
        counters.forEach((counter: Element) => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 2000; // ms
          const step = Math.ceil(target / (duration / 16)); // ~60fps
          
          const updateCounter = () => {
            count += step;
            if (count < target) {
              (counter as HTMLElement).innerText = count + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              (counter as HTMLElement).innerText = target + suffix;
            }
          };
          
          updateCounter();
        });
      }
    };

    const observer = new IntersectionObserver(animateCounters, options);
    
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    
    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div 
          ref={countersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <h3 
                className="counter-value text-4xl font-bold text-blue-500 mb-2" 
                data-target={achievement.value.toString()}
                data-suffix={achievement.suffix}
              >
                0{achievement.suffix}
              </h3>
              <h4 className="text-xl font-semibold mb-2 text-gray-200">{achievement.title}</h4>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;