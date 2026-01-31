import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ResourceCardProps {
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
    downloads?: number;
    rating?: number;
  };
  onDownload?: (id: number) => void;
  onBookmark?: (id: number) => void;
  isBookmarked?: boolean;
}

export default function ResourceCard({ resource, onDownload, onBookmark, isBookmarked }: ResourceCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog':
        return 'DocumentTextIcon';
      case 'Whitepaper':
        return 'DocumentIcon';
      case 'Case Study':
        return 'ChartBarIcon';
      case 'Guide':
        return 'BookOpenIcon';
      case 'Video':
        return 'PlayCircleIcon';
      default:
        return 'DocumentTextIcon';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Web Development': 'bg-primary text-primary-foreground',
      'Mobile Apps': 'bg-brand-purple text-brand-purple-foreground',
      'DevOps': 'bg-success text-success-foreground',
      'Cloud Solutions': 'bg-accent text-accent-foreground',
      'AI & ML': 'bg-error text-error-foreground',
      'Security': 'bg-trust-navy text-trust-navy-foreground',
    };
    return colors[category] || 'bg-secondary text-secondary-foreground';
  };

  return (
    <article className="bg-card rounded-xl shadow-md hover:shadow-prominent transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={resource.image}
          alt={resource.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(resource.category)}`}>
            {resource.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-card text-textPrimary">
            {resource.type}
          </span>
        </div>
        {onBookmark && (
          <button
            onClick={() => onBookmark(resource.id)}
            className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-muted transition-colors duration-200"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <Icon
              name="BookmarkIcon"
              variant={isBookmarked ? 'solid' : 'outline'}
              size={20}
              className={isBookmarked ? 'text-accent' : 'text-textSecondary'}
            />
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <AppImage
              src={resource.author.avatar}
              alt={resource.author.avatarAlt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-textSecondary">{resource.author.name}</span>
          </div>
          <span className="text-sm text-textSecondary">•</span>
          <span className="text-sm text-textSecondary">{resource.publishDate}</span>
        </div>

        <h3 className="text-xl font-semibold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-200">
          {resource.title}
        </h3>
        <p className="text-textSecondary mb-4 line-clamp-3">{resource.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-textSecondary">
            <div className="flex items-center space-x-1">
              <Icon name={getTypeIcon(resource.type)} size={16} />
              <span>{resource.readTime} min read</span>
            </div>
            {resource.downloads !== undefined && (
              <div className="flex items-center space-x-1">
                <Icon name="ArrowDownTrayIcon" size={16} />
                <span>{resource.downloads}</span>
              </div>
            )}
            {resource.rating !== undefined && (
              <div className="flex items-center space-x-1">
                <Icon name="StarIcon" variant="solid" size={16} className="text-accent" />
                <span>{resource.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          {onDownload && (
            <button
              onClick={() => onDownload(resource.id)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon name="ArrowDownTrayIcon" size={16} />
              <span className="text-sm font-semibold">Download</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}