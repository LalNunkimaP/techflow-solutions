import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfolio - TechFlow Solutions',
  description: 'Explore our portfolio of successful digital transformation projects across healthcare, fintech, e-commerce, education, and logistics industries with measurable results and client testimonials.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Discover how we have helped businesses transform digitally with innovative technology solutions that deliver measurable results
            </p>
          </div>
        </div>
      </section>

      <PortfolioInteractive />

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar success. Our team of experts is ready to transform your vision into reality.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-success text-success-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            Start Your Transformation
          </a>
        </div>
      </section>
    </main>
  );
}