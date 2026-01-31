import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  category: string;
}

interface TrustBadgesProps {
  className?: string;
}

const TrustBadges = ({ className = '' }: TrustBadgesProps) => {
  const partners: Partner[] = [
    { id: 1, name: "AWS Partner", category: "Cloud Infrastructure" },
    { id: 2, name: "Google Cloud", category: "Cloud Services" },
    { id: 3, name: "Microsoft Azure", category: "Enterprise Solutions" },
    { id: 4, name: "ISO 27001", category: "Security Certified" },
    { id: 5, name: "SOC 2 Type II", category: "Compliance" },
    { id: 6, name: "GDPR Compliant", category: "Data Protection" }
  ];

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-textPrimary mb-3">
            Trusted by Industry Leaders
          </h3>
          <p className="text-textSecondary">
            Certified partners and compliance standards you can rely on
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-prominent transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
                </div>
              </div>
              <div className="font-semibold text-sm text-textPrimary mb-1">
                {partner.name}
              </div>
              <div className="text-xs text-textSecondary">
                {partner.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;