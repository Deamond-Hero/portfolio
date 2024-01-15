import style from './navbar.module.css'
export const Navbar = () => {
    return (
        <nav className={style.containerNav}>
            <ul className={style.navbar}>
                <li>Inicio</li>
                <li>Skills</li>
                <li>Proyectos</li>
                <li>Sobre mi</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}