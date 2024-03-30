import React from 'react';
import Section from '@/app/components/Section';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:space-y-10 py-10">
      <h1 className="text-3xl">About Me</h1>
      <Section reverse={true} text="I've been playing hockey since I was 4 years old. There has been many great friends and unforgettable memories along the way." image="/hockey.jpeg" alt="Picture of me playing hockey"/>
    </div>
  );
};

export default AboutPage;