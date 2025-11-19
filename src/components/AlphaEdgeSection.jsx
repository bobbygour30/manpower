import React from 'react';
import { Check, ShieldCheck, Handshake, DollarSign, FileText } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Credible Legacy of Excellence',
    description: 'We believe in the value that our functions add to a business. We feel that this specialist',
    Icon: ShieldCheck,
    position: 'top-left',
  },
  {
    number: '02',
    title: 'Reliability and Accountability',
    description: 'We believe in the value that our functions add to a business. We feel that this specialist',
    Icon: Handshake,
    position: 'bottom-left',
  },
  {
    number: '03',
    title: 'Ethical Business Policies',
    description: 'We believe in the value that our functions add to a business. We feel that this specialist',
    Icon: FileText,
    position: 'top-right',
  },
  {
    number: '04',
    title: 'Value of Money',
    description: 'Facility management services is a kind of service in which an individual needs to deal with germs, dust, pollution, and stink.',
    Icon: DollarSign,
    position: 'bottom-right',
  },
];

// Helper component for the feature card
const FeatureCard = ({ feature }) => {
  return (
    <div className="p-4 space-y-3 relative">
      
      {/* Large Number Overlay */}
      <span className={`absolute text-8xl font-extrabold text-gray-200 opacity-60 z-0 
        ${feature.position.includes('left') ? 'left-0' : 'right-0'} 
        ${feature.position.includes('top') ? 'top-0' : 'bottom-0'}`}>
        {feature.number}
      </span>

      {/* Icon */}
      <div className="relative z-10 flex items-center mb-4">
        <div className="bg-red-600 p-2 rounded-md text-white">
          <feature.Icon className="w-5 h-5" />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-xl font-bold text-gray-900">
        {feature.title}
      </h3>
      
      {/* Description */}
      <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const AlphaEdgeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">FEATURES</p>
          <div className="w-12 h-0.5 bg-red-600 mx-auto"></div>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Alpha Edge
          </h2>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Column 1: Left Features (01 & 02) */}
          <div className="space-y-12 md:space-y-16">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
          </div>

          {/* Column 2: Central Icon (Hidden on small screens, centered on large) */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <div className="relative w-72 h-72">
              {/* Large light gray circle background */}
              <div className="absolute inset-0 bg-gray-100 rounded-full opacity-70"></div>
              
              {/* Central red checkmark icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-40 h-40 text-red-600 stroke-1" />
              </div>
            </div>
          </div>
          
          {/* Column 3: Right Features (03 & 04) */}
          <div className="space-y-12 md:space-y-16">
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
          </div>

          {/* Fallback Central Icon for Tablet/Mobile (Centered at the top of the grid) */}
          <div className="lg:hidden flex justify-center py-8">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gray-100 rounded-full opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-24 h-24 text-red-600 stroke-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlphaEdgeSection;