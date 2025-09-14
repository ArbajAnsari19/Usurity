import TrustedBy from './components/TrustedBy';
import KeyMetrics from './components/KeyMetrics';
import ProductModules from './components/ProductModules';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Security from './components/Security';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
      <div className="min-h-screen relative text-white overflow-x-hidden bg-[#0B0B12]">
        <Home />
      </div>
      <div className="bg-[#0B0B12] text-white">
        <TrustedBy />
        <KeyMetrics />
        <ProductModules />
        <InteractiveDemo />
        <HowItWorks />
        <CaseStudies />
        <Security />
        <Resources />
        <Footer />
      </div>
      
      {/* Mobile sticky CTA */}
      {/* <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button className="w-full py-4 rounded-full bg-brand text-black font-semibold shadow-2xl hover:bg-brand/90 transition-all duration-300">
          🚀 Request a Demo
        </button>
      </div> */}
    </>
  );
}

export default App;
