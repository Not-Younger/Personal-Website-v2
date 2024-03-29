import ProjectCard from "@/app/components/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 py-20">
      <h2 className="max-w-3xl text-center font-bold text-gray-900 dark:text-purple-100 text-3xl leading-tight">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Project 1" description="Project 1 description" />
        <ProjectCard title="Project 1" description="Project 1 description" />
        <ProjectCard title="Project 1" description="Project 1 description" />
      </div>
    </div>
  );
};

export default Projects;
