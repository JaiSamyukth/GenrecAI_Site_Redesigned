'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The deployment was seamless and the results exceeded our pilot expectations. The privacy-first approach gave us confidence to scale across multiple sites.",
    author: "Sarah Mitchell",
    role: "VP of Operations",
    company: "Regional Construction Group",
    note: "Pilot participant — construction vertical",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    quote: "From concept to production in 5 weeks. The team understood our unique requirements and delivered a solution that our staff actually uses daily.",
    author: "James Chen",
    role: "Director of Technology",
    company: "Hospitality Services Inc.",
    note: "Early adopter — hospitality vertical",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    quote: "Finally, an AI solution that respects student privacy while delivering real value. The measurable impact on administrative efficiency was immediate.",
    author: "Dr. Amanda Rodriguez",
    role: "Chief Innovation Officer",
    company: "Metropolitan Education District",
    note: "Pilot program — education vertical",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Pilot Partners Say
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from enterprise pilots across three industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="bg-white rounded-card border border-gray-200 p-8 lg:p-12 shadow-subtle-md">
                  <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-gray-100">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{testimonials[currentIndex].note}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8" role="group" aria-label="Testimonial navigation">
            <button
              onClick={handlePrev}
              className="btn-ghost"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn-ghost"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
