import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Portfolio</Link>
        <button className="mobile-menu-toggle" onClick={toggleNav}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleNav}>Home</Link>
          <Link to="/about" className="nav-link" onClick={toggleNav}>About</Link>
          <Link to="/projects" className="nav-link" onClick={toggleNav}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={toggleNav}>Contact</Link>
          <a href="https://github.com/Raash12" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={toggleNav}>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
            GitHub
          </a> {/* GitHub Profile Link */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;