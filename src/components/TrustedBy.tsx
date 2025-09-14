import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

const TrustedBy: React.FC = () => {
  const logos = [
    'Allstate', 'Farmers', 'Liberty Mutual', 'State Farm', 'GEICO'
  ];
  
  const compliance = [
    { icon: Shield, label: 'SOC2 Type II' },
    { icon: Award, label: 'ISO 27001' },
    { icon: CheckCircle, label: 'GDPR Ready' }
  ];

  return (
    <section className="py-20 relative">
      {/* Background beam */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(173, 114, 78, 0.30) 50%, transparent 100%)',
          filter: 'blur(60px)',
          height: '2px',
          top: '50%',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-400 mb-8">Trusted by leading insurers</h2>
          
          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 mb-12">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-xl font-semibold text-gray-600 hover:text-gray-300 transition-colors duration-300 cursor-pointer hover:scale-105 transform transition-transform"
              >
                {logo}
              </div>
            ))}
          </div>
          
          {/* Compliance Badges */}
          <div className="flex justify-center space-x-6">
            {compliance.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-4 h-4 text-brand" />
                <span className="text-sm text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;