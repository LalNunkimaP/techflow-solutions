'use client';

import React, { useState } from 'react';
import ContactMethodCard from './ContactMethodCard';
import ConsultationWizard from './ConsultationWizard';
import NeedsAssessment from './NeedsAssessment';
import BudgetCalculator from './BudgetCalculator';

const ContactInteractive: React.FC = () => {
  const [showConsultationWizard, setShowConsultationWizard] = useState(false);
  const [showNeedsAssessment, setShowNeedsAssessment] = useState(false);
  const [showBudgetCalculator, setShowBudgetCalculator] = useState(false);

  const contactMethods = [
    {
      icon: 'CalendarDaysIcon',
      title: 'Schedule a Consultation',
      description: 'Book a free 30-minute consultation with our experts to discuss your project requirements and goals.',
      action: 'Book Now',
      onClick: () => setShowConsultationWizard(true)
    },
    {
      icon: 'ClipboardDocumentCheckIcon',
      title: 'Take Needs Assessment',
      description: 'Answer a few questions to help us understand your requirements and get personalized recommendations.',
      action: 'Start Assessment',
      onClick: () => setShowNeedsAssessment(true)
    },
    {
      icon: 'CalculatorIcon',
      title: 'Estimate Your Budget',
      description: 'Use our interactive calculator to get an estimated budget for your project based on your requirements.',
      action: 'Calculate Budget',
      onClick: () => setShowBudgetCalculator(true)
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Live Chat Support',
      description: 'Connect with our team instantly through live chat for quick questions and immediate assistance.',
      action: 'Start Chat',
      onClick: () => alert('Live chat feature will be available soon!')
    },
    {
      icon: 'PhoneIcon',
      title: 'Call Us Directly',
      description: 'Speak with our team directly. Available Monday-Friday, 9 AM - 6 PM across all time zones.',
      action: 'View Numbers',
      onClick: () => alert('Phone: +1 (415) 555-0123 (SF)\n+1 (212) 555-0456 (NY)\n+1 (512) 555-0789 (Austin)')
    },
    {
      icon: 'VideoCameraIcon',
      title: 'Video Consultation',
      description: 'Schedule a video call for a more personal discussion about your project and requirements.',
      action: 'Schedule Video Call',
      onClick: () => setShowConsultationWizard(true)
    }
  ];

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              We offer multiple ways to connect with our team. Select the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <ContactMethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                action={method.action}
                onClick={method.onClick}
              />
            ))}
          </div>
        </div>
      </section>

      <ConsultationWizard
        isOpen={showConsultationWizard}
        onClose={() => setShowConsultationWizard(false)}
      />

      <NeedsAssessment
        isOpen={showNeedsAssessment}
        onClose={() => setShowNeedsAssessment(false)}
      />

      <BudgetCalculator
        isOpen={showBudgetCalculator}
        onClose={() => setShowBudgetCalculator(false)}
      />
    </>
  );
};

export default ContactInteractive;