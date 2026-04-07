import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-accent-500" size={32} />
              <span className="font-bold text-xl leading-tight max-w-[200px]">{COMPANY_NAME}</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              Providing top-tier security solutions for businesses and individuals since 2025. Your safety is our mission.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-500">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-100">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors"></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-500">Services</h4>
            <ul className="space-y-3 text-sm text-brand-100">
              <li>Manned Guarding</li>
              <li>Parking & Access Control Security</li>
              <li>Office Security</li>
              <li>Event Security</li>
              <li>Personal Protection</li>
              <li>Electronic Surveillance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-500">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-100">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent-500" />
                <span>#235, 1st cross, Subramanya nagar, Hebbal <br />MYSORE, India 570016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent-500" />
                <span>+91 7483314499</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent-500" />
                <span>info@vantagesecurityservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Vantage Security and Facility Management. All rights reserved.</p>
         <div className="text-brand-400 text-xs hover:text-white cursor-default">
             Designed by <span className="font-semibold text-white">Indresh HL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;