'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  metrics: ProjectMetric[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  caseStudyUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-prominent hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
            {project.industry}
          </span>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-white/90">{project.client}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-textSecondary mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted text-textSecondary text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-muted text-textSecondary text-xs font-medium rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
          {project.metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-1">
                <Icon name={metric.icon as any} size={20} className="text-success" />
              </div>
              <p className="text-lg font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-textSecondary">{metric.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200"
        >
          View Case Study
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;