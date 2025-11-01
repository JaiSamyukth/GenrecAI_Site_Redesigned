'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-card shadow-subtle-lg border border-gray-200 p-6 lg:flex lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0 lg:mr-8">
                <h3 className="font-semibold text-lg mb-2">Cookie Preferences</h3>
                <p className="text-sm text-gray-600 max-w-prose">
                  We use necessary cookies to make our site work. With your consent, we may also use optional analytics cookies to improve your experience. You can manage your preferences at any time.{' '}
                  <a 
                    href="/cookie-policy" 
                    className="text-accent hover:underline focus-visible:outline-accent focus-visible:outline-2 rounded"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex gap-3 flex-col sm:flex-row">
                <button
                  onClick={handleDecline}
                  className="btn-ghost whitespace-nowrap"
                >
                  Necessary Only
                </button>
                <button
                  onClick={handleAccept}
                  className="btn-primary whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
