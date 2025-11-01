import Link from 'next/link';

const footerLinks = {
  Products: [
    { name: 'Educational Websites', href: '/products/educational-websites' },
    { name: 'Construction Websites', href: '/products/construction-websites' },
    { name: 'Restaurant Websites', href: '/products/restaurant-websites' },
    { name: 'Lumina IQ', href: '/products/lumina-iq' },
    { name: 'Tabble', href: '/products/tabble' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight block mb-4">
              Genrec AI
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-prose">
              Privacy-first AI for construction, hospitality, and education.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-accent focus-visible:outline-2 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Genrec AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:contact@genrecai.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-accent focus-visible:outline-2 rounded"
              >
                contact@genrecai.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
