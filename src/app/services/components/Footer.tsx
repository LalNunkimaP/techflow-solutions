'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    services: [
      { label: 'Website Development', href: '/services' },
      { label: 'Mobile Apps', href: '/services' },
      { label: 'DevOps Solutions', href: '/services' },
      { label: 'Cloud Services', href: '/services' },
    ],
    company: [
      { label: 'About Us', href: '/homepage' },
      { label: 'Our Team', href: '/homepage' },
      { label: 'Careers', href: '/homepage' },
      { label: 'Partners', href: '/homepage' },
    ],
    resources: [
      { label: 'Blog', href: '/resources' },
      { label: 'Case Studies', href: '/portfolio' },
      { label: 'Whitepapers', href: '/resources' },
      { label: 'Documentation', href: '/resources' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help Center', href: '/contact' },
      { label: 'Privacy Policy', href: '/homepage' },
      { label: 'Terms of Service', href: '/homepage' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'ShareIcon', href: '#' },
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' },
    { name: 'Facebook', icon: 'UserGroupIcon', href: '#' },
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-trust-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="h-64 bg-slate-800 rounded-xl animate-pulse"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-trust-navy text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent"
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
              <span className="text-xl font-semibold">TechFlow</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner in digital transformation and technology innovation.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} TechFlow Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/homepage" className="text-sm text-gray-400 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/homepage" className="text-sm text-gray-400 hover:text-accent transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/homepage" className="text-sm text-gray-400 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;