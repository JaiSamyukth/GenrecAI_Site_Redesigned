export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Genrec AI services and website.',
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p>
                Genrec AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, company name, phone number</li>
                <li>Information about your business and requirements</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{' '}
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
