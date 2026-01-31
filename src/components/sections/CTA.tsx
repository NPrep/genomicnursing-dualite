import React from 'react';
import { Button } from '../ui/Button';
import { Phone } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Nursing Career with <br />
              <span className="text-accent">Genomic Academy</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Don't wait for the opportunity. Create it. Join the best coaching institute in Jaipur and secure your government job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" className="font-bold text-primary w-full sm:w-auto">
                  Admission Open - Apply Now
                </Button>
              </a>
              <a href="tel:+916377639169">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto gap-2">
                  <Phone className="w-4 h-4" />
                  +91 6377 6391 69
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
