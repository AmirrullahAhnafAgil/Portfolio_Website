import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
        {/* Modern Vector Grid & Ambient Lighting Background (Non-AI-Slop Clean Aesthetic) */}
        <Background />

        {/* Main Web Layout */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
