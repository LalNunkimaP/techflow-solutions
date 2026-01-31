'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BudgetCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ isOpen, onClose }) => {
  const [selections, setSelections] = useState({
    projectType: '',
    complexity: '',
    features: [] as string[],
    timeline: '',
    support: ''
  });

  const projectTypes = [
    { name: 'Website Development', basePrice: 15000 },
    { name: 'Mobile App', basePrice: 35000 },
    { name: 'Web Application', basePrice: 45000 },
    { name: 'DevOps Setup', basePrice: 20000 },
    { name: 'AI/ML Solution', basePrice: 60000 }
  ];

  const complexityLevels = [
    { name: 'Basic', multiplier: 1 },
    { name: 'Intermediate', multiplier: 1.5 },
    { name: 'Advanced', multiplier: 2 },
    { name: 'Enterprise', multiplier: 3 }
  ];

  const additionalFeatures = [
    { name: 'User Authentication', price: 3000 },
    { name: 'Payment Integration', price: 5000 },
    { name: 'Admin Dashboard', price: 8000 },
    { name: 'API Development', price: 6000 },
    { name: 'Third-party Integrations', price: 4000 },
    { name: 'Analytics & Reporting', price: 5000 },
    { name: 'Multi-language Support', price: 4000 },
    { name: 'Advanced Security', price: 7000 }
  ];

  const timelineOptions = [
    { name: 'Rush (1-2 months)', multiplier: 1.3 },
    { name: 'Standard (3-4 months)', multiplier: 1 },
    { name: 'Flexible (5-6 months)', multiplier: 0.9 }
  ];

  const supportOptions = [
    { name: '3 Months Support', price: 3000 },
    { name: '6 Months Support', price: 5000 },
    { name: '12 Months Support', price: 8000 }
  ];

  const calculateTotal = () => {
    let total = 0;

    const selectedProject = projectTypes.find(p => p.name === selections.projectType);
    if (selectedProject) {
      total += selectedProject.basePrice;
    }

    const selectedComplexity = complexityLevels.find(c => c.name === selections.complexity);
    if (selectedComplexity) {
      total *= selectedComplexity.multiplier;
    }

    selections.features.forEach(featureName => {
      const feature = additionalFeatures.find(f => f.name === featureName);
      if (feature) {
        total += feature.price;
      }
    });

    const selectedTimeline = timelineOptions.find(t => t.name === selections.timeline);
    if (selectedTimeline) {
      total *= selectedTimeline.multiplier;
    }

    const selectedSupport = supportOptions.find(s => s.name === selections.support);
    if (selectedSupport) {
      total += selectedSupport.price;
    }

    return total;
  };

  const handleFeatureToggle = (featureName: string) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(featureName)
        ? prev.features.filter(f => f !== featureName)
        : [...prev.features, featureName]
    }));
  };

  if (!isOpen) return null;

  const estimatedTotal = calculateTotal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card rounded-2xl shadow-prominent max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-textPrimary">Project Budget Calculator</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            aria-label="Close budget calculator"
          >
            <Icon name="XMarkIcon" size={24} className="text-textSecondary" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">Project Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelections(prev => ({ ...prev, projectType: type.name }))}
                  className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    selections.projectType === type.name
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                  }`}
                >
                  <p className="font-semibold mb-1">{type.name}</p>
                  <p className="text-sm opacity-70">From ${type.basePrice.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">Complexity Level</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {complexityLevels.map((level) => (
                <button
                  key={level.name}
                  onClick={() => setSelections(prev => ({ ...prev, complexity: level.name }))}
                  className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                    selections.complexity === level.name
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                  }`}
                >
                  <p className="font-semibold">{level.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {additionalFeatures.map((feature) => (
                <button
                  key={feature.name}
                  onClick={() => handleFeatureToggle(feature.name)}
                  className={`p-4 border-2 rounded-lg text-left transition-all duration-200 flex items-center justify-between ${
                    selections.features.includes(feature.name)
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                  }`}
                >
                  <span className="font-medium">{feature.name}</span>
                  <span className="text-sm">+${feature.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {timelineOptions.map((timeline) => (
                <button
                  key={timeline.name}
                  onClick={() => setSelections(prev => ({ ...prev, timeline: timeline.name }))}
                  className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                    selections.timeline === timeline.name
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                  }`}
                >
                  <p className="font-semibold">{timeline.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">Support Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {supportOptions.map((support) => (
                <button
                  key={support.name}
                  onClick={() => setSelections(prev => ({ ...prev, support: support.name }))}
                  className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    selections.support === support.name
                      ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-textPrimary'
                  }`}
                >
                  <p className="font-semibold mb-1">{support.name}</p>
                  <p className="text-sm opacity-70">+${support.price.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gradient-to-br from-primary via-brand-purple to-trust-navy text-white p-6 rounded-b-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/80 mb-1">Estimated Project Budget</p>
              <p className="text-3xl font-bold">
                ${estimatedTotal > 0 ? estimatedTotal.toLocaleString() : '0'}
              </p>
              <p className="text-sm text-white/70 mt-1">
                *Final pricing may vary based on specific requirements
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;