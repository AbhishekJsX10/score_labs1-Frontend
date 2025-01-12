import React from 'react'
import './DescriptionH.css'
import DescriptionHImage from "../../assets/DescriptionH.webp"


const DescriptionH = () => {

  return (
    <div className="description-container">
      {/* Desktop Layout */}
      <div className="description-content">
        <div className="description-text">
          <h1 className="description-title">
            Discover the Unmatched Benefits of choosing Score Labs for Your Ai needs
          </h1>
          <p className="description-subtitle">
            Choosing Scoore Labs means unlocking unparalleled efficiency and significant cost savings. 
            Our solutions are designed to grow with your buisness, ensuringsseamless integration and 
            sustainable innovation.
          </p>
          <a href="#join" className="join-button">Join Now</a>
        </div>
        <div className="description-image">
          <img src={DescriptionHImage} alt="AI Processor" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-description">
        <h1 className="description-title">
          Discover the Unmatched Benefits of choosing Score Labs for Your Ai needs
        </h1>
        <p className="description-subtitle">
          Choosing Scoore Labs means unlocking unparalleled efficiency and significant cost savings. 
          Our solutions are designed to grow with your buisness, ensuringsseamless integration and 
          sustainable innovation.
        </p>
        <a href="#join" className="join-button">Join Now</a>
        <div className="description-image">
          <img src={DescriptionHImage} alt="AI Processor" />
        </div>
      </div>
    </div>
  )
}

export default DescriptionH


