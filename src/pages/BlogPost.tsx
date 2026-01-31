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
              Genomic Medical & Nursing Academy is Jaipur's leading coaching institute for nursing competitive exams. We are dedicated to providing high-quality education and mentorship to aspiring nursing officers.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
