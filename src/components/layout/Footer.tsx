import React from 'react';
import { Phone, Instagram, Youtube, CheckCircle2, MapPin, Dna } from 'lucide-react';

export const Footer = () => {
  const exams = [
    'AIIMS NORCET', 'RRB Staff Nurse', 'ESIC Nursing Officer',
    'CHO (All States)', 'DSSSB', 'GMCH Chandigarh',
    'SGPGI Lucknow', 'PGIMER', 'BTSC Bihar', 'MNS',
  ];

  return (
    <footer id="contact" className="bg-primary text-white pt-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="nprep-disclaimer-banner">
          Disclaimer: This is an independent educational portal and not an official government website. In association with NPrep.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border-2 border-accent">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white leading-none">GENOMIC</h3>
                <span className="text-[10px] text-accent font-semibold tracking-wider">MEDICAL ACADEMY</span>
                <span className="text-[9px] text-gray-300 uppercase tracking-wider mt-1">Nursing Coaching Academy, Jaipur</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Genomic Medical & Nursing Academy offers focused offline coaching in Jaipur for major nursing recruitment exams.
            </p>
            <p className="text-gray-400 text-xs mb-6">
              Academic partner: NPrep | Online platform powered by NPrep
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nprep.in/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@NPrepNursingClasses" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-1">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-gray-300 hover:text-accent transition-colors text-sm">Nursing Articles</a></li>
              <li><a href="/pyq" className="text-gray-300 hover:text-accent transition-colors text-sm">Previous Papers</a></li>
              <li><a href="/subject-tests" className="text-gray-300 hover:text-accent transition-colors text-sm">Subject Practice</a></li>
              <li><a href="/mock-tests" className="text-gray-300 hover:text-accent transition-colors text-sm">Mock Exams</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-1">Exams We Cover</h4>
            <ul className="space-y-2">
              {exams.map((exam, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  {exam}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-accent inline-block pb-1">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Gopalpura Bypass, Jaipur,<br />Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+916377639169" className="text-gray-300 text-sm hover:text-accent transition-colors">+91 6377 6391 69</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Genomic Medical & Nursing Academy. All Rights Reserved.</p>
            <p className="text-gray-500 text-xs">Jaipur's Trusted Nursing Institute</p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Genomic Medical & Nursing Academy. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs">Jaipur's Trusted Nursing Institute. In association with NPrep.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
