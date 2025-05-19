import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas for retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Particle system for blockchain-like visualization
    type Particle = {
      x: number;
      y: number;
      size: number;
      speed: number;
      alpha: number;
      connection: Particle | null;
    };

    const particles: Particle[] = [];
    const particleCount = Math.min(50, Math.floor(rect.width / 20));
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.5 + 0.1,
        alpha: Math.random() * 0.5 + 0.1,
        connection: null
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Update particles
      particles.forEach(particle => {
        particle.y -= particle.speed;
        if (particle.y < -10) {
          particle.y = rect.height + 10;
          particle.x = Math.random() * rect.width;
        }
        
        // Find connections
        particle.connection = null;
        particles.forEach(other => {
          if (particle === other) return;
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const alpha = 1 - (distance / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Store strongest connection
            if (!particle.connection || distance < connectionDistance / 2) {
              particle.connection = other;
            }
          }
        });
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.alpha})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Chandu Kalluru
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Research & Development Innovator | Blockchain Engineer | Data Visualization Expert
        </p>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-gray-400">
            Transforming complex business requirements into scalable, user-friendly solutions through 
            blockchain technology, data analytics, and innovative software development.
          </p>
        </div>
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
        >
          Discover My Work
          <ArrowDownCircle size={18} />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="text-blue-500" size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;