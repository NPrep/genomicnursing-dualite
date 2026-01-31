import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Courses } from '../components/sections/Courses';
import { WhyChoose } from '../components/sections/WhyChoose';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Courses />
      <WhyChoose />
      <CTA />
    </main>
  );
};
