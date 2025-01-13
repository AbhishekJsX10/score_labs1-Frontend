import React, { useState } from 'react'
import './HeroSection.css'
import heroBg from '../../assets/hero-white.webp'
import { LuPhoneCall } from "react-icons/lu";
import ContactModal from '../ContactModal/ContactModal';

const HeroSection = ({ title, description, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-content mt-8">
            <h1 className="hero-title leading-tight">{title}</h1>
            <p className="hero-description leading-0">{description}</p>
            <button 
              className="hero-button flex items-center gap-4"
              onClick={handleContactClick}
            >
              <span className="call-icon"><LuPhoneCall /></span>
              Get In Touch
            </button>
          </div>
          <div className="hero-image" style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default HeroSection