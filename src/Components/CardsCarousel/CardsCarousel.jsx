import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card1Image from '../../assets/hero-white.webp';
import card2Image from '../../assets/intro-2.webp';
import card3Image from '../../assets/IntroductionImage.webp';

const CardsCarousel = () => {
  const cards = [
    {
      title: 'AI-Powered Business Solutions',
      description: 'Transform your operations with our cutting-edge AI integration services. Enhance efficiency and decision-making through intelligent automation.',
      image: card1Image
    },
    {
      title: 'Custom AI Development',
      description: 'Get tailored AI solutions designed specifically for your business needs. Our expert team develops scalable and efficient AI systems.',
      image: card2Image
    },
    {
      title: 'AI Consultation Services',
      description: 'Leverage our expertise in AI strategy and implementation. We help businesses navigate the AI landscape and maximize their potential.',
      image: card3Image
    },
    {
      title: 'Machine Learning Integration',
      description: 'Implement advanced machine learning models that evolve with your business. Unlock insights and patterns in your data.',
      image: card1Image
    },
    {
      title: 'AI Performance Optimization',
      description: 'Enhance your existing AI systems with our optimization services. Improve speed, accuracy, and resource efficiency.',
      image: card2Image
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full px-4 py-16 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-4">
          Advancing Technologies with help of AI
        </h1>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          At score lab, we are committed to democratizing AI, making it accessible for all 
          business. Our mission is to provide cost-effective and scalable solutions that 
          drive innovation and efficiency
        </p>

        <div className="relative pb-12">
          <Slider {...settings} className="cards-slider">
            {cards.map((card, index) => (
              <div key={index} className="px-3 pb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-[500px] flex flex-col">
                  {/* Image Section - 40% height */}
                  <div className="relative h-[200px] w-full bg-gray-50 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  
                  {/* Content Section - 60% height */}
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">{card.title}</h3>
                      <p className="text-gray-600 text-[1.1rem] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 mt-4">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .cards-slider .slick-slide {
          opacity: 0.5;
          transition: all 0.3s ease;
          transform: scale(0.9);
        }
        .cards-slider .slick-center {
          opacity: 1;
          transform: scale(1);
        }
        .cards-slider .slick-prev,
        .cards-slider .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
          background: transparent !important;
        }
        .cards-slider .slick-prev:before {
          content: '‹';
          font-size: 40px;
          color: #000;
          font-family: inherit;
          font-weight: 800;
        }
        .cards-slider .slick-next:before {
          content: '›';
          font-size: 40px;
          color: #000;
          font-family: inherit;
          font-weight: 800;
        }
        .cards-slider .slick-dots {
          bottom: -30px;
        }
        .cards-slider .slick-dots li button:before {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default CardsCarousel;