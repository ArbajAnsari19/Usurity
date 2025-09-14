import React from 'react';
import Prism from './Prism';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B12] text-white overflow-hidden">
      {/* Prism full-bleed background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          scale={3.6}
          height={3.5}
          baseWidth={5.5}
          noise={0}
          glow={1}
          hueShift={0}
          colorFrequency={1}
          transparent
        />
        {/* Vignette and darkening overlays for depth/contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(8,8,12,0.35)_55%,rgba(8,8,12,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,18,0.15)_0%,rgba(11,11,18,0.35)_60%,rgba(11,11,18,0.65)_100%)]" />
      </div>

      {/* Glass navbar */}
      <nav className="fixed top-6 left-0 right-0 z-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3">
            <div className="text-white/90 font-semibold">React Bits</div>
            <div className="hidden md:flex items-center gap-8 text-white/80">
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Solutions</a>
              <a href="#" className="hover:text-white">Case Studies</a>
              <a href="#" className="hover:text-white">Resources</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
            <button className="hidden sm:inline-flex px-4 py-2 rounded-full bg-brand text-black font-medium hover:bg-brand/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content (from Hero.tsx) */}
      <header className="relative z-10 flex items-center justify-center text-center px-6 pt-28 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2 text-brand" />
              AI Insurance Platform
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            AI that understands
            <br />
            <span className="bg-gradient-to-r from-brand to-brand bg-clip-text text-transparent">
              insurance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Usurity automates underwriting, claims, and compliance with explainable enterprise AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 rounded-full bg-brand text-black font-semibold hover:bg-brand/90 transition-all duration-300 shadow-2xl hover:shadow-brand/30 hover:scale-105">
              <span className="flex items-center text-white">
                🚀 Request a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 rounded-full border border-brand/40 text-white hover:bg-brand/10 hover:border-brand/60 transition-all duration-300 backdrop-blur-sm">
              🔮 Estimate My ROI
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;