import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import InvolvementsSection from './components/InvolvementsSection.jsx';
import HeroSection from './components/HeroSection';
//import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { projectsData } from './data/projects';
import './App.css';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

        {/*<AboutSection />*/}

        <InvolvementsSection involvements={scrollToSection} />

      <ProjectsSection projects={projectsData} />

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router basename="/quinnkos">
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail projects={projectsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;