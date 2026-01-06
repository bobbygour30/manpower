// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" }, // or keep as dropdown if needed
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          {/* About Us */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">
              About Us
            </h4>
            <p className="text-gray-400 leading-relaxed">
              JMS Aries Pvt Ltd is one of the most reliable service providers
              engaged in offering Security Guards & Facility Management Services
              across PAN India for more than 18 years.
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">
              Head Office
            </h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                E-251/B, Gali no 4, First floor, Khajoori Khas 110094, near
                Adarsh Lakhpat model secondary school
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                +91 93113 40122
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase">
              Quick Links
            </h4>
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
            Copyright © 2022 JMS Aries Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-4 order-1 md:order-2">
            
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="opacity-75">|</span>
            <Link to="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-16 z-50 bg-red-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-6 h-6 text-white transform rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;
