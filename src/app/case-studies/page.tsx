import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Real Results from Pilot Deployments',
  description: 'Explore detailed case studies from our enterprise pilots across construction, hospitality, and education.',
};

const caseStudies = [
  {
    title: 'SitePilot Construction',
    industry: 'Construction',
    challenge: 'Manual project tracking causing delays and communication breakdowns',
    result: '28% reduction in project delays, 5 hours weekly saved per PM',
    href: '/case-studies/sitepilot-construction',
    metrics: ['28% fewer delays', '5hr/week saved', '6wk deployment'],
  },
  {
    title: 'Hotel Azure',
    industry: 'Hospitality',
    challenge: 'Inefficient table management leading to lost revenue',
    result: '18% increase in covers, 42% reduction in no-shows',
    href: '/case-studies/hotel-azure',
    metrics: ['18% more covers', '42% fewer no-shows', '5min wait reduction'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results from Pilot Deployments
            </h1>
            <p className="text-xl text-gray-600">
              Detailed case studies from enterprise pilots. All metrics verified by pilot partners.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group bg-white rounded-card border-2 border-gray-200 p-8 hover:border-accent hover:translate-y-[-4px] hover:shadow-subtle-lg transition-all duration-200 focus-visible:outline-accent focus-visible:outline-2"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-4">
                  {study.industry}
                </span>

                <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h2>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">Challenge</div>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-500 mb-1">Result</div>
                  <p className="text-gray-900 font-medium">{study.result}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  Read case study
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in becoming a pilot partner?
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
