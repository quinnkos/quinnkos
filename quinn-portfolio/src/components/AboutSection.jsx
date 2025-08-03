/*
import React from 'react';

const AboutSection = () => {
  const interests = [
    {
      title: "Making Music",
      description: "Music has always been a huge part of my life. I began learning piano at age 3 and improved
                                    well into my adolescent years. Around age 9 or 10, I began learning guitar and attending
                                    music camps to compose and perform music with other young musicians. At age 10, I also began
                                    producing songs electronically on programs like GarageBand. Entering high school, and throughout
                                    the pandemic and the years that followed, electronic music production remained my
                                    primary passion. At age 17, amidst an intense college application season, I co-produced, mixed
                                    and mastered six songs for MasterChef winner and musical hobbyist Dino Angelo Luciano.
                                    As of March 2025, I am currently working on an EP with Dino and playing acoustic guitar in my
                                    spare time.",
      image: "/images/about/music.jpg"
    },
    {
      title: "Cooking",
      description: "I find immense joy and beauty in cooking—I love to work with spices and
                                    develop interesting flavor combinations. I am particularly drawn to
                                    Indian food—a few weeks ago, I made an awesome vindaloo, and more recently,
                                    a biryani. I'll update this once I decide the fate of the massive lamb leg
                                    in my fridge!",
      image: "/images/about/cooking.jpg"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="content-section">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {interests.map((interest, index) => (
            <div key={index} className="card">
              {interest.image && (
                <div className="card-image">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    onError={(e) => {
                      // Hide image if it fails to load
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="card-title">{interest.title}</h3>
              <p className="card-text">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
 */