'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface PortfolioFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  industry: string;
  technology: string;
  projectSize: string;
  searchQuery: string;
}

const PortfolioFilters = ({ onFilterChange }: PortfolioFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    industry: 'all',
    technology: 'all',
    projectSize: 'all',
    searchQuery: ''
  });

  const industries: FilterOption[] = [
    { id: 'all', label: 'All Industries', count: 24 },
    { id: 'healthcare', label: 'Healthcare', count: 8 },
    { id: 'fintech', label: 'FinTech', count: 6 },
    { id: 'ecommerce', label: 'E-Commerce', count: 5 },
    { id: 'education', label: 'Education', count: 3 },
    { id: 'logistics', label: 'Logistics', count: 2 }
  ];

  const technologies: FilterOption[] = [
    { id: 'all', label: 'All Technologies', count: 24 },
    { id: 'react', label: 'React/Next.js', count: 12 },
    { id: 'mobile', label: 'Mobile Apps', count: 8 },
    { id: 'cloud', label: 'Cloud/DevOps', count: 7 },
    { id: 'ai', label: 'AI/ML', count: 4 },
    { id: 'blockchain', label: 'Blockchain', count: 3 }
  ];

  const projectSizes: FilterOption[] = [
    { id: 'all', label: 'All Sizes', count: 24 },
    { id: 'small', label: 'Small (< $50K)', count: 8 },
    { id: 'medium', label: 'Medium ($50K-$200K)', count: 10 },
    { id: 'large', label: 'Large (> $200K)', count: 6 }
  ];

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, searchQuery: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters: FilterState = {
      industry: 'all',
      technology: 'all',
      projectSize: 'all',
      searchQuery: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const activeFilterCount = Object.values(filters).filter(
    (value, index) => index < 3 && value !== 'all'
  ).length + (filters.searchQuery ? 1 : 0);

  return (
    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-textPrimary">Filter Projects</h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden p-2 text-textSecondary hover:text-primary transition-colors"
            aria-label="Toggle filters"
          >
            <Icon name={isFilterOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={24} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm text-textSecondary hover:text-error transition-colors"
            >
              <Icon name="XMarkIcon" size={16} />
              Clear Filters ({activeFilterCount})
            </button>
          )}
        </div>
      </div>

      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary"
          />
          <input
            type="text"
            placeholder="Search projects, clients, or technologies..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-textSecondary mb-2">
              Industry
            </label>
            <select
              value={filters.industry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
            >
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.label} ({industry.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-textSecondary mb-2">
              Technology
            </label>
            <select
              value={filters.technology}
              onChange={(e) => handleFilterChange('technology', e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
            >
              {technologies.map((tech) => (
                <option key={tech.id} value={tech.id}>
                  {tech.label} ({tech.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-textSecondary mb-2">
              Project Size
            </label>
            <select
              value={filters.projectSize}
              onChange={(e) => handleFilterChange('projectSize', e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background"
            >
              {projectSizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.label} ({size.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilters;