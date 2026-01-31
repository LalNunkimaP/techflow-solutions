import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  feature: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
}

interface ServiceComparisonProps {
  features: ComparisonFeature[];
}

const ServiceComparison = ({ features }: ServiceComparisonProps) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Service Comparison Matrix
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Choose the service tier that best fits your project requirements and business goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-textPrimary">Features</h3>
              </div>
              <div className="bg-gradient-to-br from-primary to-trust-navy rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Basic</h3>
                <p className="text-sm opacity-90">Essential solutions</p>
              </div>
              <div className="bg-gradient-to-br from-brand-purple to-primary rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Professional</h3>
                <p className="text-sm opacity-90">Advanced capabilities</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-warning rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Enterprise</h3>
                <p className="text-sm opacity-90">Complete solutions</p>
              </div>
            </div>

            {features.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 mb-3"
              >
                <div className="bg-card rounded-lg p-4 border border-border flex items-center">
                  <span className="text-sm font-medium text-textPrimary">{item.feature}</span>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border flex items-center justify-center">
                  {item.basic ? (
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                  ) : (
                    <Icon name="XCircleIcon" size={24} className="text-textSecondary opacity-30" />
                  )}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border flex items-center justify-center">
                  {item.professional ? (
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                  ) : (
                    <Icon name="XCircleIcon" size={24} className="text-textSecondary opacity-30" />
                  )}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border flex items-center justify-center">
                  {item.enterprise ? (
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                  ) : (
                    <Icon name="XCircleIcon" size={24} className="text-textSecondary opacity-30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;