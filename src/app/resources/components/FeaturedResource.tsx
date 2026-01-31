import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedResourceProps {
  resource: {
    id: number;
    title: string;
    description: string;
    category: string;
    type: string;
    image: string;
    alt: string;
    readTime: number;
    publishDate: string;
    author: {
      name: string;
      avatar: string;
      avatarAlt: string;
    };
  };
  onDownload?: (id: number) => void;
}

export default function FeaturedResource({ resource, onDownload }: FeaturedResourceProps) {
  return (
    <div className="bg-gradient-to-br from-trust-navy to-primary rounded-xl shadow-prominent overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AppImage
            src={resource.image}
            alt={resource.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/80 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
              Featured
            </span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold">
              {resource.type}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {resource.title}
          </h2>
          <p className="text-primary text-lg mb-6">
            {resource.description}
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <AppImage
                src={resource.author.avatar}
                alt={resource.author.avatarAlt}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-semibold text-sm">{resource.author.name}</p>
                <p className="text-white/70 text-xs">{resource.publishDate}</p>
              </div>
            </div>
            <span className="text-white/50">•</span>
            <div className="flex items-center space-x-1 text-white/90">
              <Icon name="ClockIcon" size={16} />
              <span className="text-sm">{resource.readTime} min read</span>
            </div>
          </div>

          {onDownload && (
            <button
              onClick={() => onDownload(resource.id)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 w-fit"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download Resource</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}