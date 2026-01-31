'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    alt: string;
    features: string[];
    technologies: string[];
    caseStudyCount: number;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl shadow-md overflow-hidden border border-border">
        <div className="h-64 bg-muted"></div>
        <div className="p-6">
          <div className="h-8 bg-muted rounded mb-4"></div>
          <div className="h-20 bg-muted rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-card rounded-xl shadow-md hover:shadow-prominent overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 text-white">
            <Icon name={service.icon as any} size={32} className="text-accent" />
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-textSecondary mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-textSecondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-textPrimary uppercase tracking-wider mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-textSecondary text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-sm text-textSecondary">
            {service.caseStudyCount} Case Studies
          </span>
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary hover:text-brand-purple font-semibold transition-colors duration-200"
          >
            <span>View Projects</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;