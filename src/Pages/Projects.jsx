import React from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import CardsCarousel from '../Components/CardsCarousel/CardsCarousel'
import FeaturedSolutions from '../Components/FeaturedSolutions/FeaturedSolutions'
import FeaturedServices from '../Components/FeaturedServices/FeaturedServices'

const Projects = () => {
  return (
    <>
    <HeroSection title="Services" description="At Score Labs, we are dedicated to democratizing artificial intelligence by providing innovative, cost-efficient solutions that make AI accessible to businesses of all sizes." buttonText="Get In Touch"/>
    <CardsCarousel/>
    <FeaturedSolutions />
    <FeaturedServices/>
    </>
  )
}

export default Projects