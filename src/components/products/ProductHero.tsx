'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductHeroProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
}

export default function ProductHero({ badge, title, description, features }: ProductHeroProps) {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: 0.12 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium bg-accent/10 text-accent border border-accent/20">
              {badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.42, delay: 0.24 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.36 }}
            className="text-xl text-gray-600 mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.48 }}
            className="space-y-3 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" className="btn-primary text-center">
              Request Demo
            </Link>
            <Link href="/case-studies" className="btn-secondary text-center">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
