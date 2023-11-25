import style from './navbar.module.css'
export const Navbar = () =>{
    return (
     <div className={style.containerNav}>
        <button className={style.button}>Home</button>
        <button className={style.button}>Tecnologías</button>
        <button className={style.button}>Proyectos</button>
        <button className={style.button}>Contacto</button>
     </div>   
    )
}