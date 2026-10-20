import { useState, useEffect } from 'react';
import profile from './data/profile';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Navbar
        name={profile.name}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Education education={profile.education} />  
        <Projects projects={profile.projects} />
        <Contact email={profile.email} />
      </main>
      <Footer name={profile.name} socials={profile.socials} />
    </>
  );
}

export default App;