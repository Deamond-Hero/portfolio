// import { useState } from "react";
import imageProfile from "../../assets/foto.jpg";
import styles from "./home.module.css";

export const Home = () => {
  return (

    <div className={styles.container}>
      <div className={styles.containerAbout}>
        <div className={styles.paragraph}>
          <h1>Full Stack Web Developer</h1>
          <p >
            ¡Hola! Mi nombre es Leandro, soy desarrollador web full stack con
            background en diseño gráfico.
          </p>
          <div className={styles.buttonContainer}>
            <button>Descargar CV</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageProfile} alt="imagen de perfil" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
