import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Projects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
