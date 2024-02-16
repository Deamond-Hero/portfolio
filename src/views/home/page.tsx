import { AboutMe } from "../../components/aboutMe/aboutMe";
import { Home } from "../../components/home/home";
import { Contact } from "../../components/contact/contact";
import { Navbar } from "../../components/navbar/navbar";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";
import { IconBar } from "../../components/iconsToolbar/iconsBar";
import style from "./page.module.css";
import { useEffect, useRef } from "react";
import { scrollDownByPercentage } from "../../utils/scrollFunction";

export const Page = () => {

  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)


  return (
    <div className={style.container}>
      <IconBar />
      <Navbar homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef} />
      <section ref={homeRef} className={style.home}>
        <Home />
      </section>
      <section ref={skillsRef} className={style.skills}>
        <Skills />
      </section>
      <section ref={projectsRef} className={style.projects}>
        <Projects />
      </section>
      <section ref={aboutRef} className={style.about}>
        <AboutMe />
      </section>
      <section ref={contactRef} className={style.contact}>
        <Contact />
      </section>
    </div>
  );
};
