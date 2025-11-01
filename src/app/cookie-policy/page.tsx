export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Genrec AI website.',
};

export default function CookiePolicyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Necessary Cookies:</strong> Essential for the website to function properly</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (only with consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Cookie Choices</h2>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website. We respect your choice and will only use optional analytics cookies if you provide consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy-First Analytics</h2>
              <p>
                When you consent to analytics cookies, we use privacy-preserving analytics tools that don't track individuals or sell data to third parties. Your privacy is our priority.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:{' '}
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
