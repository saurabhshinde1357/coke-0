
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = ['EXPERIENCE', 'PRODUCTS', 'SUSTAINABILITY', 'CONTACT'];
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between py-5 px-6">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-coke-red animate-pulse-glow"></div>
              {/* Holographic rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider shimmer-text">COKE</span>
              <span className="text-sm tracking-[0.5em] text-coke-red font-semibold -mt-1">ZERO</span>
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.ul 
            className="hidden md:flex items-center space-x-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {navLinks.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="relative group"
              >
                <a href="#" className="text-sm font-medium tracking-wider hover:text-coke-red transition-colors py-2">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-coke-red group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
          
          {/* Button for mobile menu */}
          <motion.button 
            className="md:hidden text-2xl relative z-50 w-10 h-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}>
              <span className="block w-6 h-[2px] bg-white mb-1.5"></span>
              <span className={`block h-[2px] bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'w-6 opacity-0' : 'w-4 opacity-100'}`}></span>
              <span className={`block h-[2px] bg-white transition-all ${mobileMenuOpen ? 'w-6 -rotate-90 -translate-y-3' : 'w-6'}`}></span>
            </span>
          </motion.button>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex items-center justify-center md:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5 }}
          >
            <motion.ul 
              className="flex flex-col items-center justify-center space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {navLinks.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="relative"
                >
                  <a href="#" className="text-2xl font-medium tracking-wider hover:text-coke-red transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
              
              {/* Additional elements to make mobile menu more premium */}
              <motion.div 
                className="absolute bottom-20 left-0 right-0 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="glass-panel rounded-full px-8 py-3 flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-coke-red flex items-center justify-center">
                    <span className="text-xs font-bold">0</span>
                  </div>
                  <span className="text-sm font-medium">ZERO SUGAR. MAXIMUM TASTE.</span>
                </div>
              </motion.div>
              
              {/* Decorative background elements */}
              <div className="absolute inset-0 -z-10 opacity-10">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      top: `${10 + i * 10}%`,
                      left: 0,
                      right: 0,
                      height: '1px',
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      width: ["0%", "100%", "0%"],
                      left: ["0%", "0%", "100%"],
                    }}
                    transition={{
                      duration: 8,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  />
                ))}
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
