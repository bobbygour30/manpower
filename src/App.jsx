import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import SecurityServicePage from './pages/SecurityServicePage'
import FireSafetyServicePage from './pages/FireSafetyServicePage'
import SecurityEscortServicePage from './pages/SecurityEscortServicePage'
import FacilityManagementServicePage from './pages/FacilityManagementServicePage'
import ManpowerOutsourcingPage from './pages/ManpowerOutsourcingPage'
import HousekeepingServicesPage from './pages/HousekeepingServicesPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/security" element={<SecurityServicePage />} />
        <Route path="/services/fire-safety" element={<FireSafetyServicePage />} />
        <Route path="/services/security-escorts" element={<SecurityEscortServicePage />} />
        <Route path="/services/facility-management" element={<FacilityManagementServicePage />} />
        <Route path="/services/manpower-outsourcing" element={<ManpowerOutsourcingPage />} />
        <Route path="/services/housekeeping" element={<HousekeepingServicesPage />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App