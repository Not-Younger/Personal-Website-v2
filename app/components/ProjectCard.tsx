
type Project = {
  title: string;
  description: string;
};

const ProjectCard = (project : Project) => {
  return (
    <div className="w-80 h-96 bg-purple-500 rounded">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;