'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    interest: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          industry: '',
          interest: '',
          message: '',
          consent: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: 0.12 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium bg-accent/10 text-accent border border-accent/20">
                Limited Availability — 3 Pilots Per Quarter
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Request Private Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We're accepting select pilot partners. Tell us about your requirements and we'll schedule a confidential discussion.
            </p>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-card"
              >
                <h3 className="font-semibold text-green-900 mb-2">Thanks — your request has been received!</h3>
                <p className="text-green-800">
                  Check your email for confirmation. We'll be in touch within 1 business day to schedule your consultation.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-card"
              >
                <h3 className="font-semibold text-red-900 mb-2">Something went wrong</h3>
                <p className="text-red-800">
                  Please try again or email us directly at contact@genrecai.com
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`input-field ${errors.company ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry <span className="text-accent">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`input-field ${errors.industry ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.industry}
                    aria-describedby={errors.industry ? 'industry-error' : undefined}
                  >
                    <option value="">Select an industry</option>
                    <option value="construction">Construction</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && (
                    <p id="industry-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.industry}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Product of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a product</option>
                    <option value="educational-websites">Educational Websites</option>
                    <option value="construction-websites">Construction Websites</option>
                    <option value="restaurant-websites">Restaurant Websites</option>
                    <option value="lumina-iq">Lumina IQ</option>
                    <option value="tabble">Tabble</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell us about your requirements and timeline..."
                />
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`mt-1 w-4 h-4 border-gray-300 rounded focus:ring-accent focus:ring-2 ${
                      errors.consent ? 'border-red-500' : ''
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <span className="text-sm text-gray-600">
                    I consent to be contacted by Genrec AI and have read the{' '}
                    <a href="/privacy" className="text-accent hover:underline">
                      privacy policy
                    </a>
                    . <span className="text-accent">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
