import React from 'react';
import { COURSES } from '../../constants';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, MonitorPlay } from 'lucide-react';

export const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Academic Programs</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Structured Learning Modules</h2>
          <p className="text-text-secondary">Online and offline pathways designed for nursing exam success.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border group flex flex-col h-full relative">
              {course.popular && (
                <div className="absolute top-4 right-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm border border-gray-100">
                  FEATURED
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm border border-gray-100">
                    <course.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{course.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{course.description}</p>
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 mb-6 text-xs text-primary font-medium flex items-center gap-2">
                  <MonitorPlay className="w-4 h-4" />
                  <span>Online course via NPrep platform</span>
                  <span className="ml-auto inline-flex items-center justify-center rounded-md bg-primary text-white px-2 py-0.5 text-[10px] font-bold tracking-wide">NPrep</span>
                </div>

                <div className="h-px w-full bg-gray-200 mb-6"></div>

                <div className="space-y-4 mb-8 flex-1">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href={course.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                  <Button variant="outline" className="w-full justify-between hover:bg-primary hover:text-white transition-all bg-white">
                    View Course Details
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
