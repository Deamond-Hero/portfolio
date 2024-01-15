import { Welcome } from "../../components/about/about";
import { Contact } from "../../components/contact/contact";
import { Navbar } from "../../components/navbar/navbar";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";
import { IconBar } from "../../components/iconsToolbar/iconsBar";
import style from "./home.module.css";
// import { useRef } from "react";

export const Home = () => {

  //  const Ref= useRef()

  return (
    <div className={style.container}>
      <IconBar />
      <Navbar />
      <div className={style.welcome}>
        <Welcome />
      </div>
      <div className={style.tecnologies}>
        <Skills />
      </div>
      <div className={style.projects}>
        <Projects />
      </div>
      <div className={style.contact}>
        <Contact />
      </div>
      <div className={style.contact}>
        <Contact />
      </div>
    </div>
  );
};
