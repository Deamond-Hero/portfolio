import style from './navbar.module.css'
export const Navbar = () =>{
    return (
     <div className={style.container}>
        <button>Home</button>
        <button>Tecnologías</button>
        <button>Proyectos</button>
        <button>Contacto</button>
     </div>   
    )
}