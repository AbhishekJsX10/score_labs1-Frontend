import React from 'react';
// import amdRyzen from '../../assets/amd-ryzen.png';
import card1Image from '../../assets/hero-white.webp'
import card2Image from '../../assets/intro-2.webp'
import card3Image from '../../assets/IntroductionImage.webp'

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: 'AI Production Solutions',
      image: card1Image,
      description: 'Score Labs AI solutions are designed to grow and adapt with your business.',
      buttonText: 'Explore More',
    },
    {
      id: 2,
      title: 'AI Fine-Tuning Services',
      image: card2Image,
      description: 'Score Labs AI solutions are designed to grow and adapt with your business.',
      buttonText: 'Explore More',
    },
    {
      id: 3,
      title: 'Scalable AI Integration',
      image: card3Image,
      description: 'Score Labs AI solutions are designed to grow and adapt with your business.',
      buttonText: 'Explore More',
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          Featured Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col items-center ${
                index === 2 ? 'md:col-span-2 md:w-[80%] md:max-w-[500px] md:mx-auto lg:col-span-1 lg:w-full lg:max-w-none' : ''
              }`}
            >
              {/* Image Container with Glow Effect */}
              <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
                <img
                  src={service.image}
                  alt="AMD Ryzen AI"
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center mb-4">
                <h3 className="text-[2rem] font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-[#4155AE] text-center mb-6">
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <button className="border border-black text-black px-6 py-2 rounded hover:bg-black/10 transition-colors duration-300">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;