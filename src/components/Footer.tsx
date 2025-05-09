
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-coke-darkGray border-t border-coke-red/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-coke-red"></div>
              <span className="text-xl font-bold shimmer-text">COKE ZERO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the bold, refreshing taste with zero sugar and zero compromise.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
              {['1', '2', '3', '4'].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coke-red/80 transition-colors"
                >
                  <span className="text-white">●</span>
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-6 text-lg">Products</h3>
            <ul className="space-y-4">
              {['Coke Zero', 'Coke Zero Cherry', 'Coke Zero Vanilla', 'Coke Zero Lemon'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-coke-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Sustainability', 'Careers', 'News Room'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-coke-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              {['Support', 'Find a Store', 'Distributors', 'FAQs'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-coke-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2025 The Coca-Cola Company. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <a key={i} href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
