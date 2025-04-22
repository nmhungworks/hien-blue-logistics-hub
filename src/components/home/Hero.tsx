
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-logistics-700 to-logistics-500 text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Professional Logistics Solutions
            </h1>
            <p className="text-xl opacity-90 mb-6">
              Expert logistics services with 3 years of experience in international freight shipping, helping customers optimize costs and enhance operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary bg-white text-logistics-600 hover:bg-gray-100">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1577642147838-fbc21029d76b?auto=format&fit=crop&q=80&w=1470" 
              alt="Modern Logistics Services" 
              className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
