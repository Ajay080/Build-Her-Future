import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: aajaysingrathaur@gmail.com</p>
          {/* <p>Phone: (123) 456-</p> */}
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/">Linkedin</a>
            <a href="https://twitter.com/Ajay14788206">Twitter</a>
            <a href="https://www.instagram.com/ajaysinghrathaur_art/">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Additional Resources</h3>
          <ul className="resource-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/careerroadmap">CareerRoadMap</Link></li>
            <li><Link to= "/blogs">Blog</Link></li>
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
