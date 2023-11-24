// import { useState } from "react";
import imageProfile from '../../assets/foto.jpg'
import styles from './about.module.css'

export const Aboutme = () => {
  return (
    <>
      <div>
        <img src={imageProfile} alt="imagen de perfil" className={styles.image} />
      </div>
      <p>
        Hola! Mi nombre es Leandro, soy desarrollador web full stack con
        background en diseño gráfico.
      </p>
    </>
  );
};
