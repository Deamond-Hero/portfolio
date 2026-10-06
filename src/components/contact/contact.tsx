import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import Swal from "sweetalert2";
import { icons } from "../../utils/icons";

export const Contact = () => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motive, setMotive] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState({
    name: "",
    email: "",
    motive: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { name: "", email: "", motive: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Por favor ingresa tu nombre";
      hasError = true;
    }

    if (!email.trim()) {
      newErrors.email = "Por favor ingresa tu correo";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Por favor ingresa un correo válido";
      hasError = true;
    }

    if (!motive.trim()) {
      newErrors.motive = "Por favor ingresa el asunto o motivo";
      hasError = true;
    }

    if (message.trim().length < 15) {
      newErrors.message = "Ingresa un mensaje de al menos 15 caracteres";
      hasError = true;
    }

    setError(newErrors);

    if (!hasError && form.current) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          "service_3s6lweq",
          "template_tfk9iwz",
          form.current,
          {
            publicKey: "xkLoSWwhyeQKFzTko",
          }
        )
        .then(
          () => {
            setIsSubmitting(false);
            Swal.fire({
              title: "¡Mensaje enviado con éxito!",
              text: "Gracias por contactarme, responderé a la brevedad.",
              icon: "success",
              confirmButtonColor: "#38bdf8",
              background: "#0f172a",
              color: "#f8fafc",
            });
            setName("");
            setMotive("");
            setEmail("");
            setMessage("");
            setError({ name: "", email: "", motive: "", message: "" });
          },
          (err) => {
            setIsSubmitting(false);
            console.error("FAILED...", err);
            Swal.fire({
              title: "Error al enviar",
              text: "Hubo un problema al enviar tu mensaje. Por favor intenta más tarde o contáctame por WhatsApp.",
              icon: "error",
              confirmButtonColor: "#38bdf8",
              background: "#0f172a",
              color: "#f8fafc",
            });
          }
        );
    }
  };

  return (
    <section className={style.contactSection}>
      <div className={style.sectionHeader}>
        <h2 className={style.sectionTitle}>Contacto</h2>
        <p className={style.sectionSubtitle}>
          ¿Tienes un proyecto en mente o una propuesta laboral? ¡Hablemos!
        </p>
      </div>

      <div className={style.contactGrid}>
        {/* Info Column */}
        <div className={style.infoCard}>
          <h3 className={style.infoHeading}>Información Directa</h3>
          <p className={style.infoText}>
            Estoy disponible para proyectos freelance, puestos Full Stack / Frontend y colaboraciones.
          </p>

          <div className={style.contactList}>
            <a href="mailto:leandrobrangi@gmail.com" className={style.contactItem}>
              <div className={style.iconBadge}>
                <icons.AlternateEmailIcon />
              </div>
              <div>
                <span className={style.itemLabel}>Correo electrónico</span>
                <span className={style.itemVal}>leandrobrangi@gmail.com</span>
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=543513780700"
              target="_blank"
              rel="noopener noreferrer"
              className={style.contactItem}
            >
              <div className={style.iconBadge}>
                <icons.WhatsAppIcon />
              </div>
              <div>
                <span className={style.itemLabel}>WhatsApp</span>
                <span className={style.itemVal}>+54 9 351 378-0700</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/leandro-brangi/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.contactItem}
            >
              <div className={style.iconBadge}>
                <icons.LinkedInIcon />
              </div>
              <div>
                <span className={style.itemLabel}>LinkedIn</span>
                <span className={style.itemVal}>in/leandro-brangi</span>
              </div>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className={style.formCard}>
          <form ref={form} onSubmit={sendEmail} className={style.form}>
            <div className={style.inputGroup}>
              <label htmlFor="user_name">Nombre completo</label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <span className={style.errorMsg}>{error.name}</span>}
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="user_email">Email</label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <span className={style.errorMsg}>{error.email}</span>}
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="motive">Asunto / Motivo</label>
              <input
                id="motive"
                type="text"
                name="motive"
                placeholder="Propuesta de trabajo, consulta, etc."
                value={motive}
                onChange={(e) => setMotive(e.target.value)}
              />
              {error.motive && <span className={style.errorMsg}>{error.motive}</span>}
            </div>

            <div className={style.inputGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={300}
                placeholder="Escribe tu mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {error.message && <span className={style.errorMsg}>{error.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className={style.submitBtn}>
              <span>{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</span>
              <icons.RocketLaunchIcon />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className={style.footer}>
        <p>© {new Date().getFullYear()} Leandro Brangi | Desarrollado con React, TypeScript y CSS Modules.</p>
      </footer>
    </section>
  );
};
