import React from 'react';
import { Shield, FireExtinguisher, Briefcase, Home, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample data for the services
const services = [
  {
    title: 'Security Services',
    image: 'https://t3.ftcdn.net/jpg/08/69/06/74/360_F_869067443_7FhWJbZiT0Q1KDCokFLVZzSITyQEnv0W.jpg',
    Icon: Shield,
  },
  {
    title: 'Fire and Safety Services',
    image: 'https://alphaservices.in/assets/img/services/fire_saflty.jpg',
    Icon: FireExtinguisher,
  },
  {
    title: 'Security Escorts Services',
    image: 'https://alphaservices.in/assets/img/services/escorts.jpg',
    Icon: Briefcase,
  },
  {
    title: 'Facility Management Services',
    image: 'https://alphaservices.in/assets/img/services/facility.jpg',
    Icon: Wrench,
  },
  {
    title: 'Manpower Outsourcing Services',
    image: 'https://alphaservices.in/assets/img/services/manpower2.jpg',
    Icon: Users,
  },
  {
    title: 'House Keeping Services',
    image: 'https://alphaservices.in/assets/img/services/housekeeping.jpg',
    Icon: Home,
  },
];

const ServiceCard = ({ service, index }) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg cursor-pointer group h-full flex flex-col"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* 1. Image Container: 
        Has overflow-hidden for the zoom effect, but NO rounded corners 
        on the bottom so it sits flush with the text area.
        Added rounded-t-lg to match the card top.
      */}
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* 2. Floating Icon:
        MOVED OUTSIDE the image container.
        Positioned absolute relative to the card.
        top-56 aligns it exactly with the bottom of the h-56 image.
        -translate-y-1/2 pulls it up to sit exactly on the seam.
      */}
      <div className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-white p-4 rounded-full shadow-md group-hover:shadow-red-200 transition-shadow">
          <service.Icon className="w-8 h-8 text-red-600" strokeWidth={2} />
        </div>
      </div>

      {/* 3. Text Content */}
      <div className="pt-12 pb-8 px-6 text-center relative flex-grow flex items-center justify-center rounded-b-lg">
        
        {/* Large Background Number */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-7xl font-bold text-gray-100 select-none -z-0 pointer-events-none">
          {formattedIndex}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors relative z-10">
          {service.title}
        </h3>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-red-500"></span>
            <span className="text-sm font-bold text-red-500 uppercase tracking-widest">SERVICES</span>
            <span className="h-[2px] w-8 bg-red-500"></span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What We Provide
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;