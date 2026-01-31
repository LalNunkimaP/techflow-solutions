import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero = ({ title, subtitle, description }: ServiceHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-trust-navy to-brand-purple text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;