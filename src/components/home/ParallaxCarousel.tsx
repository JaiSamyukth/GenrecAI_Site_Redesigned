'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    alt: 'Modern office workspace'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    alt: 'Team collaboration'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    alt: 'Technology innovation'
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    alt: 'Business strategy'
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    alt: 'Professional workspace'
  }
];

export default function ParallaxCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  return (
    <div
      className="relative w-full h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
              zIndex: index === currentIndex ? 1 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.2, 0.9, 0.3, 1],
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
            </div>
          </motion.div>
        ))}

        {/* Floating elements for depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          style={{
            x: useTransform(x, [-100, 100], [-20, 20]),
            y: useTransform(y, [-100, 100], [-20, 20]),
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-12 left-12 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          style={{
            x: useTransform(x, [-100, 100], [15, -15]),
            y: useTransform(y, [-100, 100], [15, -15]),
          }}
        />

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient light effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl -z-10"
      />
    </div>
  );
}
