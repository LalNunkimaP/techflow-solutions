import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import SuccessMetrics from './components/SuccessMetrics';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';

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