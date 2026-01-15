import React from "react";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <h1>Summer Projects @ IIT Kanpur</h1>
          <p className="hero-subtitle">Explore, Learn, Contribute</p>
          <p className="hero-description">
            Discover exciting summer projects from all Science and Technology
            Council clubs.
          </p>
          <div className="hero-buttons">
            <a href="#clubs" className="btn btn-primary">
              Explore Clubs
            </a>
            {/* <a href="#" className="btn btn-primary">Get Started</a> */}
            {/* <a href="#" className="btn btn-outline">Become a Mentor</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
