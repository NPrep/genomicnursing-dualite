import React from 'react';
import { SUBJECT_TESTS } from '../constants';
import { Button } from '../components/ui/Button';
import { BookOpenCheck, ExternalLink } from 'lucide-react';

export const SubjectTests = () => {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Topic Wise Practice</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Subject Wise Tests</h1>
          <p className="text-text-secondary">
            Strengthen your core concepts with subject-specific test series.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SUBJECT_TESTS.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all flex flex-col items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-lg text-accent-hover">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary leading-tight">
                {item.title}
              </h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <Button variant="outline" size="sm" className="w-full justify-between hover:bg-accent hover:text-primary hover:border-accent">
                  Start Test
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
