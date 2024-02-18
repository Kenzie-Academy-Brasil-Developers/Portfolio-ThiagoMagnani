import style from "../style/projects.module.css";
import { projects } from "../data/projects.js";
import { ProjectCard } from "./projectCards";

export const Project = () => {
  return (
    <section id="projects" className={style.secProj}>
      <div className={style.projectTitle}>
        <h2 className={style.title}>Projetos</h2>
        <h4>Projetos by Kenzie Academy</h4>
      </div>
      <ul className={style.listProjects}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.name}
              text={project.description}
              githubLink={project.githubLink}
              appLink={project.appLink}
              languages={project.languages}
              extras={project.extras}
            />
          );
        })}
      </ul>
    </section>
  );
};
