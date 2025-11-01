'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Alignment',
    description: 'Deep dive into your business objectives, technical requirements, and success metrics.',
    details: 'Comprehensive stakeholder interviews, technical architecture review, and KPI definition.',
  },
  {
    number: '02',
    title: 'Pilot Design',
    description: 'Custom solution architecture tailored to your specific industry and use case.',
    details: 'Privacy-first design, security audit, compliance review, and proof-of-concept development.',
  },
  {
    number: '03',
    title: 'Rapid Deployment',
    description: 'Launch your pilot program with full implementation support and training.',
    details: 'White-glove onboarding, team training, integration testing, and go-live support.',
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'Expand across your organization with continuous optimization and support.',
    details: 'Performance monitoring, iterative improvements, multi-location rollout, and ongoing support.',
  },
];

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          className="flex-shrink-0 relative"
        >
          <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
            {step.number}
          </div>
          <motion.div
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            className="absolute inset-0 rounded-full bg-accent opacity-20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
          <p className="text-lg text-gray-600 mb-2">{step.description}</p>
          <p className="text-sm text-gray-500">{step.details}</p>
        </motion.div>
      </div>

      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-accent to-accent/20 origin-top"
        />
      )}
    </div>
  );
}

export default function Process() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Concept to Enterprise Scale
          </h2>
          <p className="text-lg text-gray-600">
            Our proven process ensures rapid deployment with zero compromise on quality or security.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
