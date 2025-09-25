import React from 'react';
import './YCombinator.css';

const Ycombinator = () => {
  return (
    <section className="hero-section">
      {/* <div className="hero-container"> */}
        {/* Left Content */}
        <div className="hero-content">
          {/* <h1 className="hero-title">
            <span className="title-highlight">YCombinator</span>
          </h1> */}
          {/* <p className="hero-subtitle">
            Make something people want.
          </p> */}
          {/* <button className="hero-cta-btn">
            Apply to YC
          </button> */}
        {/* </div> */}

        {/* Right Side - Stats and Image */}
        <div className="hero-visual">
          {/* Background Image */}
           {/* <div className="hero-image">
            <img
              src=""
              alt=""
              className="background-image"
            />   */}

            {/* Overlay Pattern */}
            <div className="pattern-overlay"></div>

            {/* Statistics Cards */}
            <div className="stats-container">
              <div className="stat-card stat-card-1">
                <div className="stat-number">6</div>
                <div className="stat-label">Funded Startups</div>
              </div>

              <div className="stat-card stat-card-2">
                <div className="stat-number">0.16 Billion</div>
                <div className="stat-label">combined valuation</div>
              </div>
            </div>
          </div>
        </div>
       {/* </div>  */}
    </section>
  );
};

export default Ycombinator;