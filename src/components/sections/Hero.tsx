import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[80vh] flex items-center justify-center">
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-white font-medium text-sm tracking-wide">
                Excellence in Medical Education
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Genomic Medical & <br />
              <span className="text-accent">Nursing Academy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              An independent institution committed to shaping the future of nursing professionals. 
              Comprehensive preparation for <span className="text-white">NORCET</span>, <span className="text-white">RRB</span>, and <span className="text-white">State Exams</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#courses">
                <Button size="lg" variant="accent" className="shadow-lg shadow-black/20 text-primary font-bold px-10 w-full sm:w-auto">
                  Explore Courses
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold px-10 w-full sm:w-auto">
                  Contact Counselling
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">Selections</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">Offline</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">& Online Classes</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
