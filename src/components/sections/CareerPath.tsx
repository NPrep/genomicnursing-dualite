import React from 'react';
import { GraduationCap, Stethoscope, Building2, TrendingUp, ArrowRight, Dna } from 'lucide-react';

export const CareerPath = () => {
  const steps = [
    {
      icon: GraduationCap,
      title: 'B.Sc / GNM',
      desc: 'Nursing foundation',
      timeframe: 'Approx. 4 years',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Stethoscope,
      title: 'Entrance Exam',
      desc: 'NORCET / RRB / CHO',
      timeframe: '3-6 months prep',
      color: 'bg-yellow-100 text-yellow-700',
      highlight: true,
    },
    {
      icon: Building2,
      title: 'Nursing Officer',
      desc: 'Govt. hospital role',
      timeframe: 'Probation: 1 year',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: TrendingUp,
      title: 'Senior Officer',
      desc: 'ANS / DNS / Matron',
      timeframe: 'Role growth by performance',
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Career Roadmap</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Your Path to Nursing Officer Success</h2>
          <p className="text-text-secondary">
            A clear progression from nursing graduation to long-term government sector advancement.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-1 bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-sm border-4 border-white transition-transform duration-300 group-hover:scale-110 ${step.color} ${step.highlight ? 'ring-4 ring-accent/30' : ''}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary mb-2">{step.desc}</p>
                <p className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">{step.timeframe}</p>

                {index < steps.length - 1 && <ArrowRight className="w-6 h-6 text-gray-300 mt-4 md:hidden rotate-90" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Beyond Exams — The Future of Nursing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Competitive exams test clinical fundamentals, but future-ready nurses also understand emerging care models.
                Genomic nursing awareness can improve case interpretation in pharmacogenomics, hereditary disease risk,
                and family counselling contexts.
              </p>
              <p className="text-text-secondary leading-relaxed">
                In our mentoring sessions, we use simple examples to connect modern genomic concepts with real clinical
                scenario thinking so students build stronger reasoning for NORCET-style questions.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Dna className="w-5 h-5" />
                Clinical Scenario Relevance
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Drug-response variability in pharmacogenomics-based questions
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Identifying red flags for inherited disorders in case stems
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Family-history interpretation and patient education communication
                </li>
                <li className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Building evidence-based clinical reasoning beyond rote memorization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
