// Navbar.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Phone, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const hoverTimeout = useRef(null);

  const contactInfo = {
    email: "info@jmsaries.in",
    phone: "+91-9898985474",
    careers: "Careers",
  };

  const services = [
    { name: "Security Services", to: "/services/security" },
    { name: "Fire Safety Services", to: "/services/fire-safety" },
    { name: "Security Escorts", to: "/services/security-escorts" },
    { name: "Facility Management", to: "/services/facility-management" },
    { name: "Manpower Outsourcing", to: "/services/manpower-outsourcing" },
    { name: "Housekeeping Services", to: "/services/housekeeping" },
  ];

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "#" }, // placeholder, handled specially
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm flex-wrap">
          <div className="hidden sm:block">
            JMS Aries Pvt. Ltd - <strong>Service with Integrity</strong>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 text-xs sm:text-sm">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center hover:text-red-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-1" /> {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center hover:text-red-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" /> {contactInfo.phone}
            </a>
            <Link
              to="/careers"
              className="flex items-center hover:text-red-400 transition-colors"
            >
              <Briefcase className="w-4 h-4 mr-1" /> {contactInfo.careers}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <div className="text-2xl font-bold text-gray-800 tracking-wide leading-none">
                <span className="text-red-600">JMS</span>Aries
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Manpower Services Pvt. Ltd.
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <div className="flex space-x-6">
              {navLinks.map((link) =>
                link.name === "Services" ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(hoverTimeout.current);
                      setServiceOpen(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeout.current = setTimeout(() => setServiceOpen(false), 200);
                    }}
                  >
                    <button className="text-gray-600 hover:text-red-600 px-3 py-2 text-base font-medium transition">
                      Services
                    </button>

                    {serviceOpen && (
                      <div
                        className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg py-3 border z-50"
                        onMouseEnter={() => {
                          clearTimeout(hoverTimeout.current);
                          setServiceOpen(true);
                        }}
                        onMouseLeave={() => {
                          hoverTimeout.current = setTimeout(() => setServiceOpen(false), 200);
                        }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-gray-600 hover:text-red-600 px-3 py-2 text-base font-medium transition"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition flex items-center"
            >
              <Briefcase className="w-5 h-5 mr-2" /> Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          <Link to="/" className="block py-2 text-gray-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-700" onClick={toggleMenu}>
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <details className="bg-gray-50 rounded-lg overflow-hidden">
            <summary className="cursor-pointer py-2 px-3 text-gray-700">Services</summary>
            <div className="pl-4 pb-2">
              {services.map((s) => (
                <Link
                  key={s.name}
                  to={s.to}
                  className="block py-2 text-gray-600"
                  onClick={toggleMenu}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/gallery" className="block py-2 text-gray-700" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link to="/contact" className="block py-2 text-gray-700" onClick={toggleMenu}>
            Contact
          </Link>

          <Link
            to="/contact"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 mt-2 rounded flex items-center justify-center"
            onClick={toggleMenu}
          >
            <Briefcase className="w-5 h-5 mr-2" /> Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;