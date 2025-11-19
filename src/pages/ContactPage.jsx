import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-[#333]">
      {/* Hero Section */}
      <div
        className="w-full h-[260px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920')" }}
      >
        <div className="max-w-6xl mx-auto w-full px-4">
          <p className="text-sm text-white mb-2 flex items-center gap-2">
            <span>HOME</span> <span className="text-red-500">›</span> <span>GALLERY</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            Our Contact
          </h1>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 py-14">
        {/* Head Office */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="mx-auto w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
            <FaLocationPin className="text-white text-3xl" />
          </div>

          <h2 className="text-xl font-semibold mb-2">Head Office</h2>
          <p className="text-gray-600 text-sm mb-1">1/56D, Lalita Park, Laxmi Nagar, Delhi-110092</p>
          <p className="text-gray-600 text-sm mb-1">E-mail: info@alphaservices.in</p>
          <p className="text-gray-600 text-sm mb-4">Call: +91-95998 65474</p>

          <h3 className="font-semibold mb-3">Social Connect</h3>
          <div className="flex justify-center gap-5 text-xl text-gray-700">
            <FaFacebookF /> <FaInstagram /> <FaLinkedinIn /> <FaTwitter /> <FaYoutube />
          </div>
        </motion.div>

        {/* Corporate Office */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="mx-auto w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
            <FaLocationPin className="text-white text-3xl" />
          </div>

          <h2 className="text-xl font-semibold mb-2">Corporate Office</h2>
          <p className="text-gray-600 text-sm mb-1">A- 508, Utsav Business Plaza Nashik Road, Bhosari, Pune - 411039</p>
          <p className="text-gray-600 text-sm mb-1">E-mail: adm@alphaservices.in</p>
          <p className="text-gray-600 text-sm mb-1">E-mail: pallavi@alphaservices.in</p>
          <p className="text-gray-600 text-sm mb-4">Call: +91-95998 65474</p>

          <h3 className="font-semibold mb-3">Social Connect</h3>
          <div className="flex justify-center gap-5 text-xl text-gray-700">
            <FaFacebookF /> <FaInstagram /> <FaLinkedinIn /> <FaTwitter /> <FaYoutube />
          </div>
        </motion.div>
      </div>

      {/* Google Maps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 pb-16">
        <iframe
          className="w-full h-80 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.30760138057!2d77.27839027549238!3d28.5908369756828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d1e046c53f%3A0x4bb7a4484a1c2cc2!2sLalita%20Park%2C%20Laxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <iframe
          className="w-full h-80 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.768884451721!2d73.85010817537283!3d18.538647682546424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2362b8d715f%3A0x8a8f3ea0e327669c!2sBhosari%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000001"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <h3 className="text-lg text-center text-gray-600 mb-10">Get In Touch</h3>

          <form className="space-y-6">
            <input type="text" placeholder="Enter Name" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none" />
            <input type="text" placeholder="Phone Number" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none" />
            <textarea placeholder="Message" rows="4" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"></textarea>

            <button className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition">
              Get A Quatation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
