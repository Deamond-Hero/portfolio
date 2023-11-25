import js from "../../assets/JS.png";
import ts from "../../assets/TS.png";
import rc from "../../assets/RCT.png";
import pg from "../../assets/PG.png";
import fg from "../../assets/FG.png";
import style from "./tecnologies.module.css";

export const Tecnologies = () => {
  return (
    <div>

      <div className={style.logos}>
        <div>
          <button className={style.button}><img src={js} className={style.logo} /></button>
        </div>
        <div>
          <button className={style.button}><img src={ts} className={style.logo} /></button>
        </div>
        <div>
        <button className={style.button}><img src={rc} className={style.logo} /></button>
        </div>
        <div>
        <button className={style.button}><img src={pg} className={style.logo} /></button>
        </div>
        <div>
        <button className={style.button}><img src={fg} className={style.logo} /></button>
        </div>
      </div>
    </div>
  );
};
