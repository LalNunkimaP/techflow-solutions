'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What is your typical response time?',
      answer: 'We respond to all inquiries within 2 hours during business hours (Monday-Friday, 9 AM - 6 PM in your time zone). For urgent matters, we recommend calling our direct line or using live chat for immediate assistance.'
    },
    {
      id: 2,
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a complimentary 30-minute consultation to discuss your project requirements, goals, and how we can help. This is a no-obligation conversation to ensure we\'re the right fit for your needs.'
    },
    {
      id: 3,
      question: 'What information should I prepare before contacting you?',
      answer: 'To make the most of our consultation, prepare: your project goals, target timeline, estimated budget range, any existing systems or technologies, and key challenges you\'re facing. However, if you\'re just exploring options, feel free to reach out with any questions.'
    },
    {
      id: 4,
      question: 'How do you handle different time zones?',
      answer: 'We have offices in San Francisco, New York, and Austin, covering all major US time zones. We also offer flexible scheduling for international clients and can arrange meetings outside standard business hours when needed.'
    },
    {
      id: 5,
      question: 'What happens after I submit a contact form?',
      answer: 'After submission, you\'ll receive an automated confirmation email immediately. A member of our team will review your inquiry and respond within 2 hours with next steps, which typically includes scheduling a detailed consultation call.'
    },
    {
      id: 6,
      question: 'Can I visit your office in person?',
      answer: 'Absolutely! We welcome in-person visits at any of our three office locations. We recommend scheduling an appointment in advance to ensure the right team members are available to meet with you.'
    },
    {
      id: 7,
      question: 'Do you work with clients outside the United States?',
      answer: 'Yes, we work with clients globally. While our offices are US-based, we have experience collaborating with international teams and can accommodate different time zones and communication preferences.'
    },
    {
      id: 8,
      question: 'What if I\'m not sure what services I need?',
      answer: 'That\'s perfectly fine! Our needs assessment tool can help identify the right solutions for your situation. Alternatively, schedule a consultation and we\'ll guide you through the options based on your goals and challenges.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-textSecondary">
              Find quick answers to common questions about contacting us and our consultation process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-prominent transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-textPrimary pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-textSecondary">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-textSecondary mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;