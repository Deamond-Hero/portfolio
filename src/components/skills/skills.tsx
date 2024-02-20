import js from "../../assets/JS.png";
import ts from "../../assets/TS.png";
import rc from "../../assets/RCT.png";
import pg from "../../assets/PG.png";
import fg from "../../assets/fg.png";
import njs from "../../assets/NJS.png";
import css from "../../assets/CSS.png";
import html from "../../assets/html.png"
import style from "./skills.module.css";
import { icons } from "../../utils/icons";


export const Skills = () => {
  return (
    <div className={style.skills}>
      <h2>Tech Skills</h2>
      <div className={style.logos}>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={html} alt="HTML" className={style.logo} />
            <p>HTML</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={css} alt="CSS" className={style.logo} />
            <p>CSS</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={js} alt="JavaScript" className={style.logo} />
            <p>Javascript</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={ts} className={style.logo} />
            <p>Typescript</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={rc} className={style.logo} />
            <p>React</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={njs} className={style.logo} />
            <p>NodeJs</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={pg} className={style.logo} />
            <p>Postgres</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={fg} className={style.logo} />
            <p>Figma</p>
          </button>
        </div>
      </div>
      <h2>Soft Skills</h2>
      <div className={style.logos}>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.RowingIcon />
            <p>Proactividad</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.SportsKabaddiIcon />
            <p>Empatía</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.Groups3Icon />
            <p>Teamwork</p>
          </button>
          <div className={style.descripcion}>
            Descripción de la imagen
          </div>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.EmojiObjectsIcon />
            <p>Creatividad</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.ExtensionIcon />
            <p>Adaptabilidad</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.RocketLaunchIcon />
            <p>Desarrollo constante</p>
          </button>
        </div>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.NordicWalkingIcon />
            <p>Autogestión</p>
          </button>
        </div>
      </div>
      <h2>Académico</h2>
      <div className={style.academico1}>
        <div className={style.item}>
          <icons.BookIcon />
          <p>Henry Full Stack developer, 800 horas de cursado teórico-práctico
            - Programming fundamentals, JavaScript, HTML, CSS, Node.Js, Express.js, React, React Native, SQL, PostgreSQL.
            <br />
            (2022 - 2023) </p>
        </div>
        <div className={style.item}>
          <icons.BookIcon />
          <p>CorderHouse “JS avanzado”
            - Programming fundamentals, JavaScript, HTML, CSS, Node.Js
            <br />
            (2021) </p>
        </div>
        <div className={style.item}>
          <icons.BookIcon />
          <p>Corder House “Diseño Web”
            -HTML, CSS, SAS, Flex, Grids
            <br />
            (2021) </p>
        </div>
        <div className={style.item}>
          <icons.BookIcon />
          <p>Acressio
            -Orador con fundamentos en PNL
            <br />
            (2018)</p>
        </div>
        <div className={style.item}>
          <icons.BookIcon />
          <p>Escuela de artes aplicadas Lino Enea Spilimbergo (Carrera terciaria)
            -Diseño Gráfico y Publicitario
            <br />
            (2012 - 2015) </p>
        </div>
      </div>
    </div>

  );
};
