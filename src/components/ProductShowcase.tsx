
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Advanced parallax effects
  const leftCanY = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const rightCanY = useTransform(scrollYProgress, [0, 1], [50, -200]);
  const centerCanY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const centerCanScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1.3]);
  const centerCanRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacityLayer = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Holographic data for futuristic display
  const cokeFacts = [
    { label: "CALORIES", value: "0" },
    { label: "SUGAR", value: "0g" },
    { label: "TASTE", value: "MAX" },
  ];
  
  return (
    <div ref={ref} className="relative py-24 min-h-screen overflow-hidden bg-black">
      {/* Advanced dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        {/* Red pulsing glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full bg-coke-red/5 filter blur-[15rem]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Premium holographic grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(230, 29, 42, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 29, 42, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            perspective: '500px',
            transform: 'rotateX(60deg) scale(3)',
          }} />
        </div>
        
        {/* Advanced light rays */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-[2px] w-full"
            style={{ 
              top: `${i * 15 + 10}vh`, 
              transform: 'rotate(-30deg) translateX(-50%)',
              left: '50%',
              width: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(230, 29, 42, 0.3), transparent)'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: ['-10%', '10%', '-10%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="shimmer-text">THE</span> <span className="text-coke-red">COLLECTION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium range of Coke Zero variants. Each crafted with zero sugar,
            maximum taste, and engineered for the future of refreshment.
          </p>
        </motion.div>
        
        {/* Premium 3D product display with holographic elements */}
        <motion.div 
          className="relative h-[70vh] flex items-center justify-center"
          style={{ opacity: opacityLayer }}
        >
          {/* Left side can */}
          <motion.div 
            className="absolute left-[5%] md:left-[20%] perspective-container"
            style={{ y: leftCanY }}
          >
            <motion.div
              className="can-transform"
              initial={{ opacity: 0, rotateY: -45 }}
              whileInView={{ opacity: 1, rotateY: -15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                rotateY: 0, 
                scale: 1.05, 
                filter: "brightness(1.2) drop-shadow(0 0 15px rgba(230,29,42,0.6))",
                transition: { duration: 0.3 } 
              }}
            >
              {/* Cherry can with premium details */}
              <div className="w-24 h-48 md:w-36 md:h-72 rounded-2xl bg-gradient-to-br from-black to-[#3b0b0b] relative overflow-hidden shadow-xl">
                {/* Top reflection */}
                <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-coke-silver to-gray-500 rounded-t-2xl"></div>
                
                {/* Bottom rim */}
                <div className="absolute inset-x-0 bottom-0 h-[3%] bg-gradient-to-b from-[#8a8a8a] to-coke-silver rounded-b-2xl"></div>
                
                {/* Logo area */}
                <div className="absolute inset-x-0 top-[15%] mx-auto w-4/5 h-10 rounded-sm bg-coke-red flex items-center justify-center" style={{
                  background: 'linear-gradient(175deg, #E61D2A, #C50A16)',
                }}>
                  <div className="text-white font-bold text-sm tracking-widest" style={{
                    transform: 'scaleY(1.2)'
                  }}>COKE</div>
                </div>
                
                {/* CHERRY text */}
                <div className="absolute inset-x-0 top-[35%] mx-auto flex items-center justify-center">
                  <div className="text-white font-bold text-lg tracking-widest">CHERRY</div>
                </div>
                
                {/* ZERO text */}
                <div className="absolute inset-x-0 top-[45%] mx-auto flex items-center justify-center">
                  <div className="text-white font-bold text-base tracking-widest">ZERO</div>
                </div>
                
                {/* Can reflections */}
                <div className="absolute inset-y-0 right-[15%] w-[15%] bg-white/10 skew-x-12"></div>
                <div className="absolute inset-y-0 left-[10%] w-[8%] bg-white/5 skew-x-6"></div>
                
                {/* Cherry illustration */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-12 h-12">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9a0000] to-[#6a0000] relative mx-auto">
                    <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-1 h-5 bg-[#234010] rotate-12"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced 3D shadow */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/60 filter blur-md rounded-full"></div>
              
              {/* Floating holographic tag */}
              <motion.div
                className="absolute -right-16 top-1/4 glass-panel rounded-xl p-2 text-[10px] font-medium text-white/80"
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -3, 0],
                  rotateZ: [0, 2, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div>BLACK CHERRY</div>
                <div>INFUSION</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Center can - premium showcase */}
          <motion.div 
            className="perspective-container z-10"
            style={{ 
              scale: centerCanScale,
              y: centerCanY,
              rotateZ: centerCanRotate
            }}
          >
            <motion.div
              className="can-transform"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05, 
                filter: "brightness(1.3) drop-shadow(0 0 20px rgba(230,29,42,0.8))",
                transition: { duration: 0.3 } 
              }}
            >
              {/* Premium Classic Zero can */}
              <div className="w-36 h-72 md:w-48 md:h-96 rounded-3xl bg-gradient-to-br from-black to-[#121212] relative overflow-hidden shadow-2xl">
                {/* Top reflection */}
                <div className="absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-coke-silver to-gray-500 rounded-t-3xl"></div>
                
                {/* Bottom rim */}
                <div className="absolute inset-x-0 bottom-0 h-[3%] bg-gradient-to-b from-[#8a8a8a] to-coke-silver rounded-b-3xl"></div>
                
                {/* COKE logo */}
                <div className="absolute inset-x-0 top-[15%] mx-auto w-4/5 h-16 flex items-center justify-center">
                  <div className="text-white font-bold text-3xl tracking-widest" style={{
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '0.1em',
                    filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
                    background: 'linear-gradient(175deg, #E61D2A, #C50A16)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '4px',
                    transform: 'scaleY(1.2)',
                  }}>COKE</div>
                </div>
                
                {/* ZERO text */}
                <div className="absolute inset-x-0 top-[35%] mx-auto flex items-center justify-center">
                  <div className="text-white font-bold text-4xl tracking-widest" style={{
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '0.2em',
                    transform: 'scaleY(1.1)',
                  }}>ZERO</div>
                </div>
                
                {/* SUGAR text */}
                <div className="absolute inset-x-0 top-[45%] mx-auto flex items-center justify-center">
                  <div className="text-white/90 font-medium text-lg tracking-wider">ZERO SUGAR</div>
                </div>
                
                {/* Nutrient indicators */}
                <div className="absolute inset-x-0 top-[60%] mx-auto w-4/5 flex justify-between items-center">
                  {cokeFacts.map((fact, i) => (
                    <motion.div 
                      key={i}
                      className="flex flex-col items-center"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-coke-red font-bold text-lg">{fact.value}</div>
                      <div className="text-white/70 text-xs">{fact.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Premium reflections on can */}
                <div className="absolute inset-y-0 right-[20%] w-[15%] bg-white/10 skew-x-12 blur-[1px]"></div>
                <div className="absolute inset-y-0 right-[10%] w-[5%] bg-white/20 skew-x-6"></div>
                <div className="absolute inset-y-0 left-[10%] w-[8%] bg-white/5 skew-x-12"></div>
                
                {/* Advanced bubble effects */}
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/20"
                    animate={{
                      y: ["20%", "-100%"],
                      x: [
                        `${-5 + Math.sin(i * Math.PI / 6) * 10}px`,
                        `${5 + Math.sin(i * Math.PI / 6) * 10}px`
                      ],
                      opacity: [0.2, 0.8, 0],
                      scale: [1, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{
                      top: `${50 + Math.random() * 30}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
                
                {/* Bottom barcode area */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] w-4/5 flex flex-col items-center">
                  <div className="w-full h-[10px] flex space-x-[1px]">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="h-full w-[2px] bg-white/50" style={{ 
                        height: i % 3 === 0 ? '100%' : '70%'
                      }}></div>
                    ))}
                  </div>
                  <div className="text-white/50 text-[8px] mt-1">12345 67890</div>
                </div>
              </div>
              
              {/* Enhanced 3D shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/60 filter blur-xl rounded-full"></div>
              
              {/* Holographic data display */}
              <motion.div
                className="absolute -left-20 top-1/2 -translate-y-1/2 glass-panel rounded-xl p-3"
                animate={{ 
                  y: [0, -5, 0],
                  rotateZ: [0, -2, 0],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="text-xs text-white/80 font-medium mb-1">CLASSIC FORMULA</div>
                <div className="w-full h-[1px] bg-white/20 mb-2"></div>
                <div className="text-xs text-coke-red font-bold">FLAGSHIP ZERO</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side can */}
          <motion.div 
            className="absolute right-[5%] md:right-[20%] perspective-container"
            style={{ y: rightCanY }}
          >
            <motion.div
              className="can-transform"
              initial={{ opacity: 0, rotateY: 45 }}
              whileInView={{ opacity: 1, rotateY: 15 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                rotateY: 0, 
                scale: 1.05, 
                filter: "brightness(1.2) drop-shadow(0 0 15px rgba(230,29,42,0.6))",
                transition: { duration: 0.3 } 
              }}
            >
              {/* Vanilla can with premium details */}
              <div className="w-24 h-48 md:w-36 md:h-72 rounded-2xl bg-gradient-to-br from-black to-[#3b2b15] relative overflow-hidden shadow-xl">
                {/* Top reflection */}
                <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-coke-silver to-gray-500 rounded-t-2xl"></div>
                
                {/* Bottom rim */}
                <div className="absolute inset-x-0 bottom-0 h-[3%] bg-gradient-to-b from-[#8a8a8a] to-coke-silver rounded-b-2xl"></div>
                
                {/* Logo area */}
                <div className="absolute inset-x-0 top-[15%] mx-auto w-4/5 h-10 rounded-sm flex items-center justify-center" style={{
                  background: 'linear-gradient(175deg, #E61D2A, #C50A16)',
                }}>
                  <div className="text-white font-bold text-sm tracking-widest" style={{
                    transform: 'scaleY(1.2)'
                  }}>COKE</div>
                </div>
                
                {/* VANILLA text */}
                <div className="absolute inset-x-0 top-[35%] mx-auto flex items-center justify-center">
                  <div className="text-white font-bold text-lg tracking-widest">VANILLA</div>
                </div>
                
                {/* ZERO text */}
                <div className="absolute inset-x-0 top-[45%] mx-auto flex items-center justify-center">
                  <div className="text-white font-bold text-base tracking-widest">ZERO</div>
                </div>
                
                {/* Can reflections */}
                <div className="absolute inset-y-0 right-[15%] w-[15%] bg-white/10 skew-x-12"></div>
                <div className="absolute inset-y-0 left-[10%] w-[8%] bg-white/5 skew-x-6"></div>
                
                {/* Vanilla illustration */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2">
                  <div className="w-12 h-6 rounded-full bg-gradient-to-b from-[#d9c7a0] to-[#b09868] opacity-80"></div>
                  <div className="w-1 h-10 mx-auto bg-[#b09868] -mt-3"></div>
                </div>
              </div>
              
              {/* Enhanced 3D shadow */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/60 filter blur-md rounded-full"></div>
              
              {/* Floating holographic tag */}
              <motion.div
                className="absolute -left-16 top-1/4 glass-panel rounded-xl p-2 text-[10px] font-medium text-white/80"
                animate={{ 
                  x: [0, -5, 0],
                  y: [0, -3, 0],
                  rotateZ: [0, -2, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div>MADAGASCAN</div>
                <div>VANILLA</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Holographic circles - futuristic design elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/20"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                opacity: 0.2 - i * 0.02,
              }}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1 + i * 0.01, 1],
              }}
              transition={{
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button 
            className="px-12 py-5 text-white rounded-full font-bold tracking-wider text-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(230,29,42,0.8)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "linear-gradient(135deg, #E61D2A, #FF2D38)",
              boxShadow: "0 10px 30px -5px rgba(230,29,42,0.5), inset 0 1px 1px rgba(255,255,255,0.3)"
            }}
          >
            DISCOVER THE COLLECTION
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
