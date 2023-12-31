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

  return (
    <div className={style.container}>
      <h2 className={style.titleProjects}>Proyectos</h2>
      <div className={style.containerPlayer}>
        <div className={style.player}>
          <ReactPlayer
            className={style.player}
            light={<img src={previewGameStack} alt="Thumbnail" />}
            url={urlGameStack}
            height="100%"
            width="auto"
            controls={true}
            muted={true}
          />

          <div>
            <Descripcion texto={gameStack} />
          </div>

        </div>
        <div className={style.player}>
          <ReactPlayer
            url={urlCountries}
            className={style.player}
            light={<img src={previewCountries} alt="Thumbnail" />}
            height="100%"
            width="auto"
            controls={true}
            muted={true}
          />

          <div>
            <Descripcion texto={countries} />
          </div>

        </div>
      </div>
    </div>
  );
};
