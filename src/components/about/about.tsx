// import { useState } from "react";
import imageProfile from "../../assets/foto.jpg";
import styles from "./about.module.css";

export const Welcome = () => {
  return (
    <div >
      <div className={styles.container}>
      <div className={styles.paragraph}>
        <h1>Full Stack Web Developer</h1>
        <p >
          Hola! Mi nombre es Leandro, soy desarrollador web full stack con
          background en diseño gráfico.
        </p>
      </div>
      
      <img src={imageProfile} alt="imagen de perfil" className={styles.image} />
      </div>
      <button>Descargar CV</button>
    </div>
  );
};
