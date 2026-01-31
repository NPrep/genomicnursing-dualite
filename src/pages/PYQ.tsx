import React from 'react';
import { PYQ_COLLECTIONS } from '../constants';
import { Button } from '../components/ui/Button';
import { FileText, ExternalLink, ChevronRight } from 'lucide-react';

export const PYQ = () => {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Exam Archive</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">Previous Year Papers</h1>
          <p className="text-text-secondary">
            Access the most comprehensive collection of solved papers for Nursing Officer exams.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {PYQ_COLLECTIONS.map((collection, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {collection.category}
                  </h2>
                  <p className="text-sm text-text-secondary mt-1">{collection.description}</p>
                </div>
                <span className="text-xs font-bold bg-white text-primary px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                  {collection.items.length} Papers
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {collection.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group flex flex-col bg-surface hover:bg-white border border-transparent hover:border-accent/50 rounded-xl p-4 transition-all duration-200 hover:shadow-md">
                    <h3 className="font-semibold text-text-primary text-sm mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full justify-between text-xs h-9 bg-white group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        View Paper
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
