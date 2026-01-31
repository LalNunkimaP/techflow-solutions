import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-trust-navy to-brand-purple ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transform Your Digital Future
              </h1>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed">
                Strategic technology partners who architect innovative solutions for lasting business impact
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold text-lg hover:shadow-hover transition-all duration-200 hover:-translate-y-1 text-center">

                Start Your Transformation
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 text-center">

                View Our Work
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-slate-300 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-sm text-slate-300 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">15+</div>
                <div className="text-sm text-slate-300 mt-1">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-prominent">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1b9a60cec-1767962172889.png"
                alt="Modern office workspace with diverse team collaborating on digital transformation project using laptops and large display screens"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-prominent max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-textPrimary">Trusted Partner</div>
                  <div className="text-sm text-textSecondary">Fortune 500 Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;