import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card">
      <Link
        to={`/project/${index}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="project-image" style={{ cursor: 'pointer' }}>
          {/* Video indicator for projects with videos */}
          {project.video && (
            <div className="project-video-indicator" />
          )}

          {project.video ? (
            <video
              poster={project.poster}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                const letterDiv = e.target.parentElement.querySelector('.project-letter');
                if (letterDiv) letterDiv.style.display = 'flex';
              }}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1
                }}
                onLoad={(e) => {
                  const letterDiv = e.target.parentElement.querySelector('.project-letter');
                  if (letterDiv) letterDiv.style.display = 'none';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const letterDiv = e.target.parentElement.querySelector('.project-letter');
                  if (letterDiv) letterDiv.style.display = 'flex';
                }}
              />
              {project.overlayImage && (
                <img
                  src={project.overlayImage}
                  alt={`${project.title} overlay`}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    zIndex: 2,
                    border: '2px solid white'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </>
          ) : null}

          <div
            className="project-letter"
            style={{
              position: 'relative',
              zIndex: 2,
              display: project.video || project.image ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              color: 'inherit'
            }}
          >
            {project.title[0]}
          </div>
        </div>
      </Link>

      <div className="project-content">
        <Link
          to={`/project/${index}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3 className="project-title" style={{ cursor: 'pointer' }}>
            {project.title}
          </h3>
        </Link>
        <p className="project-description">{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* FIX: Added missing <a> tag */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={16} />
          <span>View on GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
