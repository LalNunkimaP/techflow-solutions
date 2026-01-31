'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethodCardProps {
  icon: string;
  title: string;
  description: string;
  action: string;
  onClick: () => void;
  className?: string;
}

const ContactMethodCard: React.FC<ContactMethodCardProps> = ({
  icon,
  title,
  description,
  action,
  onClick,
  className = ''
}) => {
  return (
    <div className={`bg-card border border-border rounded-xl p-6 hover:shadow-prominent transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-textPrimary mb-2">{title}</h3>
          <p className="text-textSecondary mb-4">{description}</p>
          <button
            onClick={onClick}
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-brand-purple transition-colors duration-200"
          >
            <span>{action}</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMethodCard;