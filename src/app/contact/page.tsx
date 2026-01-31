import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInteractive from './components/ContactInteractive';
import QuickContactForm from './components/QuickContactForm';
import OfficeLocations from './components/OfficeLocations';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Us - TechFlow Solutions',
  description: 'Get in touch with TechFlow Solutions for your digital transformation needs. Schedule a free consultation, use our needs assessment tool, or contact us directly via phone, email, or live chat.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <ContactHero />
        <ContactInteractive />
        <QuickContactForm />
        <OfficeLocations />
        <FAQSection />
      </div>

      <footer className="bg-trust-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechFlow Solutions</h3>
              <p className="text-white/80 text-sm">
                Your trusted partner in digital transformation. Building innovative solutions that drive business success.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/80 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="/portfolio" className="text-white/80 hover:text-white transition-colors duration-200">Portfolio</a></li>
                <li><a href="/resources" className="text-white/80 hover:text-white transition-colors duration-200">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Email: contact@techflow.com</li>
                <li>Phone: +1 (415) 555-0123</li>
                <li>Hours: Mon-Fri, 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} TechFlow Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}