import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RelatedResource {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  alt: string;
  readTime: number;
}

interface RelatedResourcesProps {
  resources: RelatedResource[];
}

export default function RelatedResources({ resources }: RelatedResourcesProps) {
  return (
    <div className="bg-card rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-textPrimary mb-6 flex items-center space-x-2">
        <Icon name="SparklesIcon" size={24} className="text-accent" />
        <span>Related Resources</span>
      </h3>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex space-x-4 p-4 rounded-lg hover:bg-muted transition-colors duration-200 cursor-pointer group"
          >
            <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <AppImage
                src={resource.image}
                alt={resource.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                  {resource.category}
                </span>
                <span className="text-xs text-textSecondary">{resource.type}</span>
              </div>
              <h4 className="text-sm font-semibold text-textPrimary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {resource.title}
              </h4>
              <div className="flex items-center space-x-1 text-xs text-textSecondary">
                <Icon name="ClockIcon" size={14} />
                <span>{resource.readTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}