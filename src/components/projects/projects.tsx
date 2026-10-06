import style from "./projects.module.css";
import projects from "../../utils/proyectos.json";
import { VideoCard } from "../../utils/videoCard";
import rvMetalImg from "../../assets/rv-metal.png";
import n8nImg from "../../assets/n8n.png";
import transporteImg from "../../assets/transporte.png";

export const Projects = () => {
  return (
    <section className={style.projectsSection}>
      <div className={style.sectionHeader}>
        <h2 className={style.sectionTitle}>Proyectos Destacados</h2>
        <p className={style.sectionSubtitle}>
          Selección de aplicaciones web, mobile y sistemas de automatización
        </p>
      </div>

      <div className={style.projectsGrid}>
        {projects.map((project) => {
          let previewImage = project.preview;
          if (project.id === 1) {
            previewImage = transporteImg;
          } else if (project.id === 2) {
            previewImage = n8nImg;
          } else if (project.id === 3) {
            previewImage = rvMetalImg;
          }

          return (
            <VideoCard
              key={project.id}
              title={project.title}
              puesto={project.puesto}
              type={project.type}
              periodo={project.periodo}
              institucion={project.institucion}
              description={project.description}
              tecnologias={project.tecnologias}
              video={project.video}
              git={project.git}
              demoUrl={project.demoUrl}
              preview={previewImage}
            />
          );
        })}
      </div>
    </section>
  );
};
