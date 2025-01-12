import React from 'react'
import './Introduction.css'
// import amdImage from '../../assets/amd-ryzen.png'
import IntroImage from '../../assets/IntroductionImage.webp'

const Introduction = () => {
  return (
    <div className="introduction-container ">
      <div className="introduction-content">
        <h2 className="introduction-title">
          Empowering Businesses Through Accessible and Innovative Artificial Intelligence Solutions
        </h2>
        <p className="introduction-description">
          At score lab, we are committed to democratizing AI, making it accessible for all businesses. Our mission is to provide cost-effective and scalable solutions that drive innovation and efficiency
        </p>
        <div className="cards-container">
          <div className="info-card">
            <svg className="card-icon mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="card-title">OUR MISSION</h3>
            <p className="card-description">
              Transforming the AI landscape by breaking down barriers to access and affordability.
            </p>
          </div>
          <div className="info-card">
            <svg className="card-icon mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="card-title">Join Us</h3>
            <p className="card-description">
              Be part of the AI revolution and unlock your business's potential today.
            </p>
          </div>
        </div>
      </div>
      <div className="introduction-image">
        <img src={IntroImage} alt="AI Processor" />
      </div>
    </div>
  )
}

export default Introduction