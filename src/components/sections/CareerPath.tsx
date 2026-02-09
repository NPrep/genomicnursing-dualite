import React from 'react';
import { GraduationCap, Stethoscope, Building2, TrendingUp, ArrowRight } from 'lucide-react';

export const CareerPath = () => {
  const steps = [
    {
      icon: GraduationCap,
      title: "B.Sc / GNM",
      desc: "Nursing Foundation",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Entrance Exam",
      desc: "NORCET / RRB / CHO",
      color: "bg-yellow-100 text-yellow-700",
      highlight: true
    },
    {
      icon: Building2,
      title: "Nursing Officer",
      desc: "Govt. Hospital Role",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: TrendingUp,
      title: "Senior Officer",
      desc: "ANS / DNS / Matron",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Career Roadmap</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Your Path to Success</h2>
          <p className="text-text-secondary">
            Understanding the professional journey from a nursing graduate to a senior administrative role in the government sector.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white transition-transform duration-300 group-hover:scale-110 ${step.color} ${step.highlight ? 'ring-4 ring-accent/30' : ''}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-300 mt-4 md:hidden rotate-90" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Informational Content */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Role of Genomic Nursing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Modern nursing is evolving. Beyond traditional care, understanding the genetic basis of diseases is becoming crucial in personalized medicine. 
              </p>
              <p className="text-text-secondary leading-relaxed">
                At Genomic Medical Academy, we not only prepare you for exams but also instill a scientific temperament required for modern healthcare challenges. Our curriculum bridges the gap between theoretical knowledge and clinical application.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h4 className="font-bold text-primary mb-4">Why Government Sector?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Job Security & Pension Benefits
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Structured Career Progression
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Opportunity to Serve in Premier Institutes (AIIMS)
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Work-Life Balance with Fixed Shifts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
