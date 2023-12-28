import js from "../../assets/JS.png";
import ts from "../../assets/TS.png";
import rc from "../../assets/RCT.png";
import pg from "../../assets/PG.png";
import fg from "../../assets/fg.png";
import njs from "../../assets/NJS.png";
import css from "../../assets/CSS.png";
import html from "../../assets/html.png"
import style from "./tecnologies.module.css";

export const Tecnologies = () => {
  return (
    <div>
      <div className={style.logos}>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={html} alt="CSS" className={style.logo} />
          </button>
          <div className={style.descripcion} id="descripcion">
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={css} alt="CSS" className={style.logo} />
          </button>
          <div className={style.descripcion} id="descripcion">
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={js} alt="JavaScript" className={style.logo} />
          </button>
          <div className={style.descripcion} id="descripcion">
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={ts} className={style.logo} />
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={rc} className={style.logo} />
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={pg} className={style.logo} />
          </button>
        </div>
        <div className={style.contenedorLogo}>
          {" "}
          <button className={style.button}>
            <img src={fg} className={style.logo} />
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={njs} className={style.logo} />
          </button>
        </div>
      </div>
    </div>
  );
};
