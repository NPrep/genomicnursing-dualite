import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Courses } from '../components/sections/Courses';
import { WhyChoose } from '../components/sections/WhyChoose';
import { CareerPath } from '../components/sections/CareerPath';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <CareerPath />
      <Courses />
      <WhyChoose />
      <CTA />
    </main>
  );
};
