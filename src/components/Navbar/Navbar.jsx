import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FSBU</h1>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('team')}>Team</button>
        <button onClick={() => scrollToSection('events')}>Upcoming Events</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;