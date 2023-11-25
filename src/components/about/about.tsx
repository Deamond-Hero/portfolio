// import { useState } from "react";
import imageProfile from "../../assets/foto.jpg";
import styles from "./about.module.css";

export const Aboutme = () => {
  return (
    <div className={styles.container}>
      <img src={imageProfile} alt="imagen de perfil" className={styles.image} />
      <p className={styles.paragraph}>
        Hola! Mi nombre es Leandro, soy desarrollador web full stack con
        background en diseño gráfico.
      </p>
    </div>
  );
};
