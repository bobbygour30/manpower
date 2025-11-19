import React, { useState, useEffect } from 'react';
import { User, MessageSquare } from 'lucide-react';

const testimonials = [
  { feedback: "A small boutique in a posh area thought any wrong thing would not happen...", avatar: "https://randomuser.me/api/portraits/men/32.jpg", company: "Eletronics Systems Private Limited" },
  { feedback: "A small theft that happened in my shop made me very much skeptical...", avatar: "https://randomuser.me/api/portraits/women/44.jpg", company: "Alphonic India Services Pvt.Ltd" },
  { feedback: "I bought three surveillance products from your company and till date, I have found no issues...", avatar: "https://randomuser.me/api/portraits/men/68.jpg", company: "India Post" },
  { feedback: "I really appreciate their commitment to deliver as it is a rare thing to find all the managers...", avatar: "https://randomuser.me/api/portraits/women/50.jpg", company: "Cosmo Global Foresight" },
  { feedback: "Excellent service and professional staff. Highly recommend for security solutions!", avatar: "https://randomuser.me/api/portraits/men/12.jpg", company: "SecureTech Innovations" },
  { feedback: "Very satisfied with the quick response and effective security measures implemented.", avatar: "https://randomuser.me/api/portraits/women/22.jpg", company: "Global Safety Solutions" },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Determine how many cards to show per view
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 768) return 2;  // tablet
    return 1; // mobile
  };

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = testimonials.length - cardsPerView;
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next > maxIndex) {
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 50);
          return 0;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Transform value for track
  const transformValue = `translateX(-${(currentIndex * 100) / cardsPerView}%)`;

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-200 text-[10rem] font-extrabold select-none opacity-5 leading-none z-0 hidden lg:block">
        Feedback
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">TESTIMONIAL</p>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">Users Feedbacks</h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: transformValue }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-4"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }} // Fixed card width
              >
                <div className="p-6 bg-white rounded-lg shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-shadow duration-300">
                  <p className="text-gray-600 text-base mb-6 italic leading-relaxed">"{testimonial.feedback}"</p>
                  <div className="flex items-center mt-4">
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={`Avatar of ${testimonial.company}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-gray-500" />
                      )}
                      <div className="absolute bottom-0 right-0 bg-red-600 p-1 rounded-full border-2 border-white">
                        <MessageSquare className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900 leading-tight">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
