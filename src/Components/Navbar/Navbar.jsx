import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg'
import { Link, useLocation } from 'react-router-dom'
import ContactModal from '../ContactModal/ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo flex items-center gap-4">
          <img src={logo} className='h-10 w-10 object-cover object-bottom' alt="" />
          <span className="text-[1rem]">Score Labs</span>
        </div>
        
        <div className="desktop-menu">
          <div className="navbar-center">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          </div>

          <div className="navbar-right">
            <Link onClick={handleContactClick}>Get in Touch</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Link>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link onClick={handleContactClick}>Get in Touch</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;