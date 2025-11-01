'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium bg-white/10 text-white mb-6 border border-white/20">
                Limited Availability
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're accepting 3 new pilot partners per quarter. Schedule a private consultation to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Request Private Consultation
                </Link>
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-all duration-200 focus-visible:outline-white focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
