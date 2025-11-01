export const metadata = {
  title: 'Blog - Insights on Privacy-First Enterprise AI',
  description: 'Articles and insights on building privacy-first AI solutions for regulated industries.',
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Thoughts on privacy-first engineering, enterprise AI, and building leverage in regulated industries.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-card p-12 text-center">
              <p className="text-lg text-gray-600 mb-4">
                Blog coming soon. Subscribe to our newsletter for updates.
              </p>
              <a href="/contact" className="btn-secondary inline-flex">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
