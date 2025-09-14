import React from 'react';
import { Upload, Brain, Lightbulb } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Ingest Your Data',
      description: 'Connect your existing systems and upload documents, policies, and historical claims data'
    },
    {
      icon: Brain,
      title: 'AI Analyzes Everything',
      description: 'Our enterprise AI processes documents, identifies patterns, and extracts key insights'
    },
    {
      icon: Lightbulb,
      title: 'Get Instant Insights',
      description: 'Receive actionable recommendations, risk assessments, and automated decisions'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Horizontal prism beam */}
      <div 
        className="absolute top-1/2 left-0 right-0 h-1 opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(173, 114, 78, 0.5) 50%, transparent 100%)',
          filter: 'blur(2px)',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How Usurity Works
          </h2>
          <p className="text-xl text-gray-300">
            Three simple steps to transform your insurance operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              {/* Step Card */}
              <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 mb-6">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-black font-bold text-lg mb-6">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="p-4 rounded-full bg-gradient-to-r from-brand/20 to-brand/10 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-brand" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-brand to-brand opacity-60"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;