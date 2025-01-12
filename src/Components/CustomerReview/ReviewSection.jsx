import React from 'react'
import './ReviewSection.css'
import nikeLogo from '../../assets/nike-logo.png'

const reviews = [
  {
    id: 1,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/ripan.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  },
  {
    id: 2,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/sudeep.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  },
  {
    id: 3,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/chanika.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  },
  {
    id: 4,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/sandeep.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  },
  {
    id: 5,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/himanshu.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  },
  {
    id: 6,
    rating: 4,
    text: "The efficiency and cost savings were game-changers for us!",
    reviewer: {
      name: "Alice Johnson",
      position: "CTO, Tech Johnson",
      image: "/founders/brent.jpg",
      company: {
        name: "Nike",
        logo: nikeLogo
      }
    }
  }
]

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-stars">
        {[...Array(review.rating)].map((_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
      <p className="review-text">{review.text}</p>
      <div className="reviewer-info">
        <div className="reviewer-image">
          <img src={review.reviewer.image} alt={review.reviewer.name} />
        </div>
        <div className="reviewer-details">
          <h4 className="reviewer-name">{review.reviewer.name}</h4>
          <p className="reviewer-position">{review.reviewer.position}</p>
        </div>
        <div className="company-logo">
          <img src={review.reviewer.company.logo} alt={review.reviewer.company.name} />
        </div>
      </div>
    </div>
  )
}

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="review-header">
        <h2 className="review-title font-bold">Customer Testimonials</h2>
        <p className="review-subtitle">Score Labs transformed our AI capabilities effortlessly.</p>
      </div>
      
      <div className="review-grid">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewSection