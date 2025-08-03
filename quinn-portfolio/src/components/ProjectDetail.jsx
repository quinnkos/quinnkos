import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams();
  const projectIndex = parseInt(projectId);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" style={{ color: '#667eea', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Extended descriptions for each project
  const extendedDescriptions = {
    "Albatross (GeoGuessr AI)": `Albatross is an AI designed to predict the coordinates of any given street view panorama from around the world. This project was inspired by one of my favorite games of all time: GeoGuessr. The game puts users in a random street view location and tasks them with determining their location. 

The strategies I have implemented to improve the accuracy of the model include image partitioning (separating a panorama into four square directional images and averaging their embeddings during training), layered geographic clustering (combining clustering algorithms at different levels of geographic precision), and of course, methods like learning rate annealing, L2 regularization, and early stopping. 

Currently, the model's median test error is below 350 miles (think the distance of a straight line from San Francisco to Los Angeles).`,

    "IrrealEstate (Minecraft Mod)": `The IrrealEstate Minecraft Mod implements aspects of the real-estate marketplace Zillow into the game, allowing the user to efficiently attain details about their Minecraft house including its square footage, the number of rooms and bedrooms, and whether the house is furnished. 

The algorithm responsible for calculating these details is tailored to account for every game item's dimensions, properties, and impact on player movement, as well as the characteristics of the player itself. More recently, I implemented a feature that leverages house price data to predict the hypothetical values of Minecraft houses on the active market.`,

    "AI Chess Bot": `In March 2021, I abruptly developed a strong interest in chess. For the next year, I studied chess strategy and theory and practiced daily through competitive play on chess.com (at one point, my competitive Elo rating was greater than 99.7% of players on the site). I even played an in-person tournament in San Francisco, beating a previous tournament winner.

To complement my obsession with chess, I developed an interest in chess-focused programming and compiled several projects to support my studies and build my algorithms and data science skills. One of said projects was this AI Chess bot, written in Python. 

Building this tool was tricky because it required analysis of thousands of hypothetical move sequences and evaluate resulting board positions at each turn, and Python is notoriously slow. Hence, I had to find ways to speed up my algorithm and reduce node visits to enable deeper computer analysis of promising moves. These strategies included alpha-beta pruning, a preliminary search function, a transposition table, late move reduction, and MVV-LVA (Most Valuable Victim - Least Valuable Aggressor).`,

    "U.S. Presidential Election Simulator": `This tool uses data from past U.S. presidential elections to simulate realistic alternate outcomes. It allows users to dictate the extent to which the simulated results can vary from the true ones. My favorite part of this program is the live map of the simulation results (see video above). 

The animation is dictated by a feature I implemented that predicts when a state will be projected based on how narrow the race is and when the polls in that state close.`,

    "UCSBusy": `In this team project, I built a model to identify optimal exercise times for students at UC Santa Barbara based on their schedules and the busyness of the school's Recreation Center. 

To accomplish this, I conducted exploratory data analysis and wrote a series of scripts with Pandas, Numpy, and Matplotlib that utilized time series data from the Recreation Center to forecast busyness though Poisson Regression. My team and I placed in the Top 8 out of 53 teams in Data Science UCSB's 2024 Project Series and presented our work to industry professionals at the club's 2024 Project Showcase.`
  };

  const extendedDescription = extendedDescriptions[project.title] || project.description;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f23', color: 'white' }}>
      {/* Navigation */}
      <nav style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #333',
        position: 'sticky',
        top: 0,
        backgroundColor: '#0f0f23',
        zIndex: 100
      }}>
        <Link
          to="/"
          style={{
            color: '#667eea',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem'
          }}
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </nav>

      {/* Project Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        {/* Project Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {project.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {project.tech.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Media and Description */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr'
          }
        }}>
          {/* Media Section */}
          <div>
            {project.video ? (
              <video
                controls
                poster={project.poster}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : project.image ? (
              <div style={{ position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                />
                {project.overlayImage && (
                  <img
                    src={project.overlayImage}
                    alt={`${project.title} overlay`}
                    style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}
                  />
                )}
              </div>
            ) : (
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#667eea',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
                color: 'white'
              }}>
                {project.title[0]}
              </div>
            )}
          </div>

          {/* Description Section */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              color: '#667eea'
            }}>
              About This Project
            </h2>
            <div style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#e0e0e0'
            }}>
              {extendedDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1.5rem' }}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#667eea',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
          >
            <Github size={20} />
            View on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;