import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=600" 
                alt="Medical Institute Building" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
                alt="Faculty Teaching" 
                className="rounded-lg shadow-md w-full h-64 object-cover mt-8"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-6 rounded-full shadow-xl border-4 border-white text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-xs font-medium">Years of Excellence</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-accent"></div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">About The Institute</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Empowering Future Nursing Officers with <span className="text-secondary">Quality Education</span>
            </h2>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Genomic Medical & Nursing Academy is Jaipur's premier institute dedicated to preparing students for competitive nursing examinations. We bridge the gap between academic knowledge and competitive exam requirements through our structured pedagogy.
            </p>
            
            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether you are aiming for AIIMS NORCET, RRB, or State Nursing exams, our expert faculty ensures you get the best guidance, study material, and disciplined environment to succeed.
            </p>

            <div className="space-y-4">
              {[
                "Experienced & Dedicated Faculty Team",
                "Comprehensive Study Material (Hindi & English)",
                "Regular Offline & Online Test Series",
                "Special Doubt Clearing Sessions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
