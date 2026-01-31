import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary via-brand-purple to-trust-navy text-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Build Your Digital Future Together
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re ready to start a project or just exploring possibilities, we&apos;re here to help. Choose the way that works best for you to connect with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm text-white/80 mb-1">Response Time</p>
              <p className="text-2xl font-bold">&lt; 2 Hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm text-white/80 mb-1">Consultation</p>
              <p className="text-2xl font-bold">Free</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-sm text-white/80 mb-1">Success Rate</p>
              <p className="text-2xl font-bold">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;