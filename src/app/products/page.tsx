import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Products - Privacy-First AI Solutions',
  description: 'Explore our suite of industry-specific AI solutions for construction, hospitality, and education.',
};

const products = [
  {
    title: 'Educational Websites',
    description: 'Privacy-first platforms for schools and universities with compliance built-in.',
    href: '/products/educational-websites',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: 'Construction Websites',
    description: 'Project management and client portals designed for construction enterprises.',
    href: '/products/construction-websites',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Restaurant Websites',
    description: 'Digital experiences for hospitality with reservations and online ordering.',
    href: '/products/restaurant-websites',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Lumina IQ',
    description: 'Advanced analytics and intelligence platform for enterprise decision-making.',
    href: '/products/lumina-iq',
    featured: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Tabble',
    description: 'Smart table management and reservation system for hospitality.',
    href: '/products/tabble',
    featured: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Privacy-first AI platforms tailored for construction, hospitality, and education enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <Link
                key={product.title}
                href={product.href}
                className={`group relative p-8 bg-white rounded-card border-2 transition-all duration-200 hover:translate-y-[-8px] hover:shadow-subtle-lg focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  product.featured
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 hover:border-accent'
                }`}
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-white">
                      Featured
                    </span>
                  </div>
                )}

                <div className="mb-4 text-accent">
                  {product.icon}
                </div>

                <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {product.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
