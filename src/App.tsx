import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { getInitialTheme, setThemeClass } from './utils/theme';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Section Components
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  
  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    setThemeClass(initialTheme);
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setThemeClass(newTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;