'use client';

import { useState, useEffect } from 'react';
import PortfolioFilters from './PortfolioFilters';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import StatsSection from './StatsSection';
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
  industryTag: string;
  technologyTag: string;
  projectSizeTag: string;
}

interface FilterState {
  industry: string;
  technology: string;
  projectSize: string;
  searchQuery: string;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const allProjects: Project[] = [
  {
    id: 1,
    title: 'HealthConnect Platform',
    client: 'MediCare Solutions',
    industry: 'Healthcare',
    industryTag: 'healthcare',
    technologyTag: 'react',
    projectSizeTag: 'large',
    description: 'Comprehensive telemedicine platform connecting patients with healthcare providers through secure video consultations and digital health records.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e1de3b8-1764646515688.png",
    alt: 'Modern healthcare professional using tablet device in bright medical office with digital health interface',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    metrics: [
    { label: 'User Growth', value: '300%', icon: 'ArrowTrendingUpIcon' },
    { label: 'Consultations', value: '50K+', icon: 'UserGroupIcon' },
    { label: 'Satisfaction', value: '4.8/5', icon: 'StarIcon' },
    { label: 'Response Time', value: '< 2min', icon: 'ClockIcon' }],

    challenge: 'MediCare Solutions needed a HIPAA-compliant telemedicine platform that could handle high-volume video consultations while maintaining patient data security and providing seamless user experience across devices.',
    solution: 'We developed a scalable cloud-based platform using React and Next.js for the frontend, with Node.js microservices backend. Implemented end-to-end encryption for video calls using WebRTC, integrated with existing EHR systems, and deployed on AWS with auto-scaling capabilities.',
    results: 'The platform successfully handled over 50,000 consultations in the first six months, reduced patient wait times by 65%, and achieved a 98% uptime. Patient satisfaction scores increased to 4.8/5, and the platform expanded to serve 15 healthcare facilities.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae6e1290-1767274126755.png",
    beforeAlt: 'Traditional medical office with paper records and limited digital infrastructure',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19a863b67-1764664295014.png",
    afterAlt: 'Modern digital healthcare workspace with multiple screens showing telemedicine platform interface',
    testimonial: {
      quote: 'TechFlow Solutions transformed our healthcare delivery model. The platform they built has enabled us to reach patients in remote areas and provide quality care at scale.',
      author: 'Dr. Sarah Mitchell',
      position: 'Chief Medical Officer, MediCare Solutions'
    }
  },
  {
    id: 2,
    title: 'FinanceFlow Mobile App',
    client: 'SecureBank',
    industry: 'FinTech',
    industryTag: 'fintech',
    technologyTag: 'mobile',
    projectSizeTag: 'large',
    description: 'Next-generation mobile banking application with AI-powered financial insights, biometric authentication, and real-time transaction monitoring.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b129949e-1763293854564.png",
    alt: 'Professional woman in business attire using smartphone for mobile banking in modern office setting',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow', 'Plaid API'],
    metrics: [
    { label: 'Downloads', value: '500K+', icon: 'ArrowDownTrayIcon' },
    { label: 'Transactions', value: '$2B+', icon: 'CurrencyDollarIcon' },
    { label: 'Security Score', value: '99.9%', icon: 'ShieldCheckIcon' },
    { label: 'App Rating', value: '4.7/5', icon: 'StarIcon' }],

    challenge: 'SecureBank required a mobile banking solution that could compete with fintech startups while maintaining enterprise-grade security and compliance with financial regulations across multiple jurisdictions.',
    solution: 'Built a cross-platform mobile app using React Native with TypeScript for type safety. Integrated biometric authentication, implemented AI-powered spending insights using TensorFlow, and connected with Plaid API for account aggregation. Deployed with multi-layer security including end-to-end encryption.',
    results: 'The app achieved 500,000+ downloads within three months, processed over $2 billion in transactions, and maintained a 99.9% security score. Customer engagement increased by 250%, and the app received a 4.7/5 rating with over 50,000 reviews.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14d83edf7-1766805496244.png",
    beforeAlt: 'Traditional bank branch interior with teller counters and waiting area',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1eff135a3-1766601351747.png",
    afterAlt: 'Modern smartphone displaying sleek mobile banking app interface with financial charts',
    testimonial: {
      quote: 'The mobile app has revolutionized how our customers interact with their finances. The AI insights feature alone has driven a 40% increase in user engagement.',
      author: 'Michael Chen',
      position: 'VP of Digital Banking, SecureBank'
    }
  },
  {
    id: 3,
    title: 'ShopSmart E-Commerce',
    client: 'RetailPro Inc.',
    industry: 'E-Commerce',
    industryTag: 'ecommerce',
    technologyTag: 'react',
    projectSizeTag: 'medium',
    description: 'Omnichannel e-commerce platform with AI-powered product recommendations, real-time inventory management, and seamless checkout experience.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    alt: 'Modern e-commerce shopping interface displayed on laptop with shopping cart and product images',
    technologies: ['Next.js', 'Shopify API', 'Stripe', 'Redis', 'Elasticsearch'],
    metrics: [
    { label: 'Revenue Increase', value: '180%', icon: 'ChartBarIcon' },
    { label: 'Conversion Rate', value: '8.5%', icon: 'ArrowTrendingUpIcon' },
    { label: 'Page Load', value: '1.2s', icon: 'BoltIcon' },
    { label: 'Cart Recovery', value: '35%', icon: 'ShoppingCartIcon' }],

    challenge: 'RetailPro needed to modernize their outdated e-commerce platform to compete with major retailers, improve conversion rates, and provide personalized shopping experiences while managing inventory across multiple warehouses.',
    solution: 'Developed a headless e-commerce solution using Next.js for optimal performance, integrated Shopify for backend commerce capabilities, implemented AI-powered recommendations using collaborative filtering, and built real-time inventory sync with Redis caching.',
    results: 'The new platform increased revenue by 180% in the first year, improved conversion rates to 8.5%, reduced page load times to 1.2 seconds, and achieved 35% cart recovery rate through automated email campaigns.',
    testimonial: {
      quote: 'Our online sales have skyrocketed since launching the new platform. The personalized recommendations have been a game-changer for customer engagement.',
      author: 'Jennifer Lopez',
      position: 'E-Commerce Director, RetailPro Inc.'
    }
  },
  {
    id: 4,
    title: 'EduLearn Platform',
    client: 'Global Education Network',
    industry: 'Education',
    industryTag: 'education',
    technologyTag: 'react',
    projectSizeTag: 'medium',
    description: 'Interactive online learning platform with live classes, AI-powered adaptive learning paths, and comprehensive student progress tracking.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e56c0a8a-1766825006595.png",
    alt: 'Students using laptops and tablets in modern classroom with digital learning interface',
    technologies: ['React', 'Django', 'WebRTC', 'MongoDB', 'Docker', 'Kubernetes'],
    metrics: [
    { label: 'Students', value: '100K+', icon: 'AcademicCapIcon' },
    { label: 'Courses', value: '500+', icon: 'BookOpenIcon' },
    { label: 'Completion Rate', value: '85%', icon: 'CheckCircleIcon' },
    { label: 'Engagement', value: '92%', icon: 'HeartIcon' }],

    challenge: 'Global Education Network required a scalable online learning platform that could support live interactive classes for thousands of concurrent users while providing personalized learning experiences and detailed analytics.',
    solution: 'Built a microservices-based platform using React frontend and Django backend, implemented WebRTC for live video classes, created AI-powered adaptive learning algorithms, and deployed on Kubernetes for auto-scaling capabilities.',
    results: 'The platform successfully onboarded 100,000+ students, hosts 500+ courses, achieved 85% course completion rate, and maintains 92% student engagement. The platform scales to support 10,000 concurrent live sessions.',
    testimonial: {
      quote: 'This platform has enabled us to reach students globally while maintaining the quality of education. The adaptive learning features have significantly improved student outcomes.',
      author: 'Prof. David Williams',
      position: 'Dean of Digital Learning, Global Education Network'
    }
  },
  {
    id: 5,
    title: 'LogiTrack System',
    client: 'FastShip Logistics',
    industry: 'Logistics',
    industryTag: 'logistics',
    technologyTag: 'cloud',
    projectSizeTag: 'large',
    description: 'Real-time logistics tracking and fleet management system with route optimization, predictive maintenance, and automated dispatch.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_122053e99-1767957035038.png",
    alt: 'Warehouse manager using tablet to track shipments with delivery trucks in background',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Google Maps API', 'AWS IoT'],
    metrics: [
    { label: 'Fleet Size', value: '5K+', icon: 'TruckIcon' },
    { label: 'Cost Savings', value: '40%', icon: 'CurrencyDollarIcon' },
    { label: 'On-Time Delivery', value: '96%', icon: 'ClockIcon' },
    { label: 'Fuel Efficiency', value: '+25%', icon: 'BoltIcon' }],

    challenge: 'FastShip Logistics needed to optimize their fleet operations, reduce fuel costs, improve delivery times, and provide real-time tracking visibility to customers while managing a fleet of 5,000+ vehicles.',
    solution: 'Developed an IoT-enabled fleet management system using Angular frontend and Python backend, integrated Google Maps API for route optimization, implemented predictive maintenance using machine learning, and deployed on AWS IoT for real-time vehicle telemetry.',
    results: 'The system reduced operational costs by 40%, improved on-time delivery to 96%, increased fuel efficiency by 25%, and provided real-time tracking for all shipments. Maintenance costs decreased by 30% through predictive analytics.',
    testimonial: {
      quote: 'The LogiTrack system has transformed our operations. We have better visibility, lower costs, and happier customers. It is been a complete game-changer.',
      author: 'Robert Martinez',
      position: 'COO, FastShip Logistics'
    }
  },
  {
    id: 6,
    title: 'CryptoVault Exchange',
    client: 'BlockChain Ventures',
    industry: 'FinTech',
    industryTag: 'fintech',
    technologyTag: 'blockchain',
    projectSizeTag: 'large',
    description: 'Secure cryptocurrency exchange platform with multi-signature wallets, real-time trading, and advanced security features.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1378307c2-1767038173433.png",
    alt: 'Digital cryptocurrency trading interface with charts and blockchain network visualization',
    technologies: ['Vue.js', 'Solidity', 'Ethereum', 'Redis', 'Kubernetes', 'PostgreSQL'],
    metrics: [
    { label: 'Trading Volume', value: '$500M+', icon: 'ChartBarIcon' },
    { label: 'Users', value: '250K+', icon: 'UserGroupIcon' },
    { label: 'Security Score', value: '100%', icon: 'ShieldCheckIcon' },
    { label: 'Uptime', value: '99.99%', icon: 'ServerIcon' }],

    challenge: 'BlockChain Ventures required an enterprise-grade cryptocurrency exchange that could handle high-frequency trading while maintaining bank-level security and regulatory compliance.',
    solution: 'Built a high-performance trading platform using Vue.js frontend, implemented smart contracts with Solidity, integrated multi-signature wallets, deployed on Kubernetes for scalability, and implemented advanced security measures including cold storage and 2FA.',
    results: 'The exchange processed $500M+ in trading volume, onboarded 250,000+ users, maintained 99.99% uptime, and achieved zero security breaches. The platform supports 50+ cryptocurrencies and handles 100,000 transactions per second.',
    testimonial: {
      quote: 'TechFlow delivered a world-class exchange platform that meets the highest security standards. Their expertise in blockchain technology is unmatched.',
      author: 'Alex Thompson',
      position: 'CEO, BlockChain Ventures'
    }
  },
  {
    id: 7,
    title: 'SmartHome IoT Hub',
    client: 'HomeAutomation Pro',
    industry: 'E-Commerce',
    industryTag: 'ecommerce',
    technologyTag: 'mobile',
    projectSizeTag: 'medium',
    description: 'Unified smart home control platform integrating multiple IoT devices with voice control, automation rules, and energy monitoring.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2a0f636-1766863266664.png",
    alt: 'Modern smart home control panel on tablet showing connected devices and automation settings',
    technologies: ['React Native', 'Node.js', 'MQTT', 'InfluxDB', 'AWS Lambda'],
    metrics: [
    { label: 'Devices Connected', value: '1M+', icon: 'CpuChipIcon' },
    { label: 'Energy Saved', value: '30%', icon: 'BoltIcon' },
    { label: 'Automation Rules', value: '500K+', icon: 'Cog6ToothIcon' },
    { label: 'User Rating', value: '4.6/5', icon: 'StarIcon' }],

    challenge: 'HomeAutomation Pro needed a unified platform to control diverse IoT devices from different manufacturers while providing intelligent automation and energy optimization.',
    solution: 'Developed a cross-platform mobile app using React Native, implemented MQTT protocol for device communication, created rule-based automation engine, integrated voice assistants, and built energy monitoring dashboard with InfluxDB.',
    results: 'The platform connected 1M+ devices, helped users save 30% on energy costs, enabled 500K+ automation rules, and achieved 4.6/5 user rating. The app supports 200+ device types from 50+ manufacturers.',
    testimonial: {
      quote: 'The SmartHome Hub has made home automation accessible to everyone. Our customers love the simplicity and the energy savings are remarkable.',
      author: 'Lisa Anderson',
      position: 'Product Manager, HomeAutomation Pro'
    }
  },
  {
    id: 8,
    title: 'HealthTrack Wearable',
    client: 'FitLife Technologies',
    industry: 'Healthcare',
    industryTag: 'healthcare',
    technologyTag: 'mobile',
    projectSizeTag: 'medium',
    description: 'Advanced health monitoring wearable with AI-powered health insights, real-time vitals tracking, and emergency alert system.',
    image: "https://images.unsplash.com/photo-1548098525-6ee0e4f51eb4",
    alt: 'Athletic person wearing fitness tracker smartwatch checking health metrics during outdoor exercise',
    technologies: ['Flutter', 'Python', 'TensorFlow', 'Firebase', 'HealthKit', 'Google Fit'],
    metrics: [
    { label: 'Active Users', value: '300K+', icon: 'UserGroupIcon' },
    { label: 'Health Alerts', value: '50K+', icon: 'BellAlertIcon' },
    { label: 'Accuracy', value: '98%', icon: 'CheckBadgeIcon' },
    { label: 'Battery Life', value: '7 days', icon: 'BoltIcon' }],

    challenge: 'FitLife Technologies needed to develop a medical-grade wearable device with companion app that could accurately monitor multiple health metrics and provide actionable insights.',
    solution: 'Built a Flutter-based mobile app with real-time sync, implemented ML models for health pattern recognition, integrated with HealthKit and Google Fit, created emergency alert system, and optimized for battery efficiency.',
    results: 'The wearable gained 300,000+ active users, sent 50,000+ health alerts that led to early medical interventions, achieved 98% accuracy in health metrics, and delivers 7-day battery life.',
    testimonial: {
      quote: 'The HealthTrack wearable has saved lives. The early warning system has helped countless users seek timely medical attention.',
      author: 'Dr. Emily Roberts',
      position: 'Chief Health Officer, FitLife Technologies'
    }
  }];


  useEffect(() => {
    if (isHydrated) {
      setFilteredProjects(allProjects);
    }
  }, [isHydrated]);

  const handleFilterChange = (filters: FilterState) => {
    if (!isHydrated) return;

    let filtered = allProjects;

    if (filters.industry !== 'all') {
      filtered = filtered.filter((p) => p.industryTag === filters.industry);
    }

    if (filters.technology !== 'all') {
      filtered = filtered.filter((p) => p.technologyTag === filters.technology);
    }

    if (filters.projectSize !== 'all') {
      filtered = filtered.filter((p) => p.projectSizeTag === filters.projectSize);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
  };

  const handleViewDetails = (project: Project) => {
    if (!isHydrated) return;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setSelectedProject(null);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-lg" />
            <div className="h-96 bg-muted rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <StatsSection />
        <PortfolioFilters onFilterChange={handleFilterChange} />

        <div className="mb-6">
          <p className="text-textSecondary">
            Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of{' '}
            <span className="font-semibold">{allProjects.length}</span> projects
          </p>
        </div>

        {filteredProjects.length === 0 ?
        <div className="text-center py-16">
            <div className="inline-block p-8 bg-muted rounded-full mb-4">
              <Icon name="FolderOpenIcon" size={64} className="text-textSecondary" />
            </div>
            <h3 className="text-2xl font-bold text-textPrimary mb-2">No Projects Found</h3>
            <p className="text-textSecondary">
              Try adjusting your filters or search query to find what you are looking for.
            </p>
          </div> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={handleViewDetails} />

          )}
          </div>
        }

        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      </div>
    </div>);

};

export default PortfolioInteractive;