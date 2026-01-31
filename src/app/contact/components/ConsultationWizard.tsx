'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  preferredContact: string;
}

interface ConsultationWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationWizard: React.FC<ConsultationWizardProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email'
  });

  useEffect(() => {
    setIsHydrated(true);
    if (isHydrated && isOpen) {
      const savedData = localStorage.getItem('consultationFormData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, [isHydrated, isOpen]);

  useEffect(() => {
    if (isHydrated && isOpen) {
      localStorage.setItem('consultationFormData', JSON.stringify(formData));
    }
  }, [formData, isHydrated, isOpen]);

  const totalSteps = 4;

  const projectTypes = [
    'Website Development',
    'Mobile App Development',
    'DevOps & Cloud Solutions',
    'AI & Machine Learning',
    'Blockchain Solutions',
    'IoT Development',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelines = [
    'ASAP (1-2 months)',
    'Standard (3-4 months)',
    'Flexible (5-6 months)',
    'Long-term (6+ months)'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (isHydrated) {
      localStorage.removeItem('consultationFormData');
    }
    alert('Thank you for your consultation request! Our team will contact you within 2 hours.');
    onClose();
    setCurrentStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      preferredContact: 'email'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card rounded-2xl shadow-prominent max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-textPrimary mb-2">Schedule Your Free Consultation</h2>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    index + 1 <= currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            aria-label="Close consultation wizard"
          >
            <Icon name="XMarkIcon" size={24} className="text-textSecondary" />
          </button>
        </div>

        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-textPrimary mb-4">Tell us about yourself</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary"
                      placeholder="Your Company Inc."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-textPrimary mb-4">What type of project do you need?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleInputChange('projectType', type)}
                      className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                        formData.projectType === type
                          ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                      }`}
                    >
                      <span className="font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-textPrimary mb-4">Project scope & timeline</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-3">
                      Budget Range *
                    </label>
                    <div className="space-y-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => handleInputChange('budget', range)}
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                            formData.budget === range
                              ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-3">
                      Preferred Timeline *
                    </label>
                    <div className="space-y-2">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => handleInputChange('timeline', timeline)}
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                            formData.timeline === timeline
                              ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-textPrimary mb-4">Tell us about your project</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-2">
                      Project Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary resize-none"
                      placeholder="Describe your project goals, challenges, and what success looks like..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textSecondary mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['email', 'phone', 'video call'].map((method) => (
                        <button
                          key={method}
                          onClick={() => handleInputChange('preferredContact', method)}
                          className={`px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 capitalize ${
                            formData.preferredContact === method
                              ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-card border-t border-border p-6 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 py-3 border border-border rounded-lg font-semibold text-textSecondary hover:bg-muted transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="text-sm text-textSecondary">
            Step {currentStep} of {totalSteps}
          </div>
          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationWizard;