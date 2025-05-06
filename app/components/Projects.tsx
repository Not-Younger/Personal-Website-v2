import ProjectCard from "@/app/components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center space-y-10 py-20 bg-white dark:bg-gray-800">
      <h2 className="max-w-3xl text-center font-bold text-gray-900 dark:text-white text-3xl leading-tight">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="QuoteFlow" description="Developed a book and quote tracking app that is live on the App Store. Easily manage your books and quotes in one place." image="/quoteflow.png" href="https://quote-flow.app" />
        <ProjectCard title="Path Visualizer" description="Built a web-app to help people better understand pathfinding algorithms in a visual format. Users can build their own mazes and select from multiple path finding algorithms to run." image="/pathfinding.png" href="https://not-younger.github.io/Path-Finding-Visualizer/" />
        <ProjectCard title="Personal Website" description="Developed a personal website using Next.js, TypeScript, and Tailwind CSS. Created all UI components independently." image="/website.png" href="https://github.com/Not-Younger/personal-Website-v2" />
      </div>
    </div>
  );
};

export default Projects;
