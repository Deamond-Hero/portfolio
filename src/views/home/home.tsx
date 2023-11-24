import { Aboutme } from "../../components/about/about";
import { Contact } from "../../components/contact/contact";
import { Navbar } from "../../components/navbar/navbar";
import { Projects } from "../projects/projects";
import style from "./home.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
};
