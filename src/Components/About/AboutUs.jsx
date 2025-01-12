import React, { useState, useEffect, useRef } from 'react'
import './AboutUs.css'

const founders = [
  {
    id: 1,
    name: 'Ripan Das',
    role: 'Expert in generative AI and chip design',
    image: '/founders/ripan.jpg'
  },
  {
    id: 2,
    name: 'Sudeep Suman',
    role: 'Strategic leader in disruptive technology',
    image: '/founders/sudeep.jpg'
  },
  {
    id: 3,
    name: 'Chanika Angchaikulkit',
    role: 'Proven entrepreneur and innovation driver',
    image: '/founders/chanika.jpg'
  },
  {
    id: 4,
    name: 'Sandeep Suman',
    role: 'Head of India Division',
    image: '/founders/sandeep.jpg'
  },
  {
    id: 5,
    name: 'Himanshu Singh',
    role: 'CEO of Score Labs',
    image: '/founders/himanshu.jpg'
  },
  {
    id: 6,
    name: 'Brent Herd',
    role: 'Head, Business Development & Investor Relations',
    image: '/founders/brent.jpg'
  }
]

const AboutUs = () => {
  const [activeFounder, setActiveFounder] = useState(founders[0])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const nextSlide = () => {
    if (!isPaused) {
      setCurrentSlide(prev => (prev + 1) % founders.length)
    }
  }

  useEffect(() => {
    setActiveFounder(founders[currentSlide])
  }, [currentSlide])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 3000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, currentSlide])

  const handleSlideClick = (index) => {
    setCurrentSlide(index)
    setIsPaused(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setTimeout(() => setIsPaused(false), 3000)
  }

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + founders.length) % founders.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000)
  }

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % founders.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000)
  }

  return (
    <div className="about-container">
      <h2 className="about-title">Meet Our visionary Co-Founders</h2>

      {/* Desktop View */}
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src={activeFounder.image} 
            alt={activeFounder.name} 
            className="about-image"
          />
        </div>
        <div className="about-info">
          <p className="about-description">
            Our co-founders bring a wealth of experience in AI and technology. 
            Their diverse backgrounds in innovation, strategy and entrepreneurship drive 
            Score Labs' to democratize AI.
          </p>
          <div className="founders-list">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className={`founder-item ${activeFounder.id === founder.id ? 'active' : ''}`}
                onClick={() => handleSlideClick(founders.indexOf(founder))}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="founder-avatar"
                />
                <div className="founder-info">
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-role">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="mobile-carousel">
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={handlePrevSlide}>
            ‹
          </button>
          <div className="carousel-track">
            {founders.map((founder, index) => (
              <div 
                key={founder.id} 
                className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name}
                />
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={handleNextSlide}>
            ›
          </button>
        </div>
        <div className="carousel-nav">
          {founders.map((founder, index) => (
            <div
              key={founder.id}
              className={`carousel-nav-item ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
            >
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="nav-avatar"
              />
              <span className="nav-name">{founder.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs