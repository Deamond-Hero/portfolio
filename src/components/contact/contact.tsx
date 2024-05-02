import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "./contact.module.css"
import Swal from 'sweetalert2';



export const Contact = () => {


  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [motive, setMotive] = useState('')
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState({
    name: "",
    email: "",
    motive: "",
    message: ""
  })

  useEffect(() => {

  }, [name, email, motive, message])

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 3500);
    setIsVisible(true)
  }, [error])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {

      let hasError = false;

      if (name === '') {
        setError(prevState => ({ ...prevState, name: 'Por favor ingresa tu nombre' }));
        hasError = true;
      } else {
        setError(prevState => ({ ...prevState, name: '' }));
      }
      if (email === '') {
        setError(prevState => ({ ...prevState, email: 'Por favor ingresa tu correo' }));
        hasError = true;
      } else if (!emailRegex.test(email)) {
        setError(prevState => ({ ...prevState, email: 'Por favor ingresa un correo válido' }));
        hasError = true;
      } else {
        setError(prevState => ({ ...prevState, email: '' }));
      }
      if (motive === '') {
        setError(prevState => ({ ...prevState, motive: 'Por favor ingresa un motivo' }));
        hasError = true;
      } else {
        setError(prevState => ({ ...prevState, motive: '' }));
      }
      if (message.length <= 20) {
        setError(prevState => ({ ...prevState, message: 'Ingresa un mensaje superior a 20 caracteres' }));
        hasError = true;
      } else {
        setError(prevState => ({ ...prevState, message: '' }));
        hasError = false;
      }
      if (error.email === "" && error.name === "" && error.motive === "" && error.message === "") {
        if (!hasError){
        try {
          emailjs
            .sendForm('service_3s6lweq', 'template_tfk9iwz', form.current, {
              publicKey: 'xkLoSWwhyeQKFzTko',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                Swal.fire("Su mensaje ha sido enviado!", "", "success");
                setName('');
                setMotive('');
                setEmail('');
                setMessage('');
              },
              (error) => {
                console.log('FAILED...', error.text);
              }
            );
        } catch {
          console.log('Ouch! Algo salió mal');
        }
      } else {
        console.log('Ouch! Algo salía mal');
      }
    }
  }
}

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
        <form ref={form} onSubmit={sendEmail} className={style.boxes}>
          <div className={style.input}>
            <p>Nombre</p>
            <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)}></input>
            {isVisible && error.name ? <div className={style.error}>{error.name}</div> : null}
          </div>
          <div className={style.input}>
            <p>Email</p>
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            {isVisible && error.email ? <div className={style.error}>{error.email}</div> : null}
          </div>
          <div className={style.input}>
            <p>Motivo</p>
            <input value={motive} onChange={(e) => setMotive(e.target.value)}></input>
            {isVisible && error.motive ? <div className={style.error}>{error.motive}</div> : null}
          </div>
          <div className={style.message}>
            <p>Mensaje</p>
            <textarea name="message" maxLength={250} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {isVisible && error.message ? <div className={style.error}>{error.message}</div> : null}
          </div>
          <div className={style.send}>
            <button type="submit" value="Send">Enviar</button>
          </div>
        </form>
      </div>
      <div className={style.footer}>
        <div className={style.filete}></div>
        <p>© 2023 Leandro Brangi | Todos los derechos reservados | Desarrollado con TypeScrypt, React.js y CSS. Iconos proporcionados por Font Awesome.</p>
      </div>
    </div>
  );
};
