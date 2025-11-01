export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Genrec AI services and website.',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Genrec AI's website and services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code or disrupt the services</li>
                <li>To impersonate or attempt to impersonate Genrec AI or another user</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p>
                The services and their original content, features, and functionality are owned by Genrec AI and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Genrec AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at:{' '}
                <a href="mailto:contact@genrecai.com" className="text-accent hover:underline">
                  contact@genrecai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
