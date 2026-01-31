'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface NeedsAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const NeedsAssessment: React.FC<NeedsAssessmentProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: 'What is your primary business goal?',
      options: [
        'Increase online presence',
        'Improve operational efficiency',
        'Launch new product/service',
        'Scale existing operations'
      ]
    },
    {
      id: 2,
      question: 'What is your current technical infrastructure?',
      options: [
        'Legacy systems needing modernization',
        'Modern but needs optimization',
        'Starting from scratch',
        'Hybrid environment'
      ]
    },
    {
      id: 3,
      question: 'What is your team\'s technical expertise level?',
      options: [
        'Limited technical knowledge',
        'Some technical staff',
        'Strong technical team',
        'Need full technical partnership'
      ]
    },
    {
      id: 4,
      question: 'What is your biggest challenge right now?',
      options: [
        'Outdated technology',
        'Lack of scalability',
        'Security concerns',
        'Integration issues'
      ]
    },
    {
      id: 5,
      question: 'What is your expected ROI timeline?',
      options: [
        'Immediate (0-3 months)',
        'Short-term (3-6 months)',
        'Medium-term (6-12 months)',
        'Long-term (12+ months)'
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendation = () => {
    return {
      title: 'Recommended Solution: Digital Transformation Package',
      description: 'Based on your responses, we recommend a comprehensive digital transformation approach that includes modernizing your infrastructure, implementing scalable solutions, and providing ongoing technical partnership.',
      services: [
        'Cloud Migration & DevOps',
        'Custom Application Development',
        'Security & Compliance',
        'Technical Consulting'
      ],
      estimatedTimeline: '4-6 months',
      estimatedBudget: '$50,000 - $100,000'
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card rounded-2xl shadow-prominent max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-textPrimary">Needs Assessment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            aria-label="Close needs assessment"
          >
            <Icon name="XMarkIcon" size={24} className="text-textSecondary" />
          </button>
        </div>

        <div className="p-6">
          {!showResults ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-textSecondary">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex space-x-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-2 rounded-full transition-all duration-300 ${
                        index <= currentQuestion ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-textPrimary mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 border-2 border-border rounded-lg text-left hover:border-primary hover:bg-primary/5 transition-all duration-200 text-textPrimary font-medium"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  className="flex items-center space-x-2 text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  <Icon name="ArrowLeftIcon" size={16} />
                  <span>Previous Question</span>
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircleIcon" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-textPrimary mb-2">
                      {getRecommendation().title}
                    </h3>
                    <p className="text-textSecondary mb-4">
                      {getRecommendation().description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-textSecondary mb-1">Estimated Timeline</p>
                  <p className="text-lg font-semibold text-textPrimary">
                    {getRecommendation().estimatedTimeline}
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-textSecondary mb-1">Estimated Budget</p>
                  <p className="text-lg font-semibold text-textPrimary">
                    {getRecommendation().estimatedBudget}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-textPrimary mb-3">Recommended Services</h4>
                <div className="space-y-2">
                  {getRecommendation().services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckIcon" size={20} className="text-success" />
                      <span className="text-textPrimary">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 border border-border rounded-lg font-semibold text-textSecondary hover:bg-muted transition-all duration-200"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeedsAssessment;