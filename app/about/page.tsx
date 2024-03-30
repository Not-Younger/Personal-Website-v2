import React from 'react';
import Section from '@/app/components/Section';
import SectionReverse from '@/app/components/SectionReverse';

const AboutPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:space-y-10 py-10">
      <h1 className="text-3xl">About Me</h1>
      <Section text="I play hockey! I've played since I was 4 years old. Over the journey I've lived in New Hampshire, Massachusetts, Maryland, Ohio, Texas, and most recently, Minnesota, where I attend St. Olaf College and play one the Men's Ice Hockey team." image="/hockey.jpeg" alt="Picture of me playing hockey" />
      <SectionReverse text="I'm a huge reader. I enjoy a wide range of genres, but prefer self-development books above all. These are a handful of books I've read, but there are many others!" image="/books.jpeg" alt="Some books I've read" />
      <Section text="My other hobbies are working out, working on side projects, gaming, and hanging out with my friends and girlfriend. My favorite kind of music is anything EDM / House." image="/purple.png" alt="Picture of purple designs" />
    </div>
  );
};

export default AboutPage;