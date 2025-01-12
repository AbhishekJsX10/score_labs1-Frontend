import React from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import CardsCarousel from '../Components/CardsCarousel/CardsCarousel'
import FeaturedSolutions from '../Components/FeaturedSolutions/FeaturedSolutions'
import FeaturedServices from '../Components/FeaturedServices/FeaturedServices'

const Projects = () => {
  return (
    <>
    <HeroSection title="Together We Advance" description="Pushingthe limits of innovation to tackle some of the world's toughest challenges with our partners" buttonText="Call Now"/>
    <CardsCarousel/>
    <FeaturedSolutions />
    <FeaturedServices/>
    </>
  )
}

export default Projects