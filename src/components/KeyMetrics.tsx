import React from 'react';
import { Zap, Target, DollarSign } from 'lucide-react';

const KeyMetrics: React.FC = () => {
  const metrics = [
    {
      icon: Zap,
      value: '30x',
      label: 'Faster Underwriting',
      description: 'Process applications in seconds, not days'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Accuracy on Claims Data',
      description: 'AI-powered precision in document analysis'
    },
    {
      icon: DollarSign,
      value: '$2.4M',
      label: 'Average Savings',
      description: 'Saved per client in the first year'
    }
  ];
  return (
    <section className="py-20 relative">
      {/* Angled prism glow */}
      <div 
        className="absolute top-0 left-1/3 w-96 h-full opacity-30"
        style={{
          background: 'linear-gradient(45deg, rgba(173, 114, 78, 0.20) 0%, rgba(173, 114, 78, 0.05) 100%)',
          filter: 'blur(80px)',
          transform: 'rotate(-20deg)',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-brand/20 to-brand/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-brand" />
                </div>
                
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {metric.label}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;