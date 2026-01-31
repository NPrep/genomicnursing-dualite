import React from 'react';
import { RESULTS } from '../../constants';

export const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm block mb-2">Hall of Fame</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Our Results Speak For Themselves
            </h2>
          </div>
          <div className="bg-surface px-6 py-3 rounded-lg border border-border">
            <p className="text-primary font-bold text-lg">500+ Selections</p>
            <p className="text-xs text-text-secondary uppercase">In Last Session</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.map((result) => (
            <div key={result.id} className="group relative overflow-hidden rounded-xl shadow-md border border-gray-100">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                  {result.rank}
                </div>
                <h3 className="text-xl font-bold mb-1">{result.name}</h3>
                <p className="text-sm text-gray-200 font-medium">{result.exam}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
