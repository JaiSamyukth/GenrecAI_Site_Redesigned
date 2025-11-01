'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  {
    value: 15,
    suffix: '+',
    label: 'Enterprise Pilots',
    note: 'Across construction, hospitality, and education',
  },
  {
    value: 92,
    suffix: '%',
    label: 'Pilot Satisfaction',
    note: 'Based on early deployment feedback',
  },
  {
    value: 6,
    suffix: 'wk',
    label: 'Average Deployment',
    note: 'From kickoff to production pilot',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Privacy Compliant',
    note: 'GDPR, CCPA, and industry-specific regulations',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 0.7,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span>{rounded}</motion.span>
      ) : (
        <span>0</span>
      )}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-lg text-gray-600">
            Pilot metrics from early deployments. Detailed reports available for qualified prospects.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            * Demo metrics from pilot programs — contact for detailed methodology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-3" aria-live="polite">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
