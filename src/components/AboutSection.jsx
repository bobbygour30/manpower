import React from 'react';
import { Shield, Home, ArrowRight } from 'lucide-react'; // Using Lucide icons

const AboutSection = () => {
  return (
    // Max width container for centering and padding
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Main Grid Layout: Two columns on medium screens and up */}
      <div className="flex  gap-12 items-center">
        
        
        {/* <div className="md:order-1 order-2">
          <div className="relative pt-[56.25%] shadow-2xl rounded-lg overflow-hidden"> 
           
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
              title="Security Guard Management System | Novagems"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            
            <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-40 p-1 rounded flex items-center">
              <Shield className="w-4 h-4 mr-1" /> 
              Security Guard Management System | Novagems
            </div>
            <button className="absolute top-4 right-4 text-white text-sm bg-black bg-opacity-40 p-1 rounded hover:bg-opacity-60 transition-colors">
                Copy link
            </button>
          </div>
        </div> */}

        {/* === Right Column: Content and Services === */}
        <div className=" space-y-6">
          
          {/* Section Header */}
          <div>
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-1">ABOUT US</p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Get Best Security Services For House
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-lg">
           JMS Aries Pvt Ltd is one of the most reliable service
            providers engaged in offering Security Guards & Facility Management
            Services across PAN India for more than 18 years. Initially started in Delhi,
            we now have our offices in some of the major cities in India....
          </p>

          {/* Service Highlights */}
          <div className="space-y-6 pt-4">
            
            {/* 1. Security Guard Services */}
            <div className="flex space-x-4 items-start">
              <div className="flex-shrink-0 bg-red-600 p-3 rounded-full text-white shadow-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Security Guard Services</h3>
                <p className="text-gray-500 mt-1">
                  We provides trained security officers for security services to our
                  clients each day and make sure that every activity can be maintained
                  all the time.
                </p>
              </div>
            </div>

            {/* 2. Facility Management Services */}
            <div className="flex space-x-4 items-start">
              <div className="flex-shrink-0 bg-red-600 p-3 rounded-full text-white shadow-lg">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Facility Management Services</h3>
                <p className="text-gray-500 mt-1">
                  Facility management services is a kind of service in which an individual
                  needs to deal with germs, dust, pollution, and stink.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <a
            href="#" // Replace with actual link
            className="inline-flex items-center text-red-600 font-semibold text-lg mt-6 group hover:text-red-800 transition-colors"
          >
            Learn More 
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;