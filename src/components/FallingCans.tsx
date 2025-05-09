
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const FallingCans = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      setHasAnimated(false);
    }
  }, [isInView, controls, hasAnimated]);
  
  // Generate more dynamic and premium can positions
  const generateCans = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 2,
      rotate: (Math.random() - 0.5) * 120,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.8,
      duration: 3 + Math.random() * 5,
      glow: Math.random() > 0.7, // Some cans will have a glow effect
    }));
  };
  
  const cans = generateCans(20); // More cans for a premium feel
  
  // Create light beams for a futuristic effect
  const lightBeams = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    left: `${10 + i * 15}%`,
    width: `${2 + Math.random() * 3}%`,
    delay: Math.random() * 2,
    opacity: 0.1 + Math.random() * 0.2,
  }));
  
  return (
    <div ref={ref} className="relative h-[80vh] overflow-hidden bg-black">
      {/* Futuristic light beams */}
      {lightBeams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute bottom-0 h-full bg-coke-red/10"
          style={{
            left: beam.left,
            width: beam.width,
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: beam.opacity, 
            scaleY: 1,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 2,
            delay: beam.delay,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Red circular glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-coke-red/5 filter blur-[10rem] animate-pulse" />
      
      {/* Advanced holographic grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(230, 29, 42, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(230, 29, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          perspective: '500px',
          transform: 'rotateX(60deg) scale(2)',
        }} />
      </div>
      
      {/* Premium falling cans */}
      {cans.map((can) => (
        <motion.div
          key={can.id}
          className="absolute"
          style={{
            left: can.left,
            top: "-20vh",
            filter: can.glow ? "drop-shadow(0 0 10px rgba(230,29,42,0.7))" : "none",
          }}
          initial={{ 
            y: -100, 
            opacity: 0, 
            rotateX: can.rotateX,
            rotateY: can.rotateY,
            rotateZ: can.rotate,
          }}
          animate={controls}
          variants={{
            visible: {
              y: "120vh",
              opacity: [0, 1, 1, 0.8, 0],
              rotateX: can.rotateX + 360,
              rotateY: can.rotateY + 720,
              rotateZ: can.rotate * 5,
              transition: {
                duration: can.duration,
                delay: can.delay,
                ease: "easeIn"
              }
            }
          }}
        >
          {/* Ultra-realistic premium can */}
          <div 
            className="w-16 h-36 rounded-xl relative overflow-hidden"
            style={{ 
              transform: `scale(${can.scale})`,
              background: 'linear-gradient(135deg, #000000, #1a1a1a)',
              boxShadow: can.glow ? '0 0 15px rgba(230,29,42,0.6)' : '0 0 5px rgba(0,0,0,0.8)',
            }}
          >
            {/* Silver top */}
            <div className="absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-coke-silver to-[#8a8a8a] rounded-t-xl"></div>
            
            {/* Red COKE logo area */}
            <div className="absolute inset-x-0 top-[15%] mx-auto w-[90%] h-6 flex items-center justify-center" style={{
              background: 'linear-gradient(175deg, #E61D2A, #C50A16)',
              borderRadius: '2px',
            }}>
              <div className="text-white text-[8px] font-bold tracking-wider" style={{
                transform: 'scaleY(1.2)'
              }}>COKE</div>
            </div>
            
            {/* ZERO text */}
            <div className="absolute inset-x-0 top-[35%] mx-auto flex items-center justify-center">
              <div className="text-white text-[10px] font-bold tracking-widest">ZERO</div>
            </div>
            
            {/* Glossy highlight effect */}
            <div className="absolute inset-y-0 right-[20%] w-[10%] bg-white/10 skew-x-12"></div>
            <div className="absolute inset-y-0 left-[10%] w-[5%] bg-white/5 skew-x-6"></div>
            
            {/* Bubbles effect inside */}
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/20"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  left: `${30 + Math.random() * 40}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
      
      {/* Futuristic tagline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-4xl md:text-7xl font-bold shimmer-text mb-4">ZERO GRAVITY</h2>
        <p className="text-xl text-white/70">Defying the limits of refreshment</p>
      </motion.div>
    </div>
  );
};

export default FallingCans;
