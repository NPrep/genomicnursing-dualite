import React from 'react';
import { MOCK_TESTS } from '../constants';
import { Button } from '../components/ui/Button';
import { Timer, ExternalLink } from 'lucide-react';

export const MockTests = () => {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Exam Simulation</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Full Length Mock Tests</h1>
          <p className="text-text-secondary">
            Experience the real exam environment with our comprehensive mock tests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MOCK_TESTS.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all flex flex-col items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg text-danger">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary leading-tight">
                {item.title}
              </h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <Button variant="outline" size="sm" className="w-full justify-between hover:bg-danger hover:text-white hover:border-danger">
                  Take Mock
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
