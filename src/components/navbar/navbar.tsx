import React, { useRef, useState } from "react";
import style from "./navbar.module.css";
import { onClickTo, NavbarProps } from "../../utils/functionSections";
import { icons } from "../../utils/icons";

export const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  skillsRef,
  projectsRef,
  experienceRef,
  aboutRef,
  contactRef,
  activeRef,
}) => {
  const navHome = useRef<HTMLAnchorElement>(null);
  const navSkill = useRef<HTMLAnchorElement>(null);
  const navProject = useRef<HTMLAnchorElement>(null);
  const navExperience = useRef<HTMLAnchorElement>(null);
  const navAbout = useRef<HTMLAnchorElement>(null);
  const navContact = useRef<HTMLAnchorElement>(null);

  const [openMenu, setOpenMenu] = useState(false);

  // Close mobile menu on clicking any navigation link
  const handleNavClick = (ref?: React.RefObject<HTMLElement>) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref) {
      onClickTo(ref)(e);
    }
    setOpenMenu(false);
  };

  return (
    <header className={style.header}>
      <nav className={style.containerNav}>
        <a 
          href="#" 
          className={style.brandLogo} 
          onClick={handleNavClick(homeRef)}
        >
          <span className={style.brandInitials}>LB</span>
          <span className={style.brandName}>Leandro Brangi</span>
        </a>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className={style.mobileToggle}
          aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={openMenu}
        >
          <icons.MenuIcon />
        </button>

        <div className={`${style.navWrapper} ${openMenu ? style.open : ""}`}>
          <ul className={style.navbar}>
            <li>
              <a
                href="#home"
                ref={navHome}
                className={activeRef === "navHome" ? style.active : ""}
                onClick={handleNavClick(homeRef)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                ref={navSkill}
                className={activeRef === "navSkill" ? style.active : ""}
                onClick={handleNavClick(skillsRef)}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                ref={navProject}
                className={activeRef === "navProject" ? style.active : ""}
                onClick={handleNavClick(projectsRef)}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#experience"
                ref={navExperience}
                className={activeRef === "navExperience" ? style.active : ""}
                onClick={handleNavClick(experienceRef)}
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#about"
                ref={navAbout}
                className={activeRef === "navAbout" ? style.active : ""}
                onClick={handleNavClick(aboutRef)}
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#contact"
                ref={navContact}
                className={activeRef === "navContact" ? style.active : ""}
                onClick={handleNavClick(contactRef)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};