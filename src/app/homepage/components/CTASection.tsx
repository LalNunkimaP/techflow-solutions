import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-primary via-trust-navy to-brand-purple ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-200 leading-relaxed mb-12">
            Let&apos;s discuss how our technology solutions can drive your digital transformation and deliver measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="px-10 py-5 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-1 inline-flex items-center"
            >
              Schedule Free Consultation
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </a>
            <a
              href="/portfolio"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 inline-flex items-center"
            >
              View Case Studies
              <Icon name="DocumentTextIcon" size={20} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <Icon name="ClockIcon" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-slate-300 text-sm">We respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No Commitment</h3>
              <p className="text-slate-300 text-sm">Free consultation with no obligations</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <Icon name="UserGroupIcon" size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-slate-300 text-sm">Direct access to senior technology consultants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;