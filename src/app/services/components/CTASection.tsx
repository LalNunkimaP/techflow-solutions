import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-trust-navy to-brand-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital transformation goals. Schedule a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-success text-white font-semibold rounded-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Schedule Consultation</span>
              <Icon name="CalendarIcon" size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View Our Work</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-gray-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-gray-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;