'use client';

import React from 'react';
import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import ProcessTimeline from './ProcessTimeline';
import TechnologyStack from './TechnologyStack';
import ServiceComparison from './ServiceComparison';
import PricingCalculator from './PricingCalculator';
import CTASection from './CTASection';
import Footer from './Footer';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
  technologies: string[];
  caseStudyCount: number;
}

interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface Technology {
  name: string;
  category: string;
  proficiency: number;
}

interface ComparisonFeature {
  feature: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
}

interface CalculatorOption {
  id: string;
  label: string;
  basePrice: number;
}

interface ServicesInteractiveProps {
  heroData: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: Service[];
  processSteps: ProcessStep[];
  technologies: Technology[];
  comparisonFeatures: ComparisonFeature[];
  calculatorData: {
    projectTypes: CalculatorOption[];
    complexityLevels: CalculatorOption[];
    timelineOptions: CalculatorOption[];
  };
}

const ServicesInteractive = ({
  heroData,
  services,
  processSteps,
  technologies,
  comparisonFeatures,
  calculatorData,
}: ServicesInteractiveProps) => {
  return (
    <>
      <ServiceHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Comprehensive technology solutions designed to drive your business forward with innovation and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={processSteps} />

      <TechnologyStack technologies={technologies} />

      <ServiceComparison features={comparisonFeatures} />

      <PricingCalculator
        projectTypes={calculatorData.projectTypes}
        complexityLevels={calculatorData.complexityLevels}
        timelineOptions={calculatorData.timelineOptions}
      />

      <CTASection />

      <Footer />
    </>
  );
};

export default ServicesInteractive;