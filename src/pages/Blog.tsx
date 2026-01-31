import React from 'react';
import { BLOG_DATA } from '../data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Knowledge Hub</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">Latest from Genomic</h1>
          <p className="text-text-secondary">
            Expert insights, exam tips, and career guidance for nursing professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group cursor-pointer flex flex-col h-full">
              <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3 text-accent" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-primary font-semibold text-sm mt-auto pt-4 border-t border-gray-100">
                Read Article 
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
