import style from './navbar.module.css'
import { onClickTo, NavbarProps } from '../../utils/functionSections';


export const Navbar: React.FC<NavbarProps> = ({ homeRef, skillsRef, projectsRef, aboutRef, contactRef }) => {


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