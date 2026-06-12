import React from 'react';
import citizenImg from '../assets/images/citizen-card.png';
import innovatorImg from '../assets/images/innovator-card.png';
import govImg from '../assets/images/government-card.png';

export default function Cards() {
  return (
    <section className="cards-section">
      <div className="cards-max">
        
        <div className="section-header">
          <h2>A Platform for Every Change Maker</h2>
          <p>Three powerful ways to connect, contribute and create impact</p>
        </div>
        
        <div className="cards-grid">
          
          {/* Card 01: Citizen Landscape Module */}
          <div className="card-wrapper card-citizen">
            <div>
              <div className="card-header-block">
                <div className="card-icon-container icon-bg-citizen">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="card-title-group">
                  <span className="card-meta meta-citizen">I am a</span>
                  <h3 className="card-title">Citizen</h3>
                </div>
              </div>
              <p className="card-body-text">
                Report issues in your area, track progress and see real change happen.
              </p>
            </div>
            <img src={citizenImg} alt="Citizen Graphic representation" className="card-graphic" />
            <div className="card-action">
              <button className="card-btn btn-citizen">
                <span>Report a Problem</span>
                <span style={{ fontWeight: '300' }}>&gt;</span>
              </button>
            </div>
          </div>

          {/* Card 02: Innovator Landscape Module */}
          <div className="card-wrapper card-innovator">
            <div>
              <div className="card-header-block">
                <div className="card-icon-container icon-bg-innovator">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <div className="card-title-group">
                  <span className="card-meta meta-innovator">I am an</span>
                  <h3 className="card-title">Innovator</h3>
                </div>
              </div>
              <p className="card-body-text">
                Find real problems, share your solutions and help build a better India.
              </p>
            </div>
            <img src={innovatorImg} alt="Innovator Graphic representation" className="card-graphic" />
            <div className="card-action">
              <button className="card-btn btn-innovator">
                <span>Explore Problems</span>
                <span style={{ fontWeight: '300' }}>&gt;</span>
              </button>
            </div>
          </div>

          {/* Card 03: Government Official Landscape Module */}
          <div className="card-wrapper card-gov">
            <div>
              <div className="card-header-block">
                <div className="card-icon-container icon-bg-gov">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16"></path>
                    <path d="M20 14h2v8h-2z"></path>
                    <path d="M2 14h2v8H2z"></path>
                    <path d="M6 22V14h12v8"></path>
                    <path d="M12 2v4"></path>
                    <path d="m8 6 4-4 4 4"></path>
                  </svg>
                </div>
                <div className="card-title-group">
                  <span className="card-meta meta-gov">I am a</span>
                  <h3 className="card-title">Government Official</h3>
                </div>
              </div>
              <p className="card-body-text">
                Monitor issues, take action, coordinate solutions and serve your community better.
              </p>
            </div>
            <img src={govImg} alt="Government Graphic representation" className="card-graphic" />
            <div className="card-action">
              <button className="card-btn btn-gov">
                <span>Government Login</span>
                <span style={{ fontWeight: '300' }}>&gt;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}