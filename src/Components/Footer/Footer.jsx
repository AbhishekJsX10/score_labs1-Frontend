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
              <span className="footer-logo-text">SCORE LABS AI</span>
            </div>
          </div>

          <div className="footer-divider"></div>
          
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link onClick={handleContactClick}>Contact Us</Link>
            <Link to="/about">About Us</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/get-started">Get-started</Link>
          </nav>

          <div className="footer-bottom">
            <div className="footer-copyright">
              2025 Score Labs AI. All rights reserved.
            </div>
            
            <div className="footer-legal">
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