import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './homepage/components/HeroSection';
import ServicesPreview from './homepage/components/ServicesPreview';
import SuccessMetrics from './homepage/components/SuccessMetrics';
import TestimonialCarousel from './homepage/components/TestimonialCarousel';
import CTASection from './homepage/components/CTASection';
import TrustBadges from './homepage/components/TrustBadges';
import Footer from './homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - TechFlow Solutions',
  description: 'Strategic technology partners who architect innovative solutions for lasting business impact. Transform your digital future with our comprehensive technology services including website development, mobile applications, DevOps solutions, and AI & machine learning.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <ServicesPreview />
        <SuccessMetrics />
        <TestimonialCarousel />
        <TrustBadges />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}