import React ,{useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import FeatureSection from './components/FeatureSection/FeatureSection.jsx'
import QuickstartSection from './components/QuickstartSection/QuickstartSection.jsx'
import UseCasesSection from './components/UseCasesSection/UseCasesSection.jsx'
import IntegrationsSection from './components/IntegrationsSection/IntegrationsSection.jsx' 
import LiveDemoSection from './components/LiveDemoSection/LiveDemoSection.jsx'
import SecuritySection from './components/SecuritySection/SecuritySection.jsx'
import DevSupportSection from './components/DevSupportSection/DevSupportSection.jsx'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection.jsx'
import PerformanceSection from './components/PerformanceSection/PerformanceSection.jsx'
import CTASection from './components/CTASection/CTASection.jsx'
import MobileSDKSection from './components/MobileSDKSection/MobileSDKSection.jsx'
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from './components/Footer/Footer.jsx' 
import './App.css'

function App() {
  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll();
  const [pulsate, setPulsate] = useState(1);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPulsate(1.05);
      setTimeout(() => setPulsate(1), 200);
    }, 3000); // Pulse every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  },[]);
  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-600 z-100"
      style={{ scaleX, scaleY: pulsate }}
    />  

      {/* Page Content */}
      <div className='overflow-x-hidden'>
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <QuickstartSection />
        <UseCasesSection />
        <IntegrationsSection />
        <LiveDemoSection />
        <SecuritySection />
        <DevSupportSection />
        <TestimonialsSection />
        <PerformanceSection />
        <CTASection />
        <MobileSDKSection />
        <Footer/>
      </div>
    </>
  );
}

export default App;
