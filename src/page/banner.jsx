import styleButtons from "../style/styleButtons.module.css";
import img from "../assets/img.jpg";
import imgGit from "../assets/git-icon.png";
import banner2 from "../assets/banner2.png";
import styleBanner from "../style/banner.module.css";
import styleProjects from "../style/projects.module.css";
import { technologies } from "../data/technologies.js";
import { About } from "./about.jsx";

export const Banner = () => {
  return (
    <section
      id="banner"
      className={styleBanner.imgBanner}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styleBanner.bannerContent}>
        <div className={styleBanner.bannerContainer}>
          <div className={styleBanner.infoBanner}>
            <p className={styleBanner.bannerName}>
              Olá, me chamo Thiago Arques
            </p>
            <h2 className={styleProjects.title}>Bem vindo ao meu portfólio</h2>
            <About />
            <div className={styleBanner.buttonsBanner}>
              <a href="#projects" className={styleButtons.buttonProjBanner}>
                Projetos
              </a>
              <a
                href={"https://github.com/ThiagoMagnani"}
                target="_blank"
                className={styleButtons.buttonGit}
              >
                <img src={imgGit} alt="GitHub" />
              </a>
            </div>
            <section>
              <ul className={styleBanner.listTech}>
                {technologies.map((technologie, index) => (
                  <img
                    key={index}
                    src={technologie.img}
                    alt="Tecnologia"
                    className={styleBanner.techImage}
                  />
                ))}
              </ul>
            </section>
          </div>
          <img
            src={banner2}
            alt="imagem principal"
            className={styleBanner.secImgBanner}
          />
        </div>
      </div>
    </section>
  );
};
