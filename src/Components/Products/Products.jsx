import React from 'react'
import './Products.css'
// import amdImage from '../../assets/amd-ryzen.png'
import card1Image from '../../assets/hero-white.webp'
import card2Image from '../../assets/intro-2.webp'
import card3Image from '../../assets/IntroductionImage.webp'

const productData = [
  {
    id: 1,
    title: 'Transform Your Business Operations Through Seamless AI Integration',
    description: 'Score Labs offers cutting-edge AI solutions designed to enhance efficiency and scalability.',
    image: card1Image,
    buttonText: 'Learn More',
    link: '#learn-more'
  },
  {
    id: 2,
    title: 'Experience Unmatched Efficiency and Cost Savings with Our AI Technology',
    description: 'Our innovative approach maximizes performance while optimizing resource consumption.',
    image: card2Image,
    buttonText: 'Sign-up',
    link: '#sign-up'
  },
  {
    id: 3,
    title: 'Future Ready Solutions Tailored for Your Business Needs',
    description: 'Score Labs\' AI solutions are designed to grow and scale with your business.',
    image: card3Image,
    buttonText: 'Getting-started',
    link: '#getting-started'
  }
]

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title font-bold">
        Discover the Power of AI with Score Labs' Innovative Solutions
      </h1>
      
      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-content">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <a href={product.link} className="product-button">
                {product.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products