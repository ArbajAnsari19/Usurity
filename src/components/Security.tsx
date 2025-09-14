import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';

const Security: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'GDPR, CCPA, and HIPAA compliant processing'
    },
    {
      icon: Eye,
      title: 'Explainable AI',
      description: 'Full transparency in AI decision-making'
    },
    {
      icon: Server,
      title: 'Cloud & On-Premise',
      description: 'Deploy anywhere with full control'
    }
  ];

  return (
    <section id="security" className="py-20 relative">
      {/* Glowing prism behind shield */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(173,114,78,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="p-6 rounded-full bg-gradient-to-r from-brand/20 to-brand/10 w-fit mx-auto mb-6">
            <Shield className="w-12 h-12 text-brand" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for the most regulated industry with uncompromising security and compliance standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-brand/20 to-brand/10 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-brand" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Compliance Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Compliance Certifications</h3>
          
          <div className="flex justify-center space-x-8">
            {[
              'SOC2 Type II',
              'ISO 27001',
              'GDPR Ready',
              'CCPA Compliant',
              'HIPAA Secure'
            ].map((cert, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-brand/30 hover:text-brand transition-all duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;