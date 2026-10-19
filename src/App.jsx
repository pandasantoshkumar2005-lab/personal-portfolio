import React from 'react';
import WavyBackground from './components/WavyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-primary-text selection:bg-blue-500/30 selection:text-white">
      {/* Framer Motion Animated Dark Wavy Background & Atmospheric Lighting */}
      <WavyBackground />

      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* 2. Hero / Personal Introduction */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Technical Skills and Creative Thinking */}
        <Skills />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. Academic Foundations */}
        <Education />

        {/* 7. Learning Journey */}
        <Journey />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
