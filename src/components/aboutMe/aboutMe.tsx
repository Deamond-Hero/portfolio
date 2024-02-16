import styles from './about.module.css'

export const AboutMe = () => {
    return (

        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src='../src/assets/20191231_113910-min.jpg' />
                <img className={styles.image} src='../src/assets/reset-img.png' />
            </div>
            <div className={styles.paragraph}>
                <p>Sobre mi
                    Soy un Full Stack Web Developer con experiencia en diseño gráfico, enfocado principalmente en el frontend.

                    Mis habilidades abarcan el uso de React y React Native, la creación de bases de datos con Postgres, y el desarrollo de API REST con Node.js. Soy reconocido por ser proactivo, empático y organizado en situaciones profesionalmente desafiantes.

                    Me destaco en el uso de metodologías ágiles y herramientas como GIT y Trello para una gestión efectiva de proyectos.
                    El uso de Figma es fundamental para lograr un flujo de trabajo ordenado y bien visionado en un entorno profesionalmente desafiante.
                    Mi experiencia como emprendedor y trabajador autónomo me ha mantenido en constante mejora, siendo altamente competente en el mercado.</p>
            </div>
        </div>
    )
}