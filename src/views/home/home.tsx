import { Aboutme } from "../../components/about/about";
import { Contact } from "../../components/contact/contact";
import { Navbar } from "../../components/navbar/navbar";
import { Tecnologies } from "../../components/tecnologies/tecnologies";
import { Projects } from "../../components/projects/projects";
import style from "./home.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div >
          <Navbar />
        </div>
        <div className={style.about}>
          <Aboutme />
        </div>
        <div className={style.tecnologies}>
          <Tecnologies />
        </div>
      </div>
      <div className={style.projects}>
        <Projects />
      </div>
      <div className={style.contact}>
        <Contact />
      </div>
    </div>
  );
};
