import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - TechFlow Solutions',
  description: 'Explore our comprehensive technology services including website development, mobile apps, DevOps solutions, and emerging technologies. Partner with us for your digital transformation journey.'
};

export default function ServicesPage() {
  const heroData = {
    title: "Technology Solutions That Drive Results",
    subtitle: "Our Services",
    description: "From concept to deployment, we deliver cutting-edge technology solutions tailored to your business needs. Our comprehensive service portfolio combines innovation, reliability, and proven methodologies to ensure your success."
  };

  const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom web applications built with modern frameworks and best practices. We create responsive, scalable, and high-performance websites that deliver exceptional user experiences.",
    icon: "GlobeAltIcon",
    image: "https://images.unsplash.com/photo-1702287527299-2af3ca95b1f7",
    alt: "Modern laptop displaying colorful website code on dark screen with coffee cup beside it",
    features: [
    "Responsive design across all devices",
    "SEO optimization and performance tuning",
    "Custom CMS integration",
    "E-commerce solutions",
    "Progressive Web Apps (PWA)"],

    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    caseStudyCount: 45
  },
  {
    id: 2,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that engage users and drive business growth. We build intuitive, feature-rich applications for iOS and Android platforms.",
    icon: "DevicePhoneMobileIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b76b9347-1767892999669.png",
    alt: "Hands holding smartphone displaying modern mobile app interface with colorful UI elements",
    features: [
    "Native iOS and Android development",
    "Cross-platform solutions with React Native",
    "Offline functionality and data sync",
    "Push notifications and real-time updates",
    "App Store optimization"],

    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"],
    caseStudyCount: 32
  },
  {
    id: 3,
    title: "DevOps Solutions",
    description: "Streamline your development pipeline with automated CI/CD, infrastructure as code, and cloud optimization. We help teams deliver faster and more reliably.",
    icon: "CommandLineIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11274b2b3-1768293296896.png",
    alt: "Server room with glowing blue network cables and monitoring screens showing system metrics",
    features: [
    "CI/CD pipeline automation",
    "Infrastructure as Code (IaC)",
    "Container orchestration with Kubernetes",
    "Cloud migration and optimization",
    "Monitoring and alerting systems"],

    technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    caseStudyCount: 28
  },
  {
    id: 4,
    title: "Cloud Services",
    description: "Leverage the power of cloud computing with scalable, secure, and cost-effective solutions. We design and implement cloud architectures that grow with your business.",
    icon: "CloudIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_128abc72d-1767860465521.png",
    alt: "Abstract cloud computing visualization with interconnected nodes and data streams in blue tones",
    features: [
    "Multi-cloud architecture design",
    "Serverless application development",
    "Cloud security and compliance",
    "Cost optimization strategies",
    "Disaster recovery planning"],

    technologies: ["AWS", "Azure", "Google Cloud", "Lambda", "CloudFormation"],
    caseStudyCount: 38
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that learn and adapt.",
    icon: "CpuChipIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113c8f6f0-1764648553585.png",
    alt: "Futuristic AI neural network visualization with glowing nodes and connections on dark background",
    features: [
    "Custom ML model development",
    "Natural Language Processing (NLP)",
    "Computer vision solutions",
    "Predictive analytics",
    "AI-powered chatbots"],

    technologies: ["TensorFlow", "PyTorch", "Python", "Scikit-learn", "OpenAI"],
    caseStudyCount: 18
  },
  {
    id: 6,
    title: "Blockchain Solutions",
    description: "Build secure, transparent, and decentralized applications with blockchain technology. From smart contracts to DeFi platforms, we deliver innovative solutions.",
    icon: "CubeTransparentIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4fd9e83-1765179231133.png",
    alt: "Golden cryptocurrency coins with blockchain network visualization and digital circuit patterns",
    features: [
    "Smart contract development",
    "DApp creation and deployment",
    "NFT marketplace development",
    "Cryptocurrency integration",
    "Blockchain consulting"],

    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"],
    caseStudyCount: 12
  }];


  const processSteps = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Discovery & Planning",
    description: "We begin by understanding your business goals, target audience, and technical requirements. Through collaborative workshops and detailed analysis, we create a comprehensive project roadmap.",
    icon: "MagnifyingGlassIcon",
    duration: "1-2 weeks"
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Design & Architecture",
    description: "Our design team creates intuitive user interfaces while our architects plan scalable system designs. We ensure every decision aligns with your business objectives and user needs.",
    icon: "PencilSquareIcon",
    duration: "2-3 weeks"
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Development & Integration",
    description: "Using agile methodologies, we build your solution with clean, maintainable code. Regular sprints and demos keep you informed and involved throughout the development process.",
    icon: "CodeBracketIcon",
    duration: "4-12 weeks"
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution works flawlessly across all scenarios. We conduct functional, performance, security, and user acceptance testing before launch.",
    icon: "CheckBadgeIcon",
    duration: "1-2 weeks"
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Deployment & Launch",
    description: "We handle the entire deployment process, from server configuration to production release. Our team ensures a smooth launch with minimal downtime and maximum reliability.",
    icon: "RocketLaunchIcon",
    duration: "1 week"
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Support & Optimization",
    description: "Post-launch, we provide ongoing support, monitoring, and optimization. We continuously improve your solution based on user feedback and performance metrics.",
    icon: "WrenchScrewdriverIcon",
    duration: "Ongoing"
  }];


  const technologies = [
  { name: "React", category: "Frontend", proficiency: 95 },
  { name: "Next.js", category: "Frontend", proficiency: 92 },
  { name: "TypeScript", category: "Frontend", proficiency: 90 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 93 },
  { name: "Node.js", category: "Backend", proficiency: 88 },
  { name: "Python", category: "Backend", proficiency: 85 },
  { name: "PostgreSQL", category: "Database", proficiency: 87 },
  { name: "MongoDB", category: "Database", proficiency: 84 },
  { name: "AWS", category: "Cloud", proficiency: 91 },
  { name: "Docker", category: "DevOps", proficiency: 89 },
  { name: "Kubernetes", category: "DevOps", proficiency: 86 },
  { name: "TensorFlow", category: "AI/ML", proficiency: 82 }];


  const comparisonFeatures = [
  { feature: "Custom Design", basic: true, professional: true, enterprise: true },
  { feature: "Responsive Layout", basic: true, professional: true, enterprise: true },
  { feature: "SEO Optimization", basic: true, professional: true, enterprise: true },
  { feature: "Content Management System", basic: false, professional: true, enterprise: true },
  { feature: "E-commerce Integration", basic: false, professional: true, enterprise: true },
  { feature: "Advanced Analytics", basic: false, professional: true, enterprise: true },
  { feature: "Multi-language Support", basic: false, professional: false, enterprise: true },
  { feature: "Custom API Development", basic: false, professional: false, enterprise: true },
  { feature: "24/7 Priority Support", basic: false, professional: false, enterprise: true },
  { feature: "Dedicated Account Manager", basic: false, professional: false, enterprise: true },
  { feature: "Performance Optimization", basic: false, professional: true, enterprise: true },
  { feature: "Security Audit", basic: false, professional: true, enterprise: true }];


  const calculatorData = {
    projectTypes: [
    { id: "website", label: "Website Development", basePrice: 15000 },
    { id: "mobile", label: "Mobile Application", basePrice: 25000 },
    { id: "webapp", label: "Web Application", basePrice: 35000 },
    { id: "ecommerce", label: "E-commerce Platform", basePrice: 45000 }],

    complexityLevels: [
    { id: "simple", label: "Simple", basePrice: 0 },
    { id: "moderate", label: "Moderate", basePrice: 10000 },
    { id: "complex", label: "Complex", basePrice: 25000 }],

    timelineOptions: [
    { id: "standard", label: "Standard (3-6 months)", basePrice: 0 },
    { id: "expedited", label: "Expedited (1-3 months)", basePrice: 15000 },
    { id: "rush", label: "Rush (&lt; 1 month)", basePrice: 30000 }]

  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ServicesInteractive
          heroData={heroData}
          services={services}
          processSteps={processSteps}
          technologies={technologies}
          comparisonFeatures={comparisonFeatures}
          calculatorData={calculatorData} />

      </div>
    </main>);

}