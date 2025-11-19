import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#333]">
      {/* Hero Section */}
      <div
        className="w-full h-[260px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920')" }}
      >
        <div className="max-w-6xl mx-auto w-full px-4">
          <p className="text-sm text-white mb-2 flex items-center gap-2">
            <span>HOME</span> <span className="text-red-500">›</span> <span>ABOUT</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            Our Company
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-12">
        {/* Left Image + Badge */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md"
          >
            <img
              src="https://images.unsplash.com/photo-1581091012372-7c2c12e6cac9?q=80&w=1000"
              alt="Experience"
              className="w-full h-full object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute -right-6 top-10 bg-red-600 text-white p-6 rounded-xl shadow-xl w-40 text-center">
              <p className="text-sm font-light">Good Experience In Last</p>
              <p className="text-5xl font-bold leading-tight">17</p>
              <p className="text-sm font-semibold">Years</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-sm text-red-600 font-semibold tracking-wider mb-1">
            ABOUT US
          </h2>

          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Alpha Manpower Services Pvt. Ltd.
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Alpha Manpower Service Pvt Ltd is one of the most reliable service providers engaged in
            offering Security Guards & Facility Management Services across PAN India for more than
            18 years. Initially started in Delhi, we now have our offices in some of the major
            cities in India. "Your security is our priority" is the motto that we live by. Our
            services are cost-effective, premium and dependable making us favorable among all our
            clients.
          </p>

          {/* Vision */}
          <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Our vision is to be givers of the best security solution giving peace of mind and
            assurance of protection and safety and easing your business with proper facility
            management.
          </p>

          {/* Mission */}
          <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Our mission is to provide excellent security and facility management to our clients
            tailored to their needs and requirement.
          </p>

          {/* Values */}
          <h4 className="text-xl font-semibold mb-3">Our Values</h4>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li>🔴 Accountability – We honor our commitments.</li>
            <li>🔴 Vigilance – Our staff is ever vigilant and responds quickly.</li>
            <li>🔴 Integrity – We are honest and trustworthy. All our dealings are in an ethical manner.</li>
          </ul>

          {/* Why Choose Us */}
          <h4 className="text-xl font-semibold mt-8 mb-3">Why choose us?</h4>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            When it comes to security, we know you deserve the best. With Alpha manpower services,
            we guarantee that you will receive premium customer service and excellent hospitality.
            Some of the salient features that make us favored among our patrons are:
          </p>
          
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li>🔴 Quality assured services</li>
            <li>🔴 Ethical business policies</li>
            <li>🔴 Economical Security solutions</li>
            <li>🔴 On time delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
