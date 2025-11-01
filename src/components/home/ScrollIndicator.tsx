'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      onClick={scrollToContent}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
