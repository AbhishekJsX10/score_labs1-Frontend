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
      title: 'AI Production Solutions',
      description: 'Advanced alternatives to traditional GPUs for AI production inferencing tasks, delivering high performance with reduced resource consumption. Our solutions are designed to integrate seamlessly into your existing systems, ensuring efficient and scalable AI deployment.',
      image: card1Image
    },
    {
      title: 'AI Fine-Tuning Services',
      description: 'Our AI fine-tuning services enable businesses to customize AI models to meet their specific needs. By tailoring models to your unique requirements, we help you achieve optimal performance and accuracy in your AI applications.',
      image: card2Image
    },
    {
      title: 'Scalable AI Integration',
      description: 'We provide solutions built for performance, scalability, and adaptability, allowing your AI capabilities to grow alongside your business. Our future-ready approach ensures seamless expansion opportunities, empowering you to drive innovation and enhance efficiency.',
      image: card3Image
    },
    {
      title: 'Sustainable AI Deployment',
      description: 'At Score Labs, we prioritize sustainability in our AI solutions. Our energy-conscious technologies not only reduce operational costs but also contribute to a greener approach to AI deployment, aligning with modern environmental challenges.',
      image: card1Image
    },
    {
      title: 'Flexible Integration Services',
      description: 'Our AI solutions are designed for flexible integration, fitting effortlessly into your existing infrastructure. Whether you operate in the cloud or on-premises, we ensure a smooth transition and minimal disruption to your operations.',
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
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-[600px] md:h-[500px] flex flex-col">
                  {/* Image Section - 40% height */}
                  <div className="relative h-[240px] md:h-[200px] w-full bg-gray-50 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-48 h-48 md:w-40 md:h-40 object-contain"
                    />
                  </div>
                  
                  {/* Content Section - 60% height */}
                  <div className="flex flex-col justify-between flex-grow p-6 md:p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">{card.title}</h3>
                      <p className="text-gray-600 text-[1.1rem] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 mt-6 md:mt-4">
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