import { RefObject } from 'react'
import style from './navbar.module.css'


interface NavbarProps{
    homeRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

export const Navbar: React.FC<NavbarProps> = ({ homeRef, skillsRef, projectsRef, aboutRef, contactRef }) => {

    const onClickTo = (ref: React.RefObject<HTMLElement>) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <nav className={style.containerNav}>
            <ul className={style.navbar}>
                <li><a href='#' onClick={onClickTo(homeRef)}>Inicio</a></li>
                <li><a href='#' onClick={onClickTo(skillsRef)}>Skills</a></li>
                <li><a href='#' onClick={onClickTo(projectsRef)}>Proyectos</a></li>
                <li><a href='#' onClick={onClickTo(aboutRef)}>Sobre mi</a></li>
                <li><a href='#' onClick={onClickTo(contactRef)}>Contacto</a></li>
            </ul>
        </nav>
    );
}