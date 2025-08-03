import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="section">
      <div className="hero">
        <div className="profile-pic">
          <img
            src="/images/profile.jpg"
            alt="Quinn Koster"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="profile-inner" style={{ display: 'none' }}>Q</div>
        </div>

        <h1 className="hero-title">WELCOME</h1>

        <p className="hero-text">
          Hello, My name is <span className="highlight">Quinn</span>!
          I study computer science at UC Santa Barbara and am currently most interested in
          <span className="highlight"> predictive modeling tasks</span>,
          especially through the use of deep learning. I am currently developing an AI to play
          GeoGuessr and teaching machine learning workshops to students at UC Santa Barbara.
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