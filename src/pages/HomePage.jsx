import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import AboutSection from '../components/AboutSection'
import ServicesGrid from '../components/ServicesGrid.jsx'
import AlphaEdgeSection from '../components/AlphaEdgeSection.jsx'
import LogoSlider from '../components/LogoSlider.jsx'
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx'
import Footer from '../components/Footer.jsx'

const HomePage = () => {
  return (
    <div>

        <ImageSlider />
        <AboutSection />
        <ServicesGrid />
        <AlphaEdgeSection />
        <LogoSlider />
        <TestimonialsCarousel />

    </div>
  )
}

export default HomePage