import { AboutMe } from "../../components/aboutMe/aboutMe";
import { Home } from "../../components/home/home";
import { Contact } from "../../components/contact/contact";
import { Navbar } from "../../components/navbar/navbar";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";
import { IconBar } from "../../components/iconsToolbar/iconsBar";
import style from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { ScrollDetector, ScrollDetectorProps } from "../../utils/ScrollDetector";


export const Page = () => {

  const [activeRef, setActiveRef] = useState<string | null>(null);

  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)


  useEffect(() => {
    const scrollDetectorProps: ScrollDetectorProps = {
      homeRef,
      skillsRef,
      projectsRef,
      aboutRef,
      contactRef,
      setActiveRef,
      activeRef,
    };

    const scrollDetector = ScrollDetector(scrollDetectorProps);

    scrollDetector.subscribeScroll(); // Suscribirse al evento de desplazamiento

    return () => {
      scrollDetector.unsubscribeScroll(); // Desuscribirse al desmontar el componente
    };
  }, [activeRef]);

  return (
    <div className={style.container}>
      <IconBar contactRef={contactRef}
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        activeRef={activeRef}/>


      <Navbar homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef} 
        activeRef={activeRef}/>


      <div ref={homeRef} className={style.home}>
        <Home />
      </div>
      <div ref={skillsRef} className={style.skills}>
        <Skills />
      </div>
      <div ref={projectsRef} className={style.projects}>
        <Projects />
      </div>
      <div ref={aboutRef} className={style.about}>
        <AboutMe />
      </div>
      <div ref={contactRef} className={style.contact}>
        <Contact />
      </div>
    </div>
  );
};
