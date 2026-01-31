import React from 'react';
import { Phone, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://images.dualite.app/de7c7353-5b72-41c6-a07c-4a725f050847/Screenshot_2026-01-30_at_6.05.31_PM-0b09cf49-d7a0-45e8-b2fc-7e980acb91c2.webp"
                alt="Genomic Medical Academy"
                className="w-12 h-12 object-contain rounded-full border-2 border-accent bg-white"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white leading-none">GENOMIC</h3>
                <span className="text-[10px] text-accent font-semibold tracking-wider">MEDICAL ACADEMY</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premier coaching institute in Jaipur for Nursing Officer exams, AIIMS NORCET, and medical entrance preparations. Committed to excellence since 2015.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nprep.in/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@NPrepNursingClasses" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors text-sm">Home</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-accent transition-colors text-sm">Blog</a></li>
              <li><a href="/pyq" className="text-gray-300 hover:text-accent transition-colors text-sm">Previous Year Papers</a></li>
              <li><a href="/subject-tests" className="text-gray-300 hover:text-accent transition-colors text-sm">Subject Tests</a></li>
              <li><a href="/mock-tests" className="text-gray-300 hover:text-accent transition-colors text-sm">Mock Tests</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-300 text-sm">+91 6377 6391 69</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Genomic Medical & Nursing Academy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
