'use client';

import { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import NewsletterSubscription from './NewsletterSubscription';
import FeaturedResource from './FeaturedResource';
import RelatedResources from './RelatedResources';
import Icon from '@/components/ui/AppIcon';

interface Resource {
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
}

export default function ResourcesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('latest');

  useEffect(() => {
    setIsHydrated(true);
    const saved = localStorage.getItem('bookmarkedResources');
    if (saved) {
      setBookmarkedIds(JSON.parse(saved));
    }
  }, []);

  const mockResources: Resource[] = [
  {
    id: 1,
    title: "Building Scalable Microservices Architecture with Kubernetes",
    description: "Learn how to design and implement a robust microservices architecture using Kubernetes orchestration. This comprehensive guide covers service mesh patterns, container orchestration, and best practices for production deployments.",
    category: "DevOps",
    type: "Whitepaper",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1c57163-1765389098596.png",
    alt: "Modern data center with rows of blue-lit server racks in organized formation",
    readTime: 15,
    publishDate: "Jan 10, 2026",
    author: {
      name: "Michael Chen",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14b09e9c3-1763295378718.png",
      avatarAlt: "Professional headshot of Asian man with short black hair in navy blazer"
    },
    downloads: 1247,
    rating: 4.8
  },
  {
    id: 2,
    title: "Progressive Web Apps: The Future of Mobile Development",
    description: "Discover how PWAs are revolutionizing mobile app development with offline capabilities, push notifications, and app-like experiences. Includes code examples and implementation strategies for modern web applications.",
    category: "Mobile Apps",
    type: "Blog",
    image: "https://images.unsplash.com/photo-1608244974170-68e9de466fe0",
    alt: "Smartphone displaying colorful app icons on modern interface with gradient background",
    readTime: 8,
    publishDate: "Jan 12, 2026",
    author: {
      name: "Sarah Johnson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16e2660d5-1763296451457.png",
      avatarAlt: "Professional woman with blonde hair in white blouse smiling at camera"
    },
    downloads: 892,
    rating: 4.6
  },
  {
    id: 3,
    title: "E-Commerce Platform Transformation: A Case Study",
    description: "How we helped a retail giant migrate from monolithic architecture to cloud-native solutions, resulting in 300% performance improvement and 60% cost reduction. Detailed analysis of challenges, solutions, and outcomes.",
    category: "Web Development",
    type: "Case Study",
    image: "https://images.unsplash.com/photo-1732258357159-599cd37a5b8a",
    alt: "Modern shopping cart icon on laptop screen with credit cards and online payment interface",
    readTime: 12,
    publishDate: "Jan 8, 2026",
    author: {
      name: "David Martinez",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_194455d24-1763293301742.png",
      avatarAlt: "Hispanic man with beard wearing gray suit jacket in professional setting"
    },
    downloads: 1534,
    rating: 4.9
  },
  {
    id: 4,
    title: "Machine Learning Integration in Modern Web Applications",
    description: "Practical guide to implementing ML models in production web environments. Covers TensorFlow.js, model optimization, real-time inference, and performance considerations for client-side machine learning.",
    category: "AI & ML",
    type: "Guide",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
    alt: "Futuristic AI neural network visualization with glowing blue nodes and connections",
    readTime: 20,
    publishDate: "Jan 5, 2026",
    author: {
      name: "Dr. Emily Watson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4f24d7d-1763299657375.png",
      avatarAlt: "Professional woman with brown hair in black blazer with confident expression"
    },
    downloads: 2103,
    rating: 4.7
  },
  {
    id: 5,
    title: "Cloud Security Best Practices for Enterprise Applications",
    description: "Comprehensive security framework for cloud-based applications covering identity management, data encryption, network security, and compliance requirements. Essential reading for security-conscious organizations.",
    category: "Security",
    type: "Whitepaper",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2195ce8-1764675851158.png",
    alt: "Digital padlock icon with binary code and security shield on dark blue background",
    readTime: 18,
    publishDate: "Jan 3, 2026",
    author: {
      name: "Robert Kim",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa0722da-1763296610528.png",
      avatarAlt: "Asian man in glasses wearing dark suit with professional demeanor"
    },
    downloads: 1876,
    rating: 4.9
  },
  {
    id: 6,
    title: "Serverless Architecture Patterns and Anti-Patterns",
    description: "Deep dive into serverless computing with AWS Lambda, Azure Functions, and Google Cloud Functions. Learn when to use serverless, common pitfalls to avoid, and optimization techniques for cost and performance.",
    category: "Cloud Solutions",
    type: "Blog",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_176850219-1766847671265.png",
    alt: "Earth from space with glowing network connections representing global cloud infrastructure",
    readTime: 10,
    publishDate: "Dec 28, 2025",
    author: {
      name: "Lisa Anderson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_175cdf7c9-1763293450937.png",
      avatarAlt: "Professional woman with red hair in business attire with warm smile"
    },
    downloads: 1342,
    rating: 4.5
  },
  {
    id: 7,
    title: "React 19 Performance Optimization Techniques",
    description: "Master the latest React performance optimization strategies including Server Components, Suspense boundaries, concurrent rendering, and advanced memoization patterns for lightning-fast applications.",
    category: "Web Development",
    type: "Guide",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e96a65dc-1767722347351.png",
    alt: "React logo with code snippets and performance graphs on developer workspace",
    readTime: 14,
    publishDate: "Dec 25, 2025",
    author: {
      name: "Alex Thompson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfd0c407-1763293996430.png",
      avatarAlt: "Young man with short brown hair in casual blue shirt with friendly expression"
    },
    downloads: 2456,
    rating: 4.8
  },
  {
    id: 8,
    title: "DevOps Automation: CI/CD Pipeline Implementation",
    description: "Step-by-step guide to building automated deployment pipelines with Jenkins, GitLab CI, and GitHub Actions. Includes Docker containerization, automated testing, and production deployment strategies.",
    category: "DevOps",
    type: "Video",
    image: "https://images.unsplash.com/photo-1681981689431-d2c585e27514",
    alt: "Automated assembly line with robotic arms representing continuous integration pipeline",
    readTime: 25,
    publishDate: "Dec 20, 2025",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1621858436649-25dedba0eb38",
      avatarAlt: "Man with beard in plaid shirt working on laptop in modern office"
    },
    downloads: 1789,
    rating: 4.7
  }];


  const categories = ['All', 'Web Development', 'Mobile Apps', 'DevOps', 'Cloud Solutions', 'AI & ML', 'Security'];
  const types = ['All', 'Blog', 'Whitepaper', 'Case Study', 'Guide', 'Video'];

  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else if (sortBy === 'popular') {
      return (b.downloads || 0) - (a.downloads || 0);
    } else if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  const handleDownload = (id: number) => {
    if (!isHydrated) return;
    console.log(`Downloading resource ${id}`);
  };

  const handleBookmark = (id: number) => {
    if (!isHydrated) return;
    const newBookmarks = bookmarkedIds.includes(id) ?
    bookmarkedIds.filter((bookmarkId) => bookmarkId !== id) :
    [...bookmarkedIds, id];
    setBookmarkedIds(newBookmarks);
    localStorage.setItem('bookmarkedResources', JSON.stringify(newBookmarks));
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedType('All');
    setSearchQuery('');
  };

  const relatedResources = mockResources.slice(0, 3).map((r) => ({
    id: r.id,
    title: r.title,
    category: r.category,
    type: r.type,
    image: r.image,
    alt: r.alt,
    readTime: r.readTime
  }));

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-xl" />
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="h-96 bg-muted rounded-xl" />
              <div className="lg:col-span-3 space-y-6">
                {[1, 2, 3].map((i) =>
                <div key={i} className="h-64 bg-muted rounded-xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary to-brand-purple py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resource Center
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our collection of technical insights, industry trends, and best practices to accelerate your digital transformation journey
            </p>
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <FeaturedResource resource={mockResources[0]} onDownload={handleDownload} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <FilterPanel
                categories={categories}
                types={types}
                selectedCategory={selectedCategory}
                selectedType={selectedType}
                onCategoryChange={setSelectedCategory}
                onTypeChange={setSelectedType}
                onReset={handleResetFilters} />

              <RelatedResources resources={relatedResources} />
              <NewsletterSubscription />
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-textPrimary">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 'All Resources'}
                </h2>
                <p className="text-textSecondary mt-1">
                  {sortedResources.length} {sortedResources.length === 1 ? 'resource' : 'resources'} found
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="AdjustmentsHorizontalIcon" size={20} className="text-textSecondary" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200">

                  <option value="latest">Latest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {sortedResources.length === 0 ?
            <div className="text-center py-16">
                <Icon name="MagnifyingGlassIcon" size={64} className="text-textSecondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-textPrimary mb-2">No resources found</h3>
                <p className="text-textSecondary mb-6">Try adjusting your search or filters</p>
                <button
                onClick={handleResetFilters}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200">

                  Reset Filters
                </button>
              </div> :

            <div className="grid md:grid-cols-2 gap-6">
                {sortedResources.map((resource) =>
              <ResourceCard
                key={resource.id}
                resource={resource}
                onDownload={handleDownload}
                onBookmark={handleBookmark}
                isBookmarked={bookmarkedIds.includes(resource.id)} />

              )}
              </div>
            }
          </main>
        </div>
      </div>
    </div>);

}