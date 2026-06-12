import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import CitizenView from './components/CitizenView';

export default function App() {
  return (
    <Router>
      <div className="app-root-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
            </>
          } />
          <Route path="/citizen" element={<CitizenView />} />
        </Routes>
        
        {/* Traditional Pattern Underline Accent Footer */}
        <div 
          className="footer-accent-divider" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='12' viewBox='0 0 24 12'%3E%3Cpath d='M0 12 L12 0 L24 12' fill='none' stroke='%23E2E8F0' stroke-width='1'/%3E%3C/svg%3E")` }}
        />
      </div>
    </Router>
  );
}