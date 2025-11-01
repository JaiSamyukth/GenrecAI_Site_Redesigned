'use client';

import { motion } from 'framer-motion';

const integrations = [
  { name: 'Enterprise SSO', category: 'Security' },
  { name: 'Cloud Infrastructure', category: 'Platform' },
  { name: 'Database Systems', category: 'Data' },
  { name: 'API Gateway', category: 'Integration' },
  { name: 'Analytics Suite', category: 'Insights' },
  { name: 'Compliance Tools', category: 'Governance' },
];

export default function Integrations() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Ready Integrations
          </h2>
          <p className="text-lg text-gray-600">
            Seamlessly integrate with your existing enterprise infrastructure and tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white rounded-card border border-gray-200 p-6 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div className="font-semibold text-sm mb-1">{integration.name}</div>
              <div className="text-xs text-gray-500">{integration.category}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Custom integrations available for enterprise clients
          </p>
          <a href="/contact" className="btn-secondary">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
