
import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductShowcase from '../components/ProductShowcase';
import FallingCans from '../components/FallingCans';
import Footer from '../components/Footer';

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Listen to scroll and trigger the falling cans animation at specific scroll points
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // You can add more scroll-triggered animations here if needed
      console.log('Scroll progress:', latest);
    });
    
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);
  
  return (
    <>
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-coke-red z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FallingCans />
      <ProductShowcase />
      <Footer />
    </>
  );
};

export default Index;
