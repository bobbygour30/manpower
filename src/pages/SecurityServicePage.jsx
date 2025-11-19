// SecurityServicePage.js
import React from 'react';
import { motion } from 'framer-motion';

const SecurityServicePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Header/Banner Section */}
      <div className="relative h-48 md:h-60  overflow-hidden">
        {/* Abstract background shapes - similar to the image's background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://iprasecurity.com/wp-content/uploads/DSC08625-e1752020993724.webp')",
            backgroundPosition: 'top center',
            
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-red-300">HOME</span>
            <span>&gt;</span>
            <span>ABOUT</span>
          </div>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mt-2"
            variants={itemVariants}
          >
            Security Service
          </motion.h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Security Service Details */}
        <div className="lg:col-span-2">
          <motion.div
            className="rounded-lg shadow-lg overflow-hidden mb-8"
            variants={itemVariants}
          >
            {/* Image section */}
            <div className="relative h-64 sm:h-80 bg-gray-200">
              <img
                src="https://alphaservices.in/assets/img/services/facilities-management-services.jpg" // Placeholder image
                alt="Security Service"
                className="w-full h-full object-cover"
              />
              {/* Optional: Overlay or gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Security Service
              </h2>
              <p className="text-gray-600 mb-6">
                "Your security is our priority." is the motto that we live by. We provide highly trained, armed and unarmed
                security professionals to cater for your security needs. Our services include:
              </p>
              <ul className="space-y-3">
                {[
                  'Security consultation',
                  'Security of events',
                  'Bouncers',
                  'Facility inspection',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    variants={itemVariants}
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Our Services */}
        <div className="lg:col-span-1">
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-500/50">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                'Security Services',
                'Fire and Safety Services',
                'Security Escorts Services',
                'Facility Management Services',
                'Manpower Outsourcing Services',
                'House Keeping Services',
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition duration-300 group"
                  variants={itemVariants}
                >
                  <a href="#" className="flex-grow">
                    {service}
                  </a>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition duration-300"
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
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityServicePage;