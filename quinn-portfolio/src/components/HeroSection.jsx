import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="section">
      <div className="hero">
        <h1 className="hero-title">WELCOME</h1>

        <p className="hero-text">
          Hello, my name is Quinn.
          I study computer science at UC Santa Barbara and I'm interested in
          data science and machine learning, computer vision, software development, and game design.
          Scroll to learn more about me!
        </p>

        <div className="button-container">
          <a
            className="cta-button"
            onClick={() => scrollToSection('projects')}
          >
            See My Projects
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/quinn-koster/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/quinnkos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;