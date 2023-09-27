import React, { useContext, useState } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import { AuthContext } from '../../AuthProvider';

const Navbar = () => {
  const {logout, isAdmin}=useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">BuildHerFuture</a>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/careerroadmap">CareerRoadMap</Link>
            </li>
            <li className="navbar-item">
              <Link to="/jobportal">Job Portal</Link>
            </li>
            <li className="navbar-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="navbar-item logout" onClick={()=>{
              logout()
            }}>
              <p>Logout</p>
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
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/careerroadmap">CareerRoadMap</Link>
            </li>
            <li className="navbar-item">
              <Link to="/jobportal">Job Portal</Link>
            </li>
            <li className="navbar-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="navbar-item logout" onClick={()=>{
              logout()
            }}>
              Logout
            </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
