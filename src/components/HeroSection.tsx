
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Transformations based on scroll
  const canY = useTransform(scrollYProgress, [0, 0.5], [0, 300]);
  const canRotate = useTransform(scrollYProgress, [0, 0.5], [0, 45]);
  const canScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // More advanced transformations
  const canFloating = useTransform(scrollYProgress, value => 
    Math.sin(value * Math.PI * 2) * 15
  );
  
  // Generate random positions for bubbles with more variety
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 5 + 1}rem`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${Math.random() * 20 + 10}s`,
    opacity: Math.random() * 0.4 + 0.1
  }));
  
  return (
    <div ref={ref} className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-b from-black via-[#0c0c0c] to-black">
      {/* Animated holographic grid */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(230, 29, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 29, 42, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          perspective: '500px',
          transform: 'rotateX(60deg) translateY(-100px) scale(2.5)',
          opacity: 0.4,
        }} />
      </div>
      
      {/* Enhanced background bubbles */}
      {bubbles.map((bubble) => (
        <motion.div 
          key={bubble.id}
          className="bubble"
          initial={{ opacity: 0 }}
          animate={{ opacity: bubble.opacity }}
          transition={{ duration: 2, delay: Number(bubble.animationDelay) }}
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.animationDelay,
            animation: `bubble-rise ${bubble.animationDuration} linear infinite`,
            boxShadow: 'inset 0 0 20px rgba(230, 29, 42, 0.3), 0 0 8px rgba(230, 29, 42, 0.5)'
          }}
        />
      ))}
      
      {/* Cinematic red glow */}
      <div className="absolute inset-0 flex items-center justify-center z-1">
        <div className="w-[80vh] h-[80vh] rounded-full bg-coke-red/5 filter blur-[15rem] animate-pulse-glow" />
      </div>
      
      {/* Advanced diagonal light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-40 z-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-[1px] w-full"
            style={{ 
              top: `${i * 10}vh`, 
              transform: 'rotate(45deg) translateX(-50%)',
              left: '50%',
              width: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(230, 29, 42, 0.5), transparent)',
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: ['-10%', '10%', '-10%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div ref={containerRef} className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center h-screen z-10 perspective-container">
        {/* Left text content - refined */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10"
          style={{ opacity: textOpacity }}
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="shimmer-text block mb-2">THE FUTURE</span>
            <span className="text-coke-red block">IS ZERO</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Experience a new dimension of refreshment with Coke Zero's revolutionary formula. Bold taste, zero sugar, infinite possibilities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              className="px-10 py-8 bg-coke-red text-white rounded-full font-bold tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-coke-red/30 text-xl"
              style={{
                backgroundImage: 'linear-gradient(135deg, #E61D2A, #FF2D38)',
                boxShadow: '0 10px 25px -5px rgba(230, 29, 42, 0.7)'
              }}
            >
              EXPERIENCE NOW
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right can container with premium animations */}
        <div className="md:w-1/2 flex justify-center items-center perspective-container z-10">
          <motion.div
            className="can-transform relative"
            style={{
              y: canFloating,
              rotateY: canRotate,
              scale: canScale,
            }}
            initial={{ y: -300, opacity: 0, rotate: 180 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
          >
            {/* Realistic Coke Zero can with premium details */}
            <div className="w-40 h-96 md:w-56 md:h-[36rem] rounded-3xl bg-gradient-to-br from-black to-[#121212] relative overflow-hidden">
              {/* Premium reflections on can */}
              <div className="absolute inset-y-0 right-[20%] w-[15%] bg-white/10 skew-x-12 blur-[1px]"></div>
              <div className="absolute inset-y-0 right-[10%] w-[5%] bg-white/20 skew-x-6"></div>
              <div className="absolute inset-y-0 left-[10%] w-[8%] bg-white/5 skew-x-12"></div>
              
              {/* Red COKE logo */}
              <div className="absolute inset-x-0 top-[20%] mx-auto w-4/5 h-20 flex items-center justify-center">
                <div className="text-white font-bold text-3xl tracking-widest" style={{
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '0.1em',
                  filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
                  background: 'linear-gradient(175deg, #E61D2A, #C50A16)',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transform: 'scaleY(1.2)',
                }}>COKE</div>
              </div>
              
              {/* ZERO text */}
              <div className="absolute inset-x-0 top-[40%] mx-auto w-4/5 flex items-center justify-center">
                <div className="text-white font-bold text-4xl tracking-widest" style={{
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '0.2em',
                  transform: 'scaleY(1.1)',
                }}>ZERO</div>
              </div>
              
              {/* Silver top */}
              <div className="absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-coke-silver to-[#8a8a8a] rounded-t-3xl"></div>
              
              {/* Silver bottom rim */}
              <div className="absolute inset-x-0 bottom-0 h-[3%] bg-gradient-to-b from-[#8a8a8a] to-coke-silver rounded-b-3xl"></div>
              
              {/* Sugar free text */}
              <div className="absolute inset-x-0 top-[60%] mx-auto w-4/5 flex items-center justify-center">
                <div className="text-white font-medium text-sm tracking-wider opacity-90">ZERO SUGAR</div>
              </div>
              
              {/* Detailed nutrition facts */}
              <div className="absolute inset-x-0 bottom-[10%] mx-auto w-3/5 h-20 rounded-lg bg-white/10 p-2 flex flex-col justify-center items-center">
                <div className="text-white/80 text-[6px] uppercase tracking-wider mb-1">Nutrition Facts</div>
                <div className="w-full h-[1px] bg-white/30 mb-1"></div>
                <div className="text-white/80 text-[6px]">Calories 0 | Sodium 40mg | Carbs 0g</div>
              </div>
              
              {/* Dynamic bubbles inside can */}
              {[...Array(15)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                  initial={{
                    top: `${50 + Math.random() * 30}%`,
                    left: `${20 + Math.random() * 60}%`,
                    opacity: 0.2,
                  }}
                  animate={{
                    top: [`${50 + Math.random() * 30}%`, `${20 + Math.random() * 20}%`],
                    opacity: [0.2, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced 3D shadow under can */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/60 filter blur-lg rounded-full"></div>
            
            {/* Holographic light effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 right-10 w-20 opacity-30" 
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  filter: 'blur(8px)',
                  animation: 'shimmer 3s linear infinite',
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* High-tech scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0] 
        }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <div className="text-sm text-white/70 mb-2 tracking-widest font-light">SCROLL TO EXPLORE</div>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-coke-red rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
