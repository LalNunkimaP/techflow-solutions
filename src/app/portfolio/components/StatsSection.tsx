import Icon from '@/components/ui/AppIcon';

interface Stat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

const StatsSection = () => {
  const stats: Stat[] = [
    {
      icon: 'CheckBadgeIcon',
      value: '150+',
      label: 'Projects Completed',
      description: 'Successful deliveries across industries'
    },
    {
      icon: 'UserGroupIcon',
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys'
    },
    {
      icon: 'ChartBarIcon',
      value: '$50M+',
      label: 'Revenue Generated',
      description: 'For our clients through our solutions'
    },
    {
      icon: 'ClockIcon',
      value: '24/7',
      label: 'Support Available',
      description: 'Dedicated team for ongoing projects'
    }
  ];

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Track Record</h2>
        <p className="text-primary-foreground/80">
          Numbers that speak to our commitment and expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Icon name={stat.icon as any} size={32} className="text-primary-foreground" />
              </div>
            </div>
            <p className="text-4xl font-bold mb-1">{stat.value}</p>
            <p className="text-lg font-semibold mb-1">{stat.label}</p>
            <p className="text-sm text-primary-foreground/70">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;