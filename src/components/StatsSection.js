import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid" data-aos="fade-up">
          <div className="stat-card"><span className="stat-number">50+</span><span className="stat-label">Active Projects</span></div>
          <div className="stat-card"><span className="stat-number">12</span><span className="stat-label">SnT Clubs</span></div>
          <div className="stat-card"><span className="stat-number">200+</span><span className="stat-label">Students Enrolled</span></div>
          {/* <div className="stat-card"><span className="stat-number">30+</span><span className="stat-label">Expert Mentors</span></div> */}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
