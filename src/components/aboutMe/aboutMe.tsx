import styles from "./about.module.css";
import image1 from "../../assets/20191231_113910-min.jpg";
import image2 from "../../assets/reset-img.png";

export const AboutMe = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <p className={styles.sectionSubtitle}>Perfil profesional, visión de producto y filosofía de trabajo</p>
      </div>

      <div className={styles.gridContainer}>
        {/* Photo Gallery Stack */}
        <div className={styles.galleryWrapper}>
          <div className={`${styles.photoCard} ${styles.card1}`}>
            <img src={image1} alt="Leandro trabajando en proyectos" />
          </div>
          <div className={`${styles.photoCard} ${styles.card2}`}>
            <img src={image2} alt="Espacio de trabajo" />
          </div>
        </div>

        {/* Text Bio */}
        <div className={styles.textContent}>
          <div className={styles.bioCard}>
            <h3 className={styles.subHeading}>Full Stack Developer (Frontend & Mobile)</h3>
            <p>
              Soy Full Stack Developer con especialización en <strong>Frontend y Mobile</strong>, con experiencia en productos reales utilizando <strong>TypeScript, React, Next.js, React Native, Node.js y PostgreSQL</strong>.
            </p>
            <p>
              Mi principal fortaleza es la <strong>resolución de problemas</strong>: entender una necesidad de negocio, adquirir rápidamente el contexto técnico necesario y transformarla en una solución validada y lista para producción.
            </p>
            <p>
              He trabajado de punta a punta sobre desarrollo, integraciones M2M/B2B, automatizaciones con n8n, despliegues (Docker, AWS, PM2, Vercel) y estabilización de sistemas, manteniendo siempre una mirada orientada al producto.
            </p>
            <p>
              Mi formación universitaria en Sistemas e historia en <strong>Diseño Gráfico</strong> complementan mi perfil técnico con criterio visual exigente y buenas prácticas de UI/UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};