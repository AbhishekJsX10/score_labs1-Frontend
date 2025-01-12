import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedSolutions = () => {
  const banners = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      title: 'AI Solutions',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      title: 'Machine Learning',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      title: 'Data Analytics',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      title: 'Cloud Computing',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
    ),
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
          Featured Solutions
        </h2>
        
        <div className="relative featured-slider">
          <Slider {...settings}>
            {banners.map((banner) => (
              <div key={banner.id} className="outline-none">
                <div className="relative aspect-[16/9] md:aspect-[21/7] overflow-hidden rounded-lg">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .featured-slider .slick-slide {
          padding: 0 1px;
        }
        .featured-slider .slick-prev,
        .featured-slider .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
          background: transparent !important;
        }
        .featured-slider .slick-prev {
          left: 20px;
        }
        .featured-slider .slick-next {
          right: 20px;
        }
        .featured-slider .slick-prev:before {
          content: '‹';
          font-size: 40px;
          color: #fff;
          font-family: inherit;
          font-weight: 300;
        }
        .featured-slider .slick-next:before {
          content: '›';
          font-size: 40px;
          color: #fff;
          font-family: inherit;
          font-weight: 300;
        }
        .featured-slider .slick-dots {
          bottom: 20px;
          z-index: 20;
        }
        .featured-slider .slick-dots li {
          margin: 0 4px;
        }
        .featured-slider .slick-dots li button:before {
          content: '';
        }
        .featured-slider .slick-dots li.slick-active div {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FeaturedSolutions;