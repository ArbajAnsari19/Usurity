import React from 'react';
import { FileText, BookOpen, Code, MessageSquare } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Industry Reports',
      description: 'Latest insights on AI in insurance',
      items: '12 reports'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Implementation guides and best practices',
      items: '50+ articles'
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Complete developer resources',
      items: 'Full docs'
    },
    {
      icon: MessageSquare,
      title: 'Blog & Updates',
      description: 'Product updates and industry news',
      items: 'Weekly posts'
    }
  ];

  return (
    <section id="resources" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Resources & Support
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to succeed with AI-powered insurance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              style={{
                transform: 'translateY(0px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(20,184,166,0.3), 0 20px 40px rgba(20,184,166,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.05), 0 0 20px rgba(0,0,0,0.3)';
              }}
            >
              <div className="text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-teal-400/20 to-coral-400/20 mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-teal-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs">
                  {resource.items}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;