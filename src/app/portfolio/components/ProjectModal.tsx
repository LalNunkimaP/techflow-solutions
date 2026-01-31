'use client';

import { useEffect } from 'react';
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
  challenge?: string;
  solution?: string;
  results?: string;
  beforeImage?: string;
  beforeAlt?: string;
  afterImage?: string;
  afterAlt?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleDownloadPDF = () => {
    alert('Case study PDF download would be initiated here');
  };

  const handleShare = (platform: string) => {
    alert(`Share to ${platform} functionality would be implemented here`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-prominent max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-textPrimary">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-textSecondary hover:text-error transition-colors rounded-lg hover:bg-muted"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <AppImage
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:shadow-hover transition-all"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              Download Case Study
            </button>
            <button
              onClick={() => handleShare('LinkedIn')}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all"
            >
              <Icon name="ShareIcon" size={20} />
              Share
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">Client</h3>
              <p className="text-textSecondary">{project.client}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-2">Industry</h3>
              <p className="text-textSecondary">{project.industry}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-textPrimary font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="bg-muted rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Icon name={metric.icon as any} size={24} className="text-success" />
                </div>
                <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-sm text-textSecondary">{metric.label}</p>
              </div>
            ))}
          </div>

          {project.challenge && (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-3">The Challenge</h3>
              <p className="text-textSecondary leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-3">Our Solution</h3>
              <p className="text-textSecondary leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.beforeImage && project.afterImage && (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-4">Before & After</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-textSecondary">Before</p>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <AppImage
                      src={project.beforeImage}
                      alt={project.beforeAlt || 'Before transformation'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-textSecondary">After</p>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <AppImage
                      src={project.afterImage}
                      alt={project.afterAlt || 'After transformation'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.results && (
            <div>
              <h3 className="text-lg font-semibold text-textPrimary mb-3">Results & Impact</h3>
              <p className="text-textSecondary leading-relaxed">{project.results}</p>
            </div>
          )}

          {project.testimonial && (
            <div className="bg-muted rounded-lg p-6">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-primary mb-4" />
              <blockquote className="text-textPrimary italic mb-4 text-lg">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-textPrimary">{project.testimonial.author}</p>
                  <p className="text-sm text-textSecondary">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;