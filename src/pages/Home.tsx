import React from 'react';

export const Home = () => {
  return (
    <main className="min-h-screen bg-surface py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <section className="bg-white border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Nursing Concepts and Education Hub</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Learn important nursing concepts, procedures and subject knowledge used in clinical practice.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4">Subjects Covered</h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
            <li><a className="text-primary hover:underline" href="/fundamentals-of-nursing">Fundamentals of Nursing</a></li>
            <li><a className="text-primary hover:underline" href="/medical-surgical-nursing">Medical Surgical Nursing</a></li>
            <li><a className="text-primary hover:underline" href="/community-health-nursing">Community Health Nursing</a></li>
            <li><a className="text-primary hover:underline" href="/pharmacology-in-nursing">Pharmacology</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4">Popular Topics</h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
            <li><a className="text-primary hover:underline" href="/infection-control-in-nursing">Infection Control</a></li>
            <li><a className="text-primary hover:underline" href="/hand-hygiene-procedure">Hand Hygiene</a></li>
            <li><a className="text-primary hover:underline" href="/hand-washing-procedure-who">Nursing Procedures</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mb-4">Apply Your Knowledge in Exams</h2>
          <p className="text-text-secondary mb-4">
            Practice nursing questions and mock tests on NPrep to strengthen your preparation.
          </p>
          <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:underline">
            Start Practice
          </a>
        </section>
      </div>
    </main>
  );
};
