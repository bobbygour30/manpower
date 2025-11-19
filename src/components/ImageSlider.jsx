import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using lucide-react for icons

const images = [
  'https://t3.ftcdn.net/jpg/08/69/06/74/360_F_869067443_7FhWJbZiT0Q1KDCokFLVZzSITyQEnv0W.jpg',
  'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64d251436e461b001c8c5de8.jpg',
  'https://www.promansecuritech.com/wp-content/themes/astra/images/banner-2.jpg',
  
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentImageIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentImageIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  // Optional: Auto-play functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext();
  //   }, 5000); // Change image every 5 seconds
  //   return () => clearInterval(interval);
  // }, [currentImageIndex]);

  return (
    <div className="relative w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Current Image */}
      <div
        className="w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft size={32} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all z-10"
        onClick={goToNext}
      >
        <ChevronRight size={32} />
      </div>

      {/* Optional: Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-70'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;