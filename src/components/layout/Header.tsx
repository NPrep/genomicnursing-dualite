import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Dna } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-xs sm:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              +91 6377 6391 69
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Gopalpura Bypass, Jaipur, Rajasthan
            </span>
          </div>
          <div className="font-medium text-accent tracking-wide">
            Est. 2015 • Excellence in Nursing Education
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border-2 border-accent group-hover:shadow-md transition-all">
            <Dna className="w-8 h-8 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary leading-none tracking-tight">GENOMIC</h1>
            <span className="text-xs text-secondary font-bold tracking-widest mb-0.5">MEDICAL ACADEMY</span>
            <span className="text-[10px] text-text-secondary uppercase tracking-wider border-t border-gray-200 pt-0.5 mt-0.5">
              Independent Institution
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
             const isHash = link.href.includes('#');
             const isActive = location.pathname === link.href;
             
             if (isHash) {
               return (
                 <a 
                   key={link.label} 
                   href={link.href}
                   className="text-text-primary font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
                 >
                   {link.label}
                 </a>
               );
             }

             return (
              <Link
                key={link.label} 
                to={link.href}
                className={`font-medium transition-colors text-sm uppercase tracking-wide ${isActive ? 'text-primary font-bold' : 'text-text-primary hover:text-primary'}`}
              >
                {link.label}
              </Link>
             );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer">
            <Button variant="accent" className="font-bold shadow-sm hover:shadow-md">
              Student Login
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
               const isHash = link.href.includes('#');
               if (isHash) {
                 return (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-text-primary font-medium py-2 border-b border-gray-100 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                 );
               }
               return (
                <Link 
                  key={link.label} 
                  to={link.href}
                  className="text-text-primary font-medium py-2 border-b border-gray-100 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
               );
            })}
            <a href="https://nprep.in/login" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="primary" className="w-full mt-2">
                Student Portal
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
