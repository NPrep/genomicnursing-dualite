import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_DATA } from '../data/blogs';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_DATA.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Inject JSON-LD Schema
  useEffect(() => {
    if (post) {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": "https://images.dualite.app/de7c7353-5b72-41c6-a07c-4a725f050847/Screenshot_2026-01-30_at_6.05.31_PM-0b09cf49-d7a0-45e8-b2fc-7e980acb91c2.webp",
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Genomic Medical Academy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://images.dualite.app/de7c7353-5b72-41c6-a07c-4a725f050847/Screenshot_2026-01-30_at_6.05.31_PM-0b09cf49-d7a0-45e8-b2fc-7e980acb91c2.webp"
          }
        },
        "datePublished": post.date,
        "description": post.excerpt
      };

      // Extract FAQs if they exist in content for FAQPage schema (Simplified extraction)
      // For a robust solution, we'd parse the HTML, but here we'll add a generic FAQ schema if "FAQs" is in title or content
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is coaching necessary for Nursing Exams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While self-study is possible, coaching provides structured guidance, mock tests, and expert mentorship which significantly improves chances of selection."
            }
          },
          {
            "@type": "Question",
            "name": "What is the eligibility for NORCET?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "B.Sc Nursing candidates are eligible as freshers. GNM candidates require 2 years of experience in a 50-bedded hospital."
            }
          }
        ]
      };

      const scriptArticle = document.createElement('script');
      scriptArticle.type = 'application/ld+json';
      scriptArticle.text = JSON.stringify(schemaData);
      document.head.appendChild(scriptArticle);

      const scriptFAQ = document.createElement('script');
      scriptFAQ.type = 'application/ld+json';
      scriptFAQ.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptFAQ);

      return () => {
        document.head.removeChild(scriptArticle);
        document.head.removeChild(scriptFAQ);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-4">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Article not found</h2>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-surface border-b border-border py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-text-secondary hover:text-primary mb-8 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>{post.author}</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto h-8 text-xs gap-2 hidden sm:flex">
              <Share2 className="w-3 h-3" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Box */}
        <div className="mt-16 p-8 bg-surface rounded-xl border border-border flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0">
            G
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-2">About Genomic Academy</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Genomic Medical & Nursing Academy is an independent institute in Jaipur dedicated to nursing education. We provide objective guidance and comprehensive resources for competitive exams.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
