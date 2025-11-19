import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-1.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-2.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-3.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-4.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-5.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-6.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-7.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-8.jpg",
  "https://alphaservices.in/assets/img/portfolio/portfolio-html-9.jpg",
];

export default function GalleryPage() {
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
            Our Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-64 object-cover hover:brightness-95 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}