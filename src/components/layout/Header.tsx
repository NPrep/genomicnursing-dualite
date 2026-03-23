import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center border border-accent group-hover:shadow-sm transition-all">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-primary leading-none tracking-tight">Genomic Nursing</h1>
            <span className="text-[10px] text-text-secondary uppercase tracking-wider">Nursing Concepts & Education Hub</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-medium transition-colors text-sm uppercase tracking-wide ${location.pathname === link.href ? 'text-primary font-bold' : 'text-text-primary hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="lg:hidden p-2 text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden nprep-mobile-drawer">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-text-primary font-medium py-2 border-b border-gray-100 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
