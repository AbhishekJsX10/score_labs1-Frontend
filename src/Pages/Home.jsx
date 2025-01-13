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
        title="Score Labs "
        description="At Score Labs, we are dedicated to democratizing artificial intelligence by providing innovative, cost-efficient solutions that make AI accessible to businesses of all sizes. "
        buttonText="Get In Touch"
      />
      <Introduction />
      <AboutUs />
      <DescriptionH/>
      <Products/>
      {/* <ReviewSection/> */}
    </>
  )
}

export default Home