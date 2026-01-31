'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

interface SuccessMetricsProps {
  className?: string;
}

const SuccessMetrics = ({ className = '' }: SuccessMetricsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const metrics: Metric[] = [
    {
      id: 1,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: "CheckBadgeIcon",
      color: "text-blue-600"
    },
    {
      id: 2,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "FaceSmileIcon",
      color: "text-emerald-600"
    },
    {
      id: 3,
      value: 250,
      suffix: "+",
      label: "Happy Clients",
      icon: "UserGroupIcon",
      color: "text-purple-600"
    },
    {
      id: 4,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      icon: "TrophyIcon",
      color: "text-amber-600"
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    metrics.forEach((metric) => {
      let currentStep = 0;
      const increment = metric.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), metric.value);
        
        setCounts(prev => ({
          ...prev,
          [metric.id]: newValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-gradient-to-br from-primary/5 to-brand-purple/5 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-textSecondary leading-relaxed">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-card rounded-2xl p-8 text-center shadow-soft border border-border"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Icon name={metric.icon as any} size={32} className={metric.color} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-textPrimary mb-2">
                  0{metric.suffix}
                </div>
                <div className="text-textSecondary font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-gradient-to-br from-primary/5 to-brand-purple/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-prominent transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Icon name={metric.icon as any} size={32} className={metric.color} />
                </div>
              </div>
              <div className="text-5xl font-bold text-textPrimary mb-2">
                {counts[metric.id] || 0}{metric.suffix}
              </div>
              <div className="text-textSecondary font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;