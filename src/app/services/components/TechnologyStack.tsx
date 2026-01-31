'use client';

import React, { useState, useEffect } from 'react';


interface Technology {
  name: string;
  category: string;
  proficiency: number;
}

interface TechnologyStackProps {
  technologies: Technology[];
}

const TechnologyStack = ({ technologies }: TechnologyStackProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="h-64 bg-muted rounded-xl animate-pulse"></div>
        </div>
      </section>
    );
  }

  const categories = ['All', ...Array.from(new Set(technologies.map(t => t.category)))];
  const filteredTechnologies = selectedCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Technology Stack
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-card text-textSecondary hover:bg-muted border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-prominent transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-textPrimary">{tech.name}</h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-textSecondary">Proficiency</span>
                  <span className="font-semibold text-textPrimary">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-brand-purple h-full rounded-full transition-all duration-1000"
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;