import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Research from '../components/sections/Research';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Research />
      </main>
      <Footer />
    </div>
  );
};

export default Home;