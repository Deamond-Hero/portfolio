import React from "react";
import ReactPlayer from "react-player";
import style from "../components/projects/projects.module.css";
import { icons } from "./icons";

interface ProjectData {
  id?: number;
  title: string;
  puesto?: string;
  type?: string;
  periodo?: string;
  institucion?: string;
  description: string;
  tecnologias?: string[];
  video?: string;
  git?: string;
  demoUrl?: string;
  preview: string;
}

export const VideoCard: React.FC<ProjectData> = ({
  title,
  puesto,
  type,
  periodo,
  description,
  tecnologias,
  video,
  git,
  demoUrl,
  preview,
}) => {
  const hasVideo = Boolean(video && video.trim().length > 0);
  const hasGit = Boolean(git && git.trim().length > 0);
  const hasDemo = Boolean(demoUrl && demoUrl.trim().length > 0);

  return (
    <article className={style.projectCard}>
      {/* Media Preview Container */}
      <div className={style.mediaContainer}>
        {hasVideo ? (
          <ReactPlayer
            light={
              <div className={style.thumbnailWrapper}>
                <img src={preview} alt={`Preview de ${title}`} className={style.thumbnailImage} />
                <div className={style.playOverlay}>
                  <span className={style.playIcon}>▶</span>
                  <span>Ver Demo en Video</span>
                </div>
              </div>
            }
            url={video}
            controls={true}
            width="100%"
            height="100%"
            playing={false}
          />
        ) : (
          <div className={style.imageShowcaseWrapper}>
            <img src={preview} alt={`Vista de ${title}`} className={style.showcaseImage} />
            <div className={style.imageBadgeOverlay}>
              <span className={style.imageBadgeText}>Vista de Sistema / Producto</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Details Content */}
      <div className={style.projectContent}>
        <div className={style.projectHeader}>
          <div>
            <div className={style.metaBadges}>
              {type && <span className={style.typeBadge}>{type}</span>}
              {periodo && <span className={style.periodBadge}>{periodo}</span>}
            </div>
            <h3 className={style.projectTitle}>{title}</h3>
            {puesto && <p className={style.projectRole}>{puesto}</p>}
          </div>

          <div className={style.actionButtons}>
            {hasDemo && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={style.demoBtn}
                title="Ver Sitio Web En Vivo"
              >
                <span>Ver Sitio Web ↗</span>
              </a>
            )}

            {hasGit && (
              <a
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                className={style.gitBtn}
                title="Ir al repositorio en GitHub"
              >
                <icons.GitHubIcon />
                <span>Código</span>
              </a>
            )}
          </div>
        </div>

        <p className={style.projectDescription}>{description}</p>

        {/* Tech Stack Chips */}
        {tecnologias && tecnologias.length > 0 && (
          <div className={style.techList}>
            {tecnologias.map((tech) => (
              <span key={tech} className={style.techChip}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
