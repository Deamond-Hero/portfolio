import style from "./contact.module.css"

export const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.boxContact}>
        <div className={style.staticContent}>
          <h2>Contactame</h2>
          <p>Gracias llegar hasta aquí, me encantaría hablar contigo. No dudes en llamarme o envíame un correo electrónico. Sígueme en las redes sociales o simplemente completa el formulario de consulta.</p>
          <div className={style.contact}>
            <div><img src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"></img>
              <p>leandrobrangi@gmail.com</p></div>
            <div><img src="https://cdn.icon-icons.com/icons2/877/PNG/512/whatsapp-logo_icon-icons.com_68338.png"></img>
              <p>+54 9 351 3 780 700</p></div>
          </div>

        </div>
        <div className={style.boxes}>
          <div className={style.input}>
            <p>Nombre</p>
            <input></input>
          </div>
          <div className={style.input}>
            <p>Email</p>
            <input></input>
          </div>
          <div className={style.input}>
            <p>Motivo</p>
            <input></input>
          </div>
          <div className={style.message}>
            <p>Mensaje</p>
            <input type="text" maxLength={250} value={""}></input>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.filete}></div>
        <p>© 2023 Leandro Brangi | Todos los derechos reservados | Desarrollado con TypeScrypt, React.js y CSS. Iconos proporcionados por Font Awesome.</p>
      </div>
    </div>
  );
};
