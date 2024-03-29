import ProjectCard from "@/app/components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center space-y-10 py-20 bg-purple-200 dark:bg-gray-900">
      <h2 className="max-w-3xl text-center font-bold text-gray-900 dark:text-purple-100 text-3xl leading-tight">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Invoice Dashboard App" description="Built a web-app to learn more Next.js and TypeScript. Learned about routing, rendering, data fetching, styling, and other optimizations that come with Next.js." image="/invoicedemo.png" href="https://github.com/Not-Younger/Invoice-App" />
        <ProjectCard title="Social Media/Twitter Clone" description="Created a Twitter clone app using React, PostgreSQL, and Node.js. Users could login, view their feed, like/comment, and follow others." image="/socialmediademo.png" href="https://github.com/Not-Younger/Social-Media-App" />
        <ProjectCard title="Trading Social Media App" description="Developed a stock market paper trading application that had a social media aspect to it using C++ and React Native. Users could buy/sell stocks and post blogs" image="/stocksquad.png" href="https://github.com/Not-Younger/StockSquad" />
      </div>
    </div>
  );
};

export default Projects;
