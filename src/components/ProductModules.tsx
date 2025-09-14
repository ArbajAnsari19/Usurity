import React from 'react';
import { FileText, Search, GitCompare, Shield, Settings } from 'lucide-react';

const ProductModules: React.FC = () => {
  const modules = [
    {
      icon: FileText,
      title: 'Underwriting Assistant',
      description: 'AI-powered risk assessment and policy recommendations'
    },
    {
      icon: Search,
      title: 'Claims DocIntel',
      description: 'Intelligent document processing and fraud detection'
    },
    {
      icon: GitCompare,
      title: 'Policy Comparison',
      description: 'Automated policy analysis and competitive benchmarking'
    },
    {
      icon: Shield,
      title: 'Compliance Auditor',
      description: 'Real-time regulatory compliance monitoring'
    },
    {
      icon: Settings,
      title: 'Automation Studio',
      description: 'No-code workflow automation for insurance processes'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      {/* Sweeping prism glow */}
      <div 
        className="absolute top-1/2 left-0 right-0 h-32 opacity-20"
        style={{
          background: 'linear-gradient(90deg, rgba(173,114,78,0.10) 0%, rgba(173,114,78,0.18) 50%, rgba(173,114,78,0.10) 100%)',
          filter: 'blur(60px)',
          animation: 'sweep 15s ease-in-out infinite',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Complete AI Insurance Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five powerful modules working together to transform your insurance operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${
                index === 2 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
              }`}
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 20px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(173,114,78,0.35), 0 0 40px rgba(173,114,78,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.05), 0 0 20px rgba(0,0,0,0.3)';
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-brand/20 to-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <module.icon className="w-6 h-6 text-brand" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {module.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default ProductModules;