import imageProfile from "../../assets/foto.jpg";
import styles from "./home.module.css";
import { icons } from "../../utils/icons";

export const Home = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentGrid}>
        <div className={styles.textContent}>
          <div className={styles.badgeGroup}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Full Stack Developer | Frontend & Mobile</span>
            </div>
            <div className={styles.locationBadge}>
              <span>📍 Córdoba, Argentina</span>
            </div>
          </div>

          <h1 className={styles.title}>
            Hola, soy <span className={styles.gradientText}>Leandro Brangi</span>
          </h1>

          <p className={styles.subtitle}>
            Especializado en productos reales con <strong>TypeScript, React, Next.js, React Native, Node.js y PostgreSQL</strong>. Transformo necesidades complejas de negocio en soluciones listas para producción con visión de producto y diseño UI/UX.
          </p>

          <div className={styles.actions}>
            <a 
              href="https://1drv.ms/w/s!AvN4-mvWcbEgjAwi8OS1BECvHuYd?e=EC3fiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <span>Descargar CV</span>
              <icons.RocketLaunchIcon className={styles.btnIcon} />
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.avatarGlow}></div>
          <div className={styles.avatarContainer}>
            <img 
              src={imageProfile} 
              alt="Foto de perfil de Leandro Brangi" 
              className={styles.avatarImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
