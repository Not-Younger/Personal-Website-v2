import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const ProjectCard = (project: Project) => {
  return (
    <div className="flex flex-col justify-between w-80 h-[26rem] backdrop-blur-lg rounded-lg overflow-hidden hover:brightness-95 dark:brightness-125 dark:hover:brightness-150 hover:-translate-y-1 duration-500 shadow-xl">
      <div>
        <div className="flex justify-center items-center dark:brightness-75">
          <Image
          src={project.image}
          alt={project.title}
          width={320}
          height={240}
          draggable="false"
          className="w-auto h-auto"
          />
        </div>
        <h3 className="px-4 py-2 text-gray-900 dark:text-purple-100 text-2xl">
          {project.title}
        </h3>
        <hr />
        <p className="px-4 pt-2">{project.description}</p>
      </div>
      <div className="text-right p-4">
        <a href={project.href} className="text-right opacity-50 hover:brightness-150">
          View on GitHub<ArrowOutwardIcon className="text-sm" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
