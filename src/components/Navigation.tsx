import React from 'react';
import { Shield } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-gradient-to-r from-brand to-brand shadow-lg">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">Usurity</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors duration-300">Demo</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors duration-300">Security</a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-colors duration-300">Resources</a>
          </div>
          
          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 rounded-full bg-white/10 text-white border border-brand/30 hover:bg-brand/10 hover:border-brand/50 transition-all duration-300 backdrop-blur-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;