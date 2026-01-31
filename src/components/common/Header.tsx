'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  const moreItems = [
    { label: 'Resources', href: '/resources' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/homepage" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 4V36M4 12L36 28M36 12L4 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-semibold text-textPrimary">TechFlow Solutions</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-textSecondary hover:text-primary hover:bg-muted rounded-md transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative group">
              <button className="px-4 py-2 text-textSecondary hover:text-primary hover:bg-muted rounded-md transition-all duration-200 font-medium flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDownIcon" size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-card shadow-prominent rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-textSecondary hover:text-primary hover:bg-muted transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-success text-success-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              Start Your Transformation
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-textSecondary hover:text-primary transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-textSecondary hover:text-primary hover:bg-muted rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-border">
              <p className="px-4 py-2 text-xs font-semibold text-textSecondary uppercase tracking-wider">More</p>
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-textSecondary hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-success text-success-foreground text-center rounded-lg font-semibold hover:shadow-hover transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Transformation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;