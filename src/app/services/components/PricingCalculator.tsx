'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorOption {
  id: string;
  label: string;
  basePrice: number;
}

interface PricingCalculatorProps {
  projectTypes: CalculatorOption[];
  complexityLevels: CalculatorOption[];
  timelineOptions: CalculatorOption[];
}

const PricingCalculator = ({ projectTypes, complexityLevels, timelineOptions }: PricingCalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    let total = 0;
    
    const project = projectTypes.find(p => p.id === selectedProject);
    const complexity = complexityLevels.find(c => c.id === selectedComplexity);
    const timeline = timelineOptions.find(t => t.id === selectedTimeline);

    if (project) total += project.basePrice;
    if (complexity) total += complexity.basePrice;
    if (timeline) total += timeline.basePrice;

    setEstimatedPrice(total);
  }, [selectedProject, selectedComplexity, selectedTimeline, isHydrated, projectTypes, complexityLevels, timelineOptions]);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 shadow-md border border-border">
            <div className="h-96 bg-muted rounded-xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Project Cost Calculator
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Get an instant estimate for your project. Select your requirements below for a customized quote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 shadow-prominent border border-border">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-textPrimary uppercase tracking-wider mb-4">
                Project Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedProject(type.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedProject === type.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-textPrimary">{type.label}</span>
                      {selectedProject === type.id && (
                        <Icon name="CheckCircleIcon" size={20} className="text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-textSecondary mt-1 block">
                      Starting at ${type.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-textPrimary uppercase tracking-wider mb-4">
                Complexity Level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedComplexity(level.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedComplexity === level.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-textPrimary">{level.label}</span>
                      {selectedComplexity === level.id && (
                        <Icon name="CheckCircleIcon" size={20} className="text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-textSecondary mt-1 block">
                      +${level.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-textPrimary uppercase tracking-wider mb-4">
                Timeline
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {timelineOptions.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => setSelectedTimeline(timeline.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedTimeline === timeline.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-textPrimary">{timeline.label}</span>
                      {selectedTimeline === timeline.id && (
                        <Icon name="CheckCircleIcon" size={20} className="text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-textSecondary mt-1 block">
                      {timeline.basePrice > 0 ? `+$${timeline.basePrice.toLocaleString()}` : 'Standard'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="bg-gradient-to-br from-primary to-brand-purple rounded-xl p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Estimated Project Cost</span>
                  <Icon name="CalculatorIcon" size={32} className="text-accent" />
                </div>
                <div className="text-5xl font-bold mb-4">
                  ${estimatedPrice.toLocaleString()}
                </div>
                <p className="text-sm opacity-90 mb-6">
                  This is a preliminary estimate. Final pricing will be determined after detailed consultation and requirements analysis.
                </p>
                <button className="w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Request Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;