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
          </button>
            <p>HTML</p>
  
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={css} alt="CSS" className={style.logo} />
          </button>
            <p>CSS</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={js} alt="JavaScript" className={style.logo} />
          </button>
            <p>Javascript</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={ts} className={style.logo} />
          </button>
            <p>Typescript</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={rc} className={style.logo} />
          </button>
            <p>React</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={njs} className={style.logo} />
          </button>
            <p>NodeJs</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={pg} className={style.logo} />
          </button>
            <p>Postgres</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <img src={fg} className={style.logo} />
          </button>
            <p>Figma</p>
        </div>

      </div>
      <h2>Soft Skills</h2>
      <div className={style.logos}>
        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.RowingIcon />
          </button>
            <p>Proactividad</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.SportsKabaddiIcon />
          </button>
            <p>Empatía</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.Groups3Icon />
          </button>
            <p>Teamwork</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.EmojiObjectsIcon />
          </button>
            <p>Creatividad</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.ExtensionIcon />
          </button>
            <p>Adaptabilidad</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.RocketLaunchIcon />
          </button>
            <p>Desarrollo <br/>continuo</p>
        </div>

        <div className={style.contenedorLogo}>
          <button className={style.button}>
            <icons.NordicWalkingIcon />
          </button>
            <p>Autogestión</p>
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
          <p>Acressio
            -Orador con fundamentos en PNL
            <br />
            (2018)</p>
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
          <p>Escuela de artes aplicadas Lino Enea Spilimbergo (Carrera terciaria)
            -Diseño Gráfico y Publicitario
            <br />
            (2012 - 2015) </p>
        </div>
        <div className={style.item}>
          <icons.BookIcon />
          <p>CorderHouse “JS avanzado”
            - Programming fundamentals, JavaScript, HTML, CSS, Node.Js
            <br />
            (2021) </p>
        </div>
      </div>
    </div>

  );
};
