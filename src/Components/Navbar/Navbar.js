import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Your Logo</a>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/CareerRoadMap">CareerRoadMap</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="mobile-navbar-list">
            <li className="navbar-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/CareerRoadMap">CareerRoadMap</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/aboutUs">About Us</Link>
            </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
