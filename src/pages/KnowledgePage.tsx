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
    <article className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="text-sm text-primary font-semibold hover:underline">← Back to Home</Link>
        <div className="blog-content mt-6" dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </article>
  );
};
