import ProductHero from '@/components/products/ProductHero';

export const metadata = {
  title: 'Educational Websites - Privacy-First Platforms for Schools',
  description: 'FERPA-compliant, privacy-first platforms designed specifically for educational institutions.',
};

export default function EducationalWebsitesPage() {
  return (
    <>
      <ProductHero
        badge="Education Vertical"
        title="Privacy-First Platforms for Educational Excellence"
        description="FERPA-compliant solutions that protect student data while delivering powerful learning management and administrative tools."
        features={[
          'Full FERPA compliance with granular privacy controls',
          'Integrated learning management and administrative tools',
          'Parent and student portals with role-based access',
          'Real-time analytics with privacy-preserving aggregation',
          'Accessible design meeting WCAG 2.1 AAA standards',
        ]}
      />

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Capabilities</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-card p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">Student Information System</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive student records management with automated privacy controls and consent management.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Enrollment and attendance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Grade management and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Parent-teacher communication portals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-card p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">Learning Management</h3>
                <p className="text-gray-600 mb-4">
                  Modern LMS capabilities with integrated privacy controls and accessibility features.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Course content management and delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Assignment submission and grading workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Interactive multimedia support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-card p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">Administrative Tools</h3>
                <p className="text-gray-600 mb-4">
                  Streamline school operations with integrated administrative functionality.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Scheduling and resource management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Staff directory and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Compliance reporting and audit trails</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pilot Results</h2>
            <div className="bg-accent/5 border-2 border-accent/20 rounded-card p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">34%</div>
                  <div className="text-sm text-gray-600">Reduction in administrative time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-gray-600">Parent portal adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4wk</div>
                  <div className="text-sm text-gray-600">Average deployment time</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                * Pilot metrics from early deployment — Metropolitan Education District case study
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
