import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
}

const OfficeLocations: React.FC = () => {
  const offices: Office[] = [
    {
      id: 1,
      city: 'San Francisco',
      address: '123 Tech Boulevard, Suite 500\nSan Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@techflow.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 2,
      city: 'New York',
      address: '456 Innovation Avenue, Floor 12\nNew York, NY 10001',
      phone: '+1 (212) 555-0456',
      email: 'ny@techflow.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      lat: 40.7128,
      lng: -74.0060
    },
    {
      id: 3,
      city: 'Austin',
      address: '789 Digital Drive, Building C\nAustin, TX 78701',
      phone: '+1 (512) 555-0789',
      email: 'austin@techflow.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM CST',
      lat: 30.2672,
      lng: -97.7431
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Our Office Locations
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Visit us at any of our offices or schedule a virtual meeting. We&apos;re here to help wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-prominent transition-all duration-300">
              <div className="h-48 overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                  className="border-0"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-textPrimary">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPinIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-textSecondary text-sm whitespace-pre-line">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-textSecondary text-sm hover:text-primary transition-colors duration-200">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-textSecondary text-sm hover:text-primary transition-colors duration-200">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="ClockIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-textSecondary text-sm">{office.hours}</p>
                  </div>
                </div>
                <button className="w-full mt-4 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;