import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-[#333]">
      {/* Hero Section */}
      <div
        className="w-full h-[260px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920')",
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-4">
          <p className="text-sm text-white mb-2 flex items-center gap-2">
            <span>HOME</span> <span className="text-red-500">›</span>{" "}
            <span>GALLERY</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
            Our Contact
          </h1>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 py-14">
        {/* Head Office - Updated to new Delhi address */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl p-10 text-center"
        >
          <div className="mx-auto w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
            <FaLocationPin className="text-white text-3xl" />
          </div>

          <h2 className="text-xl font-semibold mb-2">Head Office</h2>
          <p className="text-gray-600 text-sm mb-1">
            E-251/B Gali no 4,
            <br />
            First floor,
            <br />
            Khajoori Khas 110094
            <br />
            near Adarsh Lakhpat model secondary school
          </p>
          <p className="text-gray-600 text-sm mb-1">E-mail: info@jmsaries.in</p>
          <p className="text-gray-600 text-sm mb-4">Call: +91-95998 65474</p>

          <h3 className="font-semibold mb-3">Social Connect</h3>
          <div className="flex justify-center gap-5 text-xl text-gray-700">
            <FaFacebookF /> <FaInstagram /> <FaLinkedinIn /> <FaTwitter />{" "}
            <FaYoutube />
          </div>
        </motion.div>
        <iframe
          className="w-full  rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d874.8595508426001!2d77.26306745334287!3d28.706447495742367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzI0LjUiTiA3N8KwMTUnNDcuMiJF!5e0!3m2!1sen!2sin!4v1766838028311!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Contact Us
          </h2>
          <h3 className="text-lg text-center text-gray-600 mb-10">
            Get In Touch
          </h3>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>

            <button className="w-full bg-red-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition">
              Get A Quotation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
