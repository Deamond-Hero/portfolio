import style from './navbar.module.css'
import { onClickTo, NavbarProps } from '../../utils/functionSections';
import { useRef, useState } from 'react';
import { icons } from '../../utils/icons';



export const Navbar: React.FC<NavbarProps> = ({ homeRef, skillsRef, projectsRef, aboutRef, contactRef, activeRef }) => {




const navHome= useRef(null);
const navSkill= useRef(null);
const navProject= useRef(null);
const navAbout= useRef(null);
const navContact= useRef(null);


const [openMenu,setOpenMenu] = useState(false)


    return (
        <nav className={style.containerNav}>
            <button onClick={()=>setOpenMenu(!openMenu)} className={openMenu ? style.close : style.open}><icons.MenuIcon/></button>
            <ul className={!openMenu ? style.navbar : style.navbarClose } >
                <li><a href='#' ref={navHome}  className={activeRef === 'navHome' ? style.active : ''}  onClick={onClickTo(homeRef)}>Home</a></li>
                <li><a href='#' ref={navSkill} className={activeRef === 'navSkill' ? style.active : ''}  onClick={onClickTo(skillsRef)}>Skills</a></li>
                <li><a href='#' ref={navProject} className={activeRef === 'navProject' ? style.active : ''} onClick={onClickTo(projectsRef)}>Proyectos</a></li>
                <li><a href='#' ref={navAbout} className={activeRef === 'navAbout' ? style.active : ''} onClick={onClickTo(aboutRef)}>Sobre mi</a></li>
                <li><a href='#' ref={navContact} className={activeRef === 'navContact' ? style.active : ''}  onClick={onClickTo(contactRef)}>Contacto</a></li>
            </ul>
        </nav>
    );
}