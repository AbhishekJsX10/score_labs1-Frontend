import React, { useState, useEffect, useRef } from 'react'
import './AboutUs.css'
import FounderModal from './FounderModal'

const founders = [
  {
    id: 1,
    name: 'Chanika Angchaikulkit',
    role: 'Co-Founder and COO',
    image: '/founders/chanika.jpg',
    description: "Operations Executive, Fortune 50, 22+yrs GA Tech Alum An accomplished operations executive with over 22 years of experience managing global-scale initiatives at Fortune 50 companies. Chanika specializes in operational excellence, strategic planning, and scaling businesses. Her background includes leading diverse teams, optimizing workflows, and executing transformational projects that drive organizational growth. Her operational acumen ensures Score Labs delivers on its ambitious goals effectively and efficiently"
  },
  {
    id: 2,
    name: 'Himanshu Singh',
    role: 'CEO of Score Labs',
    image: '/founders/himanshu.jpg',
    description: "Entrepreneur, Ex-Management Consultant, Engineer, Researcher, 15+ years Himanshu Singh is an accomplished entrepreneur and deep-tech strategist with expertise in AI-driven transformations, go-to-market strategies, and operational excellence. As co-founder of iSMRITI, he built a global tech consulting firm, leading transformative projects across 13 countries, including predictive maintenance systems and large-scale public health initiatives. A former Management Consultant at McKinsey & Company, Himanshu has delivered multi-billion-dollar strategies for Fortune 500 companies, spanning pricing transformations, procurement optimization, and supply chain innovation. An alumnus of IIT Kanpur, he holds a PhD in Biomedical Engineering from the National University of Singapore, where his pioneering research advanced malaria vaccine development. His career includes impactful roles with Rolls-Royce in Singapore and global technology leadership, solidifying his reputation as a visionary leader in deep-tech innovation"
  },
  {
    id: 3,
    name: 'Sudeep Suman',
    role: 'Co-Founder and Investor',
    image: '/founders/sudeep.jpg',
    description: "Partner & Managing Director, AlixPartners, 24+ yrs Indian Institute of Technology Kanpur Alum A seasoned strategist with 24+ years of experience in strategy, operations, and financial management. Sudeep is a Partner and Managing Director at AlixPartners, where he has advised global corporations on transformative growth initiatives and operational efficiency. His expertise in technology-driven innovation and business transformation provides invaluable guidance to Score Labs’ strategic initiatives."
  },
  {
    id: 4,
    name: 'Ripan Das',
    role: 'Co-Founder and CTO',
    image: '/founders/ripan.jpg',
    description: "Chip Design, Principal Architect, Intel, 23+yrs Indian Institute of Technology Kanpur Alum A distinguished technologist with over 23 years of experience in hardware and software innovation, Ripan is a thought leader in generative AI open-source development, holding multiple chip design patents. As a former Principal Architect at Intel, he played a pivotal role in developing cutting-edge AI solutions and optimizing performance for enterprise-grade hardware systems. His deep expertise in AI and hardware-software integration anchors Score Labs’ technical vision."
  },
  {
    id: 5,
    name: 'Sandeep Suman',
    role: 'Head of India Division',
    image: '/founders/sandeep.jpg',
    description: "An IIT graduate with over 20 years of expertise in data center infrastructure and energy optimization, Sandeep leads SCORE Labs' operations in India. With a Master's in Project Management and a strong focus on customer acquisition, he plays a pivotal role in driving growth, implementing innovative infrastructure solutions, and establishing SCORE Labs as a leader in the Indian market."
  }
]

const AboutUs = () => {
  const [activeFounder, setActiveFounder] = useState(founders[0])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFounder, setSelectedFounder] = useState(null)
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

  const handleFounderClick = (founder) => {
    setSelectedFounder(founder)
    setIsModalOpen(true)
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
                onClick={() => {
                  handleSlideClick(founders.indexOf(founder));
                  handleFounderClick(founder);
                }}
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
                onClick={() => handleFounderClick(founder)}
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
              onClick={() => {
                handleSlideClick(index);
                handleFounderClick(founder);
              }}
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

      {/* Founder Modal */}
      <FounderModal
        founder={selectedFounder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default AboutUs