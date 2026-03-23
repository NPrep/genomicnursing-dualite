import React from 'react';

const subjectCards = [
  { title: 'Fundamentals of Nursing', description: 'Core nursing principles used in every clinical setting.', href: '/fundamentals-of-nursing' },
  { title: 'Medical Surgical Nursing', description: 'Adult patient care across common medical and surgical conditions.', href: '/medical-surgical-nursing' },
  { title: 'Community Health Nursing', description: 'Prevention, promotion, and public health nursing in communities.', href: '/community-health-nursing' },
  { title: 'Child Health Nursing', description: 'Nursing care for newborns, children, and adolescents.', href: '/child-health-nursing' },
  { title: 'Mental Health Nursing', description: 'Therapeutic care approaches for mental health settings.', href: '/mental-health-nursing' },
  { title: 'Pharmacology in Nursing', description: 'Medication safety, actions, and nursing administration principles.', href: '/pharmacology-in-nursing' }
];

const topicCards = [
  { title: 'Infection Control', description: 'Understand prevention methods used in hospitals and clinics.', href: '/infection-control-in-nursing' },
  { title: 'Hand Hygiene', description: 'Learn practical hand hygiene procedure and best practices.', href: '/hand-hygiene-procedure' },
  { title: 'Nursing Procedures', description: 'Stepwise procedure learning for common bedside nursing tasks.', href: '/hand-washing-procedure-who' },
  { title: 'Patient Safety', description: 'Essential safeguards to reduce harm and improve outcomes.', href: '/patient-safety-in-nursing' },
  { title: 'Vital Signs', description: 'Measurement basics and interpretation in routine care.', href: '/vital-signs-measurement' },
  { title: 'Nursing Process', description: 'Assessment to evaluation framework used in care planning.', href: '/nursing-process-steps' }
];

export const Home = () => {
  return (
    <main className="min-h-screen bg-surface">
      <section className="py-16 text-center bg-gray-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">Nursing Concepts and Education Hub</h1>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Learn important nursing concepts, procedures and subject knowledge used in clinical practice.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-6 text-text-primary">Subjects Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectCards.map((subject) => (
              <a key={subject.title} href={subject.href} className="p-6 rounded-2xl shadow-md bg-white border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{subject.title}</h3>
                <p className="text-text-secondary leading-relaxed">{subject.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-6 text-text-primary">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((topic) => (
              <a key={topic.title} href={topic.href} className="p-6 rounded-2xl shadow-md bg-white border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{topic.title}</h3>
                <p className="text-text-secondary leading-relaxed">{topic.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-3 text-text-primary">Apply Your Knowledge in Exams</h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            Practice nursing questions and mock tests on NPrep to strengthen your preparation.
          </p>
          <a
            href="https://nprep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            Start Now
          </a>
        </div>
      </section>
    </main>
  );
};
