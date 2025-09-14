import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const links = {
    product: ['Features', 'Security', 'API', 'Integrations'],
    company: ['About', 'Blog', 'Careers', 'Press'],
    resources: ['Documentation', 'Support', 'Status', 'Privacy'],
    legal: ['Terms', 'Privacy', 'Security', 'Compliance']
  };

  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Mail, href: '#' }
  ];

  return (
    <footer className="py-20 relative">
      {/* Prism light strip across top */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(173, 114, 78, 0.5) 50%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-[#121212]" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-full bg-gradient-to-r from-brand to-brand shadow-lg">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">Usurity</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-sm">
              AI-powered insurance platform transforming underwriting, claims, and compliance 
              for the modern insurance industry.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-brand/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items], index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Usurity. All rights reserved.
          </p>
          
          {/* Contact Button */}
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;