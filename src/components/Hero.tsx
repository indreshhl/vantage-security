import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/security .jpg" 
          alt="Security background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="sm:max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                <ShieldCheck size={14} className="text-yellow-250"/>
                <span>ISO 9001:2015 Certified</span>
            </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Uncompromising <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Security</span> Solutions
          </h1>
          <p className="text-lg sm:text-xl text-brand-100 mb-8 leading-relaxed max-w-xl">
            Vantage Security and Facility Management  delivers elite protection for businesses, assets, and individuals. 
            Trusted vigilance, modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-2"
            >
              Our Services
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;