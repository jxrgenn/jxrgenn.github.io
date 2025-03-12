import React from 'react';
import '../landingPage.css';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="logo-container">
        <h2 className="logo">BLACKSHEEP</h2>
      </div>
      
      <nav className="services-menu">
        <a href="/video-production" className="service-link">Video Production</a>
        <a href="/video-events" className="service-link">Video Events</a>
        <a href="/studio-photography" className="service-link">Studio Photography</a>
      </nav>
    </div>
  );
}

export default LandingPage;