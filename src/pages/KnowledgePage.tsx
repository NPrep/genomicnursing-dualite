import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { KNOWLEDGE_PAGES } from '../data/knowledgePages';
import { Button } from '../components/ui/Button';

export const KnowledgePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const page = KNOWLEDGE_PAGES.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-4">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Page not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface">
      <section className="py-16 text-center bg-gray-50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">{page.title}</h1>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">{page.intro}</p>
          <Link to="/" className="inline-block mt-6 text-primary font-semibold hover:underline">← Back to Home</Link>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-3 text-text-primary">{page.overviewTitle}</h2>
          <ul className="space-y-2 text-text-secondary leading-relaxed">
            {page.overviewItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-6 text-text-primary">{page.cardsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {page.cards.map((card) => (
              <div key={card.title} className="p-6 rounded-2xl shadow-md bg-white border border-border">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-1 mb-3 text-text-primary">{page.quickPointsTitle}</h2>
          <ul className="space-y-2 text-text-secondary leading-relaxed">
            {page.quickPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
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
