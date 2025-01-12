import React from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import Introduction from '../Components/Introduction/Introduction'
import AboutUs from '../Components/About/AboutUs'
import DescriptionH from '../Components/DescriptionHome/DescriptionH'
import Products from '../Components/Products/Products'
import ReviewSection from '../Components/CustomerReview/ReviewSection'

const Home = () => {
  return (
    <>
      <HeroSection
        title="Score Labs AI"
        description="DISRUPTIVE TECHNOLOGIES TO DEMOCRATIZE AI"
        buttonText="Call Now"
      />
      <Introduction />
      <AboutUs />
      <DescriptionH/>
      <Products/>
      <ReviewSection/>
    </>
  )
}

export default Home