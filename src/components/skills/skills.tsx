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

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

interface AcademicItem {
  title: string;
  institution: string;
  period: string;
  description: string;
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

const workExperience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Pigmalion Software",
    period: "2025 - 2026",
    description: "Desarrollo y mantenimiento de plataforma empresarial de gestión de transporte (API Node.js/Express, Panel Next.js/React y App Móvil React Native). Acompañamiento en salida a producción, estabilización e infraestructura.",
    achievements: [
      "Facturación electrónica ARCA, FCE, notas de crédito y flujos contables.",
      "Integraciones M2M/B2B mediante APIs REST, webhooks e idempotencia.",
      "Tracking GPS en segundo plano Android y monitoreo Sentry.",
      "Despliegue y devops con Docker, AWS, PM2, Vercel, Load Balancer y Logrotate.",
      "Desarrollo de sistema dinámico de partners con Next.js y Laravel Backpack.",
    ],
    techStack: ["TypeScript", "React Native", "Next.js", "Node.js", "Docker", "AWS", "PM2", "Sentry"],
  },
  {
    role: "Automation Developer",
    company: "Docenteca",
    period: "2026 - Actualidad",
    description: "Desarrollo del área de automatización para la selección y planificación semanal de contenidos educativos.",
    achievements: [
      "Flujo automatizado con n8n y PostgreSQL combinando calendario escolar y plan de estudios.",
      "Lógica de ponderación algorítmica para priorización de temas y variedad pedagógica.",
      "Integración vía APIs y WhatsApp para comunicación automática al equipo de contenidos.",
    ],
    techStack: ["n8n", "PostgreSQL", "APIs REST", "Webhooks", "WhatsApp API"],
  },
  {
    role: "Frontend Developer / PO / Scrum Master",
    company: "Atomic-Cat",
    period: "Agosto 2024 - Actualidad",
    description: "Desarrollo frontend y gestión de producto para catálogo online autogestionable.",
    achievements: [
      "Coordinación de sprints como PO y Scrum Master entre diseño, frontend y backend.",
      "Transformación de prototipos Figma en código mantenible con Next.js y Tailwind.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Scrum"],
  },
  {
    role: "Frontend Developer",
    company: "Kiura",
    period: "Julio 2024 - Octubre 2024",
    description: "Desarrollo de interfaces con React y Material UI a partir de diseños en Figma.",
    achievements: [
      "Implementación de mejora de procesos que redujo el tiempo de entrega de 4 meses a 1 semana (~16 veces más rápido).",
    ],
    techStack: ["React", "Material UI", "Figma", "JavaScript"],
  },
];

const academicHistory: AcademicItem[] = [
  {
    title: "Analista Universitario en Sistemas Informáticos",
    institution: "Universidad Nacional de Córdoba (UNC)",
    period: "En curso",
    description: "Carrera universitaria orientada a arquitectura de software, estructuras de datos, sistemas operativos y ciencias de la computación.",
  },
  {
    title: "Full Stack Web Developer",
    institution: "Henry Bootcamp",
    period: "2022 - 2023",
    description: "800+ horas intensivas de cursado teórico-práctico en desarrollo web completo (React, Node.js, SQL, Express).",
  },
  {
    title: "Diseño Gráfico y Publicitario",
    institution: "Escuela Lino Enea Spilimbergo",
    period: "2012 - 2015",
    description: "Carrera terciaria en diseño gráfico, identidad corporativa, comunicación visual y fundamentos UI/UX.",
  },
  {
    title: "Técnico Nivel Medio en Electrónica",
    institution: "IPET N°1 Presidente Roca",
    period: "2006 - 2011",
    description: "Formación técnica orientada a hardware, circuitos electrónicos, lógica digital y resolución de problemas.",
  },
];

export const Skills = () => {
  return (
    <section className={style.skillsSection}>
      {/* Work Experience Section */}
      <div className={style.block}>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Experiencia Laboral</h2>
          <p className={style.sectionSubtitle}>Proyectos empresariales y desarrollo en producción</p>
        </div>

        <div className={style.experienceList}>
          {workExperience.map((exp, idx) => (
            <div key={idx} className={style.expCard}>
              <div className={style.expHeader}>
                <div>
                  <h3 className={style.expRole}>{exp.role}</h3>
                  <span className={style.expCompany}>{exp.company}</span>
                </div>
                <span className={style.expPeriod}>{exp.period}</span>
              </div>
              <p className={style.expDesc}>{exp.description}</p>

              <ul className={style.achievementsList}>
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>

              <div className={style.techStackBadges}>
                {exp.techStack.map((tech) => (
                  <span key={tech} className={style.expBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Academic Background */}
      <div className={style.block}>
        <div className={style.sectionHeader}>
          <h2 className={style.sectionTitle}>Educación & Certificaciones</h2>
          <p className={style.sectionSubtitle}>Formación universitaria, técnica y especializada</p>
        </div>

        <div className={style.timeline}>
          {academicHistory.map((item, index) => (
            <div key={index} className={style.timelineItem}>
              <div className={style.timelineBadge}>
                <icons.BookIcon />
              </div>
              <div className={style.timelineContent}>
                <div className={style.timelineHeader}>
                  <h3 className={style.academicTitle}>{item.title}</h3>
                  <span className={style.academicPeriod}>{item.period}</span>
                </div>
                <span className={style.academicInstitution}>{item.institution}</span>
                <p className={style.academicDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
