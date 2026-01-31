import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            A transparent, collaborative approach that ensures your project success from discovery to deployment and beyond.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative mb-12 lg:mb-16 ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                  <div className="bg-card rounded-xl shadow-md p-6 border border-border hover:shadow-prominent transition-shadow duration-300">
                    <div className={`flex items-start space-x-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:space-x-reverse'}`}>
                      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <Icon name={step.icon as any} size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                            {step.phase}
                          </span>
                          <span className="text-xs text-textSecondary">• {step.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-textPrimary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-textSecondary leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;