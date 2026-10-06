import js from "../../assets/JS.png";
import ts from "../../assets/TS.png";
import rc from "../../assets/RCT.png";
import pg from "../../assets/PG.png";
import fg from "../../assets/fg.png";
import njs from "../../assets/NJS.png";
import html from "../../assets/html.png";
import n8nImg from "../../assets/n8n.png";
import style from "./skills.module.css";
import { icons } from "../../utils/icons";

interface TechItem {
  name: string;
  category: string;
  icon?: string;
}

const techSkills: TechItem[] = [
  { name: "JavaScript", category: "Frontend / Mobile", icon: js },
  { name: "TypeScript", category: "Frontend / Mobile", icon: ts },
  { name: "React", category: "Frontend / Mobile", icon: rc },
  { name: "Next.js", category: "Frontend / Mobile", icon: rc },
  { name: "React Native", category: "Frontend / Mobile", icon: rc },
  { name: "Node.js", category: "Backend / Infra", icon: njs },
  { name: "n8n / Automaciones", category: "Backend / Infra", icon: n8nImg },
  { name: "PostgreSQL", category: "Backend / Infra", icon: pg },
  { name: "Express / Zod", category: "Backend / Infra", icon: njs },
  { name: "Docker & AWS", category: "Infra & DevOps", icon: pg },
  { name: "HTML5 & CSS3", category: "Frontend / Mobile", icon: html },
  { name: "Figma (UI/UX)", category: "Diseño & UX", icon: fg },
];

const softSkills = [
  { name: "Resolución de problemas", IconComponent: icons.EmojiObjectsIcon },
  { name: "Ownership y Autonomía", IconComponent: icons.RocketLaunchIcon },
  { name: "Comunicación con clientes", IconComponent: icons.PeopleIcon },
  { name: "Trabajo Interdisciplinario", IconComponent: icons.Groups3Icon },
  { name: "Adaptabilidad & SCRUM", IconComponent: icons.ExtensionIcon },
  { name: "Mejora Continua", IconComponent: icons.NordicWalkingIcon },
];

export const Skills = () => {
  return (
    <section className={style.skillsSection}>
      {/* Tech Skills */}
      <div className={style.block}>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Stack Tecnológico</h2>
          <p className={style.sectionSubtitle}>Lenguajes, frameworks, automatización e infraestructura</p>
        </div>

        <div className={style.techGrid}>
          {techSkills.map((tech) => (
            <div key={tech.name} className={style.techCard}>
              {tech.icon && (
                <div className={style.techIconWrapper}>
                  <img src={tech.icon} alt={tech.name} className={style.techIcon} />
                </div>
              )}
              <span className={style.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className={style.block}>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Competencias & Soft Skills</h2>
          <p className={style.sectionSubtitle}>Ownership, comunicación y trabajo en equipo</p>
        </div>

        <div className={style.softGrid}>
          {softSkills.map((skill) => {
            const Icon = skill.IconComponent;
            return (
              <div key={skill.name} className={style.softCard}>
                <div className={style.softIconBadge}>
                  <Icon />
                </div>
                <span className={style.softName}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

