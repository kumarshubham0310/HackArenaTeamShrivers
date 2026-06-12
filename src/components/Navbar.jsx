import React from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div>
          <img src={logo} alt="Jan Spandan AI Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#" className="active">
            <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a10 10 0 0010 10h4a2 2 0 002-2V10M9 21V9h6v12"/>
            </svg>
            <span>Home</span>
          </a>
          <a href="#">
            <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>Citizen</span>
          </a>
          <a href="#">
            <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <span>Innovator</span>
          </a>
          <a href="#">
            <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>About Us</span>
          </a>
        </nav>
        <div>
          <button className="gov-button">
            <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span>Government Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}