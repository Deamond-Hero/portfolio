import styles from './about.module.css'
import image1 from '../../assets/20191231_113910-min.jpg'
import image2 from '../../assets/reset-img.png'

export const AboutMe = () => {
    return (

        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image1} src={image1} alt='imagen1' />
                <img className={styles.image2} src={image2} alt='imagen2' />
            </div>
            <div className={styles.paragraph}>
                <h2>Sobre mi</h2>
                <p>
                    Soy un Full Stack Web Developer con experiencia en diseño gráfico, enfocado principalmente en el frontend.

                    Mis habilidades abarcan el uso de React y React Native, la creación de bases de datos con Postgres, y el desarrollo de API REST con Node.js. Soy reconocido por ser proactivo, empático y organizado en situaciones profesionalmente desafiantes.

                    Me destaco en el uso de metodologías ágiles y herramientas como GIT y Trello para una gestión efectiva de proyectos.
                    El uso de Figma es fundamental para lograr un flujo de trabajo ordenado y bien visionado en un entorno profesionalmente desafiante.
                    Mi experiencia como emprendedor y trabajador autónomo me ha mantenido en constante mejora, siendo altamente competente en el mercado.</p>
                <h2>Mis pasiones</h2>
                <p>
                Mis cables a tierra son pedalear y pasar horas en mi taller trabajando con mis maquinas, creando cosas. La tecnología me fascina, así que siempre estoy al tanto de cada novedad. De ahí surge mi gran pasión por la programación, un campo en el que constantemente uno debe reinventarse.</p>
            </div>
        </div>
    )
}