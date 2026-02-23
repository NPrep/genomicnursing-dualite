import React from 'react';
import { GALLERY_IMAGES } from '../../constants';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Life at Genomic</h2>
          <p className="text-text-secondary">Glimpses of our classrooms, labs, and student activities.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm h-48 md:h-64">
              <img loading="lazy" 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
