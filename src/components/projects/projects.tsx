
import style from "./projects.module.css";
import projects from "../../utils/proyectos.json"
import { VideoCard } from "../../utils/videoCard"


export const Projects = () => {

  return (
    <div>
      <div className={style.container}>
        <h2 className={style.titleProjects}>Proyectos</h2>
        {projects.map((data) => (
          <div key={data.id} className={style.containerPlayer}>
            <VideoCard
              preview={data.preview}
              video={data.video}
              description={data.description}
              git={data.git}
              title={data.title} 
              />
          </div>
        ))}

      </div>
    </div>
  );
};
