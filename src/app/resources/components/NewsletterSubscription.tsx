'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-primary to-brand-purple rounded-xl shadow-prominent p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-white/10 rounded-full">
          <Icon name="EnvelopeIcon" size={32} className="text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
      <p className="text-white/90 mb-6">
        Subscribe to our newsletter for the latest insights, industry trends, and exclusive resources delivered to your inbox.
      </p>

      {isSubscribed ? (
        <div className="flex items-center justify-center space-x-2 py-4 bg-success/20 rounded-lg">
          <Icon name="CheckCircleIcon" variant="solid" size={24} className="text-white" />
          <span className="text-white font-semibold">Successfully subscribed!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-white rounded-lg text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />
            {error && (
              <p className="text-white/90 text-sm mt-2 flex items-center justify-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{error}</span>
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            Subscribe Now
          </button>
        </form>
      )}

      <p className="text-white/70 text-sm mt-4">
        Join 5,000+ professionals receiving weekly insights. Unsubscribe anytime.
      </p>
    </div>
  );
}