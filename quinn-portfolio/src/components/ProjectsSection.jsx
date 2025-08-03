import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="content-section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;