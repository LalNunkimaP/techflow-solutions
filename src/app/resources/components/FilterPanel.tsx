'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterPanelProps {
  categories: string[];
  types: string[];
  selectedCategory: string;
  selectedType: string;
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: string) => void;
  onReset: () => void;
}

export default function FilterPanel({
  categories,
  types,
  selectedCategory,
  selectedType,
  onCategoryChange,
  onTypeChange,
  onReset,
}: FilterPanelProps) {
  const hasActiveFilters = selectedCategory !== 'All' || selectedType !== 'All';

  return (
    <div className="bg-card rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-textPrimary flex items-center space-x-2">
          <Icon name="FunnelIcon" size={20} />
          <span>Filters</span>
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            Reset All
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-textPrimary mb-3">Category</label>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'bg-muted text-textSecondary hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-semibold text-textPrimary mb-3">Content Type</label>
          <div className="space-y-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'bg-muted text-textSecondary hover:bg-muted/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}