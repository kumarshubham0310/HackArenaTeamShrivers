import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';

export default function App() {
  return (
    <div className="app-root-container">
      <Navbar />
      <Hero />
      <Cards />
      
      {/* Traditional Pattern Underline Accent Footer */}
      <div 
        className="footer-accent-divider" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='12' viewBox='0 0 24 12'%3E%3Cpath d='M0 12 L12 0 L24 12' fill='none' stroke='%23E2E8F0' stroke-width='1'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}