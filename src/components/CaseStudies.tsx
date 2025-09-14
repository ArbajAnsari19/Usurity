import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Prism line glow */}
      <div 
        className="absolute top-0 left-1/4 w-px h-full opacity-40"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(173, 114, 78, 0.6) 50%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Highlighted Metric */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/20 border border-brand/30 text-brand text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              ROI Achievement
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              $5.2M
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Saved in Claims Leakage Detection
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-brand">67%</div>
                <div className="text-sm text-gray-400">Faster Processing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand">98.2%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <Quote className="w-8 h-8 text-brand mb-6" />
            
            <blockquote className="text-lg text-gray-300 mb-6">
              "Usurity's AI caught fraudulent patterns our traditional systems missed completely. 
              The ROI was evident within the first quarter - we've prevented millions in fraudulent payouts 
              while speeding up legitimate claims processing."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand to-brand flex items-center justify-center text-black font-semibold">
                SM
              </div>
              <div className="ml-4">
                <div className="font-semibold text-white">Sarah Mitchell</div>
                <div className="text-sm text-gray-400">VP of Claims, Liberty Mutual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;