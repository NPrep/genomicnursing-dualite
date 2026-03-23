import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-gray-100 text-sm text-center">
          Genomic Nursing is an educational knowledge portal for nursing concepts, procedures, and clinical learning resources.
        </p>
        <p className="text-gray-300 text-xs text-center mt-3">
          For practice questions and mock tests, visit <a href="https://nprep.in" className="underline hover:text-accent">NPrep</a>.
        </p>
      </div>
    </footer>
  );
};
