import React from 'react';
import { COURSES } from '../../constants';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Our Programs</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Targeted Courses for Success</h2>
          <p className="text-text-secondary">
            Choose the right program to accelerate your nursing career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group flex flex-col h-full relative">
              {course.popular && (
                <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                  POPULAR
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                {/* Header with Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <course.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
                
                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-6"></div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8 flex-1">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                  <Button variant="primary" className="w-full justify-between shadow-md group-hover:shadow-lg group-hover:bg-primary-dark transition-all">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
