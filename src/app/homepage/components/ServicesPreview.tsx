import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const services: Service[] = [
    {
      id: 1,
      title: "Website Development",
      description: "Custom web solutions that drive engagement and deliver measurable business results through modern technologies and user-centric design.",
      icon: "GlobeAltIcon",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security First"],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that provide seamless user experiences and scale with your business growth.",
      icon: "DevicePhoneMobileIcon",
      features: ["iOS & Android", "Cross-Platform", "Cloud Integration", "Push Notifications"],
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "DevOps Solutions",
      description: "Streamlined deployment pipelines and infrastructure automation that accelerate delivery and ensure reliability.",
      icon: "CloudIcon",
      features: ["CI/CD Pipelines", "Cloud Migration", "Monitoring", "Auto Scaling"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage data to automate processes, predict outcomes, and unlock new business opportunities.",
      icon: "CpuChipIcon",
      features: ["Predictive Analytics", "Natural Language", "Computer Vision", "Automation"],
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed">
            From concept to deployment, we deliver end-to-end solutions that transform your digital presence and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-prominent transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-textPrimary mb-4 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-textSecondary mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-textSecondary">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-200"
              >
                Learn More
                <Icon name="ArrowRightIcon" size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-1"
          >
            Explore All Services
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;