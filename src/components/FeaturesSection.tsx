
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => (
  <motion.div 
    className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
  >
    <div className="w-16 h-16 rounded-full bg-coke-red/20 flex items-center justify-center mb-4">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const features = [
    {
      title: "Zero Sugar",
      description: "All the great taste of Coca-Cola without the sugar.",
      icon: "✨",
      delay: 0.2
    },
    {
      title: "Bold Flavor",
      description: "Intense, refreshing taste that hits different.",
      icon: "⚡",
      delay: 0.4
    },
    {
      title: "Ice Cold",
      description: "Best served chilled for maximum refreshment.",
      icon: "❄️",
      delay: 0.6
    }
  ];
  
  return (
    <div ref={ref} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-coke-darkGray to-black"></div>
      
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '4rem 4rem' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-coke-red">ZERO</span> COMPROMISE
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Experience the future of refreshment with Coke Zero's bold flavor and zero sugar formula.
          </motion.p>
        </motion.div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
