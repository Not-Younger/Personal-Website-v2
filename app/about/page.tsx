import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-orange dark:bg-blue">
      <h1>About Me</h1>
      <p>Welcome to my personal website! Here, you can learn more about me and my interests.</p>
      <h2>Background</h2>
      <p>I have a passion for programming and have been coding for several years. I specialize in web development using technologies like React, TypeScript, and Node.js.</p>
      <h2>Interests</h2>
      <ul>
        <li>Front-end development</li>
        <li>UI/UX design</li>
        <li>Open-source projects</li>
        <li>Learning new technologies</li>
      </ul>
      <h2>Contact</h2>
      <p>If you have any questions or would like to get in touch, feel free to reach out to me via email or social media.</p>
    </div>
  );
};

export default AboutPage;