import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import ContactModal from '../ContactModal/ContactModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-header">
            <div className="footer-logo flex items-center">
              <img src={logo} alt="Score Labs AI" />
              <span className="footer-logo-text">SCORE LABS</span>
            </div>
          </div>

          <div className="footer-divider"></div>
          
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link onClick={handleContactClick}>Get In Touch</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          <div className="footer-addresses">
            <div className="address-item">
              <span className="address-label">India:</span>
              <a 
                href="https://maps.google.com/?q=D-131,+Block+D,+Sector+108,+Noida,+Uttar+Pradesh+201304" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                D-131, Block D, Sector 108, Noida, Uttar Pradesh 201304
              </a>
            </div>
            <div className="address-item mb-6">
              <span className="address-label">US:</span>
              <a 
                href="https://maps.google.com/?q=75+Fifth+St.+Suite+2000+Atlanta,+GA+30308" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                75 Fifth St. Suite 2000 Atlanta, GA 30308
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              2025 Score Labs. All rights reserved.
            </div>
            
            <div className="footer-legal">
              <Link>Mail: contact@scorelabsai.com</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default Footer