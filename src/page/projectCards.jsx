import style from "../style/projects.module.css";
import buttons from "../style/styleButtons.module.css";
import imgGit from "../assets/github.png";
import imgShare from "../assets/share.png";

export const ProjectCard = ({
  title,
  text,
  githubLink,
  appLink,
  languages,
  extras,
}) => {
  const openLink = (link) => {
    console.log("Abrindo link:", link);
    window.open(link, "_blank");
  };

  return (
    <li className={style.liProject}>
      <div className={style.divDesProj}>
        <h3 className={style.titleProjects}>
          {title}
          <div>
            {extras.map((extra, index) => (
              <span key={index} className={style.extras}>
                {extra}
              </span>
            ))}
          </div>
        </h3>
        <div className={style.descriptionContainer}>
          <div className={style.languages}>
            <p className={style.paragraphLanguages}>
              Linguagens:{" "}
              {languages.map((language, index) => (
                <span key={index} className={style.language}>
                  {language}
                </span>
              ))}
            </p>
          </div>
          <p className={style.textProjects}>{text}</p>
        </div>
        <div className={buttons.buttonProjectsContainer}>
          <button
            className={buttons.buttonProjects}
            onClick={() => openLink(githubLink)}
          >
            <img src={imgGit} alt={title} /> GitHub
          </button>
          <button
            className={buttons.buttonProjects}
            onClick={() => openLink(appLink)}
          >
            <img src={imgShare} alt={title} />
            Aplicação
          </button>
        </div>
      </div>
    </li>
  );
};
