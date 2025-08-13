import React from 'react';
import { ExternalLink, Microscope, BarChart3 } from 'lucide-react';
import gsacLogo from '../images/icons/gsac.jpg';
import hololensLogo from '../images/icons/hololens.jpg';

const InvolvementsSection = () => {
  const involvements = [
    {
      title: "Undergraduate Researcher",
      organization: "Human-AI Experience Lab, UC Santa Barbara",
      description:
        "At UCSB’s Human-AI Experience (HAX) Lab, I lead the technical construction of a project evaluating feedback and feedforward methods for fencing training in Augmented Reality. " +
          "Most notably, I developed a kinematics pipeline to compare athletes’ movements to expert performances - personalized to the athletes' body dimensions. " +
          "To accompany this, I designed a HoloLens 2 playback system in Unity to showcase the athletes' performances relative to the expert in a variety of visualization modes, " +
          "integrating a joint error map and other features to highlight faults in technique. ",
      link: "https://sites.cs.ucsb.edu/~sra/",
      icon: <img src={hololensLogo} alt="Hololens" style={{
                                                      width: 60,
                                                      height: 60,
                                                      borderRadius: '50%',
                                                      objectFit: 'cover'
                                                    }}
          />
    },
      {
          title: "Co-President",
          organization: "Gaucho Sports Analytics, UC Santa Barbara",
          description:
              "As Co-President of UCSB’s first student-led sports analytics organization, I oversee operations, partnerships, and strategic direction, working closely with an executive board of " +
              "eight and actively collaborating with UCSB's Division I Baseball and Basketball programs. " +
              "In my prior role as a Technical Officer, I constructed and led the club's very first workshops that introduced over 200 students to data science and applied machine learning in sports contexts. " +
              "I also mentored a five-member team in developing a lineup optimization model for the UCSB Baseball Team, combining statistical modeling with relevant insights for coaching staff.",
          link: "https://gauchosportsanalytics.com/",
          icon: <img src={gsacLogo} alt="GSA" style={{
                                                      width: 50,
                                                      height: 50,
                                                      borderRadius: '50%',
                                                      objectFit: 'cover'
                                                    }}
          />
      }
  ];

    return (
        <section id="involvements" className="section">
      <div className="content-section">
        <h2 className="section-title">Current Involvements</h2>

        <div className="involvements-grid">
          {involvements.map((involvement, index) => (
            <div key={index} className="involvement-card">
              <div className="involvement-icon" style={{ color: involvement.color }}>
                {involvement.icon}
              </div>

              <div className="involvement-content">
                <h3 className="involvement-title">{involvement.title}</h3>
                <h4 className="involvement-org">{involvement.organization}</h4>
                <p className="involvement-description">{involvement.description}</p>

                <a
                  href={involvement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="involvement-link"
                >
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvolvementsSection;
