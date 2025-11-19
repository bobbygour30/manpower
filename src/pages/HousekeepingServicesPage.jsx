// HousekeepingServicesPage.js
import React from 'react';
import { motion } from 'framer-motion';

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Stagger the appearance of sub-elements
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Reusable Service Link Component (for the right sidebar) ---
const ServiceLink = ({ name, isActive }) => (
  <motion.li
    variants={itemVariants}
    className={`group flex items-center justify-between p-3 cursor-pointer transition duration-300 ${
      isActive ? 'bg-gray-100 text-blue-700 font-semibold' : 'hover:bg-gray-50 text-gray-700'
    } border-b border-gray-100 last:border-b-0`}
  >
    <a href="#" className="flex-grow">
      {name}
    </a>
    <svg
      className={`w-4 h-4 transition duration-300 ${
        isActive ? 'text-blue-700' : 'text-gray-400 group-hover:translate-x-1'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  </motion.li>
);

// --- Main Component ---
const HousekeepingServicesPage = () => {
  const services = [
    { name: 'Security Services', active: false },
    { name: 'Fire and Safety Services', active: false },
    { name: 'Security Escorts Services', active: false },
    { name: 'Facility Management Services', active: false },
    { name: 'Manpower Outsourcing Services', active: false },
    { name: 'House Keeping Services', active: true }, // ACTIVE SERVICE
  ];

  return (
    <motion.div
      className="min-h-screen bg-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Top Header/Banner Section */}
      <div className="relative h-48 md:h-60 overflow-hidden">
        {/* Abstract background treatment */}
       <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://iprasecurity.com/wp-content/uploads/DSC08625-e1752020993724.webp')",
            backgroundPosition: 'top center',
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
          <div className="flex items-center space-x-2 text-sm font-semibold tracking-wider">
            <span className="text-red-400">HOME</span>
            <span className="opacity-70">&gt;</span>
            <span className="opacity-70">ABOUT</span>
          </div>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mt-2"
            variants={itemVariants}
          >
            Housekeeping Services
          </motion.h1>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Service Details (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <motion.div
            className="rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            {/* Image section */}
            <div className="relative h-64 sm:h-80 w-full bg-gray-200 shadow-xl">
              <img
                src="https://alphaservices.in/assets/img/services/housekeeping.jpg" // Placeholder for Housekeeping image
                alt="Housekeeping Service"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-0 mt-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Housekeeping Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Housekeeping services ensure that your company is always kept clean and well maintained. Housekeeping
                services include janitorial services, regular cleaning and moping, etc. We provide staff for housekeeping
                duty.
              </p>

              {/* No specific list items are shown in the image, so we keep the description clean */}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Our Services List (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 lg:p-0"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-600 w-3/4">
              Our Services
            </h3>
            <ul className="space-y-0 border border-gray-100 rounded-md">
              {services.map((service, index) => (
                <ServiceLink
                  key={index}
                  name={service.name}
                  isActive={service.active}
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HousekeepingServicesPage;