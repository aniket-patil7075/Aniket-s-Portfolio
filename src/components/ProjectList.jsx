// import ProjectCard from "./ProjectCard";
// import projects from "../_data/projects.json";

// /**
//  * Represents a list of project cards.
//  *
//  * This component maps over the projects data and generates
//  * a ProjectCard component for each project.
//  *
//  * @component
//  */

// const ProjectList = () =>
//   projects.map((project) => (
//     <ProjectCard key={project.id} title={project.title} image={project.image} color={project.bgcolor} />
//   ));

// export default ProjectList;

import ProjectCard from "./ProjectCard";
import projects from "../_data/projects.json";

const ProjectList = () => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectList;