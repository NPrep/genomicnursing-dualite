import React from 'react';
import { Target, TrendingUp, Clock, ShieldCheck, Award, Users, BookCheck } from 'lucide-react';

export const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Educational Content */}
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Expert Guidance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Why Nursing Exams Require Coaching
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              With over 1 lakh applicants competing for limited seats in AIIMS and RRB, self-study often falls short. Here is why structured coaching is the game changer:
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0 text-danger">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Rising Competition</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Cutoffs are increasing every year. You need to score in the top 95th percentile to secure a rank in your desired AIIMS.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-secondary">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Vast Syllabus Coverage</h3>
                  <p className="text-text-secondary leading-relaxed">
                    It's not just Nursing. Exams now heavily test Aptitude, Reasoning, and GK. Balancing all subjects requires a strategic timetable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0 text-yellow-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Discipline & Consistency</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Regular mock tests and scheduled classes keep you on track, preventing the burnout that often happens with unguided self-study.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: NPrep Achievements */}
          <div className="bg-surface rounded-3xl p-8 lg:p-12 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              NPrep Achievements
            </h3>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">500+</p>
                  <p className="text-sm text-text-secondary font-medium">Selections in Last Session</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">10+</p>
                  <p className="text-sm text-text-secondary font-medium">Years of Teaching Excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  <BookCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">30,000+</p>
                  <p className="text-sm text-text-secondary font-medium">Questions in QBank</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">#1</p>
                  <p className="text-sm text-text-secondary font-medium">Selection Ratio in Jaipur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
