'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
}

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "InnovateTech Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    alt: "Professional woman with shoulder-length brown hair wearing navy blazer smiling confidently in modern office setting",
    content: "TechFlow Solutions transformed our entire digital infrastructure. Their expertise in DevOps and cloud migration reduced our deployment time by 70% while significantly improving system reliability. The team's proactive approach and deep technical knowledge made them true partners in our success.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Engineering",
    company: "DataStream Analytics",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6a64874-1763301755177.png",
    alt: "Asian man in his thirties wearing glasses and gray suit jacket with confident smile in corporate office environment",
    content: "Working with TechFlow was a game-changer for our mobile app development. They delivered a cross-platform solution that exceeded our expectations in both performance and user experience. Their attention to detail and commitment to quality is unmatched in the industry.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of Digital Strategy",
    company: "GlobalRetail Group",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d4825d1-1763293841178.png",
    alt: "Hispanic woman with long dark hair in professional burgundy blazer smiling warmly in bright modern workspace",
    content: "The AI-powered recommendation engine TechFlow built for us increased our conversion rates by 45%. Their ability to understand our business needs and translate them into technical solutions was impressive. They're not just developers—they're strategic technology partners.",
    rating: 5
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-textSecondary leading-relaxed">
              Hear from the leaders who trust us with their digital transformation
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-brand-purple/5 rounded-3xl p-8 lg:p-12 shadow-prominent border border-border">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-soft border-4 border-white">
                    <div className="w-full h-full bg-muted"></div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[1, 2, 3, 4, 5].map((star) =>
                    <Icon key={star} name="StarIcon" size={24} variant="solid" className="text-amber-400" />
                    )}
                  </div>
                  
                  <p className="text-xl text-textPrimary leading-relaxed mb-6 italic">
                    Loading testimonial...
                  </p>
                  
                  <div className="space-y-1">
                    <div className="font-semibold text-lg text-textPrimary">Loading...</div>
                    <div className="text-textSecondary">Loading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed">
            Hear from the leaders who trust us with their digital transformation
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-gradient-to-br from-primary/5 to-brand-purple/5 rounded-3xl p-8 lg:p-12 shadow-prominent border border-border">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-soft border-4 border-white">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, index) =>
                  <Icon key={index} name="StarIcon" size={24} variant="solid" className="text-amber-400" />
                  )}
                </div>
                
                <p className="text-xl text-textPrimary leading-relaxed mb-6 italic">
                  &quot;{currentTestimonial.content}&quot;
                </p>
                
                <div className="space-y-1">
                  <div className="font-semibold text-lg text-textPrimary">{currentTestimonial.name}</div>
                  <div className="text-textSecondary">{currentTestimonial.role}, {currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-hover transition-all duration-200 hover:-translate-y-1"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeftIcon" size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted hover:bg-secondary'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>
            
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-hover transition-all duration-200 hover:-translate-y-1"
              aria-label="Next testimonial">

              <Icon name="ChevronRightIcon" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;