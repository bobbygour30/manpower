import React from 'react';

const logos = [
  'https://placehold.co/100x100/F4F4F4/333333/png?text=ESIC',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=DOE',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=TDSAT',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=DTTE',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=DMA',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=Client+F',
  'https://placehold.co/100x100/F4F4F4/333333/png?text=Client+G',
];

const LogoGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">CLIENTS</p>
        <div className="w-12 h-0.5 bg-red-600 mx-auto"></div>
        <h2 className="mt-4 text-4xl font-extrabold text-gray-900">Our Clients</h2>
      </div>

      {/* Logo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-items-center">
        {logos.map((logoUrl, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center transition"
          >
            <img
              src={logoUrl}
              alt={`Logo ${index + 1}`}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoGrid;
