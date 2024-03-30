import ProjectCard from "@/app/components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center space-y-10 py-20 bg-white dark:bg-gray-800">
      <h2 className="max-w-3xl text-center font-bold text-gray-900 dark:text-white text-3xl leading-tight">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Invoice Dashboard App" description="Built a web-app to learn more Next.js and TypeScript. Learned about routing, rendering, data fetching, styling, and other optimizations that come with Next.js." image="/invoicedemo.png" href="https://github.com/Not-Younger/Invoice-App" />
        <ProjectCard title="Social Media/Twitter Clone" description="Created a Twitter clone app using React, PostgreSQL, and Node.js. Users could login, view their feed, like/comment, and follow others." image="/socialmediademo.png" href="https://github.com/Not-Younger/Social-Media-App" />
        <ProjectCard title="Personal Website" description="Developed a personal website entirely using Next.js, TypeScript, and Tailwind CSS. Created all UI components independently." image="/website.png" href="https://github.com/Not-Younger/personal-Website-v2" />
      </div>
    </div>
  );
};

export default Projects;
