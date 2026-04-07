import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, SHORT_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-brand-900 text-white' : 'bg-white text-brand-900'}`}>
              <Shield size={28} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className={`flex flex-col ${scrolled ? 'text-gray-700' : 'text-gray-300'}`}>
              <span className="font-bold text-lg leading-tight tracking-tight">{SHORT_NAME}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-80 hidden sm:block">Facility Management</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  location.pathname === link.path 
                    ? 'text-accent-500' 
                    : scrolled ? 'text-gray-700' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-brand-900 px-5 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} />
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-brand-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-brand-50 text-brand-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
                to="/contact"
                className="block w-full text-center bg-brand-900 text-white px-3 py-3 rounded-lg font-bold mt-4"
              >
                Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;