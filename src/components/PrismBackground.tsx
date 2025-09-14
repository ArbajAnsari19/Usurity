import React from 'react';

const PrismBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F14] to-[#121212]" />
      
      {/* Animated prism beams */}
      <div className="absolute inset-0">
        {/* Main diagonal beam - teal to coral */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-full opacity-60 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.4) 0%, rgba(249, 115, 22, 0.3) 50%, rgba(99, 102, 241, 0.2) 100%)',
            filter: 'blur(60px)',
            transform: 'rotate(-15deg) scale(1.5)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary beam - indigo to lavender */}
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-96 opacity-50 animate-pulse"
          style={{
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.4) 0%, rgba(196, 181, 253, 0.3) 100%)',
            filter: 'blur(80px)',
            transform: 'rotate(25deg)',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
        
        {/* Accent beam - coral accent */}
        <div 
          className="absolute bottom-1/4 left-1/2 w-64 h-64 opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        
        {/* Bottom sweep beam */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          style={{
            background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.2) 0%, rgba(249, 115, 22, 0.2) 50%, rgba(99, 102, 241, 0.2) 100%)',
            filter: 'blur(30px)',
          }}
        />
      </div>
    </div>
  );
};

export default PrismBackground;