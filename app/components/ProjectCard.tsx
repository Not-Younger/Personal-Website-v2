import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
};

const ProjectCard = (project: Project) => {
  return (
    <div className="w-80 h-[26rem] bg-purple-400 dark:bg-purple-600 rounded-lg overflow-hidden hover:brightness-110 hover:-translate-y-1 duration-500">
      <Image
        src={project.image}
        alt={project.title}
        width={320}
        height={240}
        draggable="false"
      />
      <h3 className="p-2 text-gray-900 dark:text-purple-100 text-2xl">
        {project.title}
      </h3>
      <hr />
      <p className="p-2">{project.description}</p>
      <a href="" className="text-right">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
