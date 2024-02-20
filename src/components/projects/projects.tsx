import ReactPlayer from "react-player";
import style from "./projects.module.css";
import previewGameStack from "../../assets/Game.png";
import previewCountries from "../../assets/countries.png";
import { Descripcion } from "../../utils/ModalGamestack";
import { gameStack } from "../../utils/descriptions";
import { countries } from "../../utils/descriptions";
export const Projects = () => {
  const urlGameStack = "https://www.youtube.com/watch?v=5T9n18-FRgw";
  const urlCountries = "https://youtu.be/j7bm0bqSo9w?si=Lq2y04AeplpMKKsu";
  const titleGameStack = "GameStack"
  const titleCountries = "Countries"
  const repoGame = "https://github.com/App-videjuegos/PFVideojuegos-Front"
  const repoCountries = "https://github.com/Deamond-Hero/countries-henry";

  return (
    <div className={style.projects}>
      <div className={style.container}>
        <h2 className={style.titleProjects}>Proyectos</h2>
        <div className={style.containerPlayer}>
          <div className={style.player}>
            <ReactPlayer
              light={<img src={previewGameStack} alt="Thumbnail" />}
              url={urlGameStack}
              height="100%"
              width="auto"
              controls={true}
              muted={true}
            />

            <div>
              <Descripcion texto={gameStack} linkGit={repoGame} title={titleGameStack}/>
            </div>

          </div>
          <div className={style.player}>
            <ReactPlayer
              url={urlCountries}
              light={<img src={previewCountries} alt="Thumbnail" />}
              height="100%"
              width="auto"
              controls={true}
              muted={true}
            />

            <div>
              <Descripcion texto={countries} linkGit={repoCountries} title={titleCountries}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
