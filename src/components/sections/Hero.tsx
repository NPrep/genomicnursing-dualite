import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Background Image with Brand Color Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=2000" 
          alt="Nursing Classroom Background" 
          className="w-full h-full object-cover"
        />
        {/* Brand color screen with low transparency (high opacity) */}
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-accent font-bold text-sm tracking-wide uppercase">
                #1 Nursing Coaching in Jaipur
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Genomic Medical & <br />
              <span className="text-accent">Nursing Academy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Trusted coaching for <span className="text-white font-bold">Nursing Officer</span> & <span className="text-white font-bold">Medical Competitive Exams</span>. 
              Join the league of successful nursing professionals serving across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="accent" className="shadow-lg shadow-black/20 text-primary font-bold px-10 w-full sm:w-auto">
                  Enroll Now
                </Button>
              </a>
              <a href="tel:+916377639169">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold px-10 w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-semibold text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Offline Classes
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Online App
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Test Series
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
