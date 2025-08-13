import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  // Get the Albatross project data
  const albatrossProject = {
    title: "Albatross (GeoGuessr AI)",
    slug: "albatross",
    description: "An AI bot to predict the geographic coordinates of a given street view panorama.",
    github: "https://github.com/quinnkos/Albatross",
    tech: ["PyTorch", "OpenCV", "NumPy", "Flask"],
    video: "/quinnkos/images/projects/Albatross_Demo_With_Video.mp4",
    poster: "/quinnkos/images/projects/albatross.jpg"
  };

  return (
    <section id="featured" className="section featured-section">
      <div className="content-section">
        <div className="featured-container">
          <div className="featured-badge">
            ⭐ FEATURED PROJECT
          </div>

          <h2 className="featured-title">
            {albatrossProject.title}
          </h2>

          {/*
          <p className="featured-description">
            {albatrossProject.description} Inspired by GeoGuessr, with a median test error below 350 miles!
          </p>
          */}

          <div className="featured-video-container">
            <div className="featured-video">
              <video
                controls
                poster={albatrossProject.poster}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px'
                }}
              >
                <source src={albatrossProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-caption">
                <strong>Live Demo:</strong> Albatross behind the scenes!
              </div>
            </div>
          </div>

          <div className="featured-tech-tags">
            {albatrossProject.tech.map((tech, index) => (
              <span key={index} className="tech-tag featured-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="featured-buttons">
            <Link
              to={`/project/${0}`} // Albatross is at index 0
              className="cta-button featured-button-primary"
            >
              Learn More About This Project
            </Link>
            <a
              href={albatrossProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button featured-button-secondary"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;