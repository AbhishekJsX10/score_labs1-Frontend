import React, { useState } from 'react'
import './HeroSection.css'
import heroBg from '../../assets/hero-white.webp'
import { LuPhoneCall } from "react-icons/lu";
import PhoneModal from '../PhoneModal/PhoneModal';

const HeroSection = ({ title, description, buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title leading-tight">{title}</h1>
            <p className="hero-description leading-0">{description}</p>
            <button 
              className="hero-button flex items-center gap-4"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="call-icon"><LuPhoneCall /></span>
              Call Now
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

      <PhoneModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default HeroSection