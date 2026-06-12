import React from 'react';
import heroImage from '../assets/images/hero-background.png'; // Ensure this path is correct

export default function Hero() {
  return (
    <section className="hero-container">
      <img src={heroImage} alt="Jan Spandan Hero" className="hero-image" />
      <div className="lotus-icon-wrapper">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.2">
          <path d="M12 21a9 9 0 0 1-9-9c0-1.5.5-3 1.5-4.5M12 21a9 9 0 0 0 9-9c0-1.5-.5-3-1.5-4.5M12 21V10M12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      </div>
    </section>
  );
}