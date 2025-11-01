export const metadata = {
  title: 'About - Privacy-First Engineering for Enterprise',
  description: "Learn about Genrec AI's mission to deliver privacy-first AI solutions for regulated industries.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Engineering Leverage, Not Just Software
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Genrec AI was founded on a simple principle: enterprise AI should create measurable business value without compromising on privacy or security.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  We work exclusively with select enterprise clients in construction, hospitality, and education — industries where privacy, compliance, and operational efficiency are non-negotiable.
                </p>
                <p>
                  Our solutions are built privacy-first from day one. We don't retrofit security or compliance. We engineer it into the foundation of every system we build.
                </p>
                <p>
                  We limit our client intake to 3 new pilot partners per quarter. This isn't artificial scarcity — it's a commitment to delivering white-glove implementation and support that drives real results.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-card p-6">
                  <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                  <p className="text-gray-600">
                    Data privacy isn't a feature — it's the foundation. Every system we build puts privacy and security at its core.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-card p-6">
                  <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
                  <p className="text-gray-600">
                    We're accountable for outcomes, not outputs. Every pilot has clear KPIs and ROI tracking from day one.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-card p-6">
                  <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
                  <p className="text-gray-600">
                    Weeks, not months. Our proven process takes you from concept to production pilot in 4-8 weeks.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-card p-6">
                  <h3 className="text-xl font-semibold mb-3">White-Glove Support</h3>
                  <p className="text-gray-600">
                    Dedicated implementation team and ongoing support. You're never handed off to a support queue.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border-2 border-accent/20 rounded-card p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're accepting 3 new pilot partners this quarter. If you're an enterprise in construction, hospitality, or education, let's talk.
              </p>
              <a href="/contact" className="btn-primary inline-flex">
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
