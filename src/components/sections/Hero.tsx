import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-white font-medium text-sm tracking-wide">
                Nursing Coaching Academy, Jaipur
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-blue-50 text-sm font-medium">📍 Gopalpura Bypass, Jaipur, Rajasthan</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Genomic Medical & <br />
              <span className="text-accent">Nursing Academy</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Jaipur-based coaching for <span className="text-white">NORCET</span>, <span className="text-white">RRB</span>,
              {' '}and state nursing exams. Academic partner: NPrep | Online platform powered by NPrep.
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

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">Since 2015</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">Jaipur-based mentorship</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">Offline + Online</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">Structured exam prep</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">NORCET Focus</span>
                <span className="text-sm text-blue-200 uppercase tracking-wider mt-1">Clinical scenario practice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
