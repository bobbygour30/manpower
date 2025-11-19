// Footer.jsx
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' }, // or keep as dropdown if needed
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          
          {/* About Us */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              Alpha Manpower Service Pvt Ltd is one of the most reliable service providers engaged in offering Security Guards & Facility Management Services across PAN India for more than 18 years.
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">Head Office</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                1/56D, Lalita Park, Laxmi Nagar, Delhi-110092
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                +91 - 9899884818
              </p>
            </div>
          </div>

          {/* Corporate Office */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">Corporate Office</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                A - 508, Utsav Business Plaza Nashik Road, Bhosari, Pune - 411039
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                +91 - 95899866474
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="flex items-center text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p className="order-2 md:order-1 mt-3 md:mt-0 text-center md:text-left">
            Copyright © 2022 Alpha Manpower Services. All Rights Reserved. Website Designed by RSAR Step In Business Hub Pvt Ltd
          </p>

          <div className="flex items-center space-x-4 order-1 md:order-2">
            <div className="bg-white p-1 rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Google_%22G%22_Logo.svg"
                alt="Google Partner"
                className="w-4 h-4"
              />
            </div>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <span className="opacity-75">|</span>
            <Link to="/terms" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919899885474" // update number if needed
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
          <path d="M380.9 97.4C339.4 55.9 283.4 32 224 32S108.6 55.9 67.1 97.4c-83.3 83.3-83.3 218.3 0 301.6l-50.5 50.5c-4.7 4.7-6.2 11.6-4 18.2 2.3 6.6 8.3 11.2 15.2 11.2h306.4c7.3 0 13.4-5.3 15.2-12.7 1.8-7.4-.7-14.7-5.5-19.5l-50.5-50.5c83.3-83.3 83.3-218.3 0-301.6zM224 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
        </svg>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-16 z-50 bg-red-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-6 h-6 text-white transform rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;