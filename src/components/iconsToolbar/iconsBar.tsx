import React from "react";
import style from "./iconsBar.module.css";
import { onClickTo, NavbarProps } from "../../utils/functionSections";
import { icons } from "../../utils/icons";

export const IconBar: React.FC<NavbarProps> = ({ contactRef }) => {
  return (
    <ul className={style.bar} aria-label="Redes sociales">
      <li>
        <a 
          href="https://www.linkedin.com/in/leandro-brangi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <icons.LinkedInIcon />
        </a>
      </li>

      <li>
        <a 
          href="https://github.com/Deamond-Hero" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub"
          aria-label="GitHub"
        >
          <icons.GitHubIcon />
        </a>
      </li>

      <li>
        <a 
          href="#" 
          onClick={onClickTo(contactRef)} 
          title="Contacto por email"
          aria-label="Contacto por email"
        >
          <icons.AlternateEmailIcon />
        </a>
      </li>

      <li>
        <a 
          href="https://api.whatsapp.com/send?phone=543513780700" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <icons.WhatsAppIcon />
        </a>
      </li>
    </ul>
  );
};